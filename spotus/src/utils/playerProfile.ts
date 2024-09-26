export type PlayerStat = {
    label: string;
    value: string;
};

export const formatPlayerStats = (stats: PlayerStat[]) => {
    return stats.map(stat => ({
        ...stat,
        value: stat.value.endsWith('%') ? stat.value : `${stat.value}%`, // Ensure all values are formatted as percentages
    }));
};
