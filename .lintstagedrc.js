module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'next lint --fix --file', 
    "eslint --ignore-pattern '!**/.lintstagedrc.js'", 
    "npm test -- --passRelatedTests --maxWorkers=50%"
  ]
};
