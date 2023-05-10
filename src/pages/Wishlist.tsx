import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { faArrowLeft, faBasketShopping, faHeart } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import Button from "../components/Atoms/Button"
import { BtnVariantEnum } from "../components/Atoms/Button/types"
import Text from "../components/Atoms/Text"
import { TextVariantEnum } from "../components/Atoms/Text/types"
import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import ProductGrid from "../components/Organisms/ProductGrid"
import { useGetAllProductsQuery } from "../services/products"
import { getTotals } from "../services/wishlist/WishlistSlice"
import { RootState } from "../store"

function Wishlist() {
  const wishlist = useSelector((state: RootState) => state.wishlistReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data, isLoading } = useGetAllProductsQuery(4)

  useEffect(() => {
    dispatch(getTotals())
  }, [wishlist])

  return (
    <section
      className={clsx(
        "tw-m-auto tw-my-10 tw-flex tw-min-h-[60vh] tw-w-11/12  tw-max-w-screen-2xl tw-flex-col tw-items-start tw-justify-start",
        wishlist.wishlistTotalQuantity === 0 && "tw-items-center tw-justify-center"
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
          <Title size={TitleSizeEnum.H3} text="My Wishlist" />
        </div>
      </div>

      {wishlist.wishlistTotalQuantity === 0 ? (
        <div className="tw-flex tw-flex-col tw-items-center">
          <Text
            text="There's nothing on your wish list."
            variant={TextVariantEnum.NORMAL}
            className="tw-mt-4 tw-font-semibold"
          />
          <div className="tw-flex tw-flex-row tw-items-center tw-space-x-2">
            <Text text="Add products by clicking " variant={TextVariantEnum.NORMAL} className="tw-font-semibold" />
            <Button
              onClick={() => null}
              variant={BtnVariantEnum.TEXTICON}
              icon={faHeart}
              className="tw-rounded-full tw-bg-white tw-p-1 tw-shadow-md"
              iconClassName="tw-text-md tw-text-gray-300 hover:!tw-text-primary"
            />
          </div>
          <Button
            onClick={() => navigate(`/`)}
            text="Start shopping"
            variant={BtnVariantEnum.FULL}
            className="tw-mt-6"
          />
        </div>
      ) : (
        <section className="tw-m-auto tw-mt-4 tw-flex tw-w-full tw-flex-col tw-justify-center">
          <ProductGrid products={wishlist.wishlistItems} hasDescription isLoading={isLoading} />
          <article className="tw-flex tw-justify-end">
            <Button
              onClick={() => navigate(`/cart`)}
              text="View shopping cart"
              variant={BtnVariantEnum.FULL}
              className="tw-mt-6"
              icon={faBasketShopping}
              iconClassName="!tw-mr-0 md:!tw-mr-2"
            />
          </article>
        </section>
      )}
      <section className="tw-m-auto tw-mt-12 tw-flex tw-w-full tw-flex-col tw-justify-center">
        <Title size={TitleSizeEnum.H4} text="Popular items" className="!tw-font-bold !tw-text-gray-700" />
        <ProductGrid products={data?.products} isLoading={isLoading} />
      </section>
    </section>
  )
}

export default Wishlist
