import Filter from "../components/Molecules/Filter"
import ProductGrid from "../components/Organisms/ProductGrid"
import { useGetAllCategoriesQuery, useGetAllProductsQuery } from "../services/products"

function Shop() {
  const { data, isLoading } = useGetAllProductsQuery(10)
  const categoriesData = useGetAllCategoriesQuery()

  return (
    <article className="tw-mx-auto tw-my-10 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-justify-center">
      <div className="tw-flex tw-gap-6">
        <div className="tw-w-80">
          <Filter categories={categoriesData?.data?.categories} />
        </div>
        <ProductGrid products={data?.products} isLoading={isLoading} columns={3} />
      </div>
    </article>
  )
}

export default Shop
