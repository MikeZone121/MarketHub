import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"

function Home() {
  return (
    <div className="tw-flex tw-h-screen tw-animate-pulse tw-flex-col tw-items-center tw-justify-center">
      <img src="images/branding/logo.svg" className="tw-w-32" />
      <Title size={TitleSizeEnum.H4} className="tw-font-semibold tw-text-gray-800 sm:tw-text-5xl" text="MarketHub" />
    </div>
  )
}

export default Home
