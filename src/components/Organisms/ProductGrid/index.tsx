import clsx from "clsx"

import { ProductModel } from "../../../services/types"
import Card from "../../Molecules/Card"

function ProductGrid({
  products,
  isLoading,
  hasDescription,
  columns = 4
}: {
  products?: ProductModel[]
  isLoading: boolean
  columns?: number
  hasDescription?: boolean
}) {
  const columnClassnames = clsx(
    columns === 5 && "2xl:tw-grid-cols-5",
    columns === 4 && "2xl:tw-grid-cols-4",
    columns === 3 && "2xl:tw-grid-cols-3",
    columns === 2 && "2xl:tw-grid-cols-2",
    columns === 1 && "2xl:tw-grid-cols-1"
  )
  return (
    <div
      className={clsx(
        `tw-m-auto tw-mx-auto tw-grid tw-w-full tw-grid-cols-1 tw-place-items-center tw-items-stretch tw-justify-items-center tw-gap-4 sm:tw-grid-cols-2 md:tw-gap-6 xl:tw-grid-cols-3`,
        columnClassnames
      )}
    >
      {isLoading
        ? [...Array(columns)]?.map((value, index) => (
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
