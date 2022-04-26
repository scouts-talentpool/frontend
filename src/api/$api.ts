import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './talents'
import type { Methods as Methods1 } from './talents/_id@string'
import type { Methods as Methods2 } from './users'
import type { Methods as Methods3 } from './users/_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:2030/' : baseURL).replace(/\/$/, '')
  const PATH0 = '/talents'
  const PATH1 = '/users'
  const GET = 'GET'
  const POST = 'POST'
  const DELETE = 'DELETE'
  const PATCH = 'PATCH'

  return {
    talents: {
      _id: (val1: string) => {
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
      get: (option: { headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { headers: Methods0['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option: { body: Methods0['post']['reqBody'], headers: Methods0['post']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH0}`
    },
    users: {
      _id: (val1: string) => {
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
      get: (option: { headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { headers: Methods2['get']['reqHeaders'], config?: T | undefined }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: () => `${prefix}${PATH1}`
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
