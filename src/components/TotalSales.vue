<template>
  <common-card
    title="累计销售额"
    value="$ 10000"
  >
    <template v-slot:default>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">7.33%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">7.33%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日销售额</span>
      <span class="emphasis">$ 100</span>
    </template>
  </common-card>
</template>

<script>
import CommonCard from "@/components/common/CommonCard";
export default {
  components: {
    CommonCard,
  },
};
</script>
<style lang="scss" scoped>
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 12px;
    margin-top: 3px;
    color: #666;
  }
}
</style>
