/**
 * 接口测试中解决异常的问题
 */
let axios = require('axios');
let assert = require('assert');

describe('发帖', function () {
    it('字数少', async function () {
        try {
            let res = await axios.post('http://118.31.19.120:3000/api/v1/topics', {
                accesstoken: '078d44f0-b9ba-4d9e-aa0f-60ea32134752',
                title: '3445662',
                tab: 'share',
                content: '345345345sdfff'
            })
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
            assert.deepEqual('false',error.response.data.success);
        }



    })
})

// axios.post('http://118.31.19.120:3000/api/v1/topics', {
//     accesstoken: '078d44f0-b9ba-4d9e-aa0f-60ea32134752',
//     title: '8',
//     tab: 'share',
//     content: '345345345sdfff'
// }).then(function (res) {
//     console.log(res);
// }).catch(function (error) {
//     console.log(error);
// })