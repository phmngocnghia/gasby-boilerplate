import { Link } from "gatsby"
import React from "react"
import { css } from "linaria"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGooglePlusG,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa"
import classNames from "classnames"
import { hoverClassNames } from "../../../classNames"

const Header = () => (
  <div
    className={css`
      @apply bg-light-blue;
    `}
  >
    <div
      className={classNames(
        "container",
        css`
          @apply flex justify-center flex-col;
          padding-bottom: 0.75rem;

          @screen tablet-inf {
            padding-top: 0.75rem;
            @apply flex-row m-auto;

            div:first-child {
              margin-right: auto;
            }

            svg {
              @apply my-0 !important;
            }
          }
        `
      )}
    >
      <div
        className={css`
        svg {
          width: 0.75rem;
          width: 1rem;
          margin: 0.75rem;
          @apply text-light-gray cursor-pointer ${hoverClassNames};
        }

        svg:hover {
          @apply text-blue;
        }

        svg#header-icon-google-plus {
          width: 1.1875rem;
        }

        @apply flex justify-center;
      `}
      >
        <FaLinkedinIn className="a" />
        <FaFacebookF />
        <FaGooglePlusG id="header-icon-google-plus" />
      </div>
      <div
        className={css`
          svg {
            width: 0.8125rem;
            height: 0.8125rem;
            margin-right: 0.4375rem;
            @apply text-blue;
          }

          a {
            @apply flex items-center;
            color: #919191;
            font-size: 0.8125rem;
          }

          a:first-child {
            margin-right: 0.3125rem;
          }

          a:last-child {
            margin-left: 0.3125rem;
          }

          @screen tablet-inf {
            a:last-child {
              margin-left: 3.125rem;
            }
          }

          @apply flex justify-center;
        `}
      >
        <a href="#">
          <FaEnvelope /> info@docmed.com
        </a>
        <a href="#">
          <FaPhone /> 160160
        </a>
      </div>
    </div>
  </div>
)

export default Header
