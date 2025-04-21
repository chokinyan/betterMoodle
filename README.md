# BetterMoodle

A Chrome extension designed to enhance the Moodle learning platform experience, specifically targeting moodle.monbureaunumerique.fr.

## Features

- **Improved UI**: Cleaner interface with unnecessary elements removed
- **Custom Styling**: Enhanced visual layout for better usability
- **File Management**: Capability to download course files efficiently (currently commented out)

## Installation

### From Source
1. Clone this repository or download the ZIP file
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked" and select the BetterMoodle directory
5. The extension should now be installed and active

### Requirements
- Google Chrome browser
- Access to a Moodle instance (specifically designed for moodle.monbureaunumerique.fr)

## Permissions

This extension requires the following permissions:
- `downloads`: For downloading files from Moodle
- `storage`: To save user preferences
- `tabs` and `activeTab`: To interact with the current browser tab
- `contextMenus`: For potential right-click functionality
- `scripting`: To inject custom CSS and modify page content
- `<all_urls>`: To function across various Moodle pages

## How It Works

The extension automatically enhances Moodle pages by:
1. Removing unnecessary UI elements like the left drawer toggle
2. Injecting custom CSS for a cleaner layout
3. Providing functionality to download course files (feature currently disabled)

## Development

The extension consists of:
- `manifest.json`: Extension configuration
- `background.js`: Handles background processes like downloads and CSS injection
- `moodleAuto.js`: Content script that modifies the Moodle page
- `moodle.css`: Custom styling for Moodle pages
- `popup/popup.html`: Simple popup interface

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
