import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const sqlName = searchParams.get('sqlName');

    try {
        if (!sqlName) throw new Error('SQL name required');
        await sql`INSERT INTO SqlTest (Name) VALUES (${sqlName});`
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    const sqlTest = await sql`SELECT * FROM SqlTest;`;
    return NextResponse.json({ sqlTest }, { status: 200 });
}
