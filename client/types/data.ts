export interface Data {
  goods: Good[]
  name: string
}

export type Good = {
  priceInDollars: number
  quantity: number
  name: string
} 