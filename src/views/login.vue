<template>
  <div class="login">
    <div class="login-bg">
      <img src="../../public/imgs/login-bg.png" alt />
    </div>
    <div class="content">
      <div class="header">登录社群管家系统</div>
      <div class="tips">
        登录即代表你已阅读并同意
        <a href="#">服务协议</a>和
        <a href="#">隐私政策</a>
      </div>
      <div class="user-name">
        <el-input
          class="user-name-input"
          v-model.trim="userName"
          @focus="userFocus = true"
          @blur="userFocus = false"
          maxlength="20"
          placeholder="请输入账号"
        ></el-input>
        <span :class="{'fouce-color':userFocus}">
          账号
          <b>|</b>
        </span>
      </div>
      <div class="pass-word">
        <el-input
          class="pass-word-input"
          placeholder="请输入密码"
          v-model.trim="password"
          maxlength="20"
          @focus="passFocus = true"
          @blur="passFocus = false"
          @keyup.enter.native="login"
          show-password
        ></el-input>
        <span :class="{'fouce-color':passFocus}">
          密码
          <b>|</b>
        </span>
      </div>
      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userName: "admin",
      password: "18588888888",
      userFocus: false,
      passFocus: false
    };
  },
  methods: {
    login() {
      if (!this.userName) {
        this.$message.error("请输入账号");
        return false;
      }
      if (!this.password) {
        this.$message.error("请输入密码");
        return false;
      }
      let parmas = {
        password: this.$md5(this.password),
        username: this.userName
      };
      this.$post("auth/login", parmas).then(datas => {
        console.log(datas);
        if (datas.code == 200) {
          const { data } = datas;
          localStorage.setItem("token", data.token);
          localStorage.setItem("ticket", data.ticket);
          localStorage.setItem("name", data.user.name);
          localStorage.setItem("activeTime", data.user.activeTime);
          this.$router.push("/Home");
        } else if (datas.code == 10001) {
          this.$message.error("账号或密码输入错误");
        } else if (datas.code == 10002) {
          this.$message.error("此账号已被管理员禁用");
        }
      });
    }
  },
  mounted() {
    localStorage.removeItem("token");
    localStorage.removeItem("ticket");
  }
};
</script>
<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  .login-bg {
    width: 684px;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 77px;
    .header {
      font-family: MicrosoftYaHei-Bold;
      font-weight: 600;
      font-size: 35px;
      color: #072d4f;
      letter-spacing: 0;
      margin-bottom: 10px;
    }
    .tips {
      font-size: 18px;
      color: #9199b6;
      letter-spacing: 0;
      margin-bottom: 65px;
      a {
        color: #07c97d;
      }
    }
    .user-name,
    .pass-word {
      width: 500px;
      height: 60px;
      margin-bottom: 40px;
      position: relative;
      /deep/ .el-input__inner {
        color: #9199b6;
        display: inline-block;
        line-height: 60px;
        width: 100%;
        height: 60px;
        font-size: 18px;
        padding-left: 78px;
      }
      > span {
        top: 0;
        left: 20px;
        width: 110px;
        position: absolute;
        display: inline-block;
        height: 60px;
        line-height: 60px;
        color: #9199b6;
      }
      b {
        margin-left: 8px;
      }
      .fouce-color {
        color: #07c97d;
      }
    }
    .login-btn {
      margin-top: 140px;
      width: 215px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 22px;
      color: #ffffff;
      background: #07c97d;
      border-radius: 4px;
      box-shadow: 0px 9px 10px -5px #07c97d;
      cursor: pointer;
    }
  }
}
</style>