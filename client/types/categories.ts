export interface Categories {
  [k: string]: {
    G: string
    C?: number
    B: {
      [b: string]: {
        N: string
        T: string | number
      }
    }
  }
}