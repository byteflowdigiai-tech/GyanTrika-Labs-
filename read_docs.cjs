const mammoth = require('mammoth');
const fs = require('fs');

async function extractText(filePath) {
    try {
        const result = await mammoth.extractRawText({path: filePath});
        console.log(`\n=== Content of ${filePath} ===\n`);
        console.log(result.value.substring(0, 1500) + (result.value.length > 1500 ? '\n... [TRUNCATED]' : ''));
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
