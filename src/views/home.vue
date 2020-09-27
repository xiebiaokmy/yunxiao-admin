<template>
  <div class="home">
    <div class="nav">
      <div class="top-img">
        <img src="../../public/imgs/logo@2x.png" alt />
      </div>
      <el-menu :default-active="path" router class="el-menu-vertical-demo" :unique-opened="true">
        <el-menu-item index="/Banner">
          <span slot="title">首页banner管理</span>
        </el-menu-item>
        <el-menu-item index="/ComCase">
          <span slot="title">客户案例管理</span>
        </el-menu-item>
        <el-menu-item index="/News">
          <span slot="title">新闻管理</span>
        </el-menu-item>
        <el-submenu index="11">
          <template slot="title">
            <span>产品服务</span>
          </template>
          <el-menu-item index="/Spread">公关传播</el-menu-item>
          <el-menu-item index="/Marketing">数字化营销</el-menu-item>
          <el-menu-item index="/Design">创意设计</el-menu-item>
          <el-menu-item index="/Offline">线下公关</el-menu-item>
          <el-menu-item index="/Monitor">营销工具</el-menu-item>
        </el-submenu>
        <el-menu-item index="/Team">
          <span slot="title">团队管理</span>
        </el-menu-item>
        <el-menu-item index="/Data">
          <span slot="title">数据收集</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <div class="header">
        <div>
          <span
            class="pannel-name"
            :class="index==pannelName.length-1?'last-pannel-name':''"
            v-for="(item,index) in pannelName"
            :key="item.path"
          >
            <span v-if="index != 0">/</span>
            <router-link :to="item.path">{{item.name}}</router-link>
            <p class="explain" v-if="pannelName[0].des">{{pannelName[0].des}}</p>
          </span>
        </div>

        <div class="user">
          <img src="../../public/imgs/user-icon.png" alt />
          <span>{{userName}}</span>
          <span class="login-out" @click="showLoginOut">退出</span>
        </div>
      </div>
      <div class="r-content">
        <div class="auto-content">
          <router-view />
        </div>
      </div>
    </div>
    <!-- <Mydialog
      title="退出登录"
      ref="loginOut"
      :colorType="true"
      lastText="退出"
      @saveHandle="saveLoginOut"
    >
      <p>您确定要退出登录吗？</p>
    </Mydialog>-->
  </div>
</template>

<script>
// import Mydialog from "../components/dialog";
export default {
  name: "Index",
  components: {
    // Mydialog
  },
  data() {
    return {
      pannelName: [],
      userName: "张三",
      path: "/Banner"
    };
  },
  methods: {
    setPannelName(name) {
      this.pannelName = name;
      sessionStorage.setItem("pannelName", JSON.stringify(name));
      this.path = name[0].path;
    },
    //退出登录
    saveLoginOut() {
      this.$post("/w10/auth/logout", {}).then(datas => {
        if (datas.code == 200) {
          this.$router.push("/");
        }
      });
    },
    //显示退出弹窗
    showLoginOut() {
      this.$refs.loginOut.show();
    }
  },
  mounted() {
    this.path = this.$route.path;
    let name = JSON.parse(sessionStorage.getItem("pannelName")) || [
      {
        name: "助手管理",
        path: "/AssistantManager",
        des:
          "策略说明：扫描二维码添加小助手为好友，把小助手拉入想管理的群后在群内发一条消息，在“个人中心--新群开通”操作开通，小助手即可生效"
      }
    ];
    this.pannelName = name;
    let userName = localStorage.getItem("name");
    this.userName = userName;
  }
};
</script>
<style lang="less" scoped>
.home {
  display: flex;
  justify-content: space-between;
  .nav {
    width: 246px;
    background: #2e2f30;
    min-height: 100vh;
    flex-shrink: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .top-img {
      height: 90px;
      line-height: 90px;
      padding-left: 27px;
      box-sizing: border-box;
    }
    > ul {
      background: #2e2f30;
      border-right: none !important;
      /deep/.el-submenu__title {
        color: #8c9491;
        &:hover {
          background: transparent;
        }
      }
      /deep/ .el-menu {
        background: transparent;
        color: #ffffff;
      }
      /deep/ .el-menu-item {
        color: #8c9491;
        border-left: 6px solid transparent;
      }
      /deep/ .el-menu-item:hover,
      .el-menu-item:focus {
        background: transparent;
        color: #fff;
      }
      /deep/ .el-menu-item.is-active {
        border-left: 6px solid #07c97d;
        background-image: linear-gradient(
          270deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(7, 201, 125, 0.15) 100%
        );
        color: #fff;
      }
      // /deep/ .el-submenu.is-active {
      //   > .el-submenu__title {
      //     background-image: linear-gradient(
      //       270deg,
      //       rgba(255, 255, 255, 0) 0%,
      //       rgba(7, 201, 125, 0.15) 100%
      //     );
      //   }
      // }
      > li {
        img {
          margin-right: 18px;
        }
      }
    }
    .navImg {
      width: 16px;
      height: 16px;
    }
  }
  > .content {
    flex: 1;
    box-sizing: border-box;
    margin-left: 246px;
    overflow: hidden;
    min-width: 954px;
    min-height: 100vh;
    .header {
      height: 90px;
      // line-height: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px 0 rgba(35, 51, 83, 0.08);
      padding: 0 30px;
      color: #24262a;
      .pannel-name {
        font-size: 24px;
        a {
          &:hover {
            color: #07c97d;
          }
          color: #24262a;
        }
        .explain {
          line-height: normal;
          font-size: 16px;
          color: #7b8292;
          margin-top: 10px;
        }
      }
      .last-pannel-name {
        a {
          &:hover {
            color: #24262a;
          }
        }
      }
      .login-out {
        margin-left: 16px;
        cursor: pointer;
        &:hover {
          color: #07c97d;
        }
      }
      .user {
        min-width: 200px;
        text-align: right;
        img {
          width: 18px;
          height: 20px;
          vertical-align: -3px;
          margin-right: 5px;
        }
      }
    }
    .r-content {
      box-sizing: border-box;
      min-height: calc(100vh - 90px);
      padding: 30px 34px;
      background: #f4f4f4;
      .auto-content {
        min-height: calc(100vh - 150px);
        background: #fff;
      }
    }
  }
  /deep/.el-submenu .el-menu-item {
    padding-left: 50px !important;
  }
}
</style>
