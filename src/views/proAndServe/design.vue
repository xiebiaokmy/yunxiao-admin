
<template>
  <div class="Design">
    <PAndS></PAndS>
  </div>
</template>
<script>
import PAndS from "../../components/pAndS";
export default {
  name: "Design",
  components: {
    PAndS
  },
  data() {
    return {};
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "创意设计",
        path: "/Design"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
</style>