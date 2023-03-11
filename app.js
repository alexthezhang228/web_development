/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-05 14:45:07
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-03-11 16:19:40
 * @FilePath: /todolist/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-05 14:45:07
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-03-05 15:42:43
 * @FilePath: /todolist/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @Date: 2023-03-05 14:45:07
 * @LastEditors: alexthezhang228 110424337+alexthezhang228@users.noreply.github.com
 * @LastEditTime: 2023-03-05 15:42:18
 * @FilePath: /todolist/app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const express=require('express')
const bodyparser=require('body-parser')

const app=express()
let items=['buy food','cook food','eat food']
let workItems=[]
// use let instead of var

//below line: you can use ejs
app.set('view engine','ejs')
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static('public'))
app.get('/',function(req,res){
  let today= new Date()
  let options={
    weekday:'long',
    day:'numeric',
    month:'long'
  }
  let day=today.toLocaleDateString('en-US',options)
  res.render('list',{listTitle:day,items:items})

})

app.post('/',function(req,res){
  let item=req.body.newItem
  if (req.body.list==='work'){
    workItems.push(item)
    res.redirect('/work')
  }else{
    items.push(item)
    res.redirect('/')
  }
})


app.get('/work',function(req,res){
  res.render('list',{listTitle:'work',items:workItems})
})


app.listen(3001,function(){
  console.log('server is running on localhost:3001')
})


