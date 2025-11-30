const fs = require('fs');
const path = require('path');

// Read setup_db.js
const content = fs.readFileSync('setup_db.js', 'utf8');

// Extract specificImages map
const mapStart = content.indexOf('const specificImages = {');
const mapEnd = content.indexOf('};', mapStart);
const mapContent = content.substring(mapStart, mapEnd + 2);

// Parse the map (roughly)
const specificImages = {};
const mapLines = mapContent.split('\n');
mapLines.forEach(line => {
    const match = line.match(/'([^']+)':\s*'([^']+)'/);
    if (match) {
        specificImages[match[1]] = match[2];
    }
});

// Extract mobile names
const mobileNames = [];
const nameRegex = /name:\s*'([^']+)'/g;
let match;
while ((match = nameRegex.exec(content)) !== null) {
    mobileNames.push(match[1]);
}

// Check for missing mappings
console.log("Missing mappings:");
mobileNames.forEach(name => {
    if (!specificImages[name]) {
        // Try to guess the image filename
        const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '');
        const possibleImage = `${slug}.jpg`;
        const possiblePath = path.join('public', 'mobiles', possibleImage);

        const exists = fs.existsSync(possiblePath);
        console.log(`- ${name} (Expected image: ${possibleImage}, Exists: ${exists})`);
    }
});
