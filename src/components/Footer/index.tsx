import Button from "../Button"
import { BtnVariantEnum } from "../Button/types"
import Hyperlink from "../HyperLink"
import Title from "../Title"
import { TitleSizeEnum } from "../Title/types"

const Footer = () => {
  const now = new Date().getFullYear()

  const footerNavs = [
    {
      label: "Company",
      items: [
        {
          href: "/",
          name: "Home"
        },
        {
          href: "/shop",
          name: "Shop"
        },
        {
          href: "/contact",
          name: "Contact"
        },
        {
          href: "/support",
          name: "Support"
        }
      ]
    },
    {
      label: "Resources",
      items: [
        {
          href: "/contact",
          name: "Contact"
        },
        {
          href: "/support",
          name: "Support"
        },
        {
          target: "_blank",
          href: "https://github.com/MikeZone121/MarketHub",
          name: "Github"
        }
      ]
    },
    {
      label: "About",
      items: [
        {
          href: "/terms",
          name: "Terms"
        },
        {
          href: "/license",
          name: "License"
        },
        {
          href: "/privacy",
          name: "Privacy"
        },
        {
          href: "/about-us",
          name: "About US"
        }
      ]
    }
  ]

  return (
    <footer className="tw-mx-auto tw-max-w-screen-xl tw-bg-white tw-px-4 tw-py-5 tw-text-gray-500 md:tw-px-8">
      <div className="tw-justify-between tw-gap-6 md:tw-flex">
        <div className="tw-flex-1">
          <div className="tw-max-w-xs">
            <div className="tw-flex tw-items-center">
              <img src="images/branding/logo.svg" className="tw-w-24" />
              <Title text="MarketHub" className="!tw-text-black" size={TitleSizeEnum.H3} />
            </div>
            <p className="tw-mt-2 tw-text-[15px] tw-leading-relaxed">Shop everything in our market.</p>
          </div>
          <form onSubmit={e => e.preventDefault()}>
            <label className="tw-block tw-pb-2 tw-pt-4">Stay up to date</label>
            <div className="tw-flex tw-max-w-sm tw-items-center tw-rounded-md tw-border tw-p-1">
              <input type="email" placeholder="Enter your email" className="tw-w-full tw-p-2.5 tw-outline-none" />
              <Button text="Subscribe" variant={BtnVariantEnum.FULL} onClick={() => null} />
            </div>
          </form>
        </div>
        <div className="tw-mt-10 tw-flex-1 tw-justify-between tw-space-y-6 sm:tw-flex md:tw-mt-0 md:tw-space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="tw-space-y-4" key={idx}>
              <h4 className="tw-font-medium tw-text-gray-800">{item.label}</h4>
              {item.items.map((el, index) => (
                <li key={index}>
                  <Hyperlink href={el.href} text={el.name} className="!tw-text-gray-600" target={el.target} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="tw-mt-8 tw-items-center tw-justify-between tw-border-t tw-py-6 sm:tw-flex">
        <div className="tw-mt-4 sm:tw-mt-0">&copy; {now} MarketHub All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
