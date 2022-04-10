<template>
  <div class="common-card">
    <div class="title">{{title}}</div>
    <div class="value">{{value}}</div>
    <div class="chart">
      <slot name="default"></slot>
    </div>
    <div class="line"></div>
    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    cahrt: String,
    line: String,
    total: String,
  },
};
</script>
<style scoped>
.title {
  font-size: 12px;
  color: #999;
}
.value {
  font-size: 25px;
  color: #000;
  margin-top: 5px;
  letter-spacing: 1px;
}
.chart {
  height: 50px;
}
.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}
.total {
  font-size: 12px;
  color: #666;
}
</style>
<style>
.emphasis {
  color: #333;
  font-weight: 700;
  margin-left: 5px;
}
.increase {
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: transparent transparent red transparent;
  margin: 0 0 3px 5px;
}
.decrease {
  width: 0;
  height: 0;
  border-width: 4px;
  border-style: solid;
  border-color: green transparent transparent transparent;
  margin: 3px 0 0 5px;
}
</style>
