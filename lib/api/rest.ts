// @ts-ignore
import axios, { AxiosResponse, CancelTokenSource } from 'axios'
// const BaseUrl = 'http://52.78.230.246:3000'
const BaseUrl = process.env.NUXT_ENV_REST_URL  // 로컬

type RestConfiguration = {
  /** 억세스 토큰 */
  accessToken?: string
  //
  // /** 클라이언트 아이디 */
  // clientId?: string
  //
  // /** 언어 */
  // language?: string
}

const RestConfig: RestConfiguration = {}
export { RestConfig }

/**
 * REST API URL 목록
 */
export class RestUrl {
  // static readonly Login = () => `${RestUrl.BASE_URL}/auth/login`
  static readonly Login = () => `${BaseUrl}/auth/login`
  static readonly Signup = () => `${BaseUrl}/auth/signup`
  static readonly Bills = () => `${BaseUrl}/bills`
  static readonly Bill = (billSeq: number) => `${BaseUrl}/bills/${billSeq}`
  static readonly Orders = (billSeq: number) => `${BaseUrl}/bills/${billSeq}/orders`
}

export class Rest {
  public static cancelToken(): CancelTokenSource {
    // eslint-disable-next-line import/no-named-as-default-member
    return axios.CancelToken.source()
  }

  public static get(
    url: string,
    cancelToken?: CancelTokenSource
  ): Promise<AxiosResponse> {
    const config = Rest.getConfig()
    if (cancelToken) {
      // @ts-ignore
      config.cancelToken = cancelToken.token
    }

    return axios.get(url, config)
  }

  // noinspection JSUnusedGlobalSymbols
  public static post(url: string, body: any, cancelToken: CancelTokenSource) {
    const config = Rest.getConfig()
    if (cancelToken) {
      // @ts-ignore
      config.cancelToken = cancelToken.token
    }

    return axios.post(url, body, config)
  }

  // noinspection JSUnusedGlobalSymbols
  public static patch(url: string, body: any, cancelToken: CancelTokenSource) {
    const config = Rest.getConfig()
    if (cancelToken) {
      // @ts-ignore
      config.cancelToken = cancelToken.token
    }

    return axios.patch(url, body, config)
  }

  // noinspection JSUnusedGlobalSymbols
  public static delete(url: string, cancelToken: CancelTokenSource) {
    const config = Rest.getConfig()
    if (cancelToken) {
      // @ts-ignore
      config.cancelToken = cancelToken.token
    }

    return axios.delete(url, config)
  }

  private static getConfig(): Object {
    // TODO: config.source = location.href
    // TODO: config.headers['Http-Session'] = httpSession
    // TODO: config.headers.Device = isMobile === true ? 'mobile' : 'web'
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }

    // const isServer = process.server === undefined || process.server
    // let accessToken = isServer ? RestConfig.accessToken : Storage.get(StorageKey.AccessToken)
    // const language = isServer ? RestConfig.language : Storage.get(StorageKey.Language)
    // const clientId = isServer ? RestConfig.clientId : Storage.get(StorageKey.ClientId)

    // const accessToken = '4ezzBi4o2Yn3vQvVqaihTD6cONE='
    // if (process.client) {
    //   const accessToken = localStorage.getItem('token')
    //   if (accessToken) {
    //     // @ts-ignore
    //     config.headers['Access-Token'] = accessToken
    //   }
    // }

    return config
  }
}
