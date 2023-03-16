import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle r={6} cx={6} cy={6} fill="currentColor" />
  </svg>
)

const CircleIcon = memo(SvgComponent)
export default CircleIcon
