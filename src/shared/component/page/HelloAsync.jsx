// @flow

import React from 'react'
import Helmet from 'react-helmet'

import HelloAsyncButton from '../../container/HelloAsyncButton'
import MessageAsync from '../../container/MessageAsync'

const title = 'Async Hello Page'

const HelloAsync = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello asynchronously' },
        { property: 'og:title', content: title },
      ]}
    />
    <MessageAsync />
    <HelloAsyncButton />
  </div>

export default HelloAsync
