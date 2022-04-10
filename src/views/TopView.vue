<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <total-sales></total-sales>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-orders></total-orders>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <total-users></total-users>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <today-users></today-users>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../components/TotalSales.vue";
import TotalOrders from "../components/TotalOrders.vue";
import TotalUsers from "../components/TotalUsers.vue";
import TodayUsers from "../components/TodayUsers.vue";
export default {
  components: { TotalSales, TotalOrders, TotalUsers, TodayUsers },
  name: "TopView",
};
</script>
<style scoped>
</style>
