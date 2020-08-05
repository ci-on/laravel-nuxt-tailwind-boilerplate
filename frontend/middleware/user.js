export default function (context) {
  context.$axios.onError((error) => {
    if ([403, 401, 419].includes(error.response.status)) {
      context.redirect('/login')
    }
  })
}
