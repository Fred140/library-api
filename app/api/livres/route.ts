import { NextResponse } from "next/server";
import { PrismaClient } from "../../../generated/prisma"; // Chemin selon votre config

const prisma = new PrismaClient();


// Ajoute aussi un handler OPTIONS :
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
       "Content-Type": "application/json",
    },
  });
}

export async function GET() {
  const livres = await prisma.livre.findMany();
  return new NextResponse(JSON.stringify(livres), {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const livre = await prisma.livre.create({ data });
  return new NextResponse(JSON.stringify(livre), {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(request: Request) {
  const { id, ...data } = await request.json();
  try {
    const livre = await prisma.livre.update({
      where: { id },
      data,
    });
    return new NextResponse(JSON.stringify(livre), {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new NextResponse(JSON.stringify({ message: "Livre not found" }), {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
    });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    await prisma.livre.delete({ where: { id } });
    return new NextResponse(JSON.stringify({ message: "Livre deleted" }), {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
    });
  } catch {
    return new NextResponse(JSON.stringify({ message: "Livre not found" }), {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
    });
  }
}