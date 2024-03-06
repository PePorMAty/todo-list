interface ITodos {
  id: number;
  isComplite: boolean;
  text: string;
}

export interface IInitialState {
  todos: ITodos[];
}
