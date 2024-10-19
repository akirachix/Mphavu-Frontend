

export interface Team {
    name: string;
    sport: string;
    number_of_players: number;
    logo: File;
  }
  
  export interface TeamResponse {
    id: string;
    name: string;
    sport: string;
    number_of_players: number;
    teamLogoUrl: string; 
  }
  
  export interface ErrorResponse {
    error: string;
  }
  