
import { useState, useEffect } from 'react';

import { fetchVideoData,fetchPerformanceData } from '../api/PlayerPerfomance/posts/route';
import { Import } from 'lucide-react';
import { keysToCamelCase, ensureRequiredStats } from '../utils/playerperformance';
export const useVideoData = (videoId: number) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchVideoData(videoId);
        setData(keysToCamelCase(result));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [videoId]);

  return { data, loading, error };
};

export const usePerformanceData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchPerformanceData();
        const camelCaseData = keysToCamelCase(result);
        setData(ensureRequiredStats(camelCaseData));
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return { data, loading, error };
};