export type Player = {
    id: number;
    name: string;
    position: string;
    team: string;
    profile: string; 
};

let players: Player[] = []; 

export const getPlayers = () => {
    return players;
};

export const addPlayer = (newPlayer: Player) => {
    players.push(newPlayer);
    return players; 
};

export const clearPlayers = () => {
    players = [];
};
