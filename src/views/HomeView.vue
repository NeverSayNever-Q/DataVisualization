<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import BottomView from './BottomView.vue';
import MapView from './MapView.vue';
import SalesView from './SalesView.vue';
import TopView from './TopView.vue';
export default {
  components: { SalesView, TopView, BottomView, MapView },
  name: "HomeView",
};
</script>
<style>
.home {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px;
  background-color: #eee;
  box-sizing: border-box;
}
</style>
