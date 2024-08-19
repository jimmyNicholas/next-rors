import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
  const { searchParams } = new URL(request.url);
  const courseMetaDataId = searchParams.get('courseMetaDataId');

  try {
    if (!courseMetaDataId) throw new Error('Id required');
    const result = await sql`
            SELECT * FROM student_results
            WHERE course_meta_data_id = ${courseMetaDataId};
              `;
              return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}