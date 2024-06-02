// src/types.ts

export interface Category {
    id: number;
    name: string;
  }
  
  export interface Item {
    id: number;
    name: string;
    categoryId: number;
  }
  