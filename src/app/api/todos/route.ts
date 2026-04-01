import { prisma } from '@/lib/prisma';
import * as yup from 'yup';
import { NextResponse, NextRequest } from 'next/server'





export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const take = searchParams.get('take') || 10;

  if (isNaN(+take)) {
    return NextResponse.json({
      error: 'The param take has to be a number',

    }, { status: 400 })
  }

  const todos = await prisma.todo.findMany({
    take: +take
  });

  return NextResponse.json(todos)

}

const PostSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false)

})


export async function POST(request: Request) {

  try {

    const {complete, description} = await PostSchema.validate(await request.json(),);
    

    const todo = await prisma.todo.create({ data: { complete, description} })
    
    
    return NextResponse.json(todo)
  } catch (error) {
    
    
    return NextResponse.json(JSON.stringify(error) , { status: 400 })
  }

}