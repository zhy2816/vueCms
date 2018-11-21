<template>
    <div class="newsList-container">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h4>{{item.title}}</h4>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.add_time | dateFormat}} </span>
                            <span>点赞：{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { Toast } from "mint-ui";

    export default {
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.getNewsList()
        },
        methods: {
            getNewsList() {
                this.$http.get('api/getnewslist').then(result => {
                    if(result.body.status === 0) {
                        this.newsList = result.body.message
                    }else {
                        Toast('获取新闻列表失败！')
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    .newsList-container {
        .mui-table-view-cell {
            width: 100%;
            .mui-media-body {
                h4 {
                    line-height: 20px;
                    font-size: 14px;
                }
                .mui-ellipsis {
                    font-size: 12px;
                    color: #226aff;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
            }
        }
    }
</style>


