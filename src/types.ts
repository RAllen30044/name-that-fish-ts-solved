// If you have any types that are SHARED BY MANY COMPONENTS,put them here

import { Images } from "./assets/Images";

export const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export type TSFishData = {
  name: string,
  url: string
};

export type TSGameInfo = {
  handleAnswer: (name:string) => void;
  fishData:TSFishData
 
};

export type ClassAppData={
  fishName: string;
correctCount: number;
incorrectCount: number;
index: number;
}

export type ClassAppState = {
  gameInformation: ClassAppData| null;
};

export type TSClassGameInfo={
  getGameInformation : (getGameInformation:ClassAppData|null)=>void;
}

export type TSFinalScore = {
  totalCount: number;
  correctCount: number;
};
export type TSScoreBoard = {
  incorrectCount: number;
  correctCount: number;
  index:number;
  answersLeft: string[];
};
