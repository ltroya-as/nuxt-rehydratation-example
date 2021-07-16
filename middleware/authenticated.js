export default function ({ store, $cookies }) {
  const value = !!$cookies.get('LOGIN_COOKIE')
  store.commit('auth/setAuthenticated', value)
}
