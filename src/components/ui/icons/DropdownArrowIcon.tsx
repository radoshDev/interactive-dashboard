import { SVGProps, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 12 8"
    width={12}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.664 1.091 5.762 5.947L11.3 1.09"
      stroke="currentColor"
      strokeWidth={0.867}
    />
  </svg>
)

const DropdownArrowIcon = memo(SvgComponent)
export default DropdownArrowIcon
