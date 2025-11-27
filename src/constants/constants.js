
// We position these around the center card.
// Center is roughly 50% 50%. We avoid placing tokens exactly there.
export const FLOATING_TOKENS = [
  {
    id: 'eth',
    symbol: 'ETH',
    name: 'Ethereum',
    priceChange: 1.25,
    color: '#627EEA',
    fallbackLetter: 'Ξ',
    position: { top: '20%', left: '15%' }, // Moved further left/up
    size: 'lg'
  },
  {
    id: 'dai',
    symbol: 'DAI',
    name: 'Dai',
    priceChange: -0.01,
    color: '#F5AC37',
    fallbackLetter: 'D',
    position: { top: '30%', left: '80%' }, // Moved further right
    size: 'lg'
  },
  {
    id: 'usdc',
    symbol: 'USDC',
    name: 'USD Coin',
    priceChange: 0.00,
    color: '#2775CA',
    fallbackLetter: '$',
    position: { top: '70%', left: '12%' }, // Moved further left/down
    size: 'md'
  },
  {
    id: 'uni',
    symbol: 'UNI',
    name: 'Uniswap',
    priceChange: 5.4,
    color: '#FF007A',
    fallbackLetter: 'U',
    position: { top: '65%', left: '85%' }, // Moved further right
    size: 'md'
  },
  {
    id: 'wbtc',
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    priceChange: 2.1,
    color: '#F7931A',
    fallbackLetter: '₿',
    position: { top: '15%', left: '65%' },
    size: 'md'
  },
  {
    id: 'aave',
    symbol: 'AAVE',
    name: 'Aave',
    priceChange: -1.2,
    color: '#B6509E',
    fallbackLetter: 'A',
    position: { top: '85%', left: '25%' }, // Moved further down/left
    size: 'sm'
  },
  {
    id: 'pepe',
    symbol: 'PEPE',
    name: 'Pepe',
    priceChange: 12.5,
    color: '#4C9540',
    fallbackLetter: 'P',
    position: { top: '45%', left: '8%' }, // Moved further left
    size: 'sm'
  },
  {
    id: 'link',
    symbol: 'LINK',
    name: 'Chainlink',
    priceChange: 0.8,
    color: '#2A5ADA',
    fallbackLetter: 'L',
    position: { top: '55%', left: '92%' }, // Moved further right
    size: 'sm'
  }
];
