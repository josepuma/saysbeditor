import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      auth: Cookie.get('auth'),
      user: Cookie.getJSON('user')
    }),
    mutations: {
      setAuth(state, { auth, user }) {
        state.auth = auth
        state.user = user
      }
    },
    actions: {
      nuxtServerInit({ commit }, { req }) {
        let auth = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            auth = JSON.parse(parsed.auth)
            user = JSON.parse(parsed.user)
          } catch (err) {
            // No valid cookie found
          }
        }
        commit('setAuth', { auth, user })
      },
      setAuth({ commit }, { auth, user }) {
        commit('setAuth', { auth, user })
      }
    }
  })
}

export default createStore