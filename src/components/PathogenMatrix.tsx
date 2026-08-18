import React, { useState } from 'react';
import { PATHOGEN_CLASSIFICATION, CYTOKINE_CATALOG } from '../data/lectureContent';
import {
  Bug,
  Sparkles,
  Shield,
  HeartPulse,
  Activity,
  Zap,
  Search,
  ArrowRight,
  Split,
  Lightbulb,
  CheckCircle2,
  Stethoscope,
  Radio,
  BookOpen
} from 'lucide-react';

interface PathogenMatrixProps {
  language?: 'ar' | 'en' | 'bilingual';
}

const PATHOGEN_ARABIC_MAPPING: Record<
  string,
  {
    categoryNameAr: string;
    hostCellAr: string;
    pathwayAr: string;
    effectorAr: string;
    clinicalAr: string;
    mnemonicEn: string;
    mnemonicAr: string;
  }
> = {
  Phagolysosome: {
    categoryNameAr: 'ميكروبات داخل خلوية محصورة في الحويصلات البلعمية (Vesicular / Phagolysosomal)',
    hostCellAr: 'البلعميات الكبيرة (Macrophages) والخلايا البلعمية الأخرى',
    pathwayAr: 'تُعالج عبر مسار MHC-II وتُعرض للخلايا التائية المساعدة CD4+ Th1',
    effectorAr: 'إفراز IFN-γ مع رابط CD40L لتنشيط البلعميات (M1) وتوليد جذور الأكسجين التفاعلية (ROS) وأكسيد النيتريك (NO) لإبادة الميكروب بالحويصلة',
    clinicalAr: 'التهاب حبيبي مزمن (Granuloma)، تليف نسيجي، أو استمرار الجرثوم حياً عند نقص الخلايا التائية Th1 أو نقص IFN-γ.',
    mnemonicEn: 'Vesicular Vault: Mycobacteria hide inside phagosome safes; CD4+ Th1 sends IFN-γ keys to ignite oxidative fires.',
    mnemonicAr: 'خزنة الحويصلات: تختبئ عصيات السل داخل الحويصل، وترسل خلايا CD4+ Th1 مفتاح IFN-γ لتفجير الجذور المؤكسدة وحرقها داخل الخزنة.'
  },
  'Cytosol Escape': {
    categoryNameAr: 'ميكروبات تهرب من الحويصلات البالعة إلى الهيولى (Cytosolic Escapees)',
    hostCellAr: 'البلعميات والخلايا الجسدية المضيفة',
    pathwayAr: 'تُهضم بالبروتيازوم وتُنقل بـ TAP وتُعرض على MHC-I للخلايا التائية السامة CD8+ CTL',
    effectorAr: 'قتل سام مباشر عبر البيرفورين والغرانزايم وإحداث الموت المبرمج (Apoptosis) للخلية المصابة لحرمان الميكروب من بيئته',
    clinicalAr: 'التهاب سحايا وتجرثم دم خطير عند الحوامل والمثبطين مناعياً (الليستيريا)، والتهاب أوعية حاد (الركتسيات).',
    mnemonicEn: 'Jailbreak to Cytosol: Once bacteria break free from phagosomes, they ring the MHC-I alarm for CD8+ sniper execution.',
    mnemonicAr: 'الهروب من السجن: بمجرد هروب البكتيريا للهيولى، تدق صافرة MHC-I لقناصي CD8+ لإعدام الخلية المأوى.'
  },
  Nonphagocytic: {
    categoryNameAr: 'ميكروبات تصيب الخلايا غير البلعمية (الفيروسات، طفيليات الكبد)',
    hostCellAr: 'الخلايا الظهارية، البطانية، خلايا الكبد، والخلايا العصبية',
    pathwayAr: 'تخليق بروتينات فيروسية في الهيولى -> بروتيازوم -> TAP -> معقد MHC-I -> خلايا CD8+ CTL (مع العرض المتصالب للبدء)',
    effectorAr: 'تحلل سام مستهدف بالخلايا القاتلة CD8+ لتدمير مصنع التكاثر الفيروسي، مع إفراز IFN-γ لحماية الخلايا المجاورة',
    clinicalAr: 'التهاب كبد فيروسي حاد ومزمن، ذات رئة فيروسية، والمرحلة الكبدية للملاريا.',
    mnemonicEn: 'Hostage Hijack: Viruses hijack somatic cells; CD8+ CTLs destroy the viral factory before new virions bud.',
    mnemonicAr: 'احتجاز الرهائن: الفيروس يحتل الخلية ويحولها لمصنع؛ خلايا CD8+ تفكك المصنع بعملية انتحار مبرمج منضبطة.'
  }
};

