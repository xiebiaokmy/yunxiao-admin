<template>
  <div class="Data">
    <el-table :data="tableData">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="手机"></el-table-column>
      <el-table-column prop="companyName" label="公司名称" show-overflow-tooltip></el-table-column>
      <el-table-column prop="email" label="邮箱" show-overflow-tooltip></el-table-column>
      <el-table-column prop="source" label="渠道来源" show-overflow-tooltip></el-table-column>
      <el-table-column prop="event" label="咨询业务" show-overflow-tooltip></el-table-column>
      <el-table-column prop="creatTiem" :formatter="formatter" label="创建时间" show-overflow-tooltip></el-table-column>
      <el-table-column prop="caozuo" label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSie"
        :page-sizes="[10, 20, 30, 40,50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "Data",
  data() {
    return {
      pageSie: 10,
      count: 1000,
      currentPage: 1,
      tableData: [
        {
          did: "213",
          name: "张三",
          phone: "1231546446",
          companyName: "XXX公司",
          email: "46546@qq.com",
          source: "拉钩",
          event: "撒谎的客户是客户的接口",
          creatTiem: 1601199686000
        }
      ]
    };
  },
  methods: {
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
    handleDelete(row) {},
    handleSizeChange(val) {
      this.currentPage = 1;
      this.pageSie = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    }
  },
  mounted() {
    this.$parent.setPannelName([
      {
        name: "数据搜集",
        path: "/Data"
      }
    ]);
  }
};
</script>
<style lang="less" scoped>
.page {
  text-align: center;
  margin-top: 20px;
}
</style>