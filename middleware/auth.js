export default function ({ store, redirect }) {
  console.log(store.state);
  if (store.state.auth.loggedIn) {
    return redirect('/top');
  } else {
    return redirect('/');
  }
}
