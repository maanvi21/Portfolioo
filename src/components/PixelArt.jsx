// Tiny sprite-grid pixel icons — hand-drawn 8-bit style, no external assets.

const SPRITES = {
  star: {
    colors: { A: '#ffd23f' },
    grid: [
      '...A...',
      '...A...',
      '..AAA..',
      'AAAAAAA',
      '..AAA..',
      '.A...A.',
      'A.....A',
    ],
  },
  heart: {
    colors: { A: '#ff2e93' },
    grid: [
      '.AA.AA.',
      'AAAAAAA',
      'AAAAAAA',
      '.AAAAA.',
      '..AAA..',
      '...A...',
    ],
  },
  coin: {
    colors: { A: '#ffd23f', B: '#fff1b8' },
    grid: [
      '.AAAAA.',
      'AABBBAA',
      'ABBBBBA',
      'ABBBBBA',
      'ABBBBBA',
      'AABBBAA',
      '.AAAAA.',
    ],
  },
  cloud: {
    colors: { A: '#7fd8ff' },
    grid: [
      '..AAA...',
      '.AAAAA..',
      'AAAAAAAA',
      'AAAAAAAA',
    ],
  },
  sparkle: {
    colors: { A: '#4dffb4' },
    grid: [
      '..A..',
      '..A..',
      'A.A.A',
      '.AAA.',
      'A.A.A',
      '..A..',
      '..A..',
    ],
  },
  dumbbell: {
    colors: { A: '#4dffb4' },
    grid: [
      'A....A',
      'A....A',
      'AAAAAA',
      'AAAAAA',
      'A....A',
      'A....A',
    ],
  },
  mic: {
    colors: { A: '#ff2e93' },
    grid: [
      '.AA.',
      'AAAA',
      'AAAA',
      'AAAA',
      '.AA.',
      'AAAA',
      '.AA.',
      '.AA.',
    ],
  },
  plane: {
    colors: { A: '#7fd8ff' },
    grid: [
      '....A...',
      '...AAA..',
      '..AAAAA.',
      '.AA.AA.A',
      'AAAAAAAA',
      '...A.A..',
      '..A...A.',
    ],
  },
  rocket: {
    colors: { A: '#b98cff', B: '#7fd8ff', C: '#ffd23f' },
    grid: [
      '..AA..',
      '.AAAA.',
      '.ABBA.',
      '.AAAA.',
      'AAAAAA',
      'C.AA.C',
    ],
  },
  bolt: {
    colors: { A: '#ffd23f' },
    grid: [
      '..AAA',
      '.AA..',
      'AAAAA',
      '..AA.',
      '.AA..',
      'AA...',
    ],
  },
  mushroom: {
    colors: { A: '#ff2e93', B: '#f4f2fb' },
    grid: [
      '.AAAAA.',
      'AABAABA',
      'AAAAAAA',
      '.BBBBB.',
      '.BB.BB.',
    ],
  },
  cookie: {
    colors: { A: '#e0a458', B: '#7a4a1e' },
    grid: [
      '.AAAAA.',
      'AAABAAA',
      'ABAAAAA',
      'AAAABAA',
      'ABAAAAA',
      '.AAAAA.',
    ],
  },
  coffee: {
    colors: { A: '#f4f2fb', B: '#7a4a1e', C: '#ff2e93' },
    grid: [
      'C.......',
      '.AAAAAA.',
      '.ABBBBA.',
      '.ABBBBA.',
      '.AAAAAAA',
      '..AAAA.A',
      '.......A',
    ],
  },
  arcade: {
    colors: { A: '#b98cff', B: '#0a0a12', C: '#4dffb4' },
    grid: [
      'AAAAAAA',
      'ABBBBBA',
      'ABBCBBA',
      'AAAAAAA',
      'A.....A',
      'A.....A',
      'AA...AA',
    ],
  },
  cursor: {
    colors: { A: '#f4f2fb' },
    grid: [
      'A.......',
      'AA......',
      'AAA.....',
      'AAAA....',
      'AAAAA...',
      'AA.AA...',
      'A...AA..',
      '.....AA.',
    ],
  },
};

export const PixelIcon = ({ name, size = 20, className = '', title }) => {
  const sprite = SPRITES[name];
  if (!sprite) return null;
  const rows = sprite.grid.length;
  const cols = sprite.grid[0].length;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${cols} ${rows}`}
      className={`pixel-icon ${className}`}
      style={{ imageRendering: 'pixelated', flexShrink: 0 }}
      role={title ? 'img' : undefined}
      aria-label={title}
    >
      {title && <title>{title}</title>}
      {sprite.grid.flatMap((row, y) =>
        row.split('').map((ch, x) =>
          ch === '.' ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={sprite.colors[ch]} />
          )
        )
      )}
    </svg>
  );
};

export default PixelIcon;
