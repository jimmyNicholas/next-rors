import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
  const { searchParams } = new URL(request.url);
  const className = searchParams.get('className');
 
  try {
    if (!className) throw new Error('Id and names required');
    const result = await sql`
            SELECT * FROM course_meta_data
            WHERE class_name = ${className};
              `;
              return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}