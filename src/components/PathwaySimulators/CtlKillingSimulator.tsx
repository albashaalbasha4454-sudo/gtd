import React, { useState } from 'react';
import { Skull, Shield, Sparkles, HeartPulse, Activity, Zap, Play, RotateCcw, Lightbulb } from 'lucide-react';

interface SimulatorLanguageProps {
  language?: 'ar' | 'en' | 'bilingual';
}

export const CtlKillingSimulator: React.FC<SimulatorLanguageProps> = ({ language = 'ar' }) => {
  const [killingMode, setKillingMode] = useState<'perforin' | 'fas'>('perforin');
  const [stage, setStage] = useState<number>(0);
  const [targetViability, setTargetViability] = useState<number>(100);
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  const perforinStages = [
    {
      title: '1. Immunological Synapse Formation & Granule Polarization | تشكل المشبك المناعي واستقطاب الحبيبات',
      detail: 'CD8+ CTL TCR recognizes viral peptide in MHC Class I. The microtubule organizing center (MTOC) polarizes lytic granules directly towards the contact cleft.',
      detailArabic: 'يتعرف مستقبل TCR للخلية السمية CD8+ على الببتيد الفيروسي المعروض على MHC-I. يستقطب مركز الأنيبيبات الدقيقة (MTOC) الحبيبات الحالة نحو شق التماس مباشرة.',
      simplifiedEn: 'CTL locks onto the infected cell and aims its weapon cannons directly at the target, shielding neighbors.',
      simplifiedAr: 'تلتصق الخلية القاتلة بالهدف المصاب وتوجه مدافع الحبيبات نحو الهدف مباشرة لحماية الجيران.',
      viability: 100,
      biomarker: 'TCR:MHC-I Contact Established'
    },
    {
      title: '2. Perforin Exocytosis & Membrane Polymerization | إفراز البيرفورين وبلمرة الثقوب الغشائية',
      detail: 'Perforin monomers are released into the synaptic cleft. In the presence of Ca2+, perforin polymerizes and forms cylindrical transmembrane pores in the target cell plasma membrane.',
      detailArabic: 'تتحرر جزيئات البيرفورين في الشق المشبكي، وبوجود الكالسيوم Ca2+ تتبلمر لتصنع قنوات وثقوب أسطوانية (15-20 نانومتر) في غشاء الخلية الهدف.',
      simplifiedEn: 'Perforin drills cylindrical tunnels through the enemy membrane wall.',
      simplifiedAr: 'يحفر البيرفورين أنفاقاً وثقوباً أسطوانية في جدار الخلية المصابة.',
      viability: 85,
      biomarker: 'Pore Formation (15–20nm channels)'
    },
    {
      title: '3. Granzyme B Delivery & Caspase Cleavage | دخول الغرانزيم B وتفعيل الكاسبازات',
      detail: 'Granzyme B (serine protease) enters the target cell cytosol via perforin pores. It directly cleaves and activates Procaspase-3, Procaspase-7, and Bid (tBid mitochondrial pathway).',
      detailArabic: 'يعبر إنزيم الغرانزيم B (Granzyme B) عبر ثقوب البيرفورين إلى الهيولى ليفعل مباشرة Procaspase-3 و Caspase-7 وبروتين Bid الميتوكوندري.',
      simplifiedEn: 'Granzyme B enters like a demolition squad, detonating internal caspase suicide bombs.',
      simplifiedAr: 'يعبر غرانزايم B كفريق تفكيك متفجرات، مشعلاً قنابل الكاسباز للانتحار الذاتي المنظم.',
      viability: 45,
      biomarker: 'Caspase-3 & Caspase-7 Active'
    },
    {
      title: '4. Execution of Apoptosis & DNA Fragmentation | تنفيذ الموت المبرمج وتفتت الدنا DNA',
      detail: 'Active Caspase-3 cleaves ICAD (Inhibitor of Caspase-Activated DNase), allowing CAD to enter the nucleus and cause internucleosomal DNA cleavage into 200bp fragments. Membrane blebbing completes non-inflammatory cell death.',
      detailArabic: 'يفكك كاسباز-3 النشط مثبط الدناز ICAD، فيدخل إنزيم CAD للنواة ويقطع الدنا لقطع بطول 200 زوج قواعد مع تكوين أجسام موت خلوية تبتلعها البلاعم دون التهاب.',
      simplifiedEn: 'Target cell quietly disassembles itself into clean snack packages for macrophages, leaving no viral leak.',
      simplifiedAr: 'تتفكك الخلية بهدوء لحزم نقية تبتلعها البلعميات دون انفجار أو تسرب للفيروسات.',
      viability: 0,
      biomarker: 'Apoptotic Blebbing & DNA Laddering'
    }
  ];

  const fasStages = [
    {
      title: '1. Target Recognition & FasL Upregulation | التعرف على الهدف والتعبير عن FasL',
      detail: 'Activated CD8+ CTL expresses high levels of surface membrane Fas Ligand (FasL / CD95L / CD178) following TCR engagement.',
      detailArabic: 'تُظهر الخلية التائية السمية المفعلة مستويات عالية من ربيطة FasL (CD95L) على سطحها إثر ارتباط مستقبل TCR بمستضده.',
      simplifiedEn: 'CTL extends its outer "death key" (FasL).',
      simplifiedAr: 'تبرز الخلية القاتلة مفتاح الموت الخارجي (FasL) على غشائها.',
      viability: 100,
      biomarker: 'FasL Surface Expression on CTL'
    },
    {
      title: '2. Fas (CD95) Trimerization on Target Cell | تثليث مستقبل الموت Fas على الخلية الهدف',
      detail: 'FasL on CTL binds to and crosslinks the death receptor Fas (CD95) on the target cell, causing its intracellular Death Domains (DD) to trimerize.',
      detailArabic: 'يرتبط FasL بربيطة الموت Fas (CD95) على الخلية الهدف محدثاً تشابكاً وتثليثاً لنطاقات الموت الخلوية الداخلية (Death Domains).',
      simplifiedEn: 'CTL presses the target cell\'s suicide doorbell (Fas / CD95).',
      simplifiedAr: 'تضغط التائية جرس انتحار الخلية الهدف (مستقبل Fas).',
      viability: 80,
      biomarker: 'Fas Trimerization & FADD Recruitment'
    },
    {
      title: '3. DISC Formation & Procaspase-8 Activation | تشكل معقد DISC وتفعيل كاسباز-8',
      detail: 'The adaptor protein FADD (Fas-Associated Death Domain) docks onto the trimerized Fas, assembling the Death-Inducing Signaling Complex (DISC) which cleaves Procaspase-8 into active Caspase-8.',
      detailArabic: 'يرسو البروتين المكيف FADD على Fas المثلوث ليصنع معقد الإشارة المحرض للموت (DISC) الذي يشطر طليعة كاسباز-8 إلى كاسباز-8 النشط.',
      simplifiedEn: 'The suicide signal triggers Caspase-8 inside the target cell.',
      simplifiedAr: 'تطلق إشارة الموت كاسباز-8 المحفز للانتحار الذاتي.',
      viability: 35,
      biomarker: 'Active Caspase-8 & DISC Complex'
    },
    {
      title: '4. Downstream Caspase-3 Activation & Apoptotic Demise | تفعيل كاسباز-3 التنفيذي وموت الخلية',
      detail: 'Caspase-8 directly activates executioner Caspase-3 and cleaves Bid to tBid, triggering mitochondrial cytochrome c release and irreversible programmed cell death without lysis.',
      detailArabic: 'يقوم كاسباز-8 بتفعيل كاسباز-3 مباشرة مع شطر بروتين Bid لتحرير سيتوكروم c، مؤدياً إلى الموت الخلوي المبرمج غير الالتهابي دون تمزق الخلية الحية.',
      simplifiedEn: 'Clean programmed demise with no inflammation.',
      simplifiedAr: 'موت مبرمج هادئ ونظيف يمنع الالتهاب المفرط.',
      viability: 0,
      biomarker: 'Apoptotic Body Clearance by Macrophages'
    }
  ];

  const stages = killingMode === 'perforin' ? perforinStages : fasStages;

  const handleNextStage = () => {
    if (stage < stages.length - 1) {
      const nextStage = stage + 1;
      setStage(nextStage);
      setTargetViability(stages[nextStage].viability);
    }
  };

  const handleReset = () => {
    setStage(0);
    setTargetViability(100);
  };

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Cytotoxicity Engine | محاكي القتل الخلوي التائي
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              Slides 45–50 | أ.د. رنا حبيب
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            CD8+ Cytotoxic T Lymphocyte (CTL) Lethal Hit Simulator
          </h2>
          <p className="text-sm text-gray-700 mt-1 max-w-2xl leading-relaxed">
            محاكاة الضربة القاتلة للخلايا التائية السمية عبر مسار البيرفورين/غرانزيم ومسار مستقبل الموت Fas/FasL وتتبع حيوية الخلية الهدف.
          </p>
        </div>

        {/* Simplify Concept Button */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setSimplifyConcept(!simplifyConcept)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all shadow-sm ${
              simplifyConcept
                ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <Lightbulb className={`w-4 h-4 ${simplifyConcept ? 'text-slate-950 fill-slate-950' : 'text-amber-600'}`} />
            <span>{simplifyConcept ? 'وضع التبسيط مفعّل 💡' : 'تبسيط المفهوم 💡'}</span>
          </button>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
        <button
          onClick={() => {
            setKillingMode('perforin');
            handleReset();
          }}
          className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
            killingMode === 'perforin'
              ? 'bg-[#8b0a1a] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          1. مسار حبيبات البيرفورين والغرانزيم B (Perforin/Granzyme)
        </button>
        <button
          onClick={() => {
            setKillingMode('fas');
            handleReset();
          }}
          className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
            killingMode === 'fas'
              ? 'bg-[#8b0a1a] text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
          }`}
        >
          2. مسار مستقبل الموت Fas / FasL (CD95 / CD178)
        </button>
      </div>

      {/* Simplified Banner if active */}
      {simplifyConcept && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-md text-slate-900 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-black text-amber-900 text-xs sm:text-sm">
            <Lightbulb className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>تشبيه الضربة القاتلة: الحفار وقنبلة التفكيك المنظم</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            يقوم البيرفورين بعمل ثقوب كحفار دقيق في جدار الخلية الهدف، ليعبر من خلاله غرانزايم B ويفعل مفاتيح الموت الذاتي (الكاسبازات). تتفتت الخلية المصابة من الداخل بهدوء وتلتهمها البلاعم، ما يمنع خروج الفيروسات أو انفجار الخلية السامة في النسيج المحيط.
          </p>
        </div>
      )}

      {/* Interactive Simulation Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Stage Visual Progress & Actions */}
        <div className="lg:col-span-8 bg-white border border-gray-300 rounded-3xl p-6 shadow-md space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <span className="text-xs font-black uppercase tracking-wider text-[#8b0a1a]">
                المرحلة {stage + 1} من {stages.length}
              </span>
              <span className="text-xs font-mono font-bold text-gray-600">
                {stages[stage].biomarker}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-black text-gray-900 mt-3">
              {stages[stage].title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-800 font-bold mt-2 leading-relaxed" dir="rtl">
              {stages[stage].detailArabic}
            </p>
            <p className="text-xs text-gray-600 mt-1 leading-relaxed" dir="ltr">
              {stages[stage].detail}
            </p>

            {/* Simplified Stage Note */}
            {simplifyConcept && (
              <div className="mt-3 p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                <span className="text-[11px] font-black text-amber-900 flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                  تبسيط الخطوة:
                </span>
                <p className="text-xs font-bold text-slate-900">{stages[stage].simplifiedAr}</p>
                <p className="text-[11px] text-slate-700" dir="ltr">{stages[stage].simplifiedEn}</p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-black text-gray-700 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>إعادة الضبط</span>
            </button>

            <button
              onClick={handleNextStage}
              disabled={stage === stages.length - 1}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#8b0a1a] hover:bg-[#700714] text-xs font-black text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-md transition-all"
            >
              <span>{stage === stages.length - 1 ? 'اكتملت الضربة القاتلة' : 'تنفيذ المرحلة التالية ➔'}</span>
            </button>
          </div>
        </div>

        {/* Right: Target Cell Viability Meter */}
        <div className="lg:col-span-4 bg-white border border-gray-300 rounded-3xl p-6 shadow-md flex flex-col justify-between space-y-4">
          <div>
            <div className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider border-b border-gray-200 pb-2 flex items-center gap-1.5">
              <HeartPulse className="w-4 h-4 text-[#8b0a1a]" /> حيوية الخلية الهدف (Viability)
            </div>

            <div className="mt-4 text-center p-6 bg-gray-50 rounded-2xl border border-gray-300">
              <div className={`text-5xl font-black ${
                targetViability > 50 ? 'text-emerald-700' : targetViability > 0 ? 'text-amber-600' : 'text-[#8b0a1a]'
              }`}>
                {targetViability}%
              </div>
              <div className="text-xs font-bold text-gray-700 mt-2">
                {targetViability === 100 && 'الخلية الهدف سليمة (مصابة بالفيروس)'}
                {targetViability > 0 && targetViability < 100 && 'التفكك والموت المبرمج قيد التنفيذ'}
                {targetViability === 0 && 'ماتت الخلية كلياً بالموت المبرمج النظيف ✓'}
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden mt-4 shadow-inner">
                <div
                  className={`h-full transition-all duration-500 rounded-full ${
                    targetViability > 50 ? 'bg-emerald-600' : targetViability > 0 ? 'bg-amber-500' : 'bg-[#8b0a1a]'
                  }`}
                  style={{ width: `${targetViability}%` }}
                />
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs text-gray-800">
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-semibold text-gray-600">ثقوب البيرفورين:</span>
                <span className="font-mono font-black text-[#8b0a1a]">
                  {killingMode === 'perforin' && stage >= 1 ? 'مفتوحة (15-20 نانومتر)' : 'غير مفعلة'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-semibold text-gray-600">تفعيل كاسباز-3:</span>
                <span className="font-mono font-black text-[#8b0a1a]">
                  {stage >= 2 ? 'نشط (مفعل)' : 'ساكن'}
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-gray-50 rounded-xl border border-gray-200">
                <span className="font-semibold text-gray-600">الخزان الفيروسي:</span>
                <span className="font-mono font-black text-[#8b0a1a]">
                  {targetViability === 0 ? 'تم القضاء عليه تماماً' : 'خطر قائم'}
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-red-50/70 rounded-2xl text-xs text-gray-800 border border-red-200 leading-relaxed font-bold">
            <span className="font-extrabold text-[#8b0a1a]">الميزة البيولوجية:</span> الموت المبرمج يمنع تسرب الفيروسات للسائل الخارجي، حيث تبتلع البلعميات الأجسام الموتية السليمة فوراً.
          </div>
        </div>
      </div>
    </div>
  );
};

export const MacrophageTh1LoopSimulator: React.FC<SimulatorLanguageProps> = ({ language = 'ar' }) => {
  const [ifnGammaLevel, setIfnGammaLevel] = useState<number>(3); // 1 to 5
  const [cd40lEngaged, setCd40lEngaged] = useState<boolean>(true);
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  // Computed outcomes
  const activationScore = (ifnGammaLevel * 15) + (cd40lEngaged ? 25 : 0);
  const microbicidalPower = Math.min(100, activationScore);
  const rosProduction = activationScore > 40 ? 'مرتفع (قاتل للجراثيم)' : 'منخفض / غير كافٍ';
  const noProduction = activationScore > 50 ? 'تحريض قوي لـ iNOS' : 'أصغري';
  const il12Feedback = activationScore > 60 ? 'قوي (يضاعف تمايز Th1)' : 'ضعيف';
  const b7Expression = activationScore > 50 ? 'تعبير عالي جداً (تعزيز الإشارة 2)' : 'أساسي';

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl space-y-6">
      <div className="border-b border-gray-300 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Bidirectional Feedback Loop | حلقة التغذية الراجعة
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              Slides 40–44 | أ.د. رنا حبيب
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            Th1 – Macrophage M1 Classical Activation & Positive Feedback Simulator
          </h2>
          <p className="text-sm text-gray-700 mt-1 max-w-2xl leading-relaxed">
            محاكاة كيفية تعاون إشارات IFN-γ وتلامس CD40:CD40L في تشغيل محارق أكسيد النتريك والجذور الحرة والقضاء على بكتيريا السل المحتبسة.
          </p>
        </div>

        {/* Simplify Concept Button */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => setSimplifyConcept(!simplifyConcept)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all shadow-sm ${
              simplifyConcept
                ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <Lightbulb className={`w-4 h-4 ${simplifyConcept ? 'text-slate-950 fill-slate-950' : 'text-amber-600'}`} />
            <span>{simplifyConcept ? 'وضع التبسيط مفعّل 💡' : 'تبسيط المفهوم 💡'}</span>
          </button>
        </div>
      </div>

      {/* Simplified Analogy Box */}
      {simplifyConcept && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-md text-slate-900 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-black text-amber-900 text-xs sm:text-sm">
            <Lightbulb className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>تشبيه الاتصال اللاسلكي والمواد الكيميائية الحارقة:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            عندما تبتلع البلعمية بكتيريا عنيدة مثل السل تفرز IL-12 كإشارة استغاثة، فتأتي خلية Th1 وتلتحم بـ CD40L وترش عليها غاز IFN-γ، ما يمنح البلعمية إذناً لتشغيل محارقها الكيميائية (أكسيد النتريك NO والجذور الحرة ROS) لإبادة البكتيريا بالكامل.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Controls */}
        <div className="p-6 bg-white border border-gray-300 rounded-3xl space-y-5 shadow-md">
          <h4 className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider border-b border-gray-200 pb-2">
            مدخلات التحفيز من الخلية المساعدة Th1:
          </h4>

          <div>
            <div className="flex items-center justify-between text-xs mb-1 font-bold">
              <span className="text-gray-800">مستوى إفراز IFN-γ:</span>
              <span className="font-mono text-[#8b0a1a] font-black">{ifnGammaLevel} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={ifnGammaLevel}
              onChange={(e) => setIfnGammaLevel(Number(e.target.value))}
              className="w-full accent-[#8b0a1a] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-bold">
              <span>أصغري (1)</span>
              <span>أعظمي (5)</span>
            </div>
          </div>

          <div className="pt-3 border-t border-gray-200">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-bold text-gray-800">تلامس CD40L – CD40:</span>
              <input
                type="checkbox"
                checked={cd40lEngaged}
                onChange={(e) => setCd40lEngaged(e.target.checked)}
                className="w-5 h-5 rounded text-[#8b0a1a] accent-[#8b0a1a] focus:ring-[#8b0a1a]"
              />
            </label>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed font-medium">
              إشارة تلامس غشائية مباشرة من ربيطة CD40L على Th1 لمستقبل CD40 على البلعمية.
            </p>
          </div>
        </div>

        {/* Macrophage Intracellular Killing Output */}
        <div className="p-6 bg-white border border-gray-300 rounded-3xl space-y-4 shadow-md">
          <h4 className="text-xs font-black text-gray-700 uppercase tracking-wider border-b border-gray-200 pb-2">
            محارق البلعمية القاتلة للجراثيم (M1):
          </h4>

          <div className="p-4 bg-gray-50 rounded-2xl border border-gray-300">
            <div className="text-xs font-bold text-gray-600">مؤشر القتل الميكروبي الكلي</div>
            <div className="text-3xl font-black text-[#8b0a1a] mt-1">{microbicidalPower}%</div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2 overflow-hidden shadow-inner">
              <div className="bg-[#8b0a1a] h-full transition-all rounded-full" style={{ width: `${microbicidalPower}%` }} />
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 flex justify-between">
              <span className="font-semibold text-gray-600">جذور الأكسجين الحرة (ROS):</span>
              <span className="font-bold text-gray-900">{rosProduction}</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 flex justify-between">
              <span className="font-semibold text-gray-600">أكسيد النتريك (NO / iNOS):</span>
              <span className="font-bold text-gray-900">{noProduction}</span>
            </div>
            <div className="p-2.5 bg-gray-50 rounded-xl border border-gray-200 flex justify-between">
              <span className="font-semibold text-gray-600">حالة الجرثومة داخل الحويصل:</span>
              <span className="font-black text-[#8b0a1a]">
                {microbicidalPower >= 70 ? 'تمت إبادتها بالكامل ✓' : microbicidalPower >= 40 ? 'تثبيط جزئي' : 'تتكاثر وتنجو'}
              </span>
            </div>
          </div>
        </div>

        {/* Reciprocal Positive Feedback Output */}
        <div className="p-6 bg-white border border-gray-300 rounded-3xl space-y-4 shadow-md">
          <h4 className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider border-b border-gray-200 pb-2">
            التغذية الراجعة الإيجابية للخلية التائية:
          </h4>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-xs font-bold text-gray-600">إفراز IL-12 من البلعمية:</div>
              <div className="font-black text-gray-900 mt-1">{il12Feedback}</div>
              <div className="text-xs text-[#8b0a1a] mt-1 font-bold">
                يعزز تمايز المزيد من خلايا Th1 ويحفز إفراز كميات إضافية من IFN-γ.
              </div>
            </div>

            <div className="p-3 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="text-xs font-bold text-gray-600">تعبير MHC-II و B7 المشترك:</div>
              <div className="font-black text-gray-900 mt-1">{b7Expression}</div>
              <div className="text-xs text-[#8b0a1a] mt-1 font-bold">
                يزيد من كفاءة عرض المستضد وتوفير الإشارة 2 للخلايا التائية.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
