import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message;

    if (!message || typeof message !== "string") {
      return Response.json({ error: "Mensaje inválido" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return Response.json(
        { error: "Falta GEMINI_API_KEY en Vercel" },
        { status: 500 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: message,
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
    });`



    const reply =
      response?.text ?? "Lo siento, no pude responder en este momento.";

    return Response.json({ reply }, { status: 200 });
  } catch (error: any) {
    console.error("Error en /api/chat:", error);
    return Response.json(
      { error: error?.message || "Error interno del chatbot" },
      { status: 500 }
    );
  }
}
