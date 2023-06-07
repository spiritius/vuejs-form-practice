<template>
	<div>
		<Descr />
		<h5 class="mt-4">Контактные данные</h5>
		<div class="row">
			<div class="col-12 col-lg-6">
				<InputText
					id="apply_name"
					label="ФИО контактного лица"
					required />
			</div>
			<div class="col-12 col-lg-6">
				<InputPhone
					id="apply_phone"
					type="tel"
					label="Номер телефона"
					maxlength="18" />
			</div>
			<div class="col-12 col-lg-6">
				<InputEmail
					id="apply_email"
					label="E-mail" />
			</div>
			<div class="col-12 col-lg-6">
				<InputText
					id="apply_company"
					label="Название предприятия" />
			</div>
			<div class="col-12">
				<Textarea
					id="apply_address"
					label="Фактический адрес предприятия" />
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
