import { NextResponse } from 'next/server';
import transfersDetailsData from '@/lib/data/transfers_details.json';

export async function GET() {
    return NextResponse.json(transfersDetailsData);
}
