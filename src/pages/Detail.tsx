import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { faArrowLeft, faBasketShopping } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import Button from "../components/Atoms/Button"
import { BtnVariantEnum } from "../components/Atoms/Button/types"
import Text from "../components/Atoms/Text"
import { TextVariantEnum } from "../components/Atoms/Text/types"
import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import ProductGrid from "../components/Organisms/ProductGrid"
import Review from "../components/Organisms/Review"
import { addToCart } from "../services/cart/CartSlice"
import { useGetAllProductsQuery, useGetProductBySlugQuery } from "../services/products"
import { ProductCategory, ProductImage } from "../services/types"

function Detail() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()
  const { data, isLoading } = useGetProductBySlugQuery(slug ?? "")
  const productsQuery = useGetAllProductsQuery({ first: 4 })
  const product = data?.products?.[0]
  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product))
      navigate("/cart")
    }
  }
  return (
    <article className="tw-mx-auto tw-my-10 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-justify-center">
      <div>
        <div className="tw-group tw-relative tw-flex" onClick={() => navigate(-1)}>
          <Button
            onClick={() => navigate(-1)}
            icon={faArrowLeft}
            className="tw-invisible tw-absolute tw-top-3 tw-text-xl tw-opacity-0 tw-transition-all tw-duration-200 tw-ease-out group-hover:tw-visible group-hover:tw-opacity-100"
            variant={BtnVariantEnum.TEXTICON}
          />
          <Title
            className="tw-cursor-pointer tw-text-2xl tw-font-bold tw-transition-all tw-duration-200 tw-ease-out group-hover:tw-ml-8"
            text={product?.name}
            size={TitleSizeEnum.H3}
          />
        </div>
        <Text>SKU: #{product?.id?.slice(-7)}</Text>
      </div>
      <div className="tw-grid tw-gap-8 lg:tw-grid-cols-4 lg:tw-items-start">
        <div className="lg:tw-col-span-3">
          <div className="tw-relative tw-mt-4">
            <img
              alt="Tee"
              src={product?.images[0]?.url}
              className="tw-h-72 tw-w-full tw-rounded-xl tw-object-contain tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-scale-110 lg:tw-h-[540px]"
            />

            <div className="tw-absolute tw-bottom-2 tw-left-1/2 tw-inline-flex tw--translate-x-1/2 tw-items-center tw-rounded-full tw-bg-black/75 tw-px-3 tw-py-1.5 tw-text-white">
              <span className=" tw-whitespace-nowrap tw-text-xs">Hover to zoom</span>
            </div>
          </div>

          <ul className="tw-mt-1 tw-flex tw-gap-1">
            {product?.images.map((image: ProductImage, idx) => (
              <li key={`image-${idx}`}>
                <img alt={product?.name} src={image.url} className="tw-h-16 tw-w-16 tw-rounded-md tw-object-cover" />
              </li>
            ))}
          </ul>
        </div>

        <div className="tw-rounded-lg tw-border tw-border-gray-100 tw-bg-white tw-p-8 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out lg:tw-sticky lg:tw-top-12">
          <form className="tw-space-y-4">
            <fieldset>
              <legend className="tw-text-lg tw-font-bold">Categories</legend>
              <div className="tw-mt-2 tw-flex tw-flex-wrap tw-gap-1">
                {product?.categories?.map((category: ProductCategory, idx) => (
                  <span
                    className="tw-block tw-rounded-full tw-border tw-border-gray-200 tw-px-3 tw-py-1 tw-text-xs"
                    key={`category-${idx}`}
                  >
                    {category?.name}
                  </span>
                ))}
              </div>
            </fieldset>

            <div>
              <Text
                variant={TextVariantEnum.NORMAL}
                className={clsx(
                  product?.salePrice && "tw-text-primary",
                  "tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-bold "
                )}
              >
                <span className="tw-text-xl">€ {product?.salePrice ? product?.salePrice : product?.price}</span>
                {product?.salePrice && (
                  <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                    € {product?.price}
                  </span>
                )}
              </Text>
            </div>
            <div className="tw-rounded tw-border tw-bg-gray-100 tw-p-4">
              <Text>
                <span className="tw-block"> Pay as low as $3/mo with 0% APR. </span>

                <a href="" className="tw-mt-1 tw-inline-block tw-underline">
                  Find out more
                </a>
              </Text>
            </div>
            <Button
              onClick={handleAddToCart}
              text="Add to cart"
              variant={BtnVariantEnum.FULL}
              isFullWidth
              icon={faBasketShopping}
            />
            {/* <Button onClick={() => {}} variant={BtnVariantEnum.OUTLINED} text="Notify when on sale" isFullWidth /> */}
          </form>
        </div>

        <div className="lg:tw-col-span-3">
          <div className="tw-prose tw-max-w-none">
            <Title size={TitleSizeEnum.H5} className="tw-mb-4 !tw-text-gray-600">
              Description
            </Title>
            <p>{product?.description}</p>
            <Review reviews={product?.reviews ?? []} />
          </div>
        </div>
      </div>
      <section className="tw-my-10">
        <Title size={TitleSizeEnum.H4} text="Popular items" className="tw-mb-6 !tw-font-bold !tw-text-gray-700" />
        <ProductGrid products={productsQuery.data?.products} isLoading={isLoading} />
      </section>
    </article>
  )
}

export default Detail
