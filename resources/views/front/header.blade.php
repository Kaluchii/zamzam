@section('header')
    <div class="header">
        <div class="header__container">
            <a href="#title" class="header__logo js_goto_anchor js_nav_link">
                <span class="header__logo-img"></span>
            </a>
            <nav class="header__nav nav js_menu">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#advantages" class="nav__link js_goto_anchor js_nav_link">ПРЕИМУЩЕСТВА</a></li>
                    <li class="nav__item"><a href="#plans" class="nav__link js_goto_anchor js_nav_link">ПЛАНИРОВКИ</a></li>
                    <li class="nav__item"><a href="#stock" class="nav__link js_goto_anchor js_nav_link">АКЦИИ</a></li>
                    <li class="nav__item"><a href="#contacts" class="nav__link js_goto_anchor js_nav_link">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <div class="header__phone-wrapper">
                <a href="tel:+77021652769" class="header__phone">+7 702 165-27-69</a>
            </div>
            <div class="header__call-wrapper">
                <a href="#feedback" class="header__call-btn button js_goto_anchor">ЗАКАЗАТЬ ЗВОНОК</a>
            </div>
            <div class="header__menu-open hamburger js_menu_toggle">
                <span class="hamburger__row hamburger__row--1"></span>
                <span class="hamburger__row hamburger__row--2"></span>
                <span class="hamburger__row hamburger__row--3"></span>
            </div>
        </div>
        <div class="header__shadow"></div>
    </div>
@endsection