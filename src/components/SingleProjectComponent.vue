<template>
  <div id="single_project">
    <a :href="project.item_url">
      <img class="single_project_img" :src="project.photo_url">
    </a>
    <div class="single_project_details">
      <h2 class="single_project_title"> {{ project.name }}</h2>
      <p class="single_project_creation_date"> {{ project.creationDate }}</p>
      <p class="single_project_description">{{ project.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
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
	grid-gap: 0.8em;
	align-items: center;
	color: white;
	/* font-weight: 100; */
}

.single_project_details {
  display: grid;
  grid-template-rows: 0.2fr 0.2fr 1.5fr;
  grid-gap: 0;
}

.single_project_img {
	width: 100%;
}

</style>


