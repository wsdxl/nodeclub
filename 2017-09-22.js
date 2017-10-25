/**
 * 接口测试之get请求
 */
let axios=require('axios');
let assert=require('assert');
let url='http://118.31.19.120:3000/api/v1';
axios.get(url+'/topics?page=1&tab=share&limit=2&mdrender=false').then(function(response){
    // console.log(response.data);
    let suc=response.data.success;
    assert.deepEqual(true,suc);
    let title=response.data.data[0].title;
    console.log(title);
    assert.deepEqual(title,'大家早上好，今天你运动了吗？');
})