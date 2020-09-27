<template>
  <div class="Banner">
    <div class="header">
      <el-button type="primary" @click="addCase">新增案例</el-button>
    </div>
    <div class="tabels">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="title" label="标题" align="center"></el-table-column>
        <el-table-column prop="brief" label="简介" align="center"></el-table-column>
        <el-table-column prop="address" label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="dialogTitle"
      top="1vh"
      :close-on-click-modal="false"
      :visible.sync="isShowDialog"
    >
      <div class="each cover">
        <b>*</b>
        <span>封面:</span>
        <img :src="obj.cover" alt="封面" v-if="obj.cover" />
        <a href="javascript:;" class="file">
          {{obj.cover?'重新上传':'选择文件'}}
          <input type="file" name id />
        </a>
      </div>
      <div class="each">
        <b>*</b>
        <span>标题:</span>
        <el-input v-model="obj.title" placeholder="请输入标题"></el-input>
      </div>
      <div class="each">
        <b>*</b>
        <span>简介:</span>
        <el-input v-model="obj.brief" placeholder="请输入简介"></el-input>
      </div>
      <div class="each1">
        <b>*</b>
        <span>内容:</span>
        <Quill :editContent="obj.content" :height="500"></Quill>
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
import Quill from "../components/quill";
export default {
  name: "Banner",
  components: {
    Quill
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "我是标题",
          brief: "我是简介"
        }
      ],
      isShowDialog: false,
      dialogTitle: "新增案例",
      obj: {
        cover:
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1593106255,4245861836&fm=26&gp=0.jpg",
        title: "我是标题",
        brief: "我是简介",
        content: ""
      }
    };
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    addCase() {
      this.isShowDialog = true;
    }
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "客户案例管理",
        path: "/ComCase",
        des: "本页面用于客户案例的新增修改编辑等操作"
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
.tabels {
  padding: 0 30px;
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
    width: 105px;
    height: 120px;
    margin-right: 20px;
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
</style>
