export async function getGeminiResponse(message: string): Promise<string> {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    return `Error del asistente: ${data?.error || "sin detalle"}`;
  }

  return data.reply;
}
