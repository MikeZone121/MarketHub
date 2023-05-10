function SortBy({ onChange }: { onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) {
  const sortByValues = [
    { label: "New products", value: "publishedAt_ASC" },
    { label: "Old products", value: "publishedAt_DESC" },
    { label: "price Low - High", value: "price_ASC" },
    { label: "price High - Low", value: "price_DESC" }
  ]
  return (
    <div className="tw-flex tw-justify-end">
      <label htmlFor="SortBy" className="tw-sr-only">
        SortBy
      </label>
      <select
        id="SortBy"
        className="tw-h-10 tw-rounded tw-border tw-border-gray-300 tw-p-2 tw-text-base"
        onChange={onChange}
      >
        <option>Sort By</option>
        {sortByValues.map(sortBy => (
          <option value={sortBy.value} key={sortBy.value}>
            {sortBy.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SortBy
