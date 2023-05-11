import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ProductModel } from "../../../services/types"
import Hyperlink from "../../Atoms/HyperLink"

const Breadcrumbs = ({ product }: { product?: ProductModel }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="tw-flex tw-items-center tw-gap-1 tw-text-sm tw-text-gray-600">
        <li>
          <Hyperlink
            href="/"
            className="tw-block tw-text-gray-500 tw-transition hover:tw-underline"
            text="Home"
            icon={faHome}
          />
        </li>

        <li className="rtl:rotate-180 tw-mx-1">
          <FontAwesomeIcon icon={faChevronRight} className="tw-text-xs" />
        </li>
        <li>
          <Hyperlink href="/shop" text="Shop" className="tw-block tw-text-gray-500 tw-transition  hover:tw-underline" />
        </li>
        <li className="rtl:rotate-180 tw-mx-1">
          <FontAwesomeIcon icon={faChevronRight} className="tw-text-xs" />
        </li>
        <li>
          <Hyperlink
            href={`/shop/${product?.slug}`}
            text={product?.name}
            className="tw-block tw-text-gray-500 tw-transition hover:tw-underline"
          />
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
