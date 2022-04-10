<template>
  <common-card
    title="累计订单量"
    value="25,134,000"
  >
    <template v-slot:default>
      <v-chart :option="getOptions()" />
    </template>
    <template v-slot:footer>
      <span>昨日订单量</span>
      <span class="emphasis">200</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "@/components/common/CommonCard";
export default {
  components: {
    CommonCard,
  },
  setup() {
    const getOptions = () => {
      return {
        xAxis: {
          type: "category",
          show: false,
          // 距X轴距离
          boundaryGap: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "line",
            data: [200, 265, 167, 421, 132, 269, 110, 487, 509, 210],
            // 折线图的填充区域样式
            areaStyle: {
              color: "purple",
            },
            // 线条样式
            lineStyle: {
              width: 0,
            },
            // 点样式
            itemStyle: {
              opacity: 0,
            },
            // 曲线平整
            smooth: true,
          },
        ],
        grid: [
          {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          },
        ],
      };
    };
    return { getOptions };
  },
};
</script>
