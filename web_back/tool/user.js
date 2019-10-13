// 用户可能存在多种请求功能：
var user = {
    // login登录功能
    login: function (option) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN, //url地址是从config。js中获取的,要学会习惯
            // 用户传入的请求参数
            data: option.data,
            // 用户的传入的回调函数
            success: option.callback
        });
    },
    // logout首页突出
    logout: function (option) {
        $.ajax({
            type: 'post',
            url: USER_LOGOUT,
            success: option.callback
        });
    },
    // getuser首页用户信息获取接口
    getuser: function (option) {
        $.ajax({
            url: USER_GETINFO,
            success: option.callback
        });
    },
};