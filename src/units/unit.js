// 防抖
let timer

function antiShake (second = 500) {
    clearTimeout(timer)
    return new Promise((resolve, reject) => {
        timer = setTimeout(() => {
            resolve()
        }, second)
    })
}

// 时间转时间戳
function dateStamp (str_time) {
    if (str_time === '') {
        return str_time
    }
    let new_str = str_time.replace(/:/g, '-')
    new_str = new_str.replace(/ /g, '-')
    let arr = new_str.split('-')
    let datum = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]))
    return datum.getTime()
}

// 时间戳转时间
function timeStampStr (date) {
    if (!date) return '--'
    date = new Date(date)
    let Y = date.getFullYear()
    let M = date.getMonth() + 1
    let D = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    return Y + '-' + fill0(M) + '-' + fill0(D) + ' ' + fill0(h) + ':' + fill0(m) + ':' + fill0(s)
}

// 时间格式化
function timeFormat (date) {
    if (typeof date !== 'number') return '';
    date = new Date(date);
    let today = new Date().getDate();
    if (date.getDate() === today) return `${fill0(date.getHours())}:${fill0(date.getMinutes())}`;
    if (today - date.getDate() === 1) return '昨天';
    if (today - date.getDate() === 2) return '前天';
    return `${fill0(date.getFullYear())}-${fill0(date.getMonth() + 1)}-${fill0(date.getDate() + 1)}`;
}

function timeStampStrYMD (date) {
    if (!date) return '--'
    date = new Date(date)
    let Y = date.getFullYear()
    let M = date.getMonth() + 1
    let D = date.getDate()
    return Y + '-' + fill0(M) + '-' + fill0(D)
}

function fill0 (num) {
    return num < 10 ? '0' + num : num
}

export {
    antiShake,
    dateStamp,
    timeStampStr,
    timeStampStrYMD,
    timeFormat
}
