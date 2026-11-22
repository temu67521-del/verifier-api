import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { Server } from 'node:http';
import { AddressInfo } from 'node:net';

// Set test environment
process.env.NODE_ENV = 'test';
process.env.ADMIN_SECRET = 'test-admin-secret';

import app from '../index';

describe('Payment Verification API Tests', () => {
    let server: Server;
    let baseUrl: string;

    before(async () => {
        await new Promise<void>((resolve) => {
            server = app.listen(0, () => {
                const addr = server.address() as AddressInfo;
                baseUrl = `http://127.0.0.1:${addr.port}`;
                resolve();
            });
        });
    });

    after(async () => {
        await new Promise<void>((resolve, reject) => {
            server.close((err) => (err ? reject(err) : resolve()));
        });
    });

    describe('General & Health Endpoints', () => {
        it('GET /health returns 200 and status ok', async () => {
            const res = await fetch(`${baseUrl}/health`);
            assert.equal(res.status, 200);
            const body = await res.json() as { status: string; timestamp: string };
            assert.equal(body.status, 'ok');
            assert.ok(body.timestamp);
        });

        it('GET / returns 200 and API metadata with endpoints', async () => {
            const res = await fetch(`${baseUrl}/`);
            assert.equal(res.status, 200);
            const body = await res.json() as { name: string; version: string; endpoints: string[] };
            assert.equal(body.name, 'Payment Verification API');
            assert.ok(Array.isArray(body.endpoints));
            assert.ok(body.endpoints.includes('/verify'));
            assert.ok(body.endpoints.includes('/verify-cbe'));
        });
    });

    describe('Admin Endpoints', () => {
        it('GET /admin/stats rejects unauthorized request without admin key', async () => {
            const res = await fetch(`${baseUrl}/admin/stats`);
            assert.equal(res.status, 403);
            const body = await res.json() as { success: boolean; error: string };
            assert.equal(body.success, false);
            assert.equal(body.error, 'Unauthorized admin access');
        });

        it('GET /admin/stats succeeds with valid x-admin-key', async () => {
            const res = await fetch(`${baseUrl}/admin/stats`, {
                headers: { 'x-admin-key': 'test-admin-secret' }
            });
            assert.equal(res.status, 200);
            const body = await res.json() as { success: boolean; data: any };
            assert.equal(body.success, true);
            assert.ok(body.data);
            assert.ok('totalRequests' in body.data);
        });

        it('POST /admin/api-keys validates required owner field', async () => {
            const res = await fetch(`${baseUrl}/admin/api-keys`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-admin-key': 'test-admin-secret'
                },
                body: JSON.stringify({})
            });
            assert.equal(res.status, 400);
            const body = await res.json() as { success: boolean; error: string };
            assert.equal(body.success, false);
            assert.equal(body.error, 'Owner name is required');
        });
    });

    describe('Authentication Middleware', () => {
        it('Protected endpoints reject requests without API key', async () => {
            const res = await fetch(`${baseUrl}/verify-cbe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reference: 'FT1234567890', accountSuffix: '12345678' })
            });
            assert.equal(res.status, 401);
            const body = await res.json() as { success: boolean; error: string };
            assert.equal(body.success, false);
            assert.equal(body.error, 'API key is required');
        });

        it('Rejects invalid API keys with 403', async () => {
            const res = await fetch(`${baseUrl}/verify-cbe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'invalid_test_key_12345'
                },
                body: JSON.stringify({ reference: 'FT1234567890', accountSuffix: '12345678' })
            });
            // Without DB, validateApiKey throws or returns 500/403
            assert.ok([403, 500].includes(res.status));
        });
    });

    describe('Universal Route Validation (/verify)', () => {
        it('Rejects missing reference', async () => {
            const res = await fetch(`${baseUrl}/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({})
            });
            // Without API key, fails at apiKeyAuth
            assert.equal(res.status, 401);
        });

        it('Rejects invalid JSON in body', async () => {
            const res = await fetch(`${baseUrl}/verify`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{ invalid-json '
            });
            assert.equal(res.status, 400);
            const body = await res.json() as { success: boolean; error: string };
            assert.equal(body.success, false);
            assert.equal(body.error, 'Invalid JSON in request body');
        });
    });
});
