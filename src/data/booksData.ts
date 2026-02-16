
export interface Book {
    id: string;
    title: string;
    author: string;
    category: '3D Printing' | 'Arduino' | 'IoT' | 'AI' | 'Electronics' | 'Programming';
    description: string;
    image: string;
    downloadUrl: string;
    pages: number;
    fileSize: string;
    rating: number;
    publishedDate: string;
}

export const books: Book[] = [
    {
        id: '1',
        title: '3D Printing VOL 1',
        author: 'Unknown',
        category: '3D Printing',
        description: 'Comprehensive guide to 3D printing technologies, materials, and applications. Volume 1.',
        image: '/images/3d-printing-projects.png',
        downloadUrl: '/books/3D%20Printing/3D%20Printing%20VOL_1.pdf',
        pages: 250,
        fileSize: '20 MB',
        rating: 4.8,
        publishedDate: '2023-01-01'
    },
    {
        id: '1-2',
        title: '3D Printing VOL 2',
        author: 'Unknown',
        category: '3D Printing',
        description: 'Advanced techniques in additive manufacturing and post-processing. Volume 2.',
        image: 'https://images.unsplash.com/photo-1620662557082-b3dcf6859424?q=80&w=2072&auto=format&fit=crop',
        downloadUrl: '/books/3D%20Printing/3D%20printing%20VOL_2.pdf',
        pages: 300,
        fileSize: '24 MB',
        rating: 4.7,
        publishedDate: '2023-02-01'
    },
    {
        id: '1-3',
        title: '3D Printing VOL 3',
        author: 'Unknown',
        category: '3D Printing',
        description: 'Expert-level strategies for industrial 3D printing applications. Volume 3.',
        image: '/images/3d-hover.jpg',
        downloadUrl: '/books/3D%20Printing/3D%20printing%20VOL_3.pdf',
        pages: 350,
        fileSize: '27 MB',
        rating: 4.9,
        publishedDate: '2023-03-01'
    },
    {
        id: '1-4',
        title: '3D Printer VOL 5',
        author: 'Unknown',
        category: '3D Printing',
        description: 'Technical manual for 3D printer maintenance and calibration. Volume 5.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2071&auto=format&fit=crop',
        downloadUrl: '/books/3D%20Printing/3D%20Printer%20VOL_5.pdf',
        pages: 150,
        fileSize: '15 MB',
        rating: 4.6,
        publishedDate: '2023-05-01'
    },
    {
        id: '2',
        title: 'Arduino VOL 1',
        author: 'Unknown',
        category: 'Arduino',
        description: 'The definitive guide to getting started with Arduino. Volume 1.',
        image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&q=80&w=1200',
        downloadUrl: '/books/Arduino/Ardunio%201.pdf',
        pages: 300,
        fileSize: '26 MB',
        rating: 4.8,
        publishedDate: '2023-01-01'
    },
    {
        id: '2-2',
        title: 'Arduino VOL 2',
        author: 'Unknown',
        category: 'Arduino',
        description: 'Advanced Arduino projects and programming techniques. Volume 2.',
        image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=1200',
        downloadUrl: '/books/Arduino/Ardunio%202.pdf',
        pages: 280,
        fileSize: '19 MB',
        rating: 4.7,
        publishedDate: '2023-02-01'
    },
    {
        id: '2-3',
        title: 'Arduino VOL 10',
        author: 'Unknown',
        category: 'Arduino',
        description: 'Expert level Arduino integration and system design. Volume 10.',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=1200',
        downloadUrl: '/books/Arduino/arduino10.pdf',
        pages: 310,
        fileSize: '15 MB',
        rating: 4.9,
        publishedDate: '2023-10-01'
    },
    {
        id: '4',
        title: 'ELECTRONICS VOL 1',
        author: 'Unknown',
        category: 'Electronics',
        description: 'Fundamental principles of electronics, components, and basic circuit theory. Volume 1.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        downloadUrl: '/books/Electronics/ELECTRONICS-VOL-1.pdf',
        pages: 180,
        fileSize: '11 MB',
        rating: 4.6,
        publishedDate: '2023-11-05'
    },
    {
        id: '4-2',
        title: 'ELECTRONICS VOL 2',
        author: 'Unknown',
        category: 'Electronics',
        description: 'Intermediate circuit design, analysis techniques, and practical applications. Volume 2.',
        image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=2070&auto=format&fit=crop',
        downloadUrl: '/books/Electronics/ELECTRONICS-VOL-2.pdf',
        pages: 220,
        fileSize: '26 MB',
        rating: 4.7,
        publishedDate: '2023-12-01'
    },
    {
        id: '4-3',
        title: 'ELECTRONICS VOL 3',
        author: 'Unknown',
        category: 'Electronics',
        description: 'Advanced electronics, signal processing, and integrated systems. Volume 3.',
        image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop',
        downloadUrl: '/books/Electronics/ELECTRONICS-VOL-3.pdf',
        pages: 250,
        fileSize: '10 MB',
        rating: 4.8,
        publishedDate: '2024-01-10'
    },
    {
        id: '4-4',
        title: 'ELECTRONICS VOL 4',
        author: 'Unknown',
        category: 'Electronics',
        description: 'Modern electronic systems, wireless communication, and sensor tech. Volume 4.',
        image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2070&auto=format&fit=crop',
        downloadUrl: '/books/Electronics/ELECTRONICS-VOL-4.pdf',
        pages: 200,
        fileSize: '20 MB',
        rating: 4.5,
        publishedDate: '2024-02-15'
    },
    {
        id: '4-5',
        title: 'ELECTRONICS VOL 5',
        author: 'Unknown',
        category: 'Electronics',
        description: 'Industrial electronics, power systems, and specialized applications. Volume 5.',
        image: 'https://images.unsplash.com/photo-1608564697071-ddf911d81370?q=80&w=2070&auto=format&fit=crop',
        downloadUrl: '/books/Electronics/ELECTRONICS-VOL-5.pdf',
        pages: 190,
        fileSize: '11 MB',
        rating: 4.9,
        publishedDate: '2024-03-20'
    },
];
