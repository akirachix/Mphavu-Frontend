// api/PlayersStats/posts/route.ts

import { NextResponse } from 'next/server';
import { fetchPlayerSessions } from '@/utils/playersStats';

export async function GET() {
  try {
    const sessions = await fetchPlayerSessions();
    return NextResponse.json(sessions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}
