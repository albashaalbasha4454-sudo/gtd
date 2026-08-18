import React, { useState, useMemo, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { QuizQuestion } from '../types/immunology';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  Award,
  HelpCircle,
  RotateCcw,
  BookOpen,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Clock,
  Stethoscope,
  ChevronRight,
  Check,
  Split,
  Lightbulb,
  Zap,
  Filter,
  Eye,
  Bookmark,
  Target,
  Sparkles,
  Flame,
  BrainCircuit,
  GraduationCap
} from 'lucide-react';

interface QuizEngineProps {
  language?: 'ar' | 'en' | 'bilingual';
}

type FilterCategory = 'all' | 'mistakes' | 'clinical' | 'mechanisms' | 'rapid20';

export const QuizEngine: React.FC<QuizEngineProps> = ({ language = 'ar' }) => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true); // Default to instant reveal on click!
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'bilingual' | 'ar' | 'en'>(
    language === 'en' ? 'en' : language === 'ar' ? 'ar' : 'bilingual'
  );

  // Filter questions list
  const filteredQuestions = useMemo(() => {
    switch (activeCategory) {
      case 'clinical':
        return QUIZ_QUESTIONS.filter((q) => q.type === 'clinical_vignette' || q.scenario || q.scenarioAr);
      case 'mechanisms':
        return QUIZ_QUESTIONS.filter((q) => q.type !== 'clinical_vignette');
      case 'rapid20':
        return QUIZ_QUESTIONS.slice(0, 20);
      case 'mistakes':
        return QUIZ_QUESTIONS.filter((q) => {
          const ans = userAnswers[q.id];
          return ans && ans !== q.correctAnswer;
        });
      case 'all':
      default:
        return QUIZ_QUESTIONS;
    }
  }, [activeCategory, userAnswers]);

  // Adjust index if out of range after filter
  useEffect(() => {
    if (currentQuestionIndex >= filteredQuestions.length && filteredQuestions.length > 0) {
      setCurrentQuestionIndex(0);
    }
  }, [filteredQuestions.length, currentQuestionIndex]);

  const currentQ: QuizQuestion | undefined = filteredQuestions[currentQuestionIndex] || filteredQuestions[0];

  // Update selected option when question changes
  useEffect(() => {
    if (currentQ) {
      const answered = userAnswers[currentQ.id];
      if (answered) {
        setSelectedOption(answered);
        setIsAnswerSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsAnswerSubmitted(false);
      }
    }
  }, [currentQuestionIndex, currentQ, userAnswers]);

  const handleSelectOption = (optionId: string) => {
    if (!currentQ) return;
    if (isAnswerSubmitted) return; // already answered

    setSelectedOption(optionId);

    if (instantFeedback) {
      // Instant check mode!
      setIsAnswerSubmitted(true);
      const isCorrect = optionId === currentQ.correctAnswer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
      }
      setUserAnswers((prev) => ({ ...prev, [currentQ.id]: optionId }));
    }
  };

  const handleManualSubmit = () => {
    if (!currentQ || !selectedOption || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => ({ ...prev, [currentQ.id]: selectedOption }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizFinished(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    setCurrentQuestionIndex(idx);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers({});
    setIsQuizFinished(false);
    setActiveCategory('all');
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Stats calculation
  const totalAnswered = Object.keys(userAnswers).length;
  const incorrectCount = useMemo(() => {
    return Object.entries(userAnswers).filter(([qid, ans]) => {
      const q = QUIZ_QUESTIONS.find((item) => item.id === qid);
      return q && ans !== q.correctAnswer;
    }).length;
  }, [userAnswers]);

  const correctCount = score;
  const accuracyPercent = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  if (!currentQ && filteredQuestions.length === 0) {
    return (
      <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-8 text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-red-50 text-[#8b0a1a] flex items-center justify-center border border-red-200">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-black text-gray-900">لا توجد أسئلة في هذا التصنيف حالياً</h3>
        <p className="text-sm text-gray-600">
          {activeCategory === 'mistakes'
            ? 'رائع جداً! لم ترتكب أي أخطاء بعد، أو لم تقم بحل أي أسئلة بعد.'
            : 'اختر تصنيفاً آخر لمتابعة الاختبار.'}
        </p>
        <button
          onClick={() => setActiveCategory('all')}
          className="px-6 py-2.5 rounded-2xl bg-[#8b0a1a] text-white font-bold text-xs shadow-md"
        >
          العودة للنموذج الشامل (100 سؤال)
        </button>
      </div>
    );
  }

  const isUserCorrect = isAnswerSubmitted && selectedOption === currentQ.correctAnswer;
  const isUserIncorrect = isAnswerSubmitted && selectedOption !== currentQ.correctAnswer;

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-4 sm:p-7 text-gray-900 shadow-xl space-y-6">
      {/* Header Banner - Exam Ready */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-black rounded-full bg-[#8b0a1a] text-white uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              كلية الصيدلة | بنك 100 سؤال مؤتمت للاختبار
            </span>
            <span className="text-xs text-gray-700 font-bold bg-white px-3 py-0.5 rounded-md border border-gray-300 shadow-sm">
              أ.د. رنا حبيب | المناعة الخلوية (53 شريحة)
            </span>
            <span className="text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-300 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              حل وتصحيح فوري + شرح لعدم النسيان 💡
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2 tracking-tight">
            بنك أسئلة الأتمتة الشامل لطلاب الصيدلة (100 سؤال)
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 mt-1 max-w-3xl leading-relaxed">
            بنك أسئلة تدريبي شامل مخصص لطلاب كلية الصيدلة لمراجعة مقرر المناعة الخلوية وسلايدات الدكتورة رنا حبيب الـ 53 قبل الامتحان، مع شرح وتثبيت فوري للمعلومات.
          </p>
        </div>

        {/* Top Controls: Dual language & Instant Toggle */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Instant feedback toggle */}
          <button
            onClick={() => setInstantFeedback(!instantFeedback)}
            className={`px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 border transition-all ${
              instantFeedback
                ? 'bg-emerald-600 text-white border-emerald-700 shadow-sm'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
            title="إظهار الحل الصحيح فور النقر على الخيار"
          >
            <Zap className={`w-3.5 h-3.5 ${instantFeedback ? 'fill-white' : ''}`} />
            <span>تصحيح فوري: {instantFeedback ? 'مفعل ON' : 'يدوي OFF'}</span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center bg-white p-1 rounded-2xl border border-gray-300 shadow-sm text-xs font-bold">
            <button
              onClick={() => setViewMode('bilingual')}
              className={`px-2.5 py-1 rounded-xl transition-all flex items-center gap-1 ${
                viewMode === 'bilingual' ? 'bg-[#8b0a1a] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Split className="w-3 h-3" />
              <span>مزدوج</span>
            </button>
            <button
              onClick={() => setViewMode('ar')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                viewMode === 'ar' ? 'bg-[#8b0a1a] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setViewMode('en')}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                viewMode === 'en' ? 'bg-[#8b0a1a] text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              English
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs & Quick Stats */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-gray-300 shadow-sm">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => {
              setActiveCategory('all');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1 ${
              activeCategory === 'all'
                ? 'bg-[#8b0a1a] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>الـ 100 سؤال كاملة ({QUIZ_QUESTIONS.length})</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('clinical');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1 ${
              activeCategory === 'clinical'
                ? 'bg-[#8b0a1a] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Stethoscope className="w-3.5 h-3.5 text-red-600" />
            <span>حالات سريرية وبورد</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('mechanisms');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1 ${
              activeCategory === 'mechanisms'
                ? 'bg-[#8b0a1a] text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-indigo-600" />
            <span>آليات جزيئية ومسارات</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('mistakes');
              setCurrentQuestionIndex(0);
            }}
            className={`px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1 ${
              activeCategory === 'mistakes'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 border border-rose-200'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>مراجعة الأخطاء فقط ({incorrectCount})</span>
          </button>
        </div>

        {/* Live Counters */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold self-end lg:self-center">
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-300 px-2.5 py-1 rounded-lg">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>صحيح: {correctCount}</span>
          </div>
          <div className="flex items-center gap-1 bg-rose-50 text-rose-800 border border-rose-300 px-2.5 py-1 rounded-lg">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>خاطئ: {incorrectCount}</span>
          </div>
          <div className="bg-gray-100 text-gray-800 border border-gray-300 px-2.5 py-1 rounded-lg">
            دقة الإجابة: <span className="text-[#8b0a1a] font-black">{accuracyPercent}%</span>
          </div>
        </div>
      </div>

      {/* Main Question Flow */}
      {!isQuizFinished ? (
        <div className="space-y-5">
          {/* Question Index Meta & Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-gray-700 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="font-black text-[#8b0a1a] text-sm bg-red-50 border border-red-200 px-3 py-1 rounded-xl">
                  السؤال {currentQuestionIndex + 1} من {filteredQuestions.length}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white border border-gray-300 font-bold text-[11px] text-gray-800">
                  {currentQ.difficulty}
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-white border border-gray-300 font-semibold text-[11px] text-gray-700">
                  {viewMode === 'en' ? currentQ.category : currentQ.categoryAr || currentQ.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleBookmark(currentQ.id)}
                  className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                    bookmarkedIds.includes(currentQ.id)
                      ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                      : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-100'
                  }`}
                  title="حفظ السؤال للمراجعة قبل الدخول للقاعة"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.includes(currentQ.id) ? 'fill-amber-500 text-amber-600' : ''}`} />
                  <span className="hidden sm:inline">حفظ للمراجعة</span>
                </button>
                <span className="text-xs text-[#8b0a1a] font-bold bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                  سؤال دراسي
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden shadow-inner">
              <div
                className="bg-gradient-to-r from-[#8b0a1a] to-red-600 h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
              />
            </div>

            {/* 100-Question Fast Jump Navigation Matrix */}
            <div className="bg-white p-2.5 rounded-2xl border border-gray-300 shadow-sm space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-gray-600 font-bold px-1">
                <span>شبكة الانتقال السريع بين الأسئلة (1 — {filteredQuestions.length}):</span>
                <span className="text-[10px] text-gray-400 font-mono">
                  {totalAnswered} محلول من أصل {filteredQuestions.length}
                </span>
              </div>
              <div className="flex items-center gap-1 overflow-x-auto py-1 px-0.5 custom-scrollbar max-h-24 flex-wrap">
                {filteredQuestions.map((q, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const ans = userAnswers[q.id];
                  const isAnswered = ans !== undefined;
                  const isCorrect = ans === q.correctAnswer;
                  const isBookmarked = bookmarkedIds.includes(q.id);

                  let btnBg = 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200';
                  if (isAnswered) {
                    btnBg = isCorrect
                      ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-black'
                      : 'bg-rose-100 border-rose-400 text-rose-900 font-black';
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`w-7 h-7 rounded-lg text-[11px] font-mono shrink-0 transition-all border flex items-center justify-center relative ${btnBg} ${
                        isCurrent ? 'ring-2 ring-[#8b0a1a] !bg-[#8b0a1a] !text-white font-black scale-110 shadow-sm z-10' : ''
                      }`}
                      title={`السؤال ${idx + 1}`}
                    >
                      {idx + 1}
                      {isBookmarked && (
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 absolute top-0.5 right-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white border border-gray-300 rounded-3xl p-5 sm:p-8 shadow-lg space-y-6">
              {/* Clinical Scenario Box if available */}
              {(currentQ.scenario || currentQ.scenarioAr) && (
                <div className="p-4 bg-red-50/70 border-l-4 border-l-[#8b0a1a] border border-red-200 rounded-2xl text-xs sm:text-sm text-gray-900 leading-relaxed font-serif">
                  <div className="font-bold text-[#8b0a1a] uppercase tracking-wider flex items-center gap-1.5 font-sans text-xs mb-1.5">
                    <Stethoscope className="w-4 h-4 text-[#8b0a1a]" />
                    <span>سيناريو حالة سريرية | Clinical Vignette</span>
                  </div>
                  {viewMode !== 'en' && currentQ.scenarioAr && (
                    <p className="font-medium text-gray-900 leading-relaxed mb-1">{currentQ.scenarioAr}</p>
                  )}
                  {viewMode !== 'ar' && currentQ.scenario && (
                    <p className="text-gray-700 italic">{currentQ.scenario}</p>
                  )}
                </div>
              )}

              {/* Question Text */}
              <div className="space-y-2">
                {viewMode !== 'en' && currentQ.questionAr && (
                  <h3 className="text-base sm:text-lg font-black text-gray-900 leading-snug">
                    {currentQ.questionAr}
                  </h3>
                )}
                {viewMode !== 'ar' && currentQ.question && (
                  <h3
                    className={`text-sm sm:text-base font-bold leading-snug ${
                      viewMode === 'bilingual' ? 'text-gray-600 font-sans' : 'text-gray-900 font-bold'
                    }`}
                  >
                    {currentQ.question}
                  </h3>
                )}
              </div>

              {/* 4 Options (A, B, C, D) */}
              <div className="space-y-3 pt-2">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOption === opt.id;
                  const isCorrect = opt.id === currentQ.correctAnswer;

                  let optionStyle =
                    'bg-[#fcfcfc] border-gray-200 text-gray-800 hover:border-[#8b0a1a]/50 hover:bg-red-50/20';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle =
                        'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/40 font-bold shadow-sm';
                    } else if (isSelected && !isCorrect) {
                      optionStyle =
                        'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/40 font-bold shadow-sm';
                    } else {
                      optionStyle = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyle =
                      'bg-red-50 border-[#8b0a1a] text-[#8b0a1a] ring-2 ring-[#8b0a1a]/30 font-bold';
                  }

                  return (
                    <button
                      key={opt.id}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-start gap-3.5 shadow-sm group cursor-pointer disabled:cursor-default ${optionStyle}`}
                    >
                      <span
                        className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 shadow-sm transition-transform group-hover:scale-105 ${
                          isAnswerSubmitted
                            ? isCorrect
                              ? 'bg-emerald-600 text-white'
                              : isSelected
                              ? 'bg-rose-600 text-white'
                              : 'bg-gray-200 text-gray-500'
                            : isSelected
                            ? 'bg-[#8b0a1a] text-white'
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {isAnswerSubmitted ? (
                          isCorrect ? (
                            <Check className="w-4 h-4 stroke-[3]" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4" />
                          ) : (
                            opt.id
                          )
                        ) : (
                          opt.id
                        )}
                      </span>

                      <div className="pt-1 flex-1 leading-relaxed text-right sm:text-right">
                        {viewMode !== 'en' && opt.textAr && (
                          <div className="font-bold text-gray-900">{opt.textAr}</div>
                        )}
                        {viewMode !== 'ar' && opt.text && (
                          <div
                            className={`text-xs ${
                              viewMode === 'bilingual' ? 'text-gray-600 mt-0.5' : 'font-medium text-gray-900'
                            }`}
                          >
                            {opt.text}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Instant Explanation Box + Mnemonic Retention Anchor */}
              {isAnswerSubmitted && (
                <div className="mt-6 p-5 sm:p-6 rounded-3xl border bg-gradient-to-b from-gray-50 to-white border-gray-300 space-y-4 animate-fadeIn shadow-sm">
                  {/* Status Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black">
                      {isUserCorrect ? (
                        <span className="text-emerald-700 flex items-center gap-1.5">
                          <CheckCircle2 className="w-6 h-6 text-emerald-600" /> إجابة صحيحة وممتازة! 🎉
                        </span>
                      ) : (
                        <span className="text-rose-700 flex items-center gap-1.5">
                          <XCircle className="w-6 h-6 text-rose-600" /> إجابة غير صحيحة — الخيار الصحيح هو ({currentQ.correctAnswer})
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-600 font-mono font-bold bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-xs self-start sm:self-auto">
                      📖 {currentQ.slideReference}
                    </span>
                  </div>

                  {/* High Yield Mnemonic & Memory Anchor (شرح بسيط لعدم النسيان) */}
                  <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100/70 border-2 border-amber-300 rounded-2xl text-xs sm:text-sm text-amber-950 font-medium shadow-sm space-y-1">
                    <div className="flex items-center gap-2 font-black text-amber-900 text-sm">
                      <Lightbulb className="w-5 h-5 text-amber-600 fill-amber-500 animate-pulse" />
                      <span>شرح مبسط ومفتاح ذهني لعدم النسيان أبداً 💡:</span>
                    </div>
                    <p className="leading-relaxed font-bold pt-1 text-amber-950">
                      {viewMode === 'en' ? currentQ.highYieldTip : currentQ.highYieldTipAr || currentQ.highYieldTip}
                    </p>
                  </div>

                  {/* Scientific Rationale */}
                  <div className="space-y-1 text-xs sm:text-sm text-gray-800 leading-relaxed font-medium bg-white p-4 rounded-2xl border border-gray-200">
                    <span className="font-extrabold text-[#8b0a1a] block mb-1">
                      التفسير العلمي الدقيق (Scientific Rationale):
                    </span>
                    {viewMode !== 'en' && currentQ.rationaleAr && (
                      <p className="text-gray-900 font-medium mb-1">{currentQ.rationaleAr}</p>
                    )}
                    {viewMode !== 'ar' && currentQ.rationale && (
                      <p className="text-gray-600 italic">{currentQ.rationale}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation & Action Buttons */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-200">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2.5 rounded-2xl border border-gray-300 text-xs font-bold text-gray-700 bg-white hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>السابق (Previous)</span>
                </button>

                <div className="flex items-center gap-2">
                  {!instantFeedback && !isAnswerSubmitted ? (
                    <button
                      onClick={handleManualSubmit}
                      disabled={!selectedOption}
                      className="px-6 py-2.5 rounded-2xl bg-[#8b0a1a] hover:bg-[#700714] text-white text-xs font-black shadow-md disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                    >
                      <Check className="w-4 h-4" />
                      تأكيد الإجابة (Submit)
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-2.5 rounded-2xl bg-[#8b0a1a] hover:bg-[#700714] text-white text-xs font-black shadow-md transition-all flex items-center gap-1.5"
                    >
                      <span>
                        {currentQuestionIndex === filteredQuestions.length - 1
                          ? 'إنهاء الامتحان وعرض النتيجة 🏆'
                          : 'السؤال التالي (Next)'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Quiz Finished Summary Card */
        <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-xl max-w-3xl mx-auto animate-fadeIn">
          <div className="w-24 h-24 mx-auto rounded-full bg-red-50 text-[#8b0a1a] flex items-center justify-center border-4 border-red-200 shadow-md">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              ألف مبروك! أتممت اختبار المناعة الخلوية بنجاح 🎓
            </h3>
            <p className="text-sm text-gray-600 max-w-xl mx-auto">
              لقد قمت بحل ومراجعة نموذج الأسئلة الشامل المعد لمحاكاة الامتحان النهائي وفق مقرر الدكتورة رنا حبيب.
            </p>
          </div>

          {/* Big Score Box */}
          <div className="p-6 bg-gradient-to-b from-[#f9f9f9] to-[#f0f0f0] border border-gray-300 rounded-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 shadow-inner">
            <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <span className="text-xs text-gray-500 font-bold block">مجموع النقاط</span>
              <span className="text-3xl font-black text-[#8b0a1a] font-mono">
                {score} / {filteredQuestions.length}
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <span className="text-xs text-gray-500 font-bold block">نسبة الدقة المئوية</span>
              <span className="text-3xl font-black text-emerald-700 font-mono">
                {Math.round((score / filteredQuestions.length) * 100)}%
              </span>
            </div>
            <div className="p-3 bg-white rounded-2xl border border-gray-200 shadow-xs">
              <span className="text-xs text-gray-500 font-bold block">عدد الإجابات الخاطئة</span>
              <span className="text-3xl font-black text-rose-700 font-mono">{incorrectCount}</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            {incorrectCount > 0 && (
              <button
                onClick={() => {
                  setActiveCategory('mistakes');
                  setCurrentQuestionIndex(0);
                  setIsQuizFinished(false);
                }}
                className="px-6 py-3 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-black shadow-lg transition-all flex items-center gap-2"
              >
                <XCircle className="w-4 h-4" />
                مراجعة الأخطاء فقط ({incorrectCount}) وحفظ الشرح
              </button>
            )}

            <button
              onClick={handleRestartQuiz}
              className="px-6 py-3 rounded-2xl bg-[#8b0a1a] hover:bg-[#700714] text-white text-xs sm:text-sm font-black shadow-lg transition-all flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              إعادة حل الـ 100 سؤال من البداية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
