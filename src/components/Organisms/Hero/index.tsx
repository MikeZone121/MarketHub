import { ProductModel } from "../../../services/types"
import Card from "../../Molecules/Card"

import HeroNav from "./HeroNav"
import HeroTopNav from "./HeroTopNav"

function Hero({ products, isLoading }: { products?: ProductModel[]; isLoading: boolean }) {
  const [firstProduct, secondProduct, thirdProduct] = products ?? []
  return (
    <section className="tw-mb-12 tw-flex tw-w-11/12 tw-max-w-screen-2xl tw-flex-col tw-gap-4 lg:tw-flex-row lg:tw-gap-8">
      <HeroNav />

      <section className="tw-flex tw-w-full tw-flex-col ">
        <HeroTopNav />
        <section className="tw-flex tw-w-full tw-flex-col tw-gap-6 md:tw-flex-row">
          <Card
            product={firstProduct}
            direction="col"
            hasDescription
            imageSize="sm"
            hasHeart={false}
            isLoading={isLoading}
          />

          <div className="tw-relative tw-hidden tw-w-1/3 tw-flex-col tw-gap-6 lg:tw-flex">
            <Card
              product={secondProduct}
              isLoading={isLoading}
              direction="col"
              imageSize="sm"
              hasButtonText={false}
              hasHeart={false}
            />
            <Card
              product={thirdProduct}
              isLoading={isLoading}
              direction="col"
              imageSize="sm"
              hasButtonText={false}
              hasHeart={false}
            />
          </div>
        </section>
      </section>
    </section>
  )
}

export default Hero
