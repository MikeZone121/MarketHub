import { ChangeEvent, useState } from "react"

import Filter from "../components/Molecules/Filter"
import SortBy from "../components/Molecules/SortBy"
import ProductGrid from "../components/Organisms/ProductGrid"
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "../services/products"
import { FilterModel } from "../services/types"

function Shop() {
  const [filter, setFilter] = useState<FilterModel>({
    first: 10,
    categories: [],
    minPrice: 0,
    maxPrice: 10000,
    orderBy: "publishedAt_ASC"
  })
  const handleSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, orderBy: e.target.value })
  }
  const { data, isLoading } = useGetAllProductsQuery(filter)
  const categoriesData = useGetAllCategoriesQuery()
  return (
    <article className="tw-mx-auto tw-my-10 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-justify-center">
      <div className="tw-mb-4">
        <SortBy onChange={handleSortBy} />
      </div>
      <div className="tw-flex tw-flex-col tw-gap-6 lg:tw-flex-row">
        <div className="tw-w-full lg:tw-w-80">
          <Filter categories={categoriesData?.data?.categories} filter={filter} setFilter={setFilter} />
        </div>
        <ProductGrid products={data?.products} isLoading={isLoading} columns={3} />
      </div>
    </article>
  )
}

export default Shop
