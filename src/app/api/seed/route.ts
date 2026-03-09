import { prisma } from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany() //delete * from todo


   const todo = await prisma.todo.createMany({
    data:[
        {description:'Corazon de oro'},
        {description:'Mi verdad oculta', complete:true},
        {description:'Velo de novia'},
        {description:'Anatomia de grey'}
    ]
   })

    console.log(todo)
  return NextResponse.json({msg:'Seed Executed'})
}