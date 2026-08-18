import React from 'react';

interface DoctorSlideVisualsProps {
  diagramType?: string;
  theme?: 'doctor' | 'dark';
}

export const DoctorSlideVisuals: React.FC<DoctorSlideVisualsProps> = ({
  diagramType = 'antigenReceptors',
  theme = 'doctor'
}) => {
  const isDoctorTheme = theme === 'doctor';

  // 1. Antigen Receptors (BCR vs TCR) - Exact matching for Slide 10 in Dr. Rana Habib's slide!
  if (diagramType === 'antigenReceptors' || diagramType === 'bcrVsTcr') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200 dark:border-gray-800">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            مستقبلات المستضد على الخلايا اللمفاوية (BCR vs TCR) | Antigen Receptors
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* BCR Side (English LTR & Arabic RTL) */}
          <div className={`p-4 rounded-xl border ${isDoctorTheme ? 'bg-[#fcfbf9] border-amber-900/15' : 'bg-[#051c20] border-teal-800'}`}>
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-gray-100">
              <span className="text-xs sm:text-sm font-bold text-[#8b0a1a]">1. B Cell Receptor (BCR)</span>
              <span className="text-xs sm:text-sm font-bold text-[#8b0a1a]">مستقبل الخلية البائية</span>
            </div>

            {/* SVG Schematic for B Cell & Membrane Antibodies */}
            <div className="flex justify-center my-3">
              <svg viewBox="0 0 260 140" className="w-full max-w-[240px] h-auto drop-shadow-sm">
                {/* B Cell Membrane */}
                <ellipse cx="130" cy="125" rx="100" ry="25" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
                <text x="130" y="132" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#334155">B Lymphocyte Membrane</text>

                {/* Y-shaped Membrane Antibody */}
                {/* Stem */}
                <rect x="126" y="70" width="8" height="35" rx="2" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
                {/* Left Arm */}
                <path d="M 126 70 L 95 30 L 105 22 L 130 62 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
                {/* Right Arm */}
                <path d="M 134 70 L 165 30 L 155 22 L 130 62 Z" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />

                {/* Antigen binding sites (variable) */}
                <circle cx="98" cy="24" r="7" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />
                <circle cx="162" cy="24" r="7" fill="#EF4444" stroke="#B91C1C" strokeWidth="1" />

                {/* Soluble Native Antigen binding directly */}
                <polygon points="98,5 106,16 90,16" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
                <polygon points="162,5 170,16 154,16" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
                
                <text x="98" y="0" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857">Native Antigen</text>
                <text x="162" y="0" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#047857">مستضد سليم طبيعي</text>
              </svg>
            </div>

            {/* Side-by-side key bullet text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-100">
              <div className="text-left text-gray-700 font-sans">
                <span className="font-semibold text-gray-900">• Direct binding:</span> Recognizes soluble, native proteins, lipids, carbohydrates directly without processing.
              </div>
              <div className="text-right text-gray-700 font-sans" dir="rtl">
                <span className="font-semibold text-gray-900">• ارتباط مباشر:</span> يتعرف على البروتينات والشحوم والسكريات السليمة دون الحاجة لمعالجة أو وسيط.
              </div>
            </div>
          </div>

          {/* TCR Side (English LTR & Arabic RTL) */}
          <div className={`p-4 rounded-xl border ${isDoctorTheme ? 'bg-[#fcfbf9] border-amber-900/15' : 'bg-[#051c20] border-teal-800'}`}>
            <div className="flex items-center justify-between mb-2 pb-1 border-b border-gray-100">
              <span className="text-xs sm:text-sm font-bold text-[#8b0a1a]">2. T Cell Receptor (TCR)</span>
              <span className="text-xs sm:text-sm font-bold text-[#8b0a1a]">مستقبل الخلية التائية</span>
            </div>

            {/* SVG Schematic for T Cell + TCR + pMHC on APC */}
            <div className="flex justify-center my-3">
              <svg viewBox="0 0 260 140" className="w-full max-w-[240px] h-auto drop-shadow-sm">
                {/* T Cell Membrane at Top */}
                <ellipse cx="130" cy="15" rx="100" ry="12" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                <text x="130" y="12" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#334155">T Lymphocyte Membrane</text>

                {/* TCR Heterodimer (alpha/beta) */}
                <rect x="115" y="27" width="12" height="35" rx="3" fill="#8B5CF6" stroke="#6D28D9" strokeWidth="1.5" />
                <text x="121" y="48" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">α</text>

                <rect x="133" y="27" width="12" height="35" rx="3" fill="#A78BFA" stroke="#6D28D9" strokeWidth="1.5" />
                <text x="139" y="48" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">β</text>

                {/* Coreceptor CD4/CD8 */}
                <rect x="95" y="27" width="8" height="42" rx="2" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
                <text x="99" y="50" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">CD</text>

                {/* Peptide in groove */}
                <rect x="120" y="65" width="20" height="7" rx="3" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
                <text x="130" y="71" textAnchor="middle" fontSize="6" fill="white" fontWeight="black">Peptide</text>

                {/* MHC Molecule on APC */}
                <path d="M 108 72 L 152 72 L 145 105 L 115 105 Z" fill="#10B981" stroke="#047857" strokeWidth="1.5" />
                <text x="130" y="90" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">MHC</text>

                {/* APC Membrane at Bottom */}
                <ellipse cx="130" cy="125" rx="100" ry="15" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
                <text x="130" y="130" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#334155">APC Membrane (MHC Platform)</text>
              </svg>
            </div>

            {/* Side-by-side key bullet text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-100">
              <div className="text-left text-gray-700 font-sans">
                <span className="font-semibold text-gray-900">• MHC-Restricted:</span> Recognizes ONLY short linear peptides bound to host MHC molecules on APCs.
              </div>
              <div className="text-right text-gray-700 font-sans" dir="rtl">
                <span className="font-semibold text-gray-900">• حصر معقد MHC:</span> يتعرف حصراً على ببتيدات خطية قصيرة محمولة على جزيئات MHC فوق الخلايا العارضة.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. 3-Signal Model Schematic
  if (diagramType === 'synapse3Signals') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            نموذج الإشارات الثلاث لتنشيط الخلايا التائية | The 3-Signal T Cell Activation Model
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {/* Signal 1 Card */}
          <div className="p-3 rounded-lg bg-white dark:bg-[#051c20] border border-blue-200 dark:border-blue-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between font-bold text-blue-700 dark:text-blue-400">
              <span>Signal 1: Antigen</span>
              <span>الإشارة 1: التعرف المستضدي</span>
            </div>
            <div className="p-2 bg-blue-50 dark:bg-blue-950/40 rounded text-[11px] font-mono text-center text-blue-900 dark:text-blue-200">
              TCR:pMHC + CD4/CD8
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="text-left text-gray-600">Triggers CD3/zeta chain ITAM phosphorylation.</div>
              <div className="text-right text-gray-600" dir="rtl">تطلق فسفرة نطاقات ITAM بمعقد CD3 وسلسلة زيتا.</div>
            </div>
          </div>

          {/* Signal 2 Card */}
          <div className="p-3 rounded-lg bg-white dark:bg-[#051c20] border border-emerald-200 dark:border-emerald-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between font-bold text-emerald-700 dark:text-emerald-400">
              <span>Signal 2: Costimulation</span>
              <span>الإشارة 2: التحفيز المشترك</span>
            </div>
            <div className="p-2 bg-emerald-50 dark:bg-emerald-950/40 rounded text-[11px] font-mono text-center text-emerald-900 dark:text-emerald-200">
              B7-1/B7-2 (APC) : CD28 (T)
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="text-left text-gray-600">Survival, IL-2 synthesis & prevents anergy.</div>
              <div className="text-right text-gray-600" dir="rtl">تمنع الخمول وتطلق تخليق سيتوكين IL-2 وبقاء الخلية.</div>
            </div>
          </div>

          {/* Signal 3 Card */}
          <div className="p-3 rounded-lg bg-white dark:bg-[#051c20] border border-purple-200 dark:border-purple-900 shadow-sm space-y-2">
            <div className="flex items-center justify-between font-bold text-purple-700 dark:text-purple-400">
              <span>Signal 3: Differentiation</span>
              <span>الإشارة 3: التمايز والتوجيه</span>
            </div>
            <div className="p-2 bg-purple-50 dark:bg-purple-950/40 rounded text-[11px] font-mono text-center text-purple-900 dark:text-purple-200">
              IL-12, IL-4, IL-6, TGF-β
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="text-left text-gray-600">Polarizes naive T cells into Th1, Th2, or Th17.</div>
              <div className="text-right text-gray-600" dir="rtl">توجه تمايز الخلية الساذجة إلى سلالات Th1, Th2, Th17.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. MHC Class I Cytosolic Pathway
  if (diagramType === 'mhc1') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            مسار معالجة وعرض المستضدات الهيولية (MHC Class I Pathway)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded bg-white border border-gray-200 space-y-2">
            <div className="font-bold text-[#8b0a1a]">1. Sequence of Processing Events (English)</div>
            <ol className="list-decimal pl-4 space-y-1 text-gray-700">
              <li><b>Cytosolic Protein:</b> Viral or tumor protein in host cytoplasm is polyubiquitinated.</li>
              <li><b>Proteasome Proteolysis:</b> 26S cylinder degrades protein into 8–11 AA peptides.</li>
              <li><b>TAP Translocation:</b> TAP1/2 transporter actively pumps peptides into ER lumen.</li>
              <li><b>ER Loading:</b> Peptide binds newly folded MHC-I (α chain + β2m + Tapasin).</li>
              <li><b>Golgi Transport & Surface Display:</b> Presented to CD8+ CTL for targeted lysis.</li>
            </ol>
          </div>

          <div className="p-3 rounded bg-white border border-gray-200 space-y-2 text-right" dir="rtl">
            <div className="font-bold text-[#8b0a1a]">2. التسلسل الحيوي لمسار المعالجة (عربي)</div>
            <ol className="list-decimal pr-4 space-y-1 text-gray-700">
              <li><b>البروتين الهيولي:</b> وسم البروتين الفيروسي أو الورمي بسلاسل اليوبيكويتين.</li>
              <li><b>التحلل بالبروتيازوم:</b> هضم البروتين إلى ببتيدات بطول 8-11 حمضاً أمينياً.</li>
              <li><b>النقل بناقل TAP:</b> ضخ الببتيدات عبر غشاء الشبكة الهيولية إلى داخل اللمعة.</li>
              <li><b>التحميل بالشبكة الهيولية:</b> ارتباط الببتيد بمعقد MHC-I المتشكل من ألفا وبيتا-2 ميكروغلوبيولين.</li>
              <li><b>جهاز غولجي والعرض السطحي:</b> خروج المعقد للغشاء ليُعرض على خلايا CD8+ القاتلة.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // 4. MHC Class II Exogenous Pathway
  if (diagramType === 'mhc2') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            مسار معالجة وعرض المستضدات البالوعية (MHC Class II Pathway)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded bg-white border border-gray-200 space-y-2">
            <div className="font-bold text-[#8b0a1a]">1. Sequence of Processing Events (English)</div>
            <ol className="list-decimal pl-4 space-y-1 text-gray-700">
              <li><b>Endocytosis:</b> Extracellular microbes engulfed into endosomes by professional APCs.</li>
              <li><b>Acid Cathepsins:</b> Proteolysis generates 10–30+ amino acid peptides in phagolysosome.</li>
              <li><b>Invariant Chain (Ii):</b> ER synthesizes MHC-II with Ii blocking groove from ER peptides.</li>
              <li><b>CLIP Digestion:</b> Ii degraded to CLIP peptide inside acidic MIIC compartment.</li>
              <li><b>HLA-DM Exchange:</b> HLA-DM removes CLIP, loading high-affinity microbial peptide.</li>
              <li><b>Surface Display:</b> Presented to CD4+ Helper T cells to solicit macrophage/B-cell help.</li>
            </ol>
          </div>

          <div className="p-3 rounded bg-white border border-gray-200 space-y-2 text-right" dir="rtl">
            <div className="font-bold text-[#8b0a1a]">2. التسلسل الحيوي لمسار المعالجة (عربي)</div>
            <ol className="list-decimal pr-4 space-y-1 text-gray-700">
              <li><b>البلعمة والالتقاط:</b> ابتلاع الميكروب الخارجي إلى داخل الجسيم البالوعي للخلية العارضة.</li>
              <li><b>الإنزيمات الحامضية (الكاثيبسين):</b> هضم المستضد إلى ببتيدات بطول 10-30+ حمضاً أمينياً.</li>
              <li><b>السلسلة الثابتة (Ii):</b> حجب شق الارتباط أثناء التصنيع في الشبكة الهيولية.</li>
              <li><b>تشكل قطعة CLIP:</b> هضم السلسلة الثابتة وترك قطعة CLIP في حجرة MIIC.</li>
              <li><b>التبادل بجزيء HLA-DM:</b> إزاحة CLIP وتحميل الببتيد الميكروبي الأجنبي.</li>
              <li><b>العرض الغشائي:</b> تقديم المعقد للخلايا التائية المساعدة CD4+ لإفراز السيتوكينات.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  // 5. CTL Lethal Hit (Perforin/Granzyme + Fas/FasL)
  if (diagramType === 'ctlPerforin') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            آليات القتل الخلوي بـ CTL (البيرفورين والغرانزايم B ومسار Fas/FasL)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded bg-white border border-rose-200 space-y-2">
            <div className="font-bold text-rose-800">1. Perforin / Granzyme Pathway</div>
            <div className="text-gray-700 space-y-1">
              <p>• <b>Perforin:</b> Polymerizes into 13–20 nm cylindrical pores in target membrane.</p>
              <p>• <b>Granzyme B:</b> Enters via pores, cleaves Procaspase-3 into active Caspase-3.</p>
              <p>• <b>Bid Cleavage:</b> Induces mitochondrial Cytochrome C release and Apoptosome activation.</p>
            </div>
            <div className="text-right text-gray-700 pt-1 border-t border-gray-100" dir="rtl">
              <p>• <b>البيرفورين:</b> يتبلمر ليشكل ثقوباً 13-20 نانومتر بغشاء الخلية الهدف.</p>
              <p>• <b>غرانزايم B:</b> ينفذ عبر الثقوب ويقطع كاسباز-3 التنفيذي وبروتين Bid لإطلاق الموت المبرمج.</p>
            </div>
          </div>

          <div className="p-3 rounded bg-white border border-purple-200 space-y-2">
            <div className="font-bold text-purple-800">2. Fas / FasL (CD95 / CD178) Pathway</div>
            <div className="text-gray-700 space-y-1">
              <p>• <b>FasL on CTL:</b> Binds and trimerizes Fas (CD95) on target cell.</p>
              <p>• <b>FADD Adapter:</b> Recruits Procaspase-8 forming the DISC complex.</p>
              <p>• <b>Execution:</b> Active Caspase-8 triggers downstream apoptosis cascade.</p>
            </div>
            <div className="text-right text-gray-700 pt-1 border-t border-gray-100" dir="rtl">
              <p>• <b>ربيطة FasL:</b> ترتبط بمستقبل Fas (CD95) على الخلية الهدف وتجمعه ثلاثياً.</p>
              <p>• <b>معقد DISC:</b> يجمع بروتين FADD ويفعل كاسباز-8 البادئ لتفتيت DNA الخلية المصابة.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. Th1 - Macrophage Activation Loop
  if (diagramType === 'th1Macrophage') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            حلقة التنشيط الكلاسيكي المتبادل Th1 - البلعميات (Reciprocal Activation Loop)
          </span>
        </div>

        <div className="p-3 rounded bg-white border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="space-y-1 text-gray-700">
            <div className="font-bold text-[#8b0a1a]">Bilingual Contact Signals (Side-by-Side):</div>
            <p>1. <b>Macrophage &rarr; Th1:</b> Presents antigen on MHC-II + secretes IL-12.</p>
            <p>2. <b>Th1 &rarr; Macrophage:</b> Responds with CD40L (CD154) + high IFN-γ secretion.</p>
            <p>3. <b>M1 Classical Activation:</b> Upregulates iNOS (producing Nitric Oxide) and NADPH Oxidase (producing Superoxide & ROS).</p>
          </div>

          <div className="space-y-1 text-gray-700 text-right" dir="rtl">
            <div className="font-bold text-[#8b0a1a]">إشارات التماس والتنشيط المتبادل:</div>
            <p>1. <b>البلعمية &larr; خلية Th1:</b> تقدم الببتيد على MHC-II وتفرز إنترلوكين-12 (IL-12).</p>
            <p>2. <b>خلية Th1 &larr; البلعمية:</b> تستجيب بالتعبير عن CD40L وإفراز غاما إنترفيرون (IFN-γ).</p>
            <p>3. <b>التفعيل الكلاسيكي M1:</b> إطلاق إنزيم iNOS (مولد أكسيد النتريك NO) وأنزيم NADPH Oxidase (مولد مركبات ROS) لقتل الجراثيم.</p>
          </div>
        </div>
      </div>
    );
  }

  // 7. Dendritic Cell Cross-Presentation
  if (diagramType === 'crossPres') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            العرض المتصالب للخلايا التغصنية (Dendritic Cell Cross-Presentation)
          </span>
        </div>

        <div className="p-3 rounded bg-white border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="space-y-1 text-gray-700">
            <div className="font-bold text-[#8b0a1a]">Cross-Priming of CD8+ CTLs (English):</div>
            <p>• Ingestion of dead viral-infected cells or tumor debris (exogenous antigen).</p>
            <p>• Antigen escapes from phagosome into DC cytosol &rarr; Proteasome &rarr; TAP &rarr; ER.</p>
            <p>• Loaded onto MHC Class I (instead of Class II) to prime naive CD8+ T cells.</p>
          </div>

          <div className="space-y-1 text-gray-700 text-right" dir="rtl">
            <div className="font-bold text-[#8b0a1a]">العرض المتصالب وتنشيط القاتلة (عربي):</div>
            <p>• ابتلاع بقايا خلايا ورمية أو مصابة بفيروسات (مستضدات خارجية).</p>
            <p>• تهريب المستضد من البالوعة إلى هيولى الخلية التغصنية &larr; بروتيازوم &larr; ناقل TAP &larr; شبكة هيولية.</p>
            <p>• التحميل على معقد MHC-I (بدلاً من MHC-II) لتنشيط خلايا CD8+ القاتلة الساذجة.</p>
          </div>
        </div>
      </div>
    );
  }

  // 8. CD4+ Helper Subsets
  if (diagramType === 'thSubsets') {
    return (
      <div className={`p-5 rounded-2xl border ${isDoctorTheme ? 'bg-white border-[#8b0a1a]/30 text-gray-900 shadow-md' : 'bg-[#031315] border-teal-900 text-slate-100'}`}>
        <div className="text-center font-bold text-sm sm:text-base mb-4 pb-2 border-b border-gray-200">
          <span className="text-[#8b0a1a] dark:text-teal-400">
            سلالات الخلايا التائية المساعدة (Th1, Th2, Th17)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
          <div className="p-2.5 rounded bg-white border border-red-200 space-y-1">
            <div className="font-bold text-red-700 flex justify-between">
              <span>Th1 Subset</span>
              <span>سلالة Th1</span>
            </div>
            <p className="text-[11px] text-gray-600"><b>Driver:</b> IL-12, IFN-γ | <b>TF:</b> T-bet</p>
            <p className="text-[11px] text-gray-600"><b>Cytokines:</b> IFN-γ</p>
            <p className="text-[11px] text-gray-600"><b>Role:</b> Intracellular microbes, M1 activation.</p>
          </div>

          <div className="p-2.5 rounded bg-white border border-blue-200 space-y-1">
            <div className="font-bold text-blue-700 flex justify-between">
              <span>Th2 Subset</span>
              <span>سلالة Th2</span>
            </div>
            <p className="text-[11px] text-gray-600"><b>Driver:</b> IL-4 | <b>TF:</b> GATA-3</p>
            <p className="text-[11px] text-gray-600"><b>Cytokines:</b> IL-4, IL-5, IL-13</p>
            <p className="text-[11px] text-gray-600"><b>Role:</b> Helminths, IgE, Eosinophils, M2 repair.</p>
          </div>

          <div className="p-2.5 rounded bg-white border border-emerald-200 space-y-1">
            <div className="font-bold text-emerald-700 flex justify-between">
              <span>Th17 Subset</span>
              <span>سلالة Th17</span>
            </div>
            <p className="text-[11px] text-gray-600"><b>Driver:</b> IL-6, TGF-β, IL-23 | <b>TF:</b> RORγt</p>
            <p className="text-[11px] text-gray-600"><b>Cytokines:</b> IL-17, IL-22</p>
            <p className="text-[11px] text-gray-600"><b>Role:</b> Neutrophils, Extracellular bacteria, Fungi.</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
