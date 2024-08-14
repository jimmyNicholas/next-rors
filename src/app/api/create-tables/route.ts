import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const result = 
            await sql`
                ALTER TABLE sql_test 
                    RENAME COLUMN Name TO Names
                    ;
                `;
            return NextResponse.json({ result }, { status: 200});
    } catch (error) {
        return NextResponse.json({ error }, { status: 500});
    }
}

//CREATE TABLE sql_test (Name varchar(255));