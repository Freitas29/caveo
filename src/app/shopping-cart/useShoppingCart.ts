import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { toast } from 'react-toastify';

export type ProductState = {
  id: number
  title: string
  image: string
}

type ShoppingCartState = {
  products: ProductState[]
  addProduct: (product: ProductState) => void
  removeProduct: (id: number) => void
}

export const useShoppingCart = create<ShoppingCartState>()(
    persist(
        (set) => ({
          products: [],
          addProduct: (newProduct) => set((state) => {
            const hasAlreadyAdded = state.products.some(product => product.id === newProduct.id)
            if(hasAlreadyAdded)  {
                toast.info("Product already added")

                return state
            }
            return {
             ...state,
              products: [...state.products, newProduct],
            }
          }),
          removeProduct: (productId) => set((state) => {
            debugger
            return {
              ...state,
               products: state.products.filter(product => product.id !== productId),
             }
          }),
        }),
        {
          name: 'shopping-cart-storage',
        },
    ),
)