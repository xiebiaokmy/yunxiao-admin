<template>
  <div class="Banner">
    <div class="header">
      <div class="isShow">
        <span>前端页面是否显示:</span>
        <el-switch v-model="value" active-color="#409EFF" inactive-color="#DCDFE6"></el-switch>
      </div>
      <el-button type="primary" @click="addCase">新增新闻</el-button>
    </div>
    <div class="tabels">
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="title" label="标题" align="center"></el-table-column>
        <el-table-column prop="brief" label="简介" align="center"></el-table-column>
        <el-table-column prop="creatTime" label="创建时间" :formatter="formatter" align="center"></el-table-column>
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
      value: false,
      list: [
        {
          id: 1,
          title: "我是标题",
          brief: "我是简介",
          creatTime: 1601199686000
        }
      ],
      isShowDialog: false,
      dialogTitle: "新增新闻",
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
    //时间搓处理
    formatter(row, column) {
      let pro = column.property;
      let dates = row[pro];
      if (dates == "0") {
        return "-";
      } else {
        var date = new Date(dates);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        let hour = date.getHours();
        if (hour < 10) {
          hour = "0" + hour;
        }
        let minute = date.getMinutes();
        if (minute < 10) {
          minute = "0" + minute;
        }
        let second = date.getSeconds();
        if (second < 10) {
          second = "0" + second;
        }
        return (
          y + "-" + m + "-" + d + "\xa0 " + hour + ":" + minute + ":" + second
        );
      }
    },
    addCase() {
      this.isShowDialog = true;
    }
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "新闻管理",
        path: "/News",
        des: "本页面用于新闻模块新增修改删除等操作"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
.header {
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
