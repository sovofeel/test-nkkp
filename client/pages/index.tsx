import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Icon,
  NumberInput,
  NumberInputField,
  Table,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import React from 'react'
import { MdShoppingCart } from 'react-icons/md'
import { useInterval } from '../hooks/useInterval'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Api from '../services/api'
import { Categories } from '../types/categories'
import { Data, Good } from '../types/data'
import { Goods, Products } from '../types/products'
import { createProductList, randomNum } from '../utlis'

const api = new Api()

interface Basket {
  name: string
  priceInDollars: number
  quantity: number
  maxQuantity: number
}

export default function Home() {
  const [basketProducts, setBasketProducts] = useLocalStorage<Basket[]>('basket', [])
  const [goods, setGoods] = React.useState<Goods[]>([])
  const [categories, setCategories] = React.useState<Categories>({})
  const [dollarRate, setDollarRate] = React.useState<number>()
  const [isRateWentUp, setIsRateWentUp] = React.useState<boolean>(false)
  const [data, setData] = React.useState<Data[]>([])

  useInterval(() => {
    const setDollarRateValue = randomNum(50, 80)
    setIsRateWentUp(dollarRate < setDollarRateValue)
    setDollarRate(setDollarRateValue)
  }, 15000)

  useInterval(() => {
    api
      .goods()
      .then((data: Products) => {
        if (data && data.Success) {
          setGoods(data.Value.Goods)
        } else {
          console.log('Something went wrong')
        }
      })
      .catch(e => console.log(e))

    api
      .names()
      .then((data: Categories) => {
        data && setCategories(data)
      })
      .catch(e => console.log(e))
  }, 20000)

  React.useEffect(() => {
    setData(createProductList(categories, goods))
  }, [goods, categories])

  const handleAddToBasket = ({ name, priceInDollars, maxQuantity }: Partial<Basket>) => {
    const basket: Basket[] = basketProducts || []
    if (!basket.find(x => x.name === name)) {
      const good = { name, priceInDollars, quantity: 1, maxQuantity }
      setBasketProducts([...basket, good])
    }
  }

  const handleQuantityChange = (value: number, name: string, maxQuantity: number) => {
    if (maxQuantity < value) return

    const updatedBasket = [...basketProducts]
    const findProductName = (product: Good) => product.name === name
    const index = basketProducts.findIndex(findProductName)
    const product = basketProducts.find(findProductName)

    product.quantity = value

    updatedBasket.slice().splice(1, index, product)
    setBasketProducts(updatedBasket)
  }

  const handleRemoveFromBasket = (name: string) => {
    const updatedBasket = basketProducts.filter((product: Good) => product.name !== name)
    setBasketProducts(updatedBasket)
  }

  const getTotalBasketPrice = (): number => {
    return (
      basketProducts.reduce((acc, curr) => (acc += curr.priceInDollars * curr.quantity), 0) *
      dollarRate
    )
  }

  const Basket = () => {
    if (basketProducts.length === 0) return null
    return (
      <>
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Наименование товара</Th>
              <Th>Количество</Th>
              <Th>Цена</Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {basketProducts.map(({ name, priceInDollars, quantity, maxQuantity }) => (
              <Tr key={name} display="flex-inline">
                <Td width="100%">{name}</Td>
                <Td>
                  <NumberInput
                    as="span"
                    defaultValue={quantity}
                    width="4em"
                    onBlur={event => handleQuantityChange(+event.target.value, name, maxQuantity)}
                    min={1}
                    max={maxQuantity}
                  >
                    <NumberInputField />
                  </NumberInput>
                </Td>
                <Td minW="15em" bg={isRateWentUp ? 'rgba(255, 0, 0, 0.2)' : 'rgba(0, 255, 0, 0.2)'}>
                  Цена в рублях: {(+priceInDollars * dollarRate * quantity).toFixed(2)}
                </Td>
                <Td>
                  <Button onClick={() => handleRemoveFromBasket(name)}>Удалить</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        <Box
          p="1em"
          w="100%"
          display="flex"
          justifyContent="space-between"
          borderBottom="1px solid #E2E8F0"
        >
          <Flex fontWeight="bold">Общая цена:</Flex>
          <Flex fontWeight="bold">{getTotalBasketPrice().toFixed(2)}</Flex>
        </Box>
      </>
    )
  }

  return (
    <ChakraProvider>
      <Basket />
      <Container
        maxW="100%"
        display="grid"
        gridColumnGap="1em"
        gridRowGap="1em"
        gridTemplateColumns="1fr 1fr"
        minW="100%"
        mb="1em"
        mt="3rem"
        as="main"
        className="main-content"
      >
        {data.map(({ name, goods }: Data) => {
          if (!goods.length) return null
          return (
            <Box border="1px solid teal" borderRadius=".5em" px="1em" key={name}>
              <Heading textAlign="center" mt="0.5em" fontSize="1.5em" mb="1em" as="h3">
                {name}
              </Heading>
              {goods.map(({ name, priceInDollars, quantity }) => (
                <Box mb="1.5em" position="relative" key={name}>
                  <Flex>
                    <Heading display="inline-flex" fontSize="1em" as="h4">
                      {name} ({quantity})
                    </Heading>
                    <Button
                      position="absolute"
                      colorScheme="teal"
                      onClick={() =>
                        handleAddToBasket({ name, priceInDollars, maxQuantity: quantity })
                      }
                      bottom="0"
                      right="0"
                    >
                      <Icon as={MdShoppingCart} />
                    </Button>
                  </Flex>

                  <Flex>Цена в долларах: {priceInDollars}</Flex>
                </Box>
              ))}
            </Box>
          )
        })}
      </Container>
    </ChakraProvider>
  )
}
