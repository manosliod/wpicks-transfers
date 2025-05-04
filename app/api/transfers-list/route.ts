import { NextResponse } from 'next/server';
import transfersListData from '@/lib/data/transfers_list.json';

export async function GET() {
  return NextResponse.json(transfersListData);
}
