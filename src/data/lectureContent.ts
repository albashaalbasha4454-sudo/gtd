import { SlideModule, CytokineData, PathogenClassData } from '../types/immunology';

export const LECTURE_MODULES: SlideModule[] = [
  {
    id: 'mod-1',
    title: 'Adaptive Immunity Overview & Cardinal Features',
    titleArabic: 'المناعة التلاؤمية والخصائص الجوهرية',
    slideRange: 'Slides 1–3',
    description: 'Definition, adaptation dynamics, and the 5 foundational pillars defining adaptive immune protection.',
    keyConcepts: [
      'Adaptive (Specific/Acquired) Immunity requires expansion and differentiation of lymphocytes in response to microbes.',
      'Adapts dynamically to the specific presence of microbial invaders.',
      'Significantly more specialized and powerful than innate baseline immunity.',
      'Cardinal Features: Specificity, Diversity, Immunologic Memory, Self/Non-self Discrimination, Self-Limitation.'
    ],
    clinicalPearls: [
      'The self-limiting property prevents chronic hyper-inflammation and preserves metabolic energy by returning lymphocytes to a resting basal state after pathogen clearance.',
      'Vaccination success relies fundamentally on the immunologic memory feature (enhanced speed and magnitude upon secondary exposure).'
    ],
    bilingualTerms: [
      { english: 'Adaptive Immunity', arabic: 'المناعة التلاؤمية / المكتسبة', context: 'Specific immune response developed post-exposure' },
      { english: 'Expansion and Differentiation', arabic: 'التكاثر والتمايز', context: 'Lymphocyte clonal proliferation into effector and memory cells' },
      { english: 'Self-limiting', arabic: 'ذاتية التحديد / الانضباط الذاتي', context: 'Contraction phase returning to basal homeostasis' },
      { english: 'Immunologic Memory', arabic: 'الذاكرة المناعية', context: 'Accelerated, heightened secondary response' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Definition and Characteristics',
        paragraphs: [
          'Adaptive immunity, also referred to as specific immunity or acquired immunity, is defined by its requirement for the clonal expansion and functional differentiation of antigen-specific lymphocytes (T and B cells) upon encountering microbial antigens.',
          'Unlike innate immunity, which provides immediate, pre-formed, generalized defense mechanisms, adaptive immunity undergoes fine-tuned structural adaptation and somatic receptor rearrangement to counter specific pathogenic epitopes with high potency.'
        ],
        bulletPoints: [
          'High Specificity: Distinguishes minute differences in molecular epitopes.',
          'Broad Repertoire Diversity: Can recognize billions of distinct antigenic determinants.',
          'Clonal Memory: Generates long-lived memory cells that mount rapid, amplified responses upon subsequent antigen re-encounter.',
          'Self / Non-Self Discrimination: Tolerant to host tissue while vigorously attacking non-self or altered-self molecules.',
          'Self-Limiting Nature: Following pathogen eradication, effector cells undergo apoptosis (activation-induced cell death/contraction), conserving metabolic reserves.'
        ]
      }
    ]
  },
  {
    id: 'mod-2',
    title: 'Branches of Adaptive Immunity: Humoral vs Cell-Mediated',
    titleArabic: 'أفرع المناعة التلاؤمية: الخلطية والمتوسطة بالخلايا',
    slideRange: 'Slides 4–8',
    description: 'Deconstruction of humoral (antibody-driven) versus cell-mediated (T lymphocyte-driven) branches.',
    keyConcepts: [
      'Humoral Immunity: Mediated by B lymphocytes and soluble antibodies in extracellular body fluids; blocks infections and eliminates extracellular microbes and toxins.',
      'Cell-Mediated Immunity (CMI): Mediated by T lymphocytes (CD4+ Helper and CD8+ Cytotoxic T cells); eliminates intracellular microbes residing in phagosomes or cytoplasm.',
      'B cells differentiate into plasma cells that secrete antigen-neutralizing immunoglobulins.',
      'T cells do not secrete antibodies; they act through direct cytotoxicity (CD8+) or cytokine release (CD4+).'
    ],
    clinicalPearls: [
      'Antibodies cannot penetrate intact plasma membranes to reach cytosolic viruses; cytosolic pathogens rely entirely on CD8+ CTL killing for eradication.',
      'B-cell immunodeficiencies (e.g., X-linked agammaglobulinemia) manifest with recurrent pyogenic bacterial infections, whereas T-cell deficiencies (e.g., DiGeorge) manifest with severe viral and intracellular fungal infections.'
    ],
    bilingualTerms: [
      { english: 'Humoral Immunity', arabic: 'المناعة الخلطية', context: 'Antibody-mediated defense in fluids' },
      { english: 'Cell-Mediated Immunity', arabic: 'المناعة المتوسطة بالخلايا', context: 'T cell-directed defense against intracellular invaders' },
      { english: 'Plasma Cell', arabic: 'الخلية البلازمية', context: 'Terminally differentiated antibody factory' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Comparative Mechanism Matrix',
        paragraphs: [
          'The adaptive immune system splits into two distinct effector arms optimized for different pathogen compartments. Humoral immunity operates in extracellular fluids (plasma, lymph, mucosal secretions), while cell-mediated immunity guards the intracellular and vesicular compartments of host cells.'
        ],
        comparisonData: {
          headers: ['Parameter', 'Humoral Immunity', 'Cell-Mediated Immunity'],
          rows: [
            ['Primary Cell Type', 'B lymphocytes (B cells)', 'T lymphocytes (T cells)'],
            ['Effector Molecule', 'Secreted Antibodies (IgG, IgM, IgA, IgE, IgD)', 'Cytokines & Cytotoxic Granules (Perforin/Granzyme)'],
            ['Target Pathogens', 'Extracellular bacteria, circulating viruses, toxins', 'Intracellular bacteria, viruses inside host cells, fungi'],
            ['Effector Mechanism', 'Neutralization, Opsonization, Complement Activation', 'Direct cell lysis (CD8+) & Macrophage activation (CD4+)'],
            ['Transferability', 'Transferred passively via Serum / Antibodies', 'Transferred adoptively via Viable T Lymphocytes only']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-3',
    title: 'Lymphocyte Ontogeny & Central Tolerance',
    titleArabic: 'تطور الخلايا اللمفاوية والتسامح المركزي',
    slideRange: 'Slide 9',
    description: 'Origin, maturation sites, and rigorous negative selection screening of B and T lymphocytes.',
    keyConcepts: [
      'Both B and T lymphocytes initially arise from pluripotent hematopoietic stem cells in the Bone Marrow.',
      'B cells complete their maturation within the microenvironment of the Bone Marrow.',
      'Precursor T cells migrate to the Thymus for developmental maturation and receptor selection.',
      'Extensive central screening (Positive & Negative selection) eliminates self-reactive clones, establishing Central Tolerance.'
    ],
    clinicalPearls: [
      'Failure of central tolerance screening against self-antigens leads to autoimmune disorders (e.g., Type 1 Diabetes, Systemic Lupus Erythematosus).',
      'Thymic aplasia (DiGeorge Syndrome) results in severe cell-mediated immunodeficiency due to lack of mature T cell output.'
    ],
    bilingualTerms: [
      { english: 'Bone Marrow', arabic: 'نقي العظم', context: 'Site of origin for all lymphocytes and maturation of B cells' },
      { english: 'Thymus', arabic: 'الغدة الصعترية / التيموسية', context: 'Primary lymphoid organ for T cell maturation' },
      { english: 'Self-reactivity Screening', arabic: 'فحص التفاعل مع الذات', context: 'Negative selection avoiding autoimmunity' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Maturation and Migration Pipeline',
        paragraphs: [
          'Hematopoietic stem cells differentiate into common lymphoid progenitors. B cell progenitors remain in the bone marrow stroma to generate functional B-cell receptors (BCR). T cell progenitors exit the marrow and colonize the thymic cortex and medulla.',
          'During thymic education, T cells undergo positive selection (ensuring MHC restriction) followed by negative selection (deleting high-affinity autoreactive clones via apoptosis). Naive mature lymphocytes then seed secondary lymphoid organs (spleen, lymph nodes).'
        ]
      }
    ]
  },
  {
    id: 'mod-4',
    title: 'Antigen Receptors & Antigen Recognition (BCR vs TCR)',
    titleArabic: 'مستقبلات المستضد والتعرف المستضدي (BCR مقابل TCR)',
    slideRange: 'Slides 10–12',
    description: 'Structural and biochemical differences in how B cell and T cell receptors bind diverse antigens.',
    keyConcepts: [
      'Antigen Definition: A molecule that binds specifically to an antibody or T-cell receptor (TCR).',
      'B Cell Receptors (Membrane-bound Antibodies): Recognize diverse chemical structures (Proteins, Polysaccharides, Lipids, Nucleic Acids, small chemicals) in both conformational (3D folded) and linear epitopes.',
      'T Cell Receptors (TCRs): Recognize ONLY short linear peptide fragments of proteins complexed with Major Histocompatibility Complex (MHC) molecules on host cell surfaces.'
    ],
    clinicalPearls: [
      'T cells are strictly protein/peptide-restricted; carbohydrate and lipid capsules cannot activate classical TCRs unless presented via atypical molecules or conjugated to carrier proteins (basis of conjugate vaccines).',
      'B cells can neutralize native toxins in their intact 3D folded quaternary conformation.'
    ],
    bilingualTerms: [
      { english: 'Antigen Receptor', arabic: 'مستقبل المستضد', context: 'Membrane protein recognizing specific foreign targets' },
      { english: 'Conformational Epitope', arabic: 'محدد مستضدي فراغي / شكلي', context: 'Epitope created by tertiary folding, recognized by BCR' },
      { english: 'Linear Peptide Epitope', arabic: 'محدد ببتيدي خطي', context: 'Denatured peptide sequence recognized by TCR' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Comparison of Antigen Recognition Architecture',
        paragraphs: [
          'The BCR is a membrane-bound immunoglobulin (mIg) coupled with signaling heterodimers Igα and Igβ (CD79a/b). The TCR is an αβ heterodimer coupled with the CD3 complex (γε, δε) and ζ-chain homodimer containing Immunoreceptor Tyrosine-based Activation Motifs (ITAMs).'
        ],
        comparisonData: {
          headers: ['Feature', 'B Cell Receptor (BCR)', 'T Cell Receptor (TCR)'],
          rows: [
            ['Chemical Nature of Antigen', 'Proteins, Polysaccharides, Lipids, Nucleic acids, small chemicals', 'Exclusively Peptide fragments of proteins'],
            ['Epitope Structure', 'Conformational (3D folded) and Linear epitopes', 'Linear denatured peptide sequences only'],
            ['Requirement for MHC', 'No (Binds free/soluble antigens directly)', 'Yes (Strict MHC Restriction)'],
            ['Signaling Subunits', 'Igα and Igβ (CD79a / CD79b)', 'CD3 complex (γ, δ, ε) and ζ (zeta) chains'],
            ['Secreted Form Exists?', 'Yes (Secreted as soluble Antibodies)', 'No (Always strictly membrane-bound)']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-5',
    title: 'Cell-Mediated Immunity Subsets & Innate Coupling',
    titleArabic: 'أقسام المناعة المتوسطة بالخلايا والاقتران بالمناعة الفطرية',
    slideRange: 'Slides 13–17',
    description: 'CD4+ helper vs CD8+ cytotoxic T cells, TCR architecture, and temporal transition from innate to adaptive immunity.',
    keyConcepts: [
      'Cell-mediated immunity is mediated by T lymphocytes recognizing MHC-associated peptides indicating intracellular microbes.',
      'CD8+ Cytotoxic T Lymphocytes (CTLs): Kill host cells containing microbial proteins in the cytosol.',
      'CD4+ Helper T Cells (Th): Secrete cytokines that recruit and activate leukocytes (macrophages, neutrophils) to destroy phagocytosed and extracellular microbes.',
      'Innate immunity (hours) activates and instructs adaptive immunity (days) via antigen capture and presentation by Dendritic Cells and Macrophages.'
    ],
    clinicalPearls: [
      'Innate immunity controls early viral titers, but complete sterile eradication and memory formation require CD8+ CTL clonal expansion at 5–7 days.',
      'Depletion of CD4+ T cells (as in HIV/AIDS) cripples both cell-mediated and humoral immunity because Th cells provide essential licensing and cytokines.'
    ],
    bilingualTerms: [
      { english: 'Cytotoxic T Lymphocytes (CTL)', arabic: 'الخلايا التائية السامة للخلايا', context: 'CD8+ T cells killing infected/altered host cells' },
      { english: 'Helper T Cells (Th)', arabic: 'الخلايا التائية المساعدة', context: 'CD4+ T cells secreting regulatory cytokines' },
      { english: 'Recruitment & Activation', arabic: 'تجنيد وتفعيل', context: 'Cytokine-directed leukocyte mobilization' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Temporal Transition: Innate to Adaptive Immunity',
        paragraphs: [
          'Within 0–12 hours, innate cells (neutrophils, macrophages, NK cells, mast cells) respond immediately. Dendritic cells capture antigens at the barrier surface, undergo maturation, and migrate via lymphatic vessels to regional lymph nodes.',
          'Over 1–7 days, dendritic cells present processed peptides to naive T cells, initiating clonal selection, massive proliferation, and differentiation into specialized effector T cells that traffic back to the primary site of infection.'
        ]
      }
    ]
  },
  {
    id: 'mod-6',
    title: 'Antigen Processing & Presentation Principles',
    titleArabic: 'معالجة وعرض المستضدات البروتينية',
    slideRange: 'Slide 18, 23–24, 26–28',
    description: 'Molecular mechanisms converting extracellular and cytosolic proteins into peptides loaded onto MHC I and MHC II.',
    keyConcepts: [
      'Antigen Processing: The intracellular conversion of intact protein antigens into small peptides and loading onto MHC molecules.',
      'Antigen Presentation: The display of peptide-MHC complexes on the APC surface for specific recognition by TCRs.',
      'Endogenous Pathway (MHC Class I): Cytosolic proteins (e.g., viral proteins, cytosolic bacterial proteins) degraded by Proteasomes -> TAP transports into ER -> loaded on MHC I -> presented to CD8+ T cells.',
      'Exogenous Pathway (MHC Class II): Extracellular proteins endocytosed by professional APCs -> degraded in late endosomes/lysosomes -> loaded onto MHC II in endosomal vesicles -> presented to CD4+ T cells.'
    ],
    clinicalPearls: [
      'Mutations in the TAP transporter gene lead to Bare Lymphocyte Syndrome Type I (profound deficiency of cell surface MHC Class I and CD8+ T cells).',
      'Chloroquine and ammonium chloride raise lysosomal pH, inhibiting endosomal proteases and selectively blocking MHC Class II antigen presentation.'
    ],
    bilingualTerms: [
      { english: 'Antigen Processing', arabic: 'معالجة المستضد', context: 'Intracellular proteolysis and MHC loading' },
      { english: 'Antigen Presentation', arabic: 'عرض المستضد', context: 'Surface display of peptide-MHC complex' },
      { english: 'Proteasome', arabic: 'الجسيم البروتيني / البروتيازوم', context: 'Cytosolic proteolytic complex degrading endogenous proteins' },
      { english: 'TAP Transporter', arabic: 'بروتين النقل المرتبط بمعالجة المستضد', context: 'Transports peptides from cytosol into endoplasmic reticulum' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Step-by-Step Processing Routes',
        paragraphs: [
          'Endogenous Route: Ubiquitinated cytosolic proteins enter the 20S/26S Proteasome barrel, generating 8–10 amino acid peptides. Transporter associated with Antigen Processing (TAP1/TAP2) pumps these peptides into the ER lumen. Newly synthesized MHC Class I heavy chain and β2-microglobulin assemble, bind the peptide, and traffic through the Golgi to the plasma membrane.',
          'Exogenous Route: Professional APCs internalize extracellular antigens into endosomes. Acid-dependent cathepsins hydrolyze proteins into 10–30 amino acid peptides. In the ER, newly assembled MHC Class II molecules associate with the Invariant chain (Ii), preventing premature binding of ER peptides. Upon vesicular fusion, Ii is cleaved leaving CLIP in the groove. HLA-DM catalyzes CLIP removal, allowing antigenic peptides to bind before surface export.'
        ]
      }
    ]
  },
  {
    id: 'mod-7',
    title: 'Major Histocompatibility Complex (MHC / HLA) Architecture',
    titleArabic: 'معقد التوافق النسيجي الكبير وبنيته الجزيئية',
    slideRange: 'Slides 19–21',
    description: 'Polymorphism, HLA genetics, peptide-binding grooves, and structural comparison between Class I and Class II molecules.',
    keyConcepts: [
      'MHC molecules are membrane glycoproteins that display peptide antigens for T lymphocyte recognition.',
      'In humans, MHC genes are located on chromosome 6 and called Human Leukocyte Antigens (HLA).',
      'MHC genes are the most polymorphic genes in the human genome; critical for tissue/organ graft acceptance or rejection.',
      'Class I Structure: Polymorphic α chain (α1, α2, α3) + non-covalently attached non-polymorphic β2-microglobulin (β2m). Peptide groove formed by α1 + α2; CD8 binds α3 domain.',
      'Class II Structure: Heterodimer of polymorphic α chain (α1, α2) and polymorphic β chain (β1, β2). Peptide groove formed by α1 + β1; CD4 binds β2 domain.'
    ],
    clinicalPearls: [
      'Identical twins share identical MHC alleles and will readily accept organ grafts without immunosuppression (isografts).',
      'The co-receptor specificity (CD4 for MHC II β2, CD8 for MHC I α3) ensures that helper and cytotoxic responses are strictly matched to the appropriate pathogen compartment.'
    ],
    bilingualTerms: [
      { english: 'Major Histocompatibility Complex', arabic: 'معقد التوافق النسيجي الكبير (MHC)', context: 'Cell surface peptide presentation platform' },
      { english: 'Human Leukocyte Antigens (HLA)', arabic: 'مستضدات الكريات البيضاء البشرية', context: 'Human nomenclature for MHC genes' },
      { english: 'Polymorphism', arabic: 'تعدد الأشكال الجينية', context: 'Extensive genetic diversity among individuals' },
      { english: 'Beta-2 Microglobulin', arabic: 'بيتا-2 ميكروغلوبولين', context: 'Invariant light chain of MHC Class I' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Structural Comparison of MHC Class I vs Class II',
        paragraphs: [
          'The peptide-binding cleft of MHC Class I is closed at both ends, accommodating short 8–11 residue peptides anchored by terminal hydrophobic/basic residues. The cleft of MHC Class II is open at both ends, allowing longer peptides (10–30 residues) to sit comfortably.'
        ],
        comparisonData: {
          headers: ['Structural Property', 'MHC Class I', 'MHC Class II'],
          rows: [
            ['Polypeptide Chains', '1 Polymorphic α chain (45 kDa) + 1 Invariant β2-microglobulin (12 kDa)', '1 Polymorphic α chain (34 kDa) + 1 Polymorphic β chain (29 kDa)'],
            ['Peptide-Binding Cleft', 'Formed by α1 and α2 domains (closed ends)', 'Formed by α1 and β1 domains (open ends)'],
            ['Peptide Length Accommodation', '8 to 11 amino acids', '10 to 30+ amino acids'],
            ['Co-receptor Binding Site', 'CD8 binds to the invariant α3 domain', 'CD4 binds to the invariant β2 domain'],
            ['Tissue Expression', 'Virtually ALL nucleated cells and platelets', 'Exclusively Professional APCs (Dendritic cells, Macrophages, B cells)']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-8',
    title: 'Antigen-Presenting Cells (APCs): Professional vs Non-Professional',
    titleArabic: 'الخلايا العارضة للمستضد: الاحترافية وغير الاحترافية',
    slideRange: 'Slide 22, 25',
    description: 'Classification of APCs, unique features of Dendritic Cells, Macrophages, and B cells, and costimulatory expression.',
    keyConcepts: [
      'APCs capture microbial antigens and display them for recognition by T lymphocytes.',
      'Professional APCs (Dendritic Cells, Macrophages, B Cells): Constitutively or inductively express MHC Class II and costimulatory molecules (B7-1/CD80 and B7-2/CD86).',
      'Non-professional APCs (Fibroblasts, Hepatocytes, Epithelial cells, etc.): Express only MHC Class I and present endogenous peptides to CD8+ CTLs; lack costimulators.',
      'Dendritic Cells (DCs) are the MOST efficient and specialized APCs, uniquely capable of priming naive T lymphocytes.'
    ],
    clinicalPearls: [
      'Naive T cells can ONLY be activated by Dendritic Cells in secondary lymphoid tissues; once differentiated, effector T cells can interact with macrophages, B cells, or infected target cells in peripheral tissues.',
      'Microbial products (PAMPs) binding to Toll-like receptors (TLRs) on APCs trigger immediate upregulation of costimulators (B7) and MHC II.'
    ],
    bilingualTerms: [
      { english: 'Professional APCs', arabic: 'الخلايا العارضة للمستضد الاحترافية', context: 'DCs, Macrophages, B cells expressing MHC-II and B7' },
      { english: 'Costimulatory Molecules', arabic: 'الجزيئات المساعدة على التنبيه / التحفيز المشترك', context: 'B7-1/CD80, B7-2/CD86 providing Signal 2' },
      { english: 'Naive T Lymphocytes', arabic: 'الخلايا التائية البكر / الساذجة', context: 'Mature T cells that have never encountered cognate antigen' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Comparative Roles of the 3 Professional APCs',
        paragraphs: [
          'Dendritic cells are migratory sentinels specialized in initiating primary immune responses. Macrophages specialize in clearing phagocytosed pathogens and receiving Th1 activation. B cells bind soluble native antigens via surface immunoglobulin, internalize them, and present peptides to CD4+ T cells to receive help for antibody class switching.'
        ],
        comparisonData: {
          headers: ['APC Type', 'Antigen Uptake Method', 'MHC Class II Expression', 'Costimulator Expression', 'Primary Function'],
          rows: [
            ['Dendritic Cells (DCs)', 'Macropinocytosis, phagocytosis, receptor-mediated', 'Constitutive (High in mature DCs)', 'Constitutive & upregulated by TLRs', 'Initiation/priming of naive T cell responses to all antigens'],
            ['Macrophages', 'Phagocytosis of microbes/opsonized particles', 'Inducible by IFN-γ and PAMPs', 'Inducible by TLRs, CD40L, IFN-γ', 'Effector phase of CMI (killing ingested microbes)'],
            ['B Lymphocytes', 'Antigen-specific BCR receptor-mediated endocytosis', 'Constitutive (increased by IL-4)', 'Inducible by BCR cross-linking & CD40L', 'Antigen presentation to CD4+ Th cells for humoral help']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-9',
    title: 'The Three-Signal Model of T Lymphocyte Activation',
    titleArabic: 'نموذج الإشارات الثلاث لتفعيل الخلايا اللمفاوية التائية',
    slideRange: 'Slides 29–33',
    description: 'Signal 1 (TCR:pMHC), Signal 2 (B7:CD28 costimulation), Signal 3 (Cytokine polarization), and Anergy/Tolerance consequence.',
    keyConcepts: [
      'Signal 1 (Antigen Recognition): TCR binds peptide-MHC complex (CD4 to MHC II, CD8 to MHC I) with CD3/ζ-chain signal transduction.',
      'Signal 2 (Costimulation): B7 molecules (B7-1/CD80, B7-2/CD86) on activated APCs bind to CD28 receptors on naive T cells.',
      'Critical Rule: Antigen recognition (Signal 1) WITHOUT costimulation (Signal 2) leads to ANERGY (functional unresponsiveness/tolerance) or apoptosis.',
      'Signal 3 (Cytokines & Differentiation): APC-derived cytokines (IL-12, IL-4, IL-1, IL-6, IL-23, TGF-β) and autocrine IL-2 drive clonal proliferation and lineage commitment.'
    ],
    clinicalPearls: [
      'Costimulatory blockade with CTLA4-Ig (Abatacept/Belatacept) binds B7 molecules and prevents CD28 costimulation, suppressing organ transplant rejection and autoimmune arthritis.',
      'Cancer cells often evade immune destruction by lacking B7 costimulation or upregulating inhibitory ligands (PD-L1), inducing T cell exhaustion/anergy.'
    ],
    bilingualTerms: [
      { english: 'Signal 1 (Antigen Recognition)', arabic: 'الإشارة 1: التعرف على المستضد', context: 'TCR-MHC-peptide binding' },
      { english: 'Signal 2 (Costimulation)', arabic: 'الإشارة 2: التحفيز المشترك', context: 'B7-CD28 interaction essential for survival' },
      { english: 'Signal 3 (Cytokine Polarization)', arabic: 'الإشارة 3: السيتوكينات المحفزة', context: 'Cytokine milieu dictating effector lineage' },
      { english: 'Anergy / Tolerance', arabic: 'الخُمول المناعي / التحمل المناعي', context: 'State of non-responsiveness when Signal 2 is absent' }
    ],
    detailedContent: [
      {
        sectionTitle: 'The Biochemical 3-Signal Cascade',
        paragraphs: [
          'Signal 1 provides the specific key: the TCR complex engages the cognate peptide nestled in the MHC groove. Co-receptors (CD4 or CD8) stabilize the interaction and bring Lck kinase to phosphorylate ITAMs on CD3 and ζ chains.',
          'Signal 2 provides the green light: CD28 engagement by B7 stabilizes IL-2 mRNA, upregulates anti-apoptotic proteins (Bcl-xL), and activates the PI3K/Akt and NF-κB cascades. If a resting APC presents self-antigen without B7, the T cell becomes anergic.',
          'Signal 3 provides the operational directive: The cytokine cocktail instructs the expanding clone which effector program to execute (Th1, Th2, Th17, or CTL).'
        ]
      }
    ]
  },
  {
    id: 'mod-10',
    title: 'Cross-Presentation in Dendritic Cells',
    titleArabic: 'العرض المتصالب في الخلايا التغصنية',
    slideRange: 'Slides 34–35',
    description: 'Unique mechanism allowing dendritic cells to present exogenous viral and tumor antigens on MHC Class I to naive CD8+ T cells.',
    keyConcepts: [
      'Normally, exogenous antigens are routed to MHC Class II (CD4+ Th cells) and endogenous antigens to MHC Class I (CD8+ CTLs).',
      'Cross-Presentation Exception: Specialized Dendritic Cells capture extracellular fragments from virus-infected cells or dying tumor cells, transfer these antigens from phagosomes into their cytosol, and load them onto MHC Class I molecules.',
      'This process primes naive CD8+ T cells against viruses that do not directly infect dendritic cells.'
    ],
    clinicalPearls: [
      'Without cross-presentation, viruses that infect only non-APCs (such as hepatocytes or neurons lacking costimulatory molecules) would never activate naive CD8+ T cells.',
      'Modern cancer vaccine designs target dendritic cell cross-presentation to generate robust cytotoxic anti-tumor CD8+ responses.'
    ],
    bilingualTerms: [
      { english: 'Cross-Presentation', arabic: 'العرض المتصالب للمستضد', context: 'Exogenous antigen routing onto MHC Class I' },
      { english: 'Cross-Priming', arabic: 'الاستثارة / التحفيز المتصالب', context: 'Activation of naive CD8+ CTLs by cross-presenting DCs' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Molecular Route of Cross-Presentation',
        paragraphs: [
          'Step 1: Dendritic cell phagocytoses apoptotic debris from a virally infected host cell.',
          'Step 2: Instead of complete lysosomal degradation for MHC II, antigens escape or are transported from the endosome into the DC cytosol.',
          'Step 3: Cytosolic proteasomes cleave the viral proteins into peptides.',
          'Step 4: TAP translocates peptides into the ER, where they assemble with MHC Class I molecules.',
          'Step 5: DC presents MHC I:viral peptide complexes along with B7 costimulators to naive CD8+ T cells in the lymph node, initiating cytotoxic immunity.'
        ]
      }
    ]
  },
  {
    id: 'mod-11',
    title: 'CD8+ Cytotoxic T Lymphocytes (CTLs) & Killing Cascades',
    titleArabic: 'الخلايا التائية السامة للخلايا وآليات القتل المستهدف',
    slideRange: 'Slides 36–39',
    description: 'Target cell recognition, lethal hit delivery, Perforin/Granzyme B cascade, and Fas/FasL apoptosis induction.',
    keyConcepts: [
      'CD8+ CTLs recognize peptide:MHC-I complexes on infected cells, cancer cells, and allogeneic graft cells.',
      'Activated CTLs deliver a targeted lethal hit without damaging uninfected neighboring cells.',
      'Mechanism 1 (Perforin/Granzyme): Perforin polymerizes in the target membrane forming pores; Granzyme B enters cytosol and cleaves procaspases (cysteine proteases), initiating apoptosis.',
      'Mechanism 2 (Fas/FasL): Activated CTL expresses Fas Ligand (FasL/CD95L), which binds Fas (CD95 death receptor) on target cells, activating Caspase-8 and apoptotic demise.'
    ],
    clinicalPearls: [
      'Apoptosis (programmed cell death) ensures that the target cell and the intracellular viral genomes are degraded quietly without releasing inflammatory cytosolic contents.',
      'Genetic deficiencies in Perforin or Granule Exocytosis cause Familial Hemophagocytic Lymphohistiocytosis (FHL), characterized by uncontrolled macrophage activation and cytokine storms.'
    ],
    bilingualTerms: [
      { english: 'Cytotoxic T Lymphocyte', arabic: 'الخلية اللمفاوية التائية السامة (CTL)', context: 'Effector CD8+ killer lymphocyte' },
      { english: 'Perforin', arabic: 'البيرفورين (بروتين التثقيب)', context: 'Pore-forming molecule disrupting target membranes' },
      { english: 'Granzyme B', arabic: 'الجرانزيم ب', context: 'Serine protease activating caspases to trigger apoptosis' },
      { english: 'Fas / Fas Ligand', arabic: 'مستقبل فاس / ربيطة فاس (CD95 / CD95L)', context: 'Death receptor apoptotic pathway' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Comparative Killing Cascade Protocols',
        paragraphs: [
          'Upon immunological synapse formation, CTL cytoskeleton reorganizes, polarizing lytic granules to the interface. Exocytosis releases perforin monomers and granzyme proteases in a calcium-dependent manner. Simultaneously, surface-expressed FasL engages Fas trimerization.'
        ],
        comparisonData: {
          headers: ['Feature', 'Perforin / Granzyme Pathway', 'Fas / Fas Ligand Pathway'],
          rows: [
            ['Primary Mechanism', 'Granule exocytosis at immunological synapse', 'Surface death receptor ligation'],
            ['Key Effector Molecules', 'Perforin (pore former) + Granzyme B (protease)', 'FasL (on CTL) + Fas / CD95 (on target cell)'],
            ['Caspase Activation', 'Granzyme B directly cleaves Procaspase-3 & Bid', 'Fas DD binds FADD, activating Procaspase-8'],
            ['Speed of Execution', 'Rapid (minutes to 1 hour)', 'Slightly slower (hours)'],
            ['Clinical Role', 'Primary defense against viral infections & tumors', 'Immune regulation, activation-induced cell death (AICD)']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-12',
    title: 'CD4+ T Helper Lineages: Th1, Th2, and Th17 Subsets',
    titleArabic: 'أنماط الخلايا التائية المساعدة (Th1, Th2, Th17)',
    slideRange: 'Slides 40–43',
    description: 'Differentiation inductive signals, master transcription factors, cytokine secretions, and effector functions.',
    keyConcepts: [
      'Naive CD4+ T cells (Th0) differentiate into distinct functional lineages based on inductive cytokine signals.',
      'Th1 Subset: Induced by IL-12 & IFN-γ; Transcription Factors: T-bet (via STAT1/STAT4); Secretes IFN-γ; Function: Classical macrophage activation, defense against intracellular pathogens, delayed-type hypersensitivity.',
      'Th2 Subset: Induced by IL-4; Transcription Factors: GATA-3 (via STAT6); Secretes IL-4, IL-5; Function: B-cell class switching to IgE and IgG, eosinophil activation, defense against helminthic parasites, allergic reactions.',
      'Th17 Subset: Induced by IL-1, IL-6, IL-23, TGF-β; Transcription Factors: RORγt (via STAT3); Secretes IL-17; Function: Neutrophil recruitment, acute mucosal inflammation, defense against extracellular bacteria and fungi.'
    ],
    clinicalPearls: [
      'In Mycobacterium leprae infection, a dominant Th1 response leads to Tuberculoid Leprosy (contained, granulomas, low bacterial load), whereas a Th2 response leads to Lepromatous Leprosy (disseminated, severe lesions, high bacterial load).',
      'Hyper-IgE Syndrome (Job Syndrome) results from STAT3 mutations, leading to failed Th17 differentiation, lack of neutrophil recruitment, and recurrent "cold" staphylococcal skin abscesses.'
    ],
    bilingualTerms: [
      { english: 'T-bet', arabic: 'عامل النسخ تي-بيت (T-bet)', context: 'Master transcription factor for Th1' },
      { english: 'GATA-3', arabic: 'عامل النسخ جاتا-3 (GATA-3)', context: 'Master transcription factor for Th2' },
      { english: 'RORγt', arabic: 'عامل النسخ آر-أو-آر غاما تي (RORγt)', context: 'Master transcription factor for Th17' },
      { english: 'Class Switching', arabic: 'التبديل النمطي للغلوبولينات المناعية', context: 'Th cytokine-driven B cell antibody isotype alteration' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Master Lineage Comparison Table',
        paragraphs: [
          'The functional divergence of CD4+ T helper subsets provides specialized immunological tools tailored to distinct pathogenic classes. Mutual antagonism between transcription factors (e.g. T-bet suppressing GATA-3 and vice versa) reinforces lineage commitment.'
        ],
        comparisonData: {
          headers: ['Subset', 'Inducing Cytokines', 'Master Transcr. Factor', 'Major Cytokines Produced', 'Primary Target Pathogens & Role'],
          rows: [
            ['Th1', 'IL-12, IFN-γ', 'T-bet (STAT4, STAT1)', 'IFN-γ', 'Intracellular microbes (Mycobacteria, viruses); Macrophage activation (M1)'],
            ['Th2', 'IL-4', 'GATA-3 (STAT6)', 'IL-4, IL-5, IL-13', 'Helminths, parasites; Eosinophil activation; B cell IgE/IgG switching; Allergy'],
            ['Th17', 'IL-1, IL-6, IL-23, TGF-β', 'RORγt (STAT3)', 'IL-17, IL-22', 'Extracellular bacteria, fungi; Neutrophil recruitment & barrier immunity']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-13',
    title: 'Macrophage Activation by Th1 Lymphocytes (M1 Polarization)',
    titleArabic: 'تفعيل البلاعم بواسطة الخلايا اللمفاوية Th1',
    slideRange: 'Slides 44–46',
    description: 'Interferon-gamma (IFN-γ) and CD40L signaling, microbicidal ROS/NO production, and reciprocal positive feedback loops.',
    keyConcepts: [
      'Th1 cells recognize class II MHC-associated peptides of ingested microbes displayed on macrophages.',
      'Two-Signal Macrophage Activation: Th1 cells secrete IFN-γ (binds IFN-γR) and express CD40 Ligand (CD40L, binds CD40 on macrophage).',
      'Macrophage Effector Response: Production of Reactive Oxygen Species (ROS), Nitric Oxide (NO via iNOS), and increased lysosomal proteases to destroy phagolysosomal microbes.',
      'Amplification & Feedback: Activated macrophages secrete TNF, IL-1, chemokines, and IL-12 (which further promotes Th1 differentiation), while upregulating MHC and B7 costimulators.'
    ],
    clinicalPearls: [
      'Deficiency in CD40L (X-linked Hyper-IgM Syndrome) impairs both macrophage activation (causing severe Opportunistic Pneumocystis jirovecii infections) and B-cell antibody class switching.',
      'Granuloma formation (e.g., in tuberculosis) is the histopathological hallmark of persistent Th1-macrophage interaction walling off resistant intracellular bacteria.'
    ],
    bilingualTerms: [
      { english: 'Macrophage Activation', arabic: 'تفعيل البلاعم / الخلايا البلعمية', context: 'M1 classical polarization by Th1 signals' },
      { english: 'Interferon-gamma (IFN-γ)', arabic: 'إنترفيرون غاما', context: 'Principal macrophage-activating cytokine' },
      { english: 'Reactive Oxygen Species (ROS)', arabic: 'أنواع الأكسجين التفاعلية (ROS)', context: 'Free radicals killing phagocytosed pathogens' },
      { english: 'Nitric Oxide (NO)', arabic: 'أكسيد النيتريك (NO)', context: 'Microbicidal radical synthesized by iNOS' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Macrophage Responses to Th1 Activation',
        paragraphs: [
          'Unactivated macrophages cannot eliminate hard-to-kill intracellular bacteria like Mycobacterium tuberculosis. When a Th1 cell binds the macrophage peptide-MHC II complex, it delivers IFN-γ and CD40L. This unleashes potent intracellular bactericidal machinery.'
        ],
        comparisonData: {
          headers: ['Macrophage Response', 'Molecular Mechanism', 'Role in Cell-Mediated Immunity'],
          rows: [
            ['Production of ROS, NO, Lysosomal enzymes', 'iNOS and Phagocyte NADPH Oxidase activation', 'Direct killing of microbes sequestered inside phagolysosomes'],
            ['Secretion of TNF, IL-1, Chemokines', 'NF-κB inflammatory gene transcription', 'Leukocyte recruitment and local tissue inflammation'],
            ['Secretion of IL-12', 'Transcriptional activation of IL-12p40/p35', 'Positive feedback: Drives Th1 differentiation and IFN-γ production'],
            ['Increased B7 Costimulators & MHC II', 'Enhanced surface receptor expression', 'Amplification of T cell activation and memory maintenance']
          ]
        }
      }
    ]
  },
  {
    id: 'mod-14',
    title: 'Intracellular Microbes Classification & CD4/CD8 Cooperation',
    titleArabic: 'تصنيف الميكروبات داخل الخلوية وتعاون خلايا CD4 و CD8',
    slideRange: 'Slides 47–49',
    description: 'Pathogen habitat breakdown (phagolysosome vs cytosol vs non-phagocytic) and coordinated CD4/CD8 eradication.',
    keyConcepts: [
      'Intracellular Microbes in Phagolysosomes: Mycobacteria, Listeria monocytogenes, Legionella pneumophila, Cryptococcus neoformans, Leishmania, Trypanosoma cruzi -> combated by CD4+ Th1 macrophage activation.',
      'Intracellular Microbes Escaped to Cytosol: Cytosolic bacteria, Listeria -> combated by CD8+ CTL killing.',
      'Nonphagocytic Cell Infections: All Viruses, Rickettsiae, Plasmodium falciparum, Cryptosporidium parvum -> combated by CD8+ CTL killing.',
      'Cooperation Paradigm: When bacteria are present in both phagosomes and cytosol within an infected macrophage, CD4+ Th1 activates phagosomal killing, while CD8+ CTL lyses the host cell to destroy the intracellular sanctuary.'
    ],
    clinicalPearls: [
      'Listeria monocytogenes produces Listeriolysin O, allowing it to puncture phagosomal membranes and escape into the cytosol; it requires both Th1 (for vacuolar clearing) and CD8+ CTLs (for cytosolic clearing) for host survival.',
      'Plasmodium falciparum liver stage resides in non-phagocytic hepatocytes and is cleared exclusively by CD8+ CTL recognition of MHC Class I.'
    ],
    bilingualTerms: [
      { english: 'Intracellular Reservoir', arabic: 'المستودع / المكمن داخل الخلوي', context: 'Sanctuary where microbes evade antibodies' },
      { english: 'Phagolysosome', arabic: 'اليبلوع الصهريجي / الجسيم البلعمي الحال', context: 'Fused intracellular vesicular killing chamber' },
      { english: 'Cooperation & Synergy', arabic: 'التعاون والتآزر المناعي', context: 'Joint action of CD4+ and CD8+ T cells' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Cooperative Eradication Mechanism',
        paragraphs: [
          'In a macrophage heavily infected with an intracellular pathogen, some bacterial units reside within phagosomes while others rupture the phagosome and replicate in the nutrient-rich cytosol. Neither T cell subset alone is sufficient for cure.',
          'CD4+ Th1 cells recognize phagosomal peptides on MHC Class II, secreting IFN-γ to stimulate macrophage phagolysosomal digestion. Concurrently, CD8+ CTLs recognize cytosolic bacterial peptides on MHC Class I and deliver perforin/granzyme to lyse the macrophage, exposing escaped bacteria to extracellular neutrophils and antibodies.'
        ]
      }
    ]
  },
  {
    id: 'mod-15',
    title: 'Th1-CTL Synergy & Master Cytokine Spectrum',
    titleArabic: 'تآزر خلايا Th1 مع CTL ومصفوفة السيتوكينات الحيوية',
    slideRange: 'Slides 50–53',
    description: 'Th1 licensing of APCs to boost CTLs, and the comprehensive biological actions of key T cell cytokines.',
    keyConcepts: [
      'Th1 Help for CTLs: Th1 cells activate Dendritic Cells (via CD40-CD40L) to produce more costimulatory B7 proteins (licensing), and secrete IFN-γ which increases the efficiency of viral antigen processing and MHC-I presentation in target cells.',
      'Master Cytokine Spectrum:',
      '• IL-2: T cell growth factor, autocrine stimulation of clonal proliferation (Source: CD4+ and CD8+ T cells).',
      '• IL-4: B cell antibody switching to IgE and IgG (Source: CD4+ Th2, Mast cells).',
      '• IL-5: Activation and proliferation of eosinophils (Source: CD4+ Th2, Mast cells).',
      '• IFN-γ: Powerful activation of macrophages (M1), increases MHC expression, antiviral (Source: CD4+ Th1, CD8+ CTL, NK cells).',
      '• TGF-β: Inhibition of T cell activation, promotes tissue repair and Treg induction (Source: CD4+ Treg, Macrophages, various cell types).'
    ],
    clinicalPearls: [
      'Recombinant IL-2 (Aldesleukin) is used in cancer immunotherapy (melanoma, renal cell carcinoma) to boost cytotoxic T cell and NK cell expansion.',
      'Monoclonal antibodies targeting IL-4Rα (Dupilumab) or IL-5 (Mepolizumab) are breakthrough therapies for severe asthma, atopic dermatitis, and eosinophilic granulomatosis with polyangiitis (EGPA).'
    ],
    bilingualTerms: [
      { english: 'Interleukin-2 (IL-2)', arabic: 'إنترلوكين-2', context: 'Master T cell autocrine growth factor' },
      { english: 'Interleukin-4 (IL-4)', arabic: 'إنترلوكين-4', context: 'Th2 cytokine driving IgE class switching' },
      { english: 'Interleukin-5 (IL-5)', arabic: 'إنترلوكين-5', context: 'Th2 cytokine activating eosinophils' },
      { english: 'Transforming Growth Factor-beta (TGF-β)', arabic: 'عامل النمو المحول بيتا', context: 'Immunosuppressive & anti-inflammatory cytokine' }
    ],
    detailedContent: [
      {
        sectionTitle: 'Comprehensive Biological Actions of Selected T Cell Cytokines',
        paragraphs: [
          'Cytokines are low-molecular-weight regulatory proteins secreted transiently in response to antigen. They act in autocrine (on the same cell), paracrine (on nearby cells), or endocrine (systemic) fashion to coordinate immune defenses.'
        ],
        comparisonData: {
          headers: ['Cytokine', 'Principal Biologic Action', 'Primary Cellular Source(s)'],
          rows: [
            ['Interleukin-2 (IL-2)', 'T cell growth stimulation & clonal expansion (autocrine/paracrine)', 'CD4+ and CD8+ T cells'],
            ['Interleukin-4 (IL-4)', 'B cell isotype switching to IgE (and IgG4 in humans); Th2 differentiation', 'CD4+ T cells (Th2), Mast cells'],
            ['Interleukin-5 (IL-5)', 'Growth, differentiation, and activation of eosinophils', 'CD4+ T cells (Th2), Mast cells'],
            ['Interferon-γ (IFN-γ)', 'Classical macrophage activation (M1 killing), MHC-I/II upregulation, Th1 differentiation', 'CD4+ Th1 cells, CD8+ T cells, Natural Killer (NK) cells'],
            ['TGF-β', 'Inhibition of T cell activation, suppression of inflammation, wound repair', 'CD4+ T cells (Tregs), Macrophages, stromal cells']
          ]
        }
      }
    ]
  }
];

export const CYTOKINE_CATALOG: CytokineData[] = [
  {
    name: 'Interleukin-2 (IL-2)',
    cellularSource: 'CD4+ and CD8+ T cells',
    principalAction: 'T cell growth stimulation, clonal proliferation, and regulatory T cell maintenance',
    targetCells: ['Naive T cells', 'Effector T cells', 'NK cells', 'Treg cells'],
    clinicalSignificance: 'Target of immunosuppressive drugs (Cyclosporine, Tacrolimus inhibit IL-2 transcription via Calcineurin; Sirolimus inhibits IL-2 signaling via mTOR). High-dose recombinant IL-2 used in metastatic melanoma/RCC.',
    slideRef: 'Slide 31, 32, 53'
  },
  {
    name: 'Interferon-gamma (IFN-γ)',
    cellularSource: 'CD4+ Th1 cells, CD8+ CTLs, NK cells',
    principalAction: 'Classical activation of macrophages (induction of ROS, NO, lysosomal proteases); MHC Class I and II upregulation; Th1 differentiation',
    targetCells: ['Macrophages', 'Dendritic cells', 'Infected somatic cells', 'B cells'],
    clinicalSignificance: 'Essential for granuloma formation and defense against Mycobacterium tuberculosis and Leishmania. Recombinant IFN-γ is used to treat Chronic Granulomatous Disease (CGD).',
    slideRef: 'Slide 41, 43, 44, 45, 51, 53'
  },
  {
    name: 'Interleukin-4 (IL-4)',
    cellularSource: 'CD4+ Th2 cells, Mast cells, Basophils',
    principalAction: 'Induces naive T cells to differentiate into Th2 cells; drives B cell antibody class switching to IgE and IgG',
    targetCells: ['Naive CD4+ T cells', 'B lymphocytes', 'Macrophages (Alternative M2 activation)'],
    clinicalSignificance: 'Central driver of atopic allergies, asthma, and defense against parasitic helminths. Dupilumab (anti-IL-4Rα) treats severe asthma and atopic dermatitis.',
    slideRef: 'Slide 41, 43, 53'
  },
  {
    name: 'Interleukin-5 (IL-5)',
    cellularSource: 'CD4+ Th2 cells, Mast cells',
    principalAction: 'Stimulates the growth, differentiation, recruitment, and activation of eosinophils',
    targetCells: ['Eosinophil precursors', 'Mature eosinophils'],
    clinicalSignificance: 'Critical for clearing helminths and mediating allergic eosinophilia. Mepolizumab and Benralizumab target IL-5/IL-5R for refractory eosinophilic asthma.',
    slideRef: 'Slide 43, 53'
  },
  {
    name: 'Transforming Growth Factor-beta (TGF-β)',
    cellularSource: 'Regulatory T cells (Tregs), Macrophages, Fibroblasts',
    principalAction: 'Inhibits T cell proliferation and effector functions; promotes Treg induction; stimulates collagen synthesis and wound healing',
    targetCells: ['Effector T cells', 'Macrophages', 'Endothelial cells', 'Fibroblasts'],
    clinicalSignificance: 'Major anti-inflammatory cytokine preventing autoimmunity; hijacked by tumor microenvironments to induce immunosuppression.',
    slideRef: 'Slide 41, 53'
  },
  {
    name: 'Interleukin-12 (IL-12)',
    cellularSource: 'Activated Macrophages, Dendritic cells',
    principalAction: 'Drives differentiation of naive CD4+ T cells into Th1 effector cells; stimulates IFN-γ production from T cells and NK cells',
    targetCells: ['Naive CD4+ T cells', 'NK cells', 'CD8+ T cells'],
    clinicalSignificance: 'IL-12 receptor deficiency results in susceptibility to disseminated atypical mycobacterial and salmonella infections (Mendelian Susceptibility to Mycobacterial Disease).',
    slideRef: 'Slide 29, 31, 41, 44, 46'
  },
  {
    name: 'Interleukin-17 (IL-17)',
    cellularSource: 'CD4+ Th17 cells',
    principalAction: 'Stimulates production of chemokines and G-CSF to recruit neutrophils and induce acute barrier inflammation',
    targetCells: ['Endothelial cells', 'Epithelial cells', 'Fibroblasts', 'Bone marrow stromal cells'],
    clinicalSignificance: 'Key in clearing extracellular Candida and Klebsiella infections. Secukinumab (anti-IL-17A) is a first-line biologic for Psoriasis and Ankylosing Spondylitis.',
    slideRef: 'Slide 41, 43'
  }
];

export const PATHOGEN_CLASSIFICATION: PathogenClassData[] = [
  {
    category: 'Phagolysosome',
    categoryName: 'Intracellular Microbes Sequestered in Phagolysosomes',
    examples: ['Mycobacterium tuberculosis', 'Listeria monocytogenes (initial stage)', 'Legionella pneumophila', 'Cryptococcus neoformans (fungus)', 'Leishmania donovani (protozoan)', 'Trypanosoma cruzi (protozoan)'],
    hostCellType: 'Macrophages and other Phagocytes',
    immuneRecognitionPathway: 'Processed via MHC Class II pathway and presented to CD4+ Th1 cells',
    effectorMechanism: 'Th1 secretion of IFN-γ and CD40L engagement induces macrophage M1 activation (ROS, NO, lysosomal acid hydrolases) to digest microbes in vesicles',
    clinicalManifestation: 'Chronic granulomatous inflammation, caseation, intracellular persistence if Th1 is deficient.'
  },
  {
    category: 'Cytosol Escape',
    categoryName: 'Intracellular Microbes Escaping from Phagosomes into Cytosol',
    examples: ['Listeria monocytogenes (via Listeriolysin O)', 'Shigella flexneri', 'Rickettsia prowazekii'],
    hostCellType: 'Phagocytes and Somatic Host Cells',
    immuneRecognitionPathway: 'Processed via Proteasome/TAP and presented on MHC Class I to CD8+ CTLs',
    effectorMechanism: 'CD8+ CTL mediated targeted apoptosis via Perforin/Granzyme B and Fas/FasL, eliminating the infected host cell and cellular reservoir',
    clinicalManifestation: 'Meningitis, sepsis in immunocompromised and pregnant patients (Listeria), severe vasculitis (Rickettsia).'
  },
  {
    category: 'Nonphagocytic',
    categoryName: 'Microbes Infecting Non-Phagocytic Cells (Epithelial, Endothelial, Hepatocytes)',
    examples: ['All Viruses (Influenza, Hepatitis B/C, HIV, HSV, SARS-CoV-2)', 'Rickettsiae (all)', 'Plasmodium falciparum (liver hepatocytes stage)', 'Cryptosporidium parvum'],
    hostCellType: 'Epithelial cells, Endothelial cells, Hepatocytes, Neurons',
    immuneRecognitionPathway: 'Cytosolic viral protein synthesis -> Proteasome degradation -> TAP -> MHC Class I presentation to CD8+ CTLs (Priming via DC Cross-Presentation)',
    effectorMechanism: 'CD8+ CTL cytotoxic lysis destroying the replication niche; IFN-γ enhances viral resistance of neighboring uninfected cells',
    clinicalManifestation: 'Acute viral hepatitis, influenza pneumonitis, malaria exo-erythrocytic schizogony.'
  }
];
