import React, { useState } from 'react';
import { COMPARISON_MATRICES } from '../data/comparisons';
import { ComparisonMatrix } from '../types/immunology';
import {
  Layers,
  Check,
  Sparkles,
  Search,
  FileSpreadsheet,
  Globe,
  Lightbulb,
  ArrowRight,
  Split,
  BookOpen
} from 'lucide-react';

interface ComparisonHubProps {
  language?: 'ar' | 'en' | 'bilingual';
}

export const ComparisonHub: React.FC<ComparisonHubProps> = ({ language = 'ar' }) => {
  const [selectedMatrixId, setSelectedMatrixId] = useState<string>(COMPARISON_MATRICES[0].id);
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [displayMode, setDisplayMode] = useState<'bilingual' | 'ar' | 'en'>(language === 'en' ? 'en' : language === 'bilingual' ? 'bilingual' : 'bilingual');
  const [showMnemonics, setShowMnemonics] = useState<boolean>(true);

  const activeMatrix = COMPARISON_MATRICES.find((m) => m.id === selectedMatrixId) || COMPARISON_MATRICES[0];

  const isRtl = displayMode === 'ar' || language === 'ar';

  const filteredRows = activeMatrix.rows.filter(
    (r) =>
      r.feature.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (r.featureAr && r.featureAr.includes(searchFilter)) ||
      r.col1.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (r.col1Ar && r.col1Ar.includes(searchFilter)) ||
      r.col2.toLowerCase().includes(searchFilter.toLowerCase()) ||
      (r.col2Ar && r.col2Ar.includes(searchFilter)) ||
      (r.col3 && r.col3.toLowerCase().includes(searchFilter.toLowerCase())) ||
      (r.col3Ar && r.col3Ar.includes(searchFilter))
  );

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Differential Comparison & Synthesis Hub | مصفوفة المقارنات السريرية
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              أ.د. رنا حبيب | Dr. Rana Habib Theme
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            {displayMode === 'ar'
              ? activeMatrix.titleAr || activeMatrix.title
              : displayMode === 'en'
              ? activeMatrix.title
              : `${activeMatrix.title} | ${activeMatrix.titleAr || ''}`}
          </h2>
          <p className="text-sm text-gray-700 mt-1 max-w-3xl leading-relaxed">
            {displayMode === 'ar'
              ? activeMatrix.descriptionAr || activeMatrix.description
              : activeMatrix.description}
          </p>
        </div>

        {/* Display Controls & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Side-by-Side Dual View Switcher */}
          <div className="flex items-center bg-white p-1 rounded-2xl border border-gray-300 shadow-sm text-xs">
            <button
              onClick={() => setDisplayMode('bilingual')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                displayMode === 'bilingual'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              title="عرض مزدوج جنبًا إلى جنب (Dual Side-by-Side)"
            >
              <Split className="w-3.5 h-3.5" />
              <span>مزدوج (Side-by-Side)</span>
            </button>
            <button
              onClick={() => setDisplayMode('ar')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                displayMode === 'ar'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setDisplayMode('en')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                displayMode === 'en'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              English
            </button>
          </div>

          <button
            onClick={() => setShowMnemonics(!showMnemonics)}
            className={`px-3.5 py-1.5 rounded-2xl border text-xs font-black flex items-center gap-1.5 transition-all shadow-sm ${
              showMnemonics
                ? 'bg-amber-100 border-amber-300 text-amber-900'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>{showMnemonics ? 'مفاتيح التذكر مفعلة 💡' : 'إظهار مفاتيح التذكر 💡'}</span>
          </button>
        </div>
      </div>

      {/* Search Input & Filter */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
          placeholder="Search comparison criteria (MHC, T-bet, TAP, B7, CD28, Perforin)..."
          className="w-full bg-white border border-gray-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#8b0a1a] focus:ring-2 focus:ring-[#8b0a1a]/20 shadow-sm transition-all"
        />
      </div>

      {/* Matrix Selector Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 custom-scrollbar text-xs">
        {COMPARISON_MATRICES.map((mat) => {
          const isSelected = mat.id === activeMatrix.id;
          return (
            <button
              key={mat.id}
              onClick={() => {
                setSelectedMatrixId(mat.id);
                setSearchFilter('');
              }}
              className={`px-4 py-2.5 rounded-2xl whitespace-nowrap font-bold transition-all shadow-sm flex items-center gap-2 ${
                isSelected
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'bg-white border border-gray-300 text-gray-700 hover:text-[#8b0a1a] hover:border-[#8b0a1a]/40'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{displayMode === 'ar' ? mat.titleAr || mat.title : mat.title}</span>
            </button>
          );
        })}
      </div>

      {/* High-Yield Mnemonic Key Box for the Active Matrix */}
      {showMnemonics && (activeMatrix.mnemonicKeyEn || activeMatrix.mnemonicKeyAr) && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-2 text-slate-900 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs shadow">
              💡
            </span>
            <h4 className="text-xs sm:text-sm font-black text-amber-900">
              مفتاح الحفظ السريع وعدم النسيان (Exam Mnemonic & Golden Rule)
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm leading-relaxed">
            {activeMatrix.mnemonicKeyEn && (
              <div className="p-3 bg-white/90 rounded-xl border border-amber-200 text-left font-medium text-slate-800" dir="ltr">
                <span className="text-[10px] font-black uppercase text-amber-800 block mb-0.5">English Mnemonic</span>
                {activeMatrix.mnemonicKeyEn}
              </div>
            )}
            {activeMatrix.mnemonicKeyAr && (
              <div className="p-3 bg-white/90 rounded-xl border border-amber-200 text-right font-bold text-slate-800" dir="rtl">
                <span className="text-[10px] font-black uppercase text-amber-800 block mb-0.5">القاعدة بالعربية</span>
                {activeMatrix.mnemonicKeyAr}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Comparison Table with Side-by-Side Dual Support */}
      <div className="overflow-x-auto rounded-2xl border border-gray-300 bg-white shadow-lg">
        <table className="w-full text-start text-xs sm:text-sm border-collapse">
          <thead>
            <tr className="bg-[#8b0a1a] text-white font-extrabold">
              {activeMatrix.headers.map((h, i) => {
                const headerAr = activeMatrix.headersAr?.[i];
                return (
                  <th
                    key={i}
                    className="p-4 border-r border-red-900 last:border-0 uppercase tracking-wider text-xs font-black text-left"
                  >
                    {displayMode === 'ar' ? (
                      <div dir="rtl" className="text-right">{headerAr || h}</div>
                    ) : displayMode === 'en' ? (
                      <div>{h}</div>
                    ) : (
                      <div>
                        <div>{h}</div>
                        {headerAr && (
                          <div className="text-[11px] font-normal text-red-200 font-sans mt-0.5" dir="rtl">
                            {headerAr}
                          </div>
                        )}
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-gray-200 transition-colors ${
                  row.highlight
                    ? 'bg-red-50/70 font-semibold'
                    : idx % 2 === 0
                    ? 'bg-[#fbfbfb] hover:bg-red-50/30'
                    : 'bg-white hover:bg-red-50/30'
                }`}
              >
                {/* Feature Column */}
                <td className="p-4 font-bold text-gray-900 border-r border-gray-200 align-top">
                  <div className="flex items-start gap-2">
                    {row.highlight && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#8b0a1a] shrink-0 mt-1" />
                    )}
                    <div>
                      {displayMode === 'ar' ? (
                        <span className="text-[#8b0a1a] font-black" dir="rtl">{row.featureAr || row.feature}</span>
                      ) : displayMode === 'en' ? (
                        <span className="text-[#8b0a1a] font-bold">{row.feature}</span>
                      ) : (
                        <div className="space-y-0.5">
                          <div className="text-[#8b0a1a] font-bold">{row.feature}</div>
                          {row.featureAr && (
                            <div className="text-xs text-gray-700 font-bold" dir="rtl">
                              {row.featureAr}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </td>

                {/* Column 1 */}
                <td className="p-4 text-gray-800 border-r border-gray-200 leading-relaxed align-top">
                  {displayMode === 'ar' ? (
                    <div dir="rtl" className="text-right">{row.col1Ar || row.col1}</div>
                  ) : displayMode === 'en' ? (
                    <div>{row.col1}</div>
                  ) : (
                    <div className="space-y-1">
                      <div className="text-gray-900 font-medium">{row.col1}</div>
                      {row.col1Ar && (
                        <div className="text-xs text-gray-700 font-bold border-t border-gray-200/80 pt-1 text-right" dir="rtl">
                          {row.col1Ar}
                        </div>
                      )}
                    </div>
                  )}
                </td>

                {/* Column 2 */}
                <td className="p-4 text-gray-800 border-r border-gray-200 leading-relaxed align-top">
                  {displayMode === 'ar' ? (
                    <div dir="rtl" className="text-right">{row.col2Ar || row.col2}</div>
                  ) : displayMode === 'en' ? (
                    <div>{row.col2}</div>
                  ) : (
                    <div className="space-y-1">
                      <div className="text-gray-900 font-medium">{row.col2}</div>
                      {row.col2Ar && (
                        <div className="text-xs text-gray-700 font-bold border-t border-gray-200/80 pt-1 text-right" dir="rtl">
                          {row.col2Ar}
                        </div>
                      )}
                    </div>
                  )}
                </td>

                {/* Column 3 (If available) */}
                {row.col3 && (
                  <td className="p-4 text-gray-800 border-r border-gray-200 leading-relaxed align-top">
                    {displayMode === 'ar' ? (
                      <div dir="rtl" className="text-right">{row.col3Ar || row.col3}</div>
                    ) : displayMode === 'en' ? (
                      <div>{row.col3}</div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-gray-900 font-medium">{row.col3}</div>
                        {row.col3Ar && (
                          <div className="text-xs text-gray-700 font-bold border-t border-gray-200/80 pt-1 text-right" dir="rtl">
                            {row.col3Ar}
                          </div>
                        )}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
