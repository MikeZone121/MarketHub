import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { faBasketShopping, faClose, faCreditCardAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import { addToCart, decreaseCart, toggleCartPopUp } from "../../../services/cart/CartSlice"
import { useGetProductsByIdQuery } from "../../../services/products"
import { ProductModel } from "../../../services/types"
import { RootState } from "../../../store"
import Button from "../../Atoms/Button"
import { BtnVariantEnum } from "../../Atoms/Button/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

function CartPopUp() {
  const cart = useSelector((state: RootState) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartItems = useGetProductsByIdQuery(cart.cartItems)

  const handleCartPopUpOpen = () => {
    dispatch(toggleCartPopUp(false))
  }

  const handleDecreaseCart = (cartItem: ProductModel) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart = (cartItem: ProductModel) => {
    dispatch(addToCart(cartItem))
  }

  /*   useEffect(() => {
    dispatch(getTotals())
  }, [cart]) */

  return (
    <>
      <div
        onClick={handleCartPopUpOpen}
        className={clsx(
          cart.cartPopUpIsOpen ? "tw-bg-gray-800/50" : "tw-hidden tw-bg-gray-800/0",
          "tw-fixed tw-right-0 tw-top-0 !tw-z-40 tw-h-screen tw-w-screen tw-transition-all tw-duration-200 "
        )}
      ></div>
      <div
        className={clsx(
          cart.cartPopUpIsOpen ? "tw-right-0 " : "tw-right-[-100%]",
          "!tw-fixed tw-top-0 tw-z-40 tw-h-screen tw-w-screen tw-max-w-sm tw-border tw-border-gray-200 tw-bg-white tw-px-4 tw-py-8 tw-transition-all tw-duration-200 sm:tw-px-6 lg:tw-px-8"
        )}
      >
        <div className="tw-mt-4 tw-space-y-6">
          <Button
            onClick={handleCartPopUpOpen}
            variant={BtnVariantEnum.TEXTICON}
            icon={faClose}
            className="tw-absolute tw-right-10 tw-top-4 tw-text-lg"
          />
          <Title text={`Your cart (${cart.cartTotalQuantity})`} size={TitleSizeEnum.H5} className="!tw-text-gray-600" />
          <ul className="tw-space-y-6">
            {cartItems.data?.products?.map(cartItem => {
              const cartQuantity = cart.cartItems.find(item => item.id === cartItem.id)!.cartQuantity
              return (
                <li
                  key={`cart-pop-up-${cartItem.name}`}
                  className="tw-group tw-flex tw-items-center tw-justify-between tw-gap-6"
                >
                  <img
                    src={cartItem.images[0].url}
                    alt={cartItem.name}
                    height="50"
                    width="50"
                    className="tw-rounded tw-object-cover tw-transition-all tw-duration-200 group-hover:tw-scale-105"
                  />

                  <div className="tw-flex tw-w-full tw-items-center tw-justify-between tw-gap-2">
                    <NavLink to={`/shop/${cartItem.slug}`} className="tw-pointer hover:tw-underline">
                      <Title text={cartItem.name} size={TitleSizeEnum.H6} className="!tw-text-gray-600" />
                    </NavLink>
                    <div className="tw-flex tw-w-full tw-max-w-[100px] tw-items-center tw-justify-center tw-rounded tw-border tw-border-gray-200 tw-bg-white">
                      <Button
                        onClick={() => handleDecreaseCart(cartItem)}
                        text={cartQuantity <= 1 ? "" : "-"}
                        icon={cartQuantity <= 1 ? faTrashAlt : undefined}
                        variant={BtnVariantEnum.FULL}
                        className={clsx(
                          "tw-w-full !tw-border-none !tw-bg-transparent !tw-p-2 tw-text-xl !tw-text-black hover:!tw-shadow-none",
                          cartQuantity <= 1 && "!tw-text-md !tw-text-primary"
                        )}
                      />
                      <div>{cartQuantity}</div>
                      <Button
                        onClick={() => handleIncreaseCart(cartItem)}
                        text="+"
                        variant={BtnVariantEnum.FULL}
                        className="tw-w-full !tw-border-none !tw-bg-transparent !tw-p-2 !tw-text-xl !tw-text-black hover:!tw-shadow-none"
                      />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="tw-flex tw-flex-col tw-items-start tw-space-y-4 tw-text-center">
            <Button
              onClick={() => {
                navigate(`/cart`)
                handleCartPopUpOpen()
              }}
              variant={BtnVariantEnum.OUTLINED}
              icon={faBasketShopping}
              isFullWidth
            >
              View my cart
            </Button>
            <Button
              onClick={() => {
                navigate(`/cart`)
                handleCartPopUpOpen()
              }}
              variant={BtnVariantEnum.FULL}
              icon={faCreditCardAlt}
              isFullWidth
            >
              Checkout
            </Button>
            <NavLink
              to="/"
              className="!tw-mt-1 tw-text-sm tw-text-gray-500 tw-underline tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-text-black"
            >
              Continue Shopping
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPopUp
