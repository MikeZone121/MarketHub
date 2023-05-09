import ProductGrid from "../components/Organisms/ProductGrid"
import { useGetAllProductsQuery } from "../services/products"

function Shop() {
  const { data, isLoading } = useGetAllProductsQuery(10)
  return (
    <article className="tw-mx-auto tw-my-10 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-justify-center">
      <ProductGrid products={data?.products} isLoading={isLoading} />
    </article>
  )
}

export default Shop
