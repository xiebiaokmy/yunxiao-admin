const __dev = 'http://release-test-restful.shixincube.cn',
    // 测试环境（因为现在后台是北京开发的所以没有开发地址了只有通过测试环境连，发布测试版的时候需要把生产地址改为测试地址，发正式的时候又要改为正式地址）
    // __production = 'http://114.242.205.179:9301' // 测试环境
    // __production = 'http://release-test-restful.shixincube.cn' // 测试环境
    __production = 'https://release-api.spap.com' // 生产环境

export default {
    HOST: process.env.NODE_ENV === 'development' ? __dev : __production,
}