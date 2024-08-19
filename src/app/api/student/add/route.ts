import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
  const { searchParams } = new URL(request.url);
  const studentId = searchParams.get('studentId');
  const startDate = searchParams.get('startDate');
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const courseMetaDataId = searchParams.get('courseMetaDataId');

  try {
    if (!studentId || !firstName || !lastName) throw new Error('Id and names required');
    await sql`INSERT INTO student_results 
                (student_id, start_date, first_name, last_name, course_meta_data_id)
                VALUES (${studentId}, ${startDate}, ${firstName}, ${lastName}, ${courseMetaDataId});  
              `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const student = await sql`SELECT * FROM student_results;`;
  return NextResponse.json({ student }, { status: 200 });
}