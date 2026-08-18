import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { handleGenerateImmunologyChat, handleGenerateClinicalCase } from './server/geminiService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API Routes
app.post('/api/gemini/chat', async (req: Request, res: Response) => {
  try {
    const { prompt, history } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    const result = await handleGenerateImmunologyChat(prompt, history || []);
    return res.json(result);
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    return res.status(500).json({ error: error?.message || 'Failed to generate response' });
  }
});

app.post('/api/gemini/clinical-case', async (req: Request, res: Response) => {
  try {
    const { topic } = req.body;
    const result = await handleGenerateClinicalCase(topic);
    return res.json(result);
  } catch (error: any) {
    console.error('Gemini clinical case error:', error);
    return res.status(500).json({ error: error?.message || 'Failed to generate clinical case' });
  }
});

// Serve static assets in production
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
