declare namespace Global {
  interface IAction {
    type: string;
    payload?: any;
  }

  type TNullable<T> = T | null;
}

declare module "*";
