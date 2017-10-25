/**
 * 接口测试之post请求
 */

let axios = require('axios');
let assert = require('assert');
let url = 'http://118.31.19.120:3000/api/v1/topics';
axios.post(url, {
    accesstoken:'078d44f0-b9ba-4d9e-aa0f-60ea32134752',
    title:'1212222222',
    tab:'share',
    content: '345345345'
})
    .then(function (response) {
        console.log(response.data);
        let res=response.data.success;
        assert.deepEqual(true,res)
    })