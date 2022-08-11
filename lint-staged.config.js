module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|mdx|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
};
