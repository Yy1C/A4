import { GoogleGenAI, Type } from "@google/genai";
import { DesignIdea } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateDormConcept = async (
  style: string,
  roomSize: string,
  occupants: number
): Promise<DesignIdea> => {
  try {
    const prompt = `
      Create a dorm room interior design concept for a ${occupants}-person room.
      Room size description: ${roomSize}.
      Desired Style: ${style}.
      
      Provide a creative title, a concept description, a color palette (hex codes or names), 
      layout advice (furniture arrangement), and a list of low-cost decor items suitable for students.
      The output must be structured JSON.
      IMPORTANT: All text content in the JSON must be in Simplified Chinese (zh-CN).
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            concept: { type: Type.STRING },
            colorPalette: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            furnitureArrangement: { type: Type.STRING },
            decorItems: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            }
          },
          required: ["title", "concept", "colorPalette", "furnitureArrangement", "decorItems"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as DesignIdea;

  } catch (error) {
    console.error("Error generating design:", error);
    throw error;
  }
};