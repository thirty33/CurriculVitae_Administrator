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
		z-index: 2;
}

/* media queries */
@media (max-width: 1000px) {
	#user_avatar {
		left: 25%;
		max-width: 180px;
	}
}

@media (max-width: 540px) {
	#user_avatar {
		max-width: 110px;
	}
}
</style>


