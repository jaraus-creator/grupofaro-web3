export async function getGeminiResponse(message: string): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    return "Error al conectar con el asistente.";
  }

  const data = await response.json();
  return data.reply;
}
