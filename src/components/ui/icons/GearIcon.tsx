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
      d="M4.77 12.59c1.209.415 2.172 1.427 2.575 2.71l.043.13c.462 1.36.274 2.825-.5 3.924-.14.2-.109.438.04.55l2.244 1.705c.08.06.156.06.204.054a.295.295 0 0 0 .197-.128l.25-.356a4.113 4.113 0 0 1 3.219-1.748c1.426-.03 2.706.624 3.504 1.775l.127.186a.295.295 0 0 0 .198.13.25.25 0 0 0 .203-.055l2.233-1.684c.156-.117.19-.367.075-.535l-.282-.407a4.3 4.3 0 0 1-.576-3.639c.396-1.338 1.405-2.398 2.7-2.831l.217-.074c.175-.057.269-.274.207-.473l-.853-2.731a.343.343 0 0 0-.168-.21.255.255 0 0 0-.202-.016l-.368.123c-1.26.419-2.65.191-3.717-.611l-.117-.088a4.106 4.106 0 0 1-1.613-3.288l.002-.303a.383.383 0 0 0-.11-.276.275.275 0 0 0-.198-.087l-2.76-.004c-.168 0-.306.162-.307.361v.262a4.253 4.253 0 0 1-1.65 3.352l-.14.106a4.241 4.241 0 0 1-3.937.647.176.176 0 0 0-.144.01.258.258 0 0 0-.128.16l-.885 2.813a.387.387 0 0 0 .239.486l.178.06Zm4.562 11.243a2.414 2.414 0 0 1-1.47-.499L5.619 21.63c-1.073-.813-1.31-2.376-.53-3.484.405-.574.489-1.312.25-2.012l-.06-.182c-.197-.63-.65-1.12-1.21-1.312h-.001l-.177-.062a2.54 2.54 0 0 1-1.604-3.184l.884-2.812c.2-.636.632-1.15 1.217-1.445a2.337 2.337 0 0 1 1.824-.126c.648.221 1.369.101 1.925-.321l.14-.106c.493-.377.791-.99.793-1.636l.002-.261c.005-1.391 1.115-2.52 2.473-2.52h.004l2.76.003a2.432 2.432 0 0 1 1.73.726 2.54 2.54 0 0 1 .74 1.814l-.002.303a1.928 1.928 0 0 0 .752 1.548l.116.088a1.884 1.884 0 0 0 1.727.286l.367-.123a2.412 2.412 0 0 1 1.876.143 2.49 2.49 0 0 1 1.25 1.493l.852 2.731c.412 1.32-.301 2.743-1.587 3.173l-.218.073c-.624.21-1.114.73-1.31 1.393a2.112 2.112 0 0 0 .28 1.79l.282.406c.773 1.118.526 2.686-.55 3.498l-2.233 1.686a2.416 2.416 0 0 1-1.854.463 2.45 2.45 0 0 1-1.635-1.037l-.128-.186c-.379-.546-.985-.877-1.621-.842a1.92 1.92 0 0 0-1.547.831l-.25.356a2.457 2.457 0 0 1-2.013 1.05ZM13 11.375c-.896 0-1.625.73-1.625 1.625 0 .896.73 1.625 1.625 1.625.896 0 1.625-.73 1.625-1.625 0-.896-.73-1.625-1.625-1.625Zm0 5.417c-2.09 0-3.792-1.701-3.792-3.792 0-2.09 1.701-3.792 3.792-3.792 2.09 0 3.792 1.701 3.792 3.792 0 2.09-1.701 3.792-3.792 3.792Z"
      fill="currentColor"
    />
  </svg>
)

const GearIcon = memo(SvgComponent)
export default GearIcon
