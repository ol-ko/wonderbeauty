export default ({ app, env }, inject) => {
  // Inject $hello(msg) in Vue, context and store.
  inject('categories', env.categories)
}
