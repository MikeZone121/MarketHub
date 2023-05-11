import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { faArrowLeft, faBasketShopping, faCheck, faTrash, faUserLock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import { AmericanExpress, Bancontact, Mastercard, Visa } from "../assets/svg"
import Button from "../components/Atoms/Button"
import { BtnVariantEnum } from "../components/Atoms/Button/types"
import Text from "../components/Atoms/Text"
import { TextVariantEnum } from "../components/Atoms/Text/types"
import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import Heart from "../components/Molecules/Heart"
import ProductGrid from "../components/Organisms/ProductGrid"
import { addToCart, decreaseCart, getTotals } from "../services/cart/CartSlice"
import { useGetAllProductsQuery } from "../services/products"
import { CartItem, ProductModel } from "../services/types"
import { RootState } from "../store"

function Cart() {
  const cart = useSelector((state: RootState) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, isLoading } = useGetAllProductsQuery({ first: 4 })
  const { wishlistItems } = useSelector((state: RootState) => state.wishlistReducer)

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
        "tw-m-auto tw-my-10 tw-flex tw-min-h-[60vh] tw-w-11/12  tw-max-w-screen-2xl tw-flex-col tw-items-start tw-justify-start",
        cart.cartTotalQuantity === 0 && "tw-items-center tw-justify-center"
      )}
    >
      <div className="tw-group tw-relative tw-flex tw-cursor-pointer" onClick={() => navigate("/")}>
        <Button
          onClick={() => navigate("/")}
          icon={faArrowLeft}
          className="tw-invisible tw-absolute tw-top-3 tw-text-xl tw-opacity-0 tw-transition-all tw-duration-200 tw-ease-out group-hover:tw-visible group-hover:tw-opacity-100"
          variant={BtnVariantEnum.TEXTICON}
        />
        <div className="tw-flex tw-items-center tw-justify-center tw-space-x-4 tw-transition-all tw-duration-200 tw-ease-out group-hover:tw-ml-8">
          <FontAwesomeIcon icon={faBasketShopping} className="tw-text-left tw-text-2xl tw-text-primary" />
          <Title size={TitleSizeEnum.H3} text="Shopping Cart" />
        </div>
      </div>

      {cart.cartTotalQuantity === 0 ? (
        <div className="tw-flex tw-flex-col tw-items-center">
          <Text variant={TextVariantEnum.NORMAL} className="tw-mt-4 tw-font-semibold">
            Your cart is empty.
          </Text>
          <Text variant={TextVariantEnum.NORMAL} className="tw-font-semibold">
            Go to the store and buy some products!
          </Text>
          <Button
            onClick={() => navigate(`/`)}
            text="START SHOPPING"
            variant={BtnVariantEnum.FULL}
            className="tw-mt-6"
          />
        </div>
      ) : (
        <div className="tw-mt-8 tw-flex tw-w-full tw-flex-col tw-gap-6 lg:tw-flex-row">
          <div className="lg:tw-flex-grow">
            {/* <div className="tw-hidden tw-grid-cols-[3fr_1fr_1fr_1fr] tw-gap-4 tw-rounded-lg tw-bg-gray-100 tw-p-4 md:tw-grid">
              <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Product" />
              <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Price" />
              <Title size={TitleSizeEnum.H6} className="!tw-text-black" text={`Quantity (${cart.cartTotalQuantity})`} />
              <Title size={TitleSizeEnum.H6} className="tw-text-right !tw-text-black" text="Total" />
            </div> */}
            <div className="tw-flex tw-flex-col tw-gap-6">
              {cart.cartItems?.map((cartItem: CartItem) => {
                const isInWishlist = wishlistItems.some(item => item.id === cartItem.id)
                return (
                  <div
                    className="tw-group tw-relative tw-grid tw-grid-cols-2 tw-items-center tw-gap-4 tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-4 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out md:tw-grid-cols-[3fr_1fr_1fr_1fr]"
                    key={`cart-${cartItem.id}`}
                  >
                    <div className="tw-col-span-2 tw-flex tw-flex-row tw-items-center tw-gap-4 md:tw-col-span-1 md:tw-flex-row">
                      <img
                        className="tw-object-cover tw-transition-all tw-duration-200 group-hover:tw-scale-105"
                        width="100"
                        src={cartItem.images[0].url}
                        alt={cartItem.name}
                      />
                      <div>
                        <NavLink to={`/shop/${cartItem.slug ?? ""}`} className="tw-pointer hover:tw-underline">
                          <Title
                            size={TitleSizeEnum.H6}
                            className="tw-pr-8 !tw-text-black lg:tw-pr-0"
                            text={cartItem.name}
                          />
                          <Text variant={TextVariantEnum.SMALL}>
                            {cartItem.description && cartItem.description.length > 60
                              ? cartItem.description?.substring(0, 60) + "..."
                              : cartItem.description}
                          </Text>
                        </NavLink>
                      </div>
                    </div>
                    {/*  <div className="tw-hidden md:tw-block">
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
                  </div> */}
                    <div className="tw-flex tw-w-3/4 tw-max-w-full tw-items-center  tw-justify-center tw-rounded tw-border tw-border-gray-200 tw-bg-white">
                      <Button
                        onClick={() => handleDecreaseCart(cartItem)}
                        text={cartItem.cartQuantity <= 1 ? "" : "-"}
                        icon={cartItem.cartQuantity <= 1 ? faTrash : undefined}
                        variant={BtnVariantEnum.FULL}
                        className={clsx(
                          "tw-w-full !tw-border-none !tw-bg-transparent !tw-p-2 tw-text-xl !tw-text-black hover:!tw-shadow-none",
                          cartItem.cartQuantity <= 1 && "!tw-text-lg !tw-text-primary"
                        )}
                      />
                      <div>{cartItem.cartQuantity}</div>
                      <Button
                        onClick={() => handleIncreaseCart(cartItem)}
                        text="+"
                        variant={BtnVariantEnum.FULL}
                        className="tw-w-full !tw-border-none !tw-bg-transparent !tw-p-2 !tw-text-xl !tw-text-black hover:!tw-shadow-none"
                      />
                    </div>

                    <Heart product={cartItem} />
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
                )
              })}
            </div>
          </div>
          <div className="tw-w-full lg:tw-max-w-[24%]">
            <div className="block tw-top-12 tw-w-full tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-8 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out md:tw-sticky">
              <Title size={TitleSizeEnum.H4} className="tw-pb-8 !tw-text-black" text="Delivery and service" />
              <div className="tw-pb-12">
                <div className="tw-mb-2 tw-flex">
                  <FontAwesomeIcon icon={faCheck} className="tw-mr-2 tw-text-left tw-text-lg tw-text-primary" />
                  <Text variant={TextVariantEnum.SMALL}>Ordered before 23:59, delivered tomorrow</Text>
                </div>
                <div className="tw-mb-2 tw-flex">
                  <FontAwesomeIcon icon={faCheck} className="tw-mr-2 tw-text-left tw-text-lg tw-text-primary" />
                  <Text variant={TextVariantEnum.SMALL}>Choose the day or the time that suits you.</Text>
                </div>
                <div className="tw-mb-2 tw-flex">
                  <FontAwesomeIcon icon={faCheck} className="tw-mr-2 tw-text-left tw-text-lg tw-text-primary" />
                  <Text variant={TextVariantEnum.SMALL}>Pick up at bPost pickup points or Markethub stores.</Text>
                </div>
              </div>
              <div>
                <div className="tw-mb-2 tw-flex tw-justify-between">
                  <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Delivery:" />
                  <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Free" />
                </div>
                <div className="tw-flex tw-justify-between">
                  <Title size={TitleSizeEnum.H6} className="!tw-text-black" text="Subtotal:" />
                  <Title size={TitleSizeEnum.H6} className="!tw-text-black" text={`€ ${cart.cartTotalAmount}`} />
                </div>
                <Text variant={TextVariantEnum.SMALL} className="tw-text-gray-400">
                  (Including VAT and recupel)
                </Text>
                <div className="tw-fixed tw-bottom-0 tw-left-0 tw-z-20 tw-m-auto tw-w-full tw-border-0 tw-bg-white tw-p-4 md:tw-static md:tw-mt-6 md:tw-p-0">
                  <Button
                    onClick={() => navigate(`/`)}
                    text="I'm ready to order"
                    variant={BtnVariantEnum.FULL}
                    icon={faUserLock}
                    isFullWidth
                  />
                </div>
                <NavLink
                  to="/"
                  className="tw-text-sm tw-text-gray-500 tw-underline tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-text-black"
                >
                  Continue Shopping
                </NavLink>

                <div className="tw-mt-8 tw-border-t tw-border-gray-100">
                  <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-space-x-4">
                    <Bancontact />
                    <Mastercard />
                    <Visa />
                    <AmericanExpress />
                  </div>
                  <Text variant={TextVariantEnum.SMALL} className="tw-text-center">
                    Or choose convenience with &lsquo;Pay afterwards&rsquo;
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="tw-m-auto tw-mt-12 tw-flex tw-w-full tw-flex-col tw-justify-center">
        <Title size={TitleSizeEnum.H4} text="Popular items" className="tw-mb-6 !tw-font-bold !tw-text-gray-700" />
        <ProductGrid products={data?.products} isLoading={isLoading} />
      </section>
    </section>
  )
}

export default Cart
