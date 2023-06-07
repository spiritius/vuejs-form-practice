<template>
	<div class="form-group">
		<label class="form-check">
			<input
				class="form-check-input"
				type="checkbox"
				:id="props.id"
				:name="props.id" />
			<span class="form-check-name">{{ props.label }}</span>
		</label>
	</div>
</template>

<script setup>
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
	});
</script>

<style lang="scss" scoped></style>
