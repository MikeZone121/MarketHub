import { ProductModel } from "../../../services/types"
import Card from "../../Molecules/Card"

function ProductGrid({
  products,
  isLoading,
  hasDescription
}: {
  products?: ProductModel[]
  isLoading: boolean
  hasDescription?: boolean
}) {
  return (
    <div className="tw-m-auto tw-mx-auto tw-my-4 tw-grid tw-w-full tw-grid-cols-2 tw-place-items-center tw-items-stretch tw-justify-items-center tw-gap-4 md:tw-auto-cols-min md:tw-gap-6 lg:tw-grid-cols-3 2xl:tw-grid-cols-4">
      {isLoading
        ? [...Array(4)]?.map((value, index) => (
            <div
              className="tw-card tw-group tw-flex tw-h-96 tw-w-full  tw-animate-pulse tw-rounded-lg tw-border tw-border-gray-100 tw-bg-gray-200 tw-p-10 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-gray-200"
              key={index}
            ></div>
          ))
        : products?.map(product => <Card hasDescription={hasDescription} product={product} key={product.id} />)}
    </div>
  )
}

export default ProductGrid
