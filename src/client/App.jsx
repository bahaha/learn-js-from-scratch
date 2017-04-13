// @flow

import React from 'react'
import HelloButton from './container/HelloButton'
import Message from './container/Message'

import HelloAsyncButton from './container/HelloAsyncButton'
import MessageAsync from './container/MessageAsync'

import { APP_NAME } from './../shared/config'

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <Message />
    <HelloButton />
    <MessageAsync />
    <HelloAsyncButton />
  </div>

export default App
