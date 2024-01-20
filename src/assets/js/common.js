// 如果之後要寫共用function可以放在這邊

export const getImageUrl = (paths) => {
    return new URL(`../images/${paths}`, import.meta.url).href
}