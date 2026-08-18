export interface SlideItem {
  slideNumber: number;
  topicEn: string;
  topicAr: string;
  titleEn: string;
  titleAr: string;
  leadEn?: string;
  leadAr?: string;
  bulletsEn: string[];
  bulletsAr: string[];
  diagramType?: 'antigenReceptors' | 'mhc1' | 'mhc2' | 'synapse3Signals' | 'ctlPerforin' | 'th1Macrophage' | 'crossPres' | 'bcrVsTcr' | 'thSubsets' | 'ontogeny' | 'humoralVsCmi';
  diagramTitleEn?: string;
  diagramTitleAr?: string;
  calloutEn?: string;
  calloutAr?: string;
  slideNoteEn?: string;
  slideNoteAr?: string;
}

export const SLIDES_53: SlideItem[] = [
  {
    slideNumber: 1,
    topicEn: 'Course Overview & Introduction',
    topicAr: 'مقدمة المقرر والتعريف العام',
    titleEn: 'Adaptive Immunity (Cell-Mediated Immunity)',
    titleAr: 'المناعة التكيفية (المناعة المتوسطة بالخلايا)',
    leadEn: 'Cell-mediated immune responses against intracellular pathogens and tumor surveillance:',
    leadAr: 'الاستجابات المناعية المتوسطة بالخلايا ضد العوامل الممرضة داخل الخلوية والأورام:',
    bulletsEn: [
      'Adaptive immunity is the specialized branch of the immune system that adapts to microbial challenges.',
      'Mediated by antigen-specific lymphocytes (T and B cells).',
      'Course presented by Dr. Rana Habib, International University for Science & Technology (IUST).'
    ],
    bulletsAr: [
      'المناعة التكيفية (المكتسبة) هي الفرع المتخصص من الجهاز المناعي الذي يتلاءم ويتكيف مع التحديات الجرثومية.',
      'تتوسطها الخلايا اللمفاوية المتخصصة نوعياً للمستضد (الخلايا التائية والبائية).',
      'المقرر من إعداد الدكتورة رنا حبيب، الجامعة الدولية الخاصة للعلوم والتكنولوجيا (IUST).'
    ],
    calloutEn: 'Foundation: Adaptive immunity expands and differentiates in response to specific antigens.',
    calloutAr: 'قاعدة أساسية: المناعة التكيفية تتكاثر وتتمايز استجابة لمستضدات نوعية محددة.'
  },
  {
    slideNumber: 2,
    topicEn: 'Definition of Adaptive Immunity',
    topicAr: 'تعريف المناعة التكيفية / المكتسبة',
    titleEn: 'Definition & Characteristics of Adaptive Immunity',
    titleAr: 'تعريف وخصائص المناعة التكيفية (المكتسبة)',
    leadEn: 'Key hallmarks distinguishing adaptive from innate immunity:',
    leadAr: 'السمات الأساسية التي تميز المناعة التكيفية عن المناعة الفطرية:',
    bulletsEn: [
      'Requires the expansion and differentiation of lymphocytes in response to microbes before it can provide effective defense.',
      'Adapts dynamically to the presence of microbial invaders.',
      'Specialized, highly targeted, and extraordinarily potent compared to baseline innate immunity.'
    ],
    bulletsAr: [
      'تتطلب تكاثر وتمايز الخلايا اللمفاوية استجابةً للميكروبات قبل أن تتمكن من توفير دفاع فعال.',
      'تتكيف ديناميكياً مع وجود الغزاة الميكروبيين.',
      'تتميز بالتخصص العالي والقدرة الفائقة مقارنة بخطوط الدفاع الفطرية.'
    ],
    calloutEn: 'Takes several days to develop primary effector responses upon first exposure.',
    calloutAr: 'تستغرق عدة أيام لتطوير الاستجابة الأولية الفعالة عند التعرض الأول للمستضد.'
  },
  {
    slideNumber: 3,
    topicEn: 'Cardinal Features of Adaptive Immunity',
    topicAr: 'الخصائص الجوهرية للمناعة التكيفية',
    titleEn: 'Cardinal Features of Adaptive Immunity',
    titleAr: 'الخصائص الجوهرية للمناعة التكيفية',
    leadEn: 'The 5 essential properties governing all adaptive immune responses:',
    leadAr: 'الخصائص الخمس الجوهرية الحاكمة لكافة الاستجابات المناعية التكيفية:',
    bulletsEn: [
      'Specificity: Ensures distinct antigens elicit specific responses against minute molecular differences.',
      'Diversity: Enables the immune system to respond to a vast repertoire of varied microbial antigens.',
      'Memory: Leads to enhanced, faster, and larger responses to repeated exposures to the same antigen.',
      'Self / Non-self Discrimination: Tolerates host tissues while attacking foreign microbes.',
      'Self-limiting: Returns to basal resting state after pathogen clearance (contraction phase).'
    ],
    bulletsAr: [
      'النوعية (Specificity): تضمن أن المستضدات المتميزة تستثير استجابات خاصة وموجهة بدقة.',
      'التنوع (Diversity): يُمكّن الجهاز المناعي من الاستجابة لمليارات المستضدات الميكروبية المختلفة.',
      'الذاكرة المناعية (Memory): تؤدي إلى استجابات أسرع وأقوى وأكبر حجماً عند تكرار التعرض لنفس المستضد.',
      'التمييز بين الذات واللاذات: تحمل الأنسجة الذاتية ومهاجمة الميكروبات الغريبة.',
      'ذاتية التحديد (Self-limiting): العودة للحالة القاعدية الهادئة بعد القضاء على العامل الممرض.'
    ],
    calloutEn: 'Self-limitation conserves metabolic energy and prevents hyper-inflammatory destruction.',
    calloutAr: 'الانضباط الذاتي يحفظ الطاقة الحيوية ويمنع التدمير النسيجي الناجم عن فرط الالتهاب المستمر.'
  },
  {
    slideNumber: 4,
    topicEn: 'Types of Adaptive Immunity',
    topicAr: 'أنواع المناعة التكيفية',
    titleEn: 'Types of Adaptive Immunity: Humoral & Cell-Mediated',
    titleAr: 'أنواع المناعة التكيفية: الخلطية والمتوسطة بالخلايا',
    leadEn: 'Adaptive immunity is subdivided into two cooperative branches:',
    leadAr: 'تنقسم المناعة التكيفية إلى فرعين متكاملين وظيفياً:',
    bulletsEn: [
      'Humoral Immunity: Mediated by antibodies produced by B lymphocytes; protects extracellular fluids.',
      'Cell-Mediated Immunity (CMI): Mediated by T lymphocytes; protects intracellular and cellular niches.',
      'Both branches cooperate seamlessly to provide total host defense.'
    ],
    bulletsAr: [
      'المناعة الخلطية (Humoral Immunity): تتوسطها الأجسام المضادة المفرزة من الخلايا البائية، وتحمي السوائل خارج الخلوية.',
      'المناعة المتوسطة بالخلايا (Cell-Mediated Immunity): تتوسطها الخلايا اللمفاوية التائية، وتحمي البيئات داخل الخلوية.',
      'يتعاون الفرعان معاً بشكل متكامل لتوفير حماية مناعية شاملة للجسم.'
    ],
    diagramType: 'humoralVsCmi',
    diagramTitleEn: 'Two Arms of Adaptive Immunity',
    diagramTitleAr: 'فرعا المناعة التكيفية: الخلطية والخلوية'
  },
  {
    slideNumber: 5,
    topicEn: 'Humoral Immunity',
    topicAr: 'المناعة الخلطية (Humoral Immunity)',
    titleEn: 'Humoral Immunity Mechanics',
    titleAr: 'آليات المناعة الخلطية',
    leadEn: 'Defense against extracellular microbes and microbial toxins:',
    leadAr: 'الدفاع ضد الميكروبات خارج الخلوية والسموم الجرثومية:',
    bulletsEn: [
      'Mediated by molecules in the blood and mucosal secretions called antibodies.',
      'Produced by B lymphocytes (plasma cells).',
      'Primary defense against extracellular microbes and toxins in blood, mucosal lumens, and interstitial fluids.',
      'Antibodies neutralize microbial infectivity and target microbes for elimination by phagocytes and complement.'
    ],
    bulletsAr: [
      'تتوسطها جزيئات بروتينية في الدم والمفرزات المخاطية تسمى الأجسام المضادة (Antibodies).',
      'تُنتج وتُفرز بواسطة الخلايا اللمفاوية البائية بعد تمايزها إلى خلايا بلازمية.',
      'تشكل خط الدفاع الأساسي ضد الميكروبات خارج الخلوية والسموم في الدم وتجاويف الأغشية المخاطية.',
      'تعمل الأجسام المضادة على تحييد سمية الميكروبات ووسمها للبلعمة أو التدمير بالمتممة.'
    ]
  },
  {
    slideNumber: 6,
    topicEn: 'Cell-Mediated Immunity (CMI)',
    topicAr: 'المناعة المتوسطة بالخلايا (Cell-Mediated Immunity)',
    titleEn: 'Cell-Mediated Immunity Principles',
    titleAr: 'مبادئ المناعة المتوسطة بالخلايا (CMI)',
    leadEn: 'Defense against intracellular microbial niches:',
    leadAr: 'الدفاع ضد الميكروبات المتحصنة داخل الخلايا:',
    bulletsEn: [
      'Mediated by T lymphocytes (T cells).',
      'Provides defense against intracellular microbes (viruses, intracellular bacteria, protozoa).',
      'Microbes that survive and replicate inside macrophages or host cell cytoplasm are inaccessible to circulating antibodies.',
      'T cells promote destruction of microbes residing in phagocytes or lyse infected host cells directly.'
    ],
    bulletsAr: [
      'تتوسطها الخلايا اللمفاوية التائية (T lymphocytes).',
      'توفر الحماية والدفاع ضد الميكروبات داخل الخلوية (الفيروسات، البكتيريا داخل الخلوية، والطفيليات).',
      'الميكروبات التي تعيش وتتكاثر داخل البلعميات أو هيولى الخلايا لا تستطيع الأجسام المضادة الوصول إليها.',
      'تقوم الخلايا التائية بتحفيز تدمير الميكروبات داخل البلعميات أو قتل الخلايا المصابة مباشرة.'
    ],
    calloutEn: 'Antibodies cannot cross the intact host cell lipid bilayer.',
    calloutAr: 'الأجسام المضادة غير قادرة على عبور الغشاء الدهني المضاعف للخلايا الحية السليمة.'
  },
  {
    slideNumber: 7,
    topicEn: 'Humoral vs Cell-Mediated Summary Table',
    topicAr: 'جدول مقارنة المناعة الخلطية والمتوسطة بالخلايا',
    titleEn: 'Comparison: Humoral vs Cell-Mediated Immunity',
    titleAr: 'مقارنة: المناعة الخلطية مقابل المناعة المتوسطة بالخلايا',
    leadEn: 'Direct comparison matching Dr. Rana Habib’s presentation slide:',
    leadAr: 'مقارنة مباشرة مطابقة لشريحة الدكتورة رنا حبيب:',
    bulletsEn: [
      'Humoral: B lymphocytes -> Secreted Antibodies -> Extracellular microbes -> Block infections and eliminate microbes.',
      'Cell-Mediated (Phagocytosed): Helper T lymphocytes -> Cytokines -> Microbes inside macrophage phagosomes -> Kill ingested microbes.',
      'Cell-Mediated (Cytosolic): Cytotoxic T lymphocytes (CTLs) -> Lytic granules -> Microbes replicating in cytosol -> Direct target cell lysis.'
    ],
    bulletsAr: [
      'الخلطية: خلايا بائية -> أجسام مضادة مفرزة -> ميكروبات خارج خلوية -> حصر العدوى وتحييد الميكروبات.',
      'الخلوية (المبتلعة): خلايا تائية مساعدة (Helper) -> سيتوكينات -> ميكروبات داخل بالوعات البلعميات -> تفعيل القتل البلعمي.',
      'الخلوية (الهيولية): خلايا تائية قاتلة (CTLs) -> حبيبات حالة -> ميكروبات متكاثرة بالهيولى -> حل وقتل الخلية المصابة.'
    ]
  },
  {
    slideNumber: 8,
    topicEn: 'Transfer of Immunity',
    topicAr: 'نقل المناعة (Passive Transfer)',
    titleEn: 'Immunity Transfer: Active vs Passive',
    titleAr: 'نقل المناعة: المناعة الفاعلة مقابل المناعة المنفعلة',
    leadEn: 'How immunity is transferred between individuals experimentally and clinically:',
    leadAr: 'كيفية انتقال المناعة بين الأفراد مخبرياً وسريرياً:',
    bulletsEn: [
      'Humoral immunity can be passively transferred to naive individuals by serum containing antibodies (e.g. maternal IgG across placenta, antivenom).',
      'Cell-mediated immunity can only be transferred adoptively by viable, intact T lymphocytes, never by serum.',
      'Active immunity: Induced by infection or vaccination; generates durable memory.',
      'Passive immunity: Conferred by preformed antibodies or cells; provides immediate but temporary protection.'
    ],
    bulletsAr: [
      'المناعة الخلطية يمكن نقلها منفعلاً إلى أفراد غير ملقحين بواسطة المصل الحاوي على الأضداد (مثل أضداد الأم عبر المشيمة، ومضادات السموم).',
      'المناعة المتوسطة بالخلايا لا يمكن نقلها إلا بنقل خلايا تائية حية وسليمة، ولا تنتقل بالمصل أبداً.',
      'المناعة الفاعلة: تُكتسب بالعدوى أو اللقاح وتولد ذاكرة طويلة الأمد.',
      'المناعة المنفعلة: تُكتسب بإعطاء أضداد جاهزة وتوفر حماية فورية مؤقتة دون ذاكرة.'
    ]
  },
  {
    slideNumber: 9,
    topicEn: 'Development & Maturation of Lymphocytes',
    topicAr: 'تطور ونضج الخلايا اللمفاوية',
    titleEn: 'Lymphocyte Maturation & Generative Organs',
    titleAr: 'نضج الخلايا اللمفاوية والأعضاء المولدة',
    leadEn: 'Origin and anatomical sites of B and T cell ontogeny:',
    leadAr: 'منشأ ومواقع النضج التشريحية للخلايا البائية والتائية:',
    bulletsEn: [
      'All lymphocytes originate from common hematopoietic stem cells in the Bone Marrow.',
      'B lymphocytes mature and complete their development within the Bone Marrow (Generative / Primary lymphoid organ).',
      'T lymphocytes originate in Bone Marrow but migrate to the Thymus to mature and undergo selection.',
      'Mature naive lymphocytes then exit into the circulation and populate peripheral secondary lymphoid organs (Lymph nodes, Spleen).'
    ],
    bulletsAr: [
      'تنشأ جميع الخلايا اللمفاوية من خلايا جذعية مكونة للدم في نقي العظم (Bone Marrow).',
      'الخلايا اللمفاوية البائية تنضج وتكتمل جاهزيتها داخل نقي العظم نفسه (عضو لمفاوي أولي/مولد).',
      'الخلايا اللمفاوية التائية تنشأ بنقي العظم ثم تهاجر إلى الغدة الصعترية (Thymus) لتنضج وتخضع للاختيار.',
      'تهاجر الخلايا الناضجة الساذجة إلى الأعضاء اللمفاوية المحيطية الثانوية (العقد اللمفاوية والطحال).'
    ],
    diagramType: 'ontogeny',
    diagramTitleEn: 'Lymphocyte Ontogeny: Bone Marrow & Thymus',
    diagramTitleAr: 'تطور الخلايا اللمفاوية: نقي العظم والتيموس'
  },
  {
    slideNumber: 10,
    topicEn: 'Antigen Receptors in Adaptive Immunity',
    topicAr: 'مستقبلات المستضد في المناعة التكيفية',
    titleEn: 'Antigen Receptors in adaptive immunity',
    titleAr: 'مستقبلات المستضد في المناعة التكيفية (المكتسبة)',
    leadEn: 'B and T lymphocytes express different receptors that recognize antigens:',
    leadAr: 'تُعبّر الخلايا اللمفاوية البائية والتائية عن مستقبلات مختلفة تتعرف على المستضدات (مولدات الضد):',
    bulletsEn: [
      'membrane-bound antibodies on B cells',
      'T cell receptors (TCRs) on T lymphocytes.'
    ],
    bulletsAr: [
      'أجسام مضادة مرتبطة بالغشاء على الخلايا البائية.',
      'مستقبلات الخلايا التائية (TCRs) على الخلايا اللمفاوية التائية.'
    ],
    diagramType: 'antigenReceptors',
    diagramTitleEn: 'Antigen Receptors on B and T Lymphocytes (BCR vs TCR)',
    diagramTitleAr: 'مستقبلات المستضد على الخلايا البائية والتائية'
  },
  {
    slideNumber: 11,
    topicEn: 'B Cell Antigen Recognition (BCR)',
    topicAr: 'التعرف على المستضد بواسطة الخلايا البائية (BCR)',
    titleEn: 'B Cell Antigen Recognition Features',
    titleAr: 'خصائص التعرف على المستضد بالخلايا البائية',
    leadEn: 'How B cell membrane antibodies interact directly with native antigens:',
    leadAr: 'كيفية تفاعل الأجسام المضادة الغشائية للبائية مع المستضدات الأصلية:',
    bulletsEn: [
      'B cell receptors (membrane IgM/IgD) recognize a wide range of native chemical structures directly.',
      'Can recognize intact proteins, polysaccharides, lipids, and small nucleic acids/chemicals.',
      'Antigen binding does NOT require antigen processing or MHC molecule presentation.',
      'Recognizes 3-dimensional conformational surfaces and exposed spatial epitopes.'
    ],
    bulletsAr: [
      'تتعرف مستقبلات الخلايا البائية على طيف واسع من البنى الكيميائية بحالتها الطبيعية مباشرة.',
      'قادرة على التعرف على البروتينات السليمة، السكريات المتعددة، الشحوم، والمركبات الكيميائية.',
      'ارتباط المستضد لا يتطلب معالجة بروتينية ولا يحتاج إلى جزيئات معقد التوافق النسيجي MHC.',
      'تتعرف على النتوءات الفراغية السطحية ثلاثية الأبعاد (Conformational Epitopes).'
    ]
  },
  {
    slideNumber: 12,
    topicEn: 'T Cell Antigen Recognition (TCR)',
    topicAr: 'التعرف على المستضد بواسطة الخلايا التائية (TCR)',
    titleEn: 'T Cell Antigen Recognition: Strict MHC Restriction',
    titleAr: 'التعرف على المستضد بالخلايا التائية: حصر معقد MHC',
    leadEn: 'Strict biochemical requirements for TCR antigen binding:',
    leadAr: 'الشروط البيوكيميائية الصارمة لارتباط مستقبل التائية TCR:',
    bulletsEn: [
      'T cell receptors (TCRs) recognize ONLY short linear peptide fragments of foreign proteins.',
      'Peptides MUST be bound to Major Histocompatibility Complex (MHC) molecules displayed on Antigen-Presenting Cells (APCs).',
      'T cells do not recognize free soluble antigens or non-protein determinants.',
      'Dual specificity: TCR recognizes both the foreign peptide epitope and polymorphic residues of the self MHC molecule (MHC Restriction).'
    ],
    bulletsAr: [
      'مستقبلات الخلايا التائية (TCRs) تتعرف حصراً على ببتيدات خطية قصيرة مشتقة من البروتينات الأجنبية.',
      'يجب أن تكون الببتيدات محمولة ومعروضة على جزيئات معقد التوافق النسيجي الكبير (MHC) على سطوح الخلايا العارضة.',
      'الخلايا التائية لا تتعرف إطلاقاً على المستضدات الحرة الذائبة أو المستضدات غير البروتينية.',
      'النوعية المزدوجة: يتعرف TCR على الببتيد الأجنبي وعلى ثمالات جزيء MHC الذاتي معاً (MHC Restriction).'
    ],
    diagramType: 'bcrVsTcr',
    diagramTitleEn: 'BCR (Native Antigens) vs TCR (pMHC Complex)',
    diagramTitleAr: 'مقارنة: مستقبل BCR (مستضد طبيعي) مقابل TCR (معقد pMHC)'
  },
  {
    slideNumber: 13,
    topicEn: 'The Central Role of APCs',
    topicAr: 'الدور المحوري للخلايا العارضة للمستضد (APCs)',
    titleEn: 'Antigen-Presenting Cells (APCs)',
    titleAr: 'الخلايا العارضة للمستضد (APCs)',
    leadEn: 'Specialized cells responsible for capturing, processing, and displaying antigens to T cells:',
    leadAr: 'خلايا متخصصة مسؤولة عن التقاط ومعالجة وعرض المستضدات على الخلايا التائية:',
    bulletsEn: [
      'T cells rely on specialized Antigen-Presenting Cells (APCs) to capture microbial antigens, transport them to lymphoid organs, and display them.',
      'Dendritic Cells (DCs) are the most potent professional APCs for activating naive T cells (Priming).',
      'Macrophages present antigens to CD4+ effector T cells to solicit macrophage-activating signals (IFN-γ).',
      'B lymphocytes present internalized protein antigens to CD4+ helper T cells to receive help for antibody production.'
    ],
    bulletsAr: [
      'تعتمد الخلايا التائية على خلايا عارضة متخصصة لالتقاط المستضدات ونقلها للأعضاء اللمفاوية وعرضها.',
      'الخلايا التغصنية (Dendritic Cells) هي أقوى الخلايا العارضة المحترفة لتنشيط الخلايا التائية الساذجة لأول مرة.',
      'البلعميات الكبيرة تعرض المستضدات على خلايا Th1 المساعدة لتتلقى إشارات التنشيط البلعمي الفائق (IFN-γ).',
      'الخلايا اللمفاوية البائية تعرض المستضدات المبتلعة على الخلايا التائية المساعدة لتتلقى العون لإفراز الأضداد.'
    ]
  },
  {
    slideNumber: 14,
    topicEn: 'Dendritic Cells: The Master APCs',
    topicAr: 'الخلايا التغصنية: سيدة الخلايا العارضة',
    titleEn: 'Dendritic Cells: Bridge Between Innate & Adaptive',
    titleAr: 'الخلايا التغصنية: جسر الوصل بين المناعة الفطرية والتكيفية',
    leadEn: 'Strategic location and functional maturation of Dendritic Cells:',
    leadAr: 'الموقع الاستراتيجي والنضج الوظيفي للخلايا التغصنية:',
    bulletsEn: [
      'Reside strategically at epithelial barriers and tissue interfaces (skin, respiratory, and GI tracts).',
      'Immature DCs capture microbial antigens via phagocytosis, receptor-mediated endocytosis, or pinocytosis.',
      'Microbial sensing through TLRs triggers DC maturation and migration via lymphatics to draining lymph nodes.',
      'Mature DCs express high levels of MHC Class II and B7 costimulators (CD80/CD86) to prime naive T cells.'
    ],
    bulletsAr: [
      'تتوضع استراتيجياً عند الحواجز الظهارية وأسطح التماس مع البيئة الخارجية (الجلد، الجهاز التنفسي والهضمي).',
      'تلتقط الخلايا التغصنية غير الناضجة المستضدات بكفاءة عبر البلعمة والارتشاف الخلوي.',
      'استشعار الميكروبات عبر مستقبلات TLR يحفز نضج الخلايا التغصنية وهجرتها عبر الأوعية اللمفاوية للعقد اللمفاوية.',
      'تُعبر الخلايا التغصنية الناضجة عن مستويات فائقة من MHC-II وجزيئات التحفيز المشترك B7 (CD80/CD86).'
    ]
  },
  {
    slideNumber: 15,
    topicEn: 'Capture & Display of Microbial Antigens',
    topicAr: 'التقاط وعرض المستضدات الجرثومية',
    titleEn: 'Antigen Capture & Lymph Node Migration',
    titleAr: 'التقاط المستضد والهجرة نحو العقدة اللمفاوية',
    leadEn: 'How peripheral microbes are transported to the site of T cell activation:',
    leadAr: 'كيفية نقل الميكروبات المحيطية إلى مراكز تنشيط الخلايا التائية:',
    bulletsEn: [
      'Microbes entering through epithelial portals are captured by resident dendritic cells.',
      'DCs lose their tissue adhesiveness and upregulate the chemokine receptor CCR7.',
      'CCR7 guides DCs along CCL19/CCL21 chemokine gradients into the paracortex (T cell zone) of draining lymph nodes.',
      'Circulating naive T cells entering through HEVs encounter the antigen-bearing mature DCs.'
    ],
    bulletsAr: [
      'الميكروبات التي تعبر بوابات الظهارة تلتقطها الخلايا التغصنية المتمركزة في الأنسجة.',
      'تفقد الخلايا التغصنية التصاقها النسيجي وتعبر عن مستقبل الجذب الكيميائي CCR7.',
      'يوجه CCR7 الخلايا التغصنية عبر تدرج كيموكينات CCL19/CCL21 إلى منطقة الخلايا التائية بالعقدة اللمفاوية.',
      'الخلايا التائية الساذجة القادمة من الدم عبر الوريدات الباطنية العالية (HEV) تلتقي بالخلايا التغصنية العارضة.'
    ]
  },
  {
    slideNumber: 16,
    topicEn: 'The Major Histocompatibility Complex (MHC)',
    topicAr: 'معقد التوافق النسيجي الكبير (MHC)',
    titleEn: 'Major Histocompatibility Complex (MHC) Overview',
    titleAr: 'نظرة عامة على معقد التوافق النسيجي الكبير (MHC)',
    leadEn: 'Genetic locus and discovery of histocompatibility molecules:',
    leadAr: 'الموقع الجيني واكتشاف جزيئات التوافق النسيجي:',
    bulletsEn: [
      'MHC is a large genetic region encoding cell surface glycoproteins that display peptide antigens to T lymphocytes.',
      'Originally discovered as the genetic locus responsible for rapid tissue graft rejection.',
      'In humans, the MHC is called the Human Leukocyte Antigen (HLA) complex, located on chromosome 6.',
      'Two principal classes: MHC Class I and MHC Class II, specialized for different T cell subsets.'
    ],
    bulletsAr: [
      'معقد MHC هو منطقة جينية كبرى تشفر بروتينات سكرية غشائية مسؤولة عن عرض الببتيدات على الخلايا التائية.',
      'اكتُشف في الأصل بوصفه الموقع الجيني المسؤول عن الرفض المناعي السريع لزرع الأعضاء والأنسجة.',
      'يسمى معقد MHC في الإنسان بمعقد مستضد الكريات البيضاء البشرية (HLA) ويقع على الصبغي رقم 6.',
      'ينقسم إلى صنفين رئيسيين: الصنف الأول (MHC-I) والصنف الثاني (MHC-II)، يتخصص كل منهما بنمط محدد من التائيات.'
    ]
  },
  {
    slideNumber: 17,
    topicEn: 'MHC Class I Structure',
    topicAr: 'بنية معقد التوافق النسيجي الصنف الأول (MHC-I)',
    titleEn: 'Structure of MHC Class I Molecules',
    titleAr: 'بنية جزيئات معقد التوافق النسيجي الصنف الأول',
    leadEn: 'Molecular architecture of MHC Class I:',
    leadAr: 'البنية الجزيئية لمعقد التوافق النسيجي الصنف الأول:',
    bulletsEn: [
      'Consists of a polymorphic α (heavy) chain (45 kDa) non-covalently linked to an invariant β2-microglobulin chain (12 kDa).',
      'The α chain folds into three extracellular domains: α1, α2, and α3.',
      'The peptide-binding groove is formed by the α1 and α2 domains (closed ends, binds peptides of 8–11 amino acids).',
      'The α3 domain is invariant and binds the CD8 co-receptor of cytotoxic T cells.'
    ],
    bulletsAr: [
      'يتكون من سلسلة ثقيلة ألفا (α) متعددة الأشكال (45 كيلو دالتون) مرتبطة بسلسلة ثابتة تسمى بيتا-2 ميكروغلوبيولين (12 كيلو دالتون).',
      'تنطوي سلسلة ألفا إلى ثلاثة نطاقات خارج خلوية: α1 و α2 و α3.',
      'يتشكل شق ارتباط الببتيد من النطاقين α1 و α2 (مغلق الطرفين، يتسع لببتيدات طولها 8-11 حمضاً أمينياً).',
      'النطاق α3 ثابت البنية وهو الموقع المحدد لارتباط مستقبل التمايز CD8 الخاص بالخلايا القاتلة.'
    ]
  },
  {
    slideNumber: 18,
    topicEn: 'MHC Class II Structure',
    topicAr: 'بنية معقد التوافق النسيجي الصنف الثاني (MHC-II)',
    titleEn: 'Structure of MHC Class II Molecules',
    titleAr: 'بنية جزيئات معقد التوافق النسيجي الصنف الثاني',
    leadEn: 'Molecular architecture of MHC Class II:',
    leadAr: 'البنية الجزيئية لمعقد التوافق النسيجي الصنف الثاني:',
    bulletsEn: [
      'Consists of two non-covalently associated polymorphic transmembrane chains: α chain (30–34 kDa) and β chain (26–29 kDa).',
      'The peptide-binding groove is formed jointly by the α1 and β1 domains (open ends, accommodates peptides of 10–30+ amino acids).',
      'The non-polymorphic β2 domain contains the binding site for the CD4 co-receptor of helper T cells.',
      'Both chains contribute to peptide binding and polymorphism.'
    ],
    bulletsAr: [
      'يتكون من سلسلتين غشائيتين متعددتي الأشكال مرتبطتين غير تساهمياً: سلسلة ألفا (30-34 ك.د) وسلسلة بيتا (26-29 ك.د).',
      'يتشكل شق ارتباط الببتيد بالمشاركة بين النطاقين α1 و β1 (مفتوح الطرفين، يتسع لببتيدات طويلة 10-30+ حمضاً أمينياً).',
      'النطاق الثابت β2 يحتوي على موقع الارتباط النوعي لمستقبل التمايز CD4 الخاص بالخلايا التائية المساعدة.',
      'تسهم كلتا السلسلتين (ألفا وبيتا) في تثبيت الببتيد وتعدد الأشكال الجيني.'
    ]
  },
  {
    slideNumber: 19,
    topicEn: 'Cellular Distribution of MHC Molecules',
    topicAr: 'التوزع الخلوي لجزيئات MHC',
    titleEn: 'Cellular Expression Patterns of MHC I & II',
    titleAr: 'أنماط التعبير الخلوي لجزيئات MHC I و MHC II',
    leadEn: 'Where MHC Class I and Class II molecules are expressed in the body:',
    leadAr: 'أماكن التعبير الخلوي لجزيئات MHC من الصنفين الأول والثاني بالجسم:',
    bulletsEn: [
      'MHC Class I: Expressed on virtually ALL nucleated cells and platelets (enables CD8+ surveillance of any infected host cell).',
      'MHC Class II: Restricted expression, primarily on Professional APCs (Dendritic Cells, Macrophages, B lymphocytes) and thymic epithelium.',
      'Cytokines regulate expression: IFN-γ strongly upregulates both MHC-I and MHC-II on various cells.',
      'Erythrocytes (RBCs) lack nuclei and lack MHC Class I.'
    ],
    bulletsAr: [
      'الصنف الأول (MHC-I): يُعبر عنه على سطوح جميع الخلايا ذات النواة تقريباً والصفائح الدموية (يمكن CD8 من مراقبة أي خلية عائلة).',
      'الصنف الثاني (MHC-II): تعبيره مقصور على الخلايا العارضة المحترفة (الخلايا التغصنية، البلعميات، والخلايا البائية) وظهارة التيموس.',
      'تنظم السيتوكينات مستوى التعبير: سيتوكين IFN-γ يرفع بقوة تعبير كل من MHC-I و MHC-II على مختلف الخلايا.',
      'كريات الدم الحمراء تفتقر للنواة وتفتقر تماماً لجزيئات MHC-I.'
    ]
  },
  {
    slideNumber: 20,
    topicEn: 'Antigen Processing & Presentation Concept',
    topicAr: 'مفهوم معالجة وعرض المستضد',
    titleEn: 'Pathways of Antigen Processing',
    titleAr: 'مسارات معالجة وعرض المستضد',
    leadEn: 'Two segregated intracellular pathways for generating peptides:',
    leadAr: 'مساران خلويان منفصلان لتوليد الببتيدات وتحميلها على جزيئات MHC:',
    bulletsEn: [
      'Proteins from different cellular compartments are processed via two distinct, segregated pathways.',
      'Endogenous / Cytosolic Pathway: Degrades intracellular cytosolic proteins and loads peptides onto MHC Class I for CD8+ CTLs.',
      'Exogenous / Endocytic Pathway: Degrades internalized extracellular proteins and loads peptides onto MHC Class II for CD4+ Th cells.',
      'Segregation ensures the immune system directs the correct effector mechanism to the matching pathogen niche.'
    ],
    bulletsAr: [
      'تتم معالجة البروتينات القادمة من حجرات خلوية مختلفة عبر مسارين منفصلين ومحددين بدقة.',
      'المسار الهيولي الداخلي (Endogenous): يهضم البروتينات السيتوبلازمية داخل الخلوية ويحمل الببتيدات على MHC-I للخلايا القاتلة CD8+.',
      'المسار الخارجي البالوعي (Exogenous): يهضم البروتينات المبتلعة من خارج الخلية ويحمل الببتيدات على MHC-II للخلايا المساعدة CD4+.',
      'يضمن هذا الفصل توجيه الآلية المناعية الملائمة للبيئة الميكروبية المناسبة بدقة.'
    ]
  },
  {
    slideNumber: 21,
    topicEn: 'Processing of Cytosolic Antigens (MHC-I Pathway)',
    topicAr: 'معالجة المستضدات الهيولية (مسار MHC-I)',
    titleEn: 'MHC Class I Pathway: Cytosolic Degradation',
    titleAr: 'مسار MHC-I: التحلل البروتيني بالهيولى',
    leadEn: 'Step 1 & 2 of endogenous antigen processing:',
    leadAr: 'الخطوتان الأولى والثانية في مسار معالجة المستضدات الداخلية:',
    bulletsEn: [
      'Intracellular microbes (viruses, cytosolic bacteria) or mutated tumor genes synthesize proteins within the host cytosol.',
      'Defective ribosomal products and foreign proteins are tagged with polyubiquitin chains.',
      'The 26S proteasome (or IFN-γ-induced immunoproteasome LMP2/LMP7) degrades ubiquitin-tagged proteins into 8–11 AA peptides.',
      'Peptides generated possess hydrophobic or basic C-termini favored for MHC-I groove anchoring.'
    ],
    bulletsAr: [
      'الميكروبات داخل الخلوية (الفيروسات، الجراثيم الهيولية) أو بروتينات الأورام تُصنّع بروتينات في سيتوبلازم الخلية.',
      'تُوسم البروتينات الغريبة والمعيبة بسلاسل متعدد اليوبيكويتين (Polyubiquitin).',
      'يقوم الجسيم البروتيني (البروتيازوم 26S والبروتيازوم المناعي LMP2/LMP7) بهضم البروتينات إلى ببتيدات بطول 8-11 حمضاً أمينياً.',
      'تمتلك الببتيدات المتولدة نهايات كربوكسيلية كارهة للماء أو قلوية تلائم شق ارتباط MHC-I.'
    ],
    diagramType: 'mhc1',
    diagramTitleEn: 'MHC Class I Cytosolic Processing Scheme',
    diagramTitleAr: 'مخطط معالجة وعرض معقد MHC-I'
  },
  {
    slideNumber: 22,
    topicEn: 'TAP Transporter & ER Assembly (MHC-I)',
    topicAr: 'ناقل TAP والتجميع في الشبكة الهيولية (MHC-I)',
    titleEn: 'TAP Translocation & Peptide Loading Complex',
    titleAr: 'النقل بناقل TAP ومعقد تحميل الببتيد',
    leadEn: 'Step 3 & 4 of MHC Class I pathway:',
    leadAr: 'الخطوتان الثالثة والرابعة في مسار MHC-I:',
    bulletsEn: [
      'Peptides generated in the cytosol are translocated across the ER membrane into the ER lumen by TAP-1/TAP-2 (ATP-dependent).',
      'MHC Class I α chain and β2-microglobulin assemble in the ER with chaperone assistance (Calreticulin, ERp57, Tapasin).',
      'Tapasin bridges empty MHC-I directly to TAP, facilitating high-affinity peptide loading.',
      'Stable peptide-MHC-I complex dissociates from chaperones and exits the ER.'
    ],
    bulletsAr: [
      'تُنقل الببتيدات المتولدة بالهيولى عبر غشاء الشبكة الهيولية الباطنة إلى لمعتها بواسطة ناقل TAP-1/TAP-2 (باستهلاك ATP).',
      'تتجمع سلسلة ألفا مع بيتا-2 ميكروغلوبيولين بالشبكة الهيولية بمساعدة مرافقات الطي (كالسيكولين، ERp57، وتاباسين).',
      'يعمل بروتين تاباسين (Tapasin) كجسر يربط جزيء MHC-I الفارغ بناقل TAP مباشرة لتسهيل التحميل.',
      'ينفصل المعقد المستقر الحامل للببتيد عن المرافقات ليغادر الشبكة الهيولية نحو جهاز غولجي.'
    ]
  },
  {
    slideNumber: 23,
    topicEn: 'Surface Expression & CD8+ Surveillance (MHC-I)',
    topicAr: 'الظهور الغشائي ومراقبة خلايا CD8+ (MHC-I)',
    titleEn: 'MHC-I Surface Display & CD8+ T Cell Target',
    titleAr: 'العرض السطحي لـ MHC-I وهدف خلايا CD8+ القاتلة',
    leadEn: 'Step 5 & 6 of MHC Class I pathway:',
    leadAr: 'الخطوتان الخامسة والسادسة في مسار MHC-I:',
    bulletsEn: [
      'The peptide-MHC Class I complex travels through the Golgi apparatus in transport vesicles to the plasma membrane.',
      'Presented on the surface of any nucleated cell.',
      'Recognized specifically by CD8+ Cytotoxic T Lymphocytes (CTLs).',
      'CTLs trigger apoptosis of the target cell, preventing viral spread without lysing uninfected bystanders.'
    ],
    bulletsAr: [
      'ينتقل معقد ببتيد-MHC-I عبر جهاز غولجي داخل حويصلات إفرازية ليستقر على الغشاء البلازمي.',
      'يُعرض على سطح أي خلية ذات نواة في الجسم.',
      'تتعرف عليه نوعياً الخلايا اللمفاوية التائية السامة القاتلة (CD8+ CTLs).',
      'تطلق الخلايا القاتلة إشارة الموت المبرمج للخلية المصابة للقضاء على الفيروس وحماية الخلايا المجاورة.'
    ]
  },
  {
    slideNumber: 24,
    topicEn: 'Processing of Endocytosed Antigens (MHC-II Pathway)',
    topicAr: 'معالجة المستضدات المبتلعة (مسار MHC-II)',
    titleEn: 'MHC Class II Pathway: Endosomal Uptake',
    titleAr: 'مسار MHC-II: الالتقاط البالوعي للمستضد',
    leadEn: 'Step 1 & 2 of exogenous antigen processing:',
    leadAr: 'الخطوتان الأولى والثانية في مسار معالجة المستضدات الخارجية:',
    bulletsEn: [
      'Extracellular microbes or proteins are internalized by professional APCs into endosomes or phagosomes.',
      'V-ATPase pumps acidify the endosomal compartments (pH 4.5–5.0).',
      'Acid proteases (Cathepsins B, D, L, S) degrade internalized microbial proteins into peptides (10–30+ amino acids long).',
      'Open ends of the MHC-II cleft allow extended peptides to bind.'
    ],
    bulletsAr: [
      'تبتلع الخلايا العارضة المحترفة الميكروبات أو البروتينات الخارجية إلى داخل جسيمات بالوعية (Endosomes).',
      'تقوم مضخات البروتون بتحميض الجسيمات البالوعية (الرقم الهيدروجيني 4.5-5.0).',
      'تقوم الإنزيمات الهاضمة الحامضية (الكاثيبسين B, D, L, S) بتفكيك المستضدات إلى ببتيدات بطول 10-30+ حمضاً أمينياً.',
      'أطراف شق ارتباط MHC-II المفتوحة تتيح استقبال الببتيدات الطويلة والبارزة.'
    ],
    diagramType: 'mhc2',
    diagramTitleEn: 'MHC Class II Exogenous Processing Scheme',
    diagramTitleAr: 'مخطط معالجة وعرض معقد MHC-II'
  },
  {
    slideNumber: 25,
    topicEn: 'Invariant Chain & CLIP Exchange (MHC-II)',
    topicAr: 'السلسلة الثابتة وتبادل قطعة CLIP (MHC-II)',
    titleEn: 'Invariant Chain (Ii) & HLA-DM Peptide Exchange',
    titleAr: 'السلسلة الثابتة (Ii) وتبادل الببتيد بجزيء HLA-DM',
    leadEn: 'Step 3, 4, & 5 of MHC Class II pathway:',
    leadAr: 'الخطوات الثالثة والرابعة والخامسة في مسار MHC-II:',
    bulletsEn: [
      'MHC Class II α and β chains synthesize in ER and bind the Invariant Chain (Ii / CD74) to prevent premature endogenous peptide binding.',
      'Ii guides MHC-II via Golgi to the endosomal MIIC compartment.',
      'Endosomal proteases digest Ii, leaving only the CLIP fragment lodged in the groove.',
      'HLA-DM chaperone catalyzes the removal of CLIP and loads high-affinity microbial peptides.'
    ],
    bulletsAr: [
      'تُصنع سلسلتا MHC-II بالشبكة الهيولية وترتبطان بالسلسلة الثابتة (Ii) لحجب شق الارتباط عن ببتيدات الشبكة الهيولية.',
      'توجه السلسلة الثابتة جزيء MHC-II عبر غولجي إلى حجرة الجسيمات الداخلية المتأخرة (MIIC).',
      'تهضم الإنزيمات السلسلة الثابتة وتترك قطعة CLIP فقط في الشق.',
      'يحفز جزيء HLA-DM خلع قطعة CLIP وتحميل الببتيد الميكروبي الأجنبي ذي الألفة العالية.'
    ]
  },
  {
    slideNumber: 26,
    topicEn: 'Surface Expression & CD4+ Activation (MHC-II)',
    topicAr: 'الظهور الغشائي وتنشيط خلايا CD4+ (MHC-II)',
    titleEn: 'MHC-II Surface Display & CD4+ Helper T Cells',
    titleAr: 'العرض السطحي لـ MHC-II والخلايا التائية المساعدة CD4+',
    leadEn: 'Step 6 of MHC Class II pathway:',
    leadAr: 'الخطوة السادسة في مسار MHC-II:',
    bulletsEn: [
      'Stable peptide-MHC Class II complexes are delivered to the APC cell surface.',
      'Presented specifically to CD4+ Helper T Lymphocytes.',
      'CD4 co-receptor binds the non-polymorphic β2 domain of MHC Class II.',
      'Activated CD4+ T cells secrete cytokines to license macrophages, recruit granulocytes, or stimulate B-cell antibody class switching.'
    ],
    bulletsAr: [
      'تُنقل معقدات ببتيد-MHC-II المستقرة إلى السطح الخارجي للخلية العارضة.',
      'تُعرض نوعياً على الخلايا اللمفاوية التائية المساعدة (CD4+ Helper T cells).',
      'يرتبط مستقبل التمايز CD4 بالنطاق الثابت β2 لجزيء MHC-II.',
      'تفرز الخلايا المساعدة المنشطة سيتوكينات حاسمة لتفعيل البلعميات أو تحفيز إنتاج الأجسام المضادة بالخلايا البائية.'
    ]
  },
  {
    slideNumber: 27,
    topicEn: 'Comparison of MHC-I vs MHC-II Pathways',
    topicAr: 'جدول مقارنة مساري MHC-I و MHC-II',
    titleEn: 'Comparative Summary: Class I vs Class II Pathways',
    titleAr: 'ملخص مقارن: مسار الصنف الأول مقابل الصنف الثاني',
    leadEn: 'High-yield differential comparison matrix from Dr. Rana Habib’s slides:',
    leadAr: 'مصفوفة المقارنة التفريقية الشاملة من شرائح الدكتورة رنا حبيب:',
    bulletsEn: [
      'MHC-I: Composition = α chain + β2-microglobulin | Source = Cytosolic proteins | Protease = 26S Proteasome | Loading Site = ER lumen | Target = CD8+ CTL.',
      'MHC-II: Composition = α chain + β chain | Source = Endosomal/Extracellular | Protease = Lysosomal Cathepsins | Loading Site = MIIC Endosome | Target = CD4+ Th.'
    ],
    bulletsAr: [
      'مسار MHC-I: التركيب = سلسلة ألفا + بيتا-2 ميكروغلوبيولين | مصدر المستضد = الهيولى | إنزيم الهضم = البروتيازوم | موقع التحميل = الشبكة الهيولية | الخلية المستهدفة = CD8+ CTL.',
      'مسار MHC-II: التركيب = سلسلة ألفا + سلسلة بيتا | مصدر المستضد = الحويصلات البالوعية | إنزيم الهضم = الكاثيبسين | موقع التحميل = الجسيم الداخلي MIIC | الخلية المستهدفة = CD4+ Th.'
    ]
  },
  {
    slideNumber: 28,
    topicEn: 'Cross-Presentation (Cross-Priming)',
    topicAr: 'العرض المتصالب (Cross-Presentation)',
    titleEn: 'Dendritic Cell Cross-Presentation',
    titleAr: 'العرض المتصالب للخلايا التغصنية (Cross-Presentation)',
    leadEn: 'Specialized mechanism enabling DCs to prime CD8+ T cells against viruses and tumors:',
    leadAr: 'آلية تخصصية تمكن الخلايا التغصنية من تنشيط خلايا CD8+ ضد الفيروسات والأورام:',
    bulletsEn: [
      'Dendritic cells ingest virus-infected cells or dead tumor cells (exogenous antigens).',
      'Instead of standard MHC-II routing, ingested antigens are translocated into the DC cytosol.',
      'Degraded by the proteasome, transported by TAP into the ER, and loaded onto MHC CLASS I molecules.',
      'Allows naive CD8+ T cells to be primed against viruses that do not directly infect dendritic cells.'
    ],
    bulletsAr: [
      'تبتلع الخلايا التغصنية بقايا خلايا مصابة بفيروسات أو خلايا ورمية ميتة (مستضدات خارجية).',
      'بدلاً من المسار البالوعي المعتاد لـ MHC-II، يتم تهريب المستضدات إلى هيولى الخلية التغصنية.',
      'تُهضم بالبروتيازوم وتُنقل بناقل TAP لتُحمّل على جزيئات معقد التوافق النسيجي الصنف الأول (MHC-I).',
      'تُمكّن هذه الآلية من تنشيط خلايا CD8+ القاتلة الساذجة ضد فيروسات لا تصيب الخلايا التغصنية ذاتها.'
    ],
    diagramType: 'crossPres',
    diagramTitleEn: 'Cross-Presentation Mechanism (Cross-Priming of CD8+)',
    diagramTitleAr: 'آلية العرض المتصالب وتنشيط الخلايا القاتلة'
  },
  {
    slideNumber: 29,
    topicEn: 'T Cell Receptors & Coreceptors',
    topicAr: 'مستقبلات الخلايا التائية والمستقبلات المساعدة',
    titleEn: 'TCR Complex & CD4 / CD8 Coreceptors',
    titleAr: 'معقد مستقبل التائية TCR والمستقبلات المساعدة CD4 / CD8',
    leadEn: 'Components of the T cell recognition apparatus:',
    leadAr: 'مكونات جهاز التعرف على المستضد في الخلية التائية:',
    bulletsEn: [
      'TCR is a heterodimer composed of α and β chains, each possessing a variable (V) antigen-binding region and a constant (C) region.',
      'TCR does not signal directly; it associates with the invariant CD3 complex (γ, δ, ε) and ζ homodimer containing ITAM motifs.',
      'CD4 coreceptor: Monomer binding non-polymorphic β2 domain of MHC Class II.',
      'CD8 coreceptor: αβ heterodimer binding non-polymorphic α3 domain of MHC Class I.'
    ],
    bulletsAr: [
      'مستقبل TCR هو بروتين ثنائي السلسلة (ألفا وبيتا)، لكل منها منطقة متغيرة (V) لربط المستضد ومنطقة ثابتة (C).',
      'لا ينقل TCR الإشارة بمفرده، بل يتصل بمعقد CD3 الثابت (γ, δ, ε) وسلاسل زيتا (ζ) الحاوية على نطاقات ITAM.',
      'مستقبل CD4 المساعد: بروتين أحادي يرتبط بالنطاق الثابت β2 لجزيء MHC-II.',
      'مستقبل CD8 المساعد: بروتين ثنائي السلسلة (αβ) يرتبط بالنطاق الثابت α3 لجزيء MHC-I.'
    ]
  },
  {
    slideNumber: 30,
    topicEn: 'The 3-Signal Activation Model',
    topicAr: 'نموذج الإشارات الثلاث لتنشيط الخلايا التائية',
    titleEn: 'The 3-Signal Model of T Cell Activation',
    titleAr: 'نموذج الإشارات الثلاث لتنشيط الخلايا التائية',
    leadEn: 'Three essential biochemical signals required to activate naive T lymphocytes:',
    leadAr: 'ثلاث إشارات بيوكيميائية حاسمة لتنشيط الخلايا التائية الساذجة بالكامل:',
    bulletsEn: [
      'Signal 1 (Antigen Recognition): TCR binds pMHC + CD4/CD8 coreceptor engagement -> triggers CD3 ITAM phosphorylation.',
      'Signal 2 (Costimulation): B7-1 (CD80) and B7-2 (CD86) on APC bind CD28 on T cell -> drives IL-2 gene transcription and survival.',
      'Signal 3 (Differentiation / Cytokines): APC cytokines (IL-12, IL-4, IL-6, TGF-β) direct lineage polarization (Th1, Th2, Th17).',
      'Signal 1 in the ABSENCE of Signal 2 induces Anergy (long-lasting unresponsiveness) or Apoptosis.'
    ],
    bulletsAr: [
      'الإشارة الأولى (التعرف المستضدي): ارتباط TCR بمعقد pMHC وتثبت CD4/CD8 -> يطلق فسفرة نطاقات ITAM بمعقد CD3.',
      'الإشارة الثانية (التحفيز المشترك): ارتباط جزيئات B7-1/B7-2 على APC بمستقبل CD28 على التائية -> يحفز إفراز IL-2 والبقاء.',
      'الإشارة الثالثة (التمايز السيتوكيني): سيتوكينات الخلية العارضة (IL-12, IL-4, IL-6) توجه سلالة التمايز (Th1, Th2, Th17).',
      'حدوث الإشارة الأولى وحدها في غياب الإشارة الثانية يسبب الخمول المناعي (Anergy) أو الموت المبرمج.'
    ],
    diagramType: 'synapse3Signals',
    diagramTitleEn: 'The 3-Signal T Cell Activation Switchboard',
    diagramTitleAr: 'مخطط الإشارات الثلاث لتنشيط الخلية التائية'
  },
  {
    slideNumber: 31,
    topicEn: 'Costimulatory Molecules (B7-CD28 Family)',
    topicAr: 'جزيئات التحفيز المشترك (عائلة B7-CD28)',
    titleEn: 'Costimulation: B7-1/B7-2 & CD28',
    titleAr: 'التحفيز المشترك: B7-1/B7-2 ومستقبل CD28',
    leadEn: 'Molecular mechanisms of positive costimulation vs checkpoint inhibition:',
    leadAr: 'الآليات الجزيئية للتحفيز الإيجابي مقابل نقاط التفتيش المثبطة:',
    bulletsEn: [
      'B7-1 (CD80) and B7-2 (CD86) are expressed on activated APCs (DCs, macrophages, B cells).',
      'CD28 is constitutively expressed on naive T cells; binding B7 transmits essential survival and metabolic signals.',
      'CTLA-4 (CD152) is an inhibitory receptor upregulated on activated T cells; binds B7 with 20- to 100-fold higher affinity than CD28, shutting off T cell responses.',
      'PD-1 (CD279) binds PD-L1/PD-L2 in peripheral tissues to terminate effector T cell responses.'
    ],
    bulletsAr: [
      'يتم التعبير عن جزيئات B7-1 (CD80) و B7-2 (CD86) على سطوح الخلايا العارضة المفعلة.',
      'يُعبر عن مستقبل CD28 باستمرار على التائيات الساذجة، وارتباطه بـ B7 ينقل إشارات البقاء والتكاثر الأيضي.',
      'مستقبل CTLA-4 (CD152) هو كابح مناعي يُعبر عنه بعد التنشيط، ويرتبط بـ B7 بألفة تفوق CD28 بـ 20-100 ضعف ليوقف التكاثر.',
      'مستقبل PD-1 يرتبط بربيطاته PD-L1 في الأنسجة المحيطية لإنهاء الاستجابة وحماية الأنسجة.'
    ]
  },
  {
    slideNumber: 32,
    topicEn: 'IL-2 and Clonal Expansion',
    topicAr: 'إنترلوكين-2 والتكاثر النسيلي (Clonal Expansion)',
    titleEn: 'IL-2 Autocrine Growth Loop',
    titleAr: 'حلقة النمو الذاتية بواسطة إنترلوكين-2 (IL-2)',
    leadEn: 'How activated T cells drive their own exponential expansion:',
    leadAr: 'كيف تدفع الخلايا التائية المنشطة تكاثرها الذاتي المتسارع:',
    bulletsEn: [
      'Activated T cells synthesize and secrete Interleukin-2 (IL-2) within hours of activation.',
      'Concurrently upregulate IL-2 receptor alpha chain (CD25), converting low-affinity IL-2Rβγ to the high-affinity trimeric IL-2Rαβγ.',
      'Binding of autocrine IL-2 drives vigorous cell cycle progression and clonal expansion (yielding thousands of progeny from a single clone).',
      'Immunosuppressive drugs (Cyclosporine, Tacrolimus) inhibit IL-2 transcription via calcineurin inhibition.'
    ],
    bulletsAr: [
      'تفرز الخلايا التائية المنشطة سيتوكين إنترلوكين-2 (IL-2) خلال ساعات من تلقي الإشارتين الأولى والثانية.',
      'ترفع التعبير عن السلسلة ألفا لمستقبل IL-2 (CD25)، ما يحول المستقبل إلى الشكل الثلاثي عالي الألفة (IL-2Rαβγ).',
      'ارتباط IL-2 بمستقبله عالي الألفة يحفز التكاثر النسيلي الهائل (آلاف الخلايا المتماثلة من خلية مفردة واحدة).',
      'مثبطات المناعة الدوائية (سيكلوسبورين، تاكروليموس) تثبط تخليق IL-2 عبر تثبيط إنزيم الكالسينيورين.'
    ]
  },
  {
    slideNumber: 33,
    topicEn: 'Functional Subsets of CD4+ Helper T Cells',
    topicAr: 'الأنماط الوظيفية للخلايا التائية المساعدة (CD4+ Th)',
    titleEn: 'CD4+ T Helper Subsets (Th1, Th2, Th17)',
    titleAr: 'الأنماط الوظيفية للخلايا التائية المساعدة (Th1, Th2, Th17)',
    leadEn: 'Lineage divergence of naive CD4+ T cells into specialized effector subsets:',
    leadAr: 'تمايز الخلايا التائية المساعدة الساذجة إلى تحتيات وظيفية تخصصية:',
    bulletsEn: [
      'Naive CD4+ T cells differentiate into distinct effector subsets based on the cytokine microenvironment (Signal 3).',
      'Th1 Subset: Induced by IL-12 & IFN-γ; master regulator T-bet; secretes IFN-γ; targets intracellular microbes.',
      'Th2 Subset: Induced by IL-4; master regulator GATA-3; secretes IL-4, IL-5, IL-13; targets helminths and mediates allergy.',
      'Th17 Subset: Induced by IL-6, TGF-β, IL-23; master regulator RORγt; secretes IL-17, IL-22; recruits neutrophils against extracellular bacteria and fungi.'
    ],
    bulletsAr: [
      'تتمايز خلايا CD4+ الساذجة إلى سلالات مختلفة بناءً على البيئة السيتوكينية المحيطة (الإشارة 3).',
      'سلالة Th1: يحفزها IL-12 و IFN-γ؛ منظمها الجيني T-bet؛ تفرز IFN-γ؛ تحارب الميكروبات داخل الخلوية.',
      'سلالة Th2: يحفزها IL-4؛ منظمها الجيني GATA-3؛ تفرز IL-4 و IL-5 و IL-13؛ تحارب الديدان وتتوسط الحساسية.',
      'سلالة Th17: يحفزها IL-6 و TGF-β و IL-23؛ منظمها RORγt؛ تفرز IL-17 و IL-22؛ تجند العدلات ضد الجراثيم والفطريات.'
    ],
    diagramType: 'thSubsets',
    diagramTitleEn: 'CD4+ Helper T Cell Subsets (Th1, Th2, Th17)',
    diagramTitleAr: 'تمايز السلالات التائية المساعدة Th1 و Th2 و Th17'
  },
  {
    slideNumber: 34,
    topicEn: 'Th1 Differentiation & Functions',
    topicAr: 'تمايز ووظائف السلالة المساعدة Th1',
    titleEn: 'Th1 Lineage: Host Defense & Macrophage Activation',
    titleAr: 'سلالة Th1: الدفاع وتفعيل البلعميات',
    leadEn: 'Role of Th1 cells in eradicating intravesicular pathogens:',
    leadAr: 'دور خلايا Th1 في القضاء على الجراثيم داخل الحويصلات البالوعية:',
    bulletsEn: [
      'Differentiating cytokines: Interleukin-12 (IL-12) from DCs/macrophages and Interferon-gamma (IFN-γ) from NK cells.',
      'Lineage-defining master transcription factor: T-bet (promotes STAT4 and STAT1 activation).',
      'Principal effector cytokine: IFN-γ.',
      'Major physiological action: Classical activation of macrophages (M1) to kill ingested microbes, and promotes IgG opsonizing antibody production.'
    ],
    bulletsAr: [
      'سيتوكينات التوجيه: إنترلوكين-12 (IL-12) من الخلايا العارضة وغاما إنترفيرون (IFN-γ) من الخلايا القاتلة الطبيعية NK.',
      'عامل النسخ الجيني الموجه: T-bet (عبر تنشيط STAT4 و STAT1).',
      'السيتوكين الإفرازي الأساسي: غاما إنترفيرون (IFN-γ).',
      'الوظيفة الفسيولوجية الكبرى: التفعيل الكلاسيكي للبلعميات (M1) لقتل الميكروبات المبتلعة، وتحفيز إنتاج أضداد IgG الطاهية.'
    ]
  },
  {
    slideNumber: 35,
    topicEn: 'Th1 - Macrophage Activation Loop',
    topicAr: 'حلقة التنشيط المتبادل بين Th1 والبلعميات',
    titleEn: 'Th1 - Macrophage M1 Classical Activation Loop',
    titleAr: 'حلقة التنشيط الكلاسيكي المتبادل Th1 - البلعمية',
    leadEn: 'Dual-contact mechanism of classical macrophage activation:',
    leadAr: 'آلية التماس المزدوج للتفعيل البلعمي الكلاسيكي M1:',
    bulletsEn: [
      'Macrophage presents bacterial peptide on MHC-II to Th1 cell and secretes IL-12.',
      'Th1 cell responds by upregulating CD40 Ligand (CD40L / CD154) and secreting high levels of IFN-γ.',
      'CD40L engages CD40 on the macrophage, synergizing with IFN-γ receptor signaling.',
      'Triggers synthesis of inducible Nitric Oxide Synthase (iNOS -> NO) and Phagocyte NADPH Oxidase (ROS -> H2O2, superoxide), destroying intracellular microbes.'
    ],
    bulletsAr: [
      'تعرض البلعمية الببتيد الجرثومي على MHC-II للخلية Th1 وتفرز سيتوكين IL-12.',
      'تستجيب خلية Th1 بالتعبير عن ربيطة CD40L وإفراز كميات غزيرة من IFN-γ.',
      'يرتبط CD40L بمستقبل CD40 على البلعمية ليتآزر مع إشارات مستقبل IFN-γ.',
      'يطلق التآزر إنتاج إنزيم iNOS (مولد أكسيد النتريك NO) وأنزيم NADPH Oxidase (مولد مركبات الأكسجين التفاعلية ROS) لقتل الجراثيم.'
    ],
    diagramType: 'th1Macrophage',
    diagramTitleEn: 'Th1 - Macrophage Reciprocal M1 Activation Loop',
    diagramTitleAr: 'مخطط التنشيط المتبادل بين Th1 والبلعميات'
  },
  {
    slideNumber: 36,
    topicEn: 'Granulomatous Inflammation',
    topicAr: 'الالتهاب الحبيبي وتشكل الورم الحبيبي (Granuloma)',
    titleEn: 'Chronic CMI & Granuloma Formation',
    titleAr: 'المناعة الخلوية المزمنة وتشكل الورم الحبيبي (Granuloma)',
    leadEn: 'Tissue containment when intracellular bacteria resist enzymatic destruction:',
    leadAr: 'حصار الميكروبات المستعصية على الهضم الإنزيمي داخل النسيج:',
    bulletsEn: [
      'When intracellular microbes (e.g., Mycobacterium tuberculosis, Leishmania) resist macrophage killing, sustained Th1-macrophage interactions persist.',
      'Chronic IFN-γ and TNF-α induce macrophages to enlarge and fuse into epithelioid cells and multinucleated Langhans giant cells.',
      'Forms a localized Granuloma, walling off and sequestering the viable bacilli from tissue dissemination.',
      'Provides protective containment, but extensive granulomas cause local tissue necrosis and caseation.'
    ],
    bulletsAr: [
      'عندما تستعصي ميكروبات مثل المتفطرة السلية (TB) والليشمانيا على القتل، يستمر التحفيز المتبادل بين Th1 والبلعميات.',
      'يؤدي إفراز IFN-γ و TNF-α المزمن إلى تضخم البلعميات وتحولها لخلايا شبيهة بالظهارية (Epithelioid) وخلايا لانغهانز العملاقة.',
      'يتشكل ورم حبيبي (Granuloma) يحصر الجراثيم ويعزلها لمنع انتشارها في الجسم.',
      'يوفر الورم الحبيبي حماية احترازية لكنه قد يسبب نخر الجبني وتلف النسيج المحيط.'
    ]
  },
  {
    slideNumber: 37,
    topicEn: 'Th2 Differentiation & Functions',
    topicAr: 'تمايز ووظائف السلالة المساعدة Th2',
    titleEn: 'Th2 Lineage: Helminths & Allergic Responses',
    titleAr: 'سلالة Th2: مكافحة الديدان والتفاعلات التحسسية',
    leadEn: 'Role of Th2 cells in extracellular parasitic defense and type I hypersensitivity:',
    leadAr: 'دور خلايا Th2 في مكافحة الطفيليات الدودية وتفاعلات فرط التحسس النمط الأول:',
    bulletsEn: [
      'Differentiating cytokine: Interleukin-4 (IL-4).',
      'Master transcription factor: GATA-3 (promotes STAT6 phosphorylation).',
      'Principal effector cytokines: IL-4, IL-5, IL-13.',
      'IL-4 stimulates B-cell class switching to IgE; IL-5 activates and recruits eosinophils; IL-13 stimulates goblet cell mucus secretion and intestinal peristalsis to expel helminthic worms.'
    ],
    bulletsAr: [
      'سيتوكين التوجيه: إنترلوكين-4 (IL-4).',
      'عامل النسخ الجيني الموجه: GATA-3 (عبر تنشيط STAT6).',
      'السيتوكينات الإفرازية الأساسية: IL-4 و IL-5 و IL-13.',
      'يحفز IL-4 تبديل صنف الأضداد بالخلايا البائية إلى IgE؛ ويجند IL-5 الحمضات (Eosinophils)؛ بينما يحفز IL-13 إفراز المخاط والحركة المعوية لطرد الديدان.'
    ]
  },
  {
    slideNumber: 38,
    topicEn: 'Alternative Macrophage Activation (M2)',
    topicAr: 'التفعيل البديل للبلعميات (نمط M2)',
    titleEn: 'Alternative (M2) Macrophage Activation',
    titleAr: 'التفعيل البلعمي البديل (M2) للترميم وتثبيط الالتهاب',
    leadEn: 'Anti-inflammatory and tissue repair program triggered by Th2 cytokines:',
    leadAr: 'برنامج ترميم الأنسجة وتثبيط الالتهاب المحفز بسيتوكينات Th2:',
    bulletsEn: [
      'IL-4 and IL-13 secreted by Th2 cells trigger the Alternative (M2) activation pathway in macrophages.',
      'Unlike M1 cells, M2 macrophages suppress microbicidal inflammation.',
      'Secrete anti-inflammatory cytokines (IL-10, TGF-β) and growth factors (VEGF, FGF, Proline for collagen synthesis).',
      'Play crucial roles in tissue repair, wound healing, fibrosis, and resolution of inflammatory responses.'
    ],
    bulletsAr: [
      'يحفز سيتوكين IL-4 و IL-13 المفرزان من خلايا Th2 مسار التفعيل البديل (M2) للبلعميات.',
      'على عكس النمط M1، تقوم بلعميات M2 بتثبيط الالتهاب المفرط.',
      'تفرز سيتوكينات مضادة للالتهاب (IL-10 و TGF-β) وعوامل نمو نسيجي وألياف كولاجين للترميم.',
      'تلعب دوراً حاسماً في التئام الجروح، إصلاح الأنسجة المتضررة، وإنهاء الاستجابة الالتهابية.'
    ]
  },
  {
    slideNumber: 39,
    topicEn: 'Th17 Differentiation & Functions',
    topicAr: 'تمايز ووظائف السلالة المساعدة Th17',
    titleEn: 'Th17 Lineage: Neutrophil Recruitment & Mucosal Defense',
    titleAr: 'سلالة Th17: تجنيد العدلات والدفاع المخاطي',
    leadEn: 'Role of Th17 cells against extracellular bacteria and fungi:',
    leadAr: 'دور خلايا Th17 ضد الجراثيم خارج الخلوية والفطريات:',
    bulletsEn: [
      'Differentiating cytokines: IL-6 + TGF-β, with IL-23 required for survival and maintenance.',
      'Master transcription factor: RORγt (promotes STAT3 activation).',
      'Principal effector cytokines: Interleukin-17 (IL-17A, IL-17F) and Interleukin-22 (IL-22).',
      'IL-17 induces stromal and epithelial cells to secrete chemokines (CXCL8) and G-CSF, driving massive neutrophil recruitment.',
      'IL-22 promotes epithelial barrier integrity and synthesis of antimicrobial defensins.'
    ],
    bulletsAr: [
      'سيتوكينات التوجيه: IL-6 مع TGF-β، بالإضافة إلى IL-23 لتثبيت وبقاء السلالة.',
      'عامل النسخ الجيني الموجه: RORγt (عبر تنشيط STAT3).',
      'السيتوكينات الإفرازية الأساسية: إنترلوكين-17 (IL-17) وإنترلوكين-22 (IL-22).',
      'يحفز IL-17 إفراز الكيموكينات وعوامل تحفيز العدلات لتجنيد أعداد هائلة من العدلات (Neutrophils) لبؤرة العدوى.',
      'يعزز IL-22 سلامة الحواجز الظهارية المخاطية وإفراز الببتيدات المضادة للجراثيم (Defensins).'
    ]
  },
  {
    slideNumber: 40,
    topicEn: 'CD8+ Cytotoxic T Lymphocytes (CTLs)',
    topicAr: 'الخلايا اللمفاوية التائية السامة القاتلة (CD8+ CTLs)',
    titleEn: 'CD8+ Cytotoxic T Lymphocyte (CTL) Principles',
    titleAr: 'مبادئ الخلايا اللمفاوية التائية السامة القاتلة (CD8+ CTL)',
    leadEn: 'Direct killers of host cells harboring cytosolic pathogens or tumor mutations:',
    leadAr: 'القتلة المباشرون للخلايا العائلة الحاوية على ميكروبات هيولية أو طفرات ورمية:',
    bulletsEn: [
      'Effector CD8+ CTLs recognize target cells presenting specific peptide-MHC Class I complexes.',
      'Function: Direct, antigen-specific lysis of infected host cells without injuring uninfected bystander cells.',
      'Eradicates intracellular viral infections, cytosolic bacteria (Listeria), and mutated malignant neoplastic cells.',
      'Can kill multiple successive target cells consecutively (serial killers of infected cells).'
    ],
    bulletsAr: [
      'تتعرف خلايا CD8+ القاتلة على الخلايا الهدف العارضة لمعقدات ببتيد-MHC-I النوعية.',
      'الوظيفة: القتل المباشر والنوعي للخلايا المصابة دون إلحاق الأذى بالخلايا المجاورة السليمة.',
      'تقضي على الفيروسات داخل الخلوية، الجراثيم الهاربة للهيولى (مثل الليستيريا)، وخلايا الأورام الخبيثة.',
      'تتميز بالقدرة على قتل عدة خلايا مصابة متتالية الواحدة تلو الأخرى بكفاءة عالية.'
    ]
  },
  {
    slideNumber: 41,
    topicEn: 'Mechanisms of CTL Cytotoxicity',
    topicAr: 'آليات السمية الخلوية للخلايا القاتلة (CTL)',
    titleEn: 'Two Pathways of CTL-Mediated Apoptosis',
    titleAr: 'مسارا الموت المبرمج بوساطة الخلايا القاتلة CTL',
    leadEn: 'Granule exocytosis vs death receptor engagement:',
    leadAr: 'مسار إفراغ الحبيبات القاتلة مقابل مسار مستقبلات الموت:',
    bulletsEn: [
      'Pathway 1: Perforin / Granzyme Granule Exocytosis (predominant and fastest mechanism).',
      'Pathway 2: Fas / Fas Ligand (CD95 / CD178) Death Receptor Interaction.',
      'Both pathways culminate in target cell death by APOPTOSIS (programmed cell death), rather than necrosis.',
      'Apoptosis degrades viral DNA and prevents inflammatory rupture and viral dissemination.'
    ],
    bulletsAr: [
      'المسار الأول: إفراغ الحبيبات السامة (البيرفورين والغرانزايم) - وهو المسار الأسرع والأساسي.',
      'المسار الثاني: مسار مستقبلات الموت عبر تفاعل Fas مع FasL (CD95 / CD178).',
      'يؤدي كلا المسارين إلى موت الخلية الهدف عبر الموت الخلوي المبرمج (Apoptosis) وليس النخر الالتهابي.',
      'يؤدي الموت المبرمج إلى تفتيت DNA الفيروسي ومنع انفجار الخلية وتسرب الفيروسات للخارج.'
    ],
    diagramType: 'ctlPerforin',
    diagramTitleEn: 'CTL Cytotoxicity Pathways: Perforin/Granzyme & Fas/FasL',
    diagramTitleAr: 'مخطط آليات القتل الخلوي: البيرفورين والفاس'
  },
  {
    slideNumber: 42,
    topicEn: 'Immunological Synapse & Granule Polarization',
    topicAr: 'المشبك المناعي وتوجيه الحبيبات السامة',
    titleEn: 'Immunological Synapse & Directional Exocytosis',
    titleAr: 'المشبك المناعي والإفراغ الحبيبي الموجه',
    leadEn: 'How CTLs direct lethal hits with surgical precision:',
    leadAr: 'كيف توجه الخلايا القاتلة ضربتها القاتلة بدقة جراحية متناهية:',
    bulletsEn: [
      'CTL adheres to target cell via LFA-1 : ICAM-1 interactions forming a tight seal (Immunological Synapse).',
      'The CTL Microtubule Organizing Center (MTOC) and Golgi apparatus rotate toward the contact site.',
      'Lytic granules traffic along microtubules and fuse with the plasma membrane inside the sealed synaptic cleft.',
      'Directional exocytosis confines lytic proteins exclusively to the infected target cell membrane.'
    ],
    bulletsAr: [
      'تلتصق الخلية القاتلة بالهدف عبر جزيئات الالتصاق LFA-1 مع ICAM-1 لتشكيل مشبك مناعي محكم الإغلاق.',
      'يستدير مركز تنظيم الأنيبيبات الدقيقة (MTOC) وجهاز غولجي مباشرة نحو نقطة التماس مع الخلية المصابة.',
      'تهاجر الحبيبات السامة على طول الأنيبيبات وتندمج مع الغشاء داخل الفالق المشبكي المحكم.',
      'يضمن الإفراز الموجه حصر البروتينات القاتلة على غشاء الخلية المصابة فقط وتجنيب الخلايا السليمة.'
    ]
  },
  {
    slideNumber: 43,
    topicEn: 'Perforin & Granzyme B Mechanics',
    topicAr: 'آلية عمل البيرفورين والغرانزايم B',
    titleEn: 'Perforin Pore Polymerization & Granzyme B Entry',
    titleAr: 'بلمرة ثقوب البيرفورين ونفاذ إنزيم غرانزايم B',
    leadEn: 'Molecular execution of apoptosis by granule contents:',
    leadAr: 'التنفيذ الجزيئي للموت المبرمج بواسطة محتويات الحبيبات السامة:',
    bulletsEn: [
      'Perforin monomers insert into the target membrane in the presence of Ca2+, polymerizing into 13–20 nm cylindrical pores.',
      'Granzyme B (an aspartate-specific serine protease) enters the target cytosol through perforin pores or via endocytosis.',
      'Granzyme B directly cleaves and activates Procaspase-3 into executioner Caspase-3.',
      'Granzyme B also cleaves Bid into tBid, causing mitochondrial outer membrane permeabilization, Cytochrome C release, and Caspase-9 apoptosome activation.'
    ],
    bulletsAr: [
      'تتبلمر جزيئات البيرفورين (Perforin) في غشاء الخلية الهدف بوجود الكالسيوم لتشكل ثقوباً أسطوانية بقطر 13-20 نانومتر.',
      'ينفذ إنزيم غرانزايم B (Granzyme B) عبر هذه الثقوب إلى سيتوبلازم الخلية المصابة.',
      'يقوم غرانزايم B بقطع وتفعيل كاسباز-3 التنفيذي مباشرة.',
      'كما يقطع بروتين Bid ليطلق السيتوكروم C من الميتاكوندريا ويفعل كاسباز-9 في شلال الموت المبرمج.'
    ]
  },
  {
    slideNumber: 44,
    topicEn: 'Fas / FasL Death Pathway',
    topicAr: 'مسار الموت بمستقبل Fas ورابطته FasL',
    titleEn: 'Fas / FasL (CD95 / CD178) Apoptosis Pathway',
    titleAr: 'مسار الموت المبرمج برابطة Fas و FasL',
    leadEn: 'Alternative cell contact death receptor mechanism:',
    leadAr: 'آلية مسار مستقبلات الموت بالتماس المباشر بين الخلايا:',
    bulletsEn: [
      'Activated CTLs express Fas Ligand (FasL / CD178) on their cell surface.',
      'FasL binds and trimerizes Fas (CD95) death receptors on the target cell membrane.',
      'Clustered death domains (DD) recruit the adaptor protein FADD (Fas-Associated Death Domain).',
      'FADD recruits and activates Procaspase-8, forming the Death-Inducing Signaling Complex (DISC).',
      'Active Caspase-8 cleaves executioner Caspases-3 and 7, executing DNA fragmentation and apoptosis.'
    ],
    bulletsAr: [
      'تُعبر الخلايا القاتلة المنشطة عن ربيطة الموت FasL (CD178) على سطحها الخارجي.',
      'ترتبط FasL بمستقبل الموت Fas (CD95) على غشاء الخلية الهدف وتجمعه في شكل ثلاثي.',
      'تجمع نطاقات الموت بروتين التوصيل FADD لتشكيل معقد تحفيز الموت (DISC).',
      'يفعل المعقد كاسباز-8 البادئ، الذي يقوم بدوره بتفعيل كاسباز-3 و 7 التنفيذيين لإتمام الموت المبرمج وتفتيت DNA.'
    ]
  },
  {
    slideNumber: 45,
    topicEn: 'Cooperation Between CD4+ and CD8+ T Cells',
    topicAr: 'التعاون والتكامل بين خلايا CD4+ و CD8+',
    titleEn: 'CD4+ Helper Help for CD8+ CTL Priming',
    titleAr: 'عون الخلايا المساعدة CD4+ لتنشيط الخلايا القاتلة CD8+',
    leadEn: 'How CD4+ Th cells optimize and sustain CD8+ CTL immunity:',
    leadAr: 'كيف تدعم الخلايا المساعدة CD4+ توليد واستدامة خلايا CD8+ القاتلة:',
    bulletsEn: [
      'Full priming of naive CD8+ T cells against many viral and tumor antigens requires help from CD4+ T helper cells.',
      'CD4+ T cells interact with DCs via CD40L:CD40, licensing the DC to express higher levels of B7 costimulators and IL-12.',
      'CD4+ T cells secrete IL-2, providing essential growth and survival signals for CD8+ CTL expansion.',
      'CD4+ T cell help is critically required for the generation of functional, long-lived CD8+ memory T cells.'
    ],
    bulletsAr: [
      'يتطلب التنشيط الكامل لخلايا CD8+ ضد العديد من الفيروسات والأورام عوناً من الخلايا المساعدة CD4+.',
      'تتفاعل خلايا CD4+ مع الخلية التغصنية عبر CD40L مع CD40، ما يرخص للخلية التغصنية رفع تعبير B7 وإفراز IL-12.',
      'تفرز خلايا CD4+ سيتوكين IL-2 لتغذية وتكثير خلايا CD8+ القاتلة.',
      'العون المقدم من CD4+ ضروري جداً لتوليد خلايا ذاكرة CD8+ طويلة الأمد وفعالة.'
    ]
  },
  {
    slideNumber: 46,
    topicEn: 'Pathogen Evasion of Cell-Mediated Immunity',
    topicAr: 'هروب العوامل الممرضة من المناعة الخلوية',
    titleEn: 'Microbial Immune Evasion Strategies',
    titleAr: 'استراتيجيات الهروب المناعي للجراثيم والفيروسات',
    leadEn: 'Mechanisms evolved by intracellular pathogens to bypass CMI:',
    leadAr: 'الآليات التطورية للميكروبات للتهرب من الاستجابة المناعية الخلوية:',
    bulletsEn: [
      'Inhibition of Phagolysosome Fusion: Mycobacterium tuberculosis prevents phagosome acidification and maturation.',
      'Escape from Phagosome into Cytosol: Listeria monocytogenes secretes listeriolysin O to lyse phagosomal membrane.',
      'Inhibition of Antigen Processing (MHC-I): HSV ICP47 blocks TAP transporter; CMV retains MHC-I in ER; Adenovirus blocks transcription.',
      'Production of Inhibitory Cytokine Homologs: EBV encodes viral IL-10 (vIL-10), suppressing macrophage activation and IL-12.'
    ],
    bulletsAr: [
      'تثبيط اندماج الجسيم الحال مع البالوعي: المتفطرة السلية تمنع تحميض ونضج الجسيم البالع.',
      'الهروب من البالوعة إلى الهيولى: بكتيريا الليستيريا تفرز سم الليستريولايسين لثقب غشاء البالوعة والهروب للهيولى.',
      'تثبيط معالجة MHC-I: فيروس الهربس HSV يفرز بروتين ICP47 لتعطيل ناقل TAP؛ وفيروس CMV يحتجز MHC-I بالشبكة الهيولية.',
      'إنتاج نظائر سيتوكينات مثبطة: فيروس إبشتاين بار EBV يفرز نظير إنترلوكين-10 لتثبيط البلعميات وسيتوكين IL-12.'
    ]
  },
  {
    slideNumber: 47,
    topicEn: 'Memory T Lymphocytes',
    topicAr: 'الخلايا اللمفاوية التائية الذاكرة (Memory T Cells)',
    titleEn: 'Generation & Properties of Memory T Cells',
    titleAr: 'توليد وخصائص الخلايا التائية الذاكرة',
    leadEn: 'Long-lived sentinels ensuring rapid secondary immune protection:',
    leadAr: 'حراس الذاكرة طويلو الأمد لضمان استجابة ثانوية فورية وفائقة:',
    bulletsEn: [
      'Following pathogen eradication, ~90–95% of effector T cells undergo apoptosis (Contraction phase).',
      'A surviving pool of 5–10% differentiates into long-lived Memory T cells, sustained by IL-7 and IL-15.',
      'Central Memory T Cells (Tcm): Express CCR7 and CD62L; home to lymph nodes; high proliferative capacity.',
      'Effector Memory T Cells (Tem): Lack CCR7/CD62L; patrol peripheral mucosal tissues; rapid effector cytokine secretion upon re-encounter.'
    ],
    bulletsAr: [
      'بعد القضاء على الميكروب، تموت 90-95% من الخلايا التائية الفاعلة بالموت المبرمج (مرحلة الانكماش).',
      'تتحول 5-10% من الخلايا المتبقية إلى خلايا تائية ذاكرة طويلة الأمد تعيش سنوات بتأثير IL-7 و IL-15.',
      'خلايا الذاكرة المركزية (Tcm): تُعبر عن CCR7 و CD62L وتستقر بالعقد اللمفاوية وتمتلك قدرة تكاثرية هائلة.',
      'خلايا الذاكرة الفاعلة (Tem): لا تعبر عن CCR7 وتجوب الأنسجة المحيطية وتفرز سيتوكينات فورية عند عودة الميكروب.'
    ]
  },
  {
    slideNumber: 48,
    topicEn: 'Therapeutic Targeting of T Cell Checkpoints',
    topicAr: 'الاستهداف العلاجي لنقاط التفتيش التائية (Checkpoint Inhibitors)',
    titleEn: 'Checkpoint Blockade Immunotherapy in Oncology',
    titleAr: 'العلاج المناعي للأورام بمثبطات نقاط التفتيش',
    leadEn: 'Clinical application of T cell biology to eradicate human tumors:',
    leadAr: 'التطبيق السريري لبيولوجيا الخلايا التائية في علاج الأورام الخبيثة:',
    bulletsEn: [
      'Tumors exploit natural T cell inhibitory checkpoint pathways (CTLA-4 and PD-1/PD-L1) to evade CD8+ CTL killing.',
      'Anti-CTLA-4 monoclonal antibodies (Ipilimumab) block inhibitory binding in lymph nodes, restoring CD28 costimulation.',
      'Anti-PD-1 / Anti-PD-L1 antibodies (Nivolumab, Pembrolizumab) prevent exhaustion of CTLs in the tumor microenvironment.',
      'Unleashes tumor-specific CD8+ CTL cytotoxicity, yielding durable cancer remissions in melanoma, lung, and renal carcinomas.'
    ],
    bulletsAr: [
      'تستغل الخلايا الورمية مسارات التثبيط المناعي الطبيعية (CTLA-4 و PD-1) للهروب من هجوم خلايا CD8+ القاتلة.',
      'الأجسام المضادة الموجهة ضد CTLA-4 (إيبيليموماب) تمنع التثبيط بالعقد اللمفاوية وتعيد التحفيز المشترك عبر CD28.',
      'الأجسام المضادة الموجهة ضد PD-1 (نيفولوماب وبيمبروليزوماب) تنقذ الخلايا القاتلة من الإعياء الورمي وتطلق سميتها.',
      'تطلق هذه العلاجات العنان لخلايا CD8+ لتدمير الأورام الخبيثة وتحقيق الشفاء في سرطانات الجلد والرئة والكلية.'
    ]
  },
  {
    slideNumber: 49,
    topicEn: 'Primary Immunodeficiencies of CMI',
    topicAr: 'العوز المناعي الأولي في المناعة الخلوية',
    titleEn: 'Clinical Syndromes of T Cell Deficiency',
    titleAr: 'المتناذرات السريرية للعوز المناعي في الخلايا التائية',
    leadEn: 'Genetic defects compromising cell-mediated immune defense:',
    leadAr: 'الخلل الوراثي المعطل للاستجابات المناعية المتوسطة بالخلايا:',
    bulletsEn: [
      'Severe Combined Immunodeficiency (SCID): Defects in common gamma chain (IL-2RG) or ADA; near-total absence of functional T cells.',
      'DiGeorge Syndrome: 22q11.2 deletion -> thymic hypoplasia -> marked deficiency of mature T cells with severe fungal/viral susceptibility.',
      'Bare Lymphocyte Syndrome Type I (BLS-I): TAP1/TAP2 gene mutations -> absence of surface MHC Class I -> lack of CD8+ CTLs.',
      'Bare Lymphocyte Syndrome Type II (BLS-II): CIITA transcription factor mutations -> absence of MHC Class II -> severe CD4+ deficiency.'
    ],
    bulletsAr: [
      'عوز المناعة المشترك الشديد (SCID): طفرات في سلسلة غاما لمستقبلات الإنترلوكين أو إنزيم ADA؛ غياب شبه تام للتائيات.',
      'متلازمة دي جورج (DiGeorge): طفرة 22q11.2 -> عدم تخلق الغدة الصعترية -> غياب نضج التائيات وقابلية شديدة للفيروسات والفطريات.',
      'متلازمة اللمفاويات العارية النمط الأول (BLS-I): طفرة في جينات TAP1/TAP2 -> غياب جزيئات MHC-I السطحية وعوز CD8+ CTL.',
      'متلازمة اللمفاويات العارية النمط الثاني (BLS-II): طفرة بعامل النسخ CIITA -> غياب جزيئات MHC-II وعوز شديد بالخلايا المساعدة CD4+.'
    ]
  },
  {
    slideNumber: 50,
    topicEn: 'Delayed-Type Hypersensitivity (DTH / Tuberculin Test)',
    topicAr: 'فرط التحسس الآجل (اختبار السلين DTH)',
    titleEn: 'Delayed-Type Hypersensitivity (Type IV / DTH)',
    titleAr: 'فرط التحسس الآجل من النمط الرابع (اختبار السلين DTH)',
    leadEn: 'Clinical manifestation and diagnostic use of cell-mediated immunity:',
    leadAr: 'المظهر السريري والاستخدام التشخيصي للمناعة المتوسطة بالخلايا:',
    bulletsEn: [
      'Type IV Hypersensitivity (DTH) is a purely cell-mediated (non-antibody) immune reaction peaking at 24–72 hours.',
      'Tuberculin (Mantoux) Skin Test: Intradermal injection of PPD (Purified Protein Derivative from M. tuberculosis).',
      'In sensitized individuals, memory CD4+ Th1 cells recognize pMHC-II on dermal APCs and secrete IFN-γ and TNF-α.',
      'Recruits and activates macrophages, causing erythema and palpable induration at 48–72 hours.',
      'Direct in vivo confirmation of functional cell-mediated immune memory.'
    ],
    bulletsAr: [
      'فرط التحسس الآجل (النمط الرابع DTH) هو تفاعل مناعي خلوية بحت (لا يعتمد على الأضداد) يبلغ ذروته خلال 24-72 ساعة.',
      'اختبار السلين الجلدي (Mantoux): حقن مشتق بروتيني منقى (PPD) لبكتيريا السل داخل الأدمة.',
      'تتعرف خلايا Th1 الذاكرة على المستضد في الجلد وتفرز IFN-γ و TNF-α لتجنيد وتفعيل البلعميات.',
      'يؤدي التجمع الخلوي والوذمة إلى تشكل قساوة واحمرار جلدي مقاس بالمليمتر بعد 48-72 ساعة كدليل على الذاكرة الخلوية.'
    ]
  },
  {
    slideNumber: 51,
    topicEn: 'Cytokine Spectrum in Cell-Mediated Immunity',
    topicAr: 'طيف السيتوكينات في المناعة المتوسطة بالخلايا',
    titleEn: 'Key Cytokines of Cell-Mediated Immunity',
    titleAr: 'السيتوكينات المفتاحية في المناعة المتوسطة بالخلايا',
    leadEn: 'Summary of the principal chemical messengers driving CMI:',
    leadAr: 'ملخص الرسل الكيميائية الأساسية الموجهة للاستجابة المناعية الخلوية:',
    bulletsEn: [
      'IL-2: T-cell growth factor, drives autocrine clonal expansion and memory survival.',
      'IL-12: Produced by DCs/macrophages; induces Th1 differentiation and stimulates IFN-γ secretion by NK/T cells.',
      'IFN-γ: Produced by Th1, CD8+ CTL, and NK cells; master activator of M1 macrophages and MHC upregulation.',
      'IL-17: Produced by Th17 cells; drives neutrophil recruitment and mucosal antimicrobial peptide synthesis.',
      'IL-10 / TGF-β: Regulatory and immunosuppressive cytokines that terminate CMI and promote tissue healing.'
    ],
    bulletsAr: [
      'إنترلوكين-2 (IL-2): عامل نمو الخلايا التائية، يحفز التكاثر النسيلي الذاتي وبقاء خلايا الذاكرة.',
      'إنترلوكين-12 (IL-12): تفرزه البلعميات والتغصنية، يوجه تمايز Th1 ويحفز إفراز IFN-γ من خلايا NK والتائيات.',
      'غاما إنترفيرون (IFN-γ): تفرزه Th1 وخلايا CTL و NK، وهو المنشط الأكبر لبلعميات M1 ورافع تعبير معقدات MHC.',
      'إنترلوكين-17 (IL-17): تفرزه خلايا Th17، ويقود تجنيد العدلات وإفراز الببتيدات المضادة للجراثيم.',
      'إنترلوكين-10 و TGF-β: سيتوكينات كابحة للمناعة تنهي الاستجابة وتطلق عمليات التئام وترميم الأنسجة.'
    ]
  },
  {
    slideNumber: 52,
    topicEn: 'Clinical Summary: Integrated Cell-Mediated Defense',
    topicAr: 'الخلاصة السريرية: الدفاع المناعي الخلوي المتكامل',
    titleEn: 'Integrated Model of Cell-Mediated Host Defense',
    titleAr: 'النموذج المتكامل للدفاع المناعي المتوسط بالخلايا',
    leadEn: 'Coordinated paradigm of innate and adaptive cellular eradication:',
    leadAr: 'المنظومة المتناسقة بين الخلايا الفطرية والتكيفية للقضاء على الميكروبات:',
    bulletsEn: [
      'Innate sentinels (Macrophages, DCs, NK cells) contain initial pathogen load and produce IL-12/IFN-γ.',
      'DCs capture antigens, mature, migrate to lymph nodes, and present pMHC complexes to naive T cells.',
      '3-Signal activation triggers exponential clonal expansion and differentiation into Th1, Th2, Th17, or CD8+ CTLs.',
      'Effector T cells migrate back to infected peripheral tissues to execute classical macrophage activation (CD4+) or direct cytolysis (CD8+).',
      'Contraction phase restores homeostasis, leaving durable memory T cells for lifelong protection.'
    ],
    bulletsAr: [
      'تحتوي خلايا المناعة الفطرية (البلعميات، التغصنية، و NK) الغزو الأولي وتفرز سيتوكينات التوجيه IL-12 و IFN-γ.',
      'تلتقط الخلايا التغصنية المستضدات وتهاجر للعقد اللمفاوية لتقديمها عبر الإشارات الثلاث للخلايا التائية الساذجة.',
      'تتكاثر الخلايا التائية وتتمايز إلى سلالات فاعلة متخصصة (Th1, Th2, Th17, أو CD8+ CTLs).',
      'تهاجر الخلايا التائية الفاعلة للأنسجة المصابة لتفعيل البلعميات أو قتل الخلايا المصابة بالفيروسات مباشرة.',
      'تنتهي المعركة بمرحلة الانكماش تاركة خلايا ذاكرة مستدامة توفر مناعة سريعة مدى الحياة.'
    ]
  },
  {
    slideNumber: 53,
    topicEn: 'Master Lecture Review & Final Exam Pearls',
    topicAr: 'المراجعة الشاملة للمحاضرة ونقاط الامتحان النهائي',
    titleEn: 'Dr. Rana Habib Immunology: Master Review & Pearls',
    titleAr: 'مقرر المناعة للدكتورة رنا حبيب: مراجعة شاملة ونقاط امتحانية',
    leadEn: 'Essential board-level takeaways from Dr. Rana Habib’s 53 lecture slides:',
    leadAr: 'الخلاصات الامتحانية والسريرية الجوهرية من شرائح الدكتورة رنا حبيب الـ 53:',
    bulletsEn: [
      'MHC-I = Cytosolic antigens -> Proteasome -> TAP -> ER -> CD8+ CTLs (all nucleated cells).',
      'MHC-II = Endosomal antigens -> Cathepsins -> Invariant chain/CLIP/HLA-DM -> CD4+ Th cells (professional APCs).',
      '3 Signals = 1) TCR:pMHC, 2) B7:CD28 (Signal 1 alone = Anergy), 3) Cytokines (IL-12->Th1, IL-4->Th2, IL-6/TGF-β->Th17).',
      'CTL Killing = Perforin (13-20nm pores) + Granzyme B (Caspase-3 & Bid cleavage) & FasL:Fas (DISC -> Caspase-8).',
      'Th1-Macrophage = CD40L:CD40 + IFN-γ -> Classical M1 activation (iNOS -> NO, Oxidase -> ROS).'
    ],
    bulletsAr: [
      'معقد MHC-I = مستضدات هيولية -> بروتيازوم -> ناقل TAP -> شبكة هيولية -> خلايا CD8+ (كافة الخلايا ذات النواة).',
      'معقد MHC-II = مستضدات بالوعية -> كاثيبسين -> السلسلة الثابتة و CLIP و HLA-DM -> خلايا CD4+ (الخلايا العارضة المحترفة).',
      'الإشارات الثلاث = 1) معقد pMHC-TCR، 2) التحفيز B7-CD28 (الإشارة 1 وحدها تسبب الخمول)، 3) السيتوكينات الموجهة.',
      'القتل بـ CTL = بيرفورين (ثقوب 13-20 نانومتر) + غرانزايم B (تفعيل كاسباز-3 وبروتين Bid) ومسار FasL-Fas (معقد DISC وكاسباز-8).',
      'حلقة Th1 والبلعميات = ارتباط CD40L مع CD40 بالإضافة لـ IFN-γ -> التفعيل الكلاسيكي M1 (إنزيم iNOS يولد NO وأنزيم الأكسيداز يولد ROS).'
    ],
    calloutEn: 'Congratulations on mastering Dr. Rana Habib\'s 53 Immunology Slides!',
    calloutAr: 'تهانينا على إتقان كافة الشرائح الـ 53 لمقرر المناعة للدكتورة رنا حبيب!'
  }
];
