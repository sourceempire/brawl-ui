import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Function to update the README file with the latest theme
function updateReadme() {
  // Read the theme CSS file
  const themeCss = readFileSync(join(process.cwd(), './src/assets/css/theme.css'), 'utf8');

  // Remove the :root { and the closing } from the theme CSS
  const cleanedThemeCss = themeCss.replace(/:root\s*{([\s\S]*?)}\s*$/, '$1').trim();

  // Remove leading tabs or spaces from each line of the cleaned theme CSS, while keeping line breaks
  const indentedCleanedThemeCss = cleanedThemeCss.replace(/^[ \t]+/gm, '');

  // Format the indented cleaned theme CSS for Markdown
  const formattedThemeCss = "```css\n" + indentedCleanedThemeCss + "\n```";

  // Read the existing README file
  const readmePath = join(process.cwd(), './README.md');
  let readmeContent = readFileSync(readmePath, 'utf8');

  // Regular expression to find the existing theme section
  const themeSectionRegex = /<!--THEME_START-->[\s\S]*<!--THEME_END-->/;

  // New theme section content
  const newThemeSection = `<!--THEME_START-->\n${formattedThemeCss}\n<!--THEME_END-->`;

  // Replace the existing theme section with the new theme section
  readmeContent = readmeContent.replace(themeSectionRegex, newThemeSection);

  // Write the updated content back to the README file
  writeFileSync(readmePath, readmeContent, 'utf8');

  console.log('README updated with the latest theme.');
}

// Execute the function
updateReadme();