import { ENV, ENV_TEST, ENV_PROD } from './env'

export const BASE_API_URL_TEST = 'http://localhost:3000'
export const BASE_API_URL_PROD =
  'https://nuxt-pwa-tailwindcss-demo.herokuapp.com'

export const BASE_API_URL = (() => {
  switch (ENV) {
    case ENV_TEST:
      return BASE_API_URL_TEST
    case ENV_PROD:
      return BASE_API_URL_PROD
    default:
      return BASE_API_URL_TEST
  }
})()

export const API_URL = `${BASE_API_URL}/api`
