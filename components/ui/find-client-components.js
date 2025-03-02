// find-client-components.js
const fs = require('fs');
const path = require('path');

const directories = ['./app', './components'];
const clientFeatures = [
  'onClick', 'onChange', 'onSubmit', 
  'useState', 'useEffect', 'useRef',
  'useContext', 'createContext'
];

function searchDirectory(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        searchDirectory(filePath);
      } else if (/\.(tsx|jsx|js|ts)$/.test(file)) {
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Skip files that already have 'use client'
        if (content.includes('use client')) {
          continue;
        }
        
        // Check for client-side features
        const hasClientFeatures = clientFeatures.some(feature => 
          content.includes(feature)
        );
        
        if (hasClientFeatures) {
          console.log(`Add 'use client' to: ${filePath}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error searching ${dir}: ${error.message}`);
  }
}

// Start the search
directories.forEach(searchDirectory);