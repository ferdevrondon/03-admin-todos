import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from 'yup'

interface Segments {
  params: Promise<{ id: string }>
}
export async function GET(request: Request, { params }: Segments) {
  const { id } = await params

  const item = await prisma.todo.findFirst({ where: { id } });

  if (!item) {
    return NextResponse.json({ error: `The element id ${id} was not found` })
  }

  return NextResponse.json(item)
}






const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
})
export async function PUT(request: Request, { params }: Segments) {
  const { id } = await params

  const item = await prisma.todo.findFirst({ where: { id } });

  if (!item) {
    return NextResponse.json({ error: `The element id ${id} was not found` }, { status: 404 })
  }

  try {
    const { complete, description } = await putSchema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description }
    })
    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }


}