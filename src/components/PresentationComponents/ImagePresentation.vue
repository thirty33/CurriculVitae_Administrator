<template>
    <img id="user_avatar" :src="photo_url" alt="avatar photo">
</template>

<script>
export default {
	props: ['photo_url'],
	data() {
		return {
		}
	}
}
</script>

<style scoped>
#user_avatar {
    border-radius: 50%;
    max-width: 150px;
    position: absolute;
    top: 7%; 
    left: 30%;
}
</style>


