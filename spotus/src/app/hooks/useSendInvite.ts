import { useState } from 'react';

export const useSendInvite = () => {
  const [inviteSent, setInviteSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendInvite = async (email: string) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/send-invite/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const responseData = await response.json(); 

      if (!response.ok) {
        throw new Error(responseData.message || 'Email invite with this email already exists');
      }

      setInviteSent(true);
      setErrorMessage(''); 
      setSuccessMessage(responseData.message); 

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error sending invite:', error);
      setErrorMessage(error.message); 
      setSuccessMessage(''); 

      setTimeout(() => {
        setErrorMessage('');
      }, 3000);
    }
  };

  return { inviteSent, errorMessage, successMessage, sendInvite, setInviteSent };
};
