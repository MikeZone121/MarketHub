import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import { AmericanExpress, Bancontact, Mastercard, Visa } from "../assets/svg"
import Button from "../components/Atoms/Button"
import { BtnVariantEnum } from "../components/Atoms/Button/types"
import Text from "../components/Atoms/Text"
import { TextVariantEnum } from "../components/Atoms/Text/types"
import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import ProductGrid from "../components/Organisms/ProductGrid"
import { addToCart, decreaseCart, getTotals } from "../services/cart/CartSlice"
import { useGetAllProductsQuery } from "../services/products"
import { CartItem, ProductModel } from "../services/types"
import { RootState } from "../store"

function Cart() {
  const cart = useSelector((state: RootState) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isLoading } = useGetAllProductsQuery(4)

  useEffect(() => {
    dispatch(getTotals())
  }, [cart])

  const handleDecreaseCart = (cartItem: ProductModel) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem: ProductModel) => {
    dispatch(addToCart(cartItem))
  }

  return (
    <section
      className={clsx(
        "tw-m-auto tw-my-10 tw-flex tw-min-h-[60vh] tw-w-11/12  tw-max-w-screen-2xl tw-flex-col tw-justify-start",
        cart.cartTotalQuantity === 0 && "tw-justify-center"
      )}
    >
      <div className=" tw-mb-4 tw-flex tw-items-center tw-justify-center tw-space-x-4">
        <FontAwesomeIcon icon={faCartShopping} className="tw-text-left tw-text-2xl tw-text-primary" />
        <Title size={TitleSizeEnum.H2} text="Shopping Cart" />
      </div>
      {cart.cartTotalQuantity === 0 ? (
        <div className="tw-flex tw-flex-col tw-items-center">
          <Text text="Your cart is empty." variant={TextVariantEnum.NORMAL} className="tw-font-semibold" />
          <Text
            text="Go to the store and buy some products!"
            variant={TextVariantEnum.NORMAL}
            className="tw-font-semibold"
          />
          <Button
            onClick={() => navigate(`/`)}
            text="START SHOPPING"
            variant={BtnVariantEnum.FULL}
            className="tw-mt-6"
          />
        </div>
      ) : (
        <div className="tw-mt-12 tw-flex tw-w-full tw-flex-col md:tw-flex-row">
          <div className="tw-mr-8 tw-w-full md:tw-w-3/4">
            <div className="tw-hidden tw-grid-cols-[3fr_1fr_1fr_1fr] tw-gap-4 tw-rounded-lg tw-bg-gray-100 tw-p-4 md:tw-grid">
              <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Product" />
              <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Price" />
              <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Quantity" />
              <Title size={TitleSizeEnum.H6} className="tw-text-right !tw-text-black" text="Total" />
            </div>
            <div>
              {cart.cartItems?.map((cartItem: CartItem) => (
                <div
                  className="tw-my-4 tw-grid tw-grid-cols-2 tw-items-center tw-gap-4 tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-4 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out md:tw-grid-cols-[3fr_1fr_1fr_1fr]"
                  key={cartItem.id}
                >
                  <div className="tw-col-span-2 tw-flex tw-items-center md:tw-col-span-1">
                    <img
                      className="tw-mr-8 tw-object-cover"
                      width="150"
                      src={cartItem.images[0].url}
                      alt={cartItem.name}
                    />
                    <div>
                      <NavLink to={`/shop/${cartItem.slug ?? ""}`} className="tw-pointer hover:tw-underline">
                        <Title size={TitleSizeEnum.H5} className="!tw-text-black" text={cartItem.name} />
                        <Text variant={TextVariantEnum.NORMAL} text={cartItem.description} />
                      </NavLink>
                    </div>
                  </div>
                  <div className="tw-hidden md:tw-block">
                    {cartItem.salePrice ? (
                      <>
                        <Title size={TitleSizeEnum.H5} className="!tw-font-normal" text={`€ ${cartItem.salePrice}`} />
                        <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                          € {cartItem.price}
                        </span>
                      </>
                    ) : (
                      <Title
                        size={TitleSizeEnum.H5}
                        className="!tw-font-normal !tw-text-black"
                        text={`€ ${cartItem.price}`}
                      />
                    )}
                  </div>
                  <div className="tw-flex tw-w-full tw-max-w-full tw-items-center tw-justify-center tw-rounded tw-border tw-border-gray-200 tw-bg-white">
                    <Button
                      onClick={() => handleDecreaseCart(cartItem)}
                      text={cartItem.cartQuantity <= 1 ? "" : "-"}
                      icon={cartItem.cartQuantity <= 1 ? faTrash : undefined}
                      variant={BtnVariantEnum.FULL}
                      className={clsx(
                        "tw-w-full !tw-border-none !tw-bg-transparent tw-p-4 tw-text-xl !tw-text-black hover:!tw-shadow-none",
                        cartItem.cartQuantity <= 1 && " !tw-text-lg !tw-text-primary"
                      )}
                    />
                    <div>{cartItem.cartQuantity}</div>
                    <Button
                      onClick={() => handleIncreaseCart(cartItem)}
                      text="+"
                      variant={BtnVariantEnum.FULL}
                      className="tw-w-full !tw-border-none !tw-bg-transparent !tw-p-4 !tw-text-xl !tw-text-black hover:!tw-shadow-none"
                    />
                  </div>
                  <div className="tw-flex tw-items-center tw-justify-end">
                    <Title
                      size={TitleSizeEnum.H5}
                      className="!tw-font-normal !tw-text-black"
                      text={`€ ${
                        cartItem.salePrice
                          ? cartItem.salePrice * cartItem.cartQuantity
                          : cartItem.price * cartItem.cartQuantity
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tw-w-full md:tw-w-1/4">
            <div className="block tw-top-12 tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-8 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out md:tw-sticky">
              <Title size={TitleSizeEnum.H4} className="tw-pb-8 !tw-text-black" text="Order information" />
              <div>
                <Title
                  size={TitleSizeEnum.H5}
                  className="!tw-text-black"
                  text={`Subtotal: € ${cart.cartTotalAmount}`}
                />
                <Text variant={TextVariantEnum.NORMAL} text="Taxes and shipping calculated at checkout" />
                <Button
                  onClick={() => navigate(`/`)}
                  text="CONTINUE"
                  variant={BtnVariantEnum.FULL}
                  className="tw-mb-1 tw-mt-6"
                />
                <NavLink to="/" className="tw-text-sm tw-underline">
                  Continue Shopping
                </NavLink>
              </div>
              <div className="tw-flex tw-flex-row tw-items-center">
                <Bancontact />
                <Mastercard />
                <Visa />
                <AmericanExpress />
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="tw-my-20">
        <Title size={TitleSizeEnum.H4} text="Popular items" className="!tw-font-bold !tw-text-gray-700" />
        <ProductGrid products={data?.products} isLoading={isLoading} />
      </section>
    </section>
  )
}

export default Cart
