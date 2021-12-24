<template>
  <div id="app">
    <h1>auto-size-echart</h1>
    <div id="chart1" class="box"></div>
    <div id="chart2" class="box"></div>
  </div>
</template>
<script>
import AutoSizeEchart from './lib/index';
console.log(AutoSizeEchart);
export default {
  name: 'demo',
  data() {
    return {
      options: {
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
        chart2: {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    setEchart() {
      let autoSizeEchart = new AutoSizeEchart(this.options);
      autoSizeEchart.init();
    },
  },
  mounted() {
    this.setEchart();
  },
};
</script>
<style scoped>
.box {
  width: 90vw;
  height: 50vw;
  border: 1px solid red;
}
</style>