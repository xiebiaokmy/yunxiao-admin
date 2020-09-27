<template>
  <div class="Team">
    <header>
      <div class="isShow">
        <span>前端页面是否显示:</span>
        <el-switch v-model="value" active-color="#409EFF" inactive-color="#DCDFE6"></el-switch>
      </div>
      <el-button type="primary" @click="addPeople">新增人员</el-button>
    </header>
    <el-table :data="tableData">
      <el-table-column prop="date" label="头像">
        <template slot-scope="scope">
          <span class="imgs">
            <img :src="scope.row.url" alt />
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="职位"></el-table-column>
      <el-table-column prop="brief" label="简介" show-overflow-tooltip></el-table-column>
      <el-table-column prop="address" label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增人员" :close-on-click-modal="false" :visible.sync="isShowDialog">
      <div class="each cover">
        <b>*</b>
        <span>头像:</span>
        <img :src="serveObj.cover" alt="图标" v-if="serveObj.cover" />
        <a href="javascript:;" class="file">
          {{serveObj.cover?'重新上传':'选择文件'}}
          <input type="file" name id />
        </a>
      </div>
      <div class="each">
        <b>*</b>
        <span>职位:</span>
        <el-input v-model="serveObj.title" placeholder="请输入职位"></el-input>
      </div>
      <div class="each">
        <b>*</b>
        <span>简介:</span>
        <el-input v-model="serveObj.brief" placeholder="请输入简介"></el-input>
      </div>
      <div class="btns">
        <div class="btn">
          <el-button type="info">取消</el-button>
        </div>
        <div class="btn">
          <el-button type="primary">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Team",
  data() {
    return {
      isShowDialog: false,
      value: false,
      serveObj: {
        cover:
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        title: "我是标题",
        brief: "我是简介",
        content: ""
      },
      tableData: [
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          title: "搜索优化",
          brief: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          title: "搜索优化1",
          brief: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          title: "搜索优化2",
          brief: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
        },
        {
          url:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
          title: "搜索优化3",
          brief: "为客户提供生态式的营销解决方案，让其在行业内占据领先地位"
        }
      ]
    };
  },
  methods: {
    addPeople() {
      this.isShowDialog = true;
    }
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "团队管理",
        path: "/Team"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
.Team {
  padding: 0 30px;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: right;
    padding: 10px 30px 10px 10px;
    border-bottom: 1px solid #ccc;
    .isShow {
      margin-right: 20px;
    }
  }
  .imgs {
    width: 80px;
    height: 80px;
    img {
      width: 80px;
      height: 80px;
    }
  }
  .each {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    b {
      color: #fe6972;
    }
    > span {
      display: inline-block;
      width: 60px;
      margin-right: 20px;
    }
    > img {
      width: 80px;
      height: 80px;
      margin-right: 10px;
    }
  }
  .each1 {
    b {
      color: #fe6972;
    }
  }
  .btns {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    .btn {
      margin-right: 20px;
    }
  }
  .file {
    position: relative;
    display: inline-block;
    background: #d0eeff;
    border: 1px solid #99d3f5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1e88c7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }
  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
  .file:hover {
    background: #aadffd;
    border-color: #78c3f3;
    color: #004974;
    text-decoration: none;
  }
}
</style>
