interface Offer {
    id: string;
    user: string;
    action: 'Selling' | 'Buying';
    rate: string;
}

export const data: Offer[] = [
    { id: '1', user: 'Username', action: 'Selling', rate: '1 USD = 1.43 CAD' },
    { id: '2', user: 'User 2', action: 'Buying', rate: '1 USD = 1.43 CAD' },
    { id: '3', user: 'User 3', action: 'Selling', rate: '1 USD = 1.43 CAD' },
    { id: '4', user: 'User 4', action: 'Buying', rate: '1 USD = 1.43 CAD' },
    { id: '5', user: 'User 5', action: 'Selling', rate: '1 USD = 1.43 CAD' },
    { id: '6', user: 'User 4', action: 'Buying', rate: '1 USD = 1.43 CAD' },
    { id: '7', user: 'User 4', action: 'Selling', rate: '1 USD = 1.43 CAD' },
    { id: '8', user: 'User 4', action: 'Buying', rate: '1 USD = 1.43 CAD' },
];