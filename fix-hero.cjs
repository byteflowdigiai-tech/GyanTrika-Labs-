const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('d:\\GyanTrika Labs\\src\\pages');
let changed = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    
    content = content.replace(/from-transparent to-(white|slate-50|background) dark:/g, 'from-transparent to-transparent dark:');
    content = content.replace(/via-background\/20 to-background dark:/g, 'via-transparent to-transparent dark:');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changed++;
        console.log('Updated ' + file);
    }
});

console.log('Total files updated: ' + changed);
