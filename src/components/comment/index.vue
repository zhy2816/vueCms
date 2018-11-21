<template>
    <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入您要评论的内容!最多输入120字" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>
        <div class="comment-list">
        <div class="comment-item" v-for="(item, index) in commentList" :key="item.add_time">
            <div class="comment-title">
                第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}
            </div>
            <div class="comment-content">
                {{item.content === 'undefined' || '此人有点懒'}}
            </div>
        </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import { Toast } from "mint-ui";
    export default {
        props: ["id"],
        data() {
            return {
                pageIndex: 1,
                commentList: []
            };
        },
        created() {
            this.getComments();
        },
        methods: {
            getComments() {
            this.$http
                .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
                .then(result => {
                    this.commentList = this.commentList.concat(result.body.message);
                });
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            }
        }
    };
</script>

<style lang="less">
    .comment-container {
        h2 {
            padding-top: 10px;
        }
        .comment-list {
            .comment-item {
            margin: 5px 0;
            .comment-title {
                font-size: 13px;
                background-color: #ccc;
            }
            .comment-content {
                font-size: 13px;
            }
            }
        }
    }
</style>
