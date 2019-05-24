<template>
	<div id="contact_me_main">
    <div id="contact_me_form_wrapper">
			<div id="contact_me_form_container">
				<form id="contact_me_form"
					@submit="checkForm"
					method="post">
					<label for="name">Nombre</label>
					<input type="text"
						id="name"
						class="form-control"
						:class="{'field_error' : nameError}"
						v-model="name"
						@click="removeErrorMessage">
					<label for="subject">Asunto</label>
					<input type="text"
						id="subject"
						class="form-control"
						:class="{'field_error' : subjectError}"
						v-model="subject"
						@click="removeErrorMessage">
					<label for="message">Mensaje</label>
					<textarea 
						id="message"
						rows="5"
						class="form-control"
						:class="{'field_error' : messageError}"								
						v-model="message"
						@click="removeErrorMessage">
					</textarea>
					<input
						type="submit"
						value="Enviar">
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
		return {
			name: null,
			subject: null,
			message: null,
			nameError: false,
			subjectError: false,
			messageError: false
		}
	},
	methods: {
		submitted: function () {
			// console.log('Is entering in function')
		},
		checkForm: function (e) {
			if (this.name && this.subject && this.message) {
        return true;
      }

      if (!this.name) {
				this.nameError = true;
				this.name = 'name required';
      }
      if (!this.subject) {
				this.subjectError = true;
        this.subject = 'subject required';
      }
      if (!this.message) {
				this.messageError = true;
        this.message = 'messagge required';
      }
			e.preventDefault();
		},
		removeErrorMessage: function (ev) {
			if(ev.target.id == 'name'){
				this.nameError = false;
				this.name = null;
			}
			if(ev.target.id == 'subject'){
				this.subjectError = false;
				this.subject = null;
			}
			if(ev.target.id == 'message'){
				this.messageError = false;
				this.message = null;
			}
		}
	}
}
</script>

<style scoped>
#contact_me_form_wrapper {
	color: white;
	background-color: aqua;
	height: inherit;
	position: relative;
	overflow-y:scroll;
}

#contact_me_form_container {
	background-color: gray;
	position: absolute;
	right: 11.7em;
  left: 11.7em;
	top: 8.7em;
}

.field_error {
	color: red !important;
}

#contact_me_form {
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-gap: 4em;
}

#contact_me_form label {
	grid-column: 1 / 2;
	text-align: center;
	justify-content: center;
	align-self: center;
	font-size: 2em;
}

#contact_me_form input,
#contact_me_form button {
	grid-column: 2 / 3;
}


/* media queries */
@media (max-width: 1000px) 
{
	#contact_me_form_container {
		right: 2em;
		left: 2em;
		top: 8.7em;
	}

	#contact_me_form {
		grid-gap: 6em;
	}
}

@media (max-width: 540px) 
{
	#contact_me_form_container {
		right: 2.7em;
		left: 2.7em;
		top: 8.7em;
	}
}
</style>

