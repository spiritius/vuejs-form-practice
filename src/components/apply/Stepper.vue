<template>
	<div
		class="stepper"
		:data-steps="props.lastStep + 1"
		:data-current="props.currentStep + 1">
		<div class="stepper__progress"></div>
		<div
			class="stepper__item"
			v-for="n in props.lastStep + 1"
			:key="n"
			:class="{ active: n - 1 === props.currentStep }">
			{{ n }}
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	const props = defineProps({
		currentStep: {
			type: Number,
			required: false,
			default: () => {},
		},
		lastStep: {
			type: Number,
			required: false,
			default: () => {},
		},
	});
</script>

<style lang="scss" scoped></style>
