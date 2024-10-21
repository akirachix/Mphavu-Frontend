import { NextResponse } from 'next/server';

const BASE_URL = 'https://sportus-70b4ee2281cb.herokuapp.com'; 

export async function GET(request: Request, { params }: { params: { playerId: string } }) {
  const { playerId } = params;

  try {
    const response = await fetch(`${BASE_URL}/performance/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new NextResponse(`HTTP error! Status: ${response.status}, Message: ${errorText}`, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(`Error fetching data: ${(error as Error).message}`, { status: 500 });
  }
}