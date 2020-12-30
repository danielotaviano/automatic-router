module.exports = ( router ) => {
  router.get('/exemple2', (req, res) => {
    return res.json({
      message: 'hello youtube'
    })
  })
}