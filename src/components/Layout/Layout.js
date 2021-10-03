import React from "react"
import { GlobalStyles, Container } from "./Layout.styles"
import Header from "../Header/Header"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>{children}</Container>
    </>
  )
}

export default Layout
