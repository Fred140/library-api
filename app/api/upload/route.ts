import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Désactive le bodyParser par défaut de Next.js pour cette route
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  // Removed invalid return statement with spread syntax

  if (!file) {
    return NextResponse.json({ error: "Aucun fichier envoyé" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Chemin de destination dans le dossier public/uploads
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(uploadDir, fileName);

  // Crée le dossier s'il n'existe pas
  await writeFile(filePath, buffer);

  // URL publique d'accès à l'image
  const publicUrl = `/uploads/${fileName}`;

  return NextResponse.json({ url: publicUrl }, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}