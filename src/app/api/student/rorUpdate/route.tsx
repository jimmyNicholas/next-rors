import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
    const { searchParams } = new URL(request.url);
  
    const id = searchParams.get('id');
    const startDate = searchParams.get('startDate') || null;
    const endDate = searchParams.get('endDate') || null; 

    try {
        if (!id) throw new Error('Id required');
        await sql`UPDATE student_results 
                    SET 
                        start_date = ${startDate},
                        end_date = ${endDate}                  
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