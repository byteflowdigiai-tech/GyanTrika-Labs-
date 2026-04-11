const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

async function extractText(filePath) {
    try {
        const result = await mammoth.extractRawText({path: filePath});
        const outPath = filePath + '.txt';
        fs.writeFileSync(outPath, result.value);
        console.log(`Saved ${outPath}`);
    } catch (e) {
        console.error(`Failed to read ${filePath}:`, e);
    }
}

async function main() {
    await extractText('AI in Arts.docx');
    await extractText('AI in Science.docx');
    await extractText('BCA_MCA_Poly.docx');
    await extractText('Gyantrika AI Curriculum.docx');
    await extractText('Poly_BCA_MCA.docx');
}

main();
