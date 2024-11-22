const fs = require('fs');
const libxmljs = require('libxmljs');

function validateXML(xmlFile, xsdFile) {
    // Read XML and XSD files
    const xmlData = fs.readFileSync(xmlFile, 'utf8');
    const xsdData = fs.readFileSync(xsdFile, 'utf8');

    // Parse XML and XSD
    const xmlDoc = libxmljs.parseXml(xmlData);
    const xsdDoc = libxmljs.parseXml(xsdData);

    // Validate XML against XSD
    const isValid = xmlDoc.validate(xsdDoc);

    if (isValid) {
        console.log('XML is valid!');
    } else {
        console.log('XML is invalid!');
        // Print validation errors
        xmlDoc.errors.forEach(error => console.log(error.message));
    }
}

// Example usage
validateXML('books.xml', 'books.xsd');
