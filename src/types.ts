// If you have any types that are SHARED BY MANY COMPONENTS,put them here

export type TSFishInfo = {
  fishName: string;

  correctCount: number;
  incorrectCount: number;
  correctFishName: string;
};

export type TSGameInfo = {
  getGameInformation: (fishName: TSFishInfo) => void;
}

export type ClassAppState = {
  gameInformation: TSFishInfo | null;
}

export type TSFinalScore ={
  totalCount: number;
  correctCount: number;
}
export type TSScoreBoard ={
  incorrectCount: number;
  correctCount: number;
  correctFishName: string;
}
