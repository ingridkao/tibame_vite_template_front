<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
  </div>
</template>

<script>
	export default {
    // 另一個寫props的寫法
		props: {
			"msg": {
				type: String,
				default: "我是誰"
			}
		}
	};
</script>