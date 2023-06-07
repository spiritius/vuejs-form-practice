<template>
	<div class="row align-items-center apply__btns">
		<div class="col-12 col-lg-auto order-lg-2">
			<div class="row">
				<div class="col">
					<div class="form-group mb-lg-0">
						<button
							v-if="props.currentStep > 0"
							class="btn btn-gray"
							type="button"
							@click="prevStep">
							<span>Назад</span>
						</button>
					</div>
				</div>
				<div class="col">
					<div class="form-group mb-lg-0">
						<button
							v-if="props.currentStep === props.lastStep"
							class="btn btn-black"
							type="submit">
							<span>Отправить</span>
						</button>
						<button
							v-else
							class="btn btn-black"
							type="submit">
							<span>Далее</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-lg order-lg-1 pr-lg-3">
			<p>
				Нажимая «Далее», вы принимаете условия
				<a href="#">передачи</a>
				информации
			</p>
		</div>
	</div>
</template>

<script setup>
	const emit = defineEmits(['stepBack']);

	const props = defineProps({
		currentStep: {
			type: Number,
			default: 0,
		},
		lastStep: {
			type: Number,
			default: () => {},
		},
	});
	const prevStep = () => {
		emit('stepBack');
	};
</script>

<style lang="scss" scoped></style>
