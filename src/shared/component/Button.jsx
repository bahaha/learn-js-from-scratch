// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) =>
  <button
    className="btn btn-primary"
    onClick={handleClick}
    type="button"
    role="button"
  >{label}</button>

export default Button
