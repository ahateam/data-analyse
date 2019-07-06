<template>
    <div style="padding: 10px">
        <p style="float: left;line-height: 40px;margin-right: 10px">选择需要删除的表单：</p>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
            <el-button class="delButton" type="danger" plain>删除</el-button>
    </div>
</template>

<script>
    export default {
        name: "delRelationship",
        data() {
            return {
                options: [{
                    value: '1',
                    label: '黄金糕'
                }, {
                    value: '2',
                    label: '双皮奶'
                }, {
                    value: '3',
                    label: '蚵仔煎'
                }],
                value: '',
            }
        },
    }
</script>

<style lang="scss" scoped>
    .clearBoth {
        clear: both;
    }

    .delButton{
        margin-left: 10px;
    }
</style>
