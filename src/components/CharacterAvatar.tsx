import React from 'react';
import { EquippedCosmetics } from '../types/game';
import { COSMETICS_DATABASE } from '../data/cosmetics';
import { PixelIcon } from './PixelIcon';

interface CharacterAvatarProps {
  avatarBase: string;
  equipped: EquippedCosmetics;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showDetails?: boolean;
}

export const CharacterAvatar: React.FC<CharacterAvatarProps> = ({
  avatarBase,
  equipped,
  size = 'md',
  showDetails = false,
}) => {
  const hatItem = COSMETICS_DATABASE.find(c => c.id === equipped.hat);
  const hairItem = COSMETICS_DATABASE.find(c => c.id === equipped.hair);
  const maskItem = COSMETICS_DATABASE.find(c => c.id === equipped.mask);
  const outfitItem = COSMETICS_DATABASE.find(c => c.id === equipped.outfit);
  const weaponItem = COSMETICS_DATABASE.find(c => c.id === equipped.weapon);
  const petItem = COSMETICS_DATABASE.find(c => c.id === equipped.pet);
  const trailItem = COSMETICS_DATABASE.find(c => c.id === equipped.trail);
  const auraItem = COSMETICS_DATABASE.find(c => c.id === equipped.aura);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-44 h-44',
  };

  const pixelSizes = {
    sm: 28,
    md: 46,
    lg: 74,
    xl: 104,
  };

  const currentPixelSize = pixelSizes[size];
  const auraGlow = auraItem?.glowColor || 'rgba(124, 58, 237, 0.25)';

  return (
    <div className="relative inline-flex items-center justify-center select-none group">
      {/* Dynamic Aura Ring */}
      {auraItem && (
        <div
          className="absolute inset-0 rounded-full animate-pulse blur-md opacity-75 transition-all pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${auraGlow} 0%, transparent 70%)`,
            transform: 'scale(1.4)',
          }}
        />
      )}

      {/* Main Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/95 border border-slate-700/60 shadow-xl flex items-center justify-center overflow-visible transition-transform duration-200 group-hover:scale-105`}
        style={{
          boxShadow: auraItem ? `0 0 25px ${auraGlow}` : undefined,
        }}
      >
        {/* Background Trail or Wings */}
        {trailItem && (
          <div className="absolute -top-2 -left-2 opacity-90 animate-bounce pointer-events-none">
            <PixelIcon name="cat_trail" size={Math.round(currentPixelSize * 0.45)} />
          </div>
        )}

        {/* Base Scholar Avatar - 16x16 Pixel Art Character */}
        <div className="relative z-10 flex items-center justify-center filter drop-shadow-md">
          <PixelIcon name="pixel_scholar_portrait" size={currentPixelSize} />
        </div>

        {/* Hat / Headgear overlay */}
        {hatItem && (
          <div
            className="absolute -top-3 z-20 filter drop-shadow-lg transform -rotate-3"
            title={`Hat: ${hatItem.name}`}
          >
            <PixelIcon name="cat_hat" size={Math.round(currentPixelSize * 0.55)} />
          </div>
        )}

        {/* Mask Overlay */}
        {maskItem && (
          <div
            className="absolute z-20 filter drop-shadow"
            title={`Mask: ${maskItem.name}`}
          >
            <PixelIcon name="cat_mask" size={Math.round(currentPixelSize * 0.4)} />
          </div>
        )}

        {/* Outfit Indicator Badge */}
        {outfitItem && (
          <div
            className="absolute -bottom-1 z-20 filter drop-shadow bg-slate-900/90 rounded-full p-0.5 border border-slate-700"
            title={`Outfit: ${outfitItem.name}`}
          >
            <PixelIcon name="cat_outfit" size={Math.round(currentPixelSize * 0.35)} />
          </div>
        )}

        {/* Weapon Held */}
        {weaponItem && (
          <div
            className="absolute -right-3 -bottom-1 z-20 filter drop-shadow-md transform rotate-12"
            title={`Weapon: ${weaponItem.name}`}
          >
            <PixelIcon name="cat_weapon" size={Math.round(currentPixelSize * 0.5)} />
          </div>
        )}

        {/* Floating Pet Companion */}
        {petItem && (
          <div
            className="absolute -left-3.5 -bottom-2 z-20 filter drop-shadow animate-pulse"
            title={`Pet: ${petItem.name}`}
          >
            <PixelIcon name="cat_pet" size={Math.round(currentPixelSize * 0.45)} />
          </div>
        )}
      </div>

      {/* Optional details tooltip */}
      {showDetails && (
        <div className="absolute top-full mt-2 w-48 text-center text-xs text-slate-400 bg-slate-900/90 border border-slate-800 rounded-lg p-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-50">
          <p className="font-semibold text-slate-200">Equipped Gear</p>
          <p className="truncate">Hat: {hatItem?.name || 'None'}</p>
          <p className="truncate">Weapon: {weaponItem?.name || 'None'}</p>
          <p className="truncate">Pet: {petItem?.name || 'None'}</p>
        </div>
      )}
    </div>
  );
};
