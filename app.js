//require('babel-register')
//import Koa from 'Koa'
const Koa = require('koa')
const app = new Koa();


app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

//resourse
app.use(ctx => {
   ctx.body = 'Hello Koa';
});

app.listen(3000);
