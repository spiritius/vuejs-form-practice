<template>
	<div class="form-group form-floating">
		<input
			type="text"
			class="form-control"
			:class="errorMessage ? 'invalid' : 'valid'"
			:id="props.id"
			:name="props.id"
			v-model="value"
			required />
		<label :for="props.id">{{ props.label }}*</label>
		<div
			class="form-group-suffix"
			v-if="props.suffix">
			{{ props.suffix }}
		</div>
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
		suffix: {
			type: String,
			required: false,
			default: () => {},
		},
	});

	const isRequired = (value) =>
		value ? true : 'Поле обязательно для заполнения';
	const { value, errorMessage } = useField(props.id, isRequired);
</script>

<style lang="scss" scoped></style>
