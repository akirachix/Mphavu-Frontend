// api/AddPlayers/posts/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.formData();
    const playerName = body.get('playerName') as string;
    const team = body.get('team') as string;
    const position = body.get('position') as string;
    const dob = body.get('dob') as string;
    const playerPhoto = body.get('playerPhoto') as File;

    // Validate input
    if (!playerName || !team || !position || !dob) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Here you can handle the player photo upload if necessary, or simply save the player data to your database
    // Example:
    // const player = await savePlayer({ playerName, team, position, dob, playerPhoto });

    // Simulating successful player addition
    return NextResponse.json({ message: "Player added successfully" }, { status: 201 });
}
