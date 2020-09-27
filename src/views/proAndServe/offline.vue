
<template>
  <div class="Offline">
    <PAndS></PAndS>
  </div>
</template>
<script>
import PAndS from "../../components/pAndS";
export default {
  name: "Offline",
  components: {
    PAndS
  },
  data() {
    return {};
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "线下公关",
        path: "/Offline"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
</style>