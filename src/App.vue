<template>
<div id="app">
    <el-container>
        <el-aside width="200px">
            <el-col class='category'>
                <h5 class='title'>属性</h5>
                <el-menu class='el-menu-vertical-demo'>
                  <el-menu-item  index="0">
                        <span slot="title">
                            <router-link to='/'>速查总表</router-link>
                        </span> 
                    </el-menu-item>
                </el-menu>
                <el-menu class="el-menu-vertical-demo" v-for="item in items" :key="item.id">
                    <el-menu-item :index="item.id">
                        <span slot="title" @click="toPath(item.id)" class="toPath">
                            {{item.name}}
                        </span> 
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-aside>
        <el-container>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>

<script>
export default {
    components: {
    },
    name: 'css参考手册',
    data() {
        return {
            count: [], 
            items: []
        }
    },
    created() {
        this.information();
    },
    methods: {
        information() {
            this.$axios.get('D:/static/information.json') 
                .then(res => {
                    this.items = res.data.querySearch;
                }).catch(err => {
                    console.log(err);  
                });
        },
        toPath(id){
          // console.log(id);
          this.$router.push(`/information/${id}`);
        }
    }
}  
</script>

<style lang="scss">
* {
    margin: 0;  
    padding: 0;
}
a {
  color: #303133;
  text-decoration: none;
}

#app {
    width: 100%;
    height: 563px;

    .el-container {
        height: 100%;

        .el-aside {
            .category {
                .title {
                    text-align: center;
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
                .el-menu-vertical-demo{
                  .toPath{
                    color: #000;
                  }
                }
            }
        }

        .el-container {
            .el-main {
                padding: 0;
            }
        }

    }

}
</style>
