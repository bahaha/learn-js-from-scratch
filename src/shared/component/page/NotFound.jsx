// @flow

import React from 'react'
import Helmet from 'react-helmet'

const title = 'Page Not Found'
const NotFoundPage = () =>
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', conent: 'A page to say hello' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>
    <p>Page not found.</p>
  </div>

export default NotFoundPage
