import { useEffect, useState } from 'react';
import { fetchAgents } from '../api/agents/route';  

export const useAgents = () => {
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAgents(); 
        setAgents(data); 
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return { agents, loading, error }; 
};
