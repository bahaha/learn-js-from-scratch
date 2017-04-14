// @flow

import React from 'react'
import Helmet from 'react-helmet'

import { APP_NAME } from '../../config'
import ModalExample from '../ModalExample'

const HomePage = () =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="jumbotron">
      <div className="container">
        <h1 className="display-3 mb-4">{APP_NAME}</h1>
      </div>
    </div>
    <div className="contianer">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h3 className="mb-3">Bootstrap</h3>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              role="button"
              data-toggle="modal"
              data-target=".js-modal-example"
            >Open Modal</button>
          </p>
        </div>
        <div className="col-md4 mb-4">
          <h3 className="mb-3">JSS (soon)</h3>
        </div>
        <div className="col-md-4 mb-4">
          <div className="mb-3">Websockets</div>
          <p>Open your browser console.</p>
        </div>
      </div>
    </div>
    <ModalExample />
  </div>

export default HomePage
