import { db } from "@vercel/postgres";

const client = await db.connect();

async function createCourseMetaDataTable() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`  
        CREATE TABLE IF NOT EXISTS courseMetaData (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            course TEXT NOT NULL,
            className TEXT NOT NULL UNIQUE,
            teacherOne TEXT,
            teacherTwo TEXT,
        )
    `;
}

export async function GET() {
    try {
        await client.sql`BEGIN`;
        await createCourseMetaDataTable();
        await client.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({ error }, { status: 500 });
    }
}