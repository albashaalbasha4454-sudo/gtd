import React, { useState, useMemo } from 'react';
import { LECTURE_MODULES } from '../data/lectureContent';
import { SlideModule } from '../types/immunology';
import {
  BookOpen,
  Search,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Bookmark,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  HelpCircle,
  FileText,
  Globe,
  Layers,
  ExternalLink
} from 'lucide-react';

interface LectureViewerProps {
  language: 'ar' | 'en' | 'bilingual';
  onSelectSimulator?: (id: string) => void;
  onOpenDiagrams?: () => void;
}

// Plain-language simplified summaries for all 15 course modules
const MODULE_SIMPLIFICATIONS: Record<string, { summaryEn: string; summaryAr: string; analogyEn: string; analogyAr: string }> = {
  'mod-1': {
    summaryEn: 'Immunity has two layers: Innate is the immediate physical border fence and SWAT team that reacts instantly without memory. Adaptive is the customized missile squad (T & B cells) that takes days to prepare but builds lifelong memory.',
    summaryAr: 'المناعة طبقتان: الفطرية هي الجدار العازل وفرقة التدخل السريع التي تعمل فوراً دون ذاكرة. والمكتسبة هي فرقة الصواريخ الموجهة (الخلايا التائية والبائية) التي تحتاج أياماً للتجهيز لكنها تصنع ذاكرة مناعية تدوم طوال العمر.',
    analogyEn: 'Innate = Castle moat & automatic gates. Adaptive = Specialized counter-espionage commandos with fingerprint files.',
    analogyAr: 'الفطرية = خندق القلعة والحراس الفوريين. المكتسبة = فرقة كوماندوز متخصصة تحتفظ بملفات بصمات العدو.'
  },
  'mod-2': {
    summaryEn: 'MHC is the molecular display platter. MHC Class I is present on all nucleated cells to show internal virus peptides to CD8+ Killer cells. MHC Class II is on professional scouts (APCs) to show ingested outside dirt to CD4+ Helper cells.',
    summaryAr: 'معقد التوافق النسيجي (MHC) هو صحن العرض المناعي. الصنف الأول (MHC-I) موجود على كل خلايا الجسم المنواة ليعرض الفيروسات الداخلية للخلايا القاتلة CD8+. والصنف الثاني (MHC-II) مخصص للخلايا الكشافة المحترفة ليعرض ما التقطته من الخارج للخلايا المساعدة CD4+.',
    analogyEn: 'MHC-I = Internal ID badge worn by every citizen. MHC-II = Megaphone and evidence bag used by police officers.',
    analogyAr: 'MHC-I = بطاقة الهوية الداخلية التي يحملها كل مواطن. MHC-II = حقيبة الأدلة ومكبر الصوت بيد ضابط الشرطة.'
  },
  'mod-3': {
    summaryEn: 'Endogenous proteins are shredded by the Proteasome, loaded into the ER elevator via TAP, mounted onto MHC-I:β2m, and displayed on the surface for CD8+ CTL surveillance.',
    summaryAr: 'البروتينات الداخلية تقطعها مفرمة البروتيازوم، ويضخها مصعد TAP للشبكة الباطنة لتركب على معقد MHC-I وتعرض على السطح لعيون الخلايا القاتلة CD8+.',
    analogyEn: 'Paper shredder (Proteasome) -> freight elevator (TAP) -> assembly line (ER) -> store window (Cell surface).',
    analogyAr: 'آلة تقطيع الورق (البروتيازوم) ➔ مصعد الشحن (TAP) ➔ ورشة التجميع (الشبكة) ➔ واجهة العرض الخارجية.'
  },
  'mod-4': {
    summaryEn: 'Professional APCs swallow outside microbes into acidic bubbles. In the ER, MHC-II is shielded by an Invariant Chain. In the vesicle, HLA-DM kicks out the CLIP plug and inserts the foreign peptide for CD4+ Helper T cells.',
    summaryAr: 'تبتلع الخلايا العارضة الجراثيم في أكياس حامضية. في الشبكة يُحمى ثلم MHC-II بسلسلة عازلة. وفي الحويصل يقوم HLA-DM بخلع سدادة CLIP وتركيب الببتيد الجرثومي لعرضه على خلايا CD4+ المساعدة.',
    analogyEn: 'Safety cap protects the lock until helper key HLA-DM unlocks the pin and sets the microbial key.',
    analogyAr: 'غطاء أمان يحمي القفل حتى يأتي المفتاح المساعد HLA-DM ويزيل السدادة ويركب ببتيد العدو.'
  },
  'mod-5': {
    summaryEn: 'Dendritic cells possess a unique superpower: they eat dead viral fragments and smuggle them into their own cytoplasm, loading them onto MHC-I to train naive CD8+ Killer T cells even without DC infection.',
    summaryAr: 'تمتلك الخلايا التغصنية قوة خارقة: تبتلع حطام الخلايا المصابة وتهرب البروتين لسيتوبلازمها الداخلي لتحميله على MHC-I وتدريب الخلايا القاتلة CD8+ دون أن تصاب الخلية التغصنية بالعدوى.',
    analogyEn: 'Smuggling captured enemy weapons into the training ground to train the army against them.',
    analogyAr: 'تهريب أسلحة العدو المأسورة إلى معسكر التدريب لتدريب الجنود عليها مسبقاً.'
  },
  'mod-6': {
    summaryEn: 'Activating a T cell requires 3 keys: Key 1 is Antigen fit (TCR:pMHC). Key 2 is the Safety Ignition clutch (B7 on APC + CD28 on T cell). Key 3 is the GPS Destination (Cytokines deciding Th1 vs Th2 vs Th17).',
    summaryAr: 'تنشيط الخلية التائية يحتاج 3 مفاتيح: المفتاح 1 هو التعرف على المستضد. المفتاح 2 هو دواسة الأمان (B7 مع CD28). المفتاح 3 هو نظام الملاحة GPS (السيتوكينات الموجهة لسلالة Th1 أو Th2 أو Th17).',
    analogyEn: 'Turn key (Signal 1) + Press clutch (Signal 2) + Set GPS directions (Signal 3).',
    analogyAr: 'إدارة المفتاح (الإشارة 1) + ضغط الدواسة (الإشارة 2) + تحديد خريطة الطريق (الإشارة 3).'
  },
  'mod-7': {
    summaryEn: 'IL-2 is the universal fuel for T cell multiplication. When Signals 1 & 2 meet, the T cell rapidly builds high-affinity receptors (CD25) and manufactures IL-2 to trigger explosive clonal copying.',
    summaryAr: 'إنترلوكين-2 (IL-2) هو الوقود الحيوي لتكاثر الخلايا التائية. باجتماع الإشارتين 1 و 2، تصنع الخلية مستقبلاً عالي الألفة (CD25) وتفرز IL-2 لتتضاعف أعدادها لملايين النسخ.',
    analogyEn: 'Printing press going into hyper-speed production after receiving green light clearance.',
    analogyAr: 'مطبعة عسكرية تعمل بأقصى سرعة لطباعة ملايين النسخ من الجنود بعد نيل الإذن.'
  },
  'mod-8': {
    summaryEn: 'Th1 is the general for intracellular wars (viruses, TB). It talks to macrophages via IFN-γ and CD40L, ordering them to cook trapped bacteria with chemical bleach (ROS) and nitric acid (NO).',
    summaryAr: 'خلايا Th1 هي قادة الحرب داخل الخلوية (الفيروسات وبكتيريا السل). تتحدث مع البلعميات عبر IFN-γ و CD40L وتأمرها بحرق الجراثيم المحتبسة بالأكسجين الحارق (ROS) وحمض أكسيد النتريك (NO).',
    analogyEn: 'Radioing airstrike coordinates and chemical disinfectant support to ground soldiers.',
    analogyAr: 'إرسال إحداثيات الدعم الجوي والمواد المعقمة الحارقة للجنود المحاصرين على الأرض.'
  },
  'mod-9': {
    summaryEn: 'Th2 is the defense team against worms and allergic triggers. It secretes IL-4 for IgE antibodies, IL-5 for eosinophil recruitment, and IL-13 for mucus flushing.',
    summaryAr: 'خلايا Th2 هي فرقة مكافحة الديدان والحساسية. تفرز IL-4 لإنتاج أضداد IgE، و IL-5 لجلب خلايا الحمضات، و IL-13 لزيادة المخاط وطرد الطفيليات.',
    analogyEn: 'Fire hoses flushing out parasites with heavy mucus and customized IgE tags.',
    analogyAr: 'خراطيم إطفاء لطرد الطفيليات عبر سيل المخاط والأضداد النوعية IgE.'
  },
  'mod-10': {
    summaryEn: 'Th17 protects the wet borders (gut, lungs, skin). It produces IL-17 and IL-22, calling in massive waves of Neutrophils to combat extracellular fungi and bacteria.',
    summaryAr: 'خلايا Th17 تحمي الحدود المخاطية الرطبة (الأمعاء والرئتين والجلد). تفرز IL-17 و IL-22 وتستدعي أفواجاً ضخمة من خلايا العدلات لمحاربة الفطريات والبكتيريا.',
    analogyEn: 'Border patrol wall repair and summoning the heavy infantry (neutrophils).',
    analogyAr: 'ترميم جدار الحدود واستدعاء فيالق المشاة الثقيلة (العدلات).'
  },
  'mod-11': {
    summaryEn: 'CD8+ CTLs kill infected cells with pinpoint surgical precision using Perforin (to drill holes) and Granzyme B (to detonate caspase suicide cascades), causing silent non-inflammatory apoptosis.',
    summaryAr: 'تقضي خلايا CD8+ القاتلة على الخلايا المصابة بدقة جراحية متناهية مستخدمة البيرفورين (لحفر ثقوب) والغرانزايم B (لتفجير شلال الانتحار الذاتي الكاسباز)، ما يحدث موتاً مبرمجاً هادئاً.',
    analogyEn: 'Drill holes in the door (Perforin) and send in the bomb defusal squad (Granzyme B).',
    analogyAr: 'حفر ثقب في الباب (البيرفورين) وإدخال فريق تفكيك القنابل بالداخل (غرانزايم B).'
  },
  'mod-12': {
    summaryEn: 'After the war is won, 90-95% of effector T cells undergo apoptosis (contraction). The surviving 5-10% become Memory T cells (TCM in lymph nodes, TEM in tissues) ready to react in hours upon re-exposure.',
    summaryAr: 'بعد كسب المعركة، يموت 90-95% من الخلايا التائية لتخفيف الضغط (الانكماش). وتتحول النسبة المتبقية (5-10%) إلى خلايا ذاكرة تجوب العقد والأنسجة ومستعدة للرد خلال ساعات عند تكرار العدوى.',
    analogyEn: 'Demobilizing the wartime army while retaining elite veteran reserve units.',
    analogyAr: 'تسريح جيش الحرب مع الاحتفاظ بكتائب نخبة من المحاربين القدامى في الاحتياط.'
  },
  'mod-13': {
    summaryEn: 'Central tolerance destroys self-reactive T cells in the thymus (Negative Selection). Peripheral tolerance silences any rogue escapees via Anergy (no Signal 2), CTLA-4/PD-1 brakes, or FoxP3+ Tregs.',
    summaryAr: 'التحمل المركزي يبيد الخلايا التائية المهاجمة للجسم في التوتة (الانتخاب السلبي). والتحمل المحيطي يخرس أي خلايا هاربة عبر الخمول (Anergy) أو فرامل المناعة (CTLA-4/PD-1) أو خلايا Treg الكابحة.',
    analogyEn: 'Rigorous police academy exam + Undercover Internal Affairs agents (Tregs) watching the streets.',
    analogyAr: 'اختبارات صارمة في أكاديمية الشرطة + ضباط رقابة داخلية سريين (Tregs) يراقبون الشوارع.'
  },
  'mod-14': {
    summaryEn: 'Immunity protects against cancer by recognizing mutated neoantigens on MHC-I. Tumors hide by downregulating MHC or exploiting PD-L1/CTLA-4 checkpoint shields; immunotherapy removes these shields.',
    summaryAr: 'تحمي المناعة من السرطان بالتعرف على المستضدات الطافرة على MHC-I. وتحاول الأورام الاختباء بتعطيل MHC أو رفع دروع PD-L1؛ وتعمل أدوية العلاج المناعي الحديثة على كسر هذه الدروع وإطلاق التائية.',
    analogyEn: 'Tumors put up invisible cloaks (PD-L1); checkpoint inhibitors rip the cloaks off.',
    analogyAr: 'ترتدي الأورام عباءات تخفٍ (PD-L1)؛ ومثبطات نقاط التفتيش تنزع العباءة لتراها الخلايا القاتلة.'
  },
  'mod-15': {
    summaryEn: 'Genetic defects in TAP cause Bare Lymphocyte Syndrome Type I (no CD8+ T cells). Defects in CIITA/MHC-II cause BLS Type II (severe combined deficiency / no CD4+ T cells).',
    summaryAr: 'طفرات ناقل TAP تسبب متلازمة الخلايا العارية I (غياب خلايا CD8+). وطفرات جين CIITA تسبب متلازمة الخلايا العارية II (عوز مناعي شديد وغياب خلايا CD4+).',
    analogyEn: 'BLS I = Broken elevator (TAP), empty MHC-I. BLS II = Broken factory, no MHC-II at all.',
    analogyAr: 'المتلازمة I = مصعد معطل (TAP) و MHC-I فارغ. المتلازمة II = مصنع معطل وغياب تام لـ MHC-II.'
  }
};