const CYTOKINE_ARABIC_MAPPING: Record<
  string,
  {
    nameAr: string;
    actionAr: string;
    sourceAr: string;
    clinicalAr: string;
    mnemonicAr: string;
  }
> = {
  'Interleukin-2 (IL-2)': {
    nameAr: 'إنترلوكين-2 (IL-2) - محفز النمو والتكاثر النسيلي',
    actionAr: 'يحفز نمو وتكاثر الخلايا التائية المنشطة ذاتياً ومحيطياً، ويحافظ على بقاء الخلايا التائية المنظمة (Tregs)',
    sourceAr: 'الخلايا التائية المنشطة (CD4+ و CD8+)',
    clinicalAr: 'هدف الأدوية المثبطة للمناعة (السيكلوسبورين يمنع نسخه عبر الكالسينيورين، والرابامايسين يمنع إشارته عبر mTOR). يُستخدم بجرعات عالية لعلاج الورم الميلانيني.',
    mnemonicAr: 'IL-2 = وقود الصواريخ التائية؛ دونه تتوقف الخلايا عن الانقسام والتكاثر.'
  },
  'Interferon-gamma (IFN-γ)': {
    nameAr: 'إنترفيرون غاما (IFN-γ) - المنشط الأعظم للبلعميات',
    actionAr: 'التنشيط الكلاسيكي للبلعميات (M1) لتحفيز إنتاج ROS و NO، وزيادة التعبير عن MHC-I و MHC-II، وتوجيه التمايز نحو Th1',
    sourceAr: 'خلايا Th1، خلايا CD8+ CTL، وخلايا NK القاتلة الطبيعية',
    clinicalAr: 'أساسي لتشكيل الورم الحبيبي ومقاومة السل والليشمانيا. يُعطى كعلاج لمرض عوز المناعة الحبيبي المزمن (CGD).',
    mnemonicAr: 'IFN-γ = شارة القيادة العليا التي تحول البلعمية الوديعة إلى وحش هضم مفترس (M1).'
  },
  'Interleukin-4 (IL-4)': {
    nameAr: 'إنترلوكين-4 (IL-4) - موجه التحسس وديدان الأمعاء',
    actionAr: 'يحفز تمايز الخلايا التائية نحو سلالة Th2، ويقود تحول أصناف الأضداد في البائيات إلى IgE و IgG4',
    sourceAr: 'خلايا Th2، الخلايا البدينة (Mast cells)، والخلايا القاعدية',
    clinicalAr: 'المحرك الأساسي لأمراض الحساسية والربو التأتبي والدفاع ضد الديدان الطفيلية. دواء دوبيلوماب (Dupilumab) يثبط مستقبله لعلاج الربو الشديد.',
    mnemonicAr: 'IL-4 = 4 = For IgE & Allergies (سيتوكين التأتية والحساسية والديدان).'
  },
  'Interleukin-5 (IL-5)': {
    nameAr: 'إنترلوكين-5 (IL-5) - قائد الحمضات (Eosinophils)',
    actionAr: 'يحفز تكاثر وتمايز وتجنيد وتنشيط الحمضات (Eosinophils) وإفراز IgA المخاطي',
    sourceAr: 'خلايا Th2 والخلايا البدينة',
    clinicalAr: 'حاسم للقضاء على الديدان والربو اليوزيني. أدوية ميبوليزوماب وبنراليزوماب تستهدفه لعلاج الربو اليوزيني المستعصي.',
    mnemonicAr: 'IL-5 = Eosinophil 5-Star General (النجمة الخماسية لجنرال الحمضات).'
  },
  'Transforming Growth Factor-beta (TGF-β)': {
    nameAr: 'عامل النمو المحول بيتا (TGF-β) - كابح الالتهاب والمصلح',
    actionAr: 'يكبح تكاثر الخلايا التائية وتأثيراتها، يحفز نشوء الخلايا المنظمة Tregs، ويحفز تصنيع الكولاجين وترميم الأنسجة',
    sourceAr: 'الخلايا التائية المنظمة (Tregs)، البلعميات، والخلايا اللحمية',
    clinicalAr: 'سيتوكين مضاد للالتهاب لمنع المناعة الذاتية؛ تستغله الأورام الخبيثة لكبح المناعة وتفادي القتل المناعي.',
    mnemonicAr: 'TGF-β = إشارة التهدئة والفرامل المناعية لمنع الحرائق الذاتية وترميم الجروح.'
  },
  'Interleukin-12 (IL-12)': {
    nameAr: 'إنترلوكين-12 (IL-12) - مهندس الاستجابة الخلوية Th1',
    actionAr: 'يقود تمايز الخلايا التائية نحو Th1، ويحفز إفراز IFN-γ من الخلايا التائية وخلايا NK',
    sourceAr: 'البلعميات المنشطة والخلايا الشجيرية (APCs)',
    clinicalAr: 'عوز مستقبل IL-12 يؤدي لفرط الاستعداد للإصابة بالسل والسالونيلا المنتشرة (MSMD).',
    mnemonicAr: 'IL-12 = بوصلة Th1 التي تحث على إفراز IFN-γ وقيادة الحرب ضد المتفطرات.'
  },
  'Interleukin-17 (IL-17)': {
    nameAr: 'إنترلوكين-17 (IL-17) - مجند العدلات ومدافع الحواجز',
    actionAr: 'يحفز إفراز الكيموكينات وعوامل النمو لجذب العدلات وإحداث التهاب حاد لحماية الحواجز الظهارية',
    sourceAr: 'الخلايا التائية المساعدة Th17',
    clinicalAr: 'حاسم للقضاء على المبيضات (Candida) وجراثيم الكلبسيلا. دواء سيكيوكينوماب (Secukinumab) يثبطه لعلاج الصدفية والتهاب الفقار اللاصق.',
    mnemonicAr: 'IL-17 = جرس إنذار العدلات (Neutrophils) لحماية الأغشية المخاطية والجلد.'
  }
};

