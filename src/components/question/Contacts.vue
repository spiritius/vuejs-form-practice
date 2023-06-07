<template>
	<div>
		<Descr />
		<h5 class="mt-4">Контактные данные</h5>
		<div class="row">
			<div class="col-12 col-lg-6">
				<InputText
					id="question_name"
					label="ФИО контактного лица"
					required />
			</div>
			<div class="col-12 col-lg-6">
				<InputPhone
					id="question_phone"
					type="tel"
					label="Номер телефона"
					maxlength="18" />
			</div>
			<div class="col-12 col-lg-6">
				<InputEmail
					id="question_email"
					label="E-mail" />
			</div>
			<div class="col-12 col-lg-6">
				<InputText
					id="question_company"
					label="Название предприятия" />
			</div>
			<div class="col-12">
				<Textarea
					id="question_message"
					label="Напишите здесь любой вопрос" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import Descr from '@ui/Descr.vue';
	import InputText from '@ui/InputText.vue';
	import InputPhone from '@ui/InputPhone.vue';
	import InputEmail from '@ui/InputEmail.vue';
	import Textarea from '@ui/Textarea.vue';
</script>

<style lang="scss" scoped></style>
