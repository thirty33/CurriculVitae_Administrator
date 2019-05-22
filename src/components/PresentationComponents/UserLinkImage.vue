<template>
    <div id="user_link_main_div">
        <a :href="technology.url">
            <img id="user_link_image" :src="technology.network_icon" alt="">
        </a>
    </div>
</template>

<script>
export default {
    props: ['technology'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#user_link_image {
    max-width: 30px;
}
</style>