export const PathogenMatrix: React.FC<PathogenMatrixProps> = ({ language = 'ar' }) => {
  const [activeTab, setActiveTab] = useState<'pathogens' | 'cytokines'>('pathogens');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'bilingual' | 'ar' | 'en'>(
    language === 'en' ? 'en' : language === 'ar' ? 'ar' : 'bilingual'
  );
  const [showMnemonics, setShowMnemonics] = useState<boolean>(true);

  const filteredPathogens = PATHOGEN_CLASSIFICATION.filter(
    (p) =>
      p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.examples.some((e) => e.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.clinicalManifestation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCytokines = CYTOKINE_CATALOG.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.principalAction.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.cellularSource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.clinicalSignificance.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Microbial Habitat & Cytokine Encyclopedia | موسوعة الميكروبات والسيتوكينات
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              Slides 47–49, 53 | أ.د. رنا حبيب
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            {viewMode === 'ar'
              ? 'مصفوفة تصنيف الممرضات داخل الخلوية وأطياف السيتوكينات'
              : 'Pathogen Defense & Cytokine Biologic Action Matrix'}
          </h2>
          <p className="text-sm text-gray-700 mt-1 max-w-3xl leading-relaxed">
            {viewMode === 'ar'
              ? 'تصنيف دقيق للممرضات داخل الخلوية (حويصلية مقابل هيولية) وتوضيح دور كل سيتوكين في توجيه الاستجابة الخلوية والآفات السريرية.'
              : 'Comprehensive classification of intracellular pathogens (vesicular vs cytosolic) and the master cytokine spectrum governing cell-mediated immunity.'}
          </p>
        </div>

        {/* View Mode & Tab Switchers */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Side-by-Side Dual Switcher */}
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
              <span>مزدوج (Side-by-Side)</span>
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
            onClick={() => setShowMnemonics(!showMnemonics)}
            className={`px-3.5 py-1.5 rounded-2xl border text-xs font-black flex items-center gap-1.5 transition-all shadow-sm ${
              showMnemonics
                ? 'bg-amber-100 border-amber-300 text-amber-900'
                : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>{showMnemonics ? 'أفكار التذكر مفعلة 💡' : 'إظهار التبسيط والتذكر 💡'}</span>
          </button>
        </div>
      </div>

      {/* Main Tabs (Pathogens vs Cytokines) */}
      <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
        <button
          onClick={() => setActiveTab('pathogens')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'pathogens'
              ? 'bg-[#8b0a1a] text-white shadow-md'
              : 'bg-white border border-gray-300 text-gray-700 hover:text-[#8b0a1a]'
          }`}
        >
          <Bug className="w-4 h-4" />
          <span>الممرضات داخل الخلوية (Slides 47–49)</span>
        </button>
        <button
          onClick={() => setActiveTab('cytokines')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs sm:text-sm transition-all ${
            activeTab === 'cytokines'
              ? 'bg-[#8b0a1a] text-white shadow-md'
              : 'bg-white border border-gray-300 text-gray-700 hover:text-[#8b0a1a]'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>طيف السيتوكينات الفسيولوجي (Slide 53)</span>
        </button>
      </div>

      {/* Search Input */}
      <div className="relative w-full">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            activeTab === 'pathogens'
              ? 'Search pathogens (Mycobacterium, Listeria, Viruses, Leishmania)...'
              : 'Search cytokines (IL-2, IFN-gamma, IL-4, IL-12, TGF-beta)...'
          }
          className="w-full bg-white border border-gray-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#8b0a1a] focus:ring-2 focus:ring-[#8b0a1a]/20 shadow-sm transition-all"
        />
      </div>

      {/* PATHOGENS TAB VIEW */}
      {activeTab === 'pathogens' && (
        <div className="space-y-6">
          {/* Golden Compartment Rule Banner */}
          <div className="p-4 bg-amber-50 border-l-4 border-l-[#8b0a1a] border border-amber-200 rounded-2xl text-xs sm:text-sm text-gray-800 shadow-sm leading-relaxed">
            <span className="font-extrabold text-[#8b0a1a]">القاعدة الحُجرية الذهبية (The Golden Compartment Rule):</span>
            {' '}يقسم جهاز المناعة مسارات الدفاع بدقة جراحية: الجراثيم المقيمة في الحويصلات البلعمية (Vesicular) تُباد بتعاون خلايا CD4+ Th1 مع البلاعم عبر MHC-II، بينما الميكروبات التي تهرب للهيولى أو الفيروسات المتكاثرة فيها فتُستهدف بالإعدام المباشر للخلية المضيفة بخلايا CD8+ CTLs عبر MHC-I.
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredPathogens.map((path, idx) => {
              const arMeta = PATHOGEN_ARABIC_MAPPING[path.category] || {
                categoryNameAr: path.categoryName,
                hostCellAr: path.hostCellType,
                pathwayAr: path.immuneRecognitionPathway,
                effectorAr: path.effectorMechanism,
                clinicalAr: path.clinicalManifestation,
                mnemonicEn: 'Match pathogen niche to MHC-I (cytosolic) or MHC-II (vesicular).',
                mnemonicAr: 'طابق بيئة الميكروب: هيولي -> MHC-I و CD8+، حويصلي -> MHC-II و CD4+.'
              };

              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-300 rounded-3xl p-6 shadow-md space-y-4 transition-all hover:shadow-lg"
                >
                  {/* Category Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#8b0a1a] font-extrabold">
                        Niche: {path.category}
                      </span>
                      <h3 className="text-lg font-black text-gray-900 mt-0.5">
                        {viewMode === 'ar' ? arMeta.categoryNameAr : path.categoryName}
                      </h3>
                      {viewMode === 'bilingual' && (
                        <div className="text-xs font-bold text-gray-600 mt-0.5" dir="rtl">
                          {arMeta.categoryNameAr}
                        </div>
                      )}
                    </div>
                    <span className="text-xs px-3 py-1.5 rounded-xl bg-gray-100 border border-gray-300 text-gray-700 font-bold self-start sm:self-auto">
                      Host Locus: {viewMode === 'ar' ? arMeta.hostCellAr : path.hostCellType}
                    </span>
                  </div>

                  {/* High-Yield Mnemonic Hook */}
                  {showMnemonics && (
                    <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-3.5 flex items-start gap-2.5 text-xs text-amber-950">
                      <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <div className="font-bold">
                          <b>فكرة لعدم النسيان:</b> {arMeta.mnemonicAr}
                        </div>
                        {viewMode !== 'ar' && (
                          <div className="text-[11px] text-amber-900 font-medium font-sans" dir="ltr">
                            <b>Mnemonic:</b> {arMeta.mnemonicEn}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Microbes Badges List */}
                  <div>
                    <span className="text-xs font-bold text-gray-600 block mb-2">
                      الأمثلة الجرثومية والفيروسية النموذجية (Key Pathogen Examples):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {path.examples.map((ex, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-mono font-bold rounded-xl bg-red-50 text-[#8b0a1a] border border-red-200 shadow-sm italic"
                        >
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mechanism & Clinical Details (Side-by-Side Dual or Single) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Immune Pathway */}
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                      <span className="text-[11px] font-black uppercase text-[#8b0a1a] flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5" />
                        مسار التعرف المناعي (MHC Pathway)
                      </span>
                      {viewMode === 'ar' ? (
                        <p className="text-xs text-gray-800 font-bold leading-relaxed" dir="rtl">
                          {arMeta.pathwayAr}
                        </p>
                      ) : viewMode === 'en' ? (
                        <p className="text-xs text-gray-800 leading-relaxed font-medium">
                          {path.immuneRecognitionPathway}
                        </p>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-xs text-gray-900 leading-relaxed font-medium">
                            {path.immuneRecognitionPathway}
                          </p>
                          <p className="text-xs text-gray-700 font-bold leading-relaxed border-t border-gray-200 pt-1" dir="rtl">
                            {arMeta.pathwayAr}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Effector Mechanism */}
                    <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5">
                      <span className="text-[11px] font-black uppercase text-emerald-800 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        الآلية التأثيرية للقضاء عليه (Effector Action)
                      </span>
                      {viewMode === 'ar' ? (
                        <p className="text-xs text-gray-800 font-bold leading-relaxed" dir="rtl">
                          {arMeta.effectorAr}
                        </p>
                      ) : viewMode === 'en' ? (
                        <p className="text-xs text-gray-800 leading-relaxed font-medium">
                          {path.effectorMechanism}
                        </p>
                      ) : (
                        <div className="space-y-1">
                          <p className="text-xs text-gray-900 leading-relaxed font-medium">
                            {path.effectorMechanism}
                          </p>
                          <p className="text-xs text-gray-700 font-bold leading-relaxed border-t border-gray-200 pt-1" dir="rtl">
                            {arMeta.effectorAr}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Clinical Manifestation Box */}
                  <div className="p-3 bg-red-50/50 border border-red-200 rounded-xl text-xs flex items-center gap-2 text-gray-800">
                    <Stethoscope className="w-4 h-4 text-[#8b0a1a] shrink-0" />
                    <span>
                      <b>المظهر السريري المترتب (Clinical Correlation):</b>{' '}
                      {viewMode === 'ar' ? arMeta.clinicalAr : path.clinicalManifestation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CYTOKINES TAB VIEW */}
      {activeTab === 'cytokines' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCytokines.map((cyt, idx) => {
            const arMeta = CYTOKINE_ARABIC_MAPPING[cyt.name] || {
              nameAr: cyt.name,
              actionAr: cyt.principalAction,
              sourceAr: cyt.cellularSource,
              clinicalAr: cyt.clinicalSignificance,
              mnemonicAr: 'سيتوكين رئيسي في تنظيم الاستجابة المناعية وتوجيه الخلايا التائية.'
            };

            return (
              <div
                key={idx}
                className="bg-white border border-gray-300 rounded-3xl p-6 shadow-md space-y-3.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-2.5 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-xl bg-red-50 text-[#8b0a1a] border border-red-200 flex items-center justify-center font-black text-xs">
                        ⚡
                      </span>
                      <div>
                        <h3 className="text-base font-black text-gray-900">{cyt.name}</h3>
                        {viewMode !== 'en' && (
                          <div className="text-xs font-bold text-[#8b0a1a]" dir="rtl">
                            {arMeta.nameAr}
                          </div>
                        )}
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-gray-100 border border-gray-300 text-gray-600 px-2.5 py-1 rounded-md">
                      {cyt.slideRef}
                    </span>
                  </div>

                  {/* Mnemonic Hook */}
                  {showMnemonics && (
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-bold mb-3 flex items-start gap-1.5" dir="rtl">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{arMeta.mnemonicAr}</span>
                    </div>
                  )}

                  {/* Cellular Source */}
                  <div className="text-xs space-y-1">
                    <span className="font-black text-gray-500 uppercase tracking-wider block">
                      المصدر الخلوي (Cellular Source):
                    </span>
                    <span className="font-bold text-gray-800">
                      {viewMode === 'ar' ? arMeta.sourceAr : cyt.cellularSource}
                    </span>
                  </div>

                  {/* Principal Action */}
                  <div className="text-xs space-y-1 pt-2">
                    <span className="font-black text-[#8b0a1a] uppercase tracking-wider block">
                      الفعل البيولوجي الرئيسي (Principal Action):
                    </span>
                    {viewMode === 'ar' ? (
                      <p className="text-gray-800 font-bold leading-relaxed" dir="rtl">
                        {arMeta.actionAr}
                      </p>
                    ) : viewMode === 'en' ? (
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {cyt.principalAction}
                      </p>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-gray-900 font-medium leading-relaxed">{cyt.principalAction}</p>
                        <p className="text-gray-700 font-bold leading-relaxed border-t border-gray-200 pt-1" dir="rtl">
                          {arMeta.actionAr}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Clinical Significance */}
                <div className="p-3 bg-red-50/60 rounded-xl border border-red-200 text-xs text-gray-800 leading-relaxed">
                  <span className="font-black text-[#8b0a1a] block mb-0.5">
                    الأهمية والتطبيقات السريرية (Clinical Applications & Biologics):
                  </span>
                  {viewMode === 'ar' ? arMeta.clinicalAr : cyt.clinicalSignificance}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
