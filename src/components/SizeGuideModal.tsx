import React, { useState } from 'react';
import { X, Ruler, Sparkles } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [guideCategory, setGuideCategory] = useState<'rtw' | 'native' | 'corporate'>('rtw');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 dark:bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative bg-[#FAF9F5] dark:bg-[#07241B] w-full max-w-3xl rounded-sm border border-[#E7E2D5] dark:border-[#164132] shadow-2xl p-6 sm:p-8 transition-colors">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#064E3B] dark:text-[#34D399] font-semibold mb-2">
          <Ruler className="w-4 h-4 text-[#C5A059]" />
          <span>Serena Diamond Bespoke Atelier &bull; Lagos</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-[#FAF9F6] font-medium mb-3">
          Executive Size Chart & Measurement Guide
        </h3>

        <p className="text-xs text-stone-600 dark:text-[#A7C4B8] mb-5 leading-relaxed">
          Our silhouettes are precision-engineered for African executive female proportions. Select a garment silhouette below to inspect tailored dimensions in inches.
        </p>

        {/* Silhouette Selector Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5 p-1 bg-stone-200/60 dark:bg-[#041812] rounded-xs border border-stone-200 dark:border-[#164132]">
          <button
            onClick={() => setGuideCategory('rtw')}
            className={`flex-1 min-w-[140px] py-2 px-3 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              guideCategory === 'rtw'
                ? 'bg-[#064E3B] text-[#FAF9F5] shadow-xs'
                : 'text-stone-700 dark:text-[#C5D6CF] hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Ready-to-Wear (RTW)</span>
          </button>
          <button
            onClick={() => setGuideCategory('native')}
            className={`flex-1 min-w-[140px] py-2 px-3 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              guideCategory === 'native'
                ? 'bg-[#064E3B] text-[#FAF9F5] shadow-xs'
                : 'text-stone-700 dark:text-[#C5D6CF] hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Nigerian Native Wears</span>
          </button>
          <button
            onClick={() => setGuideCategory('corporate')}
            className={`flex-1 min-w-[140px] py-2 px-3 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              guideCategory === 'corporate'
                ? 'bg-[#064E3B] text-[#FAF9F5] shadow-xs'
                : 'text-stone-700 dark:text-[#C5D6CF] hover:text-stone-900'
            }`}
          >
            <Ruler className="w-3.5 h-3.5" />
            <span>Corporate Power Suits</span>
          </button>
        </div>

        {/* Size Table: RTW */}
        {guideCategory === 'rtw' ? (
          <div className="overflow-x-auto border border-[#E7E2D5] dark:border-[#164132] rounded-xs bg-white dark:bg-[#0A2E22] mb-6 shadow-2xs">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#064E3B] text-[#F3E5AB] font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-3">Size</th>
                  <th className="py-3 px-3">UK / NG</th>
                  <th className="py-3 px-3">Bust (in)</th>
                  <th className="py-3 px-3">Waist (in)</th>
                  <th className="py-3 px-3">Hips (in)</th>
                  <th className="py-3 px-3">Wrap Dress Length</th>
                  <th className="py-3 px-3">Jumpsuit Inseam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-[#164132] text-stone-800 dark:text-[#FAF9F6]">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">XS</td>
                  <td className="py-2.5 px-3">UK 6 - 8</td>
                  <td className="py-2.5 px-3">32" - 33"</td>
                  <td className="py-2.5 px-3">25" - 26"</td>
                  <td className="py-2.5 px-3">35" - 36"</td>
                  <td className="py-2.5 px-3">46.0"</td>
                  <td className="py-2.5 px-3">32.0"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">S</td>
                  <td className="py-2.5 px-3">UK 10</td>
                  <td className="py-2.5 px-3">34" - 35"</td>
                  <td className="py-2.5 px-3">27" - 28"</td>
                  <td className="py-2.5 px-3">37" - 38"</td>
                  <td className="py-2.5 px-3">46.5"</td>
                  <td className="py-2.5 px-3">32.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">M</td>
                  <td className="py-2.5 px-3">UK 12</td>
                  <td className="py-2.5 px-3">36" - 37"</td>
                  <td className="py-2.5 px-3">29" - 30"</td>
                  <td className="py-2.5 px-3">39" - 41"</td>
                  <td className="py-2.5 px-3">47.0"</td>
                  <td className="py-2.5 px-3">33.0"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">L</td>
                  <td className="py-2.5 px-3">UK 14</td>
                  <td className="py-2.5 px-3">38" - 40"</td>
                  <td className="py-2.5 px-3">31" - 33"</td>
                  <td className="py-2.5 px-3">42" - 44"</td>
                  <td className="py-2.5 px-3">47.5"</td>
                  <td className="py-2.5 px-3">33.0"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">XL</td>
                  <td className="py-2.5 px-3">UK 16 - 18</td>
                  <td className="py-2.5 px-3">41" - 43"</td>
                  <td className="py-2.5 px-3">34" - 36"</td>
                  <td className="py-2.5 px-3">45" - 47"</td>
                  <td className="py-2.5 px-3">48.0"</td>
                  <td className="py-2.5 px-3">33.5"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">1X - 4X</td>
                  <td className="py-2.5 px-3">UK 20 - 30</td>
                  <td className="py-2.5 px-3">44" - 57"</td>
                  <td className="py-2.5 px-3">37" - 51"</td>
                  <td className="py-2.5 px-3">48" - 62"</td>
                  <td className="py-2.5 px-3">48.5"</td>
                  <td className="py-2.5 px-3">34.0"</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : guideCategory === 'native' ? (
          <div className="overflow-x-auto border border-[#E7E2D5] dark:border-[#164132] rounded-xs bg-white dark:bg-[#0A2E22] mb-6 shadow-2xs">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#064E3B] text-[#F3E5AB] font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-3">Size</th>
                  <th className="py-3 px-3">UK / NG</th>
                  <th className="py-3 px-3">Agbada Span</th>
                  <th className="py-3 px-3">Senator Chest</th>
                  <th className="py-3 px-3">Iro Wrap Width</th>
                  <th className="py-3 px-3">Sokoto Waist</th>
                  <th className="py-3 px-3">Sokoto Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-[#164132] text-stone-800 dark:text-[#FAF9F6]">
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">XS</td>
                  <td className="py-2.5 px-3">UK 6 - 8</td>
                  <td className="py-2.5 px-3">48" - 50"</td>
                  <td className="py-2.5 px-3">34" - 36"</td>
                  <td className="py-2.5 px-3">56"</td>
                  <td className="py-2.5 px-3">26" - 27"</td>
                  <td className="py-2.5 px-3">39.0"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">S</td>
                  <td className="py-2.5 px-3">UK 10</td>
                  <td className="py-2.5 px-3">50" - 52"</td>
                  <td className="py-2.5 px-3">36" - 38"</td>
                  <td className="py-2.5 px-3">58"</td>
                  <td className="py-2.5 px-3">28" - 29"</td>
                  <td className="py-2.5 px-3">39.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">M</td>
                  <td className="py-2.5 px-3">UK 12</td>
                  <td className="py-2.5 px-3">52" - 54"</td>
                  <td className="py-2.5 px-3">38" - 40"</td>
                  <td className="py-2.5 px-3">60"</td>
                  <td className="py-2.5 px-3">30" - 32"</td>
                  <td className="py-2.5 px-3">40.0"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">L</td>
                  <td className="py-2.5 px-3">UK 14</td>
                  <td className="py-2.5 px-3">54" - 56"</td>
                  <td className="py-2.5 px-3">41" - 43"</td>
                  <td className="py-2.5 px-3">62"</td>
                  <td className="py-2.5 px-3">33" - 35"</td>
                  <td className="py-2.5 px-3">40.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">XL</td>
                  <td className="py-2.5 px-3">UK 16 - 18</td>
                  <td className="py-2.5 px-3">56" - 58"</td>
                  <td className="py-2.5 px-3">44" - 46"</td>
                  <td className="py-2.5 px-3">65"</td>
                  <td className="py-2.5 px-3">36" - 38"</td>
                  <td className="py-2.5 px-3">41.0"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">1X</td>
                  <td className="py-2.5 px-3">UK 20</td>
                  <td className="py-2.5 px-3">58" - 60"</td>
                  <td className="py-2.5 px-3">47" - 49"</td>
                  <td className="py-2.5 px-3">68"</td>
                  <td className="py-2.5 px-3">39" - 41"</td>
                  <td className="py-2.5 px-3">41.5"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-bold text-[#064E3B] dark:text-[#34D399]">2X - 4X</td>
                  <td className="py-2.5 px-3">UK 22 - 30</td>
                  <td className="py-2.5 px-3">60" - 66"</td>
                  <td className="py-2.5 px-3">50" - 58"</td>
                  <td className="py-2.5 px-3">72" - 76"</td>
                  <td className="py-2.5 px-3">42" - 52"</td>
                  <td className="py-2.5 px-3">42.0"</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          /* Size Table: Corporate */
          <div className="overflow-x-auto border border-[#E7E2D5] dark:border-[#164132] rounded-xs bg-white dark:bg-[#0A2E22] mb-6 shadow-2xs">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#064E3B] text-[#F3E5AB] font-semibold uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">UK / NG</th>
                  <th className="py-3 px-4">Bust (in)</th>
                  <th className="py-3 px-4">Waist (in)</th>
                  <th className="py-3 px-4">Hips (in)</th>
                  <th className="py-3 px-4">Blazer Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-[#164132] text-stone-800 dark:text-[#FAF9F6]">
                <tr>
                  <td className="py-2.5 px-4 font-bold text-[#064E3B] dark:text-[#34D399]">XS</td>
                  <td className="py-2.5 px-4">UK 6 - 8</td>
                  <td className="py-2.5 px-4">32" - 33"</td>
                  <td className="py-2.5 px-4">25" - 26"</td>
                  <td className="py-2.5 px-4">35" - 36"</td>
                  <td className="py-2.5 px-4">26.5"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-4 font-bold text-[#064E3B] dark:text-[#34D399]">S</td>
                  <td className="py-2.5 px-4">UK 10</td>
                  <td className="py-2.5 px-4">34" - 35"</td>
                  <td className="py-2.5 px-4">27" - 28"</td>
                  <td className="py-2.5 px-4">37" - 38"</td>
                  <td className="py-2.5 px-4">27.0"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-[#064E3B] dark:text-[#34D399]">M</td>
                  <td className="py-2.5 px-4">UK 12</td>
                  <td className="py-2.5 px-4">36" - 37"</td>
                  <td className="py-2.5 px-4">29" - 30"</td>
                  <td className="py-2.5 px-4">39" - 41"</td>
                  <td className="py-2.5 px-4">27.5"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-4 font-bold text-[#064E3B] dark:text-[#34D399]">L</td>
                  <td className="py-2.5 px-4">UK 14</td>
                  <td className="py-2.5 px-4">38" - 40"</td>
                  <td className="py-2.5 px-4">31" - 33"</td>
                  <td className="py-2.5 px-4">42" - 44"</td>
                  <td className="py-2.5 px-4">28.0"</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold text-[#064E3B] dark:text-[#34D399]">XL</td>
                  <td className="py-2.5 px-4">UK 16 - 18</td>
                  <td className="py-2.5 px-4">41" - 43"</td>
                  <td className="py-2.5 px-4">34" - 36"</td>
                  <td className="py-2.5 px-4">45" - 47"</td>
                  <td className="py-2.5 px-4">28.5"</td>
                </tr>
                <tr className="bg-stone-50 dark:bg-[#07241B]">
                  <td className="py-2.5 px-4 font-bold text-[#064E3B] dark:text-[#34D399]">1X - 4X</td>
                  <td className="py-2.5 px-4">UK 20 - 30</td>
                  <td className="py-2.5 px-4">44" - 57"</td>
                  <td className="py-2.5 px-4">37" - 51"</td>
                  <td className="py-2.5 px-4">48" - 62"</td>
                  <td className="py-2.5 px-4">29.0" - 30.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="p-4 bg-white dark:bg-[#0A2E22] border border-stone-200 dark:border-[#164132] rounded text-xs text-stone-600 dark:text-[#A7C4B8] space-y-1">
          <p className="font-semibold text-stone-900 dark:text-[#FAF9F6]">Complimentary Atelier Alterations in Victoria Island</p>
          <p>
            Every Serena Diamond garment includes 1 complimentary private fitting adjustment at our Victoria Island showroom or an executive office call-out to ensure sleeve breaks, Agbada drape, and hem lengths are tailored to perfection.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#064E3B] dark:bg-[#10B981] text-[#FAF9F5] dark:text-[#041812] text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer hover:bg-[#04241B] transition-colors"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
