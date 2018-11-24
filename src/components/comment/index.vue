<template>
    <div class="comment-container">
        <h2>发表评论</h2>
        <hr>
        <textarea placeholder="请输入要BB的内容（做多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, i) in comments" :key="i">
                <div class="comment-title">
                    第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
                </div>
                <div class="comment-content">
                    {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
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
                comments: [],
                msg: ""
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
                    if (result.body.status === 0) {
                        this.comments = this.comments.concat(result.body.message);
                    }else {
                        Toast("获取评论失败！")
                    }
                });
            },
            getMore() {
                this.pageIndex++;
                this.getComments();
            },
            postComment() {
                if(this.msg.trim().length === 0) {
                    return Toast('评论内容不能为空！')
                }
                this.$http
                .post("api/postcomment/" + this.$route.params.id, {
                    content: this.msg.trim()
                    })
                    .then(function(result) {
                    if (result.body.status === 0) {
                        // 1. 拼接出一个评论对象
                        var cmt = {
                        user_name: "匿名用户",
                        add_time: Date.now(),
                        content: this.msg.trim()
                        };
                        this.comments.unshift(cmt);
                        this.msg = "";
                    }
                });
            }
        }
    };
</script>

<style lang="less">
    .comment-container {
        h2 {
            padding-top: 10px;
        }
        textarea {
            padding: 5px;
            font-size: 14px;
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
