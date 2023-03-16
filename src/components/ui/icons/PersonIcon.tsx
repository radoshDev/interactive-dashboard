import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.583 22.63c0 .664-.518 1.203-1.16 1.203-.642 0-1.161-.539-1.161-1.203 0-3.319-2.604-6.019-5.804-6.019s-5.803 2.7-5.803 6.019c0 .664-.52 1.203-1.161 1.203-.642 0-1.16-.539-1.16-1.203 0-4.647 3.645-8.426 8.124-8.426 4.48 0 8.125 3.78 8.125 8.426ZM12.458 4.574c1.28 0 2.322 1.08 2.322 2.407 0 1.328-1.041 2.408-2.322 2.408-1.28 0-2.321-1.08-2.321-2.408 0-1.327 1.041-2.407 2.321-2.407Zm0 7.222c2.56 0 4.643-2.16 4.643-4.815 0-2.655-2.082-4.814-4.643-4.814-2.56 0-4.643 2.16-4.643 4.814 0 2.656 2.083 4.815 4.643 4.815Z"
      fill="currentColor"
    />
  </svg>
)

const PersonIcon = memo(SvgComponent)
export default PersonIcon
