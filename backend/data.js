import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Jhon',
            email: 'jhon@mail.com',
            password: bcrypt.hashSync('secret123', 8),
            isAdmin: true,
        },
        {
            name: 'User',
            email: 'user@mail.com',
            password: bcrypt.hashSync('secret123', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            _id: '1',
            name: 'Baju Koko',
            category: 'Category',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 1,
            brand: 'Koko',
            rating: 1.3,
            numReviews: 3,
            description: 'Bajunya koko woyo'
        },
        {
            _id: '2',
            name: 'Baju Kiki',
            category: 'Category',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Koko',
            rating: 2,
            numReviews: 30,
            description: 'Bajunya koko woyo'
        },
        {
            _id: '3',
            name: 'Baju Kiku',
            category: 'Category',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 100,
            brand: 'Koko',
            rating: 2.6,
            numReviews: 110,
            description: 'Bajunya koko woyo'
        },
        {
            _id: '4',
            name: 'Baju Kuku',
            category: 'Category',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 0,
            brand: 'Koko',
            rating: 5,
            numReviews: 1,
            description: 'Bajunya koko woyo'
        },
    ],
}

export default data;