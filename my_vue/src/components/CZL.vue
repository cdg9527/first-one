<template>
	<div class="CZL">
		<h2>车辆详情</h2>
		
		<mt-checklist 
		v-model = 'method'
		:options="['二维码损坏', '车锁损坏', '其他']">
		</mt-checklist>
		<mt-button type="primary" size='large' @click="btn">提交</mt-button>
		<mt-button type="default" size='large' @click="back">返回</mt-button>
		<img src="../assets/timg.jpg" />
	</div>
	
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				method:[]
			}
		},
		methods: {
			btn: function() {
				alert('提交完成');
			},
			back: function() {
				this.$router.push({
					path: "/"
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.mint-button--large {
		width: 90%;
		margin: 10px auto 0 auto;
	}
	.mint-checklist{
		text-align: left;
	}
	.CZL h2{
		text-align: left;
		padding: 20px;
	}
</style>
