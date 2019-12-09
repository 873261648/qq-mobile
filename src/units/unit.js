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

export {
    antiShake
}
