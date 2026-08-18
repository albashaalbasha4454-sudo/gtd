import { GoogleGenAI } from '@google/genai';

let aiInstance: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY || '',
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiInstance;
}

const SYSTEM_INSTRUCTION = `You are the Expert Immunology Academic & Clinical Professor for Dr. Rana Habib's course on "Adaptive Immunity & Cell-Mediated Immune Responses" at IUST (International University for Science & Technology).

Your purpose is to provide deep, authoritative, highly structured, precise, and high-yield medical immunology explanations based on the 53-slide lecture curriculum.

Core Lecture Knowledge Base:
1. Adaptive Immunity: Specific, diverse, possesses immunologic memory, self/non-self recognition, self-limiting (homeostatic return to basal state to conserve energy).
2. Two Arms: Humoral (B cells, soluble antibodies, extracellular microbes) vs Cell-Mediated (T cells, CD4+ Th & CD8+ CTL, intracellular & recruited extracellular microbes).
3. Maturation: Both B/T originate in Bone Marrow; B cells mature in Bone Marrow, T cells in Thymus. Central tolerance eliminates self-reactive clones.
4. Antigen Receptors: BCR recognizes proteins, polysaccharides, lipids, nucleic acids, small chemicals (conformational & linear epitopes). TCR recognizes strictly peptide fragments bound to MHC molecules.
5. MHC Class I vs II:
   - MHC I: All nucleated cells; alpha chain (alpha1, alpha2, alpha3) + beta2-microglobulin. Endogenous/cytosolic antigens -> Proteasome -> TAP transporter -> ER -> CD8+ CTLs.
   - MHC II: Professional APCs (Dendritic cells, Macrophages, B cells); alpha1/alpha2 + beta1/beta2 heterodimer. Exogenous antigens -> Endocytosis -> Endosome/Lysosome -> Invariant chain (Ii/CLIP) degraded -> HLA-DM loads peptide -> CD4+ Helper T cells.
6. 3-Signal Model of T Cell Activation:
   - Signal 1: TCR binding to peptide-MHC (CD3/zeta signal transduction).
   - Signal 2: Costimulation (B7-1/B7-2 on APC binding to CD28 on T cell). Without signal 2 -> Anergy/Tolerance or apoptosis.
   - Signal 3: Cytokine milieu (IL-12 -> Th1, IL-4 -> Th2, IL-1/IL-6/IL-23/TGF-beta -> Th17, autocrine IL-2 for clonal proliferation).
7. Cross-Presentation: Dendritic cells capture exogenous infected/tumor cell antigens and present them on MHC Class I to prime naive CD8+ T cells.
8. CTL Killing Mechanisms:
   - Perforin & Granzyme B (pore formation -> granzyme B activates caspases -> apoptosis).
   - Fas / FasL (CD95 / CD95L death receptor pathway -> caspase activation -> apoptosis).
9. CD4+ Helper T Subsets:
   - Th1: Induced by IL-12/IFN-gamma, TF: T-bet (STAT1/STAT4). Secretes IFN-gamma. Activates macrophages (ROS, NO, lysosomal enzymes, TNF, IL-1, B7 upregulation). Combats intracellular phagosomal pathogens.
   - Th2: Induced by IL-4, TF: GATA-3 (STAT6). Secretes IL-4, IL-5. B-cell switching to IgE/IgG, eosinophil activation, helminth defence, allergy.
   - Th17: Induced by IL-1, IL-6, IL-23, TGF-beta, TF: ROR-gamma-t (STAT3). Secretes IL-17. Neutrophil recruitment, inflammation, extracellular bacteria/fungi.
10. Intracellular Microbes Classification:
   - Phagosomal: Mycobacteria, Listeria, Legionella pneumophila, Cryptococcus neoformans, Leishmania, Trypanosoma cruzi.
   - Cytosolic escape: Listeria, cytosolic bacteria.
   - Nonphagocytic cells: All viruses, Rickettsiae, Plasmodium falciparum, Cryptosporidium parvum.
11. Synergy: In macrophages with trapped and escaping bacteria, CD4+ Th1 activates macrophage killing in phagosomes while CD8+ CTL lyses infected cells to destroy intracellular reservoirs.
12. Key Cytokines: IL-2 (T cell proliferation), IL-4 (IgE switch), IL-5 (Eosinophils), IFN-gamma (Macrophage activation, MHC upregulation), TGF-beta (T cell inhibition/Treg), IL-17 (Neutrophils), IL-12 (Th1 differentiation).

Format your answers with clear markdown headings, bullet points, concise high-yield summaries, and clinical pearls. Answer in English or Arabic if queried in Arabic.`;

export async function handleGenerateImmunologyChat(prompt: string, history: Array<{ role: 'user' | 'model'; text: string }> = []) {
  const ai = getAiClient();
  
  const contents = [
    ...history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    })),
    {
      role: 'user' as const,
      parts: [{ text: prompt }]
    }
  ];

  const response = await ai.models.generateContent({
    model: 'gemini-3.7-flash',
    contents: contents as any,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.4,
    },
  });

  return { text: response.text || 'No response generated.' };
}

export async function handleGenerateClinicalCase(topic?: string) {
  const ai = getAiClient();
  const prompt = `Generate 1 advanced USMLE/Board-level clinical vignette MCQ case based specifically on Dr. Rana Habib's lecture: "${topic || 'Cell-Mediated Adaptive Immunity'}".
Return the response strictly as valid JSON with no markdown formatting around it, matching this JSON schema:
{
  "title": "Clinical Case Title",
  "patientVignette": "A 34-year-old patient presents with...",
  "question": "Which of the following immune mechanisms explains...",
  "options": [
    {"id": "A", "text": "Option A"},
    {"id": "B", "text": "Option B"},
    {"id": "C", "text": "Option C"},
    {"id": "D", "text": "Option D"}
  ],
  "correctAnswer": "A",
  "explanation": "Step-by-step pathophysiological rationale...",
  "lectureSlideRef": "Slide 44: Th1 Macrophage Activation",
  "highYieldPearl": "Clinical takeaway pearl..."
}`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.7-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.3,
    },
  });

  try {
    return JSON.parse(response.text || '{}');
  } catch (err) {
    return {
      title: "Clinical Case in Cell-Mediated Immunity",
      patientVignette: "A 42-year-old male presents with persistent cough, night sweats, and weight loss. Sputum reveals acid-fast bacilli (Mycobacterium tuberculosis). Biopsy of a pulmonary nodule reveals caseating granulomas.",
      question: "Which cytokine secreted by CD4+ T helper 1 (Th1) cells is most essential for stimulating the microbicidal activity of alveolar macrophages to contain this pathogen?",
      options: [
        { "id": "A", "text": "Interferon-gamma (IFN-γ)" },
        { "id": "B", "text": "Interleukin-4 (IL-4)" },
        { "id": "C", "text": "Interleukin-5 (IL-5)" },
        { "id": "D", "text": "Transforming Growth Factor-beta (TGF-β)" }
      ],
      correctAnswer: "A",
      explanation: "IFN-γ secreted by CD4+ Th1 cells binds to macrophage IFN-γ receptors, inducing synthesis of reactive oxygen species (ROS), nitric oxide (NO), and lysosomal enzymes to destroy phagocytosed Mycobacteria.",
      lectureSlideRef: "Slides 43-46: Th1 activation of macrophages",
      highYieldPearl: "Th1 cells produce IFN-γ, which is the principal macrophage-activating factor essential for immunity against intracellular pathogens in phagolysosomes."
    };
  }
}
