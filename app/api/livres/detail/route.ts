import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../generated/prisma"; 

const prisma = new PrismaClient();

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}

export async function POST(request: Request) {
  const { id } = await request.json();
  if (!id) {
    return new NextResponse(JSON.stringify({ message: "Missing id" }), {
      status: 400,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
    });
  }
  const livre = await prisma.livre.findUnique({ where: { id: Number(id) } });
  if (!livre) {
    return new NextResponse(JSON.stringify({ message: "Livre not found" }), {
      status: 404,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:4200",
        "Access-Control-Allow-Methods": "POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json",
      },
    });
  }
  return new NextResponse(JSON.stringify(livre), {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4200",
      "Access-Control-Allow-Methods": "POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Content-Type": "application/json",
    },
  });
}