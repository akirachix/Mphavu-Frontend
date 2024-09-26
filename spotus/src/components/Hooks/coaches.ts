import { useState, useEffect } from 'react';
// import { fetchCoaches, Coach } from '../utils/coaches';
import { fetchCoaches } from '../Utils/coaches';

export const useCoaches = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCoaches = async () => {
      try {
        const data = await fetchCoaches();
        setCoaches(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch coaches');
        setLoading(false);
      }
    };

    getCoaches();
  }, []);

  return { coaches, loading, error };
};