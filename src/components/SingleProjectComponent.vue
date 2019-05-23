<template>
    <div id="single_project">
      <img class="single_project_img" src="https://source.unsplash.com/random/300x300?v=10">
			<div class="single_project_details">
        <h2 class="single_project_title">Album Title</h2>
        <p class="single_project_creation_date">10/05/2019</p>
        <p class="single_project_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sed sint doloremque repellat, iste debitis.</p>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#single_project {
	background: rgba(255, 255, 255, 0.2);
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	padding: 20px;
	display: grid;
	grid-template-columns: 150px 1fr;
	grid-gap: 10px;
	align-items: center;
	color: white;
	font-weight: 100;
}

.single_project_img {
	width: 100%;
}

</style>


