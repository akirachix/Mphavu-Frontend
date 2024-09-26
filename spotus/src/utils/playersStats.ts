export interface Session {
    date: string;
    session: string;
  }
  
  const sampleSessions: Session[] = [
    { date: '12/8/24', session: 'Session 1' },
    { date: '12/8/24', session: 'Session 2' },
    { date: '12/8/24', session: 'Session 3' },
  ];
  
  export const fetchPlayerSessions = async (): Promise<Session[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sampleSessions);
      }, 1000);
    });
  };
  