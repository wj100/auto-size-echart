import * as echarts from "echarts";

/**
 * 自适应Echarts，可改变容器与字体，传入echart option组成的对象 key为容器id
 * {
 *      id_0:Option,
 *      id_1:Option
 * }
 */
class AutoSizeEchart {
  constructor(options) {
    this._options = options;
    this._ids = Object.keys(options);
    this._charts = {};
    window.addEventListener(
      "resize",
      this.throttle(this.resizeWindow.bind(this), 200)
    );
  }
  /* 节流函数 */
  throttle(fn, delay) {
    let timer = null;
    return function() {
      var context = this,
        args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    };
  }
  /* 根据屏幕计算fontsize */
  fontSize(res) {
    let clientWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = clientWidth / 1920;
    return res * fontSize;
  }
  /* 遍历option  调用fontsize() */
  changeFontSize(s) {
    const changeList = [
      "fontSize",
      "itemWidth",
      "itemHeight",
      "symbolSize",
      "width",
      "itemGap",
      "length",
      "top",
      "bottom",
      "margin"
    ];
    for (let i in s) {
      if (typeof s[i] == "object") {
        this.changeFontSize(s[i]);
      } else {
        if (changeList.includes(i)) {
          s[i] = this.fontSize(s[i]);
        }
      }
    }
    return s;
  }
  /*每次重新计算fontsize  返回options */
  options() {
    const copy = JSON.parse(JSON.stringify(this._options));
    return this.changeFontSize(copy);
  }
  resizeWindow() {
    for (let id of this._ids) {
      this._charts[id].resize();
    }
    this.init();
  }
  init() {
    let ids = this._ids;
    for (let id of ids) {
        const ele=document.getElementById(id)
        if(!ele){
           throw new Error('[auto size echart] element is not find by id '+id)
        }
      this._charts[id] = echarts.init(ele);
      this._charts[id].setOption(this.options()[id]);
    }
  }
}

export default AutoSizeEchart;
