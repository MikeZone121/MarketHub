import { Dispatch, SetStateAction } from "react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { FilterModel, ProductCategory } from "../../../services/types"
import Text from "../../Atoms/Text"
import { TextVariantEnum } from "../../Atoms/Text/types"

function Filter({
  categories,
  filter,
  setFilter
}: {
  categories?: ProductCategory[]
  filter: FilterModel
  setFilter: Dispatch<SetStateAction<FilterModel>>
}) {
  return (
    <div className="tw-space-y-2">
      <details
        className="tw-group tw-overflow-hidden tw-rounded tw-border tw-border-gray-300 [&_summary::-webkit-details-marker]:tw-hidden"
        open
      >
        <summary className="tw-flex tw-cursor-pointer tw-items-center tw-justify-between tw-gap-2 tw-bg-white tw-p-4 tw-text-gray-900 tw-transition">
          <Text variant={TextVariantEnum.NORMAL}>Categories</Text>
          <span className="tw-transition group-open:tw--rotate-180">
            <FontAwesomeIcon icon={faChevronDown} className="tw-text-sm tw-text-gray-600" />
          </span>
        </summary>

        <div className="tw-border-t tw-border-gray-200 tw-bg-white">
          <header className="tw-flex tw-items-center tw-justify-between tw-p-4">
            <span className="tw-text-sm tw-text-gray-700"> {filter?.categories?.length ?? 0} Selected </span>

            <button
              type="button"
              className="tw-text-sm tw-text-gray-900 tw-underline tw-underline-offset-4"
              onClick={() => setFilter(prev => ({ ...prev, categories: [] }))}
            >
              Reset
            </button>
          </header>

          <ul className="tw-space-y-1 tw-border-t tw-border-gray-200 tw-p-4">
            {categories?.map(category => (
              <li key={`category-${category.id}`}>
                <label htmlFor={category.id} className="tw-inline-flex tw-items-center tw-gap-2">
                  <input
                    checked={filter?.categories?.includes(category.id)}
                    type="checkbox"
                    id={category.id}
                    className="tw-h-5 tw-w-5 tw-rounded tw-border-gray-300"
                    onChange={e => {
                      setFilter(prev => {
                        const updatedFilter = { ...prev }
                        if (e.target.checked) {
                          updatedFilter.categories = prev.categories ? [...prev.categories, category.id] : [category.id]
                        } else {
                          updatedFilter.categories = prev.categories
                            ? prev.categories.filter(id => id !== category.id)
                            : []
                        }
                        return updatedFilter
                      })
                    }}
                  />
                  <span className="tw-text-sm tw-font-medium tw-text-gray-700">{category.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </details>
      <details
        className="tw-group tw-overflow-hidden tw-rounded tw-border tw-border-gray-300 [&_summary::-webkit-details-marker]:tw-hidden"
        open
      >
        <summary className="tw-flex tw-cursor-pointer tw-items-center tw-justify-between tw-gap-2 tw-bg-white tw-p-4 tw-text-gray-900 tw-transition">
          <span className="tw-text-base tw-font-medium">Price</span>
          <span className="tw-transition group-open:tw--rotate-180">
            <FontAwesomeIcon icon={faChevronDown} className="tw-text-sm tw-text-gray-600" />
          </span>
        </summary>
        <div className="tw-border-t tw-border-gray-200 tw-bg-white">
          <header className="tw-flex tw-items-center tw-justify-between tw-p-4">
            <span className="tw-text-sm tw-text-gray-700">
              Price between € {filter.minPrice ? filter.minPrice : 0} and € {filter.maxPrice ? filter.maxPrice : 0}
            </span>

            <button
              type="button"
              className="tw-text-sm tw-text-gray-900 tw-underline tw-underline-offset-4"
              onClick={() => setFilter(prev => ({ ...prev, minPrice: 0, maxPrice: 10000 }))}
            >
              Reset
            </button>
          </header>

          <div className="tw-border-t tw-border-gray-200 tw-p-4">
            <div className="tw-flex tw-justify-between tw-gap-4">
              <label htmlFor="FilterPriceFrom" className="tw-flex tw-items-center tw-gap-2">
                <span className="tw-text-sm tw-text-gray-600">€</span>
                <input
                  type="number"
                  id="FilterPriceFrom"
                  placeholder="From"
                  value={filter.minPrice}
                  min={0}
                  max={filter.maxPrice}
                  onChange={e => {
                    setFilter(prev => ({ ...prev, minPrice: parseInt(e.target.value) }))
                  }}
                  className="tw-w-full tw-rounded-md tw-border-gray-200 tw-p-2 tw-shadow-sm sm:tw-text-sm"
                />
              </label>

              <label htmlFor="FilterPriceTo" className="tw-flex tw-items-center tw-gap-2">
                <span className="text-sm text-gray-600">€</span>
                <input
                  type="number"
                  id="FilterPriceTo"
                  placeholder="To"
                  value={filter.maxPrice}
                  min={filter.minPrice}
                  max={10000}
                  onChange={e => {
                    setFilter(prev => ({ ...prev, maxPrice: parseInt(e.target.value) }))
                  }}
                  className="tw-w-full tw-rounded-md tw-border-gray-200 tw-p-2 tw-shadow-sm sm:tw-text-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </details>
    </div>
  )
}

export default Filter
