
<template>
  <common-card
    title="今日交易用户"
    value="17,310,200"
  >
    <template v-slot:default>
      <v-chart :option="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.37%</span>
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
          data: [
            "00:00",
            "00:10",
            "02:45",
            "03:20",
            "04:50",
            "05:30",
            "06:12",
            "08:25",
            "09:12",
            "10:40",
          ],
          type: "category",
          show: false,
        },
        yAxis: {
          show: false,
        },
        series: [
          {
            type: "bar",
            data: [200, 265, 167, 421, 132, 269, 110, 487, 509, 210],
            barWidth: "60%",
          },
        ],
        grid: [
          {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
        ],
        tooltip: {
          show: true,
        },
      };
    };
    return { getOptions };
  },
};
</script>
