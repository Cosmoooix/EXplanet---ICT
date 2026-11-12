/**
 * EXPlanet Dedicated 16x16 Pixel Art Matrices for Items, Chests, Categories & Badges.
 * All matrices use crisp 16x16 character grids mapped to authentic retro palette hex codes.
 */

export const ITEM_PALETTE: Record<string, string> = {
  // Outlines & Core
  '0': '#070814', // Void Black Outline
  '1': '#191b2e', // Deep Navy Shadow
  'w': '#ffffff', // Pure White Highlight
  'x': '#e2e8f0', // Soft Silver White
  'z': '#94a3b8', // Steel Gray
  'Z': '#475569', // Dark Slate

  // Woods & Leather
  'b': '#452516', // Dark Walnut Wood
  'B': '#78350f', // Warm Mahogany Wood
  'm': '#b45309', // Oak Wood Grain

  // Gold & Amber (Chests, Coins, Boots)
  'g': '#fbbf24', // Radiant Gold
  'G': '#f59e0b', // Amber Gold Main
  'y': '#fef08a', // Sunlight Gold Highlight
  'Y': '#d97706', // Deep Gold Shadow
  'd': '#78350f', // Dark Bronzed Gold

  // Red & Ruby (Health, Swords, Sovereign Crown)
  'r': '#ef4444', // Crimson Red
  'R': '#dc2626', // Deep Scarlet
  'D': '#991b1b', // Blood Ruby Shadow
  'p': '#f87171', // Rose Red Highlight

  // Cyan & Sky Blue (Shield, Keys, Magic)
  'c': '#38bdf8', // Sky Cyan Light
  'C': '#0284c7', // Radiant Blue
  'u': '#0369a1', // Deep Cyan Shadow
  'k': '#e0f2fe', // Glacial Blue Highlight

  // Purple & Mystic (Hint Potion, Mystic Chest, Auras)
  'v': '#c084fc', // Vivid Lilac
  'V': '#9333ea', // Arcane Purple
  'M': '#6b21a8', // Deep Void Amethyst
  'N': '#3b0764', // Obsidian Violet Shadow
  'l': '#e9d5ff', // Lavender Sparkle

  // Emerald & Green
  'e': '#34d399', // Emerald Gem
  'E': '#059669', // Forest Green
};

export type PixelIconKey =
  // Chests
  | 'chest_standard'
  | 'chest_mystic'
  | 'chest_cosmic'
  // Consumables
  | 'speed_boots'
  | 'strength_sword'
  | 'hint_potion'
  | 'health_potion'
  | 'shield_scroll'
  | 'xp_elixir'
  | 'cosmic_key'
  // Categories
  | 'cat_hat'
  | 'cat_hair'
  | 'cat_mask'
  | 'cat_outfit'
  | 'cat_weapon'
  | 'cat_pet'
  | 'cat_trail'
  | 'cat_aura'
  // Currencies & Badges
  | 'pixel_coin'
  | 'pixel_xp'
  | 'pixel_heart'
  | 'pixel_shield'
  | 'pixel_crown'
  | 'pixel_lightning'
  | 'pixel_lock'
  | 'pixel_star'
  | 'pixel_scholar_portrait';

