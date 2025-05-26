const fs = require('fs');
const path = require('path');

const TARGET_EXTENSIONS = ['.bak', '.js', '.tsx'];

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
};

const seen = new Map();
const duplicatesToDelete = [];

walkDir('./src', (filePath) => {
  const { dir, name, ext } = path.parse(filePath);
  const key = path.join(dir, name);

  if (!seen.has(key)) {
    seen.set(key, []);
  }

  seen.get(key).push({ ext, path: filePath });
});

seen.forEach(files => {
  const extensions = files.map(f => f.ext);
  const hasTSX = extensions.includes('.tsx');
  const hasJS = extensions.includes('.js');

  // if .tsx exists, delete .js and .bak versions
  if (hasTSX) {
    files.forEach(f => {
      if (f.ext === '.js' || f.ext === '.bak') {
        duplicatesToDelete.push(f.path);
      }
    });
  }

  // if .js exists and there's a .bak version, delete .bak
  if (hasJS && extensions.includes('.bak')) {
    files.forEach(f => {
      if (f.ext === '.bak') {
        duplicatesToDelete.push(f.path);
      }
    });
  }
});

if (duplicatesToDelete.length === 0) {
  console.log('✅ No duplicate .js or .bak files to delete.');
} else {
  console.log('🧹 Cleaning up the following duplicate files:');
  duplicatesToDelete.forEach(file => {
    console.log('Deleting:', file);
    fs.unlinkSync(file);
  });
  console.log('✅ Cleanup complete.');
}
