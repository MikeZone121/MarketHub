import { useRouteError } from "react-router-dom"
import { TitleSizeEnum } from "../../components/Atoms/Title/types"
import Title from "../../components/Atoms/Title"

function Error() {
  const error: any = useRouteError()
  let message = "Sorry, the page you are looking for could not be found or has been removed."
  let title = "Page not found"
  if (error.status !== 404) {
    title = "Oops"
    message = error.statusText || error.message
  }
  return (
    <main>
      <div className="tw-mx-auto tw-flex tw-h-screen tw-max-w-screen-xl tw-items-center tw-justify-start tw-px-4 md:tw-px-8">
        <div className="tw-mx-auto tw-max-w-lg tw-text-center">
          <div className="tw-pb-6">
            <img src="images/branding/logo.svg" width={150} className="tw-mx-auto" />
          </div>
          <Title size={TitleSizeEnum.H4} className="tw-font-semibold tw-text-gray-800 sm:tw-text-5xl" text={title} />
          {/* TODO: Change below code to a text component */}
          <p className="tw-mt-3 tw-text-gray-600">
            {message}
            <a
              href="/"
              className="tw-ml-2 tw-inline-flex tw-items-center tw-gap-x-1 tw-font-medium tw-text-primary tw-duration-150 hover:tw-text-primary"
            >
              Go back
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="tw-h-5 tw-w-5">
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Error
