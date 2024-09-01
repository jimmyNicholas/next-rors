import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
  const { searchParams } = new URL(request.url);
  
  const id = searchParams.get('id');
  const studentId = searchParams.get('studentId');
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const nickname = searchParams.get('nickname');

  try {
    if (!id) throw new Error('Id required');
    await sql`UPDATE student_results 
                SET 
                    student_id = ${studentId},
                    first_name = ${firstName}, 
                    last_name = ${lastName},
                    nickname = ${nickname}
                WHERE id = ${id};
              `;    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }

  const student = await sql`
    SELECT * FROM student_results
      WHERE id = ${id};
    `;
  return NextResponse.json({ student }, { status: 200 });
};
