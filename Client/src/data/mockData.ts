import { Category, Product } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Electronics', icon: '📱' },
  { id: '2', name: 'Fashion', icon: '👕' },
  { id: '3', name: 'Home', icon: '🏠' },
  { id: '4', name: 'Sports', icon: '⚽' },
  { id: '5', name: 'Books', icon: '📚' },
  { id: '6', name: 'Beauty', icon: '💄' },
  { id: '7', name: 'Health', icon: '🏥' },
  { id: '8', name: 'Travel', icon: '✈️' },
];

export const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: '$99.99',
    image: '🎧',
    rating: 4.5,
  },
  { id: '2', name: 'Smart Watch', price: '$199.99', image: '⌚', rating: 4.8 },
  { id: '3', name: 'Laptop Stand', price: '$49.99', image: '💻', rating: 4.3 },
  { id: '4', name: 'Coffee Maker', price: '$79.99', image: '☕', rating: 4.6 },
];