import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './benutzer'
import type { Methods as Methods1 } from './benutzer/_authId@string'
import type { Methods as Methods2 } from './firmen'
import type { Methods as Methods3 } from './firmen/_id@number'
import type { Methods as Methods4 } from './lehrberufe'
import type { Methods as Methods5 } from './lehrstellen'
import type { Methods as Methods6 } from './lehrstellen/_id@number'
import type { Methods as Methods7 } from './talente'
import type { Methods as Methods8 } from './talente/_id@number'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:2030/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/benutzer'
  const PATH1 = '/firmen'
  const PATH2 = '/lehrberufe'
  const PATH3 = '/lehrstellen'
  const PATH4 = '/talente'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    benutzer: {
      _authId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option: { headers: Methods1['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { headers: Methods1['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods1['patch']['reqBody'], headers: Methods1['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods1['patch']['reqBody'], headers: Methods1['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['patch']['resBody']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option: { headers: Methods1['delete']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody']>(prefix, prefix1, DELETE, option).json(),
          $delete: (option: { headers: Methods1['delete']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods1['delete']['resBody']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    firmen: {
      _id: (val1: number) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option: { headers: Methods3['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { headers: Methods3['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods3['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods3['patch']['reqBody'], headers: Methods3['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods3['patch']['resBody']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods3['patch']['reqBody'], headers: Methods3['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods3['patch']['resBody']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option: { headers: Methods3['delete']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods3['delete']['resBody']>(prefix, prefix1, DELETE, option).json(),
          $delete: (option: { headers: Methods3['delete']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods3['delete']['resBody']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option: { query: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody']>(prefix, PATH1, POST, option).json(),
      $post: (option: { body: Methods2['post']['reqBody'], headers: Methods2['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods2['post']['resBody']>(prefix, PATH1, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods2['get']['query'] } | undefined) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    lehrberufe: {
      get: (option: { headers: Methods4['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option: { headers: Methods4['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods4['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody']>(prefix, PATH2, POST, option).json(),
      $post: (option: { body: Methods4['post']['reqBody'], headers: Methods4['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods4['post']['resBody']>(prefix, PATH2, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH2}`
    },
    lehrstellen: {
      _id: (val1: number) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          get: (option: { headers: Methods6['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods6['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { headers: Methods6['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods6['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option: { query: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods5['get']['resBody']>(prefix, PATH3, GET, option).json(),
      $get: (option: { query: Methods5['get']['query'], headers: Methods5['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods5['get']['resBody']>(prefix, PATH3, GET, option).json().then(r => r.body),
      post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods5['post']['resBody']>(prefix, PATH3, POST, option).json(),
      $post: (option: { body: Methods5['post']['reqBody'], headers: Methods5['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods5['post']['resBody']>(prefix, PATH3, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods5['get']['query'] } | undefined) =>
        `${prefix}${PATH3}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    talente: {
      _id: (val1: number) => {
        const prefix1 = `${PATH4}/${val1}`

        return {
          get: (option: { headers: Methods8['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods8['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { headers: Methods8['get']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods8['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          patch: (option: { body: Methods8['patch']['reqBody'], headers: Methods8['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody']>(prefix, prefix1, PATCH, option).json(),
          $patch: (option: { body: Methods8['patch']['reqBody'], headers: Methods8['patch']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods8['patch']['resBody']>(prefix, prefix1, PATCH, option).json().then(r => r.body),
          delete: (option: { headers: Methods8['delete']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods8['delete']['resBody']>(prefix, prefix1, DELETE, option).json(),
          $delete: (option: { headers: Methods8['delete']['reqHeaders'], config?: T | undefined }) =>
            fetch<Methods8['delete']['resBody']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option: { query: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH4, GET, option).json(),
      $get: (option: { query: Methods7['get']['query'], headers: Methods7['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods7['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
      post: (option: { body: Methods7['post']['reqBody'], headers: Methods7['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH4, POST, option).json(),
      $post: (option: { body: Methods7['post']['reqBody'], headers: Methods7['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods7['post']['resBody']>(prefix, PATH4, POST, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods7['get']['query'] } | undefined) =>
        `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
