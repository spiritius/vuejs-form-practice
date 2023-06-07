<template>
	<div class="form-group form-floating">
		<textarea
			class="form-control"
			:class="errorMessage ? 'invalid' : 'valid'"
			:id="props.id"
			:name="props.id"
			v-model="value"
			required
			maxlength="250"></textarea>
		<label :for="props.id">{{ props.label }}*</label>
		<span
			class="invalid"
			v-if="errorMessage">
			{{ errorMessage }}
		</span>
		<div class="form-group-after">
			<div class="form-group-descr">{{ props.descr }}</div>
			<div class="form-group-counter">
				{{ value ? value.length : 0 }}/250
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

	const isRequired = (value) =>
		value ? true : 'Поле обязательно для заполнения';
	const { value, errorMessage } = useField(props.id, isRequired);
</script>

<style lang="scss" scoped></style>
