import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { GraphiQL } from 'graphiql'
import React from 'react'
import 'graphiql/graphiql.css'

const fetcher = createGraphiQLFetcher({
  url: 'https://venia.magento.com/graphql',
})

export function GraphiqlExplorer() {
  return <GraphiQL fetcher={fetcher}></GraphiQL>
}
