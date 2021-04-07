<template>
    <div class="header_box">
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark header">
                    <a href="https://music.163.com">
                        <img alt="" src="../../assets/logo02.jpg">
                        <h1>云音乐</h1>
                    </a>
                    <a class="more" href="https://music.163.com">更多精彩</a>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content bg-purple-dark">
                    <div class="block">
                        <el-carousel height="150px">
                            <el-carousel-item :key="index" v-for="(item,index) in img">
                                <img :src="item.url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content recommended">
                    <div class="recomd">
                        <i></i>
                        <h2>推荐</h2>
                    </div>
                </div>
            </el-col>
            <div class="playlistBto">
                <router-link
                    tag="a"
                    class="playlistBox"
                    v-for="(item,index) in recomArr"
                    :key="index"
                    to="/Recomdetails"
                >
                    <i>{{item.playCount}}</i>
                    <img :src="item.picUrl" alt="">
                    <span>{{item.name}}</span>
                </router-link>
            </div>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="grid-content recommended">
                    <div class="recomd">
                        <i></i>
                        <h2>最新</h2>
                    </div>
                </div>
            </el-col>
            <div class="latest_song">
                <a href="javascript;" v-for="(item,index) in latestsongArr">
                    <div class="latest_song_li">
                        <div class="latest_song_liLeft">
                            <div class="latest_liLeft_a">{{item.name}}</div>
                            <div class="latest_liLeft_b">{{item.song.artists[0].name}}</div>
                        </div>
                        <div class="latest_song_liRight">
                            <em class="el-icon-video-play"></em>
                        </div>
                    </div>
                </a>
            </div>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                img:[
                    {url:"http://p1.music.126.net/v5E4A91u5IXUV2fRFXsMsA==/109951165082809618.jpg?imageView&quality=89"},
                    {url:"http://p1.music.126.net/c_z_ylrU8Jl47qR2US7rKw==/109951165082797815.jpg?imageView&quality=89"},
                    {url:"http://p1.music.126.net/P--ZqfDqqh1OdjYQE83mjg==/109951165082803481.jpg?imageView&quality=89"},
                    {url:"http://p1.music.126.net/CVXGZd1Q3pq3b9qSJygdkg==/109951165082809818.jpg?imageView&quality=89"}
                ],
                recomArr:[],
                latestsongArr:[]
            }
        },
        methods: {
            //推荐
            recommended() {
                let recommended = this.api.content.recommended.url;
                this.axios.get(recommended,{
                    params:{
                        limit:6
                    }
                }).then(({data}) => {
                    let resultA = data.result;
                    // console.log(resultA)
                    for (let i = 0;i<resultA.length;i++){
                        this.recomArr.push(resultA[i])
                    }
                    })
                },
            //最新音乐
            latestsong(){
                let latestsong = this.api.content.latestsong.url;
                this.axios.get(latestsong).then(({data})=>{
                    let latestA = data.result
                    // console.log(latestA)
                    for (let i=0;i<latestA.length;i++){
                        this.latestsongArr.push(latestA[i])
                    }
                })
            }
        },
        mounted() {
            this.recommended()
            this.latestsong()
        }
    }
</script>

<style scoped>
    .header_box{
        margin-bottom: 50px;
        overflow: hidden;
    }
    /*头部导航*/
    .header{
        height: 84px;
        font-size: 22px;
        color: #eeecec;
        line-height: 84px;
        background: #d43c33;
        position: relative;
    }
    .header img{
        height: 25px;
        float: left;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto 0;
        margin-left: 10px;
        border-radius: 50px;
    }
    .header h1{
        color: #eeecec;
        float: left;
        letter-spacing: 3px;
        margin-left: 40px;
    }
    .more{
        color: #d43c33;
        display: block;
        width: 100px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 16px;
        background: #fff;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 10px;
        margin: auto;
        border-radius: 20px;
    }

    /*element*/
    .el-row {
        margin-bottom: 0;
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        min-height: 36px;
        position: relative;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    /*轮播*/
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__item img{
        width: 100%;
        height: 100%;
    }

    /*recommended推荐*/
    .recommended{

    }
    .recommended .recomd{
        width: 100%;
        height: 50px;
        line-height: 50px;
    }
    .recomd h2{
        margin-left: 8px;
    }
    .recomd i{
        display: block;
        width: 2px;
        height: 16px;
        background: #CC0000;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
    }
    .playlistBto{
        width: 100%;
        min-height: 376px;
        float: left;
        display: flex;
        flex-wrap: wrap;
    }
    .playlistBto .playlistBox{
        width: 32.81%;
        height: 174px;
        position: relative;
    }
    .playlistBox:nth-child(2),.playlistBox:nth-child(5){
        margin: 0 3px;
    }
    .playlistBox img{
        width: 136px;
    }
    .playlistBox span{
        font-size: 13px;
    }
    .playlistBox i{
        position: absolute;
        top: 0;
        right: 2px;
        font-size: 12px;
        color: #fff;
    }

    /*最新音乐*/
    .latest_song{
        min-height: 300px;
        margin-top: 50px;
    }
    .latest_song .latest_song_li{
        width: 100%;
        height: 53px;
        display: flex;
        justify-content: space-between;
        border-bottom:1px solid #f0f0f0;
    }
    .latest_song_liLeft{
        width: 100%;
        height: 54px;
        margin-left: 10px;
        display: flex;
        flex-wrap: wrap;
    }
    .latest_song_liLeft .latest_liLeft_a{
        width: 100%;
        height: 27px;
        line-height: 27px;
        font-size: 17px;
    }
    .latest_song_liLeft .latest_liLeft_b{
        width: 100%;
        height: 27px;
        line-height: 27px;
        font-size: 12px;
        padding-left: 8px;
    }

    .latest_song_liRight{
        width: 42px;
        text-align: center;
        line-height: 54px;
        font-size: 28px;
        float: right;
    }
</style>
