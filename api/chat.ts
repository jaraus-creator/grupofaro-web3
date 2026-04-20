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
        systemInstruction: `
Eres el asistente virtual de Grupo Faro.
Respondes con tono cálido, claro y profesional.
No entregas diagnósticos clínicos ni reemplazas atención profesional.
Cuando corresponda, orientas a la persona a contactar al equipo de Grupo Faro.
        `,
      },
    });

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
