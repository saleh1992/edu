export let courses_categories = [
    {
        id: 1,
        title: 'computer science',
        image: 'https://source.unsplash.com/featured/?computerscience',
    },
    {
        id: 2,
        title: 'finance',
        image: 'https://source.unsplash.com/featured/?finance',
    },
];

export let courses = [
    {
        id: 1,
        title: 'cs 50',
        price: 100,
        image: 'https://source.unsplash.com/710x488/?computerscience',
        category: 1,
        description: 'this is a computer science course',
        author: 1,
        rating: 5,
        reviews: 1000,
        students: 1000,
        lessons: 10,
        update: '2021-09-01',
        language: 'english',
        sale: 45,
        tags: ['computer science', 'programming', 'web development'],
    },
    {
        id: 2,
        title: 'finance 101',
        price: 200,
        // 710x488
        image: 'https://source.unsplash.com/710x488/?finance',
        category: 2,
        description: 'this is a finance course',
        author: 2,
        rating: 4.5,
        reviews: 1000,
        students: 1000,
        lessons: 10,
        update: '2021-09-01',
        language: 'english',
        tags: ['finance', 'economics', 'investment'],
    },
    {
        id: 3,
        title: 'web development',
        price: 150,
        image: 'https://source.unsplash.com/710x488/?webdevelopment',
        category: 1,
        description: 'this is a web development course',
        author: 3,
        rating: 4.2,
        reviews: 800,
        students: 800,
        lessons: 8,
        update: '2021-09-01',
        language: 'english',
        tags: ['web development', 'programming', 'frontend', 'backend'],
    },
    {
        id: 4,
        title: 'marketing 101',
        price: 180,
        image: 'https://source.unsplash.com/710x488/?marketing',
        category: 2,
        description: 'this is a marketing course',
        author: 4,
        rating: 4.3,
        reviews: 900,
        students: 900,
        lessons: 9,
        update: '2021-09-01',
        language: 'english',
        tags: ['marketing', 'advertising', 'branding'],
    },
    {
        id: 5,
        title: 'course 5',
        price: 150,
        image: 'https://source.unsplash.com/710x488/?course5',
        category: 1,
        description: 'this is course 5',
        author: 1,
        rating: 4.8,
        reviews: 500,
        students: 500,
        lessons: 5,
        update: '2021-09-01',
        language: 'english',
        tags: ['course 5', 'programming'],
    },
    {
        id: 6,
        title: 'course 6',
        price: 120,
        image: 'https://source.unsplash.com/710x488/?course6',
        category: 2,
        description: 'this is course 6',
        author: 2,
        rating: 4.6,
        reviews: 600,
        students: 600,
        lessons: 6,
        update: '2021-09-01',
        language: 'english',
        tags: ['course 6', 'finance'],
    },
];


for (let i = 5; i <= 30; i++) {
    courses.push({
        id: i,
        title: `course ${i}`,
        price: 100,
        image: `https://source.unsplash.com/710x488/?course${i}`,
        category: i % 2 === 0 ? 1 : 2,
        description: `this is course ${i}`,
        author: i % 4 + 1,
        rating: 4.5,
        reviews: 1000,
        students: 1000,
        lessons: 10,
        update: '2021-09-01',
        language: 'english',
        tags: [`course ${i}`, 'programming'],
    });
}

export let authors = [
    {
        id: 1,
        name: 'David Malan',
        image: 'https://source.unsplash.com/featured/?davidmalan',
    },
    {
        id: 2,
        name: 'Ahmed Ali',
        image: 'https://source.unsplash.com/featured/?ahmedali',
    },
    {
        id: 3,
        name: 'John Doe',
        image: 'https://source.unsplash.com/featured/?johndoe',
    },
    {
        id: 4,
        name: 'Jane Smith',
        image: 'https://source.unsplash.com/featured/?janesmith',
    },
];

export let team = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO',
        location: 'USA',
        description: 'this is a CEO',
        social: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
        image: 'https://source.unsplash.com/featured/?team',
        phone: '123-456-7890',
        email: 'example@gmail.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'CTO',
        location: 'USA',
        description: 'this is a CTO',
        social: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
        image: 'https://source.unsplash.com/featured/?team',
        phone: '123-456-7890',
        email: 'example@gmail.com'
    },
    {
        id: 3,
        name: 'Mark Johnson',
        title: 'CFO',
        location: 'USA',
        description: 'this is a CFO',
        social: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
        image: 'https://source.unsplash.com/featured/?team',
        phone: '123-456-7890',
        email: 'example@gmail.com'
    },
    {
        id: 4,
        name: 'Sarah Williams',
        title: 'COO',
        location: 'USA',
        description: 'this is a COO',
        social: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
        image: 'https://source.unsplash.com/featured/?team',
        phone: '123-456-7890',
        email: 'example@gmail.com'
    },
    {
        id: 5,
        name: 'Michael Brown',
        title: 'CTO',
        location: 'USA',
        description: 'this is a CTO',
        social: {
            facebook: 'https://facebook.com',
            twitter: 'https://twitter.com',
            linkedin: 'https://linkedin.com',
            instagram: 'https://instagram.com',
        },
        image: 'https://source.unsplash.com/featured/?team',
        phone: '123-456-7890',
        email: 'example@gmail.com'
    }
];

export let course_limit_page = 9;
//////////////
export let cart = [
    {
        id: 1,
        image: 'assets/images/product/1.jpg',
        title: 'Product 1',
        quantity: 2,
        price: 100,
    },
    {
        id: 2,
        image: 'assets/images/product/2.jpg',
        title: 'Product 2',
        quantity: 1,
        price: 200,
    },
];
console.log('🚀 ~ cart:', cart);
