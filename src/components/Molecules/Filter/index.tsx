import { useState } from "react"

import { ProductCategory } from "../../../services/types"

function Filter({ categories }: { categories?: ProductCategory[] }) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  return (
    <div className="tw-space-y-2">
      <details
        className="tw-overflow-hidden tw-rounded tw-border tw-border-gray-300 [&_summary::-webkit-details-marker]:tw-hidden"
        open
      >
        <summary className="tw-flex tw-cursor-pointer tw-items-center tw-justify-between tw-gap-2 tw-bg-white tw-p-4 tw-text-gray-900 tw-transition">
          <span className="tw-text-sm tw-font-medium"> Categories </span>
          <span className="tw-transition group-open:tw--rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="tw-h-4 tw-w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>

        <div className="tw-border-t tw-border-gray-200 tw-bg-white">
          <header className="tw-flex tw-items-center tw-justify-between tw-p-4">
            <span className="tw-text-sm tw-text-gray-700"> {selectedCategories.length ?? 0} Selected </span>

            <button type="button" className="tw-text-sm tw-text-gray-900 tw-underline tw-underline-offset-4">
              Reset
            </button>
          </header>

          <ul className="tw-space-y-1 tw-border-t tw-border-gray-200 tw-p-4">
            {categories?.map(category => (
              <li key={category.id}>
                <label htmlFor={category.id} className="tw-inline-flex tw-items-center tw-gap-2">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="tw-h-5 tw-w-5 tw-rounded tw-border-gray-300"
                    onChange={e => {
                      setSelectedCategories(prev => {
                        if (e.target.checked) {
                          return [...prev, category.id]
                        } else {
                          return [...prev].filter(id => id !== category.id)
                        }
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
    </div>
  )
}

export default Filter
