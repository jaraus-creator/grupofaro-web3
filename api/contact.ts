import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

const db = admin.firestore();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { nombre, email, telefono, mensaje, motivo } = body;

    if (!nombre || !email) {
      return Response.json(
        { error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    await db.collection("contactos").add({
      nombre,
      email,
      telefono: telefono || "",
      motivo: motivo || "",
      mensaje: mensaje || "",
      origen: "web-grupofaro",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return Response.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    console.error("Error guardando contacto:", error);
    return Response.json(
      { error: error?.message || "No se pudo guardar el contacto" },
      { status: 500 }
    );
  }
}
