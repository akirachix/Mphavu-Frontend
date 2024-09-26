// api/Statistics/posts/route.ts

import { NextResponse } from 'next/server';
import { prepareStatistics, Statistics } from '@/utils/statistics';

// This function handles the POST request
export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const body = await request.formData();
    const videoFile = body.get('videoFile') as File; // Get the video file
    const statisticsData: Statistics = {
      shotsOnTarget: Number(body.get('shotsOnTarget')),
      passes: Number(body.get('passes')),
      assists: Number(body.get('assists')),
      goals: Number(body.get('goals')),
      dribbling: Number(body.get('dribbling')),
    };

    // Prepare statistics data (you can validate or transform here)
    const preparedData = prepareStatistics(statisticsData);

    // Handle the video file upload (implement your logic here)
    if (videoFile) {
      // Implement your file handling logic, like saving it to a server or cloud storage
      console.log('Video file received:', videoFile.name);
    }

    // You can save the preparedData to your database here
    console.log('Statistics data to be saved:', preparedData);

    // Return a successful response
    return NextResponse.json({ message: 'Statistics submitted successfully!', data: preparedData });
  } catch (error) {
    console.error('Error processing statistics:', error);
    return NextResponse.json({ error: 'Failed to submit statistics.' }, { status: 500 });
  }
}
