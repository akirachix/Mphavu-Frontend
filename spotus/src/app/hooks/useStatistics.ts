
import { useEffect, useState } from 'react';
import { fetchStatistics } from '../api/statistics/route'; 

export const useStatistics = (playerId: number) => {
  const [statistics, setStatistics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStatistics(playerId);
        console.log('Fetched statistics:', data); 
        setStatistics(data); 
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [playerId]);

  return { statistics, loading, error }; 
};
