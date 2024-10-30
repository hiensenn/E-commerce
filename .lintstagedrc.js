module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'next lint --fix --file', 
    "eslint --ignore-pattern '!**/.lintstagedrc.js'", 
    "npm test -- --findRelatedTests --maxWorkers=50%"
  ],
};
