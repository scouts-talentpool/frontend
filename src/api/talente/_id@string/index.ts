/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  get: {
    status: 200
    resBody: Types.Talent
  }

  patch: {
    status: 200
    resBody: Types.Talent
    reqBody: Types.UpdateTalentDto
  }

  delete: {
    status: 200
    resBody: Types.Talent
  }
}
