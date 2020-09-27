const __dev = 'http://47.93.237.191:44444',
    // __production = 'http://release-test-restful.shixincube.cn' // 测试环境
    __production = 'https://release-api.spap.com' // 生产环境

export default {
    HOST: process.env.NODE_ENV === 'development' ? __dev : __production,
}