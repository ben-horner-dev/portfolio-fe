const path = require('path')
 
const buildEslintCommand = (filenames: string[]) =>
  `next lint --fix --file ${filenames
    .map((f: string) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
}