// api/Players/posts/route.ts

import { NextResponse } from 'next/server';
import { getPlayers, addPlayer } from '../../../utils/players'; // Adjust path as needed
import { Player } from '../../../utils/players'; // Importing the Player type

// Handler for the Players API route
export async function GET() {
    const players = getPlayers(); // Get all players
    return NextResponse.json(players); // Return players as JSON response
}

export async function POST(request: Request) {
    const newPlayer: Player = await request.json(); // Parse JSON request body
    const updatedPlayers = addPlayer(newPlayer); // Add the new player
    return NextResponse.json(updatedPlayers); // Return updated player list
}
