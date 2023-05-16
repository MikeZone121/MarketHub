import { useAuth0 } from "@auth0/auth0-react"
import { faChevronDown, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      onClick={() => loginWithRedirect()}
      className="tw-flex tw-flex-row-reverse tw-items-center tw-gap-2 tw-text-white md:tw-flex-row"
    >
      <span className="tw-text-base">Sign in</span>
      <FontAwesomeIcon icon={faUser} />
    </button>
  )
}
export const Profile = () => {
  const { user, logout } = useAuth0()
  return (
    <button
      onClick={() => logout()}
      type="button"
      className="tw-group tw-flex tw-shrink-0 tw-items-center tw-rounded-lg tw-transition"
    >
      <span className="tw-sr-only">Menu</span>
      <img alt="Man" src={user?.picture} className="tw-h-7 tw-w-7 tw-rounded-full tw-object-cover" />

      <p className="tw-ms-2 tw-hidden tw-text-left tw-text-sm tw-text-white sm:tw-block">
        <strong className="tw-block tw-font-medium">{user?.name}</strong>
      </p>

      <FontAwesomeIcon icon={faChevronDown} className="tw-ms-2 tw-text-sm tw-text-white" />
    </button>
  )
}

export const LogoutButton = () => {
  const { logout, user } = useAuth0()
  return (
    <button
      onClick={() => logout()}
      className="tw-flex tw-flex-row-reverse tw-items-center tw-gap-2 tw-text-white md:tw-flex-row"
    >
      <span className="tw-text-base">Sign out {user?.name}</span>
      <FontAwesomeIcon icon={faUser} />
    </button>
  )
}
