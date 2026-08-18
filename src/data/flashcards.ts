import { Flashcard } from '../types/immunology';

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'Core Concepts',
    front: 'What are the 5 cardinal features of Adaptive Immunity?',
    frontArabic: 'ما هي الخصائص الجوهرية الخمس للمناعة التلاؤمية؟',
    back: '1. Specificity (antigen-specific epitopes)\n2. Diversity (vast receptor repertoire)\n3. Immunologic Memory (heightened secondary response)\n4. Self/Non-self Recognition (discrimination)\n5. Self-Limitation (returns to basal state to conserve energy)',
    backArabic: '1. النوعية والتخصص\n2. التنوع\n3. الذاكرة المناعية\n4. التمييز بين الذات وغير الذات\n5. الانضباط / التحديد الذاتي (حفظ الطاقة)',
    subtext: 'Slide 3: Adaptive immune defenses',
    slideRef: 'Slide 3',
    tags: ['Cardinal Features', 'Fundamentals']
  },
  {
    id: 'fc-2',
    category: 'Humoral vs Cellular',
    front: 'Compare Humoral vs Cell-Mediated Immunity in one sentence each.',
    frontArabic: 'قارن بين المناعة الخلطية والمتوسطة بالخلايا في جملة واحدة لكل منهما.',
    back: 'Humoral Immunity: Mediated by B cells & soluble antibodies targeting extracellular microbes and toxins in body fluids.\nCell-Mediated Immunity: Mediated by T cells (CD4+/CD8+) targeting intracellular microbes in phagosomes and cytoplasm.',
    backArabic: 'المناعة الخلطية: تقودها الخلايا B والأجسام المضادة السائلة لمكافحة الميكروبات خارج الخلوية.\nالمناعة المتوسطة بالخلايا: تقودها الخلايا T (المساعدة والسامة) لمكافحة الميكروبات داخل الخلوية.',
    subtext: 'Slides 4–8: Branches of Adaptive Immunity',
    slideRef: 'Slides 4–8',
    tags: ['Branches', 'B vs T cells']
  },
  {
    id: 'fc-3',
    category: 'Receptors',
    front: 'What chemical classes of antigens can BCR recognize vs TCR?',
    frontArabic: 'ما هي الفئات الكيميائية للمستضدات التي يتعرف عليها BCR مقابل TCR؟',
    back: 'BCR (B cells): Macromolecules (proteins, polysaccharides, lipids, nucleic acids), small chemicals in 3D conformational or linear forms.\nTCR (T cells): ONLY linear peptide fragments of proteins complexed with MHC molecules.',
    backArabic: 'مستقبل B: الجزيئات الكبيرة (بروتينات، سكريات، دهون، أحماض نووية) بشكل فراغي أو خطي.\nمستقبل T: فقط شظايا ببتيدية خطية من البروتينات مرتبطة بجزيئات MHC.',
    subtext: 'Slides 10–12: Antigen Receptors',
    slideRef: 'Slides 10–12',
    tags: ['BCR', 'TCR', 'Antigens']
  },
  {
    id: 'fc-4',
    category: 'MHC Architecture',
    front: 'Compare the structure and cellular expression of MHC Class I vs Class II.',
    frontArabic: 'قارن بنية وتوزع جزيئات MHC Class I مقابل MHC Class II.',
    back: 'MHC I: Polymorphic α chain (α1, α2, α3) + β2-microglobulin. Expressed on ALL nucleated cells. Binds CD8.\nMHC II: Heterodimer of α (α1, α2) and β (β1, β2) chains. Expressed ONLY on Professional APCs (DCs, Macrophages, B cells). Binds CD4.',
    backArabic: 'MHC I: سلسلة ألفا متعددة الأشكال + بيتا-2 ميكروغلوبولين. على جميع الخلايا ذات النواة. يرتبط بـ CD8.\nMHC II: ثنائي متغاير ألفا وبيتا. على الخلايا العارضة الاحترافية فقط. يرتبط بـ CD4.',
    subtext: 'Slides 19–21: MHC Structures',
    slideRef: 'Slides 19–21',
    tags: ['MHC I', 'MHC II', 'HLA']
  },
  {
    id: 'fc-5',
    category: 'Antigen Processing',
    front: 'Where are endogenous vs exogenous antigens processed, and onto which MHC?',
    frontArabic: 'أين تتم معالجة المستضدات الداخلية مقابل الخارجية، وعلى أي MHC تُعرض؟',
    back: 'Endogenous (Cytosolic): Degraded by Proteasome -> TAP transport -> Loaded in ER onto MHC Class I -> CD8+ CTLs.\nExogenous (Extracellular): Endocytosed -> Degraded in late endosomes/lysosomes -> Loaded in vesicles onto MHC Class II (after Invariant chain/CLIP removal) -> CD4+ Th cells.',
    backArabic: 'الداخلية: تحلل بالبروتيازوم -> نقل بـ TAP -> تحميل في الشبكة الهيولية على MHC I -> لخلايا CD8.\nالخارجية: بلعمة -> تحلل في الجسيمات الحالة -> تحميل على MHC II بعد إزالة السلسلة الثابتة -> لخلايا CD4.',
    subtext: 'Slides 23–24, 26: Antigen Processing',
    slideRef: 'Slides 23–24',
    tags: ['Proteasome', 'TAP', 'Endosome', 'Lysosome']
  },
  {
    id: 'fc-6',
    category: 'T Cell Activation',
    front: 'What are the 3 Signals required for full T lymphocyte activation?',
    frontArabic: 'ما هي الإشارات الثلاث المطلوبة لتفعيل الخلايا اللمفاوية التائية بالكامل؟',
    back: 'Signal 1: TCR binding to peptide-MHC (with CD3/ζ-chain signaling).\nSignal 2: Costimulation (B7-1/B7-2 on APC binding to CD28 on T cell).\nSignal 3: Cytokine milieu (IL-12, IL-4, IL-1/6/23, TGF-β) + autocrine IL-2 driving expansion/differentiation.',
    backArabic: 'الإشارة 1: ارتباط TCR بمركب الببتيد-MHC.\nالإشارة 2: التحفيز المشترك عبر ارتباط B7 بـ CD28.\nالإشارة 3: السيتوكينات المحفزة وتمايز النمط + إنترلوكين-2 للتكاثر.',
    subtext: 'Slides 29–33: Steps in T lymphocyte activation',
    slideRef: 'Slides 29–33',
    tags: ['Signal 1', 'Signal 2', 'Signal 3', 'B7', 'CD28']
  },
  {
    id: 'fc-7',
    category: 'Costimulation',
    front: 'What occurs if a naive T cell receives Signal 1 WITHOUT Signal 2?',
    frontArabic: 'ماذا يحدث إذا تلقت الخلية التائية الإشارة 1 دون الإشارة 2؟',
    back: 'The T cell enters a state of Anergy (functional unresponsiveness) or undergoes tolerance/apoptosis. It will not respond to subsequent antigen exposures.',
    backArabic: 'تدخل الخلية التائية في حالة خمول مناعي (Anergy) أو تفقد الاستجابة (Tolerance) وتفشل في التكاثر.',
    subtext: 'Slide 31: Role of costimulation in T cell activation',
    slideRef: 'Slide 31',
    tags: ['Anergy', 'Tolerance', 'Costimulation']
  },
  {
    id: 'fc-8',
    category: 'Cross-Presentation',
    front: 'Define Cross-Presentation and name the cell type that performs it.',
    frontArabic: 'عرّف العرض المتصالب واذكر نوع الخلية التي تقوم به.',
    back: 'Cross-presentation is the unique ability of specialized Dendritic Cells (DCs) to ingest exogenous antigens (from virally infected or dying tumor cells), shunt them to the cytosol, and present them on MHC Class I to naive CD8+ T cells (cross-priming).',
    backArabic: 'العرض المتصالب هو قدرة الخلايا التغصنية الفريدة على بلعمة مستضدات خارجية وعرضها على MHC Class I لتحفيز خلايا CD8+ التائية السامة.',
    subtext: 'Slides 34–35: Cross-presentation',
    slideRef: 'Slides 34–35',
    tags: ['Cross-Presentation', 'Dendritic Cells', 'CD8']
  },
  {
    id: 'fc-9',
    category: 'CTL Killing',
    front: 'What are the two lethal killing mechanisms of CD8+ Cytotoxic T Lymphocytes?',
    frontArabic: 'ما هما آليتا القتل القاتل للخلايا التائية السامة CD8+؟',
    back: '1. Perforin / Granzyme B: Perforin punches pores in target membrane; Granzyme B enters cytosol and activates caspases -> Apoptosis.\n2. Fas / FasL: CTL Fas Ligand binds Fas (CD95) death receptor on target cell -> Triggers Caspase cascade -> Apoptosis.',
    backArabic: '1. البيرفورين والجرانزيم ب: يثقب البيرفورين الغشاء ويدخل الجرانزيم ليفعل الكاسبازات -> موت مبرمج.\n2. مسار فاس/ربيطة فاس (Fas/FasL): ارتباط FasL بـ CD95 على الخلية الهدف -> تفعيل الكاسبازات -> موت مبرمج.',
    subtext: 'Slides 38–39: Killing mechanisms by CTLs',
    slideRef: 'Slides 38–39',
    tags: ['Perforin', 'Granzyme B', 'FasL', 'Apoptosis']
  },
  {
    id: 'fc-10',
    category: 'Th Subsets',
    front: 'List the master transcription factors and cytokines for Th1, Th2, and Th17.',
    frontArabic: 'اذكر عوامل النسخ الرئيسية والسيتوكينات لكل من Th1 و Th2 و Th17.',
    back: '• Th1: Inducer: IL-12/IFN-γ | TF: T-bet | Produces: IFN-γ (Macrophage activation, M1).\n• Th2: Inducer: IL-4 | TF: GATA-3 | Produces: IL-4, IL-5 (B cell IgE/IgG switch, Eosinophils).\n• Th17: Inducer: IL-1, IL-6, IL-23, TGF-β | TF: RORγt | Produces: IL-17 (Neutrophils, inflammation).',
    backArabic: '• Th1: عامل النسخ T-bet | ينتج IFN-γ (تفعيل البلاعم).\n• Th2: عامل النسخ GATA-3 | ينتج IL-4, IL-5 (تحويل IgE وتفعيل الحمضات).\n• Th17: عامل النسخ RORγt | ينتج IL-17 (تجنيد العدلات والالتهاب).',
    subtext: 'Slides 40–43: Development of Th effector cells',
    slideRef: 'Slides 40–43',
    tags: ['Th1', 'Th2', 'Th17', 'Transcription Factors']
  },
  {
    id: 'fc-11',
    category: 'Macrophage Activation',
    front: 'How does a Th1 cell activate an infected macrophage, and what does the macrophage produce?',
    frontArabic: 'كيف تفعل خلية Th1 البلاعم المصابة، وماذا تنتج البلاعم المفعلة؟',
    back: 'Th1 releases IFN-γ and engages CD40 on macrophage via CD40L.\nMacrophage produces: Reactive Oxygen Species (ROS), Nitric Oxide (NO), lysosomal enzymes (kills microbes in phagolysosomes), TNF, IL-1, chemokines (inflammation), IL-12 (boosts Th1), and upregulates B7/MHC.',
    backArabic: 'تفرز Th1 إنترفيرون غاما وترتبط بـ CD40 عبر CD40L.\nتنتج البلاعم: جذور الأكسجين التفاعلية (ROS)، أكسيد النيتريك (NO)، إنزيمات الجسيمات الحالة، TNF، IL-1، و IL-12 وتزيد من جزيئات B7 و MHC.',
    subtext: 'Slides 44–46: Activation of macrophages by Th1',
    slideRef: 'Slides 44–46',
    tags: ['IFN-gamma', 'ROS', 'NO', 'IL-12', 'M1 Macrophage']
  },
  {
    id: 'fc-12',
    category: 'Intracellular Pathogens',
    front: 'Explain CD4 and CD8 cooperation in macrophages harboring intracellular bacteria.',
    frontArabic: 'اشرح تعاون خلايا CD4 و CD8 في البلاعم التي تؤوي بكتيريا داخل خلوية.',
    back: 'When bacteria reside in both phagosomes and cytosol:\n1. CD4+ Th1 recognizes phagosomal antigens on MHC II -> secretes IFN-γ -> activates macrophage to kill vacuolar microbes.\n2. CD8+ CTL recognizes cytosolic escapee antigens on MHC I -> lyses infected macrophage -> eliminates intracellular infection reservoir.',
    backArabic: 'عندما توجد البكتيريا في الفجوات والهيولى معاً:\n1. تتعرف CD4+ Th1 على مستضدات الفجوات عبر MHC II وتفرز IFN-γ للقضاء عليها داخل الجسيم البلعمي.\n2. تتعرف CD8+ CTL على مستضدات الهيولى عبر MHC I وتقتل الخلية المصابة لإزالة المكمن.',
    subtext: 'Slides 48–49: Cooperation between CD4+ and CD8+',
    slideRef: 'Slides 48–49',
    tags: ['Cooperation', 'Phagosome', 'Cytosol', 'Eradication']
  },
  {
    id: 'fc-13',
    category: 'Cytokines',
    front: 'What is the principal biological action and cellular source of Interleukin-2 (IL-2)?',
    frontArabic: 'ما هو الفعل الحيوي الرئيسي والمصدر الخلوي لإنترلوكين-2؟',
    back: 'Principal Action: T cell growth stimulation, driving autocrine and paracrine clonal proliferation of activated T cells.\nCellular Source: CD4+ and CD8+ T cells.',
    backArabic: 'الفعل الحيوي: تحفيز نمو وتكاثر الخلايا التائية (عامل نمو ذاتي ومجاور).\nالمصدر: خلايا CD4+ و CD8+ التائية.',
    subtext: 'Slide 31, 53: Biologic actions of selected T cell cytokines',
    slideRef: 'Slide 53',
    tags: ['IL-2', 'Cytokines', 'Growth Factor']
  },
  {
    id: 'fc-14',
    category: 'Cytokines',
    front: 'What is the principal action and cellular source of TGF-beta (TGF-β)?',
    frontArabic: 'ما هو الفعل الحيوي والمصدر لـ TGF-β؟',
    back: 'Principal Action: Inhibition of T cell activation, suppression of inflammatory responses, promotion of tissue repair.\nCellular Source: CD4+ T cells (Tregs), Macrophages, and many other cell types.',
    backArabic: 'الفعل الحيوي: تثبيط تفعيل الخلايا التائية، كبح الاستجابة الالتهابية، وترميم الأنسجة.\nالمصدر: خلايا CD4+ (المنظمة Tregs)، البلاعم، وغيرها.',
    subtext: 'Slide 53: Biologic actions of selected T cell cytokines',
    slideRef: 'Slide 53',
    tags: ['TGF-beta', 'Immunosuppression', 'Treg']
  }
];
