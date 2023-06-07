<template>
	<div>
		<h5 class="mt-4">Производимая продукция</h5>
		<div class="row">
			<div class="col-12 col-lg">
				<Radio
					name="apply_productType"
					id="apply_productType_vegs"
					value="vegs"
					label="Овощи"
					checked="true"
					@change="changeProductType($event.target.value)" />
			</div>
			<div class="col-12 col-lg">
				<Radio
					name="apply_productType"
					id="apply_productType_fruits"
					value="fruits"
					label="Фрукты"
					@change="changeProductType($event.target.value)" />
			</div>
			<div class="col-12 col-lg">
				<Radio
					name="apply_productType"
					id="apply_productType_meat"
					value="meat"
					label="Мясо, молоко, яйца"
					@change="changeProductType($event.target.value)" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import Radio from '@ui/Radio.vue';

	const props = defineProps({
		productType: {
			type: String,
			default: () => {},
		},
	});
	const emit = defineEmits(['changeProductType']);
	const changeProductType = (value) => {
		emit('changeProductType', value);
	};
</script>

<style lang="scss" scoped></style>
