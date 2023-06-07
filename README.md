# Форма связи

В практических целях воссоздан кусок лендинга magnit.ru/agro: форма заявки на контракт и форма вопроса.

[Демо](https://spiritius.net/demo/vuejs-form/index.html)

### Использовались плагины:

-   для валидации формы — [vee-validate](https://vee-validate.logaretm.com/v4)
-   для маски телефона — [maska](https://github.com/beholdr/maska)

### Особенности формы заявки на контракт:

-   присутствует индикатор текущего шага
-   от выбора вида продукции зависят дальнейшие шаги (их количество) и набор полей в них
-   поля блока Контакты одинаковы для всех видов поставщиков продукции
-   некоторые компоненты ("CheckboxInner": checkbox + input/textarea) имеют дочерний вызов ui-компонентов, данные для которых указываются как пропсы при вызове родительского компонента
-   реальная отправка на почту не реализовывалась, все поля выводятся в консоль после сабмита формы
-   после отправки выводится индикатор "успех", после которого можно заполнить форму еще раз (все поля обнуляются)
