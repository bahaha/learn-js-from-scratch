// @flow

import React from 'react'
import HelloButton from './container/HelloButton'
import Message from './container/Message'

import { APP_NAME } from './../shared/config'

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
  </div>

export default App
