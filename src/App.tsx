import React, { useState } from 'react';
import { SlideDeckSideBySide } from './components/SlideDeckSideBySide';
import { LectureViewer } from './components/LectureViewer';
import { DiagramSchematicsHub } from './components/DiagramSchematicsHub';
import { MhcPathwaySimulator } from './components/PathwaySimulators/MhcPathwaySimulator';
import { ThreeSignalSimulator } from './components/PathwaySimulators/ThreeSignalSimulator';
import { CtlKillingSimulator, MacrophageTh1LoopSimulator } from './components/PathwaySimulators/CtlKillingSimulator';
import { CrossPresentationSimulator } from './components/PathwaySimulators/CrossPresentationSimulator';
import { ComparisonHub } from './components/ComparisonHub';
import { PathogenMatrix } from './components/PathogenMatrix';
import { QuizEngine } from './components/QuizEngine';
import { FlashcardsDeck } from './components/FlashcardsDeck';
import { AuthorContactModal } from './components/AuthorContactModal';
import {
  BookOpen,
  Activity,
  Layers,
  Bug,
  Award,
  CreditCard,
  FileText,
  Dna,
  Presentation,
  MoreHorizontal,
  X,
  ChevronUp,
  Sparkles,
  Phone,
  MessageCircle,
  Heart,
  GraduationCap,
  Copy,
  Check
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'slides' | 'diagrams' | 'simulators' | 'comparisons' | 'pathogens' | 'quiz' | 'flashcards' | 'lecture'
  >('slides');
  const [activeSimulator, setActiveSimulator] = useState<
    'mhc' | 'threeSignal' | 'ctlKilling' | 'macrophageLoop' | 'crossPres'
  >('mhc');
  const [language, setLanguage] = useState<'ar' | 'en' | 'bilingual'>('ar');
  const [showMobileMore, setShowMobileMore] = useState<boolean>(false);
  const [showAuthorModal, setShowAuthorModal] = useState<boolean>(false);
  const [footerCopied, setFooterCopied] = useState<boolean>(false);

  const isRtl = language === 'ar';

  const selectTab = (tab: typeof activeTab) => {
    setActiveTab(tab);
    setShowMobileMore(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterCopy = () => {
    navigator.clipboard.writeText('0960648360');
    setFooterCopied(true);
    setTimeout(() => setFooterCopied(false), 2500);
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#041416] text-slate-100 font-sans selection:bg-[#8b0a1a] selection:text-white pb-24 md:pb-16"
    >
      {/* Top University & Course Header */}
      <header className="border-b border-teal-900/80 bg-[#061f23]/95 backdrop-blur-md sticky top-0 z-40 shadow-2xl">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 sm:py-3.5 gap-2.5">
            {/* Logo & Course Title */}
            <div className="flex items-center gap-2.5 sm:gap-3.5">
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#8b0a1a] to-[#a81023] flex items-center justify-center shadow-lg shadow-red-950/40 text-white font-black shrink-0 border border-red-400/40">
                <Dna className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse text-red-100" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-[#8b0a1a] text-white border border-red-400/40 shadow-sm">
                    {isRtl ? 'كلية الصيدلة — علم المناعة' : 'Faculty of Pharmacy'}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-amber-300 font-bold">
                    {isRtl ? 'أ.د. رنا حبيب' : 'Prof. Dr. Rana Habib'}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 hidden md:inline-block">
                    {isRtl ? 'الجامعة الدولية الخاصة للعلوم والتكنولوجيا (IUST)' : 'IUST International University'}
                  </span>
                </div>
                <h1 className="text-xs sm:text-sm md:text-base font-extrabold text-white leading-tight sm:leading-snug mt-0.5 truncate sm:whitespace-normal">
                  {isRtl
                    ? 'المناعة التلاؤمية والاستجابات المناعية المتوسطة بالخلايا (CMI)'
                    : 'Adaptive Immunity & Cell-Mediated Immune Responses'}
                </h1>
              </div>
            </div>

            {/* Language Switcher & Elegant Clear Author Button */}
            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0 flex-wrap">
              {/* Creator Button - Clean, Intuitive, Professional */}
              <button
                onClick={() => setShowAuthorModal(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#8b0a1a] hover:bg-[#a81023] text-white font-bold text-xs sm:text-sm border border-amber-400/80 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
                title="تواصل مع الطالب عمر ياسر لطلب الشروحات والملخصات"
                aria-label="معلومات إعداد الموقع وتواصل مع الطالب عمر ياسر"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                <span>إعداد: عمر ياسر (الباشا) ⭐</span>
              </button>

              <div className="flex items-center bg-[#020d0f] p-0.5 sm:p-1 rounded-xl border border-teal-800/80 shadow-inner">
                <button
                  onClick={() => setLanguage('ar')}
                  className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                    language === 'ar'
                      ? 'bg-[#8b0a1a] text-white shadow-md'
                      : 'text-slate-400 hover:text-amber-200'
                  }`}
                >
                  العربية
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                    language === 'en'
                      ? 'bg-[#8b0a1a] text-white shadow-md'
                      : 'text-slate-400 hover:text-amber-200'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('bilingual')}
                  className={`px-2 sm:px-2.5 py-1 text-[11px] sm:text-xs font-bold rounded-lg transition-all ${
                    language === 'bilingual'
                      ? 'bg-[#8b0a1a] text-white shadow-md'
                      : 'text-slate-400 hover:text-amber-200'
                  }`}
                >
                  🌐 {isRtl ? 'مزدوج' : 'Dual'}
                </button>
              </div>

              {/* Status Badge */}
              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-[#8b0a1a]/40 text-red-200 border border-red-500/30 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                {isRtl ? '53 شريحة كاملة' : '53 Slides'}
              </div>
            </div>
          </div>

          {/* Desktop / Tablet Scrollable Navigation Bar */}
          <nav className="flex items-center gap-1.5 overflow-x-auto py-2 custom-scrollbar border-t border-teal-900/60 text-xs">
            <button
              onClick={() => selectTab('slides')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'slides'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/50 ring-1 ring-amber-300'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <Presentation className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              {isRtl ? '1. سلايدات الدكتورة (53)' : '1. Dr. Slides (53)'}
            </button>

            <button
              onClick={() => selectTab('diagrams')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'diagrams'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              {isRtl ? '2. المخططات البصرية' : '2. Visual Schematics'}
            </button>

            <button
              onClick={() => selectTab('simulators')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'simulators'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-300" />
              {isRtl ? '3. محاكيات المسارات' : '3. Pathway Simulators'}
            </button>

            <button
              onClick={() => selectTab('comparisons')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'comparisons'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200" />
              {isRtl ? '4. الجداول المقارنة' : '4. Comparison Tables'}
            </button>

            <button
              onClick={() => selectTab('pathogens')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'pathogens'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <Bug className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
              {isRtl ? '5. مصفوفة الجراثيم' : '5. Pathogens & Cytokines'}
            </button>

            <button
              onClick={() => selectTab('quiz')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'quiz'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              {isRtl ? '6. بنك الأسئلة' : '6. Board Exam & Cases'}
            </button>

            <button
              onClick={() => selectTab('flashcards')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-300" />
              {isRtl ? '7. بطاقات التذكر (3D)' : '7. Flashcards'}
            </button>

            <button
              onClick={() => selectTab('lecture')}
              className={`flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                activeTab === 'lecture'
                  ? 'bg-[#8b0a1a] text-white shadow-lg shadow-red-950/40 border border-red-400/40'
                  : 'text-slate-300 hover:text-white hover:bg-[#072428]'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-200" />
              {isRtl ? '8. الوحدات (15)' : '8. Course Modules'}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-4 sm:mt-6">
        {/* Tab 1: Primary Doctor's Side-by-Side Slide Deck (Dr. Rana Theme) */}
        {activeTab === 'slides' && (
          <SlideDeckSideBySide
            initialSlide={10}
            language={language}
            onSelectSimulator={(simId) => selectTab('simulators')}
          />
        )}

        {/* Tab 2: Visual Schematics & Diagrams Hub */}
        {activeTab === 'diagrams' && <DiagramSchematicsHub language={language} />}

        {/* Tab 3: Interactive Pathway Simulators */}
        {activeTab === 'simulators' && (
          <div className="space-y-6">
            {/* Sub-simulator Selector */}
            <div className="bg-[#051a1d] p-2 rounded-2xl border border-teal-900 flex items-center gap-2 overflow-x-auto custom-scrollbar text-xs shadow-lg">
              <button
                onClick={() => setActiveSimulator('mhc')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeSimulator === 'mhc'
                    ? 'bg-[#8b0a1a] text-white shadow border border-red-400/40'
                    : 'bg-[#020d0f] text-slate-400 hover:text-white border border-teal-950'
                }`}
              >
                {isRtl ? 'مسار معالجة وعرض MHC I و MHC II' : 'MHC Class I vs Class II'}
              </button>
              <button
                onClick={() => setActiveSimulator('threeSignal')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeSimulator === 'threeSignal'
                    ? 'bg-[#8b0a1a] text-white shadow border border-red-400/40'
                    : 'bg-[#020d0f] text-slate-400 hover:text-white border border-teal-950'
                }`}
              >
                {isRtl ? 'نموذج الإشارات الثلاث وتمايز السلالات' : '3-Signal T Cell Activation'}
              </button>
              <button
                onClick={() => setActiveSimulator('ctlKilling')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeSimulator === 'ctlKilling'
                    ? 'bg-[#8b0a1a] text-white shadow border border-red-400/40'
                    : 'bg-[#020d0f] text-slate-400 hover:text-white border border-teal-950'
                }`}
              >
                {isRtl ? 'الضربة القاتلة لـ CD8+ (بيرفورين/فاس)' : 'CD8+ CTL Lethal Hit'}
              </button>
              <button
                onClick={() => setActiveSimulator('macrophageLoop')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeSimulator === 'macrophageLoop'
                    ? 'bg-[#8b0a1a] text-white shadow border border-red-400/40'
                    : 'bg-[#020d0f] text-slate-400 hover:text-white border border-teal-950'
                }`}
              >
                {isRtl ? 'حلقة التنشيط المتبادل Th1 - Macrophage' : 'Th1 - Macrophage Loop'}
              </button>
              <button
                onClick={() => setActiveSimulator('crossPres')}
                className={`px-3 sm:px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                  activeSimulator === 'crossPres'
                    ? 'bg-[#8b0a1a] text-white shadow border border-red-400/40'
                    : 'bg-[#020d0f] text-slate-400 hover:text-white border border-teal-950'
                }`}
              >
                {isRtl ? 'العرض المتصالب (Cross-Priming)' : 'DC Cross-Presentation'}
              </button>
            </div>

            {/* Render selected simulator */}
            {activeSimulator === 'mhc' && <MhcPathwaySimulator language={language} />}
            {activeSimulator === 'threeSignal' && <ThreeSignalSimulator language={language} />}
            {activeSimulator === 'ctlKilling' && <CtlKillingSimulator language={language} />}
            {activeSimulator === 'macrophageLoop' && <MacrophageTh1LoopSimulator language={language} />}
            {activeSimulator === 'crossPres' && <CrossPresentationSimulator language={language} />}
          </div>
        )}

        {/* Tab 4: Comparison Tables Hub */}
        {activeTab === 'comparisons' && <ComparisonHub language={language} />}

        {/* Tab 5: Pathogens & Cytokines Matrix */}
        {activeTab === 'pathogens' && <PathogenMatrix language={language} />}

        {/* Tab 6: Board Exam & Cases */}
        {activeTab === 'quiz' && <QuizEngine language={language} />}

        {/* Tab 7: Bilingual Flashcards */}
        {activeTab === 'flashcards' && <FlashcardsDeck language={language} />}

        {/* Tab 8: 15-Module Lecture Explorer */}
        {activeTab === 'lecture' && (
          <LectureViewer
            language={language}
            onSelectSimulator={(simId) => selectTab('simulators')}
            onOpenDiagrams={() => selectTab('diagrams')}
          />
        )}

        {/* AUTHOR & ACADEMIC SERVICES MEDIA BANNER (Permanent High-Visibility Section) */}
        <section className="mt-12 mb-6 p-5 sm:p-8 rounded-3xl bg-gradient-to-br from-[#062429] via-[#04191c] to-[#020d0f] border-2 border-amber-500/50 shadow-2xl relative overflow-hidden text-white">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-40 bg-gradient-to-l from-amber-500/15 via-red-500/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-32 bg-teal-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Header Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-teal-800/80 pb-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-red-500/30 to-amber-500/20 border border-amber-400/60 text-amber-300 text-xs font-black shadow-inner flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-300 animate-spin" />
                  إشعار أكاديمي وخدمات طلابية متميزة
                </span>
                <span className="text-xs text-slate-300 font-bold bg-[#020d0f] px-3 py-1 rounded-lg border border-teal-900">
                  كلية الصيدلة والجامعات
                </span>
              </div>

              <button
                onClick={() => setShowAuthorModal(true)}
                className="px-4 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/50 text-xs font-black transition-all flex items-center gap-1.5 self-start sm:self-auto shadow-md"
              >
                <span>عرض بطاقة التفاصيل والاتصال 📋</span>
              </button>
            </div>

            {/* Main Media Copywriting Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Text column */}
              <div className="lg:col-span-8 space-y-3">
                <div className="inline-block px-4 py-1.5 rounded-xl bg-[#8b0a1a] text-white text-xs sm:text-sm font-black shadow-md border border-red-400/40">
                  تم إنشاء وتطوير وبرمجة هذا الموقع بواسطة: الطالب عمر ياسر (الباشا) ⭐
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-amber-300 leading-snug">
                  هل تحتاج إلى ملخص احترافي، بنوك أسئلة مؤتمتة، أو شرح مبسط لأي مادة؟
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  «إلى جميع الزملاء والطلبة الأعزاء.. إذا أردتم ملخصاً لأي مادة أو شرحاً وتلخيصاً منهجياً متقناً، تفضلوا بالتواصل معي مباشرة عبر الاتصال أو الواتساب. يسعدني تقديم كامل العون الأكاديمي لكم بأعلى جودة وتنسيق.»
                </p>

                {/* Du'aa and Wishes */}
                <div className="p-3.5 rounded-2xl bg-[#020d0f]/80 border border-amber-500/30 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-rose-400 shrink-0 mt-0.5 fill-rose-500/40" />
                  <div>
                    <span className="font-bold text-white">رسالة من القلب: </span>
                    مع خالص تمنياتي لكم جميعاً بدوام التوفيق، التميز، والنجاح الباهر.. وإذا استفدتم من هذا الشرح وهذا الموقع، فلا تنسونا ووالدينا من صالح دعائكم.
                  </div>
                </div>
              </div>

              {/* Direct Contact Action Column */}
              <div className="lg:col-span-4 p-4 sm:p-5 rounded-2xl bg-[#020d0f] border-2 border-amber-400/60 shadow-xl space-y-3.5 text-center">
                <span className="text-[11px] uppercase tracking-wider text-amber-300 font-extrabold block">
                  رقم التواصل المباشر (عمر ياسر - الباشا):
                </span>

                <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-widest text-amber-300 bg-[#072428] py-2 rounded-xl border border-teal-800 shadow-inner">
                  0960648360
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href="https://wa.me/963960648360?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B2%D9%85%D9%8A%D9%84%D9%86%D8%A7%20%D8%B9%D9%85%D8%B1%20%D9%8A%D8%A7%D8%B3%D8%B1%20(%D8%A7%D9%84%D8%A8%D8%A7%D8%B4%D8%A7)%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%AA%D9%84%D8%AE%D9%8A%D8%B5%20%D9%88%D8%B4%D8%B1%D8%AD%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>واتساب</span>
                  </a>

                  <button
                    onClick={handleFooterCopy}
                    className="p-2.5 rounded-xl bg-teal-900/90 hover:bg-teal-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-teal-700 transition-all"
                  >
                    {footerCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-300" />}
                    <span>{footerCopied ? 'تم النسخ' : 'نسخ الرقم'}</span>
                  </button>
                </div>

                <a
                  href="tel:0960648360"
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-[#8b0a1a] to-[#a81023] hover:from-[#700714] hover:to-[#8b0a1a] text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md border border-red-400/40 transition-all"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>اتصال هاتفي مباشر</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Calm & Accessible Quick Contact Floating Pill */}
      <div className={`fixed z-30 ${isRtl ? 'left-4' : 'right-4'} bottom-16 md:bottom-6`}>
        <button
          onClick={() => setShowAuthorModal(true)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#8b0a1a] hover:bg-[#a81023] text-white font-bold text-xs shadow-lg border border-amber-400/70 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="تواصل مع الطالب عمر ياسر"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>عمر ياسر (الباشا) | طلب شروحات</span>
        </button>
      </div>

      {/* Author & Creator Modal */}
      <AuthorContactModal
        isOpen={showAuthorModal}
        onClose={() => setShowAuthorModal(false)}
        language={language}
      />

      {/* MOBILE BOTTOM NAVIGATION BAR (Fixed & Ergonomic for Thumb Interaction) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#061f23]/95 backdrop-blur-lg border-t border-teal-800 shadow-2xl px-2 py-1.5 flex items-center justify-around">
        <button
          onClick={() => selectTab('slides')}
          className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
            activeTab === 'slides'
              ? 'text-amber-300 font-bold scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Presentation className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">{isRtl ? 'السلايدات' : 'Slides'}</span>
        </button>

        <button
          onClick={() => selectTab('diagrams')}
          className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
            activeTab === 'diagrams'
              ? 'text-amber-300 font-bold scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Layers className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">{isRtl ? 'المخططات' : 'Diagrams'}</span>
        </button>

        <button
          onClick={() => selectTab('simulators')}
          className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
            activeTab === 'simulators'
              ? 'text-rose-300 font-bold scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Activity className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">{isRtl ? 'المحاكيات' : 'Sims'}</span>
        </button>

        <button
          onClick={() => selectTab('comparisons')}
          className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
            activeTab === 'comparisons'
              ? 'text-amber-300 font-bold scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <FileText className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">{isRtl ? 'المقارنات' : 'Tables'}</span>
        </button>

        <button
          onClick={() => selectTab('quiz')}
          className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
            activeTab === 'quiz'
              ? 'text-amber-400 font-bold scale-105'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Award className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">{isRtl ? 'الأسئلة' : 'Quiz'}</span>
        </button>

        <button
          onClick={() => setShowMobileMore(!showMobileMore)}
          className={`flex flex-col items-center justify-center p-1 rounded-xl transition-all ${
            ['pathogens', 'flashcards', 'lecture'].includes(activeTab) || showMobileMore
              ? 'text-amber-300 font-bold'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <MoreHorizontal className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-none">{isRtl ? 'المزيد' : 'More'}</span>
        </button>
      </div>

      {/* Mobile "More" Drawer / Bottom Sheet */}
      {showMobileMore && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex flex-col justify-end p-3 animate-fadeIn">
          <div className="bg-[#051a1d] border border-teal-800 rounded-3xl p-4 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between border-b border-teal-900 pb-2">
              <span className="text-xs font-bold text-amber-300">
                {isRtl ? 'الأقسام الإضافية' : 'More Modules'}
              </span>
              <button
                onClick={() => setShowMobileMore(false)}
                className="p-1.5 rounded-full bg-[#020d0f] text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-1">
              <button
                onClick={() => selectTab('pathogens')}
                className={`p-3 rounded-2xl flex items-center gap-3 text-xs font-bold text-start transition-all ${
                  activeTab === 'pathogens'
                    ? 'bg-[#8b0a1a] text-white shadow-md'
                    : 'bg-[#020d0f] text-slate-300 hover:text-white border border-teal-950'
                }`}
              >
                <Bug className="w-5 h-5 text-amber-300" />
                <div>
                  <div className="font-extrabold">{isRtl ? '5. مصفوفة الجراثيم والسيتوكينات' : '5. Pathogen Matrix'}</div>
                  <div className="text-[10px] text-slate-400 font-normal">تصنيف الحويصلي والهيولي والسيتوكينات</div>
                </div>
              </button>

              <button
                onClick={() => selectTab('flashcards')}
                className={`p-3 rounded-2xl flex items-center gap-3 text-xs font-bold text-start transition-all ${
                  activeTab === 'flashcards'
                    ? 'bg-[#8b0a1a] text-white shadow-md'
                    : 'bg-[#020d0f] text-slate-300 hover:text-white border border-teal-950'
                }`}
              >
                <CreditCard className="w-5 h-5 text-rose-300" />
                <div>
                  <div className="font-extrabold">{isRtl ? '7. بطاقات الاستذكار التفاعلية (3D)' : '7. Flashcards Deck'}</div>
                  <div className="text-[10px] text-slate-400 font-normal">بطاقات تقليب ثلاثية الأبعاد للحفظ السريع</div>
                </div>
              </button>

              <button
                onClick={() => selectTab('lecture')}
                className={`p-3 rounded-2xl flex items-center gap-3 text-xs font-bold text-start transition-all ${
                  activeTab === 'lecture'
                    ? 'bg-[#8b0a1a] text-white shadow-md'
                    : 'bg-[#020d0f] text-slate-300 hover:text-white border border-teal-950'
                }`}
              >
                <BookOpen className="w-5 h-5 text-amber-200" />
                <div>
                  <div className="font-extrabold">{isRtl ? '8. الوحدات والمقرر (15 موديول)' : '8. Course Modules'}</div>
                  <div className="text-[10px] text-slate-400 font-normal">تصفح شامل لكامل محاور المنهاج</div>
                </div>
              </button>

              {/* Creator & Contact Option in Mobile Sheet */}
              <button
                onClick={() => {
                  setShowMobileMore(false);
                  setShowAuthorModal(true);
                }}
                className="p-3 rounded-2xl flex items-center gap-3 text-xs font-bold text-start bg-gradient-to-r from-amber-500/20 via-red-500/30 to-amber-500/20 text-amber-300 border border-amber-400/60 shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                <div>
                  <div className="font-extrabold text-amber-200">إعداد وتطوير: الطالب عمر ياسر (الباشا) ⭐</div>
                  <div className="text-[10px] text-amber-300/80 font-normal">طلب التلخيصات والشروحات (0960648360)</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
