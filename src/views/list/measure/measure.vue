<template>
    <div>
        <div class="topBox">
            <p style="float: left;line-height: 40px;margin-right: 10px">Measure</p>
            <el-select v-model="value" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-input class="epsinput" v-model="Expression" placeholder="请输入表达式"></el-input>

            <div class="addButton">
                <el-button type="primary" plain>更新</el-button>
                <div class="clearBoth"></div>
            </div>

            <div class="delButton">
                <el-button type="danger" plain>删除</el-button>
                <div class="clearBoth"></div>
            </div>
        </div>
        <div style="padding: 10px">
            <p style="line-height: 40px;float: left">新增表单</p>
            <el-input class="epsinput floatLeft" style="margin-left: 10px;width: 15vw" v-model="tableName" placeholder="请输入名字"></el-input>
            <el-input class="epsinput floatLeft" style="width: 15vw" v-model="eps" placeholder="请输入表达式"></el-input>
            <div style="float:left;margin-left: 40px">
                <el-button type="success" plain>添加</el-button>
            </div>
            <div class="clearBoth"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "measure",
        data() {
            return {
                Expression: '',
                tableName: '',
                eps: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .topBox {
        padding: 10px;
        border-bottom: 1px solid #909399;
    }

    .epsinput {
        width: 15%;
        margin-left: 5vw;
    }

    .addButton, .delButton {
        float: right;
        margin-right: 15px;
    }

    .floatLeft {
        float: left;
    }
</style>
