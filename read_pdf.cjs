const fs = require('fs');
const pdf = require('pdf-parse');

(async () => {
    try {
        let dataBuffer = fs.readFileSync('public/assets/Gyantrika-Brochure.pdf');

        let parser = null;
        if (typeof pdf === 'function') {
            parser = pdf;
        } else if (pdf && typeof pdf.PDFParse === 'function') {
            parser = pdf.PDFParse;
        } else if (pdf && typeof pdf.default === 'function') {
            parser = pdf.default;
        }

        if (parser) {
            const data = await parser(dataBuffer);
            // Write output to a UTF-8 text file directly via Node to bypass PS encoding issues
            fs.writeFileSync('output.txt', data.text || JSON.stringify(data), 'utf8');
            console.log("Extraction done.");
        } else {
            console.log("Could not find parsing function:", Object.keys(pdf));
        }
    } catch (e) {
        console.error(e);
    }
})();
