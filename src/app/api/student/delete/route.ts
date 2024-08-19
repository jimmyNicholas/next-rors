import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    if (!id) throw new Error('Id required');
    await sql`DELETE FROM student_results WHERE id = ${id};  
              `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const student = await sql`SELECT * FROM student_results;`;
  return NextResponse.json({ student }, { status: 200 });
}