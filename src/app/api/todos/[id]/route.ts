import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
 params: Promise<{ id: string }>
}
export async function GET(request: Request,{ params }: Segments){
  const { id } = await params

  const item = await prisma.todo.findFirst({
    where:{
        id:id
    }
  })

  return NextResponse.json(item)
}