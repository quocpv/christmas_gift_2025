
export interface HintMessage {
  role: 'user' | 'model';
  text: string;
}

export interface RiddleSolution {
  numbers: string;
  meaning: string;
}
