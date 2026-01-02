# 🛡️ Spam Email Detector

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-orange.svg)](https://github.com/mosesamwoma/chrome-extension/releases)

A lightweight Chrome extension that uses machine learning to detect spam emails in Gmail with automatic and manual scanning capabilities.

## Overview

Spam Email Detector enhances Gmail's native spam filtering using a custom-trained machine learning model. It analyzes email content, sender information, and metadata to identify spam with approximately 95% accuracy. All processing occurs locally in your browser, ensuring complete privacy.

## Key Features

- **🤖 Automatic Mode** - Real-time scanning of incoming emails with instant notifications
- **🔍 Manual Mode** - On-demand scanning for specific emails
- **🧠 ML-Powered** - Trained classification model with ~95% accuracy
- **🔒 Privacy-First** - All processing happens locally, no data transmission
- **⚡ Lightweight** - Minimal browser performance impact

## Installation

```bash
git clone https://github.com/mosesamwoma/chrome-extension.git
```

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top-right)
3. Click "Load unpacked" and select the cloned directory
4. Verify the extension icon appears in your toolbar

## Usage

### Initial Setup
1. Open Gmail in Chrome
2. Click the extension icon to access controls
3. Select your preferred scanning mode

### Automatic Mode
Enables continuous monitoring of your inbox. New emails are scanned upon arrival and automatically marked with visual indicators.

### Manual Mode
Scan emails on-demand by opening an email, clicking the extension icon, and selecting "Scan This Email."

## Technology

**Machine Learning Model:**
- Algorithm: Naive Bayes with TF-IDF vectorization
- Training: 10,000+ curated spam/legitimate emails
- Features: Subject analysis, sender validation, content patterns, metadata inspection
- Performance: ~95% accuracy, <2 seconds per email

## Development

### Prerequisites
- Chrome Browser (v88+)
- Node.js (v14+)
- Python 3.7+ (for model training)

### Setup
```bash
git clone https://github.com/mosesamwoma/chrome-extension.git
cd chrome-extension
npm install
pip install -r requirements.txt
```

## Future Improvements

- Whitelist/blacklist functionality
- Adjustable detection sensitivity
- Statistics dashboard with detection history
- Multi-provider support (Outlook, Yahoo Mail)
- Enhanced model accuracy with continuous training

## Privacy & Security

**Our Commitment:**
- ✅ Local processing only - emails never leave your device
- ✅ No data collection, storage, or transmission
- ✅ No external server communication
- ✅ Minimal permissions (activeTab, storage, Gmail access)
- ✅ Open-source and transparent

**Required Permissions:**
- `activeTab` - Read email content for spam analysis
- `storage` - Save user preferences locally
- `host_permissions` - Gmail interface integration

## Support

- **Issues & Bugs**: [GitHub Issues](https://github.com/mosesamwoma/chrome-extension/issues)
- **Discussions**: [GitHub Discussions](https://github.com/mosesamwoma/chrome-extension/discussions)
- **Documentation**: [Wiki](https://github.com/mosesamwoma/chrome-extension/wiki)

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

Special thanks to the open-source community and all contributors who have helped improve this project.

---

<div align="center">

**Developed by [Moses Amwoma](https://github.com/mosesamwoma)**

⭐ Star this repository if you find it helpful!

[⬆ Back to Top](#-spam-email-detector)

</div>
