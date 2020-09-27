import CryptoJS from "crypto-js";
const Gutils = {
    loading: null,
    /**
     * 生成UUId
     * @returns {string}
     */
    getUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            let r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    },
    getEncryptKey(message, secret) {
        let hash = CryptoJS.HmacSHA256(message, secret);
        return CryptoJS.enc.Hex.stringify(hash);
    },
    md5(str) {
        let crypto = require("crypto");
        let md5 = crypto.createHash("md5");
        md5.update(str);
        return md5.digest("hex");
    },
    // 分割字符串返回数组对象
    splitStringReturnArr(string, type) {
        if (string) {
            let arr = string.split(type);
            let res = []
            for (let i = 0; i < arr.length; i++) {
                let obj = {};
                obj.url = arr[i];
                obj.name = Date.now();
                res.push(obj);
            }
            return res;
        } else {
            return []
        }
    },
    /**
  * @formatTime 时间格式处理
  * @param {Object} date  需要处理的时间对象，默认为当前时间
  * @param {Strging} type 需要处理的时间格式 
  * @return {String} 处理后的时间字符串
  *  'yyyy-MM-dd hh:mm:ss 星期w' => '2019-07-19 14:50:28 星期5'
  */
    formatTime(date = new Date(), type = 'yyyy-MM-dd') {
        (typeof date === 'string' || typeof date === 'number') && (date = new Date(date))

        let w = {
            '0': '日',
            '1': '一',
            '2': '二',
            '3': '三',
            '4': '四',
            '5': '五',
            '6': '六',
        };

        let d = {
            'year': date.getFullYear(),
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds(),
            'w+': w[date.getDay()]
        }
        // 年份格式特殊，先转化
        if (/(y+)/.test(type)) {
            type = type.replace(RegExp.$1, ('' + d['year']).substr(4 - RegExp.$1.length));
        }
        // 根据传入格式依次转化
        for (let s in d) {
            if (new RegExp('(' + s + ')').test(type)) {
                let v = '' + d[s], t = RegExp.$1;
                type = type.replace(t, (t.length === 1 ? v : ('0'.repeat(t.length - v.length) + v)));
            }
        }
        return type;
    },
    getFileType(url) {
        let arr = url.split('.');
        return arr[arr.length - 1].toLowerCase();
        // return arr[arr.length - 1];
    }
};
export default Gutils;