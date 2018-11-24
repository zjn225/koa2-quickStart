// const router = require('koa-router')()
const Router = require('koa-router') 
const router = new Router({
  prefix: '/other'    //前缀
})

// router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
