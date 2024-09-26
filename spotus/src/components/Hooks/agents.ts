import { useState, useEffect } from 'react';
// import { fetchCoaches, Coach } from '../utils/coaches';
// import { fetchAgents } from '../Utils/agents';
import { fetchAgents } from '../Utils/agents';

export const useAgents = () => {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const data = await fetchAgents();
        setAgents(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch coaches');
        setLoading(false);
      }
    };

    getAgents();
  }, []);

  return { agents, loading, error };
};