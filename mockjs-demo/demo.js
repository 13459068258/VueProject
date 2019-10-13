const Mock = require('mockjs')
const data = Mock.mock({
    'membeList|6':[
        {
           'id|+1':1,
           'name':'@cname',
           'price':'@float',
           'status':'@boolean',
           'year':'@date("yyyy/mm/dd")',
           'dateTime':'@datetime("yyyy/mm/dd hh:mm:ss")',
           'pic':'@image',
           'title':'@ctitle(10,30)',
           'content':'@csentence(10,50)',
           'first':'@cfirst',
           'url':'@url("http")',
           'url':'@url("http","xiakecp.com")'
        }
    ]
})

console.log(JSON.stringify(data,null,2))