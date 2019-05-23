<template>
	<div id="main_description">
		<p id="main_description_text">
			{{ textDescription }}
		</p>
	</div>
</template>

<script>
export default {
    props: ['textDescription'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
#main_description {
	display: grid;
}

#main_description_text {
	text-align: center;
	font-size: 1.3em;
}


/* media queries */
@media (max-width: 1000px) {
	#main_description_text {
		font-size: 1.8em;
	}
}

@media (max-width: 540px) {
	#main_description_text {
		font-size: 1em;
	}
}
</style>

