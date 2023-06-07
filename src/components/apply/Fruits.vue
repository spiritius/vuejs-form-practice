<template>
	<div v-if="props.currentStep === 1">
		<h4>Шаг 2/5. Площадь и сбор</h4>
		<Descr />

		<h5>Качество и площадь почвы</h5>
		<Textarea
			id="apply_2-fruits_qualitysoil"
			label="Качество почвы (открытый грунт)"
			descr="Какие почвы и в каком процентном соотношении представлены в хозяйстве" />
		<div class="row">
			<div class="col-lg-6">
				<InputText
					id="apply_2-fruits_square"
					label="Площадь с/х земель"
					descr="Арендуемая и в собственности"
					suffix="га" />
			</div>
			<div class="col-lg-6">
				<InputText
					id="apply_2-fruits_square_irrigated"
					label="Площадь всех орошаемых земель"
					descr="Арендуемая и в собственности"
					suffix="га" />
			</div>
		</div>
		<hr />
		<h5>Площадь сада</h5>
		<Textarea
			id="apply_2-fruits_garden_sq"
			label="Площадь сада"
			descr="По каждой культуре в отдельности, га" />
		<Textarea
			id="apply_2-fruits_garden_sq_other"
			label="Площадь сада под другими культурами"
			descr="По каждой культуре в отдельности, га" />
		<hr />
		<h5>Валовый сбор</h5>
		<InputText
			id="apply_2-fruits_grosscollection"
			label="Валовый сбор ягодных культур"
			descr="Тонн в год"
			suffix="тонн" />
	</div>
	<div v-if="props.currentStep === 2">
		<h4>Шаг 3/5. Фасовка фруктов</h4>
		<Descr />

		<CheckboxInner
			id="apply_3-fruits_packing"
			label="Есть фасовка фруктов"
			innerType="textarea"
			innerLabel="Наличие фасовки"
			innerDescr="Например: корекс 250 гр, гофро-коробка 18 кг" />
	</div>
	<div v-if="props.currentStep === 3">
		<h4>Шаг 4/5. Хранилища и&nbsp;техника</h4>
		<Descr />
		<CheckboxInner
			inline="true"
			id="apply_4-fruits_stores"
			label="Хранилища, включая холодильники"
			innerType="input"
			innerLabel="Всего"
			innerDescr=""
			innerSuffix="тонн" />
		<CheckboxInner
			inline="true"
			id="apply_4-fruits_friges"
			label="Холодильники"
			innerType="input"
			innerLabel="Всего"
			innerDescr=""
			innerSuffix="тонн" />
		<CheckboxInner
			inline="true"
			id="apply_4-fruits_owntech"
			label="Собственная техника"
			descr="Трактора, сеятели, опрыскиватели, культиваторы, плуги и тд."
			innerType="input"
			innerLabel="Всего"
			innerDescr=""
			innerSuffix="шт" />
	</div>
	<div v-if="props.currentStep === 4">
		<h4>Шаг 5/5. НДС, доставка и&nbsp;каналы сбыта</h4>
		<Descr />

		<CheckboxInner
			inline="true"
			id="apply_5-fruits_nds"
			label="НДС"
			descr="Ставка НДС для вашего производства"
			innerType="input"
			innerLabel="Ставка НДС"
			innerDescr=""
			innerSuffix="%" />
		<CheckboxInner
			inline="true"
			id="apply_5-fruits_quickexpance"
			label="Быстрое увеличение объёмов производства"
			descr="В рамках календарного года"
			innerType="input"
			innerLabel="От текущего объема"
			innerDescr=""
			innerSuffix="%" />
		<Checkbox
			id="apply_5-fruits_delivery_rc"
			label="Доставка до распределительного центра/агрегатора" />
		<Checkbox
			id="apply_5-fruits_delivery_shop"
			label="Доставка до магазина" />
		<hr />
		<CheckboxInner
			id="apply_5-fruits_saleslines"
			label="Каналы сбыта продукции"
			innerType="textarea"
			innerLabel="Перечень каналов реализации"
			innerDescr="Например: рынки, ярмарки, мелкий опт" />
		<CheckboxInner
			id="apply_5-fruits_expretail"
			label="Опыт работы с сетями"
			innerType="textarea"
			innerLabel="Название сети и количество лет работы с ней"
			innerDescr="Например: Ашан - 4 года, Светофор – 1 год" />
	</div>
</template>

<script setup>
	import Descr from '@ui/Descr.vue';
	import InputText from '@ui/InputText.vue';
	import Textarea from '@ui/Textarea.vue';
	import Checkbox from '@ui/Checkbox.vue';
	import CheckboxInner from '@ui/CheckboxInner.vue';

	const props = defineProps({
		currentStep: {
			type: Number,
			default: 0,
		},
	});
</script>

<style lang="scss" scoped></style>
