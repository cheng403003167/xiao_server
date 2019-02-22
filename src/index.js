const Koa = require('koa');
const Router = require('koa-router');
const getData = require('./mysqlF.js')
const  app = new Koa();
const router = new Router();

const insertDate = new getData();
router.get('/',async (ctx,next)=>{
  let list = await insertDate.getList();
  ctx.body = JSON.parse(JSON.stringify(list))
})


app.use(router.routes()).use(router.allowedMethods());
app.listen(3030)