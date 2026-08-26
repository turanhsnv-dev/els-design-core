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
  // Fix brackets e.g., border-white/[0.04] -> border-black/[0.04] dark:border-white/[0.04]
  { regex: /(?<!\w)(?<!dark:)border-white\/\[([0-9\.]+)\]/g, replace: 'border-black/[$1] dark:border-white/[$1]' },
  { regex: /(?<!\w)(?<!dark:)bg-white\/\[([0-9\.]+)\]/g, replace: 'bg-black/[$1] dark:bg-white/[$1]' },
  { regex: /(?<!\w)(?<!dark:)text-white\/\[([0-9\.]+)\]/g, replace: 'text-black/[$1] dark:text-white/[$1]' },

  // Fix opacities on custom colors e.g., bg-background-dark/60 -> bg-white/60 dark:bg-background-dark/60
  { regex: /(?<!\w)(?<!dark:)bg-background-dark\/([0-9]+)/g, replace: 'bg-white/$1 dark:bg-background-dark/$1' },
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
