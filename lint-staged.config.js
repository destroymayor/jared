module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'tsc -p tsconfig.json --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `pnpm eslint --fix ${filenames.join(' ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|mdx|json)': (filenames) => `pnpm prettier --write ${filenames.join(' ')}`,
};
