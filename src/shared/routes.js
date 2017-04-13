// @flow

/**
 * helloEndpointRoute()     // -> /ajax/hello/:num
 * helloEndpointRoute(1234) // -> /ajax/hello/1234
 */
// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`
