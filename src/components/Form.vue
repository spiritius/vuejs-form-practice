<template>
	<section class="container">
		<div class="toggle__controls">
			<button
				class="btn toggle__controls_btn"
				:class="activeApplyForm ? 'active' : ''"
				@click="activeApplyForm = true"
				type="button">
				Оставить заявку
			</button>
			<button
				class="btn toggle__controls_btn"
				:class="!activeApplyForm ? 'active' : ''"
				@click="activeApplyForm = false"
				type="button">
				Задать вопрос
			</button>
		</div>
		<ApplyForm v-if="activeApplyForm" />
		<QuestionForm v-else />
	</section>
</template>

<script setup>
	import { ref } from 'vue';
	import QuestionForm from '@question/QuestionForm.vue';
	import ApplyForm from '@apply/ApplyForm.vue';

	const activeApplyForm = ref(true);
</script>

<style lang="scss" scoped></style>
