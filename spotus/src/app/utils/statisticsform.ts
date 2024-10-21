export interface Statistics {
    shotsOnTarget: number;
    passes: number;
    assists: number;
    goals: number;
    dribbling: number;
  }
    export const prepareStatistics = (data: Statistics) => {
    return {
      ...data,
    };
  };
  