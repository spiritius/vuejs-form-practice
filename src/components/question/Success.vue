<template>
	<div class="apply__success js-apply-success">
		<img
			:src="iconSuccess"
			alt="Успех!" />
		<div class="apply__success_text">
			<h5>Вопрос отправлен</h5>
			<p>Ответ придёт вам на&nbsp;почту или&nbsp;по&nbsp;телефону</p>
		</div>
		<button
			class="btn btn-black"
			type="button"
			@click="resetForm">
			Хорошо
		</button>
	</div>
</template>

<script setup>
	import iconSuccess from '/img/icons/success.svg';
	const emit = defineEmits(['resetForm']);

	const resetForm = () => {
		emit('resetForm');
	};
</script>

<style lang="scss" scoped></style>
