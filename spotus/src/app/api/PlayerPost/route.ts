

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();

  const teamId = formData.get('teamId');
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const dateOfBirth = formData.get('dateOfBirth');
  const position = formData.get('position');
  const teamLogo = formData.get('teamLogo');

  if (!teamId || !firstName || !lastName || !dateOfBirth || !position || !teamLogo) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/${teamId}/players`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      return NextResponse.json({ message: errorResponse.message || 'Failed to create player' }, { status: response.status });
    }

    const result = await response.json();
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error in API route:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
