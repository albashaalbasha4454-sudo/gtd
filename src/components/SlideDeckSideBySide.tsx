import React, { useState, useEffect } from 'react';
import { SLIDES_53, SlideItem } from '../data/slides53';
import { DoctorSlideVisuals } from './DoctorSlideVisuals';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Search,
  BookOpen,
  Sparkles,
  Layers,
  ArrowRight,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Sun,
  Moon,
  Tv,
  Eye,
  Lightbulb,
  Split,
  Bookmark,
  BookmarkCheck,
  Type,
  ZoomIn,
  ZoomOut,
  Pill,
  GraduationCap
} from 'lucide-react';

interface SlideDeckSideBySideProps {
  initialSlide?: number;
  language?: 'ar' | 'en' | 'bilingual';
  onSelectSimulator?: (id: string) => void;
}

// High-Yield Slide Mnemonics and Simplifications Catalog for all 53 slides
const SLIDE_MNEMONICS: Record<
  number,
  {
    mnemonicEn: string;
    mnemonicAr: string;
    analogyEn: string;
    analogyAr: string;
    goldenRuleEn: string;
    goldenRuleAr: string;
  }
> = {
  1: {
    mnemonicEn: 'Adaptive = Adapts & Remembers. Tailor-made armor forged specifically against the invading microbe.',
    mnemonicAr: 'المناعة التكيفية = تتكيف وتتذكر. درع مفصل خصيصاً على مقاس الميكروب الغازي.',
    analogyEn: 'Innate immunity is a general castle wall; Adaptive immunity is a SWAT team trained specifically on the enemy blueprint.',
    analogyAr: 'المناعة الفطرية كجدار القلعة العام؛ أما التكيفية ففرقة كوماندوز مدربة على شيفرة العدو بالتحديد.',
    goldenRuleEn: 'Requires antigen-specific lymphocytes (T and B cells) that undergo clonal expansion.',
    goldenRuleAr: 'تعتمد على الخلايا اللمفاوية التائية والبائية التي تتكاثر نسيلياً بعد التعرف على المستضد.'
  },
  2: {
    mnemonicEn: 'D-S-M: Diversity, Specificity, Memory. Takes days to develop, lasts for decades.',
    mnemonicAr: 'ثلاثية المناعة التكيفية: التنوع الفائق، التخصص الدقيق، والذاكرة المناعية.',
    analogyEn: 'First encounter takes days to train the recruits; secondary encounter wipes the enemy in hours.',
    analogyAr: 'اللقاء الأول يستغرق أياماً لتدريب الجنود، واللقاء الثاني يبيد العدو في ساعات بفضل الذاكرة.',
    goldenRuleEn: 'Clonal expansion is prerequisite before effective effector defense can emerge.',
    goldenRuleAr: 'التكاثر النسيلي شرط مسبق ولا غنى عنه قبل ظهور الخلايا التأثيرية الفعالة.'
  },
  3: {
    mnemonicEn: 'B Cells = Bone marrow (Antibodies); T Cells = Thymus (Cell-mediated commanders & killers).',
    mnemonicAr: 'خلايا B = نقي العظام (الأضداد)؛ خلايا T = التوتة/الصعترية (المناعة الخلوية قادة وقتلة).',
    analogyEn: 'B cells fire remote missiles (antibodies); T cells engage in hand-to-hand combat.',
    analogyAr: 'الخلايا البائية تطلق صواريخ موجهة (أضداد)؛ والتائية تشتبك وجهاً لوجه مع الخلايا المصابة.',
    goldenRuleEn: 'T cells strictly require cell-cell contact and antigen presentation on MHC molecules.',
    goldenRuleAr: 'الخلايا التائية تشترط التماس الخلوي المباشر وعرض المستضد على معقد MHC.'
  },
  4: {
    mnemonicEn: 'Humoral = Body Fluids (Extracellular); Cell-Mediated = Inside infected host cells.',
    mnemonicAr: 'الخلطية = سوائل الجسم (خارج خلوية)؛ الخلوية = داخل الخلايا المصابة بالحويصلات أو الهيولى.',
    analogyEn: 'Humoral guards the streets; Cellular inspects houses and locks doors from within.',
    analogyAr: 'الخلطية تحرس شوارع وأزقة الجسم؛ والخلوية تداهم المنازل وتطهرها من الغزاة المختبئين بالداخل.',
    goldenRuleEn: 'Humoral is transferred by serum antibodies; Cellular is transferred strictly by live intact T cells.',
    goldenRuleAr: 'المناعة الخلطية تُنقل بمصل الدم؛ بينما المناعة الخلوية تُنقل حصراً بالخلايا التائية الحية.'
  },
  10: {
    mnemonicEn: 'Clonal Selection: 1 Clone = 1 Specific TCR/BCR Key matching 1 Antigen Lock.',
    mnemonicAr: 'الانتخاب النسيلي: كل نسيلة تمتلك مفتاحاً فريداً يطابق قفلاً مستضدياً واحداً بالتحديد.',
    analogyEn: 'Like a massive library of 100 million pre-made keys; when the matching key finds its lock, it makes 10,000 copies of itself.',
    analogyAr: 'مكتبة ضخمة تضم مئة مليون مفتاح جاهز مسبقاً؛ حين يطابق مفتاح قفله ينسخ نفسه آلاف المرات.',
    goldenRuleEn: 'Antigen receptor diversity is generated PRIOR to antigen exposure by V(D)J recombination.',
    goldenRuleAr: 'التنوع الهائل للمستقبلات يتولد قبل لقاء المستضد بواسطة إعادة التركيب الجيني V(D)J.'
  },
  19: {
    mnemonicEn: 'MHC-I = 1 heavy α chain + β2m (Closed ends 8-11 AA); MHC-II = 2 chains α + β (Open ends 10-30+ AA).',
    mnemonicAr: 'MHC-I = سلسلة ثقيلة واحدة α مع β2m (مغلق الطرفين 8-11 حمضاً)؛ MHC-II = سلسلتان α و β (مفتوح 10-30+ حمضاً).',
    analogyEn: 'MHC-I is a closed hot-dog bun holding short sausages; MHC-II is an open sub sandwich where long fillings hang out.',
    analogyAr: 'MHC-I يشبه صندوقاً صغيراً مغلق الأطراف؛ و MHC-II شطيرة مفتوحة الطرفين تستوعب ببتيدات طويلة.',
    goldenRuleEn: 'Rule of 8: (MHC-I × CD8 = 8) & (MHC-II × CD4 = 8).',
    goldenRuleAr: 'قاعدة الرقم 8: حاصل ضرب نوع المعقد في رقم المستقبل المساعد يساوي دائماً 8.'
  },
  23: {
    mnemonicEn: 'MHC-I Pathway: Proteasome (Shredder) -> TAP (Elevator) -> ER (Loading onto MHC-I:β2m) -> CD8 CTL.',
    mnemonicAr: 'مسار MHC-I الداخلي: بروتيازوم (مفرمة) -> TAP (مصعد) -> شبكة باطنة (تحميل) -> خلايا CD8+ السامة.',
    analogyEn: 'Paper shredder chops internal viral intruder -> Elevator brings slices to assembly room -> Placed on surface ID badge.',
    analogyAr: 'آلة تقطيع تفرم الفيروس الداخلي -> مصعد TAP ينقل القطع لغرفة التجميع -> تظهر الشارة لشرطة CD8+.',
    goldenRuleEn: 'Surveils endogenous/cytosolic synthesized proteins across ALL nucleated cells.',
    goldenRuleAr: 'يراقب البروتينات المصنعة داخلياً في هيولى كافة الخلايا المنواة في الجسم.'
  },
  29: {
    mnemonicEn: 'MHC-II Pathway: Endosome (Acid stomach) -> Invariant Chain Ii / CLIP block -> HLA-DM opens lock -> CD4 Th.',
    mnemonicAr: 'مسار MHC-II الخارجي: إندوزوم (معدة حامضية) -> سدادة أمان CLIP -> مفتاح HLA-DM -> خلايا CD4+ المساعدة.',
    analogyEn: 'Scouts eat street trash -> Melt it in acid -> HLA-DM pulls out safety pin CLIP -> Bacterial peptide loaded for commander CD4+.',
    analogyAr: 'حراس المناعة يبتلعون الجراثيم ويهضمونها بالحمض -> يخلع HLA-DM سدادة CLIP ليركب الببتيد لقائد الجيش CD4+.',
    goldenRuleEn: 'Exclusively utilized by Professional APCs (Dendritic cells, Macrophages, B cells).',
    goldenRuleAr: 'يقتصر استخدامه حصراً على الخلايا العارضة المحترفة (الشجيرية، البلعميات، والبائية).'
  },
  31: {
    mnemonicEn: 'Cross-Presentation: Dendritic cells feed exogenous antigens into MHC-I to prime CD8+ CTLs against viruses that do not infect DCs.',
    mnemonicAr: 'العرض المتصالب: الخلايا الشجيرية تهرب مستضدات خارجية لمسار MHC-I لتنشيط CD8+ ضد الفيروسات والأورام.',
    analogyEn: 'DC acts as a master intelligence officer smuggling enemy contraband into the commando training room.',
    analogyAr: 'الخلية التغصنية تعمل كضابط استخبارات يهرب عينات العدو لتدريب قوات الكوماندوز CD8+.',
    goldenRuleEn: 'Crucial for initiating CD8+ responses against viruses and tumors that avoid direct DC infection.',
    goldenRuleAr: 'حاسم وضروري لإطلاق استجابة CD8+ القاتلة ضد الفيروسات والأورام التي لا تصيب الخلايا الشجيرية مباشرة.'
  },
  33: {
    mnemonicEn: '3 Signals: Signal 1 (Key / TCR:pMHC), Signal 2 (Clutch / B7:CD28), Signal 3 (GPS Steering / Cytokines).',
    mnemonicAr: 'الإشارات الثلاث: إشارة 1 (مفتاح التشغيل TCR)، إشارة 2 (دواسة الأمان B7:CD28)، إشارة 3 (مقود التوجيه السيتوكيني).',
    analogyEn: 'Turning key without safety clutch causes engine to lock down forever (Anergy / Tolerance).',
    analogyAr: 'تدوير المفتاح دون ضغط دواسة الأمان يعطل المحرك نهائياً ويدخل الخلية في غيبوبة مناعية (Anergy).',
    goldenRuleEn: 'Signal 1 alone without Signal 2 induces immunological anergy (unresponsiveness) to prevent autoimmunity.',
    goldenRuleAr: 'الإشارة 1 بمفردها دون إشارة التحفيز 2 تؤدي للاتجاوب المناعي (Anergy) لمنع مهاجمة أنسجة الجسم.'
  },
  40: {
    mnemonicEn: 'Th1 = T-bet / IFN-γ (Macrophages & TB); Th2 = GATA-3 / IL-4/5/13 (Allergy & Worms); Th17 = RORγt / IL-17 (Neutrophils & Fungi).',
    mnemonicAr: 'Th1 = عامل T-bet و IFN-γ (البلاعم والسل)؛ Th2 = عامل GATA-3 و IL-4 (الحساسية والديدان)؛ Th17 = عامل RORγt و IL-17 (العدلات والفطريات).',
    analogyEn: 'Th1 is the anti-terrorist squad; Th2 is the fumigation crew against parasites; Th17 is the heavy barrier construction unit.',
    analogyAr: 'Th1 فرقة مكافحة الإرهاب الداخلي؛ Th2 فرقة رش المبيدات للديدان والحساسية؛ Th17 فرقة تدعيم الحواجز والعدلات.',
    goldenRuleEn: 'Lineage choice is governed by Signal 3 cytokine milieu during primary DC priming.',
    goldenRuleAr: 'تحديد السلالة يخضع للبيئة السيتوكينية للإشارة 3 أثناء التنشيط الأولي بالخلايا التغصنية.'
  },
  45: {
    mnemonicEn: 'CD8+ Killing: Perforin (Punches holes in membrane) + Granzymes (Triggers Caspase Apoptosis) + FasL/Fas.',
    mnemonicAr: 'القتل بـ CD8+: بيرفورين (يثقب الغشاء كالحفار) + غرانزايم (قنابل تفكيك تشغل الكاسباز) + مسار FasL/Fas.',
    analogyEn: 'Surgical sniper strike: Drill a precision hole, toss in a grenade, target cell commits suicide without spilling toxic guts.',
    analogyAr: 'قنص جراحي فائق الدقة: ثقب الغشاء وإلقاء قنبلة الموت المبرمج لتتفكك الخلية بهدوء دون إيذاء الجيران.',
    goldenRuleEn: 'Target cell death is programmed Apoptosis (not necrotic lysis), preventing viral dissemination and excessive inflammation.',
    goldenRuleAr: 'الموت الخلوي هو موت مبرمج منظم (Apoptosis) يمنع انتشار الفيروسات ويمنع الالتهاب العشوائي.'
  }
};

export const SlideDeckSideBySide: React.FC<SlideDeckSideBySideProps> = ({
  initialSlide = 10,
  language = 'ar',
  onSelectSimulator
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(initialSlide - 1);
  const [theme, setTheme] = useState<'doctor' | 'cream' | 'dark'>('doctor');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bilingual' | 'ar' | 'en'>(
    language === 'en' ? 'en' : language === 'ar' ? 'ar' : 'bilingual'
  );
  const [showMnemonic, setShowMnemonic] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [bookmarkedSlides, setBookmarkedSlides] = useState<Record<number, boolean>>({});
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  // Keyboard navigation for desktop/laptop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in search input
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        if (language === 'ar') handlePrev();
        else handleNext();
      } else if (e.key === 'ArrowLeft') {
        if (language === 'ar') handleNext();
        else handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, language]);

  // Touch Swipe Handlers for Mobile and Tablets
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    // Ensure horizontal swipe is dominant and exceeds minimum threshold (45px)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        // Swiped Left
        if (language === 'ar') handlePrev();
        else handleNext();
      } else {
        // Swiped Right
        if (language === 'ar') handleNext();
        else handlePrev();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  // Sync with prop if language changes
  useEffect(() => {
    if (language === 'bilingual') setViewMode('bilingual');
    else if (language === 'en') setViewMode('en');
    else if (language === 'ar') setViewMode('ar');
  }, [language]);

  const slide: SlideItem = SLIDES_53[currentSlideIndex] || SLIDES_53[0];
  const slideNum = slide.slideNumber;

  const currentMnemonic = SLIDE_MNEMONICS[slideNum] || {
    mnemonicEn: `Slide ${slideNum}: Core cellular concept synthesized from Dr. Rana Habib syllabus.`,
    mnemonicAr: `شريحة ${slideNum}: مفهوم مناعي محوري مستخلص من منهاج أ.د. رنا حبيب.`,
    analogyEn: 'Focus on the molecular interaction and cellular compartment depicted on this slide.',
    analogyAr: 'ركز على التفاعل الجزيئي والحُجرة الخلوية الموضحة في هذه الشريحة لتثبيت الفهم.',
    goldenRuleEn: slide.calloutEn || 'Key Rule: Adaptive cellular interactions maintain strict specificity and MHC restriction.',
    goldenRuleAr: slide.calloutAr || 'قاعدة أساسية: التفاعلات المناعية الخلوية تحافظ على التخصص الدقيق والتقيد بمعقد MHC.'
  };

  const handlePrev = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    window.speechSynthesis?.cancel();
    setIsSpeaking(false);
    setCurrentSlideIndex((prev) => Math.min(SLIDES_53.length - 1, prev + 1));
  };

  const toggleBookmark = () => {
    setBookmarkedSlides((prev) => ({
      ...prev,
      [slideNum]: !prev[slideNum]
    }));
  };

  const handleCopySlide = () => {
    const text = `Slide ${slide.slideNumber}: ${slide.titleEn} | ${slide.titleAr}\n\n[English]\n${
      slide.leadEn ? slide.leadEn + '\n' : ''
    }${slide.bulletsEn.map((b) => '• ' + b).join('\n')}\n\n[العربية]\n${
      slide.leadAr ? slide.leadAr + '\n' : ''
    }${slide.bulletsAr.map((b) => '• ' + b).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Text-To-Speech Function
  const handleSpeak = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToRead =
      viewMode === 'ar'
        ? `${slide.titleAr}. ${slide.leadAr || ''}. ${slide.bulletsAr.join('. ')}`
        : viewMode === 'en'
        ? `${slide.titleEn}. ${slide.leadEn || ''}. ${slide.bulletsEn.join('. ')}`
        : `${slide.titleEn}. ${slide.titleAr}. ${slide.bulletsEn.join('. ')}. ${slide.bulletsAr.join('. ')}`;

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = viewMode === 'ar' ? 'ar-SA' : 'en-US';
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Filter slides for search
  const filteredSlides = SLIDES_53.filter(
    (s) =>
      s.slideNumber.toString().includes(searchQuery) ||
      s.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.titleAr.includes(searchQuery) ||
      s.topicEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.topicAr.includes(searchQuery)
  );

  const fontClass =
    fontSize === 'sm'
      ? 'text-base sm:text-lg lg:text-xl'
      : fontSize === 'lg'
      ? 'text-xl sm:text-2xl lg:text-[25px]'
      : 'text-lg sm:text-xl lg:text-[22px]';

  const titleClass =
    fontSize === 'sm'
      ? 'text-xl sm:text-2xl lg:text-[26px]'
      : fontSize === 'lg'
      ? 'text-2xl sm:text-3xl lg:text-[36px]'
      : 'text-2xl sm:text-3xl lg:text-[32px]';

  return (
    <div className="space-y-6">
      {/* Top Toolbar: Navigation & Actions */}
      <div className="bg-[#051a1d] p-4 rounded-3xl border border-teal-900 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 shadow-xl">
        {/* Left: Quick Slide Jumper & Prev/Next */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="p-2.5 rounded-2xl bg-[#020d0f] border border-teal-900 text-slate-300 hover:text-white hover:border-[#8b0a1a] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow"
            title="الشريحة السابقة"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 bg-[#020d0f] px-3.5 py-1.5 rounded-2xl border border-teal-900">
            <span className="text-xs font-mono font-bold text-teal-400">Slide</span>
            <select
              value={slide.slideNumber}
              onChange={(e) => setCurrentSlideIndex(Number(e.target.value) - 1)}
              className="bg-transparent text-white font-mono font-bold text-xs focus:outline-none cursor-pointer"
            >
              {SLIDES_53.map((s) => (
                <option key={s.slideNumber} value={s.slideNumber} className="bg-[#051a1d] text-white">
                  {s.slideNumber}: {s.titleEn.substring(0, 32)}...
                </option>
              ))}
            </select>
            <span className="text-xs font-mono text-slate-400">/ 53</span>
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === SLIDES_53.length - 1}
            className="p-2.5 rounded-2xl bg-[#020d0f] border border-teal-900 text-slate-300 hover:text-white hover:border-[#8b0a1a] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow"
            title="الشريحة التالية"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <button
            onClick={toggleBookmark}
            className={`p-2.5 rounded-2xl border transition-all ${
              bookmarkedSlides[slideNum]
                ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                : 'bg-[#020d0f] border-teal-900 text-slate-400 hover:text-white'
            }`}
            title="حفظ الشريحة في المفضلة"
          >
            {bookmarkedSlides[slideNum] ? (
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Center: Dual View Mode & Mnemonic Toggles */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Dual / Single Column Switcher */}
          <div className="flex items-center bg-[#020d0f] p-1 rounded-2xl border border-teal-900 text-xs">
            <button
              onClick={() => setViewMode('bilingual')}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'bilingual'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="عرض الشريحة مزدوجة جنباً إلى جنب"
            >
              <Split className="w-3.5 h-3.5" />
              <span>مزدوج (Side-by-Side)</span>
            </button>
            <button
              onClick={() => setViewMode('ar')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                viewMode === 'ar'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              عربي
            </button>
            <button
              onClick={() => setViewMode('en')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                viewMode === 'en'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              English
            </button>
          </div>

          {/* Mnemonic / Simplifier Toggle Button */}
          <button
            onClick={() => setShowMnemonic(!showMnemonic)}
            className={`px-3 py-1.5 rounded-2xl border text-xs font-black flex items-center gap-1.5 transition-all shadow ${
              showMnemonic
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-amber-950/40 ring-1 ring-amber-300'
                : 'bg-[#020d0f] border-teal-900 text-slate-300 hover:text-amber-300'
            }`}
            title="تبسيط المفهوم وتشديد التذكر لعدم النسيان"
          >
            <Lightbulb className={`w-4 h-4 ${showMnemonic ? 'text-slate-950 fill-slate-950' : 'text-amber-400'}`} />
            <span>{showMnemonic ? 'التبسيط والتذكر مفعّل 💡' : 'تبسيط وحفظ 💡'}</span>
          </button>
        </div>

        {/* Right: Theme Selector, Audio, HTML, Font Size */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Font Scaling */}
          <div className="flex items-center bg-[#020d0f] p-1 rounded-xl border border-teal-900 text-xs">
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 rounded-lg font-bold ${
                fontSize === 'sm' ? 'bg-teal-900 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="تصغير الخط"
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-2 py-1 rounded-lg font-bold ${
                fontSize === 'md' ? 'bg-teal-900 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="خط قياسي"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 rounded-lg font-bold ${
                fontSize === 'lg' ? 'bg-teal-900 text-white' : 'text-slate-400 hover:text-white'
              }`}
              title="تكبير الخط"
            >
              A+
            </button>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center bg-[#020d0f] p-1 rounded-xl border border-teal-900 text-xs">
            <button
              onClick={() => setTheme('doctor')}
              className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                theme === 'doctor'
                  ? 'bg-[#8b0a1a] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Doctor Original (#8b0a1a / #f2f2f2)"
            >
              <Sun className="w-3.5 h-3.5 text-red-200" />
              <span className="hidden sm:inline">الأصلي</span>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-all ${
                theme === 'dark'
                  ? 'bg-[#006666] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Dark Mode"
            >
              <Moon className="w-3.5 h-3.5 text-teal-300" />
              <span className="hidden sm:inline">ليلي</span>
            </button>
          </div>

          {/* Audio Read Button */}
          <button
            onClick={handleSpeak}
            className={`p-2 rounded-xl border text-xs flex items-center gap-1 transition-colors ${
              isSpeaking
                ? 'bg-rose-900/60 border-rose-500 text-rose-200 animate-pulse'
                : 'bg-[#020d0f] border-teal-900 text-slate-300 hover:text-teal-200'
            }`}
            title={isSpeaking ? 'إيقاف القراءة الصوتية' : 'قراءة صوتية للشريحة'}
          >
            {isSpeaking ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-teal-400" />}
          </button>

          {/* Copy Slide Content */}
          <button
            onClick={handleCopySlide}
            className="p-2 rounded-xl bg-[#020d0f] border border-teal-900 text-slate-300 hover:text-white hover:border-teal-700 transition-colors text-xs flex items-center gap-1"
            title="نسخ محتوى الشريحة للدراسة"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copied ? 'تم النسخ' : 'نسخ النص'}</span>
          </button>
        </div>
      </div>

      {/* Slide Navigator Carousel & Quick Search */}
      <div className="bg-[#051a1d] p-3 rounded-2xl border border-teal-900 flex flex-col md:flex-row items-stretch md:items-center gap-3">
        {/* Search */}
        <div className="relative w-full md:w-64 shrink-0">
          <Search className="w-4 h-4 text-teal-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search slide (MHC, TCR, B7, CD8, 10)..."
            className="w-full bg-[#020e10] border border-teal-900 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-teal-600 focus:outline-none focus:border-teal-400"
          />
        </div>

        {/* Carousel Numbers */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 custom-scrollbar text-xs">
          {filteredSlides.map((s) => {
            const isCurrent = s.slideNumber === slide.slideNumber;
            const isBookmarked = bookmarkedSlides[s.slideNumber];
            return (
              <button
                key={s.slideNumber}
                onClick={() => setCurrentSlideIndex(s.slideNumber - 1)}
                className={`min-w-[42px] h-[36px] px-2 rounded-xl font-bold font-mono transition-all shrink-0 flex items-center justify-center relative ${
                  isCurrent
                    ? theme === 'doctor'
                      ? 'bg-[#8b0a1a] text-white shadow-lg ring-2 ring-amber-300 scale-105'
                      : theme === 'cream'
                      ? 'bg-amber-800 text-white shadow-lg ring-2 ring-amber-400 scale-105'
                      : 'bg-[#006666] text-white shadow-lg ring-2 ring-teal-400 scale-105'
                    : 'bg-[#020e10] text-slate-400 hover:text-white border border-teal-950'
                }`}
              >
                {s.slideNumber}
                {isBookmarked && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-1 right-1" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* CONCEPT SIMPLIFIER & MEMORY MNEMONIC CARD (When enabled) */}
      {showMnemonic && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4 text-slate-900 transition-all animate-fadeIn">
          <div className="flex items-center justify-between border-b border-amber-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow">
                💡
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-black text-amber-950">
                  مفتاح الحفظ السريع وتبسيط الشريحة {slideNum} (Memory Mnemonic & Analogy)
                </h4>
                <span className="text-[11px] text-amber-800 font-bold">
                  تشبيه دقيق يزيل التعقيد ويثبت المعلومة للامتحان دون إضاعة أي تفصيل علمي
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-200 text-amber-900 px-3 py-1 rounded-full border border-amber-300">
              Slide {slideNum} Pearl
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
            {/* English Mnemonic Box */}
            <div className="p-4 bg-white/90 rounded-2xl border border-amber-200 space-y-2 text-left" dir="ltr">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                  Mental Analogy & Mnemonic
                </span>
                <span className="text-[10px] font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                  English
                </span>
              </div>
              <p className="text-slate-800 font-semibold">{currentMnemonic.analogyEn}</p>
              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-slate-900 font-medium text-xs">
                <b>Takeaway:</b> {currentMnemonic.mnemonicEn}
              </div>
              <div className="pt-2 border-t border-amber-100 text-xs font-bold text-[#8b0a1a]">
                ★ {currentMnemonic.goldenRuleEn}
              </div>
            </div>

            {/* Arabic Mnemonic Box */}
            <div className="p-4 bg-white/90 rounded-2xl border border-amber-200 space-y-2 text-right" dir="rtl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono bg-amber-100 text-amber-900 px-2 py-0.5 rounded font-bold">
                  العربية
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                  التشبيه الذهني وقاعدة التذكر
                </span>
              </div>
              <p className="text-slate-800 font-bold">{currentMnemonic.analogyAr}</p>
              <div className="p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 text-slate-900 font-semibold text-xs">
                <b>الخلاصة لعدم النسيان:</b> {currentMnemonic.mnemonicAr}
              </div>
              <div className="pt-2 border-t border-amber-100 text-xs font-bold text-[#8b0a1a]">
                ★ {currentMnemonic.goldenRuleAr}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* THE MAIN SLIDE CANVAS (Side-by-Side Bilingual matching Dr. Rana's exact slide template!) */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className={`rounded-3xl p-4 sm:p-8 lg:p-14 shadow-2xl transition-all duration-300 border-2 touch-pan-y ${
          theme === 'doctor'
            ? 'bg-[#f2f2f2] border-[#8b0a1a]/30 text-[#111111] shadow-slate-900/40'
            : theme === 'cream'
            ? 'bg-[#FAF8F5] border-[#8b0a1a]/30 text-[#111111] shadow-amber-950/20'
            : 'bg-[#031315] border-teal-800 text-slate-100 shadow-teal-950/50'
        }`}
        style={{
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        }}
      >
        {/* Slide Header Tag & Number */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-300 dark:border-teal-900/80 pb-3 mb-6 gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
                theme === 'doctor' || theme === 'cream'
                  ? 'bg-[#8b0a1a] text-white shadow-sm'
                  : 'bg-teal-900/60 text-teal-300 border border-teal-600/40'
              }`}
            >
              Slide {slide.slideNumber} / 53
            </span>
            <span className="text-xs font-bold text-gray-600 dark:text-teal-400">
              {slide.topicEn} | {slide.topicAr}
            </span>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-bold text-gray-500 dark:text-teal-500 font-mono">
            <span className="text-[11px] text-amber-700 dark:text-amber-300 md:hidden flex items-center gap-1">
              <span>👆 اسحب للتنقل</span>
            </span>
            <span className="hidden sm:inline">IUST Immunology • Prof. Dr. Rana Habib</span>
          </div>
        </div>

        {/* Mobile-only Quick View Switcher when in bilingual mode */}
        {viewMode === 'bilingual' && (
          <div className="md:hidden flex items-center justify-center gap-1 bg-black/5 dark:bg-teal-950/40 p-1 rounded-xl mb-5 text-[11px] font-bold">
            <span className="text-gray-500 dark:text-teal-400 px-1.5">عرض الموبايل:</span>
            <button
              onClick={() => setViewMode('ar')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-teal-900 text-gray-900 dark:text-white shadow-sm"
            >
              عربي
            </button>
            <button
              onClick={() => setViewMode('en')}
              className="px-2.5 py-1 rounded-lg bg-white dark:bg-teal-900 text-gray-900 dark:text-white shadow-sm"
            >
              English
            </button>
            <button
              onClick={() => setViewMode('bilingual')}
              className="px-2.5 py-1 rounded-lg bg-[#8b0a1a] text-white shadow-sm"
            >
              معاً (Stacked)
            </button>
          </div>
        )}

        {/* PRESENTATION COLUMNS: DUAL SIDE-BY-SIDE OR SINGLE COLUMN ACCORDING TO VIEW MODE */}
        <div
          className={
            viewMode === 'bilingual'
              ? 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-14 items-start'
              : 'max-w-4xl mx-auto space-y-6'
          }
        >
          {/* LEFT COLUMN: ENGLISH (LTR) - Rendered if bilingual or English */}
          {(viewMode === 'bilingual' || viewMode === 'en') && (
            <div className="space-y-5 text-left font-sans" dir="ltr">
              {/* Center-aligned Crimson Maroon Title (#8b0a1a) */}
              <h2
                className={`${titleClass} font-extrabold text-center tracking-tight leading-[1.3] pb-2 ${
                  theme === 'dark' ? 'text-teal-300' : 'text-[#8b0a1a]'
                }`}
              >
                {slide.titleEn}
              </h2>

              {/* Lead paragraph */}
              {slide.leadEn && (
                <p
                  className={`${fontClass} font-medium leading-[1.5] ${
                    theme === 'dark' ? 'text-slate-200' : 'text-[#111111]'
                  }`}
                >
                  {slide.leadEn}
                </p>
              )}

              {/* Bullet Points with standard disc lists */}
              <ul
                className={`space-y-3.5 pt-1 pl-7 list-disc ${
                  theme === 'dark' ? 'marker:text-teal-400' : 'marker:text-[#111111]'
                }`}
              >
                {slide.bulletsEn.map((bullet, idx) => (
                  <li
                    key={idx}
                    className={`${fontClass} leading-[1.5] ${
                      theme === 'dark' ? 'text-slate-200' : 'text-[#111111]'
                    }`}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* English Callout if present */}
              {slide.calloutEn && (
                <div
                  className={`p-4 rounded-xl border text-sm leading-relaxed mt-5 ${
                    theme === 'dark'
                      ? 'bg-teal-950/40 border-teal-800 text-teal-200'
                      : 'bg-white/80 border-[#8b0a1a]/20 text-[#8b0a1a] shadow-sm'
                  }`}
                >
                  <b>Key Note:</b> {slide.calloutEn}
                </div>
              )}
            </div>
          )}

          {/* RIGHT COLUMN: ARABIC (RTL) - Rendered if bilingual or Arabic */}
          {(viewMode === 'bilingual' || viewMode === 'ar') && (
            <div
              className="space-y-5 text-right font-sans"
              dir="rtl"
              style={{ fontFamily: "'Arial', 'Segoe UI', Tahoma, sans-serif" }}
            >
              {/* Center-aligned Crimson Maroon Title in Arabic (#8b0a1a) */}
              <h2
                className={`${titleClass} font-extrabold text-center tracking-tight leading-[1.3] pb-2 ${
                  theme === 'dark' ? 'text-teal-300' : 'text-[#8b0a1a]'
                }`}
              >
                {slide.titleAr}
              </h2>

              {/* Lead paragraph in Arabic */}
              {slide.leadAr && (
                <p
                  className={`${fontClass} font-medium leading-[1.5] ${
                    theme === 'dark' ? 'text-slate-200' : 'text-[#111111]'
                  }`}
                >
                  {slide.leadAr}
                </p>
              )}

              {/* Arabic Bullet Points */}
              <ul
                className={`space-y-3.5 pt-1 pr-7 list-disc ${
                  theme === 'dark' ? 'marker:text-teal-400' : 'marker:text-[#111111]'
                }`}
              >
                {slide.bulletsAr.map((bullet, idx) => (
                  <li
                    key={idx}
                    className={`${fontClass} leading-[1.5] ${
                      theme === 'dark' ? 'text-slate-200' : 'text-[#111111]'
                    }`}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Arabic Callout */}
              {slide.calloutAr && (
                <div
                  className={`p-4 rounded-xl border text-sm leading-relaxed mt-5 ${
                    theme === 'dark'
                      ? 'bg-teal-950/40 border-teal-800 text-teal-200'
                      : 'bg-white/80 border-[#8b0a1a]/20 text-[#8b0a1a] shadow-sm'
                  }`}
                >
                  <b>فائدة وتأكيد:</b> {slide.calloutAr}
                </div>
              )}
            </div>
          )}
        </div>

        {/* INTEGRATED DOCTOR'S SLIDE DIAGRAM (If applicable) */}
        {slide.diagramType && (
          <div className="mt-10 pt-6 border-t border-gray-300 dark:border-teal-900/80">
            <DoctorSlideVisuals
              diagramType={slide.diagramType}
              theme={theme === 'dark' ? 'dark' : 'doctor'}
            />
          </div>
        )}

        {/* Bottom Slide Footer Navigation */}
        <div className="mt-8 sm:mt-12 pt-4 border-t border-gray-300 dark:border-teal-900/80 flex items-center justify-between gap-2 sm:gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
              theme === 'dark'
                ? 'bg-[#006666] text-white hover:bg-teal-500 shadow-md'
                : 'bg-[#8b0a1a] text-white hover:bg-[#700714] shadow-md'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">الشريحة السابقة (Previous)</span>
            <span className="sm:hidden">السابقة</span>
          </button>

          <div className="text-xs sm:text-sm font-mono font-bold text-gray-600 dark:text-teal-400 whitespace-nowrap">
            {currentSlideIndex + 1} / {SLIDES_53.length}
          </div>

          <button
            onClick={handleNext}
            disabled={currentSlideIndex === SLIDES_53.length - 1}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
              theme === 'dark'
                ? 'bg-[#006666] text-white hover:bg-teal-500 shadow-md'
                : 'bg-[#8b0a1a] text-white hover:bg-[#700714] shadow-md'
            }`}
          >
            <span className="hidden sm:inline">الشريحة التالية (Next)</span>
            <span className="sm:hidden">التالية</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
