
<template>
  <div class="layout">
      <app-aside></app-aside>
    <Layout :style="{marginLeft: '200px'}">
      <app-header></app-header>
      <Content :style="{padding: '0 16px 16px'}">
        <app-bread></app-bread>
        <router-view></router-view>
      </Content>
    </Layout>
  </div>
</template>



<script>


import Aside from "../components/Aside";
import Header from "../components/Header";
import Bread from "../components/Bread";

export default {
  name: "admin-index",

  components: {
    "app-aside": Aside,
    "app-header": Header,
    "app-bread": Bread
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>