import { PrismaClient } from '@prisma/client';
import logger from './logger';

// Declare global variable for PrismaClient
declare global {
    var prisma: PrismaClient | undefined;
}

// Create a singleton Prisma client that can be shared across files
export const prisma = global.prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});

// Prevent multiple instances during hot reloading in development
if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

// Handle Prisma connection events with proper safety checks
try {
    (prisma as any).$on?.('query', (e: { query: string; duration: number }) => {
        if (process.env.NODE_ENV === 'development') {
            logger.debug(`Query: ${e.query}`);
            logger.debug(`Duration: ${e.duration}ms`);
        }
    });

    (prisma as any).$on?.('error', (e: Error) => {
        logger.error('Prisma error:', e);
    });
} catch {
    // Ignore event registration if events are not configured on the client
}

// Graceful shutdown function to close Prisma connections
export const disconnectPrisma = async () => {
    await prisma.$disconnect();
    logger.info('Disconnected from database');
};