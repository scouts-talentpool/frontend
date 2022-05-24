/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.Firma
    reqBody: Types.Firma
  }

  get: {
    query: {
      take: string
      cursor: string
    }

    status: 200
    resBody: Types.Firma[]
  }
}
