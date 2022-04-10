<template>
  <div class="sales-view">
    <el-card
      shadow="hover"
      :body-style="{ padding: '0 0 20px 0' }"
    >
      <template v-slot:header>
        <div class="
      menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="menuSelectHandler"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group
              v-model="selectedRadio"
              size="small"
              @change="radioChangeHandler"
            >
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
            </el-radio-group>
            <div>
              <el-date-picker
                v-model="pickedDate"
                class="date-picker"
                size="small"
                type="daterange"
                range-separator="至"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                :unlink-panels="false"
                :shortcuts="shortcuts"
              />
            </div>
          </div>
        </div>
      </template>
      <div class="sales-view-chart-wrapper">
        <v-chart :option="chartOptions" />
        <div class="sales-view-list">
          <div class="sales-view-title">排行榜</div>
          <div class="sales-view-list-item-wrapper">
            <div
              class="list-item"
              v-for="item in rankData"
              :key="item.no"
            >
              <div :class="['list-item-no', +item.no < 4 ? 'top-no': '']">{{item.no}}</div>
              <div class="list-item-name">{{item.name}}</div>
              <div class="list-item-money">{{item.sales}}</div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SalesView",

  setup() {
    const activeIndex = ref("1");
    const selectedRadio = ref("今日");
    const menuSelectHandler = (index) => {
      activeIndex.value = index;
    };
    const radioChangeHandler = (label) => {
      selectedRadio.value = label;
    };
    // 时间日期选择器快捷方式
    const pickedDate = ref("");
    const shortcuts = [
      {
        text: "最近一周",
        value: () => {
          const start = new Date();
          const end = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          return [start, end];
        },
      },
      {
        text: "最近一个月",
        value: () => {
          const start = new Date();
          const end = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          return [start, end];
        },
      },
    ];

    const chartOptions = ref({
      title: {
        text: "年度销售额",
        textStyle: {
          fontSize: "12px",
          color: "#666",
        },
        left: 25,
        top: 20,
      },
      xAxis: {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: ["#eee"],
            type: "dotted",
          },
        },
      },
      series: [
        {
          type: "bar",
          barWidth: "35%",
          data: [200, 250, 123, 341, 450, 320, 100, 250, 123, 341, 450, 320],
        },
      ],
      grid: [
        {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50,
        },
      ],
      color: ["rgb(187, 46, 44)"],
    });
    const rankData = ref([
      {
        no: 1,
        name: "麦当劳",
        sales: "311,212,100",
      },
      {
        no: 2,
        name: "肯德基",
        sales: "211,2112,100",
      },
      {
        no: 3,
        name: "老乡鸡",
        sales: "91,172,109",
      },
      {
        no: 4,
        name: "德约堡",
        sales: "1,212,150",
      },
      {
        no: 5,
        name: "华莱士",
        sales: "1,112,189",
      },
      {
        no: 6,
        name: "回味",
        sales: "815,100",
      },
      {
        no: 7,
        name: "兰州拉面",
        sales: "642,123",
      },
      {
        no: 8,
        name: "德克士",
        sales: "442,123",
      },
    ]);
    return {
      // header
      activeIndex,
      menuSelectHandler,
      selectedRadio,
      radioChangeHandler,
      pickedDate,
      shortcuts,
      // 图表
      chartOptions,
      rankData,
    };
  },
};
</script>
<style lang="scss">
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    position: relative;
    display: flex;
    .sales-view-menu {
      width: 100%;
      padding-left: 20px;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .date-picker {
        margin-left: 20px;
      }
    }
  }
}
.sales-view-chart-wrapper {
  display: flex;
  height: 270px;
  .echarts {
    flex: 0 0 75%;
    width: 70%;
    height: 100%;
  }
  .sales-view-list {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .sales-view-title {
      margin-top: 20px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }
    .sales-view-list-item-wrapper {
      margin-top: 15px;
      .list-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        height: 20px;
        padding: 6px 20px 6px 0;
        .list-item-no {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          color: #333;
        }
        .top-no {
          background: #000;
          border-radius: 50%;
          color: #fff;
          font-weight: 500;
        }
        .list-item-name {
          margin-left: 10px;
          color: #333;
        }
        .list-item-money {
          flex: 1;
          text-align: right;
        }
      }
    }
  }
}
</style>
