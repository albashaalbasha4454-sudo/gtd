import { ComparisonMatrix } from '../types/immunology';

export const COMPARISON_MATRICES: ComparisonMatrix[] = [
  {
    id: 'mhc-i-vs-ii',
    title: 'MHC Class I vs MHC Class II Master Comparison',
    titleAr: 'المقارنة الشاملة بين معقد التوافق النسيجي MHC-I و MHC-II',
    description: 'Detailed structural, biochemical, genetic, and physiological comparison from Slides 19–21 & 23–26.',
    descriptionAr: 'مقارنة بنيوية وكيميائية ووراثية ووظيفية دقيقة مستخلصة من الشرائح 19-21 و 23-26.',
    headers: ['Criterion', 'MHC Class I', 'MHC Class II'],
    headersAr: ['المعيار', 'MHC الصنف الأول (MHC-I)', 'MHC الصنف الثاني (MHC-II)'],
    mnemonicKeyEn: '★ The Rule of 8: (MHC-I × CD8 = 8) & (MHC-II × CD4 = 8). MHC-I has 1 heavy chain + β2m; MHC-II has 2 chains (α and β).',
    mnemonicKeyAr: '★ قاعدة الرقم 8 الذهبية: حاصل ضرب الرتبة دائماً 8 (MHC-I × CD8 = 8) و (MHC-II × CD4 = 8). الصنف 1 له سلسلة أساسية واحدة مع β2m، والصنف 2 له سلسلتان (α و β).',
    rows: [
      {
        feature: 'Cellular Distribution',
        featureAr: 'التوزع الخلوي في الجسم',
        col1: 'All nucleated cells & platelets',
        col1Ar: 'جميع الخلايا المنواة في الجسم + الصفيحات',
        col2: 'Professional APCs only (DCs, Macrophages, B cells)',
        col2Ar: 'الخلايا العارضة للمستضد المحترفة حصراً (الشجيرية، البلعميات، البائية)',
        highlight: true,
        mnemonic: 'MHC-I is internal ID for ALL nucleated citizens; MHC-II is uniform for specialized police scouts.',
        mnemonicAr: 'MHC-I هو بطاقة هوية داخلية لكل مواطن منوى؛ MHC-II هو زي الكشافة المتخصصة فقط.'
      },
      {
        feature: 'Recognized By',
        featureAr: 'يتم التعرف عليه بواسطة',
        col1: 'CD8+ Cytotoxic T Lymphocytes (CTLs)',
        col1Ar: 'الخلايا التائية السامة القاتلة (CD8+ CTLs)',
        col2: 'CD4+ Helper T Lymphocytes (Th)',
        col2Ar: 'الخلايا التائية المساعدة (CD4+ Th)',
        highlight: true,
        mnemonic: '1 × 8 = 8 (CTL Killing) | 2 × 4 = 8 (Helper Orchestration)',
        mnemonicAr: '1 × 8 = 8 (القتل بالسمية) | 2 × 4 = 8 (المساعدة والتنسيق)'
      },
      {
        feature: 'Polypeptide Chains',
        featureAr: 'السلاسل الببتيدية المكونة',
        col1: '1 Polymorphic α chain (α1, α2, α3) + 1 Invariant β2-microglobulin (β2m)',
        col1Ar: 'سلسلة متغايرة ثقيلة α (α1, α2, α3) + سلسلة ثابتة β2-ميكروغلوبيولين',
        col2: '1 Polymorphic α chain (α1, α2) + 1 Polymorphic β chain (β1, β2)',
        col2Ar: 'سلسلة متغايرة α (α1, α2) + سلسلة متغايرة β (β1, β2)'
      },
      {
        feature: 'Peptide Binding Cleft',
        featureAr: 'شِق أو ثلم ارتباط الببتيد',
        col1: 'Formed by α1 and α2 domains (closed ends)',
        col1Ar: 'يتشكل من النطاقين α1 و α2 (مغلق الطرفين مثل الصندوق المغلق)',
        col2: 'Formed by α1 and β1 domains (open ends)',
        col2Ar: 'يتشكل من النطاقين α1 و β1 (مفتوح الطرفين مثل الخبز المحشو من الجانبين)'
      },
      {
        feature: 'Accommodated Peptide Size',
        featureAr: 'حجم الببتيد المستضاف',
        col1: '8 – 11 amino acids (short, snugly fitted)',
        col1Ar: '8 إلى 11 حمضاً أمينياً (قصير ومحكم داخل الشِق)',
        col2: '10 – 30+ amino acids (longer, overhangs cleft)',
        col2Ar: '10 إلى 30+ حمضاً أمينياً (أطول، تتدلى أطرافه خارج الشِق)'
      },
      {
        feature: 'Source of Antigens',
        featureAr: 'مصدر المستضدات المعروضة',
        col1: 'Endogenous (Cytosolic synthesized proteins, viral proteins, tumor antigens)',
        col1Ar: 'داخل خلوية / هيولية (فيروسات متكاثرة، بروتينات سرطانية، بروتينات ذاتية)',
        col2: 'Exogenous (Extracellular internalized proteins, bacteria, fungi)',
        col2Ar: 'خارج خلوية / ملتقطة بالبلعمة (جراثيم وفطريات ومفرزات خارجية)',
        highlight: true
      },
      {
        feature: 'Proteolytic Machinery',
        featureAr: 'آلية تقطيع البروتين',
        col1: 'Proteasome (20S/26S cytosolic complex + immunoproteasome)',
        col1Ar: 'البروتيازوم الهيولي (الجسيم البروتيني 26S ومعدلات الإنترفيرون)',
        col2: 'Endosomal and Lysosomal acid proteases (Cathepsins B, D, L, S)',
        col2Ar: 'إنزيمات الكاثيبسين الحامضية في الجسيمات الحالة والبالعة'
      },
      {
        feature: 'Peptide Transporter',
        featureAr: 'ناقل الببتيد للشبكة الباطنة',
        col1: 'TAP1 / TAP2 transporter into ER lumen (ATP-dependent)',
        col1Ar: 'مضخة TAP1 / TAP2 الفعالة إلى لمعة الشبكة الباطنة',
        col2: 'Not required (loaded in late endosomal vesicles / MIIC)',
        col2Ar: 'غير مطلوب (يتم التحميل في الحويصلات الإندوزومية المتأخرة)'
      },
      {
        feature: 'Chaperone / Groove Blocker',
        featureAr: 'المرافقات وسدادات الأمان',
        col1: 'Calreticulin, Tapasin, ERp57, Calnexin',
        col1Ar: 'تاباسين (Tapasin)، كالسيكولين، كالبكتين، ERp57',
        col2: 'Invariant chain (Ii) -> cleaved to CLIP -> HLA-DM catalyzes exchange',
        col2Ar: 'السلسلة الثابتة Ii -> تتحول إلى CLIP -> ثم يبدلها HLA-DM'
      },
      {
        feature: 'Co-receptor Binding Site',
        featureAr: 'موقع ارتباط المستقبل المساعد',
        col1: 'CD8 binds to invariant α3 domain',
        col1Ar: 'يرتبط CD8 بالنطاق غير المتبدل α3',
        col2: 'CD4 binds to invariant β2 domain',
        col2Ar: 'يرتبط CD4 بالنطاق غير المتبدل β2'
      },
      {
        feature: 'Primary Function',
        featureAr: 'الوظيفة الفسيولوجية الأساسية',
        col1: 'Surveillance of intracellular health; target cell destruction',
        col1Ar: 'مراقبة سلامة الهيولى وقتل الخلايا المصابة بالفيروسات والأورام',
        col2: 'Instruction & activation of helper T cells and cytokine cascades',
        col2Ar: 'توجيه وتنشيط الخلايا المساعدة وإطلاق شلال السيتوكينات'
      }
    ]
  },
  {
    id: 'th-subsets-matrix',
    title: 'CD4+ T Helper Subsets (Th1 vs Th2 vs Th17)',
    titleAr: 'مقارنة سلالات الخلايا التائية المساعدة (Th1 مقابل Th2 مقابل Th17)',
    description: 'Lineage induction, master transcription factors, cytokine signatures, and target pathogens from Slides 40–43.',
    descriptionAr: 'عوامل التمايز، المحولات النسخية الرئيسية، السيتوكينات المميزة، والأهداف الجرثومية من الشرائح 40-43.',
    headers: ['Feature', 'Th1 Subset', 'Th2 Subset', 'Th17 Subset'],
    headersAr: ['الخاصية', 'سلالة Th1 (البلعميات والمناعة الخلوية)', 'سلالة Th2 (الحساسية والديدان)', 'سلالة Th17 (المخاطيات والفطريات)'],
    mnemonicKeyEn: '★ Mnemonics: Th1 = T-bet (TB, Intracellular, IFN-γ). Th2 = GATA-3 (Go Away Toxins/Allergens, IL-4/5/13). Th17 = RORγt (Recruits Neutrophils, IL-17).',
    mnemonicKeyAr: '★ مفتاح الحفظ: Th1 = عامل T-bet (السل والجراثيم داخل الخلوية بـ IFN-γ). Th2 = عامل GATA-3 (الحساسية والديدان بـ IL-4/5/13). Th17 = عامل RORγt (تجنيد العدلات والفطريات بـ IL-17).',
    rows: [
      {
        feature: 'Inducing Cytokines',
        featureAr: 'السيتوكينات المحرضة للتمايز',
        col1: 'IL-12, IFN-γ',
        col1Ar: 'IL-12 (من البلعميات) و IFN-γ',
        col2: 'IL-4',
        col2Ar: 'IL-4 (من الخلايا الصارية والأنسجة)',
        col3: 'IL-1, IL-6, IL-23, TGF-β',
        col3Ar: 'IL-1 و IL-6 و IL-23 و TGF-β',
        highlight: true
      },
      {
        feature: 'Master Transcription Factor',
        featureAr: 'عامل النسخ الرئيسي الموجه',
        col1: 'T-bet (via STAT4, STAT1)',
        col1Ar: 'T-bet (عبر STAT4 و STAT1)',
        col2: 'GATA-3 (via STAT6)',
        col2Ar: 'GATA-3 (عبر STAT6)',
        col3: 'RORγt (via STAT3)',
        col3Ar: 'RORγt (عبر STAT3)',
        highlight: true
      },
      {
        feature: 'Signature Cytokines',
        featureAr: 'السيتوكينات المفرزة المميزة',
        col1: 'IFN-γ, IL-2, TNF',
        col1Ar: 'IFN-γ (الإنترفيرون غاما) و IL-2 و TNF',
        col2: 'IL-4, IL-5, IL-13',
        col2Ar: 'IL-4 (تبديل IgE) و IL-5 (تنشيط الحمضات) و IL-13',
        col3: 'IL-17, IL-22',
        col3Ar: 'IL-17 (جذب العدلات) و IL-22 (ترميم الحواجز)',
        highlight: true
      },
      {
        feature: 'Principal Cellular Targets',
        featureAr: 'الخلايا المستهدفة بالتنشيط',
        col1: 'Macrophages (M1 classical activation), CD8+ T cells',
        col1Ar: 'البلعميات الكبيرة (تنشيط كلاسيكي M1) وخلايا CD8+',
        col2: 'B cells (IgE switch), Eosinophils, Mast cells, M2 Macrophages',
        col2Ar: 'الخلايا البائية (إنتاج IgE)، الحمضات، الخلايا البدينة',
        col3: 'Neutrophils, Epithelial barrier cells, Mucosal linings',
        col3Ar: 'العدلات (Neutrophils)، الخلايا الظهارية والمخاطيات'
      },
      {
        feature: 'Target Pathogen Spectrum',
        featureAr: 'طيف الميكروبات المستهدفة',
        col1: 'Intracellular bacteria (Mycobacteria, Listeria), viruses, protozoa (Leishmania)',
        col1Ar: 'الميكروبات داخل الخلوية (المتفطرة السلية، الليستيريا، الليشمانيا)',
        col2: 'Helminths, parasitic worms, extracellular allergens',
        col2Ar: 'الديدان الطفيلية، الطفيليات الكبيرة، والمستأرجات الحساسية',
        col3: 'Extracellular bacteria (Klebsiella, S. aureus), fungi (Candida)',
        col3Ar: 'الجراثيم خارج الخلوية المقاومة، الفطريات (المبيضات البيض Candida)'
      },
      {
        feature: 'Immunopathology Role',
        featureAr: 'الدور في الإمراضية المناعية',
        col1: 'Autoimmune tissue damage, Chronic Granulomatous inflammation',
        col1Ar: 'أضرار المناعة الذاتية، الالتهاب الحبيبي المزمن (Granuloma)',
        col2: 'Atopic allergic diseases, Asthma, Eczema, Allergic rhinitis',
        col2Ar: 'أمراض الحساسية التأتية، الربو القصبي، الأكزيما التأتبية',
        col3: 'Psoriasis, Ankylosing Spondylitis, Inflammatory Bowel Disease (IBD)',
        col3Ar: 'الصدفية، التهاب المفاصل الرثياني، داء الأمعاء الالتهابي (IBD)'
      }
    ]
  },
  {
    id: 'cd4-vs-cd8',
    title: 'CD4+ Helper vs CD8+ Cytotoxic T Lymphocytes',
    titleAr: 'مقارنة الخلايا التائية المساعدة CD4+ والخلايا السامة CD8+',
    description: 'Functional, receptor, and effector differentiation from Slides 13–15, 36–39, 40–43.',
    descriptionAr: 'الفروق الوظيفية والمستقبلية والتأثيرية من الشرائح 13-15 و 36-39 و 40-43.',
    headers: ['Parameter', 'CD4+ Helper T Cells (Th)', 'CD8+ Cytotoxic T Cells (CTL)'],
    headersAr: ['المعيار', 'الخلايا التائية المساعدة (CD4+ Th)', 'الخلايا التائية السامة القاتلة (CD8+ CTL)'],
    mnemonicKeyEn: '★ CD4 = Commander/Helper (Directs immune army via cytokines); CD8 = Sniper/Assassin (Delivers lethal hit to infected cells).',
    mnemonicKeyAr: '★ CD4 = القائد الموجه (يصدر الأوامر بالسيتوكينات ويساعد البلاعم والبائيات)؛ CD8 = القناص المنفذ (يقتل الخلية المصابة مباشرة دون إيذاء الجوار).',
    rows: [
      {
        feature: 'MHC Restriction',
        featureAr: 'التقيد بمعقد التوافق النسيجي',
        col1: 'MHC Class II (recognizes α1/β1 groove, binds β2 domain)',
        col1Ar: 'MHC الصنف الثاني (يرتبط بنطاق β2 غير المتبدل)',
        col2: 'MHC Class I (recognizes α1/α2 groove, binds α3 domain)',
        col2Ar: 'MHC الصنف الأول (يرتبط بنطاق α3 غير المتبدل)',
        highlight: true
      },
      {
        feature: 'Predominant Effector Action',
        featureAr: 'الفعل التأثيري الغالب',
        col1: 'Secretory (Cytokine release to help/activate other immune cells)',
        col1Ar: 'إفرازي تنسيقي (إطلاق السيتوكينات لتنشيط البلاعم والبائيات)',
        col2: 'Direct Cytotoxicity (Lethal hit inducing target cell apoptosis)',
        col2Ar: 'سمية خلوية مباشرة (الضربة القاتلة وإحداث الموت المبرمج Apoptosis)',
        highlight: true
      },
      {
        feature: 'Primary Target Cells',
        featureAr: 'الخلايا الهدف للتفاعل',
        col1: 'APCs (Dendritic cells, Macrophages, B cells)',
        col1Ar: 'الخلايا العارضة (الشجيرية، البلعميات، البائية)',
        col2: 'Any virus-infected host cell, tumor cell, or allograft',
        col2Ar: 'أي خلية منواة مصابة بفيروس، خلية سرطانية، أو طعم غريب'
      },
      {
        feature: 'Key Effector Products',
        featureAr: 'الجزيئات التأثيرية الرئيسية',
        col1: 'IFN-γ, IL-4, IL-5, IL-17, IL-2, TNF, CD40L',
        col1Ar: 'سيتوكينات منوعة (IFN-γ, IL-4, IL-17, IL-2) ورابط CD40L',
        col2: 'Perforin, Granzyme B, FasL (CD95L), IFN-γ',
        col2Ar: 'بيرفورين، غرانزايم ب، رابط FasL (CD95L)، و IFN-γ'
      },
      {
        feature: 'Role in Microbial Defense',
        featureAr: 'الدور في الدفاع الميكروبي',
        col1: 'Eradicates phagocytosed microbes & orchestrates humoral/cellular arms',
        col1Ar: 'القضاء على الميكروبات المبتلعة في الحويصلات ودعم إنتاج الأضداد',
        col2: 'Eradicates cytosolic replicating viruses and escapee bacteria',
        col2Ar: 'إبادة الفيروسات المتكاثرة في الهيولى والميكروبات الهاربة'
      }
    ]
  },
  {
    id: 'humoral-vs-cellular',
    title: 'Humoral vs Cell-Mediated Immunity',
    titleAr: 'المناعة الخلطية (بالأضداد) مقابل المناعة الخلوية (بالخلايا التائية)',
    description: 'Fundamental dual-arm comparison of Adaptive Immunity from Slides 4–8.',
    descriptionAr: 'المقارنة الأساسية بين ذراعي المناعة المكتسبة من الشرائح 4-8.',
    headers: ['Attribute', 'Humoral Immunity', 'Cell-Mediated Immunity (CMI)'],
    headersAr: ['السمة', 'المناعة الخلطية (Humoral)', 'المناعة المتوسطة بالخلايا (CMI)'],
    mnemonicKeyEn: '★ Humoral = Fluids/Antibodies (Extracellular threats); Cellular = T-Cells (Intracellular infected cells and phagocytosed microbes).',
    mnemonicKeyAr: '★ الخلطية = بالسوائل والأضداد (ضد الأخطار خارج الخلوية والسموم)؛ الخلوية = بالخلايا التائية (ضد الميكروبات المختبئة داخل الخلايا والأورام).',
    rows: [
      {
        feature: 'Key Mediating Cells',
        featureAr: 'الخلايا المتوسطة الرئيسية',
        col1: 'B Lymphocytes (differentiating into Plasma Cells)',
        col1Ar: 'الخلايا اللمفاوية البائية (B Cells -> خلايا بلازمية)',
        col2: 'T Lymphocytes (CD4+ Th and CD8+ CTL)',
        col2Ar: 'الخلايا اللمفاوية التائية (خلايا CD4+ Th وخلايا CD8+ CTL)'
      },
      {
        feature: 'Effector Arm Mechanism',
        featureAr: 'آلية العمل التأثيري',
        col1: 'Secreted Antibodies circulating in body fluids',
        col1Ar: 'أضداد مفرزة وسارية في السوائل والدم والمخاطيات',
        col2: 'Direct cell contact (killing) & localized cytokine secretion',
        col2Ar: 'تماس خلوي مباشر وقتل سام وإفراز سيتوكينات موضعية'
      },
      {
        feature: 'Site of Microbe Combat',
        featureAr: 'ميدان المعركة وموقع الميكروب',
        col1: 'Extracellular spaces (blood, lymph, mucosal lumens, interstitial fluid)',
        col1Ar: 'الفراغات خارج الخلوية (الدم، اللمف، لمعة المخاطيات، السائل الخلالي)',
        col2: 'Intracellular environments (phagosomes, host cell cytosol)',
        col2Ar: 'البيئات داخل الخلوية (حويصلات البلعمة، هيولى الخلية المضيفة)'
      },
      {
        feature: 'Protection Against',
        featureAr: 'الحماية المكتسبة ضد',
        col1: 'Extracellular bacterial toxins, circulating viruses, encapsulated bacteria',
        col1Ar: 'السموم الجرثومية، الفيروسات السارية، الجراثيم المحفظة',
        col2: 'Viruses, intracellular bacteria (TB, Listeria), fungi, tumors, grafts',
        col2Ar: 'الفيروسات داخل الخلوية، عصيات السل، الليستيريا، الفطريات، الأورام'
      },
      {
        feature: 'Passive Transfer Mode',
        featureAr: 'طريقة النقل المنفعل (Passive Transfer)',
        col1: 'Transferred via Serum / Purified Immunoglobulins (Maternal IgG/IgA)',
        col1Ar: 'يُنقل بمصل الدم والأضداد المنقاة (مثل IgG الأمومي عبر المشيمة)',
        col2: 'Transferred strictly via Live, Intact T Lymphocytes',
        col2Ar: 'لا يُنقل بالمصل؛ يُنقل حصراً بخلايا تائية حية سليمة'
      }
    ]
  },
  {
    id: 'signal-1-2-3',
    title: 'The 3-Signal Model of T Lymphocyte Activation',
    titleAr: 'نموذج الإشارات الثلاث لتفعيل الخلايا التائية (Three-Signal Model)',
    description: 'Signal hierarchy, molecular pairs, and operational outcomes from Slides 29–33.',
    descriptionAr: 'تراتبية الإشارات، الأزواج الجزيئية، والنتائج الوظيفية من الشرائح 29-33.',
    headers: ['Signal', 'Molecular Interactions', 'Functional Purpose', 'Consequence if Missing'],
    headersAr: ['الإشارة', 'التفاعل الجزيئي', 'الهدف الوظيفي', 'النتيجة في حال غياب الإشارة'],
    mnemonicKeyEn: '★ Signal 1 = Ignition Key (TCR:MHC). Signal 2 = Safety Clutch (B7:CD28). Signal 3 = Steering GPS (Cytokines -> Lineage Th1/2/17/CTL).',
    mnemonicKeyAr: '★ الإشارة 1 = مفتاح التشغيل (TCR:MHC). الإشارة 2 = دواسة الأمان (B7:CD28). الإشارة 3 = مقود التوجيه الملاحي (السيتوكينات -> تحديد السلالة).',
    rows: [
      {
        feature: 'Signal 1: Antigen Recognition',
        featureAr: 'الإشارة 1: التعرف على المستضد النوعي',
        col1: 'TCR:pMHC + CD4/CD8 co-receptors + CD3/ζ ITAMs',
        col1Ar: 'معقد TCR مع ببتيد MHC + المستقبل المساعد CD4/CD8 + سلاسل CD3/ζ',
        col2: 'Provides antigen specificity and initiates intracellular phosphorylation',
        col2Ar: 'يمنح التخصص للمستضد ويطلق الفسفرة الهيولية الأولية',
        col3: 'No T cell awareness; cell remains in resting naive state',
        col3Ar: 'الخلية التائية لا تشعر بالميكروب وتبقى هاجعة'
      },
      {
        feature: 'Signal 2: Costimulation',
        featureAr: 'الإشارة 2: التحفيز المشترك الإلزامي',
        col1: 'B7-1 (CD80) / B7-2 (CD86) on APC <-> CD28 on T cell',
        col1Ar: 'جزيئات B7-1 (CD80) و B7-2 (CD86) على الخلية العارضة <-> مستقبل CD28',
        col2: 'Provides survival, IL-2 transcription, prevents tolerance',
        col2Ar: 'يضمن البقاء، يحفز نسخ IL-2، ويمنع التحمل المناعي',
        col3: 'T cell ANERGY (unresponsiveness), tolerance, or apoptosis!',
        col3Ar: 'اللاتجاوب المناعي (Anergy) أو الموت المبرمج للخلية!',
        highlight: true
      },
      {
        feature: 'Signal 3: Cytokine Milieu',
        featureAr: 'الإشارة 3: البيئة السيتوكينية الموجهة',
        col1: 'IL-12, IL-4, IL-1, IL-6, IL-23, TGF-β from APC/environment',
        col1Ar: 'سيتوكينات IL-12 أو IL-4 أو IL-6 و TGF-β من الخلية العارضة',
        col2: 'Instructs effector lineage commitment (Th1, Th2, Th17, CTL) & expansion',
        col2Ar: 'يوجه تمايز الخلية نحو السلالة التأثيرية الملائمة لنوع الغازي',
        col3: 'Incomplete or unpolarized effector differentiation',
        col3Ar: 'تمايز ناقص أو غير مستقطب عاجز عن حسم المعركة'
      }
    ]
  }
];
