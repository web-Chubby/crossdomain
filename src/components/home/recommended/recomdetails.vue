<template>
    <div>
        <el-container>
            <el-main class="e_main">
                <div class="detailsHader">
                    <div class="detailsHader_img"></div>
                    <div class="detailsHader_title">
                        <h2>“我只想披荆斩棘奔向你”</h2>
                        <div class="detailsHader_title_my">
                            <img src="" alt="">
                            beerbad
                        </div>
                    </div>
                </div>
                <div class="detailsHader_label">
                    <div class="label">
                        <em>标签：</em>
                        <span>欧美</span>
                        <span>安静</span>
                        <span>治愈</span>
                    </div>
                    <div class="abstract">
                        <span>简介：春天是一张春饼两壶新茶，</span>
                    </div>
                </div>
            </el-main>
        </el-container>
        <el-container>
            <el-main class="Playlist_content">
                <h2>歌曲列表</h2>
                <div class="Playlist_cot">
                    <a href="javascript;">
                        <span>1</span>
                        <div class="Playlist_cot_lis">
                            <div class="Playlist_cot_Laa"></div>
                            <div class="Playlist_cot_Lbb">
                                <em class="el-icon-video-play"></em>
                            </div>
                        </div>
                    </a>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "recomdetails"
    }
</script>

<style scoped>
    body > .el-container {
        margin-bottom: 40px;
    }
    .el-main {
        padding: 0;
        background-color: #E9EEF3;
    }
    /*头部*/
    .e_main{
        color: #fff;
        height: 320px;
        padding: 0;
        overflow: hidden;
    }
    .detailsHader{
        width: 100%;
        height: 205px;
        display: flex;
        align-items: center;
        position: relative;

        background: #7db9b4;
    }
    .detailsHader_img{
        width: 145px;
        height: 145px;
        margin-left: 15px;

        background: #0000ff;
    }
    .detailsHader_title{
        width: 228px;
        height: 145px;
        margin-left: 16px;

        background: #2c3e50;
    }
    .detailsHader_title h2{
        line-height: 50px;
    }
    .detailsHader_title .detailsHader_title_my{
        height: 30px;
        line-height: 30px;
        margin-top: 10px;

        background: #d3dce6;
    }
    .detailsHader_title_my img{
        width: 30px;
        height: 30px;
        float: left;
        border-radius: 50%;

        background: #9a6e3a;
    }

    .detailsHader_label{
        height: 115px;
        padding-top: 10px;
        color: #666;

        background: #7db9b4;
    }
    .detailsHader_label .label{
        font-size: 14px;
        margin-left: 10px;
        height: 20px;
        line-height: 20px;
    }
    .label em{
        float: left;
    }
    .label span{
        font-size: 12px;
        display: block;
        float: left;
        width: 40px;
        height: 18px;
        text-align: center;
        border: 1px solid #d3dce6;
        border-radius: 8px;
        margin-right: 10px;
    }
    .detailsHader_label .abstract{
        width: 389px;
        height: 73px;
        font-size: 14px;
        margin-left: 10px;
    }
    .abstract span{
        display: block;
        line-height: 30px;
    }

    /*歌单内容*/
    .Playlist_content{
        color: #333;
    }
    .Playlist_content h2{
        font-size: 12px;
        color: #666666;
        height: 23px;
        line-height: 23px;
        background: #eeeff0;
        padding: 0 10px;
    }
    .Playlist_content .Playlist_cot{
        width: 100%;
        min-height: 500px;

        background: #55a532;
    }
    .Playlist_cot span{
        width: 40px;
        line-height: 54px;
        text-align: center;
        float: left;
    }
    .Playlist_cot a{
        width: 100%;
        height: 54px;
        display: flex;

        background: #999999;
    }
    .Playlist_cot .Playlist_cot_lis{
        width: 100%;
        height: 54px;
        float: right;

        background: #d3dce6;
    }
    .Playlist_cot_Lbb{
        width: 42px;
        height: 54px;
        float: right;
        text-align: center;
        line-height: 54px;
        font-size: 28px;

        background: #369599;
    }
</style>
