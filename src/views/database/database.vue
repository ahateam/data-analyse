<template>
    <div style="padding-top: 15px">
        <div class="content">
            <div class="contentBoxs">
                <p class="leftText">server</p>
                <el-input class="epsinput" v-model="Expression" placeholder="请输入"></el-input>
            </div>
            <div class="contentBoxs">
                <p class="leftText">Database</p>
                <el-input class="epsinput" v-model="Expression" placeholder="请输入"></el-input>
            </div>
            <div class="contentBoxs">
                <p class="leftText">Credential</p>
                <el-select v-model="value" placeholder="请选择" style="margin-left: 20px">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div v-if="value == 1 ">
                <div class="contentBoxs">
                    <p class="leftText">Database</p>
                    <el-input class="epsinput" v-model="userName" placeholder="请输入用户名"></el-input>
                </div>
                <div class="contentBoxs">
                    <p class="leftText">Database</p>
                    <el-input class="epsinput" v-model="Password" placeholder="请输入密码"></el-input>
                </div>
            </div>
            <div v-else></div>

            <el-button style="float: right;width: 150px" type="success" plain>next</el-button>
            <div class="clearBoth"></div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "dataSource",
        data() {
            return {
                options: [{
                    value: '1',
                    label: 'database credential'
                }, {
                    value: '2',
                    label: 'windows authentication'
                }],
                value: '1',
                userName: '',
                Password: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
    .clearBoth{
        clear: both;
    }

    .content {
        width: 50vw;
        margin: 0 auto;
        border: 1px solid #e7e1cd;
        padding: 20px;
    }

    .leftText {
        float: left;
        line-height: 40px;
        width: 100px;
    }

    .epsinput {
        width: 30vw;
        margin-left: 20px;
    }

    .contentBoxs {
        margin-top: 10px;
    }

</style>
