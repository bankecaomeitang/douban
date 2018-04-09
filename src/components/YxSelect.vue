<template>
    <div class="yx-select" :style="border?'border-bottom: 2px dashed #e5e5e5;' : ''">
        <div class="yx-select-title" :style="'width: '+titleLength*14+'px; color: '+titleColor+';'">
            {{ title }}
        </div>
        <div 
            ref="YxSelectCont"
            :class="{'yx-select-cont': true, 'yx-select-cont-limit': hasShowMoreBtn && !showMoreBtnType}">
            <span 
                class="yx-select-item" 
                v-for="(item,index) in data" 
                :key="index" 
                @click="choose(item,index)" 
                :class="{'yx-select-item-active': index == cloneDefaultChooseIndex}">
                {{ item[props.name] || item }}
            </span>
        </div>
        <div 
            class="yx-select-btn" 
            v-if="hasShowMoreBtn">
            <el-button 
                type="text" 
                size="mini" 
                v-if="!showMoreBtnType" 
                @click="more">
                更多<i class="el-icon-caret-bottom el-icon--right"></i>
            </el-button>
            <el-button 
                type="text" 
                size="mini" 
                v-if="showMoreBtnType" 
                @click="packUp">
                收起<i class="el-icon-caret-top el-icon--right"></i>
            </el-button>
        </div>
    </div>
</template>
<script>
    /* 
    Attributes:
        title: 级联选择的标题 String
        titleLength: 级联选择的标题字符长度 Number,默认3个字符长度
        data: 选项内容 [Array]
        props: 配置相关项，包含name、key、id、children
        defaultChooseIndex: 默认选中项下标 Number
        needShowMoreBtn: 是否需要“查看更多按钮”,即使传值true,也会根据内容决定是否展示该按钮 Boolean,默认false
        border: 是否需要下边框,默认false

    Events:
        changeItem: 改变选中项，参数:item,index
    */
    export default {
        props: {
            title: {
                type: String
            },
            titleLength: {
                type: Number,
                default: 3
            },
            titleColor: {
                type: String,
                default: '#333'
            },
            data: {
                type: Array
            },
            props: {
                type: Object,
                default() {
                    return {
                        name: 'name',
                        key: 'key',
                        id: 'id',
                        children: 'children'
                    }
                }
            },
            defaultChooseIndex: {
                type: Number,
                default: 0
            },
            needShowMoreBtn: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                cloneDefaultChooseIndex: this.defaultChooseIndex, // 复制默认选中的下标
                hasShowMoreBtn: false, // 组件内决定是否应该存在“查看更多”按钮
                showMoreBtnType: false // false显示“查看更多”按钮，true显示“收起”按钮
            }
        },
        watch: {
            // 监听默认选中下标是否发生变化
            defaultChooseIndex(val) {
                this.cloneDefaultChooseIndex = val;
            }
        },
        mounted() {
            // 根据内容的高度以及父组件传值needShowMoreBtn决定最终是否显示“查看更多”按钮
            const YxSelectCont = this.$refs.YxSelectCont;
            if (YxSelectCont && YxSelectCont.offsetHeight > 33 && this.needShowMoreBtn) {
                this.hasShowMoreBtn = true;
            } else {
                this.hasShowMoreBtn = false;
            }
        }, 
        methods: {
            choose(item,index){
                if (this.cloneDefaultChooseIndex != index) {
                    this.cloneDefaultChooseIndex = index;
                    this.$emit('change',item,index);
                }
            },
            more() {
                this.showMoreBtnType = true;
            },
            packUp() {
                this.showMoreBtnType = false;
            }
        }
    }
</script>
<style scoped>
    .yx-select {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: 5px;
        background: #fff;
        overflow: hidden;
    }
    .yx-select-title {
        line-height: 28px;
        margin: 0 10px 5px 0;
        text-align: right;
    }

    .yx-select-cont {
        flex: 1;
    }

    .yx-select-item {
        display: inline-block;
        padding: 0 5px;
        line-height: 28px;
        margin: 0 10px 5px 0;
        border-radius: 3px;
        cursor: pointer;
    }

    .yx-select-item-active {
        background: #1daef8;
        color: #fff;
    }

    .yx-select-cont-limit {
        height: 33px;
        overflow: hidden;
    }

        
</style>
