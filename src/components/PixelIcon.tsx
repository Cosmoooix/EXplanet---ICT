import React, { memo } from 'react';
import { PIXEL_ICON_MATRICES, ITEM_PALETTE, PixelIconKey } from '../game/itemSprites';

interface PixelIconProps {
  name: PixelIconKey;
  size?: number;
  className?: string;
  title?: string;
}

export const PixelIcon: React.FC<PixelIconProps> = memo(({
  name,
  size = 24,
  className = '',
  title,
}) => {
  const matrix = PIXEL_ICON_MATRICES[name] || PIXEL_ICON_MATRICES.chest_standard;

  // Render SVG with 16x16 grid and shape-rendering crispEdges for genuine pixel-art
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      className={`inline-block select-none shrink-0 ${className}`}
      style={{
        imageRendering: 'pixelated',
        shapeRendering: 'crispEdges',
      }}
      aria-label={title || name}
      role="img"
    >
      {title && <title>{title}</title>}
      {matrix.map((row, rIdx) => {
        return row.split('').map((char, cIdx) => {
          if (char === ' ') return null;
          const color = ITEM_PALETTE[char];
          if (!color) return null;
          return (
            <rect
              key={`${rIdx}-${cIdx}`}
              x={cIdx}
              y={rIdx}
              width="1"
              height="1"
              fill={color}
            />
          );
        });
      })}
    </svg>
  );
});

PixelIcon.displayName = 'PixelIcon';
