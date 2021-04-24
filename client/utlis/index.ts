import { Categories } from "../types/categories";
import { Data } from "../types/data";
import { Goods } from "../types/products";

export function randomNum(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createProductList  (categories: Categories, goods: Goods[]): Data[] {
  const goodsWithCategories: Data[] = []
   Object.entries(categories).map((entry) => {
    const [groupId, category] = entry
    const currentGoods = goods.filter((good) => good.G.toString() === groupId)
    
    goodsWithCategories.push({
      name: category.G,
      goods: currentGoods.map((good) => {
        return {
          name: category.B[good.T].N,
          quantity: good.P,
          priceInDollars: good.C,
        }
      })
    })
  })

  return goodsWithCategories
}