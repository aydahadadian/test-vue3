<template>
  <a-layout style="min-height: 100vh" class="p-6">
    <a-layout-sider class="rounded-md shadow-md">
      <div class="logo" />
      <a-menu class="!h-[100%]" v-model:selectedKeys="selectedKeys" :theme="mode" mode="inline">
        <a-menu-item v-for="item in List" :key="item.key">
          <RouterLink :to="`/${item.title}`"
            ><span>{{ item.title }}</span></RouterLink
          >
        </a-menu-item>
        <a-menu-item class="flex items-center" key="7" @click="setAuth(false)"
          ><div class="flex items-center"><LogoutOutlined /><span>Logout</span></div>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="mx-[1rem] rounded-md shadow-sm" :class="`${bc} ${color}`">
        <router-view @setTheme="$emit('setTheme')" :bc="bc"></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { PieChartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons-vue'
import { inject, onMounted, ref } from 'vue'

const selectedKeys = ref<string[]>(['1'])
const { mode, bc, color } = inject<any>('theme')
const { setAuth } = inject<any>('auth')

const List = [
  { key: '1', title: 'dashboard', icon: PieChartOutlined },
  { key: '2', title: 'todos', icon: UserOutlined },
  { key: '3', title: 'weather', icon: PieChartOutlined },
  { key: '4', title: 'profile', icon: UserOutlined }
]

onMounted(() => {
  const path = window.location.pathname
  const pathName = path.slice(1)

  if (pathName) {
    const listItem: any = List.find((item: any) => item.title === pathName)
    selectedKeys.value = [listItem.key]
  }
})
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
