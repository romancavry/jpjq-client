import { CURRENCY_TYPE } from './constants';

export type CurrencyType = (typeof CURRENCY_TYPE)[keyof typeof CURRENCY_TYPE];

export interface CurrencyValueItem {
  price: number;
  volume24h: number;
  high24h: number;
  low24h: number;
  marketCap: number;
  percentChange24h: number;
  percentChange7d: number;
  percentChange30d: number;
  percentChange3m: number;
  percentChange6m: number;
}

export interface CurrencyPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface CurrencyToken {
  tokenAddress?: string;
  platform: CurrencyPlatform;
}

export interface Currency {
  id: number;
  rank: number;
  slug: string;
  symbol: string;
  category: string;
  name: string;
  type: CurrencyType;
  volume24hBase: number;
  circulatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  values: Record<string, CurrencyValueItem>;
  lastUpdated: string;
  tokens: CurrencyToken[];
}
