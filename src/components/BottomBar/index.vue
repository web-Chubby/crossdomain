<template>
	<div class="footer">
		<ul>
			<router-link
				v-for="(item,index) in tabBar"
				@click.native="clik(index)"
				:class="activeIndex == index ?'active':''"
				:to="item.to"
				tag="li"
				:key="index"
			>
				<i class="iconfont" v-html="item.iconfont"></i>
				<span>{{item.text}}</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"tabBar",
		data(){
			return{
				activeIndex:"",
				tabBar:[
					{
						iconfont:"&#xe723;",
						text:"首页",
						to:"/Home"
					},
					{
						iconfont:"&#xe66b;",
						text:"详情",
						to:"/Details"

					},
					{
						iconfont:"&#xe621;",
						text:"我的",
						to:"/My"
					}
				]
			}
		},
		methods:{
			clik(n){
				this.activeIndex = n;
			}
		}
	}
</script>

<style>
	.footer{
		width: 100%;
		height: 3.125rem;
		background: #f2f2f2;
		position: fixed;
		bottom: 0;
		left: 0;
        z-index: 999;
	}
	.footer ul{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer ul li{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.active{
		color: red;
	}
</style>
