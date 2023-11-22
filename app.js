const express=require('express');
const path=require('path')
const userRoutes=require('./routes/user')

const app=express()

const {engin, engine}= require('express-handlebars')
app.engine('hbs',engine({extname:'hbs',defaultLayout:false}))
app.set('view engine', 'hbs')
//access public path
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())

app.use(userRoutes)

app.listen(3003,()=>{
    console.log('server listening on 3003');
})