export const LectureViewer: React.FC<LectureViewerProps> = ({
  language,
  onSelectSimulator,
  onOpenDiagrams
}) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>(LECTURE_MODULES[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'comprehensive' | 'highYield' | 'bilingual'>('comprehensive');
  const [completedModules, setCompletedModules] = useState<Record<string, boolean>>({});
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  const isRtl = language === 'ar';

  const filteredModules = useMemo(() => {
    if (!searchQuery.trim()) return LECTURE_MODULES;
    const q = searchQuery.toLowerCase().trim();
    return LECTURE_MODULES.filter((m) =>
      m.title.toLowerCase().includes(q) ||
      (m.titleArabic && m.titleArabic.includes(q)) ||
      m.description.toLowerCase().includes(q) ||
      m.keyConcepts.some((k) => k.toLowerCase().includes(q)) ||
      m.bilingualTerms.some((b) => b.english.toLowerCase().includes(q) || b.arabic.includes(q))
    );
  }, [searchQuery]);

  const activeModule = useMemo(() => {
    return LECTURE_MODULES.find((m) => m.id === selectedModuleId) || LECTURE_MODULES[0];
  }, [selectedModuleId]);

  const toggleModuleCompleted = (id: string) => {
    setCompletedModules((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const currentIndex = LECTURE_MODULES.findIndex((m) => m.id === activeModule.id);

  const goToNextModule = () => {
    if (currentIndex < LECTURE_MODULES.length - 1) {
      setSelectedModuleId(LECTURE_MODULES[currentIndex + 1].id);
    }
  };

  const goToPrevModule = () => {
    if (currentIndex > 0) {
      setSelectedModuleId(LECTURE_MODULES[currentIndex - 1].id);
    }
  };

  const currentSimplification = MODULE_SIMPLIFICATIONS[activeModule.id] || MODULE_SIMPLIFICATIONS['mod-1'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Sidebar: Modules Navigator with Dr. Rana Habib Styling */}
      <div className="lg:col-span-4 bg-[#f2f2f2] border border-gray-300 rounded-3xl p-5 flex flex-col h-[780px] shadow-xl space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className={`w-4 h-4 text-[#8b0a1a] absolute top-3.5 ${isRtl ? 'right-3.5' : 'left-3.5'}`} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              isRtl
                ? 'ابحث في الشرائح والمصطلحات (MHC, Perforin, الخلايا التائية)...'
                : 'Search slides, terms (e.g. MHC, Perforin, Th1)...'
            }
            className={`w-full bg-white border border-gray-300 rounded-2xl py-2.5 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#8b0a1a] focus:ring-2 focus:ring-[#8b0a1a]/20 transition-all shadow-sm ${
              isRtl ? 'pr-10 pl-3.5' : 'pl-10 pr-3.5'
            }`}
          />
        </div>

        {/* Module Count & Progress */}
        <div className="flex items-center justify-between px-2 py-1 text-xs text-gray-600 border-b border-gray-300">
          <span className="font-bold">
            {isRtl ? `${filteredModules.length} موضوعاً دراسياً` : `${filteredModules.length} Topics (53 Slides)`}
          </span>
          <span className="font-mono text-[#8b0a1a] font-extrabold bg-white px-2 py-0.5 rounded-md border border-gray-300">
            {Object.values(completedModules).filter(Boolean).length} / {LECTURE_MODULES.length} {isRtl ? 'مُنجز' : 'Mastered'}
          </span>
        </div>

        {/* Modules List */}
        <div className="overflow-y-auto space-y-2 flex-1 pr-1 custom-scrollbar">
          {filteredModules.map((mod) => {
            const isSelected = mod.id === activeModule.id;
            const isDone = completedModules[mod.id];
            return (
              <button
                key={mod.id}
                onClick={() => setSelectedModuleId(mod.id)}
                className={`w-full p-3.5 rounded-2xl border transition-all flex items-start justify-between gap-2.5 text-start shadow-sm ${
                  isSelected
                    ? 'bg-[#8b0a1a] border-[#8b0a1a] text-white shadow-md'
                    : 'bg-white border-gray-300 text-gray-800 hover:border-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold">
                    <span className={`px-2 py-0.5 rounded-md font-mono text-[10px] ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#8b0a1a] border border-gray-300'
                    }`}>
                      {mod.slideRange}
                    </span>
                    {mod.titleArabic && (
                      <span className={`text-[11px] truncate font-bold ${
                        isSelected ? 'text-red-100' : 'text-gray-600'
                      }`}>({mod.titleArabic})</span>
                    )}
                  </div>
                  <div className={`text-xs font-black mt-1.5 truncate ${
                    isSelected ? 'text-white' : 'text-gray-900'
                  }`}>
                    {isRtl && mod.titleArabic ? mod.titleArabic : mod.title}
                  </div>
                  <p className={`text-[11px] truncate mt-0.5 ${
                    isSelected ? 'text-red-100' : 'text-gray-600'
                  }`}>{mod.description}</p>
                </div>
                <div className="shrink-0 mt-1">
                  {isDone ? (
                    <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                  ) : (
                    <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-gray-400'} ${isRtl ? 'rotate-180' : ''}`} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Study Canvas with Side-Borders & Dr. Rana Aesthetic */}
      <div className="lg:col-span-8 bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl space-y-6">
        <div>
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-300 pb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono shadow-sm">
                  {activeModule.slideRange}
                </span>
                {activeModule.titleArabic && (
                  <span className="text-xs text-gray-700 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
                    {activeModule.titleArabic}
                  </span>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-2">
                {isRtl && activeModule.titleArabic ? activeModule.titleArabic : activeModule.title}
              </h2>
              {activeModule.titleArabic && (
                <p className="text-xs text-[#8b0a1a] font-bold mt-0.5">{activeModule.title}</p>
              )}
            </div>

            {/* View Mode & Simplify Toggle */}
            <div className="flex items-center gap-2 flex-wrap self-start md:self-auto">
              <button
                onClick={() => setSimplifyConcept(!simplifyConcept)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black transition-all shadow-sm ${
                  simplifyConcept
                    ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                <Lightbulb className={`w-3.5 h-3.5 ${simplifyConcept ? 'text-slate-950 fill-slate-950' : 'text-amber-600'}`} />
                <span>{simplifyConcept ? (isRtl ? 'التبسيط مفعّل 💡' : 'Simplified ON 💡') : (isRtl ? 'تبسيط المفهوم 💡' : 'Simplify Concept 💡')}</span>
              </button>

              <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-gray-300 text-xs shadow-sm">
                <button
                  onClick={() => setViewMode('comprehensive')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                    viewMode === 'comprehensive'
                      ? 'bg-[#8b0a1a] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isRtl ? 'الشرح الشامل' : 'Comprehensive'}
                </button>
                <button
                  onClick={() => setViewMode('highYield')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                    viewMode === 'highYield'
                      ? 'bg-[#8b0a1a] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isRtl ? 'النقاط الجوهرية' : 'High-Yield'}
                </button>
                <button
                  onClick={() => setViewMode('bilingual')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all ${
                    viewMode === 'bilingual'
                      ? 'bg-[#8b0a1a] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {isRtl ? 'المصطلحات' : 'Terms'}
                </button>
              </div>
            </div>
          </div>

          {/* Simplified Concept Master Banner (when active) */}
          {simplifyConcept && (
            <div className="mt-4 bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-md space-y-3 text-slate-900 animate-fadeIn">
              <div className="flex items-center gap-2 border-b border-amber-200 pb-2">
                <Lightbulb className="w-5 h-5 text-amber-600 fill-amber-500 shrink-0" />
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-amber-900">
                    {isRtl ? 'التبسيط الفوري للمفهوم وتقليل العبء المعرفي' : 'Plain-Language Conceptual Digest'}
                  </h4>
                  <span className="text-[11px] text-amber-800 font-bold">
                    {isRtl ? currentSimplification.analogyAr : currentSimplification.analogyEn}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs leading-relaxed">
                <div className="p-3 bg-white/90 rounded-2xl border border-amber-200 text-left" dir="ltr">
                  <span className="text-[10px] font-black uppercase text-amber-800 block mb-1">Plain English Summary</span>
                  <p className="text-slate-800 font-medium">{currentSimplification.summaryEn}</p>
                </div>
                <div className="p-3 bg-white/90 rounded-2xl border border-amber-200 text-right" dir="rtl">
                  <span className="text-[10px] font-black uppercase text-amber-800 block mb-1">الشرح الميسر بالعربية</span>
                  <p className="text-slate-800 font-bold">{currentSimplification.summaryAr}</p>
                </div>
              </div>
            </div>
          )}

          {/* Module Content Body */}
          <div className="mt-5 space-y-5 overflow-y-auto max-h-[570px] pr-2 custom-scrollbar">
            {/* View Mode: Comprehensive */}
            {viewMode === 'comprehensive' && (
              <>
                {/* Key Takeaways Card */}
                <div className="p-5 bg-white border-l-4 border-l-[#8b0a1a] border border-gray-300 rounded-3xl shadow-sm space-y-3">
                  <div className="text-xs font-black uppercase tracking-wider text-[#8b0a1a] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#8b0a1a]" />
                    {isRtl
                      ? 'النقاط الرئيسية للمحاضرة (أ.د. رنا حبيب)'
                      : 'Key Lecture Takeaways (Dr. Rana Habib Curriculum)'}
                  </div>
                  <ul className="space-y-2 text-xs text-gray-800">
                    {activeModule.keyConcepts.map((concept, i) => (
                      <li key={i} className="flex items-start gap-2 font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#8b0a1a] mt-1 shrink-0" />
                        <span className="leading-relaxed">{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed Sections */}
                {activeModule.detailedContent.map((section, sIdx) => (
                  <div key={sIdx} className="p-5 bg-white border border-gray-300 rounded-3xl shadow-sm space-y-3">
                    <h3 className="text-sm font-black text-gray-900 border-b border-gray-200 pb-2">
                      {section.sectionTitle}
                    </h3>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                        {p}
                      </p>
                    ))}

                    {section.bulletPoints && (
                      <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-xs text-gray-800">
                        {section.bulletPoints.map((bp, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2">
                            <span className="text-[#8b0a1a] font-black shrink-0">■</span>
                            <span className="leading-relaxed font-semibold">{bp}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.comparisonData && (
                      <div className="overflow-x-auto rounded-2xl border border-gray-300 mt-3 shadow-sm">
                        <table className="w-full text-start text-xs border-collapse">
                          <thead>
                            <tr className="bg-[#8b0a1a] text-white font-black">
                              {section.comparisonData.headers.map((h, hIdx) => (
                                <th key={hIdx} className="p-3 border-r border-red-800/80 last:border-0">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.comparisonData.rows.map((row, rIdx) => (
                              <tr
                                key={rIdx}
                                className={`border-b border-gray-200 ${rIdx % 2 === 0 ? 'bg-[#fbfbfb]' : 'bg-white'} hover:bg-gray-100 transition-colors`}
                              >
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className={`p-3 text-gray-800 border-r border-gray-200 last:border-0 ${
                                      cIdx === 0 ? 'font-black text-[#8b0a1a]' : 'font-medium'
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                ))}

                {/* Clinical Pearls with Red Side-Border */}
                {activeModule.clinicalPearls.length > 0 && (
                  <div className="p-5 bg-red-50/80 border-l-4 border-l-[#8b0a1a] border border-red-200 rounded-3xl shadow-sm space-y-3">
                    <div className="text-xs font-black uppercase tracking-wider text-[#8b0a1a] flex items-center gap-1.5">
                      <Lightbulb className="w-4 h-4 text-[#8b0a1a]" />
                      {isRtl ? 'الارتباطات السريرية وأسئلة الفحص' : 'Clinical Correlations & Board Pearls'}
                    </div>
                    <ul className="space-y-2 text-xs text-gray-900">
                      {activeModule.clinicalPearls.map((pearl, i) => (
                        <li key={i} className="flex items-start gap-2 font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#8b0a1a] mt-1 shrink-0" />
                          <span className="leading-relaxed">{pearl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}

            {/* View Mode: High Yield */}
            {viewMode === 'highYield' && (
              <div className="space-y-4">
                <div className="p-5 bg-white border border-gray-300 rounded-3xl space-y-3 shadow-sm">
                  <h3 className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider border-b border-gray-200 pb-2">
                    {isRtl ? 'خلاصة الشرائح المكثفة' : 'High-Yield Slide Digest'}
                  </h3>
                  <div className="space-y-2 text-xs text-gray-800">
                    {activeModule.keyConcepts.map((kc, i) => (
                      <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-2xl border border-gray-200">
                        <span className="text-[#8b0a1a] font-black font-mono">#{i + 1}</span>
                        <span className="leading-relaxed font-medium">{kc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {activeModule.clinicalPearls.length > 0 && (
                  <div className="p-5 bg-red-50 border border-red-200 rounded-3xl space-y-3 shadow-sm">
                    <h3 className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider flex items-center gap-1.5 border-b border-red-200 pb-2">
                      <Lightbulb className="w-4 h-4 text-[#8b0a1a]" />
                      {isRtl ? 'النقاط الامتحانية الحاسمة' : 'Board Exam High-Yield Pearls'}
                    </h3>
                    <div className="space-y-2 text-xs text-gray-900">
                      {activeModule.clinicalPearls.map((cp, i) => (
                        <div key={i} className="p-3 bg-white rounded-2xl border border-red-200 font-medium">
                          {cp}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* View Mode: Bilingual Terms Bank */}
            {viewMode === 'bilingual' && (
              <div className="space-y-4">
                <div className="text-xs text-gray-700 font-bold">
                  {isRtl
                    ? 'قاموس المصطلحات والمفاهيم الطبية الثنائية للشرائح المقابلة'
                    : 'Bilingual Terminology Bank from Dr. Rana Habib\'s Slides'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeModule.bilingualTerms.map((term, tIdx) => (
                    <div
                      key={tIdx}
                      className="p-4 bg-white border border-gray-300 rounded-3xl space-y-2 shadow-sm"
                    >
                      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                        <span className="text-xs font-black text-[#8b0a1a] font-mono">{term.english}</span>
                        <span className="text-xs font-black text-gray-900">{term.arabic}</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed font-medium">{term.context}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigator & Action Controls */}
        <div className="pt-4 border-t border-gray-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => toggleModuleCompleted(activeModule.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                completedModules[activeModule.id]
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:text-gray-900 border border-gray-300'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {completedModules[activeModule.id]
                  ? isRtl ? 'تمت دراسة هذا الموضوع ✓' : 'Topic Mastered ✓'
                  : isRtl ? 'تعليم كمكتمل' : 'Mark as Mastered'}
              </span>
            </button>

            {onOpenDiagrams && (
              <button
                onClick={onOpenDiagrams}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-gray-100 text-[#8b0a1a] border border-gray-300 text-xs font-bold transition-all shadow-sm"
              >
                <Layers className="w-4 h-4 text-[#8b0a1a]" />
                <span>{isRtl ? 'عرض المخطط التفاعلي' : 'View Pathway Diagram'}</span>
              </button>
            )}
          </div>

          {/* Prev / Next buttons */}
          <div className="flex items-center gap-2">
            <button
              disabled={currentIndex === 0}
              onClick={goToPrevModule}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-300 text-xs font-bold text-gray-700 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{isRtl ? 'الموضوع السابق' : 'Previous'}</span>
            </button>

            <button
              disabled={currentIndex === LECTURE_MODULES.length - 1}
              onClick={goToNextModule}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8b0a1a] text-xs font-bold text-white hover:bg-[#700714] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
            >
              <span>{isRtl ? 'الموضوع التالي' : 'Next'}</span>
              {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
