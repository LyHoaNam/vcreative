export default function ({ store, redirect }) {
  if (store.state.auth.loggedIn) {
    return redirect('/services');
  } else {
    return redirect('/');
  }
}
