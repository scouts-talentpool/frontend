/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Firma
  }

  patch: {
    status: 200
    resBody: Types.Firma
    reqBody: Types.Firma
  }

  delete: {
    status: 200
    resBody: Types.Firma
  }
}
