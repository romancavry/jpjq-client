export interface EnteringValues {
  slug: string;
  amount: number | null;
  buyPriceRub: number | null;
  buyDate: string;
}

export interface Transaction {
  id: number;
  averagePrice: string;
  buyDate: string;
  coinSlug: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
}
