<template>
	<label class="form-check radio radio-btn">
		<input
			type="radio"
			class="form-check-input"
			:id="props.id"
			:name="props.name"
			:value="props.value"
			:checked="props.checked" />
		<span class="form-check-name text-nowrap">{{ props.label }}</span>
	</label>
</template>

<script setup>
	const props = defineProps({
		id: {
			type: String,
			required: true,
			default: () => {},
		},
		name: {
			type: String,
			required: true,
			default: () => {},
		},
		value: {
			type: String,
			required: true,
			default: () => {},
		},
		label: {
			type: String,
			required: true,
			default: () => {},
		},
		checked: {
			type: Boolean,
			required: false,
			default: false,
		},
	});
</script>

<style lang="scss" scoped></style>
