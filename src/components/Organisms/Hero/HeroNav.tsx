import { useGetAllCategoriesQuery } from "../../../services/products"
import Hyperlink from "../../Atoms/HyperLink"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

export default function HeroNav() {
  const categoriesData = useGetAllCategoriesQuery()
  return (
    <article className="tw-overflow-hidden tw-rounded-lg tw-bg-gray-100 tw-transition-all tw-duration-200 tw-ease-in-out lg:tw-w-96">
      <div className="tw-flex tw-items-center  tw-space-x-5  tw-bg-primary tw-px-4 tw-py-3">
        <Title text="Browse categories" size={TitleSizeEnum.H6} className="!tw-mb-0 tw-p-0 tw-text-white" />
      </div>
      <ul className="tw-flex tw-flex-col">
        {categoriesData.data?.categories?.map(category => (
          <li
            key={`hero-nav-item-${category.id}`}
            className="tw-border-b tw-px-4 tw-py-2 tw-transition-all tw-duration-200 tw-ease-in hover:tw-bg-gray-200"
          >
            <Hyperlink href={`${category.slug}`} text={category.name} />
          </li>
        ))}
      </ul>
    </article>
  )
}
