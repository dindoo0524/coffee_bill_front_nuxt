import { AxiosResponse, CancelTokenSource } from 'axios'
import { Rest, RestUrl } from '../rest'
import { BaseApi } from '../baseApi'

/**
 * auth 관련 API
 */
export default class AuthApi extends BaseApi {
  public static login(
    nickname: string,
    password: string,
    cancelToken: CancelTokenSource
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      const url = RestUrl.Login

      Rest.post(url, { nickname, password }, cancelToken)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((response: AxiosResponse) => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
