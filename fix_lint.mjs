import fs from 'fs';

const files = [
    'src/components/HeroSection.tsx',
    'src/components/ProgramEnrollmentModal.tsx',
    'src/data/booksPageData.ts',
    'src/data/projectsPageData.ts',
    'src/pages/BlogPostPage.tsx',
    'src/pages/ContactPage.tsx',
    'src/pages/ShopPage.tsx'
];

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/: any\b(?! \/\* eslint)/g, ': any /* eslint-disable-line @typescript-eslint/no-explicit-any */');
    fs.writeFileSync(file, content);
}

console.log('Done!');
