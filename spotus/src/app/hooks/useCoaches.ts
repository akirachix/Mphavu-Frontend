import { useEffect, useState } from 'react';
import { fetchCoaches } from '../api/coaches/route';  

export const useCoaches = () => {
  const [coaches, setCoaches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoaches();  
        setCoaches(data); 
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return { coaches, loading, error };
};
