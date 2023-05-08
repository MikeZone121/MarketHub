import { useParams } from "react-router-dom"

function Detail() {
  const { slug } = useParams()

  return (
    <div className="tw-m-auto tw-flex tw-h-screen tw-w-full tw-items-center tw-justify-center tw-text-center">
      {slug}
    </div>
  )
}

export default Detail
