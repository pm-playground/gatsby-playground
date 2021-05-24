import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 364.75 129.83"
    {...props}
  >
    <defs>
      <style>{".prefix__c{fill:#89d2d7}"}</style>
    </defs>
    <text
      transform="translate(25.07 101.67)"
      fontFamily="CamingoCode-Bold,CamingoCode"
      fontWeight={700}
      fontSize={112.62}
      fill="#fff"
      letterSpacing=".05em"
    >
      {"IT"}
    </text>
    <text
      transform="translate(169.46 106.18)"
      fill="#89d2d7"
      fontSize={54.25}
      letterSpacing=".05em"
      fontFamily="CamingoCode-Bold,CamingoCode"
      fontWeight={700}
    >
      {"create"}
    </text>
    <path
      className="prefix__c"
      d="M162.93 79.77h-5.65v40.46h-53.12v4.88h58.77V79.77z"
    />
    <path
      className="prefix__c"
      d="M104.16 119.46h53.49v5.65h-53.49zM0 45.33h5.65V4.87h53.12V0H0v45.33z"
    />
    <path className="prefix__c" d="M5.28 0h53.49v5.65H5.28z" />
  </svg>
  )
}

export default SvgComponent
