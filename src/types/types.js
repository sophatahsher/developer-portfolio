export interface TokenData {
  id: string;
  symbol: string;
  name: string;
  priceChange: number;
  color: string;
  iconUrl?: string; // Optional real image URL
  fallbackLetter: string;
  position: {
    top: string;
    left: string;
  };
  size: 'sm' | 'md' | 'lg';
}
