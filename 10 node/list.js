const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log("\Filenames with the .txt extension:");
        files.forEach(file => {
            if (path.extname(file) == ".js") {
                console.log(file);
            }
        });
    }
});