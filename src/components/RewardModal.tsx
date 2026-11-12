import React from 'react';
import { CosmeticItem } from '../types/game';
import { RARITY_COLORS } from '../data/cosmetics';
import { sound } from '../utils/audio';
import { PixelIcon } from './PixelIcon';
import { PixelIconKey } from '../game/itemSprites';

export interface RewardData {
  title: string;
  subtitle?: string;
  coins?: number;
  xp?: number;
  cosmetic?: CosmeticItem;
  isDuplicate?: boolean;
  refundCoins?: number;
  icon?: string;
  pixelIcon?: PixelIconKey;
  consumableName?: string;
  consumableCount?: number;
  description?: string;
}

interface RewardModalProps {
  reward: RewardData | null;
  onClose: () => void;
}

export const RewardModal: React.FC<RewardModalProps> = ({ reward, onClose }) => {
  if (!reward) return null;

  const handleClaim = () => {
    sound.play('coin');
    onClose();
  };

  const renderRewardIcon = () => {
    if (reward.pixelIcon) {
      return <PixelIcon name={reward.pixelIcon} size={44} />;
    }
    if (reward.cosmetic) {
      const cat = reward.cosmetic.category;
      const catMap: Record<string, PixelIconKey> = {
        hat: 'cat_hat',
        hair: 'cat_hair',
        mask: 'cat_mask',
        outfit: 'cat_outfit',
        weapon: 'cat_weapon',
        pet: 'cat_pet',
        trail: 'cat_trail',
        aura: 'cat_aura',
      };
      if (catMap[cat]) {
        return <PixelIcon name={catMap[cat]} size={44} />;
      }
    }
    if (reward.icon === '🗝️') return <PixelIcon name="cosmic_key" size={44} />;
    if (reward.icon === '👑') return <PixelIcon name="pixel_crown" size={44} />;
    if (reward.icon === '⚡') return <PixelIcon name="pixel_lightning" size={44} />;
    if (reward.icon === '⚔️') return <PixelIcon name="strength_sword" size={44} />;
    if (reward.icon === '🪙') return <PixelIcon name="pixel_coin" size={44} />;
    if (reward.icon === '❤️' || reward.icon === '⛲') return <PixelIcon name="health_potion" size={44} />;
    return <PixelIcon name="pixel_star" size={44} />;
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="cosmic-card w-full max-w-sm rounded-3xl p-6 border border-white/20 text-center space-y-5 shadow-2xl relative">
        {/* Glow Shimmer behind icon */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-amber-500/30 border border-white/20 flex items-center justify-center shadow-xl">
          {renderRewardIcon()}
        </div>

        <div className="space-y-1">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-purple-400">
            {reward.subtitle || 'Expedition Bounty'}
          </span>
          <h3 className="text-xl font-bold text-white font-cinzel">{reward.title}</h3>
        </div>

        {/* Cosmetic Item Detail if awarded */}
        {reward.cosmetic && (
          <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
            <div className="flex items-center justify-center gap-2">
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  RARITY_COLORS[reward.cosmetic.rarity]?.text
                }`}
              >
                {reward.cosmetic.rarity}
              </span>
              <span className="text-xs text-slate-400 capitalize">
                {reward.cosmetic.category}
              </span>
            </div>
            <p className="text-sm font-bold text-white font-cinzel">{reward.cosmetic.name}</p>
            <p className="text-[11px] text-slate-300 line-clamp-2">{reward.cosmetic.description}</p>
            {reward.isDuplicate && (
              <p className="text-[11px] text-amber-300 font-semibold pt-1">
                Already owned! Compensated with +{reward.refundCoins} coins.
              </p>
            )}
          </div>
        )}

        {/* Consumable Item Detail if awarded */}
        {reward.consumableName && (
          <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/30 space-y-1 text-center">
            <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
              Supply Unboxed
            </span>
            <p className="text-sm font-bold text-white font-cinzel">
              {reward.consumableName} {reward.consumableCount ? `x${reward.consumableCount}` : ''}
            </p>
            {reward.description && (
              <p className="text-[11px] text-slate-300 leading-relaxed">{reward.description}</p>
            )}
          </div>
        )}

        {/* Coins and XP Badges */}
        <div className="flex items-center justify-center gap-3">
          {reward.coins !== undefined && reward.coins > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono font-bold text-sm">
              <PixelIcon name="pixel_coin" size={16} />
              <span>+{reward.coins} Coins</span>
            </div>
          )}

          {reward.xp !== undefined && reward.xp > 0 && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono font-bold text-sm">
              <PixelIcon name="pixel_xp" size={16} />
              <span>+{reward.xp} XP</span>
            </div>
          )}
        </div>

        {/* Claim Button */}
        <button
          onClick={handleClaim}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-purple-600/30 transition-all hover:scale-[1.02]"
        >
          Claim Bounty
        </button>
      </div>
    </div>
  );
};
