// @flow

import { connect } from 'react-redux'

import { sayHello } from '../action/hello'
import Button from '../component/Button'

const mapStateToProps = () => ({ label: 'Say Hello' })
const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(sayHello('Hello!')) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
