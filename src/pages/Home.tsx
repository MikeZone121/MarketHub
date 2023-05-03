import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import { useGetAllProductsQuery } from "../services/products"

function Home() {
  const { data, isLoading, error } = useGetAllProductsQuery("bla")
  return (
    <div className="tw-flex tw-h-screen tw-animate-pulse tw-flex-col tw-items-center tw-justify-center">
      <img src="images/branding/logo.svg" className="tw-w-32" />
      <Title size={TitleSizeEnum.H4} className="tw-font-semibold tw-text-gray-800 sm:tw-text-5xl" text="MarketHub" />

      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error:</p>}
        {data && <p>Name:</p>}
      </div>
    </div>
  )
}

export default Home
