import React from "react"
import { Logo, LuxuryTextLight } from "./Header.styles"
import { useHeaderQuery } from "../../hooks/useHeaderQuery"

const Header = () => {
  const { site } = useHeaderQuery()

  return (
    <div>
      <Logo>
        <LuxuryTextLight>Luxury</LuxuryTextLight> Travel
      </Logo>
      <p>{site.siteMetadata.title}</p>
    </div>
  )
}

export default Header
