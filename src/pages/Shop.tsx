import { ChangeEvent, useState } from "react"

import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import Filter from "../components/Molecules/Filter"
import SortBy from "../components/Molecules/SortBy"
import ProductGrid from "../components/Organisms/ProductGrid"
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "../services/products"
import { FilterModel } from "../services/types"

function Shop() {
  const [filter, setFilter] = useState<FilterModel>({
    first: 10,
    categories: [],
    orderBy: "publishedAt_DESC"
  })
  const handleSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter(prev => ({ ...prev, orderBy: e.target.value }))
  }
  const { data, isLoading } = useGetAllProductsQuery(filter)
  const categoriesData = useGetAllCategoriesQuery()
  return (
    <article className="tw-mx-auto tw-my-10 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-justify-center">
      <div className="tw-mb-4 tw-flex tw-w-full tw-items-center tw-justify-between">
        <Title size={TitleSizeEnum.H4} text="Shop" className=" !tw-font-bold !tw-text-gray-700" />
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
