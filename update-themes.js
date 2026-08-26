const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replacements = [
  // Typography
  { regex: /(?<!\w)(?<!dark:)text-white(?!\/)/g, replace: 'text-slate-900 dark:text-white' },
  { regex: /(?<!\w)(?<!dark:)text-white\/([0-9\.]+)/g, replace: 'text-black/$1 dark:text-white/$1' },
  { regex: /(?<!\w)(?<!dark:)text-slate-400(?!\w)/g, replace: 'text-slate-600 dark:text-slate-400' },
  { regex: /(?<!\w)(?<!dark:)text-slate-300(?!\w)/g, replace: 'text-slate-700 dark:text-slate-300' },
  
  // Backgrounds
  { regex: /(?<!\w)(?<!dark:)bg-background-dark(?!\w)/g, replace: 'bg-white dark:bg-background-dark' },
  { regex: /(?<!\w)(?<!dark:)bg-\[#0e0e13\](?!\w)/g, replace: 'bg-gray-50 dark:bg-[#0e0e13]' },
  { regex: /(?<!\w)(?<!dark:)bg-\[#0a0a0f\](?!\w)/g, replace: 'bg-gray-100 dark:bg-[#0a0a0f]' },
  { regex: /(?<!\w)(?<!dark:)bg-\[#0a0a0e\](?!\w)/g, replace: 'bg-gray-100 dark:bg-[#0a0a0e]' },
  { regex: /(?<!\w)(?<!dark:)bg-\[#111118\](?!\w)/g, replace: 'bg-gray-100 dark:bg-[#111118]' },
  { regex: /(?<!\w)(?<!dark:)bg-white\/([0-9\.]+)/g, replace: 'bg-black/$1 dark:bg-white/$1' },
  { regex: /(?<!\w)(?<!dark:)bg-black(?!\/)(?!\w)/g, replace: 'bg-white dark:bg-black' },
  { regex: /(?<!\w)(?<!dark:)bg-black\/([0-9\.]+)/g, replace: 'bg-white/$1 dark:bg-black/$1' },
  
  // Borders
  { regex: /(?<!\w)(?<!dark:)border-white\/([0-9\.]+)/g, replace: 'border-black/$1 dark:border-white/$1' }
];

let filesProcessed = 0;

walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    replacements.forEach(({ regex, replace }) => {
      content = content.replace(regex, replace);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
      filesProcessed++;
    }
  }
});

console.log(`Finished processing. Updated ${filesProcessed} files.`);
