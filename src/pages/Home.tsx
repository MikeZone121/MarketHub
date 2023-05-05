import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import Card from "../components/Card"
import Hero from "../components/Hero"
import { useGetAllProductsQuery } from "../services/products"

function Home() {
  const { data, isLoading } = useGetAllProductsQuery()
  return (
    <div className="tw-mt-10">
      <article className="tw-flex tw-flex-wrap tw-items-center tw-justify-center">
        <Hero items={data?.products} isLoading={isLoading} />
      </article>
      <article className="tw-m-auto tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col  tw-justify-center">
        <Title size={TitleSizeEnum.H2} text="Popular items" />
        <div className="tw-m-auto tw-mx-auto tw-my-6 tw-grid tw-grid-cols-1 tw-place-items-center tw-items-stretch tw-justify-items-center tw-gap-6 md:tw-auto-cols-min lg:tw-grid-cols-3 xl:tw-grid-cols-4">
          {data?.products.map(product => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </article>
    </div>
  )
}

export default Home
