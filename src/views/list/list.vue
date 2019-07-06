<template>
    <div style="padding: 20px 5vw;">
        <div class="nav-tabs">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1"><router-link to="/addRelationship">Add Relationship</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/delRelationship">Del Relationship</router-link></el-menu-item>
            <el-menu-item index="3"> <router-link to="/editRelationship">Edit Relationship</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/calcColumn">Calc Column</router-link></el-menu-item>
            <el-menu-item index="5"><router-link to="/measure">Measure</router-link></el-menu-item>
        </el-menu>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // import JTopo from "@/commen/jTopo-0.4.8-min.js";
    export default {
        name: "list",
        data(){
            return{
                activeIndex: '1',
            }
        },
        mounted() {
        // console.log(JTopo)
        }
    }
</script>

<style lang="scss" scoped>
    .nav-tabs {
        li{
            padding: 0;

        }
        a{
            text-decoration: none;
            display: block;
            padding: 0 20px;
        }
    }
</style>
