import React, { useState, useMemo } from 'react';
import { FLASHCARDS_DATA } from '../data/flashcards';
import { Flashcard } from '../types/immunology';
import {
  RotateCw,
  Check,
  X,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  Filter,
  Globe,
  Sparkles,
  Split,
  Lightbulb,
  BookOpen
} from 'lucide-react';

interface FlashcardsDeckProps {
  language?: 'ar' | 'en' | 'bilingual';
}

export const FlashcardsDeck: React.FC<FlashcardsDeckProps> = ({ language = 'ar' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [masteredCards, setMasteredCards] = useState<Record<string, boolean>>({});
  const [viewMode, setViewMode] = useState<'bilingual' | 'ar' | 'en'>(
    language === 'en' ? 'en' : language === 'ar' ? 'ar' : 'bilingual'
  );

  const categories = useMemo(() => {
    const set = new Set(FLASHCARDS_DATA.map((f) => f.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredCards = useMemo(() => {
    if (selectedCategory === 'All') return FLASHCARDS_DATA;
    return FLASHCARDS_DATA.filter((f) => f.category === selectedCategory);
  }, [selectedCategory]);

  const currentCard: Flashcard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const rand = Math.floor(Math.random() * filteredCards.length);
    setCurrentIndex(rand);
  };

  const markMastered = (id: string, status: boolean) => {
    setMasteredCards((prev) => ({ ...prev, [id]: status }));
    handleNext();
  };

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl max-w-4xl mx-auto space-y-6">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Active Recall & Spaced Repetition | بطاقات الاستذكار السريع
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              أ.د. رنا حبيب | Dr. Rana Habib Deck
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            Immunology Flashcards Master Deck
          </h2>
          <p className="text-sm text-gray-700 mt-1">
            بطاقات استذكار علمية متخصصة ومصممة للتثبيت السريع لمسارات المناعة الجزيئية ومصطلحات البورد والجامعة.
          </p>
        </div>

        {/* View Switcher & Shuffle */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center bg-white p-1 rounded-2xl border border-gray-300 shadow-sm text-xs">
            <button
              onClick={() => setViewMode('bilingual')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'bilingual'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Split className="w-3.5 h-3.5" />
              <span>مزدوج (Dual)</span>
            </button>
            <button
              onClick={() => setViewMode('ar')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                viewMode === 'ar'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setViewMode('en')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                viewMode === 'en'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              English
            </button>
          </div>

          <button
            onClick={handleShuffle}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-2xl bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 transition-all shadow-sm"
          >
            <Shuffle className="w-3.5 h-3.5 text-[#8b0a1a]" />
            <span>خلط (Shuffle)</span>
          </button>
        </div>
      </div>

      {/* Category Navigation Pills */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 custom-scrollbar text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`px-4 py-2 rounded-2xl whitespace-nowrap font-bold transition-all shadow-sm ${
              selectedCategory === cat
                ? 'bg-[#8b0a1a] text-white shadow-md'
                : 'bg-white border border-gray-300 text-gray-700 hover:border-[#8b0a1a]/40 hover:text-[#8b0a1a]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Card Canvas with 3D Flip */}
      <div className="my-6">
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className={`min-h-[340px] rounded-3xl border p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 select-none relative overflow-hidden shadow-xl ${
            isFlipped
              ? 'bg-red-50/95 border-[#8b0a1a] shadow-2xl ring-2 ring-[#8b0a1a]/20'
              : 'bg-white border-gray-300 hover:border-[#8b0a1a]/50'
          }`}
        >
          {/* Card Top Meta */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <span className="text-xs font-black uppercase tracking-wider text-[#8b0a1a]">
              {currentCard.category} • {currentCard.slideRef}
            </span>
            <div className="flex items-center gap-2">
              {masteredCards[currentCard.id] && (
                <span className="px-2.5 py-0.5 text-xs font-extrabold bg-emerald-100 text-emerald-800 rounded-full border border-emerald-300">
                  ✓ تم التثبيت (Mastered)
                </span>
              )}
              <span className="text-xs text-gray-500 font-mono font-bold">
                {currentIndex + 1} / {filteredCards.length}
              </span>
            </div>
          </div>

          {/* Card Body */}
          <div className="my-auto py-5">
            {!isFlipped ? (
              <div className="space-y-4">
                {viewMode !== 'ar' && (
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-snug">
                    {currentCard.front}
                  </h3>
                )}
                {viewMode !== 'en' && currentCard.frontArabic && (
                  <p
                    className="text-lg sm:text-xl font-bold text-[#8b0a1a] leading-relaxed"
                    dir="rtl"
                    style={{ fontFamily: "'Arial', 'Segoe UI', sans-serif" }}
                  >
                    {currentCard.frontArabic}
                  </p>
                )}
                <div className="flex items-center gap-2 text-xs text-gray-500 font-bold pt-2">
                  <RotateCw className="w-4 h-4 text-[#8b0a1a]" />
                  <span>انقر لقلب البطاقة وإظهار الجواب المفصل (Click to reveal high-yield answer)</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <div className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider">
                  Detailed Explanation & Molecular Principle | الشرح العلمي والآلية:
                </div>
                {viewMode !== 'ar' && (
                  <p className="text-sm sm:text-base text-gray-900 whitespace-pre-line leading-relaxed font-semibold">
                    {currentCard.back}
                  </p>
                )}
                {viewMode !== 'en' && currentCard.backArabic && (
                  <p
                    className="text-xs sm:text-sm text-gray-800 font-sans whitespace-pre-line leading-relaxed border-t border-gray-300 pt-3 font-medium"
                    dir="rtl"
                    style={{ fontFamily: "'Arial', 'Segoe UI', sans-serif" }}
                  >
                    {currentCard.backArabic}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Card Bottom Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-3">
            <span className="text-xs font-bold truncate text-gray-600">{currentCard.subtext}</span>
            <div className="flex gap-1.5">
              {currentCard.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md bg-gray-100 border border-gray-300 text-[11px] font-bold text-gray-600"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions & Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={handlePrev}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-2xl shadow-sm transition-all"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>
          <button
            onClick={handleNext}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-bold bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 rounded-2xl shadow-sm transition-all"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => markMastered(currentCard.id, false)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black bg-rose-50 border border-rose-300 hover:bg-rose-100 text-rose-800 rounded-2xl shadow-sm transition-all"
          >
            <X className="w-4 h-4" /> يحتاج مراجعة (Review)
          </button>
          <button
            onClick={() => markMastered(currentCard.id, true)}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-black bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 rounded-2xl shadow-sm transition-all"
          >
            <Check className="w-4 h-4" /> تم الإتقان (Mastered)
          </button>
        </div>
      </div>
    </div>
  );
};
