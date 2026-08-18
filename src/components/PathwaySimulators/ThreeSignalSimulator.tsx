import React, { useState } from 'react';
import { Zap, ShieldCheck, AlertOctagon, Sparkles, Flame, Check, X, ShieldAlert, Cpu, Lightbulb } from 'lucide-react';

interface ThreeSignalSimulatorProps {
  language?: 'ar' | 'en' | 'bilingual';
}

export const ThreeSignalSimulator: React.FC<ThreeSignalSimulatorProps> = ({ language = 'ar' }) => {
  const [signal1Active, setSignal1Active] = useState<boolean>(true);
  const [signal2Active, setSignal2Active] = useState<boolean>(true);
  const [cytokineChoice, setCytokineChoice] = useState<'none' | 'IL-12' | 'IL-4' | 'IL-6_TGFb' | 'TGFb_only'>('IL-12');
  const [ctla4Blockade, setCtla4Blockade] = useState<boolean>(false);
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  // Compute Cellular Fate
  const isSignal2Effective = signal2Active && !ctla4Blockade;

  let cellularFateTitle = 'Resting / Naive T Cell | خلية تائية هاجعة';
  let cellularFateColor = 'text-gray-900 border-gray-300 bg-white';
  let fateDescription = 'The naive T lymphocyte remains in a quiescent resting state patrolling secondary lymphoid organs.';
  let fateDescriptionArabic = 'تبقى الخلية اللمفاوية التائية في حالة هجوع تجوب الأعضاء اللمفاوية المحيطية عبر الأوعية اللمفية الواردة.';
  let simplifiedSummaryEn = 'Car is parked in the garage with engine off (Quiescent state).';
  let simplifiedSummaryAr = 'السيارة مركونة في المرآب والمحرك مطفأ (حالة الهجوع).';
  let transcriptionFactors: string[] = [];
  let secretedMolecules: string[] = [];

  if (!signal1Active && !signal2Active) {
    cellularFateTitle = 'Quiescent Naive State (No Activation) | حالة السكون بدون تفعيل';
    cellularFateColor = 'text-gray-900 border-gray-300 bg-white';
    fateDescription = 'No TCR engagement. Cell circulates through lymph nodes scanning for cognate peptide-MHC.';
    fateDescriptionArabic = 'غياب الارتباط بين TCR و pMHC. الخلية تستمر بالدوران عبر الأوعية اللمفية للمسح المناعي.';
    simplifiedSummaryEn = 'No key inserted, no pedals pressed. T cell remains asleep and scanning.';
    simplifiedSummaryAr = 'لا مفتاح ولا دواسات. الخلية التائية نائمة وتواصل المسح الدوراني.';
  } else if (signal1Active && !isSignal2Effective) {
    cellularFateTitle = 'Anergy / Functional Tolerance (Unresponsiveness) | اللاتجاوب والتحمل المناعي (Anergy)';
    cellularFateColor = 'text-amber-900 border-amber-400 bg-amber-50';
    fateDescription = 'CRITICAL RULE (Slide 31): Signal 1 in the absence of costimulation (B7-CD28) induces anergy or apoptosis. The cell becomes refractory to future antigen exposures.';
    fateDescriptionArabic = 'قاعدة ذهبية (شريحة 31): الإشارة 1 بدون إشارة التحفيز المشترك 2 تؤدي فوراً للاتجاوب المناعي (Anergy) أو الموت الخلوي المبرمج، وتصبح الخلية عاجزة عن الاستجابة مستقبلاً.';
    simplifiedSummaryEn = 'Key turned without pressing the safety clutch! The engine stalls forever (Anergy / Tolerance) to prevent friendly fire against healthy body tissues.';
    simplifiedSummaryAr = 'أدرت المفتاح دون ضغط دواسة الأمان! يتعطل المحرك نهائياً وتدخل الخلية في غيبوبة مناعية (Anergy) لحماية أنسجة الجسم السليمة من الهجوم الخاطئ.';
    transcriptionFactors = ['NFAT (unbalanced, without AP-1)', 'GRAIL / Cbl-b E3 Ubiquitin Ligases'];
    secretedMolecules = ['No IL-2 produced', 'Anergic state locked'];
  } else if (!signal1Active && isSignal2Effective) {
    cellularFateTitle = 'Non-Specific Bystander (No Activation) | إشارة تحفيز منفردة دون مستضد';
    cellularFateColor = 'text-gray-900 border-gray-300 bg-white';
    fateDescription = 'Costimulation alone without TCR antigen recognition provides survival signals but cannot initiate proliferation.';
    fateDescriptionArabic = 'التحفيز المشترك بمفرده دون التعرف على المستضد المحدد يوفر إشارات بقاء ولكنه عاجز عن إطلاق الانقسام والتفعيل.';
    simplifiedSummaryEn = 'Pressing the clutch without putting the key in the ignition does nothing.';
    simplifiedSummaryAr = 'ضغط دواسة الأمان وحدها دون وضع المفتاح في الكونتاكت لا يشغل المحرك.';
  } else if (signal1Active && isSignal2Effective) {
    // Full Activation! Signal 3 decides lineage
    if (cytokineChoice === 'none') {
      cellularFateTitle = 'Proliferating Effector Blast (Unpolarized) | خلايا متكاثرة غير متمايزة';
      cellularFateColor = 'text-blue-900 border-blue-300 bg-blue-50';
      fateDescription = 'T cell completes Signal 1 + Signal 2, initiates autocrine IL-2 loop and expands clonally, but lacks distinct polarizing cues.';
      fateDescriptionArabic = 'تكتمل الإشارتان 1 و 2 وتفرز الخلية IL-2 لتفعيل نموها الذاتي دون التمايز لنمط محدد.';
      simplifiedSummaryEn = 'Car engine is roaring and driving fast (massive clonal growth with IL-2), but GPS direction is not yet set.',
      simplifiedSummaryAr = 'المحرك يعمل بأقصى طاقة وانطلقت السيارة بقوة (تكاثر نسيلي سريع بـ IL-2) ولكن لم تحدد وجهة الـ GPS بعد.',
      transcriptionFactors = ['NF-κB', 'AP-1 (c-Jun/c-Fos)', 'NFAT', 'Bcl-xL (survival)'];
      secretedMolecules = ['IL-2 (Autocrine Growth)', 'IL-2Rα (CD25 High Affinity)'];
    } else if (cytokineChoice === 'IL-12') {
      cellularFateTitle = 'Th1 Effector Lymphocyte (Cell-Mediated Immunity) | خلايا Th1 للمناعة الخلوية';
      cellularFateColor = 'text-[#8b0a1a] border-red-300 bg-red-50';
      fateDescription = 'IL-12 and IFN-γ activate STAT4 and STAT1, inducing master regulator T-bet. Th1 specializes in M1 macrophage activation and intracellular pathogen defense.';
      fateDescriptionArabic = 'يفعل IL-12 و IFN-γ بروتينات STAT4 و STAT1 لتشغيل العامل الرائد T-bet، وتتخصص Th1 في تنشيط البلاعم M1 والقضاء على الجراثيم داخل الخلوية.';
      simplifiedSummaryEn = 'GPS set to "Intracellular War": IL-12 programs T-bet to make Th1, commanding macrophages to blast bacteria with bleach and nitric acid.',
      simplifiedSummaryAr = 'وجهة الـ GPS: "حرب داخل خلوية". برمج سيتوكين IL-12 الخلية لتصبح Th1 وتأمر البلعميات بتطهير الجراثيم المحتبسة بمواد حارقة.',
      transcriptionFactors = ['T-bet (Master TF)', 'STAT4', 'STAT1', 'NF-κB', 'AP-1'];
      secretedMolecules = ['Interferon-γ (IFN-γ)', 'IL-2', 'TNF-α', 'CD40 Ligand'];
    } else if (cytokineChoice === 'IL-4') {
      cellularFateTitle = 'Th2 Effector Lymphocyte (Humoral / Anti-Helminth) | خلايا Th2 للطفيليات والحساسية';
      cellularFateColor = 'text-pink-900 border-pink-300 bg-pink-50';
      fateDescription = 'IL-4 activates STAT6, driving master regulator GATA-3. Th2 directs B-cell class switching to IgE/IgG, activates eosinophils, and counters parasites.';
      fateDescriptionArabic = 'يفعل IL-4 مسار STAT6 الذي يحرض العامل الرائد GATA-3 لتوجيه الخلايا البائية لإنتاج IgE وتنشيط الحمضات ضد الديدان.';
      simplifiedSummaryEn = 'GPS set to "Parasite & Allergy": IL-4 programs GATA-3 to make Th2, recruiting eosinophils and IgE antibodies against worms.',
      simplifiedSummaryAr = 'وجهة الـ GPS: "طفيليات وحساسية". برمج سيتوكين IL-4 الخلية لتصنع Th2 وتحفز أضداد IgE والحمضات لطرد الديدان.',
      transcriptionFactors = ['GATA-3 (Master TF)', 'STAT6', 'NFAT', 'AP-1'];
      secretedMolecules = ['Interleukin-4 (IL-4)', 'Interleukin-5 (IL-5)', 'Interleukin-13 (IL-13)'];
    } else if (cytokineChoice === 'IL-6_TGFb') {
      cellularFateTitle = 'Th17 Effector Lymphocyte (Mucosal / Neutrophilic) | خلايا Th17 للدفاع المخاطي';
      cellularFateColor = 'text-emerald-900 border-emerald-300 bg-emerald-50';
      fateDescription = 'IL-1, IL-6, IL-23, and TGF-β activate STAT3, inducing master regulator RORγt. Th17 recruits neutrophils for barrier defense against extracellular bacteria & fungi.';
      fateDescriptionArabic = 'تحرض سيتوكينات IL-6 و TGF-β و IL-23 العامل الرائد RORγt عبر STAT3، وتجذب Th17 العدلات لحماية الأغشية المخاطية ضد الفطريات والبكتيريا.';
      simplifiedSummaryEn = 'GPS set to "Mucosal Border Defense": IL-6 + TGF-β program RORγt to make Th17, summoning massive neutrophil armies to mucosal surfaces.',
      simplifiedSummaryAr = 'وجهة الـ GPS: "حراسة الحدود المخاطية". برمجت السيتوكينات جين RORγt لتصنع Th17 وتستدعي جيوش العدلات للدفاع ضد الفطريات.',
      transcriptionFactors = ['RORγt (Master TF)', 'STAT3', 'NF-κB'];
      secretedMolecules = ['Interleukin-17 (IL-17A, IL-17F)', 'Interleukin-22 (IL-22)'];
    } else if (cytokineChoice === 'TGFb_only') {
      cellularFateTitle = 'iTreg Induced Regulatory T Cell (Immunosuppressive) | خلايا Treg المثبطة للمناعة';
      cellularFateColor = 'text-teal-900 border-teal-300 bg-teal-50';
      fateDescription = 'TGF-β in the absence of pro-inflammatory cytokines drives FoxP3, creating immunosuppressive regulatory T cells that shut down auto-reactive responses.';
      fateDescriptionArabic = 'يحرض TGF-β بغياب السيتوكينات الالتهابية العامل FoxP3 لصنع خلايا كابحة مثبطة للاستجابة المناعية وضابطة للتحمل الذاتي.';
      simplifiedSummaryEn = 'GPS set to "Peacekeeping Police": TGF-β programs FoxP3 to make Treg, shutting down inflammation and maintaining tolerance.',
      simplifiedSummaryAr = 'وجهة الـ GPS: "قوات حفظ السلام". يبرمج TGF-β جين FoxP3 لصنع خلايا Treg الكابحة لإخماد الالتهاب وحماية الجسم.',
      transcriptionFactors = ['FoxP3 (Master TF)', 'SMAD2/3', 'STAT5'];
      secretedMolecules = ['TGF-β', 'IL-10', 'CTLA-4 High Expression'];
    }
  }

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl space-y-6">
      {/* Header with Simplify Toggle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Interactive Activation Switchboard | محاكي الإشارات الثلاث
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              Slides 33–36 | أ.د. رنا حبيب
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            The 3-Signal T Cell Activation & Polarization Engine
          </h2>
          <p className="text-sm text-gray-700 mt-1 max-w-2xl leading-relaxed">
            تحكم بالإشارة 1 (التعرف على المستضد) والإشارة 2 (التحفيز المشترك B7:CD28) والإشارة 3 (سيتوكينات التوجيه) لاختبار مصير الخلية التائية والجينات القائدة.
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

      {/* Simplified Analogy Helper Bar */}
      {simplifyConcept && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-md text-slate-900 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-black text-amber-900 text-xs sm:text-sm">
            <Lightbulb className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>تشبيه تشغيل السيارة الثلاثي:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-amber-200">
              <b className="text-[#8b0a1a] block mb-1">الإشارة 1 (المفتاح):</b>
              <span>التعرف الدقيق على المستضد بواسطة TCR. (لو أدرت المفتاح وحده دون الإشارة 2 يتعطل المحرك للأبد Anergy).</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200">
              <b className="text-emerald-800 block mb-1">الإشارة 2 (دواسة الأمان):</b>
              <span>ارتباط B7 على APC مع CD28 على التائية. يؤكد أن الخطر حقيقي ويطلق إنتاج IL-2 للانقسام والتكاثر.</span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-amber-200">
              <b className="text-blue-900 block mb-1">الإشارة 3 (ملاحة الـ GPS):</b>
              <span>السيتوكينات الموجهة تحدد تخصص الخلية: Th1 (للجراثيم داخل الخلوية)، Th2 (للطفيليات)، Th17 (للفطريات).</span>
            </div>
          </div>
        </div>
      )}

      {/* Control Switchboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Signal 1 Card */}
        <div className={`p-5 rounded-3xl border transition-all shadow-md ${
          signal1Active ? 'bg-white border-[#8b0a1a] ring-2 ring-[#8b0a1a]/20' : 'bg-gray-100 border-gray-300'
        }`}>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-[#8b0a1a] flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-[#8b0a1a]" /> الإشارة 1 (Signal 1)
            </span>
            <button
              onClick={() => setSignal1Active(!signal1Active)}
              className={`px-3 py-1 text-xs font-bold rounded-xl transition-all shadow-sm ${
                signal1Active ? 'bg-[#8b0a1a] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {signal1Active ? 'متصلة (Engaged)' : 'مفصولة (Off)'}
            </button>
          </div>
          <h4 className="font-black text-gray-900 mt-3 text-sm">التعرف على المستضد (TCR : pMHC)</h4>
          <p className="text-xs text-gray-700 mt-1 leading-relaxed">
            يرتبط مستقبل TCR بالببتيد المتوضع على معقد MHC، وتطلق سلاسل CD3 شلال الفسفرة لـ ITAMs.
          </p>
          <div className="mt-3 text-xs font-bold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-200">
            الحالة: {signal1Active ? '✅ ارتبط المستضد المحدد' : '❌ لا يوجد تطابق'}
          </div>
        </div>

        {/* Signal 2 Card */}
        <div className={`p-5 rounded-3xl border transition-all shadow-md ${
          isSignal2Effective ? 'bg-white border-emerald-600 ring-2 ring-emerald-600/20' : 'bg-gray-100 border-gray-300'
        }`}>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> الإشارة 2 (Signal 2)
            </span>
            <button
              onClick={() => setSignal2Active(!signal2Active)}
              className={`px-3 py-1 text-xs font-bold rounded-xl transition-all shadow-sm ${
                signal2Active ? 'bg-emerald-700 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {signal2Active ? 'B7 موجود' : 'بدون B7'}
            </button>
          </div>
          <h4 className="font-black text-gray-900 mt-3 text-sm">التحفيز المشترك (B7-1/2 : CD28)</h4>
          <p className="text-xs text-gray-700 mt-1 leading-relaxed">
            يرتبط B7 (CD80/CD86) على APC مع CD28 على التائية، ما يثبت رنا السيتوكين IL-2 ويمنع الخمول والتحمل الذاتي.
          </p>
          <div className="mt-3 flex items-center justify-between pt-2 border-t border-gray-200">
            <label className="flex items-center gap-2 text-xs font-bold text-gray-800 cursor-pointer">
              <input
                type="checkbox"
                checked={ctla4Blockade}
                onChange={(e) => setCtla4Blockade(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[#8b0a1a] accent-[#8b0a1a] focus:ring-[#8b0a1a]"
              />
              <span>تثبيط عبر CTLA-4 / PD-1</span>
            </label>
          </div>
        </div>

        {/* Signal 3 Card */}
        <div className="p-5 rounded-3xl border border-gray-300 bg-white shadow-md">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2.5">
            <span className="text-xs font-black uppercase tracking-wider text-[#8b0a1a] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> الإشارة 3 (Signal 3)
            </span>
            <span className="text-[11px] text-gray-600 font-mono font-bold">سيتوكينات التمايز</span>
          </div>
          <h4 className="font-black text-gray-900 mt-3 text-sm">خلطة السيتوكينات الموجهة</h4>
          <div className="mt-2.5 space-y-1.5">
            <button
              onClick={() => setCytokineChoice('IL-12')}
              className={`w-full py-1.5 px-2.5 text-xs font-bold text-start rounded-xl border transition-all shadow-sm ${
                cytokineChoice === 'IL-12' ? 'bg-[#8b0a1a] text-white border-[#8b0a1a]' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              IL-12 + IFN-γ (تمايز Th1 / تنشيط البلعميات)
            </button>
            <button
              onClick={() => setCytokineChoice('IL-4')}
              className={`w-full py-1.5 px-2.5 text-xs font-bold text-start rounded-xl border transition-all shadow-sm ${
                cytokineChoice === 'IL-4' ? 'bg-[#8b0a1a] text-white border-[#8b0a1a]' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              IL-4 (تمايز Th2 / أضداد IgE والحمضات)
            </button>
            <button
              onClick={() => setCytokineChoice('IL-6_TGFb')}
              className={`w-full py-1.5 px-2.5 text-xs font-bold text-start rounded-xl border transition-all shadow-sm ${
                cytokineChoice === 'IL-6_TGFb' ? 'bg-[#8b0a1a] text-white border-[#8b0a1a]' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              IL-6 + TGF-β + IL-23 (تمايز Th17 / العدلات)
            </button>
            <button
              onClick={() => setCytokineChoice('none')}
              className={`w-full py-1.5 px-2.5 text-xs font-bold text-start rounded-xl border transition-all shadow-sm ${
                cytokineChoice === 'none' ? 'bg-[#8b0a1a] text-white border-[#8b0a1a]' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              بدون سيتوكين مخصص (تضاعف IL-2 فقط)
            </button>
          </div>
        </div>
      </div>

      {/* Cellular Outcome Dashboard */}
      <div className={`p-6 sm:p-8 rounded-3xl border ${cellularFateColor} transition-all shadow-lg space-y-4`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-gray-200 pb-4">
          <div>
            <div className="text-xs font-black uppercase tracking-wider text-[#8b0a1a]">
              نتيجة المحاكاة الحية لمصير الخلية التائية:
            </div>
            <h3 className="text-xl sm:text-2xl font-black mt-1 text-gray-900">{cellularFateTitle}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold border ${
              signal1Active && isSignal2Effective ? 'bg-emerald-100 border-emerald-400 text-emerald-800' : 'bg-amber-100 border-amber-400 text-amber-900'
            }`}>
              {signal1Active && isSignal2Effective ? 'تفعيل مثمر (Productive)' : 'غير مثمر / خمول (Tolerant)'}
            </span>
          </div>
        </div>

        {/* Simplified Outcome Highlight */}
        {simplifyConcept && (
          <div className="p-3.5 bg-white/90 rounded-2xl border border-amber-300 space-y-1">
            <span className="text-[11px] font-black text-amber-900 flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              الخلاصة المبسطة للنتيجة:
            </span>
            <p className="text-xs font-black text-[#8b0a1a]">{simplifiedSummaryAr}</p>
            <p className="text-[11px] text-gray-700" dir="ltr">{simplifiedSummaryEn}</p>
          </div>
        )}

        <p className="text-sm leading-relaxed text-gray-800 font-bold" dir="rtl">
          {fateDescriptionArabic}
        </p>
        <p className="text-xs leading-relaxed text-gray-600" dir="ltr">
          {fateDescription}
        </p>

        {/* Molecular Readouts */}
        {transcriptionFactors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-white rounded-2xl border border-gray-300 shadow-sm">
              <div className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#8b0a1a]" /> عوامل النسخ الجينية المفعلة (Master TFs)
              </div>
              <ul className="space-y-1.5 text-xs text-gray-800">
                {transcriptionFactors.map((tf, i) => (
                  <li key={i} className="flex items-center gap-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#8b0a1a]" />
                    <span>{tf}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-gray-300 shadow-sm">
              <div className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#8b0a1a]" /> السيتوكينات الفعالة المفرزة
              </div>
              <ul className="space-y-1.5 text-xs text-gray-800">
                {secretedMolecules.map((sec, i) => (
                  <li key={i} className="flex items-center gap-2 font-bold">
                    <span className="w-2 h-2 rounded-full bg-[#8b0a1a]" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
