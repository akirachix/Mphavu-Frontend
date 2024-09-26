// api/PlayerProfile/posts/route.ts

import { NextResponse } from 'next/server';

// Sample player data
const playerProfile = {
    id: 1,
    name: 'James Doe',
    team: 'Mphavu',
    imageUrl: '/images/image (10).png', // Replace with actual image path
    videoThumbnailUrl: '/images/imageplayer.png', // Replace with actual video thumbnail path
    stats: [
        { label: 'Shooting Accuracy', value: '97%' },
        { label: 'Shooting Angle', value: '82%' },
        { label: 'Assists', value: '10%' },
        { label: 'Ball Control', value: '50%' },
        { label: 'Defense', value: '50%' },
        { label: 'Scores', value: '10%' },
        { label: 'Action Completion', value: '97%' },
        { label: 'Passing Game', value: '82%' },
    ],
};

export async function GET(request: Request) {
    // In a real application, you would fetch player data from a database or another source
    return NextResponse.json(playerProfile, { status: 200 });
}
