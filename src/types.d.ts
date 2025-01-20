
export interface App {
    start: (options: { dealers: string[] }) => void;
  }
  
  declare global {
    interface Window {
      App: App;
    }
  }
  
  export {};
  