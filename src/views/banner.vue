<template>
  <div class="Banner">
    <div class="header">
      <el-button type="primary">新增banner</el-button>
    </div>
    <div class="banner-box" v-if="list.length">
      <el-carousel height="500px" indicator-position="outside">
        <el-carousel-item v-for="item in list" :key="item.id">
          <div class="banner-img">
            <img :src="item.url" alt />

            <div class="delete-box">
              <div class="delete-btn">
                <el-button type="danger">删除</el-button>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      list: [
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          id: 1
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          id: 2
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          id: 3
        }
      ]
    };
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "banner管理",
        path: "/Banner",
        des: "本页面用于前端网站的首页的banner管理"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
.header {
  text-align: right;
  padding: 30px;
  border-bottom: 1px solid #ccc;
}
.banner-img {
  outline: 1px solid red;
  margin-right: 30px;
  width: 100%;
  height: 500px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }

  .delete-box {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    display: none;
    .delete-btn {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:hover .delete-box {
    display: block;
  }
}
</style>
