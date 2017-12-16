@extends('front.layout')
@section('content')
{{--    @include('front.index.meta')
    <section class="title">
        <div class="title__container">
            <div class="title__facts">
                <div class="title__fact1">Дом готов</div>
                <div class="title__fact2">Ипотека</div>
            </div>
            <h1 class="title__title block-title">Коммерческие помещения в ЖК «Zam-Zam» 280 000 т/м²</h1>
            <h2 class="title__sub-title">Бизнес в респектабельном районе на левом берегу</h2>
            <a href="#" class="title__call-btn button button--orange">ЗАПИСАТЬСЯ НА ПРОСМОТР</a>
        </div>
    </section>

    <section class="advantages">
        <div class="advantages__container">
            <h2 class="advantages__title block-title">Преимущества наших помещений</h2>
            <div class="advantages__col">
                <div class="advantages__row">
                    <div class="advantages__item advantage advantage--big">
                        <p class="advantage__digit">400 <span class="advantage__text-on-digit">семей</span></p>
                        <h4 class="advantage__title">Готовы стать потенциальными клиентами вашего бизнеса</h4>
                    </div>
                </div>
                <div class="advantages__row">
                    <div class="advantages__item advantage">
                        <img src="/img/advantage3.png" alt="Валик" class="advantage__img">
                        <h4 class="advantage__title">Высокое качество черновой отделки</h4>
                        <p class="advantage__text">Левкас стен, стяжка полов, стеклопакеты, электросеть и водопровод</p>
                    </div>
                    <div class="advantages__item advantage">
                        <img src="/img/advantage4.png" alt="Высота 3 м метра" class="advantage__img">
                        <h4 class="advantage__title">Высота потолков</h4>
                        <p class="advantage__text">От 3,13 м до 3,78 м на первом этаже, 3,3 м на втором</p>
                    </div>
                </div>
            </div>
            <div class="advantages__col">
                <div class="advantages__row">
                    <div class="advantages__item advantage">
                        <img src="/img/advantage1.png" alt="Стратегическое расположение" class="advantage__img">
                        <h4 class="advantage__title">Стратегическое расположение</h4>
                        <p class="advantage__text">Престижный район на левом берегу с высокой плотностью заселения</p>
                    </div>
                    <div class="advantages__item advantage">
                        <img src="/img/advantage2.png" alt="Удобная парковка" class="advantage__img">
                        <h4 class="advantage__title">Удобная парковка</h4>
                        <p class="advantage__text">Удобная парковка по периметру жилого комплекса</p>
                    </div>
                </div>
                <div class="advantages__row">
                    <div class="advantages__item advantage">
                        <img src="/img/advantage5.png" alt="Витражные окна" class="advantage__img">
                        <h4 class="advantage__title">Витражные окна</h4>
                        <p class="advantage__text">Свободное проникновение света и визуальное расширение пространства</p>
                    </div>
                    <div class="advantages__item advantage">
                        <img src="/img/advantage6.png" alt="Ответственный застройщик" class="advantage__img">
                        <h4 class="advantage__title">Ответственный застройщик</h4>
                        <p class="advantage__text">Компания ТОО "Nur Astana Kurylys" специалист в области жилищного строительства</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="feedback">
        <div class="feedback__wrapper">
            <h2 class="feedback__title block-title">Закажите просмотр в удобное время</h2>
            <div class="feedback__input-rows form-id" id="feedback_call">
                <input type="hidden" name="form" class="form-input" value="call">
                <div class="feedback__row form-row">
                    <div class="form-row__validation-wrap feedback-input">
                        <input type="text" name="client_name" id="feedback_name" placeholder="Введите имя" autocomplete="false" required class="form-row__input form-input feedback-input__input">
                        <label class="feedback-input__label feedback-input__label--name" for="feedback_name"><span class="feedback-input__label-text">Имя</span></label>
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                    </div>
                </div>

                <div class="feedback__row form-row">
                    <div class="form-row__validation-wrap feedback-input">
                        <input type="tel" data-require="true" id="feedback_tel" class="form-row__input form-input feedback-input__input feedback-input__input--tel" maxlength="25" data-mask="(000) 000-00-00" name="phone">
                        <label class="feedback-input__label feedback-input__label--tel" for="feedback_tel"><span class="feedback-input__label-text">Телефон</span></label>
                        <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p></div>
                    </div>
                </div>
                <div class="feedback__row feedback__row--btn">
                    <input type="submit" value="ЗАКАЗАТЬ ЗВОНОК" class="feedback__btn form-row__send-form button send-form">
                </div>
            </div>
        </div>
    </section>

    <section class="plans">
        <div class="plans__wrapper">
            <h2 class="plans__title block-title">14 продуманных помещений</h2>
            <p class="plans__sub-title">Для различных видов предприятий</p>
            <ul class="plans__buttons-list">
                <li class="plans__button" data-item="plan1">157,1 м²</li>
            </ul>
            <ul class="plans__list">
                <li class="plans__item">
                    <img src="/img/plan_small1.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 1 этаже</p>
                    <p class="plans__item-price">157,1 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small2.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 1 этаже</p>
                    <p class="plans__item-price">152,8 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small3.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 2 этаже</p>
                    <p class="plans__item-price">253,8 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small4.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 1 этаже</p>
                    <p class="plans__item-price">128,5 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small5.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 2 этаже</p>
                    <p class="plans__item-price">206,8 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small6.png" alt="" class="plans__img">
                    <p class="plans__item-name">Двухэтажное помещение</p>
                    <p class="plans__item-price">258,4 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small7.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 2 этаже</p>
                    <p class="plans__item-price">199,1 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small8.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 2 этаже</p>
                    <p class="plans__item-price">253,8 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small9.png" alt="" class="plans__img">
                    <p class="plans__item-name">Двухэтажное помещение</p>
                    <p class="plans__item-price">353,5 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small10.png" alt="" class="plans__img">
                    <p class="plans__item-name">Двухэтажное помещение</p>
                    <p class="plans__item-price">327,5 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small11.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 2 этаже</p>
                    <p class="plans__item-price">217 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small12.png" alt="" class="plans__img">
                    <p class="plans__item-name">Двухэтажное помещение</p>
                    <p class="plans__item-price">296,9 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small13.png" alt="" class="plans__img">
                    <p class="plans__item-name">Помещение на 2 этаже</p>
                    <p class="plans__item-price">144 м²</p>
                </li>
                <li class="plans__item">
                    <img src="/img/plan_small14.png" alt="" class="plans__img">
                    <p class="plans__item-name">Двухэтажное помещение</p>
                    <p class="plans__item-price">1093 м²</p>
                </li>
            </ul>
        </div>
    </section>

    <section class="stock">
        <div class="stock__wrapper">
            <p class="stock__rec">Акция!</p>
            <h2 class="stock__title block-title">Двухэтажное помещение под тренажерный зал</h2>
            <div class="stock__row">
                <div class="stock__col">
                    <p class="stock__info-title">Площадь</p>
                    <p class="stock__info-dec">1093 м²</p>
                </div>
                <div class="stock__col">
                    <p class="stock__info-title">Цена</p>
                    <p class="stock__info-dec">220 000 т/м²</p>
                </div>
            </div>
            <a href="#" class="stock__btn button button--green"></a>
        </div>
    </section>

    <section class="contacts">
        <div class="contacts__wrapper">
            <h2 class="contacts__title block-title">Приходите в гости</h2>
            <div class="contacts__contact-block contact-block">
                <div class="contact-block__col-1">
                    <div class="contact-block__info-row">
                        <p class="contact-block__info-title">ГОЛОВНОЙ ОФИС:</p>
                        <p class="contact-block__info-text">ул.&nbsp;Ермекова, 1/1А, ЖК&nbsp;Арай&nbsp;3 <br> +7&nbsp;(7172)&nbsp;795&nbsp;044</p>
                    </div>
                    <div class="contact-block__info-row">
                        <p class="contact-block__info-title">ОТДЕЛ ПРОДАЖ:</p>
                        <p class="contact-block__info-text">ул.&nbsp;Ермекова, 1/1А, ЖК&nbsp;Арай&nbsp;3 <br> +7&nbsp;(7172)&nbsp;795&nbsp;044</p>
                    </div>
                    <div class="contact-block__social-wrapper">
                        <a href="#" class="contact-block__social-item"></a>
                        <a href="#" class="contact-block__social-item"></a>
                    </div>
                </div>
                <div class="contact-block__col-2">
                    <div class="contact-block__tab-1 is-active"></div>
                    <div class="contact-block__tab-2">
                        <div class="contact-block__map" id="map"></div>
                    </div>
                    <div class="contact-block__buttons">
                        <div class="contact-block__button is-active">Схема проезда</div>
                        <div class="contact-block__button">Карта</div>
                    </div>
                </div>
            </div>

            <div class="contacts__feedback b-feedback">
                <h2 class="b-feedback__title block-title">Поможем выбрать помещение для вашего бизнеса</h2>
                <p class="b-feedback__sub-title">Запишитесь на просмотр прямо сейчас!</p>
                <div class="b-feedback__input-rows form-id" id="b-feedback_call">
                    <input type="hidden" name="form" class="form-input" value="call">
                    <div class="b-feedback__row form-row">
                        <div class="form-row__validation-wrap feedback-input">
                            <input type="text" name="client_name" id="b-feedback_name" placeholder="Введите имя" autocomplete="false" required class="form-row__input form-input feedback-input__input">
                            <label class="b-feedback-input__label feedback-input__label--name" for="b-feedback_name"><span class="b-feedback-input__label-text">Имя</span></label>
                            <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Как к вам обращаться</p></div>
                        </div>
                    </div>

                    <div class="b-feedback__row form-row">
                        <div class="form-row__validation-wrap feedback-input">
                            <input type="tel" data-require="true" id="b-feedback_tel" class="form-row__input form-input feedback-input__input feedback-input__input--tel" maxlength="25" data-mask="(000) 000-00-00" name="phone">
                            <label class="b-feedback-input__label feedback-input__label--tel" for="b-feedback_tel"><span class="b-feedback-input__label-text">Телефон</span></label>
                            <div class="form-row__tooltip-wrap form-row__tooltip-wrap--popup-none"><p class="form-row__tooltip form-row__tooltip--border">Телефонный номер для связи</p></div>
                        </div>
                    </div>
                    <div class="b-feedback__row feedback__row--btn">
                        <input type="submit" value="ЗАКАЗАТЬ ЗВОНОК" class="b-feedback__btn form-row__send-form button send-form">
                    </div>
                </div>
            </div>

            <footer class="contacts__footer footer">
                <p class="footer__copy">© 2017 Zam-Zam Group</p>
                <div class="footer__wonderbar-wrap">
                    <p class="footer__help">Помогает продавать</p>
                    <img src="/img/wonderbar.png" alt="Маркетинговое агенство Wonderbar" class="footer__img">
                </div>
            </footer>
        </div>
    </section>
    --}}
@endsection