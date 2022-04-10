<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <div class="content-wrapper">
          <div class="chart-wrapper">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">45,123</div>
              <v-chart :option="searchUserOptions"></v-chart>
            </div>
            <div class="chart">
              <div class="chart-title">搜索量</div>
              <div class="chart-data">615,123</div>
              <v-chart :option="searchNumOptions"></v-chart>
            </div>
          </div>
          <div class="table-wrapper">
            <el-table :data="tableData">
              <el-table-column
                prop="rank"
                label="排名"
                width="180px"
              />
              <el-table-column
                prop="keyword"
                label="关键词"
                width="180px"
              />
              <el-table-column
                prop="count"
                label="总搜索量"
                width="180px"
              />
              <el-table-column
                prop="user"
                label="搜索用户数"
                width="180px"
              />
            </el-table>
            <el-pagination
              layout="prev, pager, next"
              :total="50"
            />
          </div>
        </div>

      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelected">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <div class="content-wrapper">
          <v-chart :option="categoryOption" />
        </div>

      </el-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "BottomView",
  setup() {
    const searchUserOptions = ref({
      xAxis: {
        type: "category",
        boundaryGap: false,
      },
      yAxis: {
        show: false,
        min: 0,
        max: 510,
      },
      series: [
        {
          type: "line",
          data: [100, 450, 360, 210, 390, 500],
          areaStyle: {
            color: "rgb(95, 187, 255, .5)",
          },
          lineStyle: {
            color: "rgb(95, 187, 255)",
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ],
      grid: [
        {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      ],
    });
    const searchNumOptions = ref({
      xAxis: {
        type: "category",
        boundaryGap: false,
      },
      yAxis: {
        show: false,
        min: 0,
        max: 510,
      },
      series: [
        {
          type: "line",
          data: [350, 210, 500, 400, 390, 500],
          areaStyle: {
            color: "rgb(95, 187, 255, .5)",
          },
          lineStyle: {
            color: "rgb(95, 187, 255)",
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ],
      grid: [
        {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      ],
    });
    const tableData = ref([
      { id: 1, rank: 1, keyword: "北京", count: 100, user: 90, range: "20%" },
      { id: 2, rank: 2, keyword: "上海", count: 200, user: 90, range: "75%" },
      { id: 3, rank: 3, keyword: "深圳", count: 300, user: 90, range: "90%" },
      { id: 4, rank: 4, keyword: "广州", count: 250, user: 90, range: "46%" },
      { id: 5, rank: 5, keyword: "南京", count: 18000, user: 90, range: "60%" },
    ]);

    const radioSelected = ref("品类");

    const categoryOption = ref({
      title: [
        {
          text: "品类分布",
          textStyle: {
            fontSize: 14,
            color: "#666",
          },
          left: 20,
          top: 20,
        },
        {
          text: "累计订单量",
          subtext: 460,
          textStyle: {
            fontSize: 14,
            color: "#666",
          },
          subtextStyle: {
            fontSize: 28,
            color: "#333",
          },
          x: "34.5%",
          y: "42.5%",
          textAlign: "center",
        },
      ],
      series: [
        {
          type: "pie",
          data: [
            {
              legendname: "粉面粥店",
              value: 22,
              percent: "15.4%",
              name: "粉面粥店 | 15.4%",
            },
            {
              legendname: "简餐便当",
              value: 92,
              percent: "64.7%",
              name: "简餐便当 | 64.7%",
            },
            {
              legendname: "汉堡披萨",
              value: 36,
              percent: "23.8%",
              name: "汉堡披萨 | 23.8%",
            },
            {
              legendname: "家常炒菜",
              value: 12,
              percent: "45.8%",
              name: "家常炒菜 | 45.8%",
            },
            {
              legendname: "火锅烧烤",
              value: 78,
              percent: "33.8%",
              name: "火锅烧烤 | 33.8%",
            },
            {
              legendname: "轻食便当",
              value: 29,
              percent: "84.8%",
              name: "轻食便当 | 84.8%",
            },
          ],
          label: {
            show: true,
            position: "outter",
            formatter: function (params) {
              return `${params.data.legendname}`;
            },
          },
          center: ["35%", "50%"],
          radius: ["45%", "60%"],
          labelLine: {
            show: true,
            showAbove: true,
            length: 5,
            length2: 3,
          },
          itemStyle: {
            borderWidth: 4,
            borderColor: "#fff",
          },
        },
      ],
      legend: {
        show: true,
        type: "scroll",
        orient: "vertical",
        left: "70%",
        top: "middle",
      },
      tooltip: {},
    });

    return {
      searchUserOptions,
      searchNumOptions,
      tableData,
      radioSelected,
      categoryOption,
    };
  },
};
</script>
<style lang="scss" scoped>
.bottom-view {
  display: flex;
  margin-top: 20px;
  .view {
    width: 50%;
    box-sizing: border-box;
    &:first-child {
      padding: 0 10px 0 0;
    }
    &:last-child {
      padding: 0 0 0 10px;
    }
    .title-wrapper {
      display: flex;
      align-items: center;
      height: 60px;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      font-size: 14px;
      padding: 20px;
      .radio-wrapper {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        padding-right: 20px;
      }
    }
    .content-wrapper {
      display: flex;
      flex-direction: column;
      height: 420px;
      .chart-wrapper {
        display: flex;
        .chart {
          flex: 1;
          padding: 0 10px;
          .chart-title {
            color: #999;
            font-size: 14px;
          }
          .chart-data {
            font-size: 22px;
            color: #333;
            font-weight: 500;
            letter-spacing: 2px;
          }
          .echarts {
            margin-top: 10px;
            height: 50px;
          }
        }
      }
      .table-wrapper {
        margin: 20px;
      }
    }
    .el-pagination {
      margin-top: 10px;
    }
  }
}
</style>
