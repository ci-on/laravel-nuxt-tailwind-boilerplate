export default function (context) {
  if (context.$auth.error) {
    context.redirect('/login')
  }
  context.$axios.onError((error) => {
    if ([403, 401, 419].includes(error.response.status)) {
      context.redirect('/login')
    }
  })
}
