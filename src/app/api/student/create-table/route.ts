import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result = 
            await sql`
                CREATE TABLE IF NOT EXISTS student_results (
                    id SERIAL PRIMARY KEY,
                    student_id TEXT UNIQUE,
                    first_name TEXT,
                    last_name TEXT,
                    nickname TEXT,
                    start_date DATE NOT NULL,
                    end_date DATE,
                    participation TEXT, 
                    leavers TEXT, 
                    teacher_comments TEXT,
                    overall_reading TEXT,
                    overall_writing TEXT,
                    overall_listening TEXT,
                    overall_speaking TEXT,
                    grammar TEXT[],
                    vocabulary TEXT[],
                    listening TEXT[],
                    reading TEXT[],
                    writing TEXT[],
                    speaking TEXT[],
                    pronunciation TEXT[]
                    );
                `;
            return NextResponse.json({ result }, { status: 200});
    } catch (error) {
        return NextResponse.json({ error }, { status: 500});
    }
}

