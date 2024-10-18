// export interface TeamData {
//     teamName: string;
//     sport: string;
//     noOfPlayers: number;
//     teamLogo: File; // Assuming you are uploading a file
// }



// Utils/types.ts
export interface Team {
    name: string;
    sport: string;
    number_of_players: number;
    logo: File; // Assuming teamLogo will be a File object
  }
  
  export interface TeamResponse {
    id: string;
    name: string;
    sport: string;
    number_of_players: number;
    teamLogoUrl: string; // URL of the uploaded logo
  }
  
  export interface ErrorResponse {
    error: string;
  }
  