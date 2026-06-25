/*
  water-store.js
  ------------------------------------------
  这是一个公共的"水量存取"小模块。
  index.html(小镇主页)和 ice-pomodoro.html(冰块番茄钟)
  都会引入这个文件,所以两边看到的水量永远是同一份数据。

  原理很简单:
  浏览器自带一个叫 localStorage 的小本子,可以存简单的数据,
  关掉网页、刷新网页都不会丢,除非用户自己清浏览器数据。
  我们把"水量"这个数字存在这个本子里,key(本子上的标签名)
  叫 'studyTown.water'。

  以后如果你想加别的资源(比如"经验值""金币"),
  可以照着这个文件的样子,再写一个 xxx-store.js。
*/

// 本子上用来标记"水量"这条数据的标签名,不要和别的数据重名
const WATER_KEY = 'studyTown.water';

/**
 * 读取当前水量
 * 如果本子上还没有记录(第一次用),默认给 0
 */
function getWater() {
  const saved = localStorage.getItem(WATER_KEY);
  return saved === null ? 0 : Number(saved);
}

/**
 * 增加水量,并把新的总数写回本子
 * @param {number} amount 要增加多少滴水
 * @returns {number} 增加后的新总量
 */
function addWater(amount) {
  const newTotal = getWater() + amount;
  localStorage.setItem(WATER_KEY, newTotal);
  return newTotal;
}

/**
 * 把某个显示水量的元素,自动同步成当前真实水量
 * 用法: 在页面里找到一个 <span id="waterCount"></span>
 *      然后调用 renderWaterTo('waterCount')
 * @param {string} elementId 要显示水量的那个 HTML 元素的 id
 */
function renderWaterTo(elementId) {
  const el = document.getElementById(elementId);
  if (el) {
    el.textContent = getWater();
  }
}
