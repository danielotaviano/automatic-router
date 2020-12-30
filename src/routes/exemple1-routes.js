module.exports = ( router ) => {
  router.get('/exemple1', (req, res) => {
    return res.json({
      message: 'ok'
    })
  })
}