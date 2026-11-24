export function getLandingPageHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ethiopian Payment Verification API - Telebirr, CBE & Banks</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡</text></svg>">
    <style>
        :root {
            --bg: #090d16;
            --surface: #111827;
            --surface-hover: #1f2937;
            --surface-card: #141e33;
            --border: #24324f;
            --border-focus: #3b82f6;
            --primary: #2563eb;
            --primary-hover: #1d4ed8;
            --accent: #10b981;
            --accent-bg: rgba(16, 185, 129, 0.12);
            --danger: #ef4444;
            --danger-bg: rgba(239, 68, 68, 0.12);
            --warning: #f59e0b;
            --text: #f9fafb;
            --text-muted: #94a3b8;
            --text-dim: #64748b;
            --code-bg: #070b14;
            --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: var(--font);
            background: var(--bg);
            color: var(--text);
            line-height: 1.5;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: 1040px;
            margin: 0 auto;
            padding: 1.5rem;
            width: 100%;
        }

        header {
            border-bottom: 1px solid var(--border);
            padding: 1rem 0;
            background: rgba(17, 24, 39, 0.85);
            backdrop-filter: blur(12px);
            position: sticky;
            top: 0;
            z-index: 20;
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 0.65rem;
            font-weight: 700;
            font-size: 1.2rem;
            text-decoration: none;
            color: var(--text);
            letter-spacing: -0.01em;
        }

        .brand-icon {
            width: 32px;
            height: 32px;
            background: linear-gradient(135deg, #2563eb, #10b981);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.1rem;
        }

        .badge-live {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.75rem;
            padding: 0.25rem 0.65rem;
            border-radius: 9999px;
            font-weight: 600;
            background: var(--accent-bg);
            color: var(--accent);
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .badge-live::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 8px var(--accent);
        }

        .hero {
            text-align: center;
            padding: 2rem 0 1.5rem;
        }

        .hero h1 {
            font-size: 2.2rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            margin-bottom: 0.65rem;
            background: linear-gradient(135deg, #ffffff 30%, #60a5fa 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            color: var(--text-muted);
            font-size: 1.05rem;
            max-width: 620px;
            margin: 0 auto 1.25rem;
        }

        .sample-bar {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
        }

        .sample-label {
            font-size: 0.8rem;
            color: var(--text-dim);
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .sample-btn {
            background: var(--surface);
            border: 1px solid var(--border);
            color: #93c5fd;
            padding: 0.35rem 0.75rem;
            border-radius: 6px;
            font-size: 0.8rem;
            font-family: monospace;
            cursor: pointer;
            transition: all 0.2s;
        }

        .sample-btn:hover {
            background: var(--surface-hover);
            border-color: var(--primary);
            color: #ffffff;
            transform: translateY(-1px);
        }

        .card {
            background: var(--surface-card);
            border: 1px solid var(--border);
            border-radius: 14px;
            padding: 1.75rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
            margin-bottom: 2rem;
        }

        .tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.75rem;
        }

        .tab-btn {
            background: transparent;
            border: 1px solid transparent;
            color: var(--text-muted);
            padding: 0.45rem 0.85rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s;
        }

        .tab-btn:hover {
            color: var(--text);
            background: var(--surface-hover);
        }

        .tab-btn.active {
            background: var(--primary);
            color: #ffffff;
            border-color: var(--primary);
            box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        @media (min-width: 640px) {
            .form-grid.multi {
                grid-template-columns: 1fr 1fr;
            }
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }

        .form-group label {
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--text);
        }

        .form-control {
            width: 100%;
            padding: 0.75rem 1rem;
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text);
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s;
        }

        .form-control:focus {
            border-color: var(--border-focus);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        .btn-submit {
            background: linear-gradient(135deg, #2563eb, #1d4ed8);
            color: #ffffff;
            border: none;
            padding: 0.85rem 1.5rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.2s;
            margin-top: 1.25rem;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
        }

        .btn-submit:hover:not(:disabled) {
            background: linear-gradient(135deg, #1d4ed8, #1e40af);
            transform: translateY(-1px);
        }

        .btn-submit:disabled {
            opacity: 0.65;
            cursor: not-allowed;
            transform: none;
        }

        /* Result Container */
        .result-container {
            margin-top: 1.5rem;
            display: none;
        }

        /* Receipt Card Styles */
        .receipt-card {
            background: #0f172a;
            border: 1px solid #334155;
            border-radius: 12px;
            padding: 1.5rem;
            position: relative;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
            animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .receipt-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px dashed #334155;
            padding-bottom: 1rem;
            margin-bottom: 1.25rem;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .receipt-title {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.1rem;
            font-weight: 700;
            color: #f8fafc;
        }

        .status-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            padding: 0.3rem 0.8rem;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .status-pill.success {
            background: rgba(16, 185, 129, 0.15);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.4);
        }

        .status-pill.failed {
            background: rgba(239, 68, 68, 0.15);
            color: #ef4444;
            border: 1px solid rgba(239, 68, 68, 0.4);
        }

        .amount-hero {
            text-align: center;
            padding: 1rem 0;
            background: rgba(15, 23, 42, 0.6);
            border-radius: 10px;
            margin-bottom: 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .amount-label {
            font-size: 0.8rem;
            text-transform: uppercase;
            color: var(--text-dim);
            font-weight: 600;
            letter-spacing: 0.05em;
        }

        .amount-value {
            font-size: 2.2rem;
            font-weight: 800;
            color: #38bdf8;
            letter-spacing: -0.02em;
        }

        .amount-sub {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-top: 0.2rem;
        }

        .receipt-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
            margin-bottom: 1.25rem;
        }

        .grid-item {
            background: #1e293b;
            padding: 0.85rem 1rem;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .grid-item-label {
            font-size: 0.75rem;
            color: var(--text-dim);
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0.25rem;
        }

        .grid-item-value {
            font-size: 0.95rem;
            font-weight: 600;
            color: #f1f5f9;
            word-break: break-word;
        }

        .receipt-actions {
            display: flex;
            gap: 0.75rem;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        .action-btn {
            background: #1e293b;
            border: 1px solid var(--border);
            color: var(--text-muted);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
        }

        .action-btn:hover {
            color: #ffffff;
            border-color: var(--primary);
            background: var(--surface-hover);
        }

        /* JSON Drawer */
        .json-box {
            display: none;
            margin-top: 1rem;
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1rem;
            max-height: 280px;
            overflow: auto;
            font-family: monospace;
            font-size: 0.85rem;
            color: #38bdf8;
            white-space: pre-wrap;
            word-break: break-all;
        }

        /* Error Banner */
        .error-card {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            border-radius: 10px;
            padding: 1.25rem;
            display: none;
            margin-top: 1.5rem;
        }

        .error-card h3 {
            color: #f87171;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.4rem;
        }

        .error-card p {
            color: #fca5a5;
            font-size: 0.9rem;
        }

        /* Supported Providers Cards */
        .platforms-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }

        .platform-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 1.15rem;
            transition: border-color 0.2s;
        }

        .platform-card:hover {
            border-color: var(--primary);
        }

        .platform-name {
            font-weight: 700;
            font-size: 0.95rem;
            margin-bottom: 0.35rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .platform-desc {
            font-size: 0.8rem;
            color: var(--text-dim);
            line-height: 1.4;
        }

        footer {
            margin-top: auto;
            border-top: 1px solid var(--border);
            padding: 1.5rem 0;
            text-align: center;
            color: var(--text-dim);
            font-size: 0.85rem;
        }

        .spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: #ffffff;
            animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <header>
        <div class="container nav-content">
            <a href="/" class="brand">
                <div class="brand-icon">⚡</div>
                <span>Verifier API</span>
            </a>
            <div class="badge-live">Live Verification Playground</div>
        </div>
    </header>

    <main class="container">
        <section class="hero">
            <h1>Payment Verification Portal</h1>
            <p>Instant verification for Ethiopian digital transactions: Telebirr, CBE, Dashen, Bank of Abyssinia, CBE Birr & M-Pesa.</p>

            <div class="sample-bar">
                <span class="sample-label">Quick Test:</span>
                <button type="button" class="sample-btn" onclick="fillSample('telebirr', 'DKN1K1R47H')">
                    ⚡ Telebirr: DKN1K1R47H
                </button>
            </div>
        </section>

        <section class="card">
            <div class="tabs">
                <button type="button" class="tab-btn active" data-provider="universal">✨ Automatic (Universal)</button>
                <button type="button" class="tab-btn" data-provider="telebirr">🔶 Telebirr</button>
                <button type="button" class="tab-btn" data-provider="cbe">🔷 CBE</button>
                <button type="button" class="tab-btn" data-provider="dashen">🔷 Dashen Bank</button>
                <button type="button" class="tab-btn" data-provider="abyssinia">🔶 Abyssinia</button>
                <button type="button" class="tab-btn" data-provider="cbebirr">🔷 CBE Birr</button>
                <button type="button" class="tab-btn" data-provider="mpesa">🦁 M-Pesa</button>
            </div>

            <form id="verifyForm">
                <div class="form-grid" id="formFieldsGrid">
                    <div class="form-group">
                        <label for="inputReference" id="labelReference">Transaction Reference / Receipt Number</label>
                        <input type="text" id="inputReference" class="form-control" placeholder="e.g. DKN1K1R47H" required autofocus>
                    </div>

                    <div class="form-group" id="groupSuffix" style="display: none;">
                        <label for="inputSuffix" id="labelSuffix">Account Suffix (Digits)</label>
                        <input type="text" id="inputSuffix" class="form-control" placeholder="e.g. 12345678">
                    </div>

                    <div class="form-group" id="groupPhone" style="display: none;">
                        <label for="inputPhone">Phone Number (251xxxxxxxxx)</label>
                        <input type="text" id="inputPhone" class="form-control" placeholder="e.g. 251912345678">
                    </div>
                </div>

                <button type="submit" id="submitBtn" class="btn-submit">
                    <span>Verify Transaction</span>
                </button>
            </form>

            <!-- Error Banner -->
            <div class="error-card" id="errorCard">
                <h3 id="errorTitle">❌ Verification Failed</h3>
                <p id="errorMessage"></p>
            </div>

            <!-- Receipt Result Display -->
            <div class="result-container" id="resultContainer">
                <div class="receipt-card">
                    <div class="receipt-header">
                        <div class="receipt-title">
                            <span id="receiptIcon">📱</span>
                            <span id="receiptProviderName">Telebirr Receipt</span>
                        </div>
                        <div class="status-pill success" id="statusPill">
                            <span>✔ Completed</span>
                        </div>
                    </div>

                    <div class="amount-hero">
                        <div class="amount-label">Settled Amount</div>
                        <div class="amount-value" id="amountDisplay">10.00 Birr</div>
                        <div class="amount-sub" id="amountSubDisplay">Total Paid: 11.00 Birr (Fee: 0.87 + 0.13 VAT)</div>
                    </div>

                    <div class="receipt-grid">
                        <div class="grid-item">
                            <div class="grid-item-label">Receipt / Reference</div>
                            <div class="grid-item-value" id="resRef">--</div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-label">Payer (Sender)</div>
                            <div class="grid-item-value" id="resPayer">--</div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-label">Payer Account / Phone</div>
                            <div class="grid-item-value" id="resPayerAcc">--</div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-label">Beneficiary (Receiver)</div>
                            <div class="grid-item-value" id="resReceiver">--</div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-label">Receiver Account / Phone</div>
                            <div class="grid-item-value" id="resReceiverAcc">--</div>
                        </div>
                        <div class="grid-item">
                            <div class="grid-item-label">Payment Date & Time</div>
                            <div class="grid-item-value" id="resDate">--</div>
                        </div>
                    </div>

                    <div class="receipt-actions">
                        <button type="button" class="action-btn" id="copySummaryBtn" onclick="copyReceiptSummary()">
                            📋 Copy Summary
                        </button>
                        <button type="button" class="action-btn" id="toggleJsonBtn" onclick="toggleRawJson()">
                            { } Toggle Raw JSON
                        </button>
                    </div>

                    <div class="json-box" id="rawJsonBox"></div>
                </div>
            </div>
        </section>

        <section>
            <h2 style="font-size: 1.15rem; margin-bottom: 1rem; color: #cbd5e1;">Supported Payment Platforms</h2>
            <div class="platforms-grid">
                <div class="platform-card">
                    <div class="platform-name">🔶 Telebirr</div>
                    <div class="platform-desc">10-character alphanumeric transaction reference (e.g. DKN1K1R47H).</div>
                </div>
                <div class="platform-card">
                    <div class="platform-name">🔷 CBE</div>
                    <div class="platform-desc">12-char reference starting with FT + 8-digit beneficiary account suffix.</div>
                </div>
                <div class="platform-card">
                    <div class="platform-name">🔷 Dashen Bank</div>
                    <div class="platform-desc">16-character reference number starting with 3 digits.</div>
                </div>
                <div class="platform-card">
                    <div class="platform-name">🔶 Bank of Abyssinia</div>
                    <div class="platform-desc">12-char reference starting with FT + 5-digit account suffix.</div>
                </div>
                <div class="platform-card">
                    <div class="platform-name">🔷 CBE Birr</div>
                    <div class="platform-desc">10-digit transaction reference + Ethiopian phone number.</div>
                </div>
                <div class="platform-card">
                    <div class="platform-name">🦁 M-Pesa</div>
                    <div class="platform-desc">Safaricom M-Pesa receipt verification reference code.</div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>Ethiopian Payment Verification API &bull; Hosted on Render &bull; <a href="https://github.com/temu67521-del/verifier-api" target="_blank" style="color: #60a5fa; text-decoration: none;">GitHub Repository</a></p>
        </div>
    </footer>

    <script>
        let currentProvider = 'universal';
        let latestReceiptData = null;

        const tabs = document.querySelectorAll('.tab-btn');
        const formFieldsGrid = document.getElementById('formFieldsGrid');
        const groupSuffix = document.getElementById('groupSuffix');
        const groupPhone = document.getElementById('groupPhone');
        const labelReference = document.getElementById('labelReference');
        const labelSuffix = document.getElementById('labelSuffix');
        const inputReference = document.getElementById('inputReference');
        const inputSuffix = document.getElementById('inputSuffix');
        const inputPhone = document.getElementById('inputPhone');
        const submitBtn = document.getElementById('submitBtn');
        const resultContainer = document.getElementById('resultContainer');
        const errorCard = document.getElementById('errorCard');
        const rawJsonBox = document.getElementById('rawJsonBox');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                currentProvider = tab.dataset.provider;
                updateFields();
            });
        });

        function updateFields() {
            if (currentProvider === 'cbe') {
                groupSuffix.style.display = 'flex';
                labelSuffix.textContent = 'Account Suffix (8 digits)';
                inputSuffix.placeholder = 'e.g. 12345678';
                inputSuffix.required = true;
                groupPhone.style.display = 'none';
                formFieldsGrid.classList.add('multi');
            } else if (currentProvider === 'abyssinia') {
                groupSuffix.style.display = 'flex';
                labelSuffix.textContent = 'Account Suffix (5 digits)';
                inputSuffix.placeholder = 'e.g. 90172';
                inputSuffix.required = true;
                groupPhone.style.display = 'none';
                formFieldsGrid.classList.add('multi');
            } else if (currentProvider === 'cbebirr') {
                groupSuffix.style.display = 'none';
                inputSuffix.required = false;
                groupPhone.style.display = 'flex';
                formFieldsGrid.classList.add('multi');
            } else if (currentProvider === 'universal') {
                groupSuffix.style.display = 'flex';
                labelSuffix.textContent = 'Account Suffix (If CBE 8 digits / Abyssinia 5 digits)';
                inputSuffix.placeholder = 'Leave blank for Telebirr / Dashen';
                inputSuffix.required = false;
                groupPhone.style.display = 'none';
                formFieldsGrid.classList.add('multi');
            } else {
                groupSuffix.style.display = 'none';
                groupPhone.style.display = 'none';
                inputSuffix.required = false;
                formFieldsGrid.classList.remove('multi');
            }
        }

        function fillSample(provider, ref) {
            tabs.forEach(tab => {
                if (tab.dataset.provider === provider) {
                    tab.click();
                }
            });
            inputReference.value = ref;
            document.getElementById('verifyForm').dispatchEvent(new Event('submit'));
        }

        document.getElementById('verifyForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            errorCard.style.display = 'none';
            resultContainer.style.display = 'none';
            rawJsonBox.style.display = 'none';

            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner"></span><span>Verifying with network...</span>';

            const ref = inputReference.value.trim();
            const suffix = inputSuffix.value.trim();
            const phone = inputPhone.value.trim();

            let endpoint = '/verify';
            let body = {};

            if (currentProvider === 'universal') {
                endpoint = '/verify';
                body.reference = ref;
                if (suffix) body.suffix = suffix;
                if (phone) body.phoneNumber = phone;
            } else if (currentProvider === 'telebirr') {
                endpoint = '/verify-telebirr';
                body = { reference: ref };
            } else if (currentProvider === 'cbe') {
                endpoint = '/verify-cbe';
                body = { reference: ref, accountSuffix: suffix };
            } else if (currentProvider === 'dashen') {
                endpoint = '/verify-dashen';
                body = { reference: ref };
            } else if (currentProvider === 'abyssinia') {
                endpoint = '/verify-abyssinia';
                body = { reference: ref, suffix: suffix };
            } else if (currentProvider === 'cbebirr') {
                endpoint = '/verify-cbebirr';
                body = { receiptNumber: ref, phoneNumber: phone };
            } else if (currentProvider === 'mpesa') {
                endpoint = '/verify-mpesa';
                body = { reference: ref };
            }

            try {
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-verifier-source': 'web-ui'
                    },
                    body: JSON.stringify(body)
                });

                const json = await res.json();
                latestReceiptData = json;

                if (!res.ok || json.success === false) {
                    const errMsg = json.error || json.message || ('Server responded with status ' + res.status);
                    showError('Verification Failed', errMsg);
                    return;
                }

                renderReceipt(json, ref);
            } catch (err) {
                showError('Network / Connection Error', err.message || 'Could not connect to the verification server.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Verify Transaction</span>';
            }
        });

        function renderReceipt(json, ref) {
            const data = json.data || json;

            // Provider title
            const provName = currentProvider === 'telebirr' || (data.payerTelebirrNo || data.receiptNo)
                ? 'Telebirr Mobile Money'
                : (currentProvider === 'cbe' ? 'Commercial Bank of Ethiopia' : 'Bank Transaction');
            document.getElementById('receiptProviderName').textContent = provName + ' Receipt';

            // Status
            const isCompleted = (data.transactionStatus && data.transactionStatus.toLowerCase().includes('complete')) || json.success === true;
            const statusPill = document.getElementById('statusPill');
            statusPill.className = 'status-pill ' + (isCompleted ? 'success' : 'failed');
            statusPill.textContent = isCompleted ? '✔ Completed' : (data.transactionStatus || 'Unverified');

            // Amount
            const settled = data.settledAmount || (data.amount ? data.amount + ' Birr' : (data.transactionAmount ? data.transactionAmount + ' Birr' : ''));
            const total = data.totalPaidAmount || (data.total ? data.total + ' Birr' : '');
            const fee = data.serviceFee || data.serviceCharge || '';
            const vat = data.serviceFeeVAT || data.vat || '';

            document.getElementById('amountDisplay').textContent = settled || total || 'Verified';

            let subText = '';
            if (total && total !== settled) {
                subText += 'Total Paid: ' + total;
            }
            if (fee) {
                subText += (subText ? ' &bull; ' : '') + 'Fee: ' + fee;
                if (vat) subText += ' (VAT: ' + vat + ')';
            }
            document.getElementById('amountSubDisplay').innerHTML = subText || 'Transaction verified successfully';

            // Key value grid
            document.getElementById('resRef').textContent = data.receiptNo || data.reference || data.transactionReference || ref || '--';
            document.getElementById('resPayer').textContent = data.payerName || data.payer || data.senderName || '--';
            document.getElementById('resPayerAcc').textContent = data.payerTelebirrNo || data.payerAccount || data.senderAccountNumber || '--';
            document.getElementById('resReceiver').textContent = data.creditedPartyName || data.receiver || data.receiverName || '--';
            document.getElementById('resReceiverAcc').textContent = data.creditedPartyAccountNo || data.receiverAccount || data.phoneNo || '--';
            document.getElementById('resDate').textContent = data.paymentDate || data.transactionDate || data.date || '--';

            // Raw JSON
            rawJsonBox.textContent = JSON.stringify(json, null, 2);

            resultContainer.style.display = 'block';
            resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function showError(title, msg) {
            document.getElementById('errorTitle').textContent = '❌ ' + title;
            document.getElementById('errorMessage').textContent = msg;
            errorCard.style.display = 'block';
            errorCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function toggleRawJson() {
            if (rawJsonBox.style.display === 'block') {
                rawJsonBox.style.display = 'none';
            } else {
                rawJsonBox.style.display = 'block';
            }
        }

        function copyReceiptSummary() {
            if (!latestReceiptData) return;
            const d = latestReceiptData.data || latestReceiptData;
            const text = [
                'Payment Verification Summary',
                '-----------------------------',
                'Status: ' + (d.transactionStatus || 'Completed'),
                'Reference: ' + (d.receiptNo || d.reference || d.transactionReference || inputReference.value.trim()),
                'Payer: ' + (d.payerName || d.payer || d.senderName || 'N/A'),
                'Payer Account: ' + (d.payerTelebirrNo || d.payerAccount || d.senderAccountNumber || 'N/A'),
                'Receiver: ' + (d.creditedPartyName || d.receiver || d.receiverName || 'N/A'),
                'Receiver Account: ' + (d.creditedPartyAccountNo || d.receiverAccount || d.phoneNo || 'N/A'),
                'Amount: ' + (d.settledAmount || d.amount || d.totalPaidAmount || 'N/A'),
                'Date: ' + (d.paymentDate || d.transactionDate || d.date || 'N/A')
            ].join('\\n');

            navigator.clipboard.writeText(text);
            const btn = document.getElementById('copySummaryBtn');
            btn.textContent = '✔ Copied Summary!';
            setTimeout(() => { btn.textContent = '📋 Copy Summary'; }, 2000);
        }

        updateFields();
    </script>
</body>
</html>`;
}
