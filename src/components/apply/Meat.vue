<template>
	<div v-if="props.currentStep === 1">
		<h4>Шаг 2/4. Категории товаров и производство</h4>
		<Descr />

		<h5 class="mt-4">Категории товаров</h5>
		<Textarea
			id="apply_2-meat_categories"
			label="Категории товаров" />
		<hr />
		<CheckboxInner
			id="apply_2-meat_produce"
			label="Производство мяса"
			innerType="textarea"
			innerLabel="Производство мяса"
			innerDescr="Например, свинина - 4 т/м, говядина - 1,2 т/м" />
		<Checkbox
			id="apply_2-meat_processing"
			label="Наличие переработки мяса" />
		<hr />
		<CheckboxInner
			id="apply_2-meat_poultry"
			label="Производство мяса птицы"
			innerType="textarea"
			innerLabel="Производство мяса птицы"
			innerDescr="Например, курица - 4 т/м, индейка - 1,2 т/м" />
		<Checkbox
			id="apply_2-meat_poultry-processing"
			label="Наличие переработки мяса птицы" />
		<hr />
		<CheckboxInner
			id="apply_2-meat_milk"
			label="Производство молока"
			innerType="textarea"
			innerLabel="Производство молока"
			innerDescr="Тонн в месяц" />
		<hr />
		<CheckboxInner
			id="apply_2-meat_eggs"
			label="Производство яйца"
			innerType="textarea"
			innerLabel="Производство яйца"
			innerDescr="Например, куриное яйцо - 4 000 шт/м, перепелиное яйцо - 1 200 шт/м" />
	</div>
	<div v-if="props.currentStep === 2">
		<h4>Шаг 3/4. ГОСТы, техника, упаковка</h4>
		<Descr />

		<h5 class="mt-4">Стандарты и ГОСТы</h5>
		<Textarea
			id="apply_3-meat_standarts"
			label="Стандарты и ГОСТы, используемые в производстве" />
		<hr />
		<h5 class="mb-4">Упаковка, этикетки, штрих-код</h5>
		<Checkbox
			id="apply_3-meat_packing"
			label="Упаковка" />
		<Checkbox
			id="apply_3-meat_labels"
			label="Этикетки" />
		<Checkbox
			id="apply_3-meat_barcode"
			label="Штрих-код" />
		<hr />
		<h5 class="mb-4">Меркурий, ЭДО, маркировка</h5>
		<Checkbox
			id="apply_3-meat_mercury"
			label="Система «Меркурий»" />
		<Checkbox
			id="apply_3-meat_edo"
			label="ЭДО"
			descr="Электронный документооборот" />
		<Checkbox
			id="Маркировка «Честный знак»"
			label="Маркировка «Честный знак»" />
		<hr />
		<h5 class="mb-4">Хранилища и техника</h5>
		<CheckboxInner
			inline="true"
			id="apply_4-meat_stores"
			label="Хранилища"
			innerType="input"
			innerLabel="Всего"
			innerDescr=""
			innerSuffix="тонн" />
		<CheckboxInner
			inline="true"
			id="apply_4-meat_friges"
			label="Холодильники"
			innerType="input"
			innerLabel="Всего"
			innerDescr=""
			innerSuffix="тонн" />
		<CheckboxInner
			inline="true"
			id="apply_4-meat_owntech"
			label="Собственная техника"
			descr="Трактора, сеятели, опрыскиватели, культиваторы, плуги и тд."
			innerType="input"
			innerLabel="Всего"
			innerDescr=""
			innerSuffix="шт" />
	</div>
	<div v-if="props.currentStep === 3">
		<h4>Шаг 4/4. НДС, доставка и каналы сбыта</h4>
		<Descr />
		<CheckboxInner
			inline="true"
			id="apply_5-meat_nds"
			label="НДС"
			descr="Ставка НДС для вашего производства"
			innerType="input"
			innerLabel="Ставка НДС"
			innerDescr=""
			innerSuffix="%" />
		<CheckboxInner
			inline="true"
			id="apply_5-meat_quickexpance"
			label="Быстрое увеличение объёмов производства"
			descr="В рамках календарного года"
			innerType="input"
			innerLabel="От текущего объема"
			innerDescr=""
			innerSuffix="%" />
		<Checkbox
			id="apply_5-meat_delivery_rc"
			label="Доставка до распределительного центра/агрегатора" />
		<Checkbox
			id="apply_5-meat_delivery_shop"
			label="Доставка до магазина" />
		<hr />
		<CheckboxInner
			id="apply_5-meat_saleslines"
			label="Каналы сбыта продукции"
			innerType="textarea"
			innerLabel="Например: рынки, ярмарки, мелкий опт" />
		<CheckboxInner
			id="apply_5-meat_expretail"
			label="Опыт работы с сетями"
			innerType="textarea"
			innerLabel="Например: Ашан - 4 года, Светофор – 1 год" />
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
