import { Category, Item } from './types';

export const categories: Category[] = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Books' },
  { id: 3, name: 'Clothing' },
];

export const items: Item[] = [
  { id: 1, name: 'Laptop', categoryId: 1 },
  { id: 2, name: 'Smartphone', categoryId: 1 },
  { id: 3, name: 'Novel', categoryId: 2 },
  { id: 4, name: 'T-shirt', categoryId: 3 },
  { id: 5, name: 'Jeans', categoryId: 3 },
];
