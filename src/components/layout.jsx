import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import './layout.css'

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
      </div>
    </>
  )
}
