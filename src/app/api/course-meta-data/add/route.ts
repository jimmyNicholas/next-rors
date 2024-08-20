import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const course = searchParams.get('course');
    const className = searchParams.get('className');
    const teacherOne = searchParams.get('teacherOne');
    const teacherTwo = searchParams.get('teacherTwo');
    console.log(className);
    

    try {
        if( 
            !course || 
            !className || 
            !teacherOne || 
            !teacherTwo
        ) throw new Error('course, class name and teachers required');
        await sql`INSERT INTO course_meta_data(
                    course,
                    class_name,
                    teacher_one,
                    teacher_two
                )
                VALUES (
                    ${course},
                    ${className},
                    ${teacherOne},
                    ${teacherTwo},
                );`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}