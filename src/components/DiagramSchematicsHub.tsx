import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Zap,
  Activity,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Dna,
  Bug,
  Info,
  RotateCcw,
  Lightbulb,
  Check,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface DiagramSchematicsHubProps {
  language: 'ar' | 'en' | 'bilingual';
}

export const DiagramSchematicsHub: React.FC<DiagramSchematicsHubProps> = ({ language }) => {
  const [activeDiagram, setActiveDiagram] = useState<'mhc1' | 'mhc2' | 'threeSignal' | 'ctlKilling' | 'macrophageLoop' | 'crossPres'>('mhc1');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simplifyConcept, setSimplifyConcept] = useState<boolean>(false);

  const isRtl = language === 'ar';

  const diagramsList = [
    {
      id: 'mhc1',
      titleEn: 'MHC Class I Endogenous Processing Pathway',
      titleAr: 'مسار معالجة وعرض معقد التوافق النسيجي الصنف الأول (MHC-I)',
      badge: 'CD8+ CTL Target',
      slides: 'Slides 21, 23, 27-28',
      accentColor: '#8b0a1a'
    },
    {
      id: 'mhc2',
      titleEn: 'MHC Class II Exogenous Processing Pathway',
      titleAr: 'مسار معالجة وعرض معقد التوافق النسيجي الصنف الثاني (MHC-II)',
      badge: 'CD4+ Th Helper Target',
      slides: 'Slides 21, 24, 29-30',
      accentColor: '#1e3a8a'
    },
    {
      id: 'threeSignal',
      titleEn: '3-Signal T Cell Activation & Lineage Differentiation',
      titleAr: 'نموذج الإشارات الثلاث لتنشيط وتمايز الخلايا التائية',
      badge: 'Immunological Synapse',
      slides: 'Slides 33–36',
      accentColor: '#065f46'
    },
    {
      id: 'ctlKilling',
      titleEn: 'CD8+ CTL Lethal Hit: Perforin/Granzyme vs Fas/FasL',
      titleAr: 'آليات الضربة القاتلة للخلايا السامة (CD8+ CTL): البيرفورين والفاس',
      badge: 'Cytotoxicity Cascades',
      slides: 'Slides 45–50',
      accentColor: '#8b0a1a'
    },
    {
      id: 'macrophageLoop',
      titleEn: 'Th1 – Macrophage Reciprocal M1 Activation Loop',
      titleAr: 'حلقة التنشيط المتبادل بين الخلايا المساعدة Th1 والبلعميات الكبيرة',
      badge: 'IFN-γ + CD40L M1 Loop',
      slides: 'Slides 40–44',
      accentColor: '#92400e'
    },
    {
      id: 'crossPres',
      titleEn: 'Dendritic Cell Cross-Presentation (Cross-Priming)',
      titleAr: 'العرض المتصالب بواسطة الخلايا التغصنية (Cross-Presentation)',
      badge: 'Antiviral/Antitumor CD8+ Priming',
      slides: 'Slides 31–32',
      accentColor: '#5b21b6'
    }
  ];

  // Simplified analogies for students to reduce cognitive load
  const simplifiedAnalogies = {
    mhc1: {
      analogyTitleEn: 'The Internal Security ID Badge & Paper Shredder Analogy',
      analogyTitleAr: 'تشبيه آلة تقطيع الورق وبطاقة الهوية الأمنية الداخلية',
      summaryEn: 'MHC Class I is like a factory displaying internal samples on its outer wall. Any abnormal internal protein (like a virus or cancer) gets chopped up by the cellular paper shredder (Proteasome), delivered via an elevator pump (TAP) into the assembly room (ER), mounted onto an ID badge (MHC-I), and held outside for passing security police (CD8+ Killer T cells) to inspect.',
      summaryAr: 'معقد MHC-I يشبه تعليق عينات داخلية على جدار المصنع الخارجي. أي بروتين شاذ (فيروس أو ورم) تقطعه آلة التقطيع (البروتيازوم)، وينقله مصعد خاص (TAP) إلى غرفة التجميع (الشبكة الباطنة)، ليركب على لوحة الهوية (MHC-I) وتعرضه الخلية لشرطة المناعة (خلايا CD8+ القاتلة) لفحصه وقتل الخلية إن كانت مصابة.',
      keyRuleEn: 'Rule of 8: MHC-I × CD8 = 8. Uses short 8–11 AA peptides from inside the cell.',
      keyRuleAr: 'قاعدة الرقم 8: MHC-I × CD8 = 8. يستخدم ببتيدات قصيرة (8-11 حمضاً) من داخل الخلية.'
    },
    mhc2: {
      analogyTitleEn: 'The Trash Patrol & Secret Safe Pin Analogy',
      analogyTitleAr: 'تشبيه دورية النظافة ودبوس الأمان المقفل',
      summaryEn: 'MHC Class II is used exclusively by professional scouts (Dendritic cells, Macrophages, B cells) that eat trash from the outside street. The trash is melted in an acid stomach (Endosome). In the ER, MHC-II is made with a safety pin (Invariant Chain / CLIP) blocking its groove so internal proteins cannot hijack it. Once in the acid stomach, an enzyme helper (HLA-DM) pulls out the safety pin and loads the foreign bacterial peptide before showing it to commander officers (CD4+ Helper T cells).',
      summaryAr: 'معقد MHC-II مخصص لحراس المناعة المحترفين (الخلايا الشجيرية، البلعميات، والخلايا البائية) الذين يبتلعون الأجسام الغريبة من الخارج ويهضمونها في أكياس حامضية. في الشبكة الباطنة يُصنع المعقد مع دبوس أمان (السلسلة الثابتة / CLIP) يسد الشِق لمنع اختطافه بالبروتينات الذاتية، ثم يقوم الجزيء المساعد HLA-DM بخلع الدبوس وتركيب الببتيد الجرثومي لعرضه على قادة الجيش المناعي (خلايا CD4+ المساعدة).',
      keyRuleEn: 'Rule of 8: MHC-II × CD4 = 8. Uses longer 10–30+ AA peptides from outside the cell.',
      keyRuleAr: 'قاعدة الرقم 8: MHC-II × CD4 = 8. يستخدم ببتيدات أطول (10-30+ حمضاً) من خارج الخلية.'
    },
    threeSignal: {
      analogyTitleEn: 'The 3-Key Car Ignition & Navigation Analogy',
      analogyTitleAr: 'تشبيه مفتاح السيارة وإشارة الأمان ونظام الملاحة GPS',
      summaryEn: 'Starting a T cell requires three precise signals: Signal 1 is inserting the correct key (TCR recognizing the specific antigen). Signal 2 is pressing the safety clutch (B7 on APC binding CD28 on T cell); if you turn the key WITHOUT the clutch, the car breaks down permanently (Anergy / Tolerance). Signal 3 is the GPS directions (Cytokines like IL-12 or IL-4) instructing the T cell where to drive and which weapons to specialize in.',
      summaryAr: 'تفعيل الخلية التائية يشبه تشغيل سيارة حديثة عبر ثلاث إشارات: الإشارة 1 هي إدخال المفتاح الصحيح (التعرف على المستضد بواسطة TCR). الإشارة 2 هي ضغط دواسة الأمان (ارتباط B7 مع CD28)؛ وإذا أدرت المفتاح بدون الأمان تتعطل السيارة نهائياً وتدخل الخلية في خمول دائم (Anergy). الإشارة 3 هي نظام الملاحة GPS (السيتوكينات الموجهة) التي تحدد وجهة الخلية ونوع أسلحتها القتالية.',
      keyRuleEn: 'Signal 1 alone = Anergy (Shut Down). Signal 1 + 2 = Blast Proliferation. Signal 3 = Lineage (Th1/Th2/Th17).',
      keyRuleAr: 'الإشارة 1 وحدها = خمول وموت خلوي (Anergy). الإشارة 1 + 2 = نجاة وتكاثر. الإشارة 3 = تمايز السلالة.'
    },
    ctlKilling: {
      analogyTitleEn: 'The Surgical Drill & Detonation Bomb Squad Analogy',
      analogyTitleAr: 'تشبيه الحفار الجراحي وقنبلة التفكيك الذاتي المنظم',
      summaryEn: 'CD8+ CTLs destroy infected cells cleanly without blowing them up or spilling viral particles into the surroundings. Perforin acts as a molecular drill boring 15–20nm holes in the target membrane. Granzyme B enters through these holes like a demolition expert, activating Caspase-3 and mitochondria to trigger orderly, silent cell suicide (Apoptosis). Alternatively, CTL presses the target\'s suicide doorbell (FasL binding Fas / CD95).',
      summaryAr: 'تقضي الخلية السمية CD8+ على الخلية المصابة جراحياً ونظيفاً دون تفجيرها لمنع تسرب الفيروسات للخارج. يقوم البيرفورين بعمل ثقوب أسطوانية دقيقة في جدار الخلية الهدف، ليعبر عبرها إنزيم الغرانزايم B الذي يفعل قنابل التفكيك الذاتي (الكاسبازات) ليحدث موتاً خلوياً مبرمجاً هادئاً (Apoptosis). أو تضغط التائية جرس الانتحار الخارجي (FasL على Fas).',
      keyRuleEn: 'Apoptosis preserves membrane integrity, preventing viral dissemination and excessive tissue inflammation.',
      keyRuleAr: 'الموت المبرمج يحافظ على سلامة الغشاء الخارجي ويمنع انتشار الفيروسات ويحمي الأنسجة من الالتهاب.'
    },
    macrophageLoop: {
      analogyTitleEn: 'The Two-Way Radio Reinforcement & Chemical Bleach Analogy',
      analogyTitleAr: 'تشبيه الاتصال اللاسلكي وتصنيع المواد الكيميائية الحارقة',
      summaryEn: 'When a macrophage swallows tough bacteria (like TB) that refuse to die inside its vesicles, it sends a radio SOS with IL-12. A helper Th1 cell hears the call, docks via CD40L, and sprays high doses of Interferon-gamma (IFN-γ). This command authorizes the macrophage to activate its chemical weapon factories: producing corrosive Nitric Oxide (NO) and reactive oxygen bleach (ROS) to completely eradicate the trapped bacteria.',
      summaryAr: 'عندما تبتلع البلعمية بكتيريا عنيدة (كالسل) تستعصي على الهضم داخل أكياسها، ترسل نداء استغاثة عبر سيتوكين IL-12. تستجيب الخلية المساعدة Th1 وتلتحم بالبلعمية عبر CD40L وترش عليها غاز التعزيز (IFN-γ)، ما يعطي إذناً عسكرياً للبلعمية لتشغيل مصانع المواد الحارقة: أكسيد النتريك (NO) والجذور الحرة (ROS) لحرق البكتيريا بالكامل.',
      keyRuleEn: 'Dual signals required: Membrane CD40L + Soluble IFN-γ drive Classical M1 Macrophage Microbicidal State.',
      keyRuleAr: 'يلزم إشارتان معاً: تلامس CD40L مع CD40 + السيتوكين الذائب IFN-γ لتحقيق التفعيل القاتل M1.'
    },
    crossPres: {
      analogyTitleEn: 'The Smuggled Kitchen Cargo & Cross-Training Analogy',
      analogyTitleAr: 'تشبيه تهريب البضائع إلى المطبخ الداخلي والتدريب المتقاطع',
      summaryEn: 'Normally, external dead cells only go to MHC Class II (for helper T cells). But Dendritic Cells have a special secret: they ingest dead virus-infected or cancer cells, smuggle the viral cargo out of the digestion vesicle directly into their own kitchen (Cytosol), chop it with the proteasome, and load it onto MHC Class I. This allows naive CD8+ Killer T cells to be trained against a virus even if the Dendritic Cell itself was never infected.',
      summaryAr: 'في الحالة الطبيعية، تذهب المستضدات الخارجية إلى مسار MHC-II للخلايا المساعدة فقط. ولكن الخلايا التغصنية تمتلك سراً استثنائياً: تبتلع حطام الخلايا المصابة، وتهرب البروتينات الفيروسية من الحويصل البلعمي إلى مطبخها السيتوبلازمي الداخلي، لتقطعها بالبروتيازوم وتحملها على مسار MHC-I. هذا يدرب الخلايا القاتلة CD8+ ضد الفيروسات والأورام دون أن تصاب الخلية التغصنية نفسها بالعدوى!',
      keyRuleEn: 'Essential for generating CD8+ CTL responses against viruses that do not infect Dendritic Cells.',
      keyRuleAr: 'ضروري جداً لتوليد استجابة CD8+ ضد الفيروسات التي لا تصيب الخلايا التغصنية بذاتها.'
    }
  };

  // Steps data for each diagram
  const pathwaySteps = {
    mhc1: [
      {
        step: 1,
        titleEn: 'Endogenous Protein Synthesis & Ubiquitination',
        titleAr: 'تخليق البروتينات داخل الخلوية ووسمها باليوبيكويتين',
        compartmentEn: 'Cytoplasm / Cytosol',
        compartmentAr: 'هيولى وسيتوبلازم الخلية',
        descEn: 'Cytosolic viral proteins, mutated tumor antigens, or defective ribosomal products (DRiPs) are tagged with polyubiquitin chains by E3 ubiquitin ligases.',
        descAr: 'تُخلّق البروتينات الفيروسية أو الأورامية في الهيولى، ويتم وسمها بسلاسل متعدد اليوبيكويتين لتوجيهها إلى التحلل.',
        simplifiedNoteEn: 'The cell tags faulty or viral proteins with a "recycle tag" (Ubiquitin).',
        simplifiedNoteAr: 'تقوم الخلية بوضع وسم "سلة المهملات" (يوبيكويتين) على البروتينات الفيروسية أو التالفة.',
        molecules: [
          { name: 'Viral/Tumor Antigen', type: 'antigen' },
          { name: 'Polyubiquitin Tag', type: 'enzyme' },
          { name: 'E3 Ubiquitin Ligase', type: 'enzyme' }
        ]
      },
      {
        step: 2,
        titleEn: 'Proteasomal Degradation (20S/26S & Immunoproteasome)',
        titleAr: 'التحلل بالجسيم البروتيني (البروتيازوم المناعي)',
        compartmentEn: 'Proteasome Core (Cytoplasm)',
        compartmentAr: 'قلب البروتيازوم في الهيولى',
        descEn: 'The cylindrical 26S proteasome (or IFN-γ-induced immunoproteasome LMP2/LMP7/MECL-1) digests tagged antigens into short 8–11 amino acid oligopeptides with hydrophobic/basic C-termini.',
        descAr: 'يقوم الجسيم البروتيني بتقطيع السلاسل البروتينية إلى ببتيدات قصيرة تتألف بدقة من 8 إلى 11 حمضاً أمينياً مناسبة لشِق الارتباط.',
        simplifiedNoteEn: 'The proteasome acts like a molecular paper shredder, cutting proteins into 8–11 unit pieces.',
        simplifiedNoteAr: 'يعمل البروتيازوم كآلة تقطيع الورق، قاطعاً البروتينات لببتيدات دقيقة بطول 8-11 وحدة.',
        molecules: [
          { name: '26S Proteasome', type: 'enzyme' },
          { name: 'LMP2 / LMP7 Subunits', type: 'enzyme' },
          { name: '8–11 AA Oligopeptides', type: 'antigen' }
        ]
      },
      {
        step: 3,
        titleEn: 'Active TAP1/TAP2 Translocation into ER Lumen',
        titleAr: 'النقل الفعال عبر ناقل معالجة المستضد (TAP) إلى لمعة الشبكة الهيولية',
        compartmentEn: 'ER Membrane Transporter',
        compartmentAr: 'غشاء الشبكة الهيولية الباطنة',
        descEn: 'Transporter associated with Antigen Processing (TAP-1 and TAP-2 heterodimer) hydrolyzes ATP to pump peptides across the ER membrane into the ER lumen.',
        descAr: 'يستهلك مركب النقل TAP طاقة ATP لضخ الببتيدات المتولدة من الهيولى عبر غشاء الشبكة الهيولية إلى داخل لمعتها.',
        simplifiedNoteEn: 'TAP is an ATP-powered elevator pumping peptide slices from cytosol into the ER.',
        simplifiedNoteAr: 'ناقل TAP بمثابة مصعد يعمل بالطاقة يضخ الببتيدات من الهيولى إلى الشبكة الباطنة.',
        molecules: [
          { name: 'TAP-1 Subunit', type: 'receptor' },
          { name: 'TAP-2 Subunit', type: 'receptor' },
          { name: 'ATP Hydrolysis Energy', type: 'enzyme' }
        ]
      },
      {
        step: 4,
        titleEn: 'Peptide Loading Complex (PLC) & Assembly with β2m',
        titleAr: 'معقد تحميل الببتيد (PLC) وتثبيت السلسلة مع بيتا-2 ميكروغلوبيولين',
        compartmentEn: 'Endoplasmic Reticulum (ER) Lumen',
        compartmentAr: 'لمعة الشبكة الهيولية الباطنة',
        descEn: 'MHC Class I heavy α chain binds β2-microglobulin stabilized by Calnexin, Calreticulin, and ERp57. Tapasin bridges the empty MHC-I molecule directly to TAP. Once an 8-11 AA peptide binds tightly in the closed cleft, the fully folded MHC-I:β2m:peptide complex dissociates from PLC.',
        descAr: 'تتحد السلسلة الثقيلة ألفا مع بيتا-2 ميكروغلوبيولين بمساعدة مرافقات الطي (كالبكتين، كالسيكولين، تاباسين) التي تفتح شق الارتباط للببتيد القادم من TAP.',
        simplifiedNoteEn: 'Helpers (Tapasin, Calreticulin) hold the MHC-I groove open until a matching peptide docks snugly.',
        simplifiedNoteAr: 'بروتينات مرافقة (تاباسين، كالسيكولين) تفتح الثلم حتى يستقر الببتيد المناسب بداخله.',
        molecules: [
          { name: 'MHC-I α Chain (α1, α2, α3)', type: 'receptor' },
          { name: 'β2-Microglobulin (β2m)', type: 'receptor' },
          { name: 'Tapasin Bridge', type: 'enzyme' },
          { name: 'Calreticulin & ERp57', type: 'enzyme' }
        ]
      },
      {
        step: 5,
        titleEn: 'Exocytosis via Golgi & Presentation to CD8+ Cytotoxic T Cells',
        titleAr: 'النقل عبر جهاز غولجي والعرض الغشائي للخلايا التائية السامة (CD8+ CTL)',
        compartmentEn: 'Plasma Membrane Interface',
        compartmentAr: 'الغشاء البلازمي الخارجي',
        descEn: 'Stable trimeric MHC-I complex routes through Golgi cisternae in transport vesicles and is inserted on the outer plasma membrane, displaying the epitope for surveillance by CD8+ Cytotoxic T Lymphocytes.',
        descAr: 'ينتقل المعقد الثلاثي المستقر عبر حويصلات جهاز غولجي ليستقر على الغشاء البلازمي، حيث تفحصه الخلايا التائية القاتلة CD8+ بواسطة مستقبل TCR ومستقبل CD8 الإضافي.',
        simplifiedNoteEn: 'The loaded MHC-I is delivered to the outer cell surface, displaying the peptide badge for CD8+ CTL guards.',
        simplifiedNoteAr: 'يصل معقد MHC-I للسطح الخارجي، عارضاً شارة الببتيد لحراس المناعة CD8+ CTL.',
        molecules: [
          { name: 'Cell Surface MHC-I Trimer', type: 'receptor' },
          { name: 'CD8 Coreceptor', type: 'receptor' },
          { name: 'TCR αβ Heterodimer', type: 'receptor' }
        ]
      }
    ],
    mhc2: [
      {
        step: 1,
        titleEn: 'Uptake of Exogenous Pathogen into Endosomes / Phagosomes',
        titleAr: 'بلعمة والتقاط المستضد الخارجي داخل الجسيمات الداخلية (Endosomes)',
        compartmentEn: 'APC Membrane & Early Endosome',
        compartmentAr: 'غشاء الخلية العارضة والجسيم البالع',
        descEn: 'Extracellular bacteria, fungal spores, or extracellular proteins are internalized by professional APCs (Dendritic cells, Macrophages, B cells) via phagocytosis, receptor-mediated endocytosis, or pinocytosis.',
        descAr: 'تقوم الخلايا العارضة المحترفة (التغصنية، البلعميات، والخلايا البائية) بابتلاع المستضدات الخارجية ونقلها إلى داخل جسيم بالوعي.',
        simplifiedNoteEn: 'Professional scout cells engulf outside microbes into bubble-like endosomes.',
        simplifiedNoteAr: 'تبتلع الخلايا العارضة المحترفة الجراثيم الخارجية داخل حويصلات بلعمية.',
        molecules: [
          { name: 'Extracellular Pathogen', type: 'antigen' },
          { name: 'Phagosome Bubble', type: 'receptor' },
          { name: 'Professional APC', type: 'receptor' }
        ]
      },
      {
        step: 2,
        titleEn: 'Endosomal Acidification & Proteolytic Cleavage (Cathepsins)',
        titleAr: 'تحميض الجسيم الداخلي والتفكيك بالإنزيمات الهاضمة (الكاثيبسين)',
        compartmentEn: 'Late Endosome / Lysosome (MIIC)',
        compartmentAr: 'الجسيم الداخلي المتأخر الحامضي',
        descEn: 'V-ATPase proton pumps drop internal pH to 4.5–5.0. Acid-activated endosomal proteases (Cathepsins B, D, L, S) fragment foreign proteins into 10–30+ amino acid peptides.',
        descAr: 'تنشط مضخات البروتون فينخفض الرقم الهيدروجيني وتنشط إنزيمات الكاثيبسين الحامضية لتقطيع المستضد إلى ببتيدات بطول 10 إلى 30+ حمضاً أمينياً (شق مفتوح الطرفين).',
        simplifiedNoteEn: 'Acid pumps lower the pH to 4.5, activating digestive enzymes (Cathepsins) to dissolve the pathogen.',
        simplifiedNoteAr: 'مضخات الحمض تخفض الرقم الهيدروجيني إلى 4.5 لتشغيل إنزيمات الهضم (الكاثيبسين) وتفكيك الجرثومة.',
        molecules: [
          { name: 'V-ATPase H+ Pump', type: 'enzyme' },
          { name: 'Cathepsins (B, D, L, S)', type: 'enzyme' },
          { name: '10–30+ AA Peptides', type: 'antigen' }
        ]
      },
      {
        step: 3,
        titleEn: 'Invariant Chain (Ii / CD74) Synthesis & Blocking in ER',
        titleAr: 'تخليق السلسلة الثابتة (Ii / CD74) وحجب شِق الارتباط داخل الشبكة الهيولية',
        compartmentEn: 'Endoplasmic Reticulum Lumen',
        compartmentAr: 'لمعة الشبكة الهيولية الباطنة',
        descEn: 'MHC Class II α and β chains synthesize in the ER. To prevent premature endogenous peptide binding, an Invariant chain trimer (Ii / CD74) inserts its CLIP segment directly into the open MHC-II groove and guides routing toward the endocytic pathway.',
        descAr: 'تُخلّق سلسلتا ألفا وبيتا لـ MHC-II في الشبكة الهيولية، وتقوم السلسلة الثابتة (Ii) بحجب شق الارتباط لمنع ارتباط الببتيدات الداخلية الذاتية عن طريق الخطأ.',
        simplifiedNoteEn: 'A safety cap (Invariant Chain) plugs the MHC-II groove inside the ER so it does not pick up self-proteins.',
        simplifiedNoteAr: 'سدادة أمان (السلسلة الثابتة Ii) تقفل ثلم MHC-II في الشبكة لتمنع التقاط بروتينات الخلية الذاتية.',
        molecules: [
          { name: 'MHC-II αβ Heterodimer', type: 'receptor' },
          { name: 'Invariant Chain (Ii / CD74)', type: 'enzyme' },
          { name: 'CLIP Segment', type: 'antigen' }
        ]
      },
      {
        step: 4,
        titleEn: 'Lysosomal Degradation of Ii to CLIP & HLA-DM Exchange Catalyst',
        titleAr: 'تفكيك السلسلة الثابتة إلى CLIP وتحفيز التبادل بواسطة جزيء HLA-DM',
        compartmentEn: 'MIIC Vesicle Compartment',
        compartmentAr: 'حجرة MIIC الحويصلية',
        descEn: 'In acidic MIIC vesicles, Cathepsin S cleaves the invariant chain, leaving only Class II-associated Invariant Chain Peptide (CLIP) lodged in the groove. The non-classical chaperone HLA-DM catalyzes the dissociation of CLIP, allowing high-affinity foreign peptides to bind.',
        descAr: 'يهضم الكاثيبسين السلسلة الثابتة تاركاً قطعة CLIP فقط، ثم يتدخل جزيء HLA-DM لخلع CLIP وربط الببتيد الجرثومي ذي الألفة العالية بدلاً منه.',
        simplifiedNoteEn: 'Cathepsin cuts the safety cap down to a small pin (CLIP), and helper HLA-DM plucks the pin out so foreign peptide binds.',
        simplifiedNoteAr: 'يقص الكاثيبسين السدادة ليبقى دبوس صغير (CLIP)، ثم يخلع الجزيء المساعد HLA-DM هذا الدبوس ليركب ببتيد الجرثومة.',
        molecules: [
          { name: 'CLIP Peptide Pin', type: 'antigen' },
          { name: 'HLA-DM Chaperone', type: 'enzyme' },
          { name: 'Antigenic Microbial Peptide', type: 'antigen' }
        ]
      },
      {
        step: 5,
        titleEn: 'Exocytosis to Surface & Presentation to CD4+ Helper T Cells',
        titleAr: 'الظهور على السطح الخارجي والعرض للخلايا التائية المساعدة (CD4+ Th)',
        compartmentEn: 'APC Surface Membrane',
        compartmentAr: 'سطح غشاء الخلية العارضة',
        descEn: 'Stable MHC Class II:peptide complex migrates to the cell surface, presenting the antigen to CD4+ T helper cells (Th1, Th2, Th17) for cytokine secretion or macrophage/B-cell licensing.',
        descAr: 'يصل المعقد المستقر إلى السطح ليقدم الببتيد للخلية التائية المساعدة (CD4+ Helper)، ما يحفز إفراز السيتوكينات وتنشيط البلعميات أو تحفيز الأضداد.',
        simplifiedNoteEn: 'MHC-II displays the microbial peptide to CD4+ Helper T cells to activate antibodies or macrophage killing.',
        simplifiedNoteAr: 'يعرض معقد MHC-II الببتيد الجرثومي على خلايا CD4+ المساعدة لتوجيه وتنشيط باقي الجيش المناعي.',
        molecules: [
          { name: 'Surface MHC-II Heterodimer', type: 'receptor' },
          { name: 'CD4 Coreceptor', type: 'receptor' },
          { name: 'TCR αβ (CD4+ T Cell)', type: 'receptor' }
        ]
      }
    ],
    threeSignal: [
      {
        step: 1,
        titleEn: 'Signal 1: Specific Antigen Recognition (TCR:pMHC + CD3/CD4/CD8)',
        titleAr: 'الإشارة الأولى: التعرف النوعي على المستضد (TCR:pMHC + CD3 مع CD4/CD8)',
        compartmentEn: 'Central Synapse (cSMAC)',
        compartmentAr: 'مركز المشبك المناعي (cSMAC)',
        descEn: 'TCR αβ chains bind the specific peptide within the MHC cleft. CD4 or CD8 coreceptor binds non-polymorphic MHC domains, bringing Lck kinase to phosphorylate ITAMs on CD3 γ, δ, ε and ζ chains. (Signal 1 alone without Signal 2 induces ANERGY or apoptosis).',
        descAr: 'يرتبط مستقبل TCR بالببتيد المتوضع على معقد MHC، ويتثبت CD4 أو CD8 على النطاق الثابت لـ MHC، ما يفعل إنزيمات Lck وفسفرة نطاقات ITAM على سلاسل CD3. (الإشارة 1 وحدها تؤدي إلى الخمول المناعي Anergy).',
        simplifiedNoteEn: 'Inserting the car key: TCR verifies the exact antigenic match.',
        simplifiedNoteAr: 'إدخال مفتاح السيارة في مكانه: يتعرف مستقبل TCR على المستضد المحدد بدقة.',
        molecules: [
          { name: 'TCR (Vα/Vβ)', type: 'receptor' },
          { name: 'pMHC Complex', type: 'antigen' },
          { name: 'CD3 Complex (ITAMs)', type: 'receptor' },
          { name: 'Lck Kinase', type: 'enzyme' }
        ]
      },
      {
        step: 2,
        titleEn: 'Signal 2: Costimulation (B7-1/B7-2 on APC <-> CD28 on T Cell)',
        titleAr: 'الإشارة الثانية: التحفيز المشترك (B7-1/B7-2 على APC مع CD28 على التائية)',
        compartmentEn: 'Peripheral Synapse (pSMAC)',
        compartmentAr: 'المنطقة المحيطية للمشبك المناعي',
        descEn: 'B7-1 (CD80) and B7-2 (CD86) upregulated on activated APCs bind CD28 on the naive T cell. This transmits survival signals, stabilizes IL-2 mRNA 20- to 30-fold, upregulates high-affinity IL-2Rα (CD25), and promotes vigorous clonal expansion. (CTLA-4 or PD-1 binding delivers inhibitory checkpoint brakes).',
        descAr: 'يرتبط جزيء B7 (CD80/CD86) على الخلية العارضة بمستقبل CD28 على التائية، ما يمنع الموت المبرمج ويثبت رنا السيتوكين IL-2 ويفعل مستقبل CD25 عالي الألفة للتكاثر النسيلي.',
        simplifiedNoteEn: 'Pressing the safety clutch: B7-CD28 confirms it is a genuine dangerous invader, triggering IL-2 clonal growth.',
        simplifiedNoteAr: 'ضغط دواسة الأمان: يؤكد ارتباط B7 مع CD28 أن الخطر حقيقي، فيطلق سيتوكين النمو IL-2 وتكاثر الخلايا.',
        molecules: [
          { name: 'B7-1 (CD80) / B7-2 (CD86)', type: 'receptor' },
          { name: 'CD28 Costimulator', type: 'receptor' },
          { name: 'IL-2 Growth Factor', type: 'cytokine' },
          { name: 'CD25 (High Affinity IL-2Rα)', type: 'receptor' }
        ]
      },
      {
        step: 3,
        titleEn: 'Signal 3: Instructive Cytokine Milieu & Lineage Differentiation',
        titleAr: 'الإشارة الثالثة: السيتوكينات الموجهة وتحديد سلالة التمايز الوظيفي',
        compartmentEn: 'T Cell Nucleus & Secretory Niche',
        compartmentAr: 'نواة الخلية التائية ومحيط الإفراز',
        descEn: 'Cytokines secreted by the APC and innate milieu dictate epigenetic reprogramming and master transcription factor expression: IL-12/IFN-γ -> Th1 (T-bet); IL-4 -> Th2 (GATA-3); IL-6/TGF-β/IL-23 -> Th17 (RORγt); TGF-β/IL-2 -> Treg (FoxP3).',
        descAr: 'تفرز الخلية العارضة سيتوكينات حاسمة توجه الخلية الناشطة لتتحول إلى نمط وظيفي محدد: IL-12 يوجه لـ Th1 (جين T-bet)، IL-4 يوجه لـ Th2 (جين GATA-3)، و IL-6 مع TGF-β يوجهان لـ Th17 (جين RORγt).',
        simplifiedNoteEn: 'GPS Navigation directions: Environmental cytokines dictate whether the cell becomes Th1, Th2, Th17, or Treg.',
        simplifiedNoteAr: 'توجيه الملاحة GPS: تحدد السيتوكينات المحيطة ما إذا كانت الخلية ستتخصص كـ Th1 أو Th2 أو Th17 أو Treg.',
        molecules: [
          { name: 'IL-12 -> Th1 (T-bet TF)', type: 'tf' },
          { name: 'IL-4 -> Th2 (GATA-3 TF)', type: 'tf' },
          { name: 'IL-6 + TGF-β -> Th17 (RORγt)', type: 'tf' },
          { name: 'TGF-β -> Treg (FoxP3 TF)', type: 'tf' }
        ]
      }
    ],
    ctlKilling: [
      {
        step: 1,
        titleEn: 'Conjugate Formation & Immunological Synapse Reorientation',
        titleAr: 'تشكل المشبك المناعي وإعادة توجيه الهيكل الخلوي نحو الخلية الهدف',
        compartmentEn: 'CTL - Target Cell Interface',
        compartmentAr: 'منطقة التماس بين الخلية السامة والهدف',
        descEn: 'CD8+ CTL recognizes viral/tumor pMHC Class I. Integrins (LFA-1:ICAM-1) tighten adhesion. The Microtubule Organizing Center (MTOC) and Golgi apparatus rotate toward the contact site.',
        descAr: 'تتعرف الخلية السامة CD8+ على معقد MHC-I المشوه. تعزز جزيئات الالتصاق LFA-1 المشبك، ويستدير مركز تنظيم الأنيبيبات الدقيقة (MTOC) مباشرة نحو الخلية المصابة.',
        simplifiedNoteEn: 'CTL locks onto the infected target cell and aims its weapons directly at it.',
        simplifiedNoteAr: 'تلتصق الخلية القاتلة بالهدف المصاب بإحكام وتوجه مدافع الحبيبات السامة نحوها مباشرة.',
        molecules: [
          { name: 'TCR : pMHC-I Contact', type: 'receptor' },
          { name: 'LFA-1 : ICAM-1 Adhesion', type: 'receptor' },
          { name: 'MTOC Polarization', type: 'enzyme' }
        ]
      },
      {
        step: 2,
        titleEn: 'Directional Granule Exocytosis into the Synaptic Cleft',
        titleAr: 'إفراز الحبيبات السامة الموجه نحو الفالق المشبكي',
        compartmentEn: 'Sealed Synaptic Cleft',
        compartmentAr: 'الفالق المشبكي المعزول',
        descEn: 'Lytic granules fuse specifically at the synapse membrane in a Ca2+-dependent process, releasing Perforin monomers, Granzymes (A, B, M), and Granulysin strictly into the sealed synaptic cleft to spare healthy bystanders.',
        descAr: 'تندمج الحبيبات السامة حصراً عند المشبك لتحرير البيرفورين والغرانزايم في فالق محكم الإغلاق لحماية الخلايا المجاورة السليمة من الأذى.',
        simplifiedNoteEn: 'Granules release Perforin & Granzyme only inside the tight seal, sparing innocent neighbor cells.',
        simplifiedNoteAr: 'تفرز الخلية الحبيبات القاتلة داخل الفالق المغلق فقط لحماية الخلايا السليمة المجاورة.',
        molecules: [
          { name: 'Perforin Monomers', type: 'enzyme' },
          { name: 'Granzyme B Protease', type: 'enzyme' },
          { name: 'Ca2+ Influx Signal', type: 'receptor' }
        ]
      },
      {
        step: 3,
        titleEn: 'Perforin Pore Polymerization & Granzyme B Entry',
        titleAr: 'بلمرة ثقوب البيرفورين ونفاذ إنزيم الغرانزايم B إلى داخل السيتوبلازم',
        compartmentEn: 'Target Cell Membrane & Cytosol',
        compartmentAr: 'غشاء وهيولى الخلية الهدف',
        descEn: 'In the presence of Ca2+, perforin monomers polymerize into 13-20 nm cylindrical transmembrane pores across the target membrane. Granzyme B enters the target cytosol via these pores or receptor-mediated endocytosis.',
        descAr: 'تتبلمر جزيئات البيرفورين في وجود الكالسيوم لتصنع ثقوباً أسطوانية بقطر 13-20 نانومتر، ينفذ عبرها إنزيم الغرانزايم B القاطع للبروتينات.',
        simplifiedNoteEn: 'Perforin drills cylindrical holes (15-20nm), allowing Granzyme B to march inside.',
        simplifiedNoteAr: 'يحفر البيرفورين ثقوباً أسطوانية (15-20 نانومتر) ليعبر من خلالها إنزيم الغرانزايم B.',
        molecules: [
          { name: 'Poly-Perforin Pores', type: 'enzyme' },
          { name: 'Cytosolic Granzyme B', type: 'enzyme' }
        ]
      },
      {
        step: 4,
        titleEn: 'Dual Caspase Activation Cascade & Bid Cleavage (Intrinsic + Extrinsic Apoptosis)',
        titleAr: 'شلال تفعيل الكاسباز المزدوج وقطع بروتين Bid (الموت الخلوي المبرمج)',
        compartmentEn: 'Target Cytoplasm & Mitochondria',
        compartmentAr: 'سيتوبلازم وميتاكوندريا الخلية الهدف',
        descEn: 'Granzyme B directly cleaves Procaspase-3 into active Caspase-3. Simultaneously, it cleaves Bid into tBid, causing mitochondrial outer membrane permeabilization (MOMP), Cytochrome C release, and Caspase-9 apoptosome activation. Caspase-activated DNase (CAD) cleaves DNA into internucleosomal fragments.',
        descAr: 'يقوم غرانزايم B بتفعيل كاسباز-3 مباشرة وقطع بروتين Bid لإطلاق السيتوكروم C من الميتاكوندريا وتفعيل كاسباز-9، ثم ينشط إنزيم CAD لتقطيع حمض DNA دون انفجار الخلية.',
        simplifiedNoteEn: 'Granzyme B triggers Caspase-3 and DNA shredding, executing quiet programmed suicide (Apoptosis).',
        simplifiedNoteAr: 'يشطر غرانزايم كاسباز-3 ويقطع الـ DNA، مسبباً انتحاراً ذاتياً منظماً وهادئاً (Apoptosis).',
        molecules: [
          { name: 'Active Caspase-3 & Caspase-7', type: 'enzyme' },
          { name: 'tBid -> Cytochrome C', type: 'antigen' },
          { name: 'CAD (DNA Fragmentation)', type: 'enzyme' }
        ]
      },
      {
        step: 5,
        titleEn: 'Fas / FasL (CD95 / CD178) Alternative Death Receptor Pathway',
        titleAr: 'مسار مستقبل الموت البديل: ارتباط Fas مع FasL (CD95 / CD178)',
        compartmentEn: 'Death Domain Receptor Complex',
        compartmentAr: 'معقد مستقبل الموت الغشائي',
        descEn: 'CTL membrane-bound FasL (CD178) cross-links Fas (CD95) trimer on target cells -> recruits FADD adapter -> forms DISC -> activates Procaspase-8 -> cleaves executioner Caspases-3/7 -> Apoptosis.',
        descAr: 'يرتبط ربيطة FasL على التائية القاتلة مع مستقبل Fas (CD95) على الخلية الهدف، فيجمع معقد DISC ويفعل كاسباز-8 ثم كاسباز-3، ما يطلق موتاً مبرمجاً منظماً دون التهاب.',
        simplifiedNoteEn: 'Alternative doorbell route: FasL touches Fas, triggering Caspase-8 and apoptotic death.',
        simplifiedNoteAr: 'طريق جرس الموت البديل: يضغط FasL على مستقبل Fas، فيفعل كاسباز-8 ويقود للموت المبرمج.',
        molecules: [
          { name: 'FasL (CD178) on CTL', type: 'receptor' },
          { name: 'Fas (CD95) Trimer', type: 'receptor' },
          { name: 'DISC & Caspase-8', type: 'enzyme' }
        ]
      }
    ],
    macrophageLoop: [
      {
        step: 1,
        titleEn: 'Phagocytosis of Intracellular Bacteria & IL-12 Secretion',
        titleAr: 'ابتلاع الجراثيم داخل الخلوية وإفراز السيتوكين المحفز IL-12',
        compartmentEn: 'Resting Macrophage Phagosome',
        compartmentAr: 'الجسيم البالع في البلعمية',
        descEn: 'Macrophage ingests microbes (e.g. M. tuberculosis) that inhibit phagolysosomal fusion. Sensing pathogen-associated patterns (TLRs) triggers the macrophage to secrete Interleukin-12 (IL-12) and present bacterial peptides on MHC Class II.',
        descAr: 'تبتلع البلعمية بكتيريا مثل السل (TB) التي تقاوم الهضم، فتقوم البلعمية بإفراز إنترلوكين-12 (IL-12) وعرض الببتيدات على MHC-II لطلب العون المناعي.',
        simplifiedNoteEn: 'Macrophage traps stubborn bacteria and cries for help by releasing IL-12.',
        simplifiedNoteAr: 'تبتلع البلعمية البكتيريا الصعبة وتطلب النجدة بإفراز إنترلوكين-12.',
        molecules: [
          { name: 'M. tuberculosis Pathogen', type: 'antigen' },
          { name: 'IL-12 Messenger Cytokine', type: 'cytokine' },
          { name: 'MHC-II Presentation', type: 'receptor' }
        ]
      },
      {
        step: 2,
        titleEn: 'CD4+ Th1 Recognition, CD40L Expression & IFN-γ Secretion',
        titleAr: 'تعرف الخلية المساعدة Th1 والتعبير عن CD40L وإفراز غاما إنترفيرون (IFN-γ)',
        compartmentEn: 'Th1 - Macrophage Synapse',
        compartmentAr: 'المشبك بين Th1 والبلعمية',
        descEn: 'Antigen-specific CD4+ Th1 cell recognizes pMHC-II and receives IL-12. Th1 upregulates CD40 Ligand (CD40L / CD154) on its surface and vigorously secretes Interferon-gamma (IFN-γ).',
        descAr: 'تتعرف الخلية Th1 المبرمجة على المعقد، وتستجيب لـ IL-12 فتعبر عن ربيطة CD40L على سطحها وتفرز كميات هائلة من سيتوكين غاما إنترفيرون (IFN-γ).',
        simplifiedNoteEn: 'Th1 answers the call by presenting CD40L and showering the macrophage with potent IFN-γ.',
        simplifiedNoteAr: 'تستجيب الخلية Th1 بالارتباط عبر CD40L وإطلاق سيل من غاما إنترفيرون IFN-γ.',
        molecules: [
          { name: 'CD40L (CD154) on Th1', type: 'receptor' },
          { name: 'Interferon-γ (IFN-γ)', type: 'cytokine' },
          { name: 'Th1 Master Regulator T-bet', type: 'tf' }
        ]
      },
      {
        step: 3,
        titleEn: 'Classical (M1) Macrophage Activation & Superoxide/NO Production',
        titleAr: 'التفعيل الكلاسيكي للمفرزات البلعمية (M1) وتوليد الجذور الحرة وأكسيد النتريك',
        compartmentEn: 'Activated M1 Phagolysosome',
        compartmentAr: 'الجسيم الحال للبلعمية M1 المفعلة',
        descEn: 'Dual stimulation via CD40:CD40L and IFN-γ binding triggers M1 classical activation: activates iNOS (yielding toxic Nitric Oxide, NO) and Phagocyte Oxidase (yielding Reactive Oxygen Species, ROS/H2O2/O2•-), upregulates lysosomal hydrolases, and destroys the intravesicular bacteria.',
        descAr: 'يؤدي التحفيز المزدوج (CD40 مع IFN-γ) إلى تفعيل النمط M1 القاتل: تشغيل إنزيم iNOS لإنتاج أكسيد النتريك (NO) وتشغيل أنزيم الأكسيداز لإنتاج مركبات الأكسجين التفاعلية (ROS) وهضم الجراثيم المتحصنة.',
        simplifiedNoteEn: 'The macrophage turns on its chemical burners: spraying corrosive Nitric Oxide (NO) and bleach (ROS) to kill the bacteria.',
        simplifiedNoteAr: 'تشعل البلعمية محارقها الكيميائية: أكسيد النتريك (NO) والجذور الحرة (ROS) لإبادة البكتيريا.',
        molecules: [
          { name: 'iNOS -> Nitric Oxide (NO)', type: 'enzyme' },
          { name: 'Phagocyte Oxidase -> ROS', type: 'enzyme' },
          { name: 'Lysosomal Hydrolases', type: 'enzyme' }
        ]
      },
      {
        step: 4,
        titleEn: 'Positive Feedback Loop Amplification & Granuloma Formation',
        titleAr: 'حلقة التغذية الراجعة الإيجابية وتشكل الورم الحبيبي (Granuloma)',
        compartmentEn: 'Infected Tissue Granuloma Focus',
        compartmentAr: 'بؤرة النسيج المصاب والورم الحبيبي',
        descEn: 'Activated M1 macrophage increases expression of MHC Class II, B7 costimulators, and secretes more IL-12/TNF-α, reinforcing Th1 recruitment. In chronic infections, sustained macrophage-Th1 interactions organize into protective Granulomas (Epithelioid cells & Langhans giant cells).',
        descAr: 'تفرز البلعميات المزيد من IL-12 و TNF-α وترفع تعبير MHC-II و B7، ما يضخم الاستجابة. وإذا استعصت الجرثومة يتحول التفاعل إلى ورم حبيبي (Granuloma) يحصر العدوى.',
        simplifiedNoteEn: 'Positive feedback: Macrophages secrete more IL-12, calling more Th1 cells, forming a protective wall (Granuloma).',
        simplifiedNoteAr: 'تغذية راجعة إيجابية: تفرز البلعميات المزيد من IL-12 لجلب مزيد من خلايا Th1 وتشكيل جدار عازل (ورم حبيبي Granuloma).',
        molecules: [
          { name: 'Amplified IL-12 & TNF-α', type: 'cytokine' },
          { name: 'Upregulated B7 & MHC-II', type: 'receptor' },
          { name: 'Granuloma (Langhans Cells)', type: 'antigen' }
        ]
      }
    ],
    crossPres: [
      {
        step: 1,
        titleEn: 'cDC1 Dendritic Cell Ingests Virus-Infected or Tumor Dead Cell',
        titleAr: 'الخلية التغصنية cDC1 تبتلع بقايا خلية مصابة بفيروس أو خلية ورمية',
        compartmentEn: 'Peripheral Tissue Ingestion',
        compartmentAr: 'النسيج المحيطي',
        descEn: 'Specialized conventional Dendritic Cells (CD8α+ / CD103+ cDC1) phagocytose dying, virus-infected cells or tumor apoptotic debris that cannot directly infect the DC itself.',
        descAr: 'تبتلع الخلايا التغصنية التخصصية (cDC1) حطام الخلايا الميتة أو المصابة بفيروس لا يصيب الخلايا التغصنية ذاتها.',
        simplifiedNoteEn: 'Scout Dendritic cell eats dead cell debris containing hidden viral proteins.',
        simplifiedNoteAr: 'تلتقط الخلية التغصنية حطام الخلايا الميتة الحاملة للبروتينات الفيروسية.',
        molecules: [
          { name: 'Infected Cell Apoptotic Debris', type: 'antigen' },
          { name: 'cDC1 Dendritic Cell', type: 'receptor' }
        ]
      },
      {
        step: 2,
        titleEn: 'Endosome-to-Cytosol Retrotranslocation (Sec61 / Endosomal Escape)',
        titleAr: 'الهروب العكسي للمستضد من الجسيم البالع إلى الهيولى السيتوبلازمية',
        compartmentEn: 'Phagosomal Membrane Channel',
        compartmentAr: 'غشاء الحويصل البالوعي',
        descEn: 'Instead of being restricted to standard lysosomal MHC-II digestion, viral antigens are retrotranslocated across the phagosomal membrane into the DC cytosol via translocon channels (Sec61 / Derlin-1).',
        descAr: 'بدلاً من هضمه الكامل داخل الجسيم الحال، يتم تهريب المستضد عبر قنوات الغشاء البالوعي إلى سيتوبلازم الخلية التغصنية.',
        simplifiedNoteEn: 'The magic trick: Viral proteins escape from the eating vesicle into the DC\'s internal cytosol kitchen.',
        simplifiedNoteAr: 'السر الميكانيكي: يهرب البروتين الفيروسي من الحويصل البلعمي إلى هيولى الخلية التغصنية الداخلية.',
        molecules: [
          { name: 'Sec61 / Derlin Translocon', type: 'receptor' },
          { name: 'Cytosolic Viral Antigen', type: 'antigen' }
        ]
      },
      {
        step: 3,
        titleEn: 'Cytosolic Proteasome Cleavage & TAP Transport into ER/Phagosome',
        titleAr: 'التقطيع بالبروتيازوم الهيولي والنقل عبر TAP إلى لمعة الشبكة الهيولية',
        compartmentEn: 'DC Cytosol & ER Loading',
        compartmentAr: 'هيولى وشبكة الخلية التغصنية',
        descEn: 'The cytosolic proteasome digests the retrotranslocated antigen into 8-11 AA peptides. TAP transporters pump these peptides back into the ER or directly into the phagosome lumen.',
        descAr: 'يهضم البروتيازوم السيتوبلازمي البروتين المهرب، ثم يضخه ناقل TAP إلى داخل الشبكة الهيولية لتحميله على MHC-I.',
        simplifiedNoteEn: 'The escaped protein is sliced by proteasome and pumped by TAP onto MHC Class I.',
        simplifiedNoteAr: 'يُقطع البروتين الهارب بالبروتيازوم ويضخه TAP ليُحمّل على معقد MHC-I.',
        molecules: [
          { name: '26S Proteasome', type: 'enzyme' },
          { name: 'TAP-1/2 Transporter', type: 'receptor' },
          { name: 'MHC-I Heavy Chain + β2m', type: 'receptor' }
        ]
      },
      {
        step: 4,
        titleEn: 'Cross-Priming of Naive CD8+ T Cells in Draining Lymph Nodes',
        titleAr: 'التنشيط المتصالب (Cross-Priming) للخلايا التائية القاتلة الساذجة (Naive CD8+)',
        compartmentEn: 'Lymph Node T-Cell Zone',
        compartmentAr: 'منطقة الخلايا التائية في العقدة اللمفاوية',
        descEn: 'The dendritic cell presents the exogenous viral/tumor peptide on MHC Class I along with high B7 costimulation, priming naive CD8+ T cells to generate virus-specific and tumor-specific Cytotoxic T Lymphocytes (CTLs).',
        descAr: 'تعرض الخلية التغصنية المستضد الخارجي على جزيئات MHC-I مع تحفيز B7 القوي، ما ينشط الخلايا التائية القاتلة الساذجة CD8+ لتصبح خلايا قاتلة فعالة ضد الفيروسات والأورام.',
        simplifiedNoteEn: 'The DC activates naive Killer CD8+ T cells to hunt the virus throughout the entire body.',
        simplifiedNoteAr: 'تدرّب الخلية التغصنية الخلايا القاتلة CD8+ وتطلقها لمطاردة الفيروس في كامل أنحاء الجسم.',
        molecules: [
          { name: 'Cross-Presented MHC-I:p', type: 'receptor' },
          { name: 'B7-1 / B7-2 Costimulation', type: 'receptor' },
          { name: 'Activated CD8+ CTL Clone', type: 'receptor' }
        ]
      }
    ]
  };

  const currentSteps = pathwaySteps[activeDiagram] || pathwaySteps.mhc1;
  const activeStepData = currentSteps[activeStep] || currentSteps[0];
  const activeAnalogy = simplifiedAnalogies[activeDiagram] || simplifiedAnalogies.mhc1;

  // Molecular badge color helper
  const getBadgeStyle = (type: string) => {
    switch (type) {
      case 'antigen':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'receptor':
        return 'bg-sky-100 text-sky-900 border-sky-300';
      case 'enzyme':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'cytokine':
        return 'bg-red-100 text-[#8b0a1a] border-red-300';
      case 'tf':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner with Slide 53 Identity & Simplify Concept Toggle */}
      <div className="bg-[#f2f2f2] border-t-4 border-[#8b0a1a] rounded-3xl p-6 sm:p-8 border border-gray-300 shadow-xl relative overflow-hidden text-gray-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#8b0a1a] text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                {isRtl ? 'المخططات البصرية والمسارات الدقيقة' : 'Visual Schematics & Pathway Architectures'}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-gray-200 text-gray-700 text-xs font-mono font-bold">
                Dr. Rana Habib Theme (#8b0a1a) | 53 Lecture Slides
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#8b0a1a]">
              {isRtl
                ? 'المخططات البصرية والمفاهيم التوضيحية للمناعة الخلوية'
                : 'High-Yield Cell-Mediated Immunity Visual Diagram Hub'}
            </h2>
            <p className="text-sm text-gray-700 mt-2 max-w-3xl leading-relaxed">
              {isRtl
                ? 'مخططات تفاعلية دقيقة مبنية بتقسيمات CSS Grid/Flexbox المطابقة لأسلوب الـ 53 شريحة، مع إمكانية تبسيط المفاهيم وتقليل العبء المعرفي.'
                : 'CSS Grid/Flexbox architectures mimicking the 53 lecture slides with consistent bilingual labels, cellular compartments, and simplified concept analogies.'}
            </p>
          </div>

          {/* Simplify Concept Switch */}
          <div className="flex items-center gap-2 self-start md:self-auto bg-white p-2 rounded-2xl border border-gray-300 shadow-sm">
            <button
              onClick={() => setSimplifyConcept(!simplifyConcept)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all ${
                simplifyConcept
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-400'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Lightbulb className={`w-4 h-4 ${simplifyConcept ? 'text-slate-950 fill-slate-950' : 'text-amber-600'}`} />
              <span>{simplifyConcept ? (isRtl ? 'وضع التبسيط مفعّل 💡' : 'Simplified Mode ON 💡') : (isRtl ? 'تبسيط المفهوم 💡' : 'Simplify Concept 💡')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Concept Master Box (when enabled) */}
      {simplifyConcept && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6 shadow-lg space-y-3 text-slate-900 transition-all animate-fadeIn">
          <div className="flex items-center justify-between border-b border-amber-200 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base shadow">
                💡
              </span>
              <div>
                <h4 className="text-sm font-black text-amber-900">
                  {isRtl ? activeAnalogy.analogyTitleAr : activeAnalogy.analogyTitleEn}
                </h4>
                <span className="text-[11px] text-amber-800 font-bold">
                  {isRtl ? 'تشبيه سريع ومبسط لتسهيل الاستيعاب وتثبيت المعلومة' : 'Plain-Language Analogy to Reduce Cognitive Load'}
                </span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-200 text-amber-900 px-3 py-1 rounded-full border border-amber-300">
              {isRtl ? 'قاعدة ذهبية' : 'Golden Rule'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm leading-relaxed">
            <div className="p-4 bg-white/90 rounded-2xl border border-amber-200 space-y-1">
              <span className="text-[11px] font-black uppercase text-amber-800">English Summary</span>
              <p className="text-slate-800 font-medium">{activeAnalogy.summaryEn}</p>
              <div className="mt-2 text-xs font-bold text-[#8b0a1a] pt-1 border-t border-amber-100">
                ★ {activeAnalogy.keyRuleEn}
              </div>
            </div>
            <div className="p-4 bg-white/90 rounded-2xl border border-amber-200 space-y-1 text-right" dir="rtl">
              <span className="text-[11px] font-black uppercase text-amber-800">الشرح المبسط بالعربية</span>
              <p className="text-slate-800 font-medium">{activeAnalogy.summaryAr}</p>
              <div className="mt-2 text-xs font-bold text-[#8b0a1a] pt-1 border-t border-amber-100">
                ★ {activeAnalogy.keyRuleAr}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pathway Diagrams Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {diagramsList.map((d) => {
          const isSelected = activeDiagram === d.id;
          return (
            <button
              key={d.id}
              onClick={() => {
                setActiveDiagram(d.id as any);
                setActiveStep(0);
              }}
              className={`p-3.5 rounded-2xl border text-start transition-all relative overflow-hidden flex flex-col justify-between shadow-sm ${
                isSelected
                  ? 'bg-white border-[#8b0a1a] text-[#8b0a1a] shadow-lg ring-2 ring-[#8b0a1a]/30'
                  : 'bg-[#f2f2f2] border-gray-300 text-gray-700 hover:border-[#8b0a1a]/50 hover:bg-white'
              }`}
            >
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#8b0a1a] block mb-1">
                  {d.badge}
                </span>
                <h4 className="text-xs font-black text-gray-900 leading-snug">
                  {isRtl ? d.titleAr : d.titleEn}
                </h4>
              </div>
              <span className="text-[10px] text-gray-500 font-mono mt-2 block font-bold">
                {d.slides}
              </span>
              {isSelected && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#8b0a1a]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Main Diagram Viewer Layout: CSS Grid & Flexbox Slide Format */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Step Flow Graphic */}
        <div className="lg:col-span-6 bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 shadow-xl flex flex-col justify-between space-y-5 text-gray-900">
          <div>
            {/* Stepper Header */}
            <div className="flex items-center justify-between border-b border-gray-300 pb-3 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-xl bg-[#8b0a1a] text-white font-black text-sm flex items-center justify-center shadow-md">
                  {activeStep + 1}
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-black text-[#8b0a1a]">
                    {activeStepData.titleEn}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-800" dir="rtl">
                    {activeStepData.titleAr}
                  </h4>
                </div>
              </div>
              <span className="text-xs text-gray-600 font-mono font-black bg-white px-3 py-1 rounded-full border border-gray-300">
                {activeStep + 1} / {currentSteps.length}
              </span>
            </div>

            {/* Visual Flexbox Compartment Flow Representation */}
            <div className="bg-white border border-gray-300 rounded-2xl p-4 sm:p-5 mb-4 shadow-inner space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-600 font-bold border-b border-gray-200 pb-2">
                <span>Cellular Locus: {activeStepData.compartmentEn}</span>
                <span dir="rtl">{activeStepData.compartmentAr}</span>
              </div>

              {/* Steps Progress Visual Chain */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                {currentSteps.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-2.5 rounded-xl border text-start text-xs transition-all ${
                      activeStep === idx
                        ? 'bg-[#8b0a1a] text-white font-black shadow-md scale-[1.02]'
                        : idx < activeStep
                        ? 'bg-red-50 border-red-200 text-[#8b0a1a] font-bold'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] mb-0.5">
                      <span>Step {idx + 1}</span>
                      {idx < activeStep && <CheckCircle2 className="w-3 h-3 text-emerald-600" />}
                    </div>
                    <div className="truncate font-semibold text-[10px]">{s.titleEn.split(':')[0]}</div>
                  </button>
                ))}
              </div>

              {/* Simplified Note Callout if enabled or available */}
              {activeStepData.simplifiedNoteEn && (
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs space-y-1 mt-3">
                  <div className="flex items-center gap-1.5 font-black text-amber-900">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>Plain Summary | الملخص السريع:</span>
                  </div>
                  <p className="text-slate-800 font-medium">{activeStepData.simplifiedNoteEn}</p>
                  <p className="text-slate-800 font-bold text-right pt-1 border-t border-amber-200" dir="rtl">
                    {activeStepData.simplifiedNoteAr}
                  </p>
                </div>
              )}
            </div>

            {/* Step Navigation Controls */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-40 font-bold text-xs shadow-sm transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isRtl ? 'الخطوة السابقة' : 'Previous Step'}</span>
              </button>

              <div className="flex items-center gap-1.5">
                {currentSteps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeStep === i ? 'bg-[#8b0a1a] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveStep((prev) => Math.min(currentSteps.length - 1, prev + 1))}
                disabled={activeStep === currentSteps.length - 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8b0a1a] text-white hover:bg-[#700714] disabled:opacity-40 font-bold text-xs shadow-md transition-all"
              >
                <span>{isRtl ? 'الخطوة التالية' : 'Next Step'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Side-by-Side Dual Language Step Breakdown & Molecular Badges */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-[#f2f2f2] border border-gray-300 rounded-3xl p-6 shadow-xl space-y-4 text-gray-900">
            <div className="border-b border-gray-300 pb-3 flex items-center justify-between">
              <span className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider font-mono">
                Bilingual Step Analysis | التحليل المزدوج للخطوة
              </span>
              <span className="text-xs font-bold text-gray-600 bg-white px-2.5 py-0.5 rounded-md border border-gray-300">
                {activeStepData.compartmentEn}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* English Column (LTR) */}
              <div className="space-y-2 text-left" dir="ltr">
                <h4 className="font-black text-[#8b0a1a] text-sm">
                  {activeStepData.titleEn}
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-semibold">
                  {activeStepData.descEn}
                </p>
              </div>

              {/* Arabic Column (RTL) */}
              <div className="space-y-2 text-right" dir="rtl">
                <h4 className="font-black text-[#8b0a1a] text-sm">
                  {activeStepData.titleAr}
                </h4>
                <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-bold">
                  {activeStepData.descAr}
                </p>
              </div>
            </div>

            {/* Color-Coded Molecular Key Players */}
            <div className="pt-3 border-t border-gray-300">
              <div className="text-xs font-black text-gray-700 mb-2 flex items-center justify-between">
                <span>Color-Coded Molecular Reagents | الجزيئات والعوامل المشاركة:</span>
                <span className="text-[10px] text-gray-500 font-mono font-bold">Classified</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeStepData.molecules.map((mol, mIdx) => (
                  <span
                    key={mIdx}
                    className={`px-3 py-1.5 rounded-xl border text-xs font-black shadow-sm flex items-center gap-1.5 ${getBadgeStyle(
                      mol.type
                    )}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current opacity-80" />
                    <span>{mol.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* High-Yield Clinical Pearl Card */}
          <div className="bg-white border-l-4 border-l-[#8b0a1a] border border-gray-300 rounded-2xl p-4 shadow-sm text-gray-900 space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8b0a1a]" />
              <span className="text-xs font-black text-[#8b0a1a] uppercase tracking-wider">
                فائدة امتحانية ومفتاح حفظ سريع (Dr. Rana Habib Slide Pearl)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              {activeDiagram === 'mhc1' &&
                'تذكر: قاعدة الرقم 8 (Rule of 8): MHC-I × CD8 = 8. الببتيدات قصيرة (8-11 حمضاً)، والمستضد دائماً داخلي/هيولي يتم تقطيعه بالبروتيازوم ونقله بـ TAP.'}
              {activeDiagram === 'mhc2' &&
                'تذكر: قاعدة الرقم 8: MHC-II × CD4 = 8. الببتيدات أطول (10-30+ حمضاً)، والسلسلة اللامتغيرة Ii تُستبدل بـ CLIP الذي يطرده HLA-DM.'}
              {activeDiagram === 'threeSignal' &&
                'بدون الإشارة 2 (CD28 مع B7)، تدخل الخلية في سبات وتحمّل مناعي (Anergy). الإشارة 3 تحدد نوع الاستجابة (Th1 للداخل خلوية، Th2 للديدان، Th17 للفطريات).'}
              {activeDiagram === 'ctlKilling' &&
                'القتل بـ CTL مباشر ونوعي جداً لا يؤذي الخلايا السليمة المجاورة بفضل المشبك المناعي الدقيق وإطلاق حبيبات البيرفورين والغرانزايم باتجاه الخلية المصابة حصراً.'}
              {activeDiagram === 'macrophageLoop' &&
                'البلعمية تفرز IL-12 لتنشيط Th1، والـ Th1 ترد بـ IFN-γ و CD40L لتنشيط البلعمية كلاسيكياً (M1) وإطلاق أكسيد النتريك القاتل للجراثيم داخل الخلوية.'}
              {activeDiagram === 'crossPres' &&
                'العرض المتصالب ضروري لتنشيط CD8+ ضد الفيروسات التي لا تصيب الخلايا التغصنية مباشرة أو ضد الخلايا الورمية.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
