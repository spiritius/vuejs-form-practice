<template>
	<div>
		<div v-if="props.currentStep === 1">
			<h4>Шаг 2/5. Площадь и сбор</h4>
			<Descr />

			<h5>Качество почвы</h5>
			<Textarea
				id="apply_2-vegs_soil"
				label="Какие почвы и в каком процентном соотношении представлены в хозяйстве" />
			<hr />
			<h5>Площадь почвы</h5>
			<div class="row">
				<div class="col-12 col-lg-6">
					<InputText
						id="apply_2-vegs_square"
						label="Площадь с/х земель"
						descr="Арендуемая и в собственности"
						suffix="га" />
				</div>
				<div class="col-12 col-lg-6">
					<InputText
						id="apply_2-vegs_square_irrigated"
						label="Площадь всех орошаемых земель"
						descr="Арендуемая и в собственности"
						suffix="га" />
				</div>
			</div>
			<hr />
			<h5>Площадь посева</h5>
			<Textarea
				id="apply_2-vegs_square_vegs"
				label="Площадь посева овощных культур борщевой группы"
				descr="По каждой культуре в отдельности, га" />
			<Textarea
				id="apply_2-vegs_square_other"
				label="Площадь посева других овощных культур в открытом грунте"
				descr="По каждой культуре в отдельности, га" />
			<hr />
			<h5>Севооборот</h5>
			<Textarea
				id="apply_2-vegs_sowingturnover"
				label="Соблюдение севооборота за 3 года"
				descr="Количество полей в севообороте и очерёдность культур" />
			<hr />
			<h5>Валовый сбор</h5>
			<InputText
				id="apply_2-vegs_grosscollection"
				label="Валовый сбор овощных культур"
				descr="Тонн в год"
				suffix="тонн" />
		</div>
		<div v-if="props.currentStep === 2">
			<h4>Шаг 3/5. Мойка и фасовка овощей</h4>
			<Descr />

			<CheckboxInner
				id="apply_3-vegs_vegwashing"
				label="Есть мойка овощей"
				innerType="textarea"
				innerLabel="Возможность мойки по каждой культуре в отдельности"
				innerDescr="Например: морковь — нет, картофель — да" />
			<CheckboxInner
				id="apply_3-vegs_vegpacking"
				label="Есть фасовка овощей"
				innerType="textarea"
				innerLabel="Наличие фасовки, какой квант используется"
				innerDescr="Например: корекс 250 г, гофро-коробка 18 кг" />
		</div>
		<div v-if="props.currentStep === 3">
			<h4>Шаг 4/5. Хранилища и техника</h4>
			<Descr />
			<CheckboxInner
				inline="true"
				id="apply_4-vegs_storages"
				label="Хранилища"
				innerType="input"
				innerLabel="Всего"
				innerDescr=""
				innerSuffix="тонн" />
			<CheckboxInner
				inline="true"
				id="apply_4-vegs_friges"
				label="Холодильники"
				innerType="input"
				innerLabel="Всего"
				innerDescr=""
				innerSuffix="тонн" />
			<CheckboxInner
				inline="true"
				id="apply_4-vegs_owntech"
				label="Собственная техника"
				descr="Трактора, сеятели, опрыскиватели, культиваторы, плуги и тд."
				innerType="input"
				innerLabel="Всего"
				innerDescr=""
				innerSuffix="шт" />
		</div>
		<div v-if="props.currentStep === 4">
			<h4>Шаг 5/5. НДС, доставка и каналы сбыта</h4>
			<Descr />

			<CheckboxInner
				inline="true"
				id="apply_5-vegs_nds"
				label="НДС"
				descr="Ставка НДС для вашего производства"
				innerType="input"
				innerLabel="Ставка НДС"
				innerDescr=""
				innerSuffix="%" />
			<CheckboxInner
				inline="true"
				id="apply_5-vegs_quickexpance"
				label="Быстрое увеличение объёмов производства"
				descr="В рамках календарного года"
				innerType="input"
				innerLabel="От текущего объема"
				innerDescr=""
				innerSuffix="%" />
			<Checkbox
				id="apply_5-vegs_delivery_rc"
				label="Доставка до распределительного центра/агрегатора" />
			<Checkbox
				id="apply_5-vegs_delivery_shop"
				label="Доставка до магазина" />
			<hr />
			<CheckboxInner
				id="apply_5-vegs_saleslines"
				label="Каналы сбыта продукции"
				innerType="textarea"
				innerLabel="Например: рынки, ярмарки, мелкий опт" />
			<CheckboxInner
				id="apply_5-vegs_expretail"
				label="Опыт работы с сетями"
				innerType="textarea"
				innerLabel="Например: Ашан - 4 года, Светофор – 1 год" />
		</div>
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
