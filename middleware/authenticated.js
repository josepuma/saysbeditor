export default function ({ store, redirect, $axios }) {
  // If the user is not authenticated
  if (!store.state.auth) {
    return redirect('/login')
  } else {
    return $axios.setToken(store.state.auth)
  }
}