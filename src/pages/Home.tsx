import Title from "../components/Atoms/Title"
import { TitleSizeEnum } from "../components/Atoms/Title/types"
import Hero from "../components/Hero"

function Home() {
  return (
    <div className="tw-mt-10">
      <article className="tw-flex tw-flex-wrap tw-items-center tw-justify-center">
        <Hero />
      </article>
      <div className="tw-mb-24 tw-flex tw-h-full tw-animate-pulse tw-flex-col tw-items-center">
        <img src="images/branding/logo.svg" className="tw-w-32" />
        <Title size={TitleSizeEnum.H4} className="tw-font-semibold tw-text-gray-800 sm:tw-text-5xl" text="MarketHub" />
      </div>
    </div>
  )
}

export default Home
