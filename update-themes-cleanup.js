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
  // Fix double dark variants
  { regex: /bg-white\/([0-9\.]+) dark:bg-black\/([0-9\.]+) dark:bg-white\/([0-9\.]+)/g, replace: 'bg-black/$1 dark:bg-white/$3' },
  { regex: /bg-white\/\[([0-9\.]+)\] dark:bg-black\/\[([0-9\.]+)\] dark:bg-white\/\[([0-9\.]+)\]/g, replace: 'bg-black/[$1] dark:bg-white/[$3]' },
  
  // Fix others just in case
  { regex: /dark:bg-black\/([0-9\.]+) dark:bg-white\/([0-9\.]+)/g, replace: 'dark:bg-white/$2' },
  { regex: /dark:bg-black\/\[([0-9\.]+)\] dark:bg-white\/\[([0-9\.]+)\]/g, replace: 'dark:bg-white/[$2]' },
  
  // Also found in Contact.tsx text-slate-700 dark:text-slate-300 group-hover:bg-primary group-hover:text-black group-hover:border-primary
  // Wait, that one is just "group-hover:text-black", which should be "group-hover:text-slate-900 dark:group-hover:text-black"
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

console.log(`Finished processing bracket styles. Updated ${filesProcessed} files.`);
