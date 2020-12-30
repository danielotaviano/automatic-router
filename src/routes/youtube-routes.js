module.exports = ( router ) => {
  router.get('/youtube', (req, res) => {
    return res.json({
      youtube: 'hello',
      like: true
    })
  })
}