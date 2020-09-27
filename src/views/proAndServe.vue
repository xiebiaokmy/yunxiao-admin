<template>
  <div class="proAndServe">
    <div class="header">
      <span>服务类型:</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  name: "proAndServe",
  data() {
    return {
      value: "",
      options: [
        {
          value: "1",
          label: "公关传播"
        },
        {
          value: "2",
          label: "数字化营销"
        },
        {
          value: "3",
          label: "创意设计"
        },
        {
          value: "4",
          label: "线下公关"
        },
        {
          value: "5",
          label: "营销工具"
        },
        {
          value: "-1",
          label: "全部"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.proAndServe {
  .header {
    padding: 10px 30px;
    > span {
    }
  }
}
</style>
