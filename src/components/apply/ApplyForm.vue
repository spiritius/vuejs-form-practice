<template>
	<form
		@submit.prevent="applyOnSubmit"
		ref="applyForm"
		novalidate>
		<h3>Оставить заявку на заключение контракта</h3>

		<Stepper
			:currentStep="currentStep"
			:lastStep="lastStep"
			v-if="currentStep <= lastStep" />

		<Products
			:class="{ 'd-none': currentStep !== 0 }"
			@changeProductType="changeProductType" />

		<Contacts v-if="currentStep === 0" />

		<div>
			<Vegs
				v-if="productType === 'vegs'"
				:currentStep="currentStep" />
			<Fruits
				v-if="productType === 'fruits'"
				:currentStep="currentStep" />
			<Meat
				v-if="productType === 'meat'"
				:currentStep="currentStep" />
		</div>

		<Success
			v-if="currentStep > lastStep"
			@resetForm="resetForm" />

		<Bottom
			v-if="currentStep <= lastStep"
			:currentStep="currentStep"
			:lastStep="lastStep"
			@stepBack="stepBack" />
	</form>
</template>

<script setup>
	import { ref } from 'vue';
	import { useForm, Form } from 'vee-validate';
	import Stepper from './Stepper.vue';
	import Products from './Products.vue';
	import Contacts from './Contacts.vue';
	import Vegs from './Vegs.vue';
	import Fruits from './Fruits.vue';
	import Meat from './Meat.vue';
	import Success from './Success.vue';
	import Bottom from './Bottom.vue';

	const productType = ref('vegs');
	const currentStep = ref(0);
	const lastStep = ref(4);
	const applyForm = ref(null);

	const stepBack = () => {
		currentStep.value--;
	};
	const resetForm = () => {
		currentStep.value = 0;
	};

	const changeProductType = (value) => {
		productType.value = value;
		if (productType.value === 'vegs' || productType.value === 'fruits') {
			lastStep.value = 4;
		} else {
			lastStep.value = 3;
		}
	};

	const { handleSubmit } = useForm({
		keepValuesOnUnmount: true,
	});

	const applyOnSubmit = handleSubmit((values, { resetForm }) => {
		if (currentStep.value === lastStep.value) {
			console.log('SUBMIT:');
			console.log(JSON.stringify(values, null, 2));
			currentStep.value++;
			resetForm();
			return;
		}
		currentStep.value++;
	});
</script>

<style lang="scss" scoped></style>
