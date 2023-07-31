import React from 'react'
import { GraphiqlExplorer } from '../components/GraphiqlExplorer'

const IndexPage = () => (
  <>
    <h1>Adobe Commerce Explorer</h1>

    <GraphiqlExplorer />
  </>
)

export default IndexPage

export const Head = () => <title>Commerce Explorer</title>
