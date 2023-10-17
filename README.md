# Brawl-UI

## Installation

Install Brawl-UI using npm with the following command:

```markdown
npm install git+ssh://git@github.com:sourceempire/brawl-ui.git#semver:v<x.x.x>
```

Replace <x.x.x> with the desired version, though it's recommended to use the latest version.

## Styling

To ensure proper styling of the components, import the provided CSS file in a root file of your project:

```javascript
import 'brawl-ui/dist/style.css';
```

This CSS file contains inline fonts and a reset stylesheet to provide a consistent style baseline for the components.

## Theme

The theme is built up with a set of custom properties found [here](src/assets/css/theme.css)
