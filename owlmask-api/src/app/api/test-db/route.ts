import db from '@/db'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {

    try {
        const insertResult = await (await db())
          .collection('testcollection')
          .insertOne({ a: 1 })
    
        console.log(insertResult)
        return NextResponse.json({ message: 'todo bien' })
      } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'la cagaste' })
      }
}