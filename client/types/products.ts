export interface Products {
  Error: string;
  Id: number;
  Success: Boolean;
  Value: {
    Goods: Goods[]
  }
}

export interface Goods {
  B: boolean,
  C: number, // цена товара в долларах
  CV: null
  Pl: null
  T: number // id товара
  G: number //  id группы
  P: number // количество
}