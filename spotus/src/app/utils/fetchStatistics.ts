
import { fetchStatistics } from '../api/statistics/route';

export const getPlayerStatistics = async (playerId: number) => {
  return await fetchStatistics(playerId);
};
