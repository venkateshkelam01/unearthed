// unearthed/server/data/gifts.js
const giftData = [
    {
        id: 1,
        name: 'Reusable Water Bottle',
        pricePoint: 25,                // number for easy filtering
        audience: 'Everyone',
        image: '/public/images/water-bottle.jpg', // put this file in client/public/images/
        description: 'Insulated stainless steel bottle (20oz).',
        submittedBy: 'Venkatesh',
        submittedOn: '2025-09-17'
    },
    {
        id: 2,
        name: 'Bluetooth Earbuds',
        pricePoint: 49,
        audience: 'Teens',
        image: '/public/images/earbuds.jpg',
        description: 'Compact earbuds with charging case.',
        submittedBy: 'Alex',
        submittedOn: '2025-09-16'
    },
    {
        id: 3,
        name: 'Scented Candle Set',
        pricePoint: 18,
        audience: 'Adults',
        image: '/public/images/candles.jpg',
        description: 'Three-piece aromatherapy candle set.',
        submittedBy: 'Sam',
        submittedOn: '2025-09-15'
    },
    {
        id: 4,
        name: 'STEM Kit',
        pricePoint: 35,
        audience: 'Kids',
        image: '/public/images/stem-kit.jpg',
        description: 'Hands-on science kit for ages 8–12.',
        submittedBy: 'Priya',
        submittedOn: '2025-09-14'
    },
    {
        id: 5,
        name: 'Coffee Gift Card',
        pricePoint: 20,
        audience: 'Everyone',
        image: '/public/images/coffee-card.jpg',
        description: 'Digital gift card redeemable at major chains.',
        submittedBy: 'Taylor',
        submittedOn: '2025-09-13'
    }
];

export default giftData;
