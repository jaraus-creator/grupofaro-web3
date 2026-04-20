//import { GoogleGenAI } from "@google/genai";

// Use the environment variable directly as specified in the guidelines
//const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Lo siento, el servicio de asistente virtual no está configurado correctamente en este momento.";
  }

  try {
    //const response = await ai.models.generateContent({
     // model: 'gemini-3-flash-preview',
      //contents: userMessage,
      config: {
        systemInstruction: `Eres un asistente virtual amable y profesional del 'Grupo Faro', una red de psicólogos y psiquiatras en Chile.
        Tu objetivo es responder preguntas generales sobre psicología, bienestar y explicar cómo funcionan los servicios terapéuticos.
        
        Reglas:
        1. Mantén un tono calmado, empático y respetuoso (Usted).
        2. Eres breve y conciso (máximo 100 palabras por respuesta).
        3. Si el usuario menciona pensamientos suicidas, autolesiones o emergencias médicas, indícale inmediatamente que llame a servicios de emergencia (como el 131 o el *4141 en Chile) o vaya a urgencias. NO intentes hacer terapia.
        4. Siempre invita sutilmente a agendar una consulta con un profesional del Grupo Faro para un diagnóstico real.
        5. Habla en español de Chile, pero con un lenguaje profesional y neutro.
        
        Servicios de Grupo Faro: Atención presencial (Santiago) y online, adolescentes y adultos, psiquiatría y psicología.
        Contacto: Si el usuario pregunta por un teléfono o celular de contacto, entrégale el número: +56 9 93317706.`,
      }
   // });
    
    return response.text || "Disculpa, no pude procesar tu respuesta.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Lo siento, hubo un error al conectar con el asistente. Por favor intenta más tarde.";
  }
};
