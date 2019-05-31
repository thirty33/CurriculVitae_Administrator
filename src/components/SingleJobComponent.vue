<template>
    <div id="single_project">
      <img class="single_project_img" :src="job.company_photo">
			<div class="single_project_details">
        <h2 class="single_project_title">Empresa: {{ job.company_name }}</h2>
        <h3 class="single_project_creation_date">Entrada: {{ job.entryDate }}</h3>
        <h3 class="single_project_description">Salida: {{ job.departureDate }}</h3>
        <h3 class="single_project_description">Cargo: {{ job.position }}</h3>
      </div>
    </div>
</template>

<script>
export default {
    props: ['job'],
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
  grid-template-rows: 0.2fr 0.2fr 1.5fr 1.5fr;
  grid-gap: 0;
}

.single_project_img {
	width: 100%;
  height: 100%;
}

</style>


