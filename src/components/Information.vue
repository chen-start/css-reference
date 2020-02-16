<template>
  <div id="information">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;font-weight: 700;">{{ name }}</span>
      </div>
      <el-collapse>
        <el-collapse-item v-for="(item, index) in items" :key="index" :title="item.name" :name="index">
          <div v-for="(mode, it) in item.mode" :key="it">
              <span style="font-weight: 700;">{{mode}}</span>
              <div>{{items[index].content[it]}}</div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "information",
  data() {
    return {
      id: "",
      name: [],
      items: [],
      content: []
    };
  },
  watch: {
    $route(to, from) {
      if (to.params.id === "") {
        this.id = this.$route.params.id;
      } else {
        this.id = to.params.id;
      }
      this.getContent();
    }
  },
  created() {
    this.getPush();
    //   this.getContent();
  },
  methods: {
    getPush() {
      if (!this.id) {
        this.id = this.$route.params.id;
        this.getContent();
      } else {
        console.log("11111");
      }
    },
    getContent() {
      this.$axios
        .get(`D:/static/${this.id}.json`)
        .then(res => {
          this.name = res.data.name;
          this.items = res.data.items;
          console.log(this.items);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
#information {
}
</style>