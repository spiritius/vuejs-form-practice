<template>
	<div :class="{ inlined: props.inline }">
		<div class="form-group">
			<label class="form-check">
				<input
					class="form-check-input"
					type="checkbox"
					:id="props.id"
					:name="props.id"
					v-model="isChecked" />
				<span class="form-check-name">
					{{ props.label }}
					<small class="text-muted d-block">
						{{ props.descr }}
					</small>
				</span>
			</label>
		</div>
		<div v-if="isChecked">
			<Textarea
				v-if="props.innerType === 'textarea'"
				:id="props.id + '_value'"
				:label="props.innerLabel"
				:descr="props.innerDescr" />
			<InputText
				v-if="props.innerType === 'input'"
				:id="props.id + '_value'"
				:label="props.innerLabel"
				:descr="props.innerDescr"
				:suffix="props.innerSuffix" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import InputText from '@ui/InputText.vue';
	import Textarea from '@ui/Textarea.vue';

	const isChecked = ref(false);
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
		innerType: {
			type: String,
			required: false,
			default: () => {},
		},
		innerLabel: {
			type: String,
			required: true,
			default: () => {},
		},
		innerDescr: {
			type: String,
			required: true,
			default: () => {},
		},
		innerSuffix: {
			type: String,
			required: true,
			default: () => {},
		},
		inline: {
			type: Boolean,
			required: false,
			default: () => {},
		},
	});
</script>

<style lang="scss" scoped>
	.inlined {
		@media (min-width: 1024px) {
			padding-right: 320px;
			position: relative;
			margin-bottom: 1rem;
			min-height: 56px;

			> .form-group {
				margin-bottom: 0;
			}

			> *:nth-child(2) {
				position: absolute;
				top: -8px;
				right: 0;
				width: 300px;
			}
		}
	}
</style>
