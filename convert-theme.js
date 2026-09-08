const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(srcDir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace colors
  // Not replacing text-white inside bg-brand-purple, but let's just do a blanket replace and fix specifics if needed
  content = content.replace(/text-white/g, 'text-brand-text');
  content = content.replace(/bg-white/g, 'bg-brand-text');
  content = content.replace(/border-white/g, 'border-brand-text');
  
  // Specific backgrounds
  content = content.replace(/bg-\[\#0B0A0D\]/g, 'bg-brand-bg');
  content = content.replace(/bg-\[\#08070A\]/g, 'bg-brand-bg-alt');
  content = content.replace(/bg-\[\#111\]/g, 'bg-brand-bg-alt');
  content = content.replace(/from-\[\#08070A\]/g, 'from-brand-bg-alt');
  
  // Undo specific always-white text on brand purple buttons if any
  // e.g. text-brand-text inside bg-brand-purple
  // We'll manually fix those if needed, or let's do a simple regex for buttons
  content = content.replace(/bg-brand-purple text-brand-text/g, 'bg-brand-purple text-white');
  
  // Navigation SVG color
  content = content.replace(/text-brand-white/g, 'text-brand-text');

  fs.writeFileSync(file, content);
});

console.log('Converted colors in TSX files');
