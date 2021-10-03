import { useStaticQuery, graphql } from "gatsby"

export const useHeaderQuery = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return data
}
