// const router = require('koa-router')()
const Router = require('koa-router') 
const router = new Router({
  prefix: ''    //前缀
})

const {
  getUsers
} = require('../model/basic')

router.get('/', async (ctx, next) => {
  let users = await getUsers()
  ctx.body = {
    users
  }
})

router.get('/user/:id', async (ctx, next) => {
  let id = ctx.params.id   //拿到路由参数
  ctx.body = `你好，你的id是${id}`
})

router.get('/index', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
