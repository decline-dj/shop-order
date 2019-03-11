<template>
  <div>
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu
        active-name="1-2"
        theme="dark"
        width="auto"
        :open-names="['1']"
      >
        <Submenu name="1" v-for="(item,index) in menus"
      :key="index"
      :index="`${index + 1}`">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{item.title}}
          </template>

         <router-link
          :to="`${item.path}${subItem.path}`"
          v-for="(subItem, subIndex) in item.group"
          :key="subIndex"
        >
          <MenuItem name="1-1" :index="`${index + 1}-${subIndex + 1}`">{{subItem.title}}</MenuItem>
        </router-link>



        </Submenu>
      </Menu>
    </Sider>
  </div>
</template>



<script>
export default {
    data() {
    return {
      menus: [
        {
          path: "/admin",
          title: "购物商城",
          group: [
            { path: "/goods-list", title: "商品列表" },
            { path: "/category", title: "栏目管理" }
          ]
        },
        {

          path: "/admin",
          title: "会员管理",
          group: [{ path: "/user", title: "会员列表" }]
        },
        {

          path: "/admin",
          title: "商城订单",
          group: [{ path: "/order", title: "订单管理" }]
        }
      ]
    };
  },
}
</script>


<style>
    
</style>