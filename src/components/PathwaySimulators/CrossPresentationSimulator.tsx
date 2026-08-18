import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ShieldCheck, Sparkles, RefreshCw, Layers, Lightbulb } from 'lucide-react';

interface CrossPresentationSimulatorProps {
  language?: 'ar' | 'en' | 'bilingual';
}

export const CrossPresentationSimulator: React.FC<CrossPresentationSimulatorProps> = ({ language = 'ar' }) => {
  const [step, setStep] = useState<number>(0);
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  const steps = [
    {
      title: '1. Infection of Somatic Cell & Apoptosis | إنتان الخلية الجسدية وتموتها',
      locus: 'Peripheral Tissue | النسيج المحيطي',
      description: 'A virus infects non-APCs (e.g. respiratory epithelial cells). These cells cannot migrate to lymph nodes and lack B7 costimulators to prime naive T cells.',
      descriptionArabic: 'يصيب الفيروس خلية نسيجية غير عارضة (كالظهارية التنفسية)، وهي خلايا عاجزة عن الهجرة للعقد اللمفاوية وتفتقر لإشارات التحفيز B7 لتفعيل الخلايا التائية البدائية.',
      simplifiedEn: 'A normal lung or skin cell gets infected and dies, but it cannot talk to naive police officers directly.',
      simplifiedAr: 'تصاب خلية نسيجية عادية بفيروس وتموت، لكنها عاجزة عن السفر للعقد اللمفاوية أو تدريب الخلايا القاتلة.',
      dcAction: 'Dendritic Cell arrives at site of inflammation and samples dying apoptotic cellular blebs containing viral antigens.'
    },
    {
      title: '2. Phagocytic Uptake of Exogenous Viral Fragments | التقاط الشظايا بالبلعمة',
      locus: 'Dendritic Cell Phagosome | جسيم البلعمة',
      description: 'The Dendritic Cell internalizes the viral fragments via receptor-mediated endocytosis into a phagosome.',
      descriptionArabic: 'تبتلع الخلية الشجيرية الشظايا الخلوية المحتوية على الفيروس وتدخلها ضمن حويصل بلعمي.',
      simplifiedEn: 'The scout Dendritic cell swallows the dead virus-loaded cell debris into an eating bubble.',
      simplifiedAr: 'تبتلع الخلية التغصنية حطام الخلية الميتة المحملة بالفيروس داخل حويصل بلعمي.',
      dcAction: 'DC captures exogenous antigens that would normally be restricted strictly to the MHC Class II pathway.'
    },
    {
      title: '3. Translocation from Phagosome into DC Cytosol | العبور من الحويصل للهيولى (السر الميكانيكي)',
      locus: 'DC Phagosome Membrane -> Cytosol',
      description: 'CROSS-PRESENTATION MECHANISM: Viral protein antigens cross or are transported through the phagosome membrane into the Dendritic Cell cytoplasm.',
      descriptionArabic: 'آلية العرض المتقاطع: تعبر المستضدات الفيروسية من لمعة الحويصل البلعمي إلى هيولى الخلية الشجيرية دون أن تصاب الخلية الشجيرية نفسها بالعدوى!',
      simplifiedEn: 'The escape trick: The viral protein slips out of the bubble directly into the DC\'s internal cytoplasm kitchen.',
      simplifiedAr: 'سر الهروب: يهرب البروتين الفيروسي من كيس الهضم إلى سيتوبلازم الخلية التغصنية الداخلي دون أن تصاب الخلية بالعدوى.',
      dcAction: 'Antigen enters the endogenous cytosolic pathway without the DC itself being virally infected!'
    },
    {
      title: '4. Proteasomal Cleavage & TAP Transport | التقطيع بالبروتيازوم والنقل بـ TAP',
      locus: 'DC Proteasome & ER',
      description: 'Cytosolic viral proteins are cleaved by proteasomes into 8–10 residue peptides, pumped into the ER lumen by TAP, and loaded onto newly formed MHC Class I molecules.',
      descriptionArabic: 'تُقطع البروتينات في البروتيازوم إلى ببتيدات قصيرة، وتُضخ عبر TAP إلى الشبكة الباطنة لتُحمّل على جزيئات MHC Class I حديثة التخليق.',
      simplifiedEn: 'The escaped protein is shredded and loaded onto MHC Class I inside the DC.',
      simplifiedAr: 'يُقطع البروتين بالبروتيازوم ويضخه ناقل TAP ليركب على معقد MHC Class I.',
      dcAction: 'Peptide:MHC-I complex is assembled and transported to the plasma membrane.'
    },
    {
      title: '5. Migration & Priming of Naive CD8+ CTLs (Cross-Priming) | تحريض الخلايا التائية السمية',
      locus: 'Secondary Lymph Node (T Cell Zone)',
      description: 'The mature DC travels via afferents to the regional lymph node. It presents the viral peptide on MHC Class I along with B7-1/B7-2 costimulators (Signal 2) to naive CD8+ T cells.',
      descriptionArabic: 'تهاجر الخلية الشجيرية الناضجة إلى العقدة اللمفاوية وتعرض الببتيد على MHC Class I مع تقديم إشارة التحفيز 2 (B7:CD28) للخلايا التائية CD8+ البدائية لتحريضها وتكاثرها.',
      simplifiedEn: 'The DC travels to the lymph node and trains naive CD8+ Killer T cells to hunt down the virus everywhere.',
      simplifiedAr: 'تسافر الخلية التغصنية للعقد اللمفاوية وتدرب الخلايا القاتلة CD8+ على مطاردة الفيروس في كامل أنحاء الجسم.',
      dcAction: 'Naive CD8+ T cells undergo massive clonal expansion into virus-killing effector CTLs.'
    }
  ];

  return (
    <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 sm:p-8 text-gray-900 shadow-xl space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-300 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-[#8b0a1a] text-white font-mono uppercase tracking-wider shadow-sm">
              Dendritic Cell Cross-Priming | محاكي العرض المتقاطع
            </span>
            <span className="text-xs text-gray-600 font-bold bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
              Slides 31–32 | أ.د. رنا حبيب
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a] mt-2">
            Cross-Presentation Interactive Pathway
          </h2>
          <p className="text-sm text-gray-700 mt-1 max-w-2xl leading-relaxed">
            كيف تقدم الخلايا الشجيرية مستضدات الفيروسات والأورام الخارجية على معقد MHC Class I لتفعيل الخلايا التائية القاتلة البدائية (CD8+ CTLs).
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          {/* Simplify Concept Button */}
          <button
            onClick={() => setSimplifyConcept(!simplifyConcept)}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-black transition-all shadow-sm rounded-xl ${
              simplifyConcept
                ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            <Lightbulb className={`w-4 h-4 ${simplifyConcept ? 'text-slate-950 fill-slate-950' : 'text-amber-600'}`} />
            <span>{simplifyConcept ? 'وضع التبسيط مفعّل 💡' : 'تبسيط المفهوم 💡'}</span>
          </button>

          <button
            onClick={() => setStep(0)}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 rounded-xl transition-all shadow-sm"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>إعادة الضبط</span>
          </button>
        </div>
      </div>

      {/* Simplified Summary Banner if enabled */}
      {simplifyConcept && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-5 shadow-md text-slate-900 space-y-2 animate-fadeIn">
          <div className="flex items-center gap-2 font-black text-amber-900 text-xs sm:text-sm">
            <Lightbulb className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>تشبيه تهريب البضائع إلى المطبخ الداخلي والتدريب المتقاطع:</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
            في العادة تذهب المواد الملتقطة من الخارج إلى مسار MHC-II، لكن الخلية التغصنية تمتلك ميزة فريدة: تبتلع حطام الخلايا المصابة بالفيروس وتهرب البروتين من كيس الهضم إلى سيتوبلازمها الداخلي، ليُقطع ويُحمل على MHC-I، فتدرب الخلايا القاتلة CD8+ دون أن تصاب الخلية التغصنية نفسها بالعدوى!
          </p>
        </div>
      )}

      <div className="space-y-5">
        {/* Step selectors */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setStep(idx)}
              className={`p-3 rounded-2xl border text-start text-xs transition-all shadow-sm ${
                idx === step
                  ? 'bg-[#8b0a1a] text-white shadow-md font-bold'
                  : idx < step
                  ? 'bg-red-50 border-red-200 text-[#8b0a1a] font-semibold'
                  : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center justify-between font-bold mb-1">
                <span>المرحلة {idx + 1}</span>
                {idx < step && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
              </div>
              <div className="truncate font-medium">{s.locus.split('|')[1] || s.locus}</div>
            </button>
          ))}
        </div>

        <div className="bg-white border border-gray-300 rounded-3xl p-6 sm:p-8 shadow-lg space-y-4">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#8b0a1a]">
              المرحلة الحالية {step + 1} من 5
            </span>
            <span className="text-xs font-mono font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
              {steps[step].locus}
            </span>
          </div>

          <h3 className="text-lg font-black text-gray-900">
            {steps[step].title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-right" dir="rtl">
              <span className="text-xs font-black text-[#8b0a1a] block">الشرح باللغة العربية:</span>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-bold">
                {steps[step].descriptionArabic}
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 space-y-2 text-left" dir="ltr">
              <span className="text-xs font-black text-[#8b0a1a] block">English Description:</span>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {steps[step].description}
              </p>
            </div>
          </div>

          {/* Simplified note */}
          {simplifyConcept && (
            <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200 space-y-1">
              <span className="text-[11px] font-black text-amber-900 flex items-center gap-1">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                التبسيط السريع للمرحلة:
              </span>
              <p className="text-xs font-black text-slate-900">{steps[step].simplifiedAr}</p>
              <p className="text-[11px] text-slate-700" dir="ltr">{steps[step].simplifiedEn}</p>
            </div>
          )}

          <div className="p-4 bg-red-50/70 border border-red-200 rounded-2xl">
            <div className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider mb-1">
              دور الخلية التغصنية (Dendritic Cell Action):
            </div>
            <p className="text-xs sm:text-sm text-gray-800 font-bold">
              {steps[step].dcAction}
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <button
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              disabled={step === 0}
              className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-bold text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              المرحلة السابقة
            </button>

            <button
              onClick={() => setStep((prev) => Math.min(steps.length - 1, prev + 1))}
              disabled={step === steps.length - 1}
              className="px-5 py-2.5 rounded-xl bg-[#8b0a1a] hover:bg-[#700714] text-xs font-black text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-md flex items-center gap-1.5"
            >
              <span>{step === steps.length - 1 ? 'اكتمل المسار' : 'المرحلة التالية'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
