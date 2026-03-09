import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'





export async function GET(request: NextRequest) {
  const {searchParams} = request.nextUrl;
  const take = searchParams.get('take') || 10;

  if(isNaN(+take)){
    return NextResponse.json({
        error:'The param take has to be a number',
    
    }, {status:400})
  }

    const todos = await prisma.todo.findMany({
        take:+take
    });

    return NextResponse.json(todos)

}