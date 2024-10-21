const baseUrl = process.env.BASE_URL || 'https://sportus-70b4ee2281cb.herokuapp.com';

export async function sendInvite(email: string) {
  try {
    const response = await fetch(`${baseUrl}/api/send-invite/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to send invite');
    }

    return response.json();
  } catch (error) {
    console.error('Error sending invite:', error);
    throw error;
  }
}
