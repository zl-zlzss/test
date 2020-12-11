/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


/* 
    思路:
        1. 在 storage 内添加一个数组 value
        2. 将输入框里输入的内容 添加到 storage 内
        3. 根据 storage 渲染下面的选项

*/
/* 
    1. 添加待办事项功能
        => 获取输入框输入的内容
            -> 利用 trim() 方法剔除两端用户可能输入的空格
        => 判断是否按下 回车键
            -> 若按下, 将 内容添加到 storage 里
                - 清空文本框中的内容
            -> 若按下的不是回车键
                -不进行任何操作
    2. 正在进行部分
        => 




    storage 内的数组存储的信息:
        => 事件
        => 是否已完成

*/
console.log('我是index.js')

// // 获取元素
// const inp = document.getElementsByClassName('inp')






















$(function () {

    // 存在数据
    // let todo_data = null

    // 存储 storage
    // const storage = JSON.parse(window.localStorage.getItem('todolist')) || []
    // console.log(storage) 
    // const todo_obj = JSON.parse(storage)
    // todo_data = todo_obj

    // 敲下 回车键
    let info = JSON.parse(window.localStorage.getItem('todolist')) || []
    console.log(info)
    $('.inp').on('keydown', function (e) {
        e = e || window.event
        var code = e.keyCode || e.which
        // console.log(code)
        console.log($('.inp').val())
        if (code === 13) {
            console.log('回车')
            console.log(info.length)
            info.push({
                id: info.length + 1,
                content: $('.inp').val(),
                done: false
            })
            window.localStorage.setItem('todolist', JSON.stringify(info))
            $('.inp').val(" ")
        }
    })

    // let obj1 = Object.keys(info).fifler(function(type){
    //     return info[type] === true
    // })
    // let obj2 = Object.keys(info).fifler(function(type){
    //     return info[type] === false
    // })

    // function getinfo(flag){
    //     if(!flag){
    //         // 挑选 type 为 false 的
    //         let obj1 = Object.keys(info).fifler(function(type){
    //             return info[type] === flag
    //         })
    //     }
    //     // 挑选 type 为 true 的
    //     if(flag){
    //         // 挑选 type 为 false 的

    //     }
    // }




   

    
    $('.center')
        // 删除
        .on('click', 'li > a', function () {
        console.log('del')
        const id = $(this).data('id')
        console.log($(this).data('id'))
        // info.splice(id - 1, 1)
        // 删除对应的数据info
        for (let i = 0; i < info.length; i++) {
            if (info[i].id == id) {
                info.splice(i, 1)
                break
            }
        }
        // 重新加载页面
        bindHtml()
        window.localStorage.setItem('todolist', JSON.stringify(info))

        })

        // 输入
        .on('input', 'li > p', function(){
            console.log('输入')
            console.log($(this).text())
            // 拿到商品 id
            const id = $(this).data('id')
            // 找到 info 里面的对应商品
            info[id].value = $(this).text()                    
            // 重新加载页面
            bindHtml()
            // 重新保存起来
            window.localStorage.setItem('todolist', JSON.stringify(info))
        })

        // 勾选


   




    // 渲染页面
    bindHtml()
     // 计数
     $('#todocount').html(info.length)
    // 1. 正在进行中
    function bindHtml() {
        // getinfo()
        let str1 = ''
        console.log(info.length)
        for (let i = 0; i < info.length; i++) {
            str1 += `
                <li>
                    <input type="checkbox" />
                    <p  data-id="${i+1}">${info[i].content}</p>
                    <a href="" data-id="${i+1}" >-</a>
                </li>
            `
        }
        $('#todolist').html(str1)

        // let str2 = ''

    }



})