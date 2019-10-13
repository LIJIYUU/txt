// 这个文件用来保存每一个页面中使用的数据信息，例如接口地址
// baseUrl中保存的是基地址
var baseUrl = 'http://localhost:8000';
// 后面的变量中保存的是每个接口的地址
var USER_LOGIN = baseUrl+'/admin/login';//登录页登录接口
var USER_LOGOUT = baseUrl+'/admin/logout';//首页退出登录接口
var USER_GETINFO = baseUrl+'/admin/getuser';//首页用户信息获取接口