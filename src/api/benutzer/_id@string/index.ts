/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Benutzer
  }

  patch: {
    status: 200
    resBody: Types.Benutzer
    reqBody: Types.UpdateBenutzerDto
  }

  delete: {
    status: 200
    resBody: Types.Benutzer
  }
}
