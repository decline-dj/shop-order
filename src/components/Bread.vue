<template>
  <div>
    <Breadcrumb :style="{margin: '16px 0'}">
      <BreadcrumbItem v-for="(item,index) in breadcrumb"
        :key="index"
        :to="{ path: item.path }">{{item.name}}</BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>


<script>
export default {
    data() {
    return {};
  },
  computed: {
    breadcrumb() {
      const { matched } = this.$route;
      return matched.map(v => {
        return { 
          name: v.meta,
          path: v.path
        };
      });
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
}
</script>


<style>
    
</style>