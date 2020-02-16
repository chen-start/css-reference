<template>
  <div id="langingPage">
    <div v-for="item in items" :key="item.id" class="item">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px;font-weight: 700;">{{item.name}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="toPush(item.id)">进入查看</el-button>
        </div>
        <div class="text" v-for="(it, index) in item.specific" :key="index">
            <span>{{it}}</span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "langingPage",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.getInformation();
  },
  methods: {
    getInformation() {
      this.$axios
        .get("D:/static/information.json")
        .then(res => {
          this.items = res.data.querySearch;
        //   console.log(this.items);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toPush(id){
      console.log(id);
      this.$router.push(`/information/${id}`);
    }
  }
};
</script>

<style lang="scss">
#langingPage {
    .item{
        margin: 10px 0;
        .box-card{
            .text{
                display: flex;
            }
        }
    }
}
</style>