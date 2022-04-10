import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/style/common.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import ECharts from 'vue-echarts'
import { use } from "echarts/core";

// 手动引入 ECharts 各模块来减小打包体积
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    BarChart,
    LineChart,
    CustomChart,
    PieChart
} from 'echarts/charts'
import {
    TitleComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components'

use([
    CanvasRenderer,
    BarChart,
    LineChart,
    PieChart,
    CustomChart,
    TitleComponent,
    GridComponent,
    TooltipComponent,
    LegendComponent
]);

const app = createApp(App).use(store).use(router).use(ElementPlus, { locale: zhCn });
app.component('v-chart', ECharts);
app.mount('#app');
