# auto-size-echart  

> 根据容器大小自动缩放echarts
>
## 本地测试
App.vue为测试页面

```bash
git clone https://github.com/wj100/auto-size-echart.git

yarn

yarn dev
```
## 使用方法

###  1. 安装



```bash
yarn add auto-size-echart
```
###  1. 使用
```js
import AutoSizeEchart from 'auto-size-echart';
//options对象的键对应容器id
const options={
    chart1: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
            },
          ],
        },
}
 let autoSizeEchart = new AutoSizeEchart(options);
 autoSizeEchart.init();
```

### 3.Attributes

|     参数     |  类型   |                    描述                     |
| :----------: | :-----: | :-----------------------------------------: |
|     option     | object |     options对象的键对应容器id     |
