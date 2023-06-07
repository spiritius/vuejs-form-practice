<template>
	<div class="form-group form-floating">
		<input
			type="email"
			class="form-control"
			:class="errorMessage ? 'invalid' : 'valid'"
			:id="props.id"
			:name="props.id"
			v-model="value"
			required />
		<label :for="props.id">{{ props.label }}*</label>
		<span
			class="invalid"
			v-if="errorMessage">
			{{ errorMessage }}
		</span>
		<div class="form-group-after">
			<div class="form-group-descr">
				{{ props.descr }}
			</div>
		</div>
	</div>
</template>

<script setup>
	import { useField } from 'vee-validate';

	const props = defineProps({
		id: {
			type: String,
			required: true,
			default: () => {},
		},
		label: {
			type: String,
			required: true,
			default: () => {},
		},
		descr: {
			type: String,
			required: false,
			default: () => {},
		},
	});

	const isRequired = (value) => {
		if (!value) return 'Поле обязательно для заполнения';

		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
		if (!regex.test(value)) {
			return 'Введеный e-mail не валиден';
		}

		return true;
	};
	const { value, errorMessage } = useField(props.id, isRequired);
</script>

<style lang="scss" scoped></style>