export const PIXEL_ICON_MATRICES: Record<PixelIconKey, string[]> = {
  // Standard Dungeon Chest: Oak chest with brass reinforced bands and iron keyhole
  chest_standard: [
    '                ',
    '     000000     ',
    '   00gGGGGg00   ',
    '  0gGGyyyyGGg0  ',
    '  0GGg0000gGG0  ',
    '  0GgBmmmmBgG0  ',
    ' 00000000000000 ',
    ' 0BbB000000BbB0 ',
    ' 0bBB0GyyG0BBb0 ',
    ' 0BbB0G00G0BbB0 ',
    ' 0bBB00GG00BBb0 ',
    ' 0BbBB0000BBbB0 ',
    ' 0bBBBBBBBBBBb0 ',
    ' 00000000000000 ',
    '  011111111110  ',
    '   0000000000   ',
  ],

  // Mystic Arcane Chest: Violet enchanted reliquary with cyan runic crystal lock
  chest_mystic: [
    '                ',
    '     000000     ',
    '   00vVVVVv00   ',
    '  0vVVllllVVv0  ',
    '  0VVv0000vVV0  ',
    '  0VvMNNNNMvV0  ',
    ' 00000000000000 ',
    ' 0MMM000000MMM0 ',
    ' 0NMM0ckkc0MMN0 ',
    ' 0MNM0c00c0MNM0 ',
    ' 0NMM00cc00MMN0 ',
    ' 0MNMM0000MMNM0 ',
    ' 0NMMMMMMMMMMN0 ',
    ' 00000000000000 ',
    '  011111111110  ',
    '   0000000000   ',
  ],

  // Cosmic Celestial Chest: Gilded nebula chest with starlight wings and ruby core
  chest_cosmic: [
    ' 00          00 ',
    ' 0yg0 0000 0gy0 ',
    '  0gGGgGGgGGg0  ',
    '  0GGyyyyyyGG0  ',
    '  0GgY0000YgG0  ',
    '  0Gg1ckkc1gG0  ',
    ' 00000000000000 ',
    ' 0GGg000000gGG0 ',
    ' 0Gg10RppR01gG0 ',
    ' 0Gg10R00R01gG0 ',
    ' 0Gg100RR001gG0 ',
    ' 0GGg100001gGG0 ',
    ' 0GGggggggggGG0 ',
    ' 00000000000000 ',
    '  011111111110  ',
    '   0000000000   ',
  ],

  // Swift Boots: Hermes winged gold boots surging with light
  speed_boots: [
    '   00           ',
    '  0ww00         ',
    ' 0wwyyy00       ',
    '  0wyyGG00      ',
    '   0yGGGG0000   ',
    '    0YGGGGGGg0  ',
    '    0yGGGGGGg0  ',
    '    0YGGg00000  ',
    '    0yGGg0      ',
    '    0YGGg0      ',
    '    0yGGGG0000  ',
    '    0YGGGGGGgg0 ',
    '   0yGGGGGGGgg0 ',
    '  0yyGGGGGGGGd0 ',
    '  0000000000000 ',
    '                ',
  ],

  // Warrior's Obsidian Blade: Glowing flaming scarlet sword
  strength_sword: [
    '             00 ',
    '            0pp0',
    '           0prR0',
    '          0prR0 ',
    '         0prR0  ',
    '        0prR0   ',
    '       0prR0    ',
    '      0prR0     ',
    '  00 0prR0 00   ',
    ' 0g00prR00g0    ',
    '  0gggggggg0    ',
    '   00gGGg00     ',
    '     0bB0       ',
    '     0bB0       ',
    '    00gG00      ',
    '    000000      ',
  ],

  // Scholar's Hint Potion: Amethyst star flask with sparkling bubble core
  hint_potion: [
    '      0000      ',
    '      0bBb0     ',
    '      0000      ',
    '      0zZ0      ',
    '     0vVVv0     ',
    '    0vVllllv0   ',
    '   0vVlwwllVv0  ',
    '  0vVllwwlllVv0 ',
    '  0VVlllvlllVV0 ',
    '  0VVMVVvVVMVV0 ',
    '  0MMvvVVvvMMM0 ',
    '  0NNMMvvMMNNN0 ',
    '  0NNNNMMNNNNN0 ',
    '   00NNNNNN00   ',
    '     000000     ',
    '                ',
  ],

  // Health Potion: Red glass vitality elixir with heart glow
  health_potion: [
    '      0000      ',
    '      0bBb0     ',
    '      0000      ',
    '      0zZ0      ',
    '     0rRRr0     ',
    '    0rRpppr0    ',
    '   0rRpwppr0    ',
    '  0rRppwwppr0   ',
    '  0RRppwwppRR0  ',
    '  0RRpwwwwpRR0  ',
    '  0DDww00wwDD0  ',
    '  0DDD0ww0DDD0  ',
    '  0DDDD00DDDD0  ',
    '   00DDDDDD00   ',
    '     000000     ',
    '                ',
  ],

  // Shield Scroll: Ancient scroll with luminous blue knight shield
  shield_scroll: [
    ' 0000000000000  ',
    '0bmmbBmmmmmmB0  ',
    '0mb000000000mb0 ',
    '0mb0uCCkCCu0mb0 ',
    '0mb0CkwkkkC0mb0 ',
    '0mb0CkkukkC0mb0 ',
    '0mb0Cku0ukC0mb0 ',
    '0mb0uCu0uCu0mb0 ',
    '0mb00CuuuC00mb0 ',
    '0mb0 0uuu0 0mb0 ',
    '0mb0  0u0  0mb0 ',
    '0mb000000000mb0 ',
    '0bBmmmmmmBmmb0  ',
    ' 0000000000000  ',
    '                ',
    '                ',
  ],

  // XP Elixir: Indigo scholarly beaker with cosmic insight fumes
  xp_elixir: [
    '      0000      ',
    '      0bBb0     ',
    '      0000      ',
    '      0zZ0      ',
    '     00zZ00     ',
    '    0cCCCCc0    ',
    '   0cCCwwCCc0   ',
    '  0cCCwyywCCc0  ',
    '  0cCCwyywCCc0  ',
    '  0CCuuyyuuCC0  ',
    '  0CCuuuuyyCC0  ',
    '  0uuCCuuCCuu0  ',
    '  011uuuuuu110  ',
    '   0011111100   ',
    '     000000     ',
    '                ',
  ],

  // Astral Skeleton Key: Ornate star-headed gold key
  cosmic_key: [
    '    000000      ',
    '   0gyyyyg0     ',
    '  0gyy00yyg0    ',
    '  0gy0cc0yg0    ',
    '  0gy0cc0yg0    ',
    '  0gyy00yyg0    ',
    '   0gGGGGg0     ',
    '    00gG00      ',
    '     0gG0       ',
    '     0gG0       ',
    '     0gGGg0     ',
    '     0gG0g0     ',
    '     0gGGGG0    ',
    '     0gG0000    ',
    '     0gG0       ',
    '     0000       ',
  ],

  // Hat Category: Wizard scholar pointed hat with star
  cat_hat: [
    '       00       ',
    '      0VV0      ',
    '      0vv0      ',
    '     0vVvV0     ',
    '     0vyGv0     ',
    '    0vvggvv0    ',
    '    0vVggVv0    ',
    '   0vVvVvVvV0   ',
    '   0vVvVvVvV0   ',
    '  0vVvVvVvVvV0  ',
    '  0vvggggggvv0  ',
    ' 00000000000000 ',
    '0vvvvvvvvvvvvvv0',
    ' 00000000000000 ',
    '                ',
    '                ',
  ],

  // Hair Category: Spiky anime scholar locks
  cat_hair: [
    '     000000     ',
    '   00bBmmbB00   ',
    '  0bBmmmmmmBb0  ',
    ' 0bBmmmBmmmBmb0 ',
    '0bBmmmmmmmmmmBb0',
    '0bBmmbBmmbBmmBb0',
    '0bbBB0bBB0BBbb0 ',
    ' 0000 000 0000  ',
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
  ],

  // Mask Category: Kitsune phantom visor mask with golden horns
  cat_mask: [
    ' 000        000 ',
    ' 0g0        0g0 ',
    ' 0gg00000000gg0 ',
    ' 0gwwwwwwwwwwg0 ',
    ' 0wwwwwwwwwwww0 ',
    '0ww00wwwwww00ww0',
    '0ww0c0wwww0c0ww0',
    '0www00wwww00www0',
    '0wwwwwwwwwwwwww0',
    ' 0wwwwRRRRwwww0 ',
    '  0wwwRRRRwww0  ',
    '   0wwwwwwww0   ',
    '    00wwww00    ',
    '      0000      ',
    '                ',
    '                ',
  ],

  // Outfit Category: Cosmic cadet scholar tunic with golden pauldrons
  cat_outfit: [
    '    00000000    ',
    '   0g000000g0   ',
    '  0gG011110Gg0  ',
    ' 0gGG0vvvv0GGg0 ',
    ' 0gGG0vvvv0GGg0 ',
    ' 00000vvvv00000 ',
    '     0vvvv0     ',
    '     0vGGv0     ',
    '     0vGGv0     ',
    '     0vvvv0     ',
    '    00vvvv00    ',
    '   0111111110   ',
    '   0111111110   ',
    '   0000000000   ',
    '                ',
    '                ',
  ],

  // Weapon Category: Crossed twin runed astral daggers
  cat_weapon: [
    '00            00',
    '0ww0        0ww0',
    ' 0cc0      0cc0 ',
    '  0cc0    0cc0  ',
    '   0cc0  0cc0   ',
    '    0cc00cc0    ',
    '     0cccc0     ',
    '    00gGGg00    ',
    '   0gGG00GGg0   ',
    '  0gG0    0Gg0  ',
    ' 00b0      0b00 ',
    ' 0bB0      0bB0 ',
    '  00        00  ',
    '                ',
    '                ',
    '                ',
  ],

  // Pet Category: Floating orbital star slime
  cat_pet: [
    '                ',
    '      0000      ',
    '    00eeee00    ',
    '   0eeeeeekk0   ',
    '  0ee00ee00ek0  ',
    ' 0eee0weee0wek0 ',
    ' 0eeeeeeeeeeek0 ',
    ' 0eeeeeeeeeeee0 ',
    ' 0eeEeeeeeeEee0 ',
    ' 0eeeeeeeeeeee0 ',
    ' 00EEEEEEEEEE00 ',
    '  000000000000  ',
    '   0c0    0c0   ',
    '                ',
    '                ',
    '                ',
  ],

  // Trail Category: Comet starlight trail
  cat_trail: [
    '             00 ',
    '            0yy0',
    '          00yy0 ',
    '       000yyyy0 ',
    '     00yyy0yy0  ',
    '   00yyyy0 00   ',
    ' 00yyyy00       ',
    '0wwyy00         ',
    '0ww00           ',
    ' 00             ',
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
    '                ',
  ],

  // Aura Category: Supernova radiant energy rings
  cat_aura: [
    '      0000      ',
    '    00vvvv00    ',
    '   0vv0000vv0   ',
    '  0vv0    0vv0  ',
    ' 0vv0  00  0vv0 ',
    ' 0vv0 0ww0 0vv0 ',
    '0vv0 0wwww0 0vv0',
    '0vv0 0wwww0 0vv0',
    '0vv0 0wwww0 0vv0',
    '0vv0 0wwww0 0vv0',
    ' 0vv0 0ww0 0vv0 ',
    ' 0vv0  00  0vv0 ',
    '  0vv0    0vv0  ',
    '   0vv0000vv0   ',
    '    00vvvv00    ',
    '      0000      ',
  ],

  // Minted Gold Coin
  pixel_coin: [
    '      0000      ',
    '    00gggg00    ',
    '   0gGyyyyGg0   ',
    '  0gGyy  yyGg0  ',
    ' 0gGyy 00 yyGg0 ',
    ' 0gGyy 00 yyGg0 ',
    '0gGyyyy00yyyyGg0',
    '0gGyy000000yyGg0',
    '0gGyy000000yyGg0',
    '0gGyyyy00yyyyGg0',
    ' 0gGyy 00 yyGg0 ',
    ' 0gGyy 00 yyGg0 ',
    '  0gGyy  yyGg0  ',
    '   0gGyyyyGg0   ',
    '    00gggg00    ',
    '      0000      ',
  ],

  // Wisdom XP Diamond
  pixel_xp: [
    '       00       ',
    '      0ck0      ',
    '     0ckkk0     ',
    '    0ckwwkk0    ',
    '   0cCCwwkkC0   ',
    '  0cCCCCkkCCC0  ',
    ' 0cCCCCCCCCCCC0 ',
    '  0uCCCCCCCCCu0 ',
    '   0uCCCCCCCu0  ',
    '    0uCCCCCu0   ',
    '     0uCCCu0    ',
    '      0uCu0     ',
    '       0u0      ',
    '        0       ',
    '                ',
    '                ',
  ],

  // Vitality Heart
  pixel_heart: [
    '                ',
    '  0000    0000  ',
    ' 0rppr0  0rppr0 ',
    '0rppppr00rppppr0',
    '0rppwwppppppppr0',
    '0rppwwppppppppr0',
    '0rppppppppppppr0',
    ' 0rRRRRRRRRRRr0 ',
    ' 0rRRRRRRRRRRr0 ',
    '  0rRRRRRRRRr0  ',
    '   0rDDDDDDr0   ',
    '    0rDDDDr0    ',
    '     0rDDr0     ',
    '      0rr0      ',
    '       00       ',
    '                ',
  ],

  // Knightly Shield
  pixel_shield: [
    ' 00000000000000 ',
    '0zxxxxxxxxxzxzz0',
    '0zxuuuCCCuuuxzz0',
    '0zxuuuCCCuuuxzz0',
    '0zxuuuCCCuuuxzz0',
    '0zxCCCCCCCCCxzz0',
    '0zxCCCCCCCCCxzz0',
    '0zxuuuCCCuuuxzz0',
    '0zxuuuCCCuuuxzz0',
    ' 0zxuuCCCuuxzz0 ',
    ' 0zxuuCCCuuxzz0 ',
    '  0zxuCCCuxz00  ',
    '   0xuCCCux0    ',
    '    0uCCC00     ',
    '     0uC0       ',
    '      00        ',
  ],

  // Imperial Crown (Bosses)
  pixel_crown: [
    '00   00    00   00',
    '0g0 0rr0  0ee0 0g0',
    '0gG00rr0000ee00gG0',
    '0gGG0rr0gg0ee0gGG0',
    ' 0gGG00gGGg00gGG0 ',
    ' 0gGGGyGGGGyGGGG0 ',
    '  0gGGyGGGGyGGg0  ',
    '  0GGGGGGGGGGGG0  ',
    '  0GGyGGyGGyGGG0  ',
    '  0GG00G00G00GG0  ',
    '  0GGGGGGGGGGGG0  ',
    '  00000000000000  ',
    '                  ',
    '                  ',
    '                  ',
    '                  ',
  ],

  // Mini-Boss Lightning
  pixel_lightning: [
    '        000     ',
    '       0yy0     ',
    '      0yyy0     ',
    '     0yyGG0     ',
    '    0yyGG0      ',
    '   0yyGG000000  ',
    '  0yyGGGGGGgy0  ',
    '   00000yyyG0   ',
    '       0yyyG0   ',
    '      0yyyG0    ',
    '     0yyGG0     ',
    '    0yyG00      ',
    '   0yyG0        ',
    '  0yG00         ',
    '  000           ',
    '                ',
  ],

  // Iron Padlock
  pixel_lock: [
    '     000000     ',
    '    0zxxxxz0    ',
    '   0zx0000xz0   ',
    '   0zx0  0xz0   ',
    '   0zx0  0xz0   ',
    '  000000000000  ',
    ' 0gGGGGGGGGGGg0 ',
    ' 0gGyyyyyyyyGg0 ',
    ' 0gGy000000yGg0 ',
    ' 0gGy011110yGg0 ',
    ' 0gGy010010yGg0 ',
    ' 0gGy011110yGg0 ',
    ' 0gGyyyyyyyyGg0 ',
    ' 0gGGGGGGGGGGg0 ',
    '  000000000000  ',
    '                ',
  ],

  // Star
  pixel_star: [
    '       00       ',
    '      0yy0      ',
    '      0yy0      ',
    '    00yyyy00    ',
    ' 0000yyyyyy0000 ',
    '  0yyyyyyyyyy0  ',
    '   0yyyyyyyy0   ',
    '    0yyyyyy0    ',
    '   0yyyyyyyy0   ',
    '  0yyy0000yyy0  ',
    ' 0yy00    00yy0 ',
    ' 00          00 ',
    '                ',
    '                ',
    '                ',
    '                ',
  ],

  // Scholar Face Portrait
  pixel_scholar_portrait: [
    '     000000     ',
    '   0011111100   ',
    '  011vvvvvv110  ',
    ' 011vGGGGGGv110 ',
    ' 01vGccccccGv10 ',
    ' 01vGckkkkcGv10 ',
    ' 01vGckwwkcGv10 ',
    ' 01vGckkkkcGv10 ',
    ' 01vGccccccGv10 ',
    ' 011vGGGGGGv110 ',
    '  011vvvvvv110  ',
    '  000111111000  ',
    ' 0vv00111100vv0 ',
    '0vvvv000000vvvv0',
    '0000000000000000',
    '                ',
  ],
};
