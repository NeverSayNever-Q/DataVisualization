<template>
  <common-card
    title="累计用户数"
    value="213,310,200"
  >
    <template v-slot:default>
      <v-chart :option="getOptions()"></v-chart>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比</span>
        <span class="emphasis">135.89%</span>
        <div class="increase"></div>
        <span class="month">月同比</span>
        <span class="emphasis">194.19%</span>
        <div class="increase"></div>
      </div>

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
          show: false,
        },
        yAxis: {
          type: "category",
          show: false,
        },
        series: [
          {
            type: "bar",
            stack: "总数",
            data: [100],
            barWidth: 10,
            itemStyle: {
              color: "#45c946",
            },
          },
          {
            type: "bar",
            stack: "总数",
            data: [200],
            barWidth: 10,
            itemStyle: {
              color: "#eee",
            },
          },
          {
            type: "custom",
            stack: "总量",
            data: [100],
            renderItem: (params, api) => {
              const value = api.value(0);
              // 计算目标坐标系
              const endPoint = api.coord([value, 0]);

              return {
                type: "group",
                position: endPoint,
                children: [
                  {
                    type: "path",
                    shape: {
                      d: "M511.999488 819.413462 72.8374 204.586538 951.1626 204.586538Z",
                      x: -5,
                      y: -20,
                      width: 10,
                      height: 10,
                    },
                    style: {
                      fill: "green",
                    },
                  },
                  {
                    type: "path",
                    shape: {
                      d: "M951.1626 819.412438 72.8374 819.412438 511.999488 204.586538Z",
                      x: -5,
                      y: 10,
                      width: 10,
                      height: 10,
                    },
                    style: {
                      fill: "green",
                    },
                  },
                ],
              };
            },
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
      };
    };
    return { getOptions };
  },
};
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  .month {
    margin-left: 20px;
  }
}
</style>
