<template>
	<form
		@submit.prevent="applyOnSubmit"
		ref="questionForm"
		novalidate>
		<h3>Задать вопрос</h3>

		<div v-if="!showSuccess">
			<Products />
			<Contacts />
		</div>
		<Success
			v-if="showSuccess"
			@resetForm="resetForm" />
		<Bottom v-if="!showSuccess" />
	</form>
</template>

<script setup>
	import { ref } from 'vue';
	import { useForm, Form } from 'vee-validate';
	import Products from './Products.vue';
	import Contacts from './Contacts.vue';
	import Success from './Success.vue';
	import Bottom from './Bottom.vue';

	const showSuccess = ref(false);

	const resetForm = () => {
		showSuccess.value = false;
	};

	const { handleSubmit } = useForm({
		keepValuesOnUnmount: true,
	});

	const applyOnSubmit = handleSubmit((values, { resetForm }) => {
		showSuccess.value = true;
		console.log('SUBMIT:');
		console.log(JSON.stringify(values, null, 2));
		resetForm();
		return;
	});
</script>

<style lang="scss" scoped></style>
