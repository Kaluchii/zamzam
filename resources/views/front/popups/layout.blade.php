<div class="popup mfp-with-anim mfp-hide" id="layout">
    <div class="popup__container">
        <div class="popup__info">
            <p class="popup__name js_name"></p>
            <p class="popup__area"><span class="popup__area-text js_area"></span> м²</p>
            <div class="popup__layout-choice layout-choice js_floor_toggle" data-id="">
                <div class="layout-choice__btn layout-choice__btn--1 js_floor_btn is-active" data-item="1">1 этаж</div>
                <div class="layout-choice__btn layout-choice__btn--2 js_floor_btn" data-item="2">2 этаж</div>
                <span class="layout-choice__btn-underline"></span>
            </div>
            <p class="popup__price-title">Стоимость</p>
            <p class="popup__price"><span class="popup__price-text js_price"></span> т</p>
        </div>
        <div class="popup__bid">
            <p class="popup__bid-text">Понравилось помещение?<br>Оставьте заявку</p>
            <div class="popup__input-rows form-id" id="popup_call">
                <input type="hidden" name="form" class="js_form-input" value="call">
                <div class="popup__row form-row">
                    <div class="form-row__validation-wrap popup-input">
                        <input type="text" name="client_name" id="popup_name" autocomplete="false" required class="js_form-input form-row__input popup-input__input">
                        <label class="popup-input__label" for="popup_name">Имя</label>
                    </div>
                </div>

                <div class="popup__row form-row">
                    <div class="form-row__validation-wrap popup-input">
                        <input type="tel" required data-require="true" id="popup_tel" class="js_form-input form-row__input popup-input__input" maxlength="25" data-mask="+7 (000) 000-00-00" name="phone">
                        <label class="popup-input__label" for="popup_tel">Телефон</label>
                    </div>
                </div>
                <div class="popup__row popup__row--btn">
                    <input type="submit" value="ЗАПИСАТЬСЯ НА ПРОСМОТР" class="feedback__btn button button--orange button--small send-form">
                </div>
            </div>
            <div class="popup__thanks-wrapper js_popup_thanks">
                <div class="popup__thanks">
                    <p class="popup__thanks-text">Спасибо!<br><span class="popup__thanks-text-small">Ваша заявка принята</span></p>
                </div>
            </div>
        </div>
        <div class="popup__layout-view">
            <div class="popup__tabs">
                <div class="popup__tab js_floor_1 is-active">
                    <div class="popup__layout-img-wrapper js_popup_img_1 is-active">
                        <img src="" alt="" class="popup__layout-img js_floor1_3d">
                    </div>
                    <div class="popup__layout-img-wrapper js_popup_img_2">
                        <img src="" alt="" class="popup__layout-img popup__layout-img--2d js_floor1_2d">
                    </div>
                    <div class="popup__buttons">
                        <div class="popup__button js_d_btn is-active" data-item="1">3D</div>
                        <div class="popup__button js_d_btn" data-item="2">2D</div>
                    </div>
                </div>
                <div class="popup__tab js_floor_2">
                    <div class="popup__layout-img-wrapper js_popup_img_3 is-active">
                        <img src="" alt="" class="popup__layout-img js_floor2_3d">
                    </div>
                    <div class="popup__layout-img-wrapper js_popup_img_4">
                        <img src="" alt="" class="popup__layout-img popup__layout-img--2d js_floor2_2d">
                    </div>
                    <div class="popup__buttons">
                        <div class="popup__button js_d_btn is-active" data-item="3">3D</div>
                        <div class="popup__button js_d_btn" data-item="4">2D</div>
                    </div>
                </div>
            </div>
            <p class="popup__for-example js_desc"></p>
            <img src="" alt="" class="popup__block-img js_block_location">
            <a href="" download class="popup__download js_download">Скачать планировку</a>
        </div>
    </div>
    <div class="popup__close close-btn js_popup_close">
        <div class="close-btn__container">
            <span class="close-btn__row close-btn__row--first"></span>
            <span class="close-btn__row close-btn__row--second"></span>
        </div>
    </div>
</div>