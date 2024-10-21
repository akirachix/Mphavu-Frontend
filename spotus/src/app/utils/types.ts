

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
  

  
  export interface Player {
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    position: string;
    teamLogo: File; // Assuming teamLogo will be a File object
  }
  
  export interface PlayerResponse {
    id: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    position: string;
    teamLogoUrl: string; // URL of the uploaded logo
  }
  
  export interface ErrorResponse {
    error: string;
  }