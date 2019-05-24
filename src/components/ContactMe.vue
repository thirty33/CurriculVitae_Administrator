<template>
	<div id="contact_me_main">
    <div id="contact_me_form_wrapper">
			<div id="contact_me_form_container">
				<form id="contact_me_form"
					@submit="checkForm"
					method="post">
					<div class="form-group">
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
					</div>
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
	background-color: purple;
	height: inherit;
	position: relative;
	overflow-y:scroll;
}

#contact_me_form_container {
	background-color: gray;
	position: absolute;
	right: 0.7em;
  left: 0.7em;
	top: 2em;
}

.field_error {
	color: red !important;
}
</style>

