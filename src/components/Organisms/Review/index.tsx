import ReactTimeAgo from "react-time-ago"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import clsx from "clsx"

import Text from "../../Atoms/Text"
import { TextVariantEnum } from "../../Atoms/Text/types"
import Title from "../../Atoms/Title"
import { TitleSizeEnum } from "../../Atoms/Title/types"

import { ReviewModel } from "./types"

const Review = ({ reviews }: { reviews: ReviewModel[] }) => {
  const average = reviews.reduce((sum, curr) => sum + Number(curr.rating), 0)
  const averageScore = average / reviews.length
  return (
    <section>
      {reviews.length > 0 && (
        <div className="tw-my-8 tw-rounded-lg tw-bg-gray-100 tw-px-8 tw-py-10">
          <Title size={TitleSizeEnum.H5} className="!tw-text-gray-600">
            Customer Reviews
          </Title>
          {averageScore > 0 && (
            <div className="tw-mt-4 tw-flex tw-items-center tw-gap-4">
              <p className="tw-text-3xl tw-font-medium">
                {averageScore ? averageScore : 0}
                <span className="tw-sr-only">Average review score</span>
              </p>
              <div>
                <div className="tw-flex tw-gap-1">
                  {[...Array(5)]?.map((value, index) => (
                    <FontAwesomeIcon
                      key={`review-stars-average-${index}`}
                      icon={
                        Math.floor(averageScore) === index && Math.floor(averageScore) % 0.5 == 0 ? faStarHalf : faStar
                      }
                      className={clsx(averageScore > index ? "  tw-text-yellow-300" : "tw-text-gray-200")}
                    />
                  ))}
                </div>
                <p className="tw-mt-0.5 tw-text-xs tw-text-gray-500">Based on {reviews.length} reviews</p>
              </div>
            </div>
          )}
          <div className="tw-mt-6 tw-grid tw-grid-cols-1 tw-gap-x-16 tw-gap-y-12 lg:tw-grid-cols-2">
            {reviews.map(review => (
              <blockquote key={review.id}>
                <header className="sm:tw-flex sm:tw-items-center sm:tw-gap-4">
                  {!!review.rating && (
                    <div className="tw-flex tw-gap-1">
                      {[...Array(5)]?.map((value, index) => (
                        <FontAwesomeIcon
                          key={`review-stars-${review.id}${index}`}
                          icon={faStar}
                          className={clsx(review.rating > index ? " tw-text-yellow-300" : "tw-text-gray-200")}
                        />
                      ))}
                    </div>
                  )}
                  <p className="tw-mt-2 tw-font-medium sm:tw-mt-0">{review.headline}</p>
                </header>

                <Text className="tw-mt-1">{review.content}</Text>

                <footer className="tw-mt-2">
                  <Text className="tw-text-gray-400" variant={TextVariantEnum.SMALL}>
                    {review.name} - <ReactTimeAgo date={new Date(review?.createdAt)} locale="en-US" timeStyle="round" />
                  </Text>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Review
