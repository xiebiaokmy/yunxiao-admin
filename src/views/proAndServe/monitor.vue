
<template>
  <div class="Monitor">
    <PAndS></PAndS>
  </div>
</template>
<script>
import PAndS from "../../components/pAndS";
export default {
  name: "Monitor",
  components: {
    PAndS
  },
  data() {
    return {};
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "营销工具",
        path: "/Monitor"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
</style>