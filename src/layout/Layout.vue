<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" >
        <a-menu-item v-for="item in List" :key="item.key">
          <RouterLink :to="`/${item.title}`"
            ><span>{{ item.title }}</span></RouterLink
          >
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header />
      <a-layout-content class="bg-white m-[1rem]">
        <!-- <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb> -->
        <router-view></router-view>
      </a-layout-content>

    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import router from '@/router';
import { PieChartOutlined, UserOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'



const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])

const List = [
  { key: '1', title: 'dashboard', icon: PieChartOutlined },
  { key: '2', title: 'todos', icon: UserOutlined },
  { key: '3', title: 'weather', icon: PieChartOutlined },
  { key: '4', title: 'profile', icon: UserOutlined }
]


</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
