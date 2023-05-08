import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"

import Button from "../components/Atoms/Button"
import { BtnVariantEnum } from "../components/Atoms/Button/types"
import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import ProductGrid from "../components/Organisms/ProductGrid"
import { addToCart } from "../services/cart/CartSlice"
import { useGetAllProductsQuery, useGetProductBySlugQuery } from "../services/products"
import { ProductCategory, ProductImage } from "../services/types"

function Detail() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()
  const { data, isLoading } = useGetProductBySlugQuery(slug ?? "")
  const productsQuery = useGetAllProductsQuery(4)
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
        <div className="tw-group tw-relative tw-flex">
          <Button
            onClick={() => navigate(-1)}
            icon={faArrowLeft}
            className="tw-invisible tw-absolute tw-top-3 tw-text-xl tw-opacity-0 tw-transition-all tw-duration-200 tw-ease-out group-hover:tw-visible group-hover:tw-opacity-100"
            variant={BtnVariantEnum.TEXTICON}
          />
          <Title
            className="tw-text-2xl tw-font-bold tw-transition-all tw-duration-200 tw-ease-out group-hover:tw-ml-8 "
            text={product?.name}
            size={TitleSizeEnum.H2}
          />
        </div>
        <p className="tw-mt-1 tw-text-sm tw-text-gray-500">SKU: #{product?.id?.slice(-7)}</p>
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

        <div className="lg:tw-sticky lg:tw-top-0">
          <form className="tw-space-y-4 lg:tw-pt-8">
            <fieldset>
              <legend className="tw-text-lg tw-font-bold">Categories</legend>
              <div className="tw-mt-2 tw-flex tw-flex-wrap tw-gap-1">
                {product?.categories?.map((category: ProductCategory, idx) => (
                  <label htmlFor="material_cotton" className="tw-cursor-pointer" key={`category-${idx}`}>
                    <input type="radio" id="material_cotton" name="material" className="tw-peer tw-sr-only" checked />
                    <span className="tw-block tw-rounded-full tw-border tw-border-gray-200 tw-px-3 tw-py-1 tw-text-xs peer-checked:tw-bg-gray-100">
                      {category?.name}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <p
                className={clsx(
                  product?.salePrice && "tw-text-primary ",
                  "tw-flex tw-items-center tw-gap-2 tw-whitespace-nowrap tw-text-3xl tw-font-bold "
                )}
              >
                € {product?.salePrice ? product?.salePrice : product?.price}
                {product?.salePrice && (
                  <span className="tw-text-sm tw-font-semibold tw-text-gray-600 tw-line-through">
                    € {product?.price}
                  </span>
                )}
              </p>
            </div>
            <div className="tw-rounded tw-border tw-bg-gray-100 tw-p-4">
              <p className="tw-text-sm">
                <span className="tw-block"> Pay as low as $3/mo with 0% APR. </span>

                <a href="" className="tw-mt-1 tw-inline-block tw-underline">
                  Find out more
                </a>
              </p>
            </div>
            <Button onClick={handleAddToCart} text="Add to cart" variant={BtnVariantEnum.FULL} isFullWidth />
            {/* <Button onClick={() => {}} variant={BtnVariantEnum.OUTLINED} text="Notify when on sale" isFullWidth /> */}
          </form>
        </div>

        <div className="lg:tw-col-span-3">
          <div className="tw-prose tw-max-w-none">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
      <section className="tw-my-10">
        <Title size={TitleSizeEnum.H4} text="Popular items" className="!tw-font-bold !tw-text-gray-700" />
        <ProductGrid products={productsQuery.data?.products} isLoading={isLoading} />
      </section>
    </article>
  )
}

export default Detail
