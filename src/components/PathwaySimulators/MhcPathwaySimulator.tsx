import React, { useState } from 'react';
import { Play, RotateCcw, ShieldAlert, CheckCircle2, Info, ArrowRight, Dna, Activity, Zap, Lightbulb, Sparkles } from 'lucide-react';

interface MhcPathwaySimulatorProps {
  language?: 'ar' | 'en' | 'bilingual';
}

export const MhcPathwaySimulator: React.FC<MhcPathwaySimulatorProps> = ({ language = 'ar' }) => {
  const [pathway, setPathway] = useState<'class1' | 'class2'>('class1');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [activeInhibitor, setActiveInhibitor] = useState<string | null>(null);
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  const class1Steps = [
    {
      title: '1. Cytosolic Protein Synthesis / Ubiquitination | تخليق البروتين ووسمه باليوبيكويتين',
      compartment: 'Host Cell Cytosol | هيولى الخلية',
      description: 'Microbial or viral protein is synthesized in the cytoplasm of a nucleated cell, or endogenous abnormal protein is tagged with ubiquitin chains.',
      descriptionArabic: 'يتم تخليق البروتين الفيروسي/الجرثومي في هيولى الخلية المنواة، أو وسم البروتين الشاذ بسلاسل اليوبيكويتين للتحلل.',
      simplifiedEn: 'The cell flags internal virus/cancer proteins with a "recycle tag" (Ubiquitin).',
      simplifiedAr: 'تقوم الخلية بوضع وسم "سلة المهملات" على البروتينات الفيروسية أو السرطانية داخل الخلية.',
      molecularActor: 'Viral Antigen / Polyubiquitin',
      blockedBy: 'None'
    },
    {
      title: '2. Proteasomal Proteolysis (26S / Immunoproteasome) | التحلل البروتيني بالبروتيازوم',
      compartment: 'Proteasome (20S/26S Complex)',
      description: 'The cylindrical proteasome catalytic core degrades cytosolic proteins into short peptide fragments (8–11 amino acids in length).',
      descriptionArabic: 'يقوم المعقد الأنزيمي للبروتيازوم بتفكيك البروتينات الهيولية إلى ببتيدات قصيرة بطول 8 إلى 11 حمضاً أمينياً.',
      simplifiedEn: 'The proteasome is like a paper shredder cutting proteins into exact 8–11 unit pieces.',
      simplifiedAr: 'البروتيازوم يعمل كمفرمة ورق تقطع البروتين إلى قطع دقيقة بطول 8 إلى 11 وحدة تناسب الشِق.',
      molecularActor: 'Proteasome Catalytic Subunits (LMP2/LMP7)',
      blockedBy: 'Bortezomib / Proteasome Inhibitor'
    },
    {
      title: '3. TAP Translocation to Endoplasmic Reticulum | النقل إلى الشبكة الإندوبلازمية عبر TAP',
      compartment: 'ER Membrane (TAP1 / TAP2 Transporter)',
      description: 'Peptide fragments are pumped actively across the ER membrane by the TAP heterodimer into the ER lumen via ATP hydrolysis.',
      descriptionArabic: 'تُنقل الببتيدات فعالاً عبر غشاء الشبكة الباطنة بواسطة مضخة TAP1/TAP2 المستهلكة لـ ATP إلى لمعة الشبكة.',
      simplifiedEn: 'TAP acts as an ATP elevator pumping peptide snippets into the packaging room (ER).',
      simplifiedAr: 'ناقل TAP هو مصعد يضخ قطع الببتيدات باستهلاك الطاقة إلى غرفة التجهيز (الشبكة الباطنة).',
      molecularActor: 'TAP1 & TAP2 Heterodimer',
      blockedBy: 'Bare Lymphocyte Syndrome Type I (TAP Mutation) / Viral ICP47'
    },
    {
      title: '4. ER Assembly & Peptide Loading Complex (PLC) | تركيب المعقد وتحميل الببتيد',
      compartment: 'Endoplasmic Reticulum Lumen',
      description: 'Newly synthesized MHC Class I α chain associates with β2-microglobulin, stabilized by Calreticulin, Tapasin, and ERp57. Peptide binds stably into the closed α1-α2 groove.',
      descriptionArabic: 'ترتبط السلسلة الثقيلة α مع β2-microglobulin بمساعدة المرافقات (Tapasin, Calreticulin)، ويستقر الببتيد في الثلم المغلق α1-α2.',
      simplifiedEn: 'Helpers (Tapasin) hold the MHC-I plate open until the right peptide clicks snugly in place.',
      simplifiedAr: 'يقوم المساعد (تاباسين) بحمل لوحة MHC-I مفتوحة حتى يستقر الببتيد المناسب تماماً.',
      molecularActor: 'MHC-I (α1, α2, α3 + β2m) + Tapasin Complex',
      blockedBy: 'β2-Microglobulin Deficiency'
    },
    {
      title: '5. Secretory Transport via Golgi Apparatus | النقل الإفرازي عبر جهاز غولجي',
      compartment: 'Golgi Complex & Secretory Vesicles',
      description: 'The stable peptide:MHC-I complex is packaged into transport vesicles, processed through the Golgi cisternae, and routed to the plasma membrane.',
      descriptionArabic: 'يُحزم المعقد المستقر في حويصلات إفرازية تمر عبر صهاريج غولجي وتتجه نحو الغشاء البلازمي للخلية.',
      simplifiedEn: 'The loaded badge is boxed in Golgi vesicles and shipped directly to the outer cell surface.',
      simplifiedAr: 'يُحزم المعقد المحمل بالببتيد في فقاعات غولجي للشحن السريع نحو الغشاء الخارجي.',
      molecularActor: 'Secretory Vesicles',
      blockedBy: 'Brefeldin A'
    },
    {
      title: '6. Surface Presentation to CD8+ Cytotoxic T Cells | العرض السطحي للخلايا التائية السمية CD8+',
      compartment: 'Plasma Membrane (Immunological Synapse)',
      description: 'The peptide-MHC Class I complex is displayed on the surface of any nucleated cell. CD8+ CTL recognizes the peptide via TCR and binds the α3 domain via CD8 co-receptor.',
      descriptionArabic: 'يُعرض المعقد على سطح الخلية المنواة ليتعرف عليه مستقبل TCR للخلية CD8+ CTL مع ارتباط المساعد CD8 بنطاق α3 غير المتبدل.',
      simplifiedEn: 'Security guard inspection: CD8+ Killer T cell checks the badge; if foreign, it initiates targeted lethal strike.',
      simplifiedAr: 'فحص الحارس المناعي: تفحص خلايا CD8+ القاتلة الشارة؛ وإذا كانت أجنبية تطلق الضربة القاتلة.',
      molecularActor: 'TCR + CD8 Co-receptor on CTL',
      blockedBy: 'None'
    }
  ];

  const class2Steps = [
    {
      title: '1. Extracellular Antigen Uptake (Endocytosis) | التقاط المستضد الخارجي بالبلعمة',
      compartment: 'Extracellular Space -> Early Endosome',
      description: 'Professional APC (Dendritic Cell, Macrophage, B Cell) internalizes extracellular microbes or soluble proteins via phagocytosis, macropinocytosis, or BCR endocytosis.',
      descriptionArabic: 'تلتقط الخلية العارضة المحترفة (شجيرية، بلعمية، بائية) الميكروب الخارجي عبر البلعمة أو الإدخال الخلوي.',
      simplifiedEn: 'Professional scout cells engulf outside microbes from the tissue fluid into digestion bubbles.',
      simplifiedAr: 'تبتلع الخلايا العارضة المحترفة الجراثيم من السائل النسيجي الخارجي داخل حويصلات هضم.',
      molecularActor: 'Endosome / Phagosome',
      blockedBy: 'Cytochalasin (Actin disruption)'
    },
    {
      title: '2. Endosomal Acidification & Proteolysis | حموضة الحويصل والتحلل الإنزيمي',
      compartment: 'Late Endosome / Lysosome (Acidic pH)',
      description: 'Endosomes acidify via proton ATPase pumps; acid-dependent Cathepsins degrade antigens into longer peptides (10–30 amino acids).',
      descriptionArabic: 'تنخفض حموضة الحويصل عبر مضخات البروتون، وتفعّل إنزيمات الكاثيبسين لهضم المستضد إلى ببتيدات بطول 10 إلى 30 حمضاً.',
      simplifiedEn: 'Acid pumps turn on digestive enzymes (Cathepsins) to dissolve bacteria into 10–30 AA fragments.',
      simplifiedAr: 'مضخات الحمض تشغل إنزيمات الهضم (الكاثيبسين) لتفكيك البكتيريا إلى قطع أطول (10-30 حمضاً).',
      molecularActor: 'Lysosomal Cathepsins (B, D, L, S)',
      blockedBy: 'Chloroquine / Ammonium Chloride'
    },
    {
      title: '3. MHC-II Synthesis with Invariant Chain (Ii) in ER | تركيب السلسلة الثابتة Ii',
      compartment: 'Endoplasmic Reticulum Lumen',
      description: 'MHC Class II α and β chains are synthesized and assembled with the Invariant Chain (Ii / CD74), which physically blocks endogenous peptide binding in the ER.',
      descriptionArabic: 'تُصنع سلاسل α و β لـ MHC-II وترتبط بالسلسلة الثابتة Ii (CD74) التي تسد الثلم وتمنع ارتباط أي ببتيدات داخلية بالشبكة.',
      simplifiedEn: 'A safety cap (Invariant chain) plugs the MHC-II groove in ER so internal proteins cannot hijack it.',
      simplifiedAr: 'سدادة أمان (السلسلة الثابتة Ii) تقفل ثلم MHC-II في الشبكة حتى لا يرتبط ببروتينات الخلية الذاتية.',
      molecularActor: 'MHC-II Heterodimer + Invariant Chain (CD74)',
      blockedBy: 'Bare Lymphocyte Syndrome Type II (CIITA mutation)'
    },
    {
      title: '4. Fusion with MIIC & Digestion of Ii to CLIP | هضم السلسلة الثابتة وبقاء CLIP',
      compartment: 'MIIC Vesicle (MHC Class II Compartment)',
      description: 'MHC-II:Ii vesicles fuse with endosomes. Cathepsin degrades the invariant chain, leaving only the short CLIP peptide occupying the binding cleft.',
      descriptionArabic: 'تندمج حويصلات MHC-II مع الجسيم الداخلي، وتهضم الإنزيمات السلسلة Ii ليبقى منها فقط الببتيد القصير CLIP ساداً للثلم.',
      simplifiedEn: 'Digestive enzymes cut the safety cap down to a small pin (CLIP) still stuck in the groove.',
      simplifiedAr: 'تقص الإنزيمات سدادة الأمان ليبقى دبوس صغير فقط (CLIP) ساداً للثلم.',
      molecularActor: 'CLIP Peptide + Cathepsin S',
      blockedBy: 'Leupeptin / Protease Inhibitors'
    },
    {
      title: '5. HLA-DM Mediated Peptide Exchange | تحفيز تبديل الببتيد عبر HLA-DM',
      compartment: 'MIIC Late Endosome',
      description: 'Non-classical MHC molecule HLA-DM acts as a catalyst: it dislodges CLIP from the binding groove and facilitates the stable binding of high-affinity microbial peptides.',
      descriptionArabic: 'يعمل جزيء HLA-DM كعامل وسيط محفز لإزاحة CLIP من الثلم وتحميل الببتيد الميكروبي الأجنبي ذو الألفة العالية.',
      simplifiedEn: 'Helper tool HLA-DM pulls out the CLIP pin, allowing the bacterial peptide to bind permanently.',
      simplifiedAr: 'يقوم الجزيء المساعد HLA-DM بخلع دبوس CLIP ليركب مكانه ببتيد البكتيريا الخارجي بقوة.',
      molecularActor: 'HLA-DM Chaperone',
      blockedBy: 'HLA-DM Deficiency'
    },
    {
      title: '6. Surface Presentation to CD4+ Helper T Cells | العرض السطحي للخلايا المساعدة CD4+',
      compartment: 'APC Plasma Membrane',
      description: 'Stable peptide:MHC Class II is delivered to the APC surface. CD4+ Helper T cells recognize the peptide via TCR and bind the non-polymorphic β2 domain via CD4.',
      descriptionArabic: 'يُعرض المعقد على سطح الخلية العارضة APC ليتعرف عليه مستقبل TCR للخلية CD4+ Th مع ربط CD4 بنطاق β2 غير المتبدل.',
      simplifiedEn: 'Flag waving: APC shows the bacterial flag to CD4+ Helper T cells to rally antibodies or macrophage help.',
      simplifiedAr: 'رفع الراية: تعرض الخلية الببتيد لخلايا CD4+ المساعدة لتنشيط الأضداد أو شحن البلعميات.',
      molecularActor: 'TCR + CD4 Co-receptor on Helper T Cell',
      blockedBy: 'None'
    }
  ];

  const steps = pathway === 'class1' ? class1Steps : class2Steps;

  const handleInhibitorToggle = (name: string) => {
    if (activeInhibitor === name) {
      setActiveInhibitor(null);
    } else {
      setActiveInhibitor(name);
    }
  };

  const isBlocked = activeInhibitor !== null && steps[currentStep].blockedBy.includes(activeInhibitor);

  return (
    <div className="space-y-6">
      {/* Top Banner with Dr. Rana Habib Theme & Simplify Concept Button */}
      <div className="bg-[#f2f2f2] border-t-4 border-[#8b0a1a] rounded-3xl p-6 sm:p-8 border border-gray-300 shadow-xl relative overflow-hidden text-gray-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#8b0a1a] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                MHC Processing Engine | Slides 21-30
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gray-200 text-gray-700 text-xs font-mono font-bold">
                Endogenous vs Exogenous Pathways
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a]">
              محاكي مسارات معالجة وعرض معقد التوافق النسيجي (MHC I & MHC II)
            </h2>
            <p className="text-sm text-gray-700 mt-2 max-w-3xl leading-relaxed">
              تتبع حركة الببتيدات والمرافقات الجزيئية خطوة بخطوة، واختبر تأثير الطفرات والمثبطات الدوائية مع خيار تبسيط المفهوم بأسلوب التشبيهات الميسرة.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto">
            {/* Simplify Concept Toggle Button */}
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

        {/* Pathway Tabs */}
        <div className="flex items-center gap-2 mt-6 border-b border-gray-300 pb-3">
          <button
            onClick={() => {
              setPathway('class1');
              setCurrentStep(0);
              setActiveInhibitor(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
              pathway === 'class1'
                ? 'bg-[#8b0a1a] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            مسار MHC Class I (الداخلي ➔ CD8+ CTL)
          </button>
          <button
            onClick={() => {
              setPathway('class2');
              setCurrentStep(0);
              setActiveInhibitor(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
              pathway === 'class2'
                ? 'bg-[#8b0a1a] text-white shadow-md'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            مسار MHC Class II (الخارجي ➔ CD4+ Helper)
          </button>
        </div>
      </div>

      {/* Simplified Concept Explanation Card */}
      {simplifyConcept && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 shadow-md text-slate-900 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-black text-amber-900 text-sm">
            <Lightbulb className="w-5 h-5 text-amber-600 fill-amber-500" />
            <span>
              {pathway === 'class1'
                ? 'التشبيه المبسط لمسار MHC-I: آلة التقطيع وبطاقة الهوية الداخلية'
                : 'التشبيه المبسط لمسار MHC-II: دورية النظافة ودبوس الأمان'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            {pathway === 'class1'
              ? 'تخيل أن الخلية تصنع بطاقة هوية داخلية (MHC-I) لتعرضها على جدارها الخارجي. إذا أصيبت بفيروس، تفرم آلة التقطيع (Proteasome) البروتين لقطع صغيرة، وينقله المصعد (TAP) إلى غرفة التجهيز (الشبكة الباطنة) ليركب على شارة الهوية وتفحصه شرطة المناعة (CD8+ CTL).'
              : 'الخلايا العارضة تبتلع النفايات الخارجية وتهضمها في أكياس حامضية (Endosomes). في الشبكة الباطنة يُصنع معقد MHC-II ومعه دبوس أمان (CLIP) يسد الشِق حتى لا يلتقط بروتينات ذاتية. ثم يقوم المساعد HLA-DM بخلع الدبوس وتركيب ببتيد الجرثومة لعرضه على قادة الجيش (CD4+ Helper T).'}
          </p>
        </div>
      )}

      {/* Interactive Flow Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Step Interactive Stage */}
        <div className="lg:col-span-8 bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 shadow-xl space-y-5 text-gray-900 flex flex-col justify-between">
          <div>
            {/* Step Header */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-[#8b0a1a] text-white font-black text-sm flex items-center justify-center shadow-md">
                  {currentStep + 1}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#8b0a1a]">
                    {steps[currentStep].title}
                  </h3>
                  <span className="text-xs text-gray-600 font-bold">
                    الحيز الخلوي: {steps[currentStep].compartment}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-black bg-white px-3 py-1 rounded-full border border-gray-300">
                {currentStep + 1} / {steps.length}
              </span>
            </div>

            {/* Step Body */}
            <div className="bg-white border border-gray-300 rounded-2xl p-5 shadow-sm space-y-4">
              <div className="space-y-2">
                <h4 className="text-xs font-black uppercase text-[#8b0a1a]">الوصف العلمي التفصيلي:</h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-bold">
                  {steps[currentStep].descriptionArabic}
                </p>
                <p className="text-xs text-gray-600 leading-relaxed" dir="ltr">
                  {steps[currentStep].description}
                </p>
              </div>

              {/* Simplified View Box */}
              {simplifyConcept && (
                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                  <span className="text-[11px] font-black text-amber-900 flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    الشرح المبسط:
                  </span>
                  <p className="text-xs font-bold text-slate-900">{steps[currentStep].simplifiedAr}</p>
                  <p className="text-[11px] text-slate-700" dir="ltr">{steps[currentStep].simplifiedEn}</p>
                </div>
              )}

              {/* Molecular Actor */}
              <div className="pt-2 border-t border-gray-200 flex items-center justify-between text-xs">
                <span className="font-bold text-gray-600">العامل الجزيئي الفعال:</span>
                <span className="font-black text-[#8b0a1a] bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                  {steps[currentStep].molecularActor}
                </span>
              </div>
            </div>

            {/* Blocked State Warning */}
            {isBlocked && (
              <div className="mt-3 p-4 bg-red-100 border-2 border-red-400 rounded-2xl text-red-900 text-xs font-black flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-red-700 shrink-0" />
                <span>
                  تم حظر هذا المسار بواسطة ({activeInhibitor})! لن تتمكن الخلية من إكمال العرض المناعي.
                </span>
              </div>
            )}
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="pt-4 border-t border-gray-300 flex items-center justify-between">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 rounded-xl bg-white border border-gray-300 text-xs font-black text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              الخطوة السابقة
            </button>

            <button
              onClick={() => {
                setCurrentStep(0);
                setActiveInhibitor(null);
              }}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-300 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>إعادة التشغيل</span>
            </button>

            <button
              onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={currentStep === steps.length - 1}
              className="px-4 py-2 rounded-xl bg-[#8b0a1a] text-xs font-black text-white hover:bg-[#700714] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md"
            >
              الخطوة التالية
            </button>
          </div>
        </div>

        {/* Right: Steps Map & Inhibitor Switchboard */}
        <div className="lg:col-span-4 space-y-4">
          {/* Steps Quick Selector */}
          <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-5 shadow-xl space-y-2 text-gray-900">
            <h4 className="text-xs font-black uppercase text-[#8b0a1a] border-b border-gray-300 pb-2">
              خريطة خطوات المسار (6 خطوات):
            </h4>
            <div className="space-y-1.5">
              {steps.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentStep(idx)}
                  className={`w-full p-2.5 rounded-xl border text-start text-xs transition-all flex items-center justify-between ${
                    currentStep === idx
                      ? 'bg-[#8b0a1a] text-white font-black shadow-md'
                      : idx < currentStep
                      ? 'bg-red-50 border-red-200 text-[#8b0a1a] font-bold'
                      : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="truncate">{idx + 1}. {s.title.split('|')[1] || s.title}</span>
                  {idx < currentStep && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Inhibitors & Pathologies Playground */}
          <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-5 shadow-xl space-y-3 text-gray-900">
            <h4 className="text-xs font-black uppercase text-[#8b0a1a] border-b border-gray-300 pb-2 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-[#8b0a1a]" />
              اختبار الطفرات والمثبطات السريرية:
            </h4>
            <div className="space-y-2">
              {pathway === 'class1' ? (
                <>
                  <button
                    onClick={() => handleInhibitorToggle('Bortezomib')}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold text-start transition-all ${
                      activeInhibitor === 'Bortezomib'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    🚫 بورتيزوميب (تثبيط البروتيازوم 26S)
                  </button>
                  <button
                    onClick={() => handleInhibitorToggle('TAP Mutation')}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold text-start transition-all ${
                      activeInhibitor === 'TAP Mutation'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    🚫 متلازمة الخلايا اللمفاوية العارية I (طفرة TAP)
                  </button>
                  <button
                    onClick={() => handleInhibitorToggle('Brefeldin A')}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold text-start transition-all ${
                      activeInhibitor === 'Brefeldin A'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    🚫 بريفيلدين A (حظر النقل عبر غولجي)
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleInhibitorToggle('Chloroquine')}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold text-start transition-all ${
                      activeInhibitor === 'Chloroquine'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    🚫 كلوروكين (منع تحميض الجسيم الداخلي)
                  </button>
                  <button
                    onClick={() => handleInhibitorToggle('CIITA mutation')}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold text-start transition-all ${
                      activeInhibitor === 'CIITA mutation'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    🚫 متلازمة الخلايا العارية II (غياب MHC-II / CIITA)
                  </button>
                  <button
                    onClick={() => handleInhibitorToggle('HLA-DM Deficiency')}
                    className={`w-full p-2.5 rounded-xl border text-xs font-bold text-start transition-all ${
                      activeInhibitor === 'HLA-DM Deficiency'
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    🚫 عوز HLA-DM (بقاء دبوس CLIP عالقاً بالثلم)
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
