import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.007 15.251a1 1 0 0 0 1.11.876l8.938-1.056a1 1 0 1 0-.235-1.987l-7.944.94-.94-7.945a1 1 0 0 0-1.986.235l1.057 8.937ZM13.36.381 2.215 14.515l1.57 1.238L14.931 1.62 13.361.381Z"
      fill="#fff"
    />
  </svg>
)

const ArrowIcon = memo(SvgComponent)
export default ArrowIcon
