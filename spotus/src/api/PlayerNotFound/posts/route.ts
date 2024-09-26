// api/PlayerNotFound/posts/route.ts

import { NextResponse } from 'next/server';

// Sample data of players for demonstration purposes
const players = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more players as necessary
];

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const playerName = searchParams.get('name');

    if (!playerName) {
        return NextResponse.json({ error: 'Player name is required' }, { status: 400 });
    }

    // Find player by name (case insensitive)
    const player = players.find(player => player.name.toLowerCase() === playerName.toLowerCase());

    if (!player) {
        return NextResponse.json({ message: 'Player not found' }, { status: 404 });
    }

    return NextResponse.json(player, { status: 200 });
}
