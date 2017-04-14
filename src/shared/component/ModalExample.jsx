// @flow

import React from 'react'

const ModalExample = () =>
  <div className="js-modal-example modal fade">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Modal Title</h5>
          <button className="close" type="button" data-dismiss="modal">x</button>
        </div>
        <div className="modal-body">This is a Bootstrap modal. It uses jQuery</div>
        <div className="modal-footer">
          <button className="btn btn-primary" type="button" role="button" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

export default ModalExample
