export function getLandingPageHtml(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Verification API - Ethiopian Banks & Mobile Money</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💳</text></svg>">
    <style>
        :root {
            --bg: #0b0f19;
            --surface: #131b2e;
            --surface-hover: #1c2742;
            --border: #233052;
            --primary: #3b82f6;
            --primary-hover: #2563eb;
            --accent: #10b981;
            --text: #f1f5f9;
            --text-muted: #94a3b8;
            --code-bg: #070a12;
            --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: var(--font);
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 2rem 1.5rem;
            width: 100%;
        }

        header {
            border-bottom: 1px solid var(--border);
            padding: 1rem 0;
            background: rgba(19, 27, 46, 0.7);
            backdrop-filter: blur(8px);
            position: sticky;
            top: 0;
            z-index: 10;
        }

        .nav-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 700;
            font-size: 1.25rem;
            text-decoration: none;
            color: var(--text);
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            font-size: 0.75rem;
            padding: 0.25rem 0.65rem;
            border-radius: 9999px;
            font-weight: 500;
            background: rgba(16, 185, 129, 0.15);
            color: var(--accent);
            border: 1px solid rgba(16, 185, 129, 0.3);
        }

        .badge-dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--accent);
            box-shadow: 0 0 8px var(--accent);
        }

        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            margin-left: 1.5rem;
            font-size: 0.9rem;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: var(--text);
        }

        .hero {
            text-align: center;
            padding: 3rem 0 2rem;
        }

        .hero h1 {
            font-size: 2.5rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #ffffff 0%, #93c5fd 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero p {
            color: var(--text-muted);
            font-size: 1.15rem;
            max-width: 650px;
            margin: 0 auto 1.5rem;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }

        .card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .card h2 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .tabs {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
            padding-bottom: 0.75rem;
        }

        .tab-btn {
            background: transparent;
            border: 1px solid transparent;
            color: var(--text-muted);
            padding: 0.5rem 0.9rem;
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
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group label {
            display: block;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 0.35rem;
            color: var(--text);
        }

        .form-control {
            width: 100%;
            padding: 0.65rem 0.9rem;
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            color: var(--text);
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s;
        }

        .form-control:focus {
            border-color: var(--primary);
        }

        .btn {
            background: var(--primary);
            color: #ffffff;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: background 0.2s;
        }

        .btn:hover {
            background: var(--primary-hover);
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        .result-box {
            background: var(--code-bg);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1rem;
            margin-top: 1.5rem;
            min-height: 180px;
            max-height: 380px;
            overflow: auto;
            font-family: monospace;
            font-size: 0.85rem;
            white-space: pre-wrap;
            word-break: break-all;
            color: #38bdf8;
            position: relative;
        }

        .providers-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 1rem;
        }

        .provider-item {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: 8px;
            padding: 1rem;
            font-size: 0.9rem;
        }

        .provider-name {
            font-weight: 700;
            margin-bottom: 0.25rem;
            color: var(--text);
        }

        .provider-desc {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        footer {
            margin-top: auto;
            border-top: 1px solid var(--border);
            padding: 1.5rem 0;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.85rem;
        }

        .copy-btn {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--surface);
            border: 1px solid var(--border);
            color: var(--text-muted);
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            cursor: pointer;
        }

        .copy-btn:hover {
            color: var(--text);
        }
    </style>
</head>
<body>
    <header>
        <div class="container nav-content">
            <a href="/" class="brand">
                <span>💳</span>
                <span>Verifier API</span>
                <span class="badge"><span class="badge-dot"></span> Live</span>
            </a>
            <div class="nav-links">
                <a href="#playground">Playground</a>
                <a href="#providers">Providers</a>
                <a href="/health" target="_blank">Health</a>
                <a href="https://github.com/temu67521-del/verifier-api" target="_blank">GitHub</a>
            </div>
        </div>
    </header>

    <main class="container">
        <section class="hero">
            <h1>Ethiopian Payment Verification API</h1>
            <p>Unified, high-speed verification engine for Commercial Bank of Ethiopia (CBE), Telebirr, Dashen Bank, Bank of Abyssinia, CBE Birr, and M-Pesa transactions.</p>
        </section>

        <section id="playground" class="card">
            <h2>⚡ Live Verification Playground</h2>
            <div class="tabs" id="providerTabs">
                <button class="tab-btn active" data-provider="universal">Universal Router (/verify)</button>
                <button class="tab-btn" data-provider="cbe">CBE Bank</button>
                <button class="tab-btn" data-provider="telebirr">Telebirr</button>
                <button class="tab-btn" data-provider="dashen">Dashen Bank</button>
                <button class="tab-btn" data-provider="abyssinia">Bank of Abyssinia</button>
                <button class="tab-btn" data-provider="cbebirr">CBE Birr</button>
                <button class="tab-btn" data-provider="mpesa">M-Pesa</button>
            </div>

            <form id="verifyForm">
                <div class="form-group" id="groupReference">
                    <label id="labelReference" for="inputReference">Transaction Reference</label>
                    <input type="text" id="inputReference" class="form-control" placeholder="e.g. FT23062669JJ, CE12345678, or 16-digit Dashen ref" required>
                </div>

                <div class="form-group" id="groupSuffix" style="display: none;">
                    <label id="labelSuffix" for="inputSuffix">Account Suffix</label>
                    <input type="text" id="inputSuffix" class="form-control" placeholder="e.g. 12345678 (8 digits for CBE) or 12345 (5 digits for Abyssinia)">
                </div>

                <div class="form-group" id="groupPhone" style="display: none;">
                    <label for="inputPhone">Phone Number (251...)</label>
                    <input type="text" id="inputPhone" class="form-control" placeholder="e.g. 251911223344">
                </div>

                <div class="form-group">
                    <label for="inputApiKey">API Key (Optional / x-api-key)</label>
                    <input type="text" id="inputApiKey" class="form-control" placeholder="Optional if unauthenticated or testing admin endpoints">
                </div>

                <button type="submit" id="submitBtn" class="btn">
                    <span>Verify Transaction</span>
                </button>
            </form>

            <div class="result-box" id="resultBox">
                <button class="copy-btn" id="copyBtn" onclick="copyResult()">Copy</button>
                <span id="resultText">// Verification response will appear here in real-time...</span>
            </div>
        </section>

        <section id="providers" style="margin-top: 3rem;">
            <h2>Supported Platforms</h2>
            <div class="providers-list">
                <div class="provider-item">
                    <div class="provider-name">🔷 Commercial Bank of Ethiopia (CBE)</div>
                    <div class="provider-desc">12-char reference starting with FT + 8-digit account suffix.</div>
                </div>
                <div class="provider-item">
                    <div class="provider-name">🔶 Telebirr Mobile Money</div>
                    <div class="provider-desc">10-character alphanumeric transaction number.</div>
                </div>
                <div class="provider-item">
                    <div class="provider-name">🔷 Dashen Bank</div>
                    <div class="provider-desc">16-character reference starting with 3 digits.</div>
                </div>
                <div class="provider-item">
                    <div class="provider-name">🔶 Bank of Abyssinia</div>
                    <div class="provider-desc">12-char reference starting with FT + 5-digit account suffix.</div>
                </div>
                <div class="provider-item">
                    <div class="provider-name">🔷 CBE Birr</div>
                    <div class="provider-desc">10-character receipt reference + 12-digit Ethiopian phone number.</div>
                </div>
                <div class="provider-item">
                    <div class="provider-name">🦁 Safaricom M-Pesa</div>
                    <div class="provider-desc">Receipt reference code via dedicated endpoint.</div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>Payment Verification API &bull; Deployed on Render &bull; <a href="https://github.com/temu67521-del/verifier-api" target="_blank" style="color: var(--primary);">View on GitHub</a></p>
        </div>
    </footer>

    <script>
        let currentProvider = 'universal';
        const tabs = document.querySelectorAll('.tab-btn');
        const groupSuffix = document.getElementById('groupSuffix');
        const groupPhone = document.getElementById('groupPhone');
        const labelSuffix = document.getElementById('labelSuffix');
        const inputReference = document.getElementById('inputReference');
        const inputSuffix = document.getElementById('inputSuffix');
        const inputPhone = document.getElementById('inputPhone');
        const inputApiKey = document.getElementById('inputApiKey');
        const resultText = document.getElementById('resultText');
        const submitBtn = document.getElementById('submitBtn');

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
                groupSuffix.style.display = 'block';
                labelSuffix.textContent = 'Account Suffix (8 digits)';
                inputSuffix.placeholder = 'e.g. 12345678';
                groupPhone.style.display = 'none';
            } else if (currentProvider === 'abyssinia') {
                groupSuffix.style.display = 'block';
                labelSuffix.textContent = 'Account Suffix (5 digits)';
                inputSuffix.placeholder = 'e.g. 90172';
                groupPhone.style.display = 'none';
            } else if (currentProvider === 'cbebirr') {
                groupSuffix.style.display = 'none';
                groupPhone.style.display = 'block';
            } else if (currentProvider === 'universal') {
                groupSuffix.style.display = 'block';
                labelSuffix.textContent = 'Account Suffix (Optional: for CBE / Abyssinia)';
                inputSuffix.placeholder = '8 digits (CBE) or 5 digits (Abyssinia)';
                groupPhone.style.display = 'block';
            } else {
                groupSuffix.style.display = 'none';
                groupPhone.style.display = 'none';
            }
        }

        document.getElementById('verifyForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Verifying...</span>';
            resultText.textContent = 'Contacting server...';

            let endpoint = '/verify';
            let body = {};

            const ref = inputReference.value.trim();
            const suffix = inputSuffix.value.trim();
            const phone = inputPhone.value.trim();
            const apiKey = inputApiKey.value.trim();

            if (currentProvider === 'universal') {
                endpoint = '/verify';
                body.reference = ref;
                if (suffix) body.suffix = suffix;
                if (phone) body.phoneNumber = phone;
            } else if (currentProvider === 'cbe') {
                endpoint = '/verify-cbe';
                body = { reference: ref, accountSuffix: suffix };
            } else if (currentProvider === 'telebirr') {
                endpoint = '/verify-telebirr';
                body = { reference: ref };
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

            const headers = { 'Content-Type': 'application/json' };
            if (apiKey) {
                headers['x-api-key'] = apiKey;
            }

            try {
                const res = await fetch(endpoint, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(body)
                });
                const data = await res.json();
                resultText.textContent = JSON.stringify(data, null, 2);
            } catch (err) {
                resultText.textContent = '// Request failed:\n' + err.message;
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<span>Verify Transaction</span>';
            }
        });

        function copyResult() {
            navigator.clipboard.writeText(resultText.textContent);
            const copyBtn = document.getElementById('copyBtn');
            copyBtn.textContent = 'Copied!';
            setTimeout(() => { copyBtn.textContent = 'Copy'; }, 2000);
        }

        updateFields();
    </script>
</body>
</html>`;
}
