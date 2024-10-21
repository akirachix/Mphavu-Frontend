

export async function GET(request: Request, { params }: { params: { teamId: string } }) {
  const { teamId } = params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/${teamId}/players/`);

  if (!response.ok) {
    console.error('Error fetching players:', response.status); // Log the status
    return NextResponse.error();
  }

  const players = await response.json();
  return NextResponse.json(players);
}
