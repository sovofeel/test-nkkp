import { Categories } from "../types/categories"
import { Products } from "../types/products"

enum endpoint {
  products = 'products',
  names = 'names',
}

export default class Api {
  readonly _baseUrl: string = 'http://localhost:7421/'

  goods = async (): Promise<Products> => {
    const response = await fetch(`${this._baseUrl}${endpoint.products}`)
    const result = await response.json()

    return result
  }

  names = async (): Promise<Categories> => {
    const response = await fetch(`${this._baseUrl}${endpoint.names}`)
    const result = await response.json()

    return result
  }
}

