import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
    message: string
  }

export async function handler(
 req: NextApiRequest,
 res: NextApiResponse
) {
    res.status(200).json({ message: 'Student Added' });
}