// src/app/hooks/usePlayerData.js

import { useState, useEffect } from 'react';
import { fetchPlayerData } from '../api/PlayersStats/posts/route';

export const usePlayerData = (playerId) => {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playerId) return;

    const getPlayerData = async () => {
      try {
        const data = await fetchPlayerData(playerId);
        setPlayer(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getPlayerData();
  }, [playerId]);

  return { player, loading, error };
};
