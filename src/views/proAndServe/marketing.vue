<template>
  <div class="Spread">
    <PAndS></PAndS>
  </div>
</template>
<script>
import PAndS from "../../components/pAndS";
export default {
  name: "Spread",
  components: {
    PAndS
  },
  data() {
    return {};
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "数字化营销",
        path: "/Marketing"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
</style>