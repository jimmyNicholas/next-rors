//import { sql } from '@vercel/postgres';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result = 
            await sql`
                CREATE TABLE IF NOT EXISTS course_meta_data (
                    id SERIAL PRIMARY KEY,
                    course TEXT,
                    class_name TEXT UNIQUE,
                    teacher_one TEXT,
                    teacher_two TEXT
                    );
                `;
            return NextResponse.json({ result }, { status: 200});
    } catch (error) {
        return NextResponse.json({ error }, { status: 500});
    }
}

