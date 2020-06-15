export const ENV_TEST = 'TEST'
export const ENV_PROD = 'PROD'

export const ENV = (() => {
  if (process.client) {
    const host = location.host
    let env = ENV_PROD

    if (
      process.env.NODE_ENV === 'development' ||
      host.match(
        /(^127\.)|(^192\.168\.)|(^10\.)|(^172\.1[6-9]\.)|(^172\.2[0-9]\.)|(^172\.3[0-1]\.)|(^::1$)|(^[fF][cCdD])|(^localhost)/
      )
    ) {
      env = ENV_TEST
    }

    return env
  }
  return ENV_PROD
})()
