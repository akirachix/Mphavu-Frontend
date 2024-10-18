


import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();

  const teamName = formData.get('teamName');
  const sport = formData.get('sport');
  const noOfPlayers = formData.get('noOfPlayers');
  const teamLogo = formData.get('teamLogo');

  // Basic validation
  if (!teamName || !sport || !noOfPlayers || !teamLogo) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  // Convert noOfPlayers to a number
  const parsedNoOfPlayers = Number(noOfPlayers);
  if (isNaN(parsedNoOfPlayers) || parsedNoOfPlayers <= 0) {
    return NextResponse.json({ message: 'Invalid number of players' }, { status: 400 });
  }

  // Send the form data to the external API
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teams`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      return NextResponse.json({ message: errorResponse.message || 'Failed to create team' }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}












