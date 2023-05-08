import { ProductModel } from "../../services/types"
import Card from "../Card"

function ProductGrid({ products, isLoading }: { products?: ProductModel[]; isLoading: boolean }) {
  return (
    <div className="tw-m-auto tw-mx-auto tw-my-4 tw-grid tw-w-full tw-grid-cols-1 tw-place-items-center tw-items-stretch tw-justify-items-center tw-gap-6 md:tw-auto-cols-min lg:tw-grid-cols-3 xl:tw-grid-cols-4">
      {isLoading
        ? [...Array(4)]?.map((value, index) => (
            <div
              className="tw-card tw-group tw-flex tw-h-96 tw-w-full  tw-animate-pulse tw-rounded-lg tw-border tw-border-gray-100 tw-bg-gray-200 tw-p-10 tw-shadow-md tw-shadow-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out hover:tw-bg-gray-200"
              key={index}
            ></div>
          ))
        : products?.map(product => <Card product={product} key={product.id} />)}
    </div>
  )
}

export default ProductGrid
