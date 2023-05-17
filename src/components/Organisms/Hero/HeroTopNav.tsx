import Hyperlink from "../../Atoms/HyperLink"

type Props = {}
const HeroTopNavItems = [
  { href: "/", text: "Home" },
  { href: "/", text: "Today deals" },
  { href: "/", text: "Trending products" },
  { href: "/", text: "Special offers" }
]
const HeroTopNav = () => {
  return (
    <section className=" tw-flex tw-w-full tw-items-end tw-justify-end ">
      <ul className="tw-hidden tw-space-x-6 tw-py-3 lg:tw-flex">
        {HeroTopNavItems.map(TopNavItem => (
          <li
            key={`top-nav-${TopNavItem.text}`}
            className="tw-transition-all tw-duration-200 tw-ease-in hover:tw-text-primary"
          >
            <Hyperlink href={TopNavItem.href} text={TopNavItem.text} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HeroTopNav
