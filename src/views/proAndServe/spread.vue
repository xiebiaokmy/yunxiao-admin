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
        name: "公关传播",
        path: "/Spread"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
</style>