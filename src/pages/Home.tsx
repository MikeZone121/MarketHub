import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import Hero from "../components/Organisms/Hero"
import ProductGrid from "../components/Organisms/ProductGrid"
import { useGetAllProductsQuery } from "../services/products"

function Home() {
  const { data, isLoading } = useGetAllProductsQuery({ first: 4 })
  return (
    <div className="tw-my-10">
      <article className="tw-flex tw-flex-wrap tw-items-center tw-justify-center">
        <Hero products={data?.products} isLoading={isLoading} />
      </article>
      <article className="tw-m-auto tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-justify-center">
        <Title size={TitleSizeEnum.H4} text="Popular items" className="tw-mb-6 !tw-font-bold !tw-text-gray-700" />
        <ProductGrid products={data?.products} isLoading={isLoading} />
      </article>
    </div>
  )
}

export default Home
