import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET( request: Request) {
    const { searchParams } = new URL(request.url);
  
    const id = searchParams.get('id');
    const activeWeek = searchParams.get('activeWeek');
    const grammar = searchParams.get('grammar') || '';
    const vocabulary = searchParams.get('vocabulary') || '';
    const listening = searchParams.get('listening') || '';
    const reading = searchParams.get('reading') || '';
    const writing = searchParams.get('writing') || '';
    const speaking = searchParams.get('speaking') || '';
    const pronunciation = searchParams.get('pronunciation') || '';

    try {
        if (!id) throw new Error('Id required');
        await sql`UPDATE student_results 
                    SET 
                        grammar[${activeWeek}] = ${grammar},
                        vocabulary[${activeWeek}] = ${vocabulary},
                        listening[${activeWeek}] = ${listening},
                        reading[${activeWeek}] = ${reading},
                        writing[${activeWeek}] = ${writing},
                        speaking[${activeWeek}] = ${speaking},
                        pronunciation[${activeWeek}] = ${pronunciation}
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