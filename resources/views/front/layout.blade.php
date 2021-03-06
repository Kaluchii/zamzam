<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/zam.png" type="image/png">

    @include('front.styles')
    @yield('styles')
    @yield('meta')
</head>
<body>
    <div class="wrapper">
        @include('front.header')
        @yield('header')

        @yield('content')
    </div>

    @include('front.popups.layout')

    @include('front.scripts')
    @yield('scripts')

    @include('front.metriks')
    @yield('metriks')
</body>
</html>