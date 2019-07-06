<template>
    <div>
        <div class="topBox">
            <el-select v-model="value" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value0" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-input class="epsinput" v-model="Expression" placeholder="请输入表达式"></el-input>

            <div class="delButton">
                <el-button type="danger" plain>删除</el-button>
                <div class="clearBoth"></div>
            </div>

            <div class="addButton">
                <el-button type="primary" plain>修改</el-button>
                <div class="clearBoth"></div>
            </div>


        </div>
        <div style="padding: 10px">
            <el-select v-model="value" placeholder="请选择" class="autoSelect">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>

            <el-input class="epsinput" style="margin-left: 0px;margin-right: 15px;" v-model="colName"
                      placeholder="添加的名字"></el-input>
            <el-input class="epsinput" v-model="colName" placeholder="请输入表达式"></el-input>

            <div class="addButton">
                <el-button type="success" plain>添加</el-button>
                <div class="clearBoth"></div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "calcColumn",
        data() {
            return {
                Expression: '',
                colName: '',
                value0: '',
                value: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .topBox {
        padding: 10px;
        border-bottom: 1px solid #909399;
    }

    .autoSelect {
        width: 15%;
        margin-right: 15px;
    }

    .epsinput {
        width: 15%;
        margin-left: 5vw;
    }

    .addButton, .delButton {
        float: right;
        margin-right: 15px;
    }
</style>
