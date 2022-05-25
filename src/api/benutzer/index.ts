/* eslint-disable */
import type * as Types from '../@types'

export type Methods = {
  post: {
    status: 201
    resBody: Types.Benutzer
    reqBody: Types.CreateBenutzerDto
  }

  get: {
    query: {
      cursor: string
      take: string
      rolle: string
    }

    status: 200
    resBody: Types.Benutzer[]
  }
}
