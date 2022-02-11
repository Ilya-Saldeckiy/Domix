$(document).ready(function () {

    if ($('.header-search__voice').is('.header-search__voice')) {
        $('.header-search__voice').on('click', function () {
            event.preventDefault();
            $(this).toggleClass('active');
            if (!$(this).hasClass('active')) {
                $(this).find('img').attr('src', '');
            } else {
                $(this).find('img').attr('src', $(this).find('img').attr('data-src'));
            }
        });

        document.addEventListener('click', function (event) {
            var e = $('.header-search__voice');
            for (var i = 0; i < e.length; i++) {
                if (!e.get(i).contains(event.target)) {
                    $(e.get(i)).removeClass('active');
                    $(e.get(i)).find('img').attr('src', '');
                }
            }
        });

    }

    /*start single slider*/
    if ($('.single-left').is('.single-left')) {
        $('.single-main-slider_basic').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            speed: 0,
            initialSlide: 2,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        asNavFor: '.single-vertical-slider_basic',
                        swipe: true,
                        fade: false,
                        speed: 500,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        asNavFor: '.single-vertical-slider_basic',
                        swipe: false,
                        infinite: false,
                        fade: false,
                        speed: 100,
                        touchThreshold: 50,
                        waitForAnimate: false,
                    }
                },
            ]
        });
        $('.single-vertical-slider_basic').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            vertical: true,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        asNavFor: '.single-main-slider_basic',
                        swipe: true,
                        focusOnSelect: true,
                        initialSlide: 2,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        variableWidth: true,
                        vertical: false,
                        asNavFor: '.single-main-slider_basic',
                        swipe: false,
                        focusOnSelect: true,
                        swipeToSlide: true,
                        initialSlide: 2,
                        infinite: false,
                        centerMode: true,
                        speed: 100,
                        touchThreshold: 50,
                        waitForAnimate: false,
                    }
                },
            ]
        });


        var single_main_slider = $(".modal-slider .single-main-slider");
        single_main_slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: false,
            asNavFor: '.modal-slider .single-vertical-slider',
            swipe: false,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        swipe: true,
                        speed: 500,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        infinite: false,
                        swipe: true,
                        waitForAnimate: false,
                        useTransform: false,
                    }
                },
            ]
        });

        single_main_slider.on('wheel', (function (e) {
            e.preventDefault();
            if (e.originalEvent.deltaY < 0) {
                $(this).slick('slickNext');
            } else {
                $(this).slick('slickPrev');
            }
        }));

        $('.modal-slider .single-vertical-slider').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            arrows: false,
            vertical: true,
            infinite: false,
            asNavFor: '.modal-slider .single-main-slider',
            focusOnSelect: true,
            verticalSwiping: false,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 1023,
                    settings: {
                        variableWidth: true,
                        vertical: false,
                        infinite: true,
                    }
                },
            ]
        });

        if ($('.modal-slider .wrap .right .slider-arrows').is('.modal-slider .wrap .right .slider-arrows')) {
            $('.modal-slider .wrap .right .slider-arrows .small-slider-arrow_prev').on('click', function () {
                event.preventDefault();
                $(this).closest('.right').find('.single-main-slider').slick('slickPrev');
            });
            $('.modal-slider .wrap .right .slider-arrows .small-slider-arrow_next').on('click', function () {
                event.preventDefault();
                $(this).closest('.right').find('.single-main-slider').slick('slickNext');
            });
        }

        $('.modal-slider .single-main-slider').on('afterChange', function (slick, currentSlide) {
            if ($('.modal-slider .single-main-slider').find('.item.slick-current').hasClass('item_video')) {
                $('.modal-slider .single-main-slider .item.slick-current').find('video').trigger('play');
            } else {
                $('.modal-slider .single-main-slider .item.item_video').find('video').trigger('pause');
            }
        });

        $('.single-main-slider_basic').on('afterChange', function (slick, currentSlide) {
            if ($('.single-main-slider_basic').find('.item.slick-current').hasClass('item_video')) {
                $('.single-main-slider_basic .item.slick-current').find('video').get(0).play();
            } else {
                $('.single-main-slider_basic .item.item_video').find('video').get(0).pause();
            }
        });


        if ($('.single-vertical-arrows').is('.single-vertical-arrows')) {
            $('.single-vertical-arrow__prev').on('click', function () {
                event.preventDefault();
                $(this).closest('.single-vertical').find('.single-vertical-slider').slick('slickPrev');
            });
            $('.single-vertical-arrow__next').on('click', function () {
                event.preventDefault();
                $(this).closest('.single-vertical').find('.single-vertical-slider').slick('slickNext');
            });
        }

        $('.single-vertical-slider_basic .item').hover(function () {
            var vertical_slider_index = Number($(this).attr('data-slick-index'));
            $('.single-vertical-slider_basic .item').removeClass('active');
            $(this).addClass('active');
            $('.single-main-slider_basic').stop(true, true).slick('slickGoTo', vertical_slider_index);
        }, function () {

        });

        $('.single-main-slider_basic .item').not('.item_360').swipe(function (direction) {
            if (direction == "upleft" || direction == "downleft" || direction == "left") {
                $('.single-main-slider_basic').slick('slickNext');
            }
            if (direction == "upright" || direction == "downright" || direction == "right") {
                $('.single-main-slider_basic').slick('slickPrev');
            }
        }, {
            preventDefault: false,
            mouse: false,
        });

        $('.single-main-slider_basic .item').on('click', function () {
            event.preventDefault();
            $('body').addClass('modal_body_hidden');
            var basic_slider_index = Number($(this).attr('data-slick-index'));
            $('.modal-slider').fadeIn('300', function () {
                var top_parent = $('.modal-slider .single-vertical .item_point').offset().top;
                var top_parent2 = $('.modal-slider .single-vertical .slick-list').offset().top;
                top_parent = top_parent - 210 - top_parent2;
                var left_parent = $('.modal-slider .single-vertical .item_point').offset().left;
                $('.init-360').css('top', top_parent + 'px');
                $('.init-360').css('left', left_parent + 'px');
                $('.video_init2').css('top', (top_parent + 101) + 'px');
                $('.video_init2').css('left', left_parent + 'px');

                var modal_prefect_scroll = new PerfectScrollbar('.modal-slider .single-vertical', {
                    suppressScrollX: false,
                });

                $(window).resize(function () {
                    modal_prefect_scroll.update();
                    var top_parent = $('.modal-slider .single-vertical .item_point').offset().top;
                    var top_parent2 = $('.modal-slider .single-vertical .slick-list').offset().top;
                    top_parent = top_parent - 210 - top_parent2;
                    var left_parent = $('.modal-slider .single-vertical .item_point').offset().left;
                    $('.init-360').css('top', top_parent + 'px');
                    $('.init-360').css('left', left_parent + 'px');
                    $('.video_init2').css('top', (top_parent + 101) + 'px');
                    $('.video_init2').css('left', left_parent + 'px');
                });

            });
            $('.modal-slider .single-main-slider').slick('setPosition');
            $('.modal-slider .single-vertical-slider').slick('setPosition');
            $('.modal-slider .single-main-slider').slick('slickGoTo', basic_slider_index);

        });

        var zoom_width = $(window).width();
        if (zoom_width < 1200) {
            $('.single-main-slider_basic .item').off('click');
            $('.single-main-slider_basic .item').each(function () {
                $(this).attr('data-fancybox', 'gallery1');
            });
        }

        $('[data-fancybox]').fancybox({
            infinite: false,
            video: {
                tpl:
                    '<video src="{{src}}" class="fancybox-video" playsinline loop="loop" preload="metadata" muted=""></video>',
                format: "",
                autoStart: true
            },
            afterShow: function (instance, current) {
                $('.single-main-slider_basic').slick('slickGoTo', instance['currIndex']);
                $('.shop-item').slick('slickGoTo',instance['currIndex']);
            },
        });

        $().fancybox({
            selector : '.slick-slide:not(.slick-cloned)',
            hash     : false
        });

        var scrol_prev_mob = $(window).width();
        if (scrol_prev_mob < 767) {
            $('.single-main-slider_basic').on('afterChange', function (slick, currentSlide) {
                var containerOuterWidth = $('.single-vertical-slider_basic .slick-list').outerWidth();
                var itemOuterWidth = $('.single-vertical-slider_basic .item').outerWidth();
                var itemOffsetLeft = $('.single-vertical-slider_basic .item.slick-current').offset().left;
                var containerScrollLeft = $('.single-vertical-slider_basic .slick-list').scrollLeft();

                var positionCetner = (containerOuterWidth / 2 + itemOuterWidth / 2);

                var scrollLeftUpd = containerScrollLeft + itemOffsetLeft - positionCetner;

                $('.single-vertical-slider_basic .slick-list').animate({
                    scrollLeft: scrollLeftUpd
                }, 50);
            });
        }

    }

    if ($('.modal-slider .close').is('.modal-slider .close')) {
        $('.modal-slider .close').on('click', function () {
            event.preventDefault();
            $(this).closest('.modal-slider').fadeOut(300);
            $('body').removeClass('modal_body_hidden');
        });
    }
    /*end single slider*/


    if ($('.catalog-filtr__search-wr').is('.catalog-filtr__search-wr')) {
        $('.catalog-filtr__search-wr a').on('click', function () {
            event.preventDefault();
            $(this).closest('.catalog-filtr__search-wr').find('.catalog-filtr__search').val(null);
        });
    }

    if ($('.single-like').is('.single-like')) {
        $('.single-like').on('click', function () {
            event.preventDefault();
            $(this).toggleClass('active');
        });
    }
    var swidth = (window.innerWidth - $(window).width());
    if ($('.header-middle__catalog').is('.header-middle__catalog')) {
        var catalog_desctope_ps;
        $('#catalog-desctope').on('shown.bs.collapse', function () {
            $('body').addClass('header-middle-open');
            $('.header-middle-open').css('padding-right', swidth + 'px');
            $('.header-middle-open .header-middle.sticky').css('padding-right', swidth + 'px');
            $('.header-middle-open .header-middle.sticky .catalog-desctope').css('padding-right', swidth + 'px');
            catalog_desctope_ps = new PerfectScrollbar($('#catalog-desctope').get(0), {
                suppressScrollX: true,
            });
        })
        $('#catalog-desctope').on('hide.bs.collapse', function () {
            $('body').removeClass('header-middle-open');
            $('body').css('padding-right', '0px');
            $('.header-middle').css('padding-right', '0px');
            $('.header-middle .catalog-desctope').css('padding-right', '0px');
            $('#catalog-desctope').get(0).scrollTop = 0;
            catalog_desctope_ps.update();
            catalog_desctope_ps.destroy();
        })
    }

    /*start dropdown header*/
    if ($('.header-menu .dropdown').is('.header-menu .dropdown')) {
        $('.header-menu .dropdown > a').on('click', function () {
            event.preventDefault();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).closest('.dropdown').find('.dropdown-body').slideUp(300);
            } else {
                $(this).addClass('active');
                $(this).closest('.dropdown').find('.dropdown-body').slideDown(300);
            }
        });
        document.addEventListener('click', function (event) {
            var e = $('.header-menu .dropdown');
            for (var i = 0; i < e.length; i++) {
                if (!e.get(i).contains(event.target)) {
                    $(e.get(i)).find('.dropdown-body').slideUp('300');
                    $(e.get(i)).find('a').removeClass('active');
                }
            }
        });
    }
    /*end dropdown header*/

    /*start show menu on mob*/
    if ($('.mob-menu').is('.mob-menu')) {
        $('.header-middle-menu-link, .header-mob-catalog').on('click', function () {
            event.preventDefault();
            if ($('.mob-menu').is(':visible')) {
                $(this).removeClass('active');
                $('.mob-menu').fadeOut(300);
                $('body').removeClass('overflow_h');
            } else {
                $(this).addClass('active');
                $('.mob-menu').fadeIn(300);
                $('body').addClass('overflow_h');
            }
        });
        $('.mob-menu-right').on('click', function () {
            event.preventDefault();
            $('.header-middle-menu-link').removeClass('active');
            $('.mob-menu').fadeOut(300);
            $('body').removeClass('overflow_h');
        });
    }
    if ($('.mob-menu-catalog').is('.mob-menu-catalog')) {
        $('.mob-menu-catalog').on('click', function () {
            event.preventDefault();
            $(this).closest('.mob-menu-wr').children('.mob-menu-children').fadeIn(300);
            $('.mob-menu').addClass('active');
        });
    }
    if ($('.mob-menu-children-list').is('.mob-menu-children-list')) {
        $('.mob-menu-children-list > li > a').on('click', function () {
            if ($(this).closest('li').children('.mob-menu-children').length != 0) {
                event.preventDefault();
                $(this).closest('li').children('.mob-menu-children').fadeIn(300);
                $(this).closest('.mob-menu-children').addClass('active');
            }
        });
    }
    if ($('.mob-menu-children__close').is('.mob-menu-children__close')) {
        $(document).on('click', '.mob-menu-children__close-first', function () {
            event.preventDefault();
            $(this).closest('.mob-menu').removeClass('active');
        });
        $(document).on('click', '.mob-menu-children__close', function () {
            event.preventDefault();
            $(this).closest('.mob-menu-children.active').removeClass('active');
            $(this).closest('.mob-menu-children').fadeOut(300);
        });
    }
    var w = $(window).width();
    $(window).resize(function () {
        if ($(window).width() == w) return;
        w = $(window).width();
        if (w < 768) {
            if ($('.mob-menu').is(':visible')) {
                $('body').addClass('overflow_h');
            } else {
                $('body').removeClass('overflow_h');
            }
        } else {
            $('body').removeClass('overflow_h');
            $('#modal-search').modal('hide');
        }
    });
    /*end show menu on mob*/

    /*start slider-banner*/
    if ($('.slider-banner-wr').is('.slider-banner-wr')) {
        $('.slider-banner-cont').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        infinite: false,
                        swipe: false,
                    }
                },
            ]
        });
        if ($('.slider-banner-arrow').is('.slider-banner-arrow')) {
            $('.slider-banner-arrow_prev').on('click', function () {
                event.preventDefault();
                $(this).closest('.slider-banner-wr').find('.slider-banner-cont').slick('slickPrev');
            });
            $('.slider-banner-arrow_next').on('click', function () {
                event.preventDefault();
                $(this).closest('.slider-banner-wr').find('.slider-banner-cont').slick('slickNext');
            });
        }
    }
    /*end slider-banner*/

    /*start big-slider*/
    if ($('.big-slider-wr').is('.big-slider-wr')) {
        $('.big-slider-wr').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
        });
    }
    /*end big-slider*/

    /*start small-slider*/
    if ($('.small-slider-wr').is('.small-slider-wr')) {
        function small_slider_init() {
            $('.small-slider-cont').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                swipeToSlide: true,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: 'unslick',
                    },
                ]
            });
            if ($('.small-slider-arrows').is('.small-slider-arrows')) {
                $('.small-slider-arrow_prev').on('click', function () {
                    event.preventDefault();
                    $(this).closest('.small-slider-wr').find('.small-slider-cont').slick('slickPrev');
                });
                $('.small-slider-arrow_next').on('click', function () {
                    event.preventDefault();
                    $(this).closest('.small-slider-wr').find('.small-slider-cont').slick('slickNext');
                });
            }
        }

        function small_slider_destruct() {
            $('.small-slider-cont').slick('unslick');
        }

        small_slider_init();

        var w2 = $(window).width();
        if (w2 < 768) {
            small_slider_destruct();
        } else {
            if ($('.small-slider-cont').hasClass('slick-initialized')) {

            } else {
                small_slider_init();
            }
        }

        $(window).on('resize', function () {

            if ($(window).width() == w2) return;
            w2 = $(window).width();
            if (w2 < 768) {
                small_slider_destruct();
            } else {
                if ($('.small-slider-cont').hasClass('slick-initialized')) {

                } else {
                    small_slider_init();
                }
            }
        });
    }
    /*end small-slider*/

    /*start middle-slider*/
    if ($('.middle-slider-wr').is('.middle-slider-wr')) {
        $('.middle-slider-cont').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        infinite: false,
                        swipe: false,
                    }
                },
            ]
        });
        if ($('.middle-slider-arrow').is('.middle-slider-arrow')) {
            $('.middle-slider-arrow_prev').on('click', function () {
                event.preventDefault();
                $(this).closest('.middle-slider-wr').find('.middle-slider-cont').slick('slickPrev');
            });
            $('.middle-slider-arrow_next').on('click', function () {
                event.preventDefault();
                $(this).closest('.middle-slider-wr').find('.middle-slider-cont').slick('slickNext');
            });
        }
    }
    /*end slider-banner*/

    /*start advantages*/
    if ($('.advantages').is('.advantages')) {
        $('.advantages-slider').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        swipeToSlide: true,
                        slidesToShow: 1,
                        variableWidth: true,
                    }
                },
            ]
        });
    }
    /*end advantages*/

    /*start catalog-zag__filtr*/
    if ($('.catalog-zag__filtr').is('.catalog-zag__filtr')) {
        var catalog_zag_filtr = new PerfectScrollbar('.catalog-zag__filtr', {
            suppressScrollY: false,
            useBothWheelAxes: true
        });


        var w3 = $(window).width();
        $(window).resize(function () {
            if ($(window).width() == w3) return;
            w3 = $(window).width();
            if (w3 < 1200) {
                catalog_zag_filtr.update();
            }
        });
    }
    /*end catalog-zag__filtr*/

    /*start slider-range*/
    if ($('.slider-range').is('.slider-range')) {
        $("#slider-range").slider({
            range: true,
            min: 290,
            max: 95000,
            values: [10000, 50000],
            slide: function (event, ui) {
                $("#item_col2_i1").val(ui.values[0]);
                $("#item_col2_i2").val(ui.values[1]);
            }
        });
        $("#item_col2_i1").val($("#slider-range").slider("values", 0));
        $("#item_col2_i2").val($("#slider-range").slider("values", 1));

        $('#item_col2_i1').change(function () {
            var val = $(this).val();
            var val2 = $('#item_col2_i2').val();
            $("#slider-range").slider({values: [val, val2]});
        });
        $('#item_col2_i2').change(function () {
            var val = $(this).val();
            var val2 = $('#item_col2_i1').val();
            $("#slider-range").slider({values: [val2, val]});
        });
    }
    /*end slider-range*/

    /*start formstyler*/
    if ($('input[type="checkbox"]').is('input[type="checkbox"]')) {
        $('input[type="checkbox"], .single-sku__number').not('#single-on-off1, .modal-reviews-stars input').styler();
    }
    if ($('.single-sku__number').is('.single-sku__number')) {
        $('.single-sku__number').not('#single-on-off1').styler();
    }
    if ($('.single-w-h').is('.single-w-h')) {
        $('.single-w-h input').styler();
    }
    if ($('.modal-reviews-recomend-radio').is('.modal-reviews-recomend-radio')) {
        $('.modal-reviews-recomend-radio').styler();
    }
    /*end formstyler*/

    /*start catalog-filtr-scroll-container*/
    if ($('.catalog-filtr-scroll-container').is('.catalog-filtr-scroll-container')) {
        $('.parent_ps').each(function () {
            new PerfectScrollbar($(this).get(0), {
                suppressScrollX: false,
            });
        });
    }
    /*end catalog-filtr-scroll-container*/

    /*start init perfect-scroll in collapse*/
    if ($('.true_ps').is('.true_ps')) {
        $('.true_ps').on('shown.bs.collapse', function () {
            new PerfectScrollbar($(this).find('.parent_ps').get(0), {
                suppressScrollX: false,
            });
        })
    }
    /*start init perfect-scroll in collapse*/

    /*start select init*/
    if ($('.select2').is('.select2')) {
        $('.select2-wr').each(function () {
            var el = $(this).find('.select2');
            var parent = $(this).find('.select2-drop');
            el.select2({
                dropdownParent: parent,
                minimumResultsForSearch: -1,
            });
        });
    }
    /*start select init*/

    if ($('.catalog-select-filtrs ul .close').is('.catalog-select-filtrs ul .close')) {
        $('.catalog-select-filtrs ul .close').on('click', function () {
            event.preventDefault();
            $(this).closest('li').remove();
            if ($('.catalog-select-filtrs li').length == 1) {
                $('.catalog-select-filtrs').remove();
            }
        })
        $('.catalog-select-filtrs ul .clear').on('click', function () {
            event.preventDefault();
            $('.catalog-select-filtrs').remove();
        })
    }

    if ($('.catalog-list-slider').is('.catalog-list-slider')) {
        $('.catalog-list-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            speed: 0,
        });
        if ($('.catalog-list-slider-hover').is('.catalog-list-slider-hover')) {
            $('.catalog-list-slider-hover div').hover(function () {
                var index_slider = Number($(this).attr('data-index'));
                $(this).closest('.catalog-list-left').find('.slick-slider').slick('slickGoTo', index_slider);
            }, function () {

            });
        }
    }

    if ($('.catalog-filtrs').is('.catalog-filtrs')) {
        var sidebar = new StickySidebar('.catalog-filtrs-wr', {
            topSpacing: 100,
            bottomSpacing: 20,
            containerSelector: '.catalog-filtrs',
            innerWrapperSelector: '.catalog-filtrs-wr',
            resizeSensor: true,
            minWidth: 1024,
        });
    }

    if ($('.single-left_old').is('.single-left_old')) {
        var single_sidebar = new StickySidebar('.single-left_new', {
            topSpacing: 20,
            bottomSpacing: 20,
            containerSelector: '.single-left_old',
            innerWrapperSelector: '.single-left_new',
            resizeSensor: true,
            minWidth: 767.5,
        });
    }

    if ($('.receipt_sidebar').is('.receipt_sidebar')) {
        var sidebar = new StickySidebar('.receipt_sidebar', {
            topSpacing: 20,
            bottomSpacing: 0,
            resizeSensor: false,
            minWidth: 980,
        });
    }

    if ($('.receipt_sidebar2').is('.receipt_sidebar2')) {
        var sidebar2 = new StickySidebar('.receipt_sidebar2', {
            topSpacing: 20,
            bottomSpacing: 0,
            resizeSensor: true,
            minWidth: 980,
        });
    }

    if ($('.receipt_sidebar3').is('.receipt_sidebar3')) {
        var sidebar3 = new StickySidebar('.receipt_sidebar3', {
            topSpacing: 100,
            bottomSpacing: 100,
            resizeSensor: true,
            minWidth: 980,
        });
    }

    if ($('.receipt_sidebar4').is('.receipt_sidebar4')) {
        var sidebar4 = new StickySidebar('.receipt_sidebar4', {
            topSpacing: 100,
            bottomSpacing: 100,
            resizeSensor: true,
            minWidth: 1024,
        });
    }

    if ($('.tab-content-catalog').is('.tab-content-catalog')) {
        $('.catalog-top .nav-link').on('shown.bs.tab', function (e) {
            $('.catalog-body').find('.catalog-list-slider').slick('setPosition');
            var id_tab = $(this).attr('aria-controls');
            $('.catalog-filtr-mob img').slideUp();
            $('.catalog-filtr-mob').find('img[data-id="' + id_tab + '"]').slideDown();
            if ($(this).attr('id') == 'catalog-list-tab') {
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img1').slideUp();
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img2').slideDown();
            } else {
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img1').slideDown();
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img2').slideUp();
            }
        })
    }

    if ($('.catalog-filtr-mob-tabs').is('.catalog-filtr-mob-tabs')) {
        $('.catalog-filtr-mob').on('click', function () {
            event.preventDefault();
            if ($('.tab-content-catalog .tab-pane.show').next().length != 0) {
                var ident = $('.tab-content-catalog .tab-pane.show').next().attr('id');
                $('.catalog-top .nav').find('a[aria-controls="' + ident + '"]').tab('show');
            } else {
                $('#catalog-list-tab').tab('show');
            }
        });
        $('.catalog-filtr-tablet').on('click', function () {
            event.preventDefault();
            if ($('.tab-content-catalog .tab-pane.show').attr('id') == 'catalog-list') {
                $('#catalog-tablet-tab').tab('show');
            } else {
                $('#catalog-list-tab').tab('show');
            }
        });
        $('.catalog-top .nav-link').each(function () {
            if ($(this).hasClass('active')) {
                var id_link = $(this).attr('aria-controls');
                $('.catalog-filtr-mob img').slideUp();
                $('.catalog-filtr-mob').find('img[data-id="' + id_link + '"]').slideDown();
            }
            if ($(this).attr('id') == 'catalog-list-tab') {
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img1').slideDown();
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img2').slideUp();
            } else {
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img1').slideUp();
                $('.catalog-filtr-tablet .catalog-filtr-mob-tabs__img2').slideDown();
            }
        });
    }

    if ($('.catalog-filtr-mob-show').is('.catalog-filtr-mob-show')) {
        $('.catalog-filtr-mob-show').on('click', function () {
            event.preventDefault();
            $('body').addClass('overflow_h2');
            $('.catalog-filtrs').fadeIn(300);
        });
        $('.catalog-filtrs-mob-close').on('click', function () {
            event.preventDefault();
            $('body').removeClass('overflow_h2');
            $('.catalog-filtrs').fadeOut(300);
        });

        var w_filtr = $(window).width();
        $(window).resize(function () {
            if ($(window).width() == w_filtr) return;
            w_filtr = $(window).width();
            if (w_filtr < 1199.5) {
                if ($('.catalog-filtrs').is(':visible')) {
                    $('body').addClass('overflow_h2');
                } else {
                    $('body').removeClass('overflow_h2');
                }
            } else {
                $('body').removeClass('overflow_h2');
            }
            $('#catalog-list-tab').tab('show');
        });
    }

    /*start youtube*/
    if ($('.video').is('.video')) {

        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        function onYouTubePlayerAPIReady(el) {
            var player;
            el.addClass('active');
            var video_id = el.attr('data-id');
            var wrap = el.find('.video-wr').attr('id');
            player = new YT.Player(wrap, {
                videoId: video_id,
                events: {
                    'onReady': onPlayerReady
                }
            });

        }

        function onPlayerReady(event) {
            event.target.playVideo();
        }

        $('.video').on('click', function () {
            event.preventDefault();
            var el = $(this);
            onYouTubePlayerAPIReady(el);
        });

    }
    /*end youtube*/

    /*start show-cont*/
    if ($('.show-cont').is('.show-cont')) {
        $('.show-cont').on('click', function () {
            event.preventDefault();
            $(this).closest('.show-hide-parent').find('.hide-cont').slideDown(300);
            $(this).closest('.show-hide-parent').find('.show-hide-shadow').removeClass('show-hide-shadow');
            $(this).remove();
        });
    }
    /*end show-cont*/

    /*start middle-slider*/
    if ($('.vedio-slider').is('.vedio-slider')) {
        $('.vedio-slider-cont').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            swipeToSlide: true,
            swipe: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        swipe: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        swipe: false,
                        infinite: false,
                    }
                },
            ]
        });
        if ($('.vedio-slider-arrows').is('.vedio-slider-arrows')) {
            $('.vedio-slider-arrow_prev').on('click', function () {
                event.preventDefault();
                $(this).closest('.vedio-slider').find('.vedio-slider-cont').slick('slickPrev');
            });
            $('.vedio-slider-arrow_next').on('click', function () {
                event.preventDefault();
                $(this).closest('.vedio-slider').find('.vedio-slider-cont').slick('slickNext');
            });
        }
        if ($('.single-tabs__ul').is('.single-tabs__ul')) {
            $('.single-tabs__ul .nav-link').on('shown.bs.tab', function (e) {
                $('.single-tab-body').find('.slick-slider').slick('setPosition');
            })
        }
    }
    /*end slider-banner*/

    if ($('.modal-reviews-stars label').is('.modal-reviews-stars label')) {
        $('.modal-reviews-stars label').on('click', function () {
            $('.modal-reviews-stars label').removeClass('active');
            $(this).closest('.modal-reviews-stars').addClass('selected');
            $(this).addClass('active');
        });
    }

    if ($('.stock-parent').is('.stock-parent')) {
        $('.stock-parent .stock').on('click', function () {
            event.preventDefault();
            $(this).closest('.stock-parent').find('.stock-popup').slideDown(300);
            $('.promocode-popup').slideUp(300);
        });
        $('.stock-popup .close').on('click', function () {
            event.preventDefault();
            $(this).closest('.stock-popup').slideUp(300);
        });
        document.addEventListener('click', function (event) {
            var e = $('.stock-parent');
            for (var i = 0; i < e.length; i++) {
                if (!e.get(i).contains(event.target)) {
                    $(e.get(i)).find('.stock-popup').slideUp('300');
                }
            }
        });
    }

    if ($('[data-toggle="tooltip"]').is('[data-toggle="tooltip"]')) {
        $('[data-toggle="tooltip"]').tooltip()
    }

    if ($('.promocode-parent').is('.promocode-parent')) {
        $('.promocode-popup .title a').on('click', function () {
            event.preventDefault();
        });

        document.addEventListener('click', function (event) {
            var e = $('.promocode-parent');
            for (var i = 0; i < e.length; i++) {
                if (!e.get(i).contains(event.target)) {
                    $(e.get(i)).find('.promocode-popup').slideUp('300');
                }
            }
        });

        document.addEventListener('click', function (event) {
            var e = $('.promocode-parent_single');
            for (var i = 0; i < e.length; i++) {
                if (!e.get(i).contains(event.target)) {
                    $('body').removeClass('overflow_h3');
                }
            }
        });

        var w_promocode = $(window).width();
        $('.promocode-parent').off();
        $('.promocode-parent .promocode').off();
        if (w_promocode < 1200) {
            $('.promocode-parent').off();
            $('.promocode-parent .promocode').on('click', function () {
                event.preventDefault();
                if ($(this).closest('.promocode-parent').find('.promocode-popup').is(':visible')) {
                    $(this).closest('.promocode-parent').removeClass('active');
                    $(this).closest('.promocode-parent').find('.promocode-popup').slideUp(300);
                    if ($(this).closest('.promocode-parent').hasClass('promocode-parent_single')) {
                        $('body').removeClass('overflow_h3');
                    }
                } else {
                    $(this).closest('.promocode-parent').addClass('active');
                    $(this).closest('.promocode-parent').find('.promocode-popup').slideDown(300);
                    $('.stock-popup').slideUp(300);
                    if ($(this).closest('.promocode-parent').hasClass('promocode-parent_single')) {
                        $('body').addClass('overflow_h3');
                    }
                }
            });
        } else {
            $('.promocode-parent .promocode').off();
            $('.promocode-parent').hover(function () {
                $(this).find('.promocode-popup').stop(true, true).slideDown(300);
                $(this).addClass('active');
                $('.stock-popup').slideUp(300);
            }, function () {
                $(this).find('.promocode-popup').slideUp(300);
                $(this).removeClass('active');
            });
        }

        $(window).resize(function () {
            if ($(window).width() == w_promocode) return;
            w_promocode = $(window).width();
            $('.promocode-parent').off();
            $('.promocode-parent .promocode').off();
            if (w_promocode < 1200) {
                $('.promocode-parent').off();
                $('.promocode-parent .promocode').on('click', function () {
                    event.preventDefault();
                    if ($(this).closest('.promocode-parent').find('.promocode-popup').is(':visible')) {
                        $(this).closest('.promocode-parent').removeClass('active');
                        $(this).closest('.promocode-parent').find('.promocode-popup').slideUp(300);
                        if ($(this).closest('.promocode-parent').hasClass('promocode-parent_single')) {
                            $('body').removeClass('overflow_h3');
                        }
                    } else {
                        $(this).closest('.promocode-parent').addClass('active');
                        $(this).closest('.promocode-parent').find('.promocode-popup').slideDown(300);
                        $('.stock-popup').slideUp(300);
                        if ($(this).closest('.promocode-parent').hasClass('promocode-parent_single')) {
                            $('body').addClass('overflow_h3');
                        }
                    }
                });
            } else {
                $('body').removeClass('overflow_h3');
                $('.promocode-parent .promocode').off();
                $('.promocode-parent').hover(function () {
                    $(this).find('.promocode-popup').stop(true, true).slideDown(300);
                    $(this).addClass('active');
                    $('.stock-popup').slideUp(300);
                }, function () {
                    $(this).find('.promocode-popup').slideUp(300);
                    $(this).removeClass('active');
                });
            }
        });

        $('.promocode-popup .close').on('click', function () {
            event.preventDefault();
            $(this).closest('.promocode-popup').slideUp(300);
            $(this).closest('.promocode-parent').removeClass('active');
            $('body').removeClass('overflow_h3');
        });
    }

    if ($('.single-tabs .nav-link').is('.single-tabs .nav-link')) {
        $('.single-tabs .nav-link, #myTab2 .nav-link').on('click', function () {
            event.preventDefault();
            var href_attr = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(href_attr).offset().top - 100
            }, 1000);
        });

        window.onscroll = function () {
            myFunction()
        };
        var w_single_tab = $(window).width();
        var myTab = document.getElementById("single-tabs");
        var sticky = myTab.offsetTop;
        $(window).resize(function () {
            if ($(window).width() == w_single_tab) return;
            w_single_tab = $(window).width();
            var myTab = document.getElementById("single-tabs");
            var sticky = myTab.offsetTop;
        });

        function myFunction() {
            var myTab = document.getElementById("single-tabs");
            var sticky = myTab.offsetTop;
            $(window).resize(function () {
                if ($(window).width() == w_single_tab) return;
                w_single_tab = $(window).width();
                var myTab = document.getElementById("single-tabs");
                var sticky = myTab.offsetTop;
            });
            if (window.pageYOffset > sticky) {
                $('.single-fixed-tabs').addClass('sticky');
                $('.single-fixed-tabs').slideDown(300);
            } else {
                $('.single-fixed-tabs').removeClass('sticky');
                $('.single-fixed-tabs').slideUp(300);
            }
        }
    }

    if ($('.catalog-desctope').is('.catalog-desctope')) {

        var w_catalog_desctope = $(window).width();

        if (w_catalog_desctope < 1200) {
            $('.catalog-desctope .left .list li a').off();
            $('.catalog-desctope .left .list li a').on('click', function () {
                event.preventDefault();
                var index_menu = $(this).attr('data-index');
                $('.catalog-desctope .left .list li a').removeClass('active');
                $(this).addClass('active');
                $('.catalog-desctope-item').removeClass('active');
                $(index_menu).addClass('active');
            });
        } else {
            $('.catalog-desctope .left .list li a').off();
            $('.catalog-desctope .left .list li a').hover(function () {
                var index_menu = $(this).attr('data-index');
                $('.catalog-desctope .left .list li a').removeClass('active');
                $(this).addClass('active');
                $('.catalog-desctope-item').removeClass('active');
                $(index_menu).addClass('active');
            }, function () {

            });
        }

        $(window).resize(function () {
            if ($(window).width() == w_catalog_desctope) return;
            w_catalog_desctope = $(window).width();
            if (w_catalog_desctope < 1200) {
                $('.catalog-desctope .left .list li a').off();
                $('.catalog-desctope .left .list li a').on('click', function () {
                    event.preventDefault();
                    var index_menu = $(this).attr('data-index');
                    $('.catalog-desctope .left .list li a').removeClass('active');
                    $(this).addClass('active');
                    $('.catalog-desctope-item').removeClass('active');
                    $(index_menu).addClass('active');
                });
            } else {
                $('.catalog-desctope .left .list li a').off();
                $('.catalog-desctope .left .list li a').hover(function () {
                    var index_menu = $(this).attr('data-index');
                    $('.catalog-desctope .left .list li a').removeClass('active');
                    $(this).addClass('active');
                    $('.catalog-desctope-item').removeClass('active');
                    $(index_menu).addClass('active');
                }, function () {

                });
            }
        });

        document.addEventListener('click', function (event) {
            var e = $('.catalog-desctope');
            for (var i = 0; i < e.length; i++) {
                if (!e.get(i).contains(event.target)) {
                    $(e.get(i)).collapse('hide');
                }
            }
        });
    }

    $('.modal').on("hidden.bs.modal", function (e) {
        if ($('.modal:visible').length) {
            $('body').addClass('modal-open');
        }
    });

    if ($('.datepicker').is('.datepicker')) {
        $(".datepicker").datepicker({
            showOtherMonths: true,
            selectOtherMonths: true,
            firstDay: 1,
            dateFormat: 'd M yy',
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
                'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
            monthNamesShort: ['Января', 'Февраля', 'Марта', 'Апреля', 'Майя', 'Июня',
                'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
            dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
            dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            onSelect: function(date) {
                $('.measure__date-btn').text(date);
            }
        });
    }

    if ($('.modal-3d-3 .time').is('.modal-3d-3 .time')) {
        $('.modal-3d-3 .time ul a').on('click', function () {
            event.preventDefault();
            $('.modal-3d-3 .time ul a').removeClass('active');
            $(this).addClass('active');
        });
    }

    /*start fixed header*/
    if ($('#header-middle').is('#header-middle')) {
        window.onscroll = function () {
            header_fixed()
        };
        var header = document.getElementById("header-middle");
        var sticky = header.offsetTop;

        function header_fixed() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                $('#header-middle').prev().addClass('header_fixed');
            } else {
                header.classList.remove("sticky");
                $('#header-middle').prev().removeClass('header_fixed');
            }
        }
    }
    /*end fixed header*/

    /*start header-search_desc*/
    if ($('.header-search_desc').is('.header-search_desc')) {
        $('.header-search_desc .header-search__input').on('keyup', function () {
            var search = $(this).val();
            if (search.length > 1) {
                $(this).closest('.header-search_desc').find('.header-search__clear').addClass('active');
            } else {
                $(this).closest('.header-search_desc').find('.header-search__clear').removeClass('active');
            }
        });
        $('.header-search_desc .header-search__clear').on('click', function () {
            event.preventDefault();
            $(this).closest('.header-search-wr').find('.header-search__input').val(null);
            $(this).removeClass('active');
        });
        $(".header-search_desc .header-search__input").autocomplete({
            source: "search_result.html",
            minLength: 2,
            appendTo: ".header-search_desc",
            select: function (event, ui) {
                $('#idobj').val(ui.item.id);
            }
        }).autocomplete("instance")._renderItem = function (ul, item) {
            item_text = '';
            type_head = '';
            if (item.itemtype == 'category' && item.isfirst == 1) {
                type_head = '<p class="ui_zag">Категории</p>';
            }
            if (item.itemtype == 'product' && item.isfirst == 1) {
                type_head = '<p class="ui_zag">Товары</p>';
            }
            if (item.itemimage != '') {
                item_image_text = '<img src="' + item.itemimage + '">';
                item_text = type_head + '<a class="ui_a_place" href="' + item.itemlink + '">' +
                    '<table class="ui_table">' +
                    '<tr>' +
                    '<td>' + item_image_text + '</td>' +
                    '<td>' +
                    '<p class="ui_p">' + item.value + '</p>' +
                    '<p class="ui_p2">' + item.label + '</p>' +
                    '</td>' +
                    '</tr>' +
                    '</table></a>';
            } else {
                item_text = type_head + '<a class="ui_a_punkt" href="' + item.itemlink + '"><img src="img/header-search_ui_loop.svg" alt="" />' + item.label + '</a>';
            }
            if (item.itemtype == 'category' && item.isfirst == 1) {
                return $("<li class='ui_li_first'>")
                    .append(item_text)
                    .appendTo(ul);
            } else if (item.itemtype == 'product' && item.isfirst == 1) {
                return $("<li class='ui_li_second ui_li_first'>")
                    .append(item_text)
                    .appendTo(ul);
            } else {
                return $("<li>")
                    .append(item_text)
                    .appendTo(ul);
            }

        };
    }

    if ($('.header-search__input-mob').is('.header-search__input-mob')) {
        $('.header-search__input-mob').on('focus', function () {
            $('#modal-search').modal('show');
        });
        $('#modal-search').on('shown.bs.modal', function (e) {
            $('.header-search_mob .header-search__input').focus();
        })
    }

    if ($('.header-search_mob').is('.header-search_mob')) {
        $('.header-search_mob .header-search__input').on('keyup', function () {
            var search = $(this).val();
            if (search.length > 1) {
                $(this).closest('.header-search_mob').find('.header-search__clear').addClass('active');
            } else {
                $(this).closest('.form-wrap').find('.header-search__clear').removeClass('active');
            }
        });
        $('.header-search_mob .header-search__clear').on('click', function () {
            event.preventDefault();
            $(this).closest('.form-wrap').find('.header-search__input').val(null);
            $(this).removeClass('active');
        });
        $(".header-search_mob .header-search__input").autocomplete({
            source: "search_result.html",
            minLength: 2,
            appendTo: ".header-search_mob",
            select: function (event, ui) {
                $('#idobj').val(ui.item.id);
            }
        }).autocomplete("instance")._renderItem = function (ul, item) {
            item_text = '';
            type_head = '';
            if (item.itemtype == 'category' && item.isfirst == 1) {
                type_head = '<p class="ui_zag">Категории</p>';
            }
            if (item.itemtype == 'product' && item.isfirst == 1) {
                type_head = '<p class="ui_zag">Товары</p>';
            }
            if (item.itemimage != '') {
                item_image_text = '<img src="' + item.itemimage + '">';
                item_text = type_head + '<a class="ui_a_place" href="' + item.itemlink + '">' +
                    '<table class="ui_table">' +
                    '<tr>' +
                    '<td>' + item_image_text + '</td>' +
                    '<td>' +
                    '<p class="ui_p">' + item.value + '</p>' +
                    '<p class="ui_p2">' + item.label + '</p>' +
                    '</td>' +
                    '</tr>' +
                    '</table></a>';
            } else {
                item_text = type_head + '<a class="ui_a_punkt" href="' + item.itemlink + '"><img src="img/header-search_ui_loop.svg" alt="" />' + item.label + '</a>';
            }
            if (item.itemtype == 'category' && item.isfirst == 1) {
                return $("<li class='ui_li_first'>")
                    .append(item_text)
                    .appendTo(ul);
            } else if (item.itemtype == 'product' && item.isfirst == 1) {
                return $("<li class='ui_li_second ui_li_first'>")
                    .append(item_text)
                    .appendTo(ul);
            } else {
                return $("<li>")
                    .append(item_text)
                    .appendTo(ul);
            }

        };
        $('.modal-search__cancel').on('click', function () {
            event.preventDefault();
            $(this).closest('.modal-search-wrap').find('.header-search__input').val(null);
            $(this).closest('.modal-search-wrap').find('.header-search__clear').removeClass('active');
        });
    }
    /*end header-search_desc*/

    /*form-item-input-text*/
    if ($('.form-folder').is('.form-folder')) {
        $(".form-folder__element").blur(function () {
            if ($(this).val().trim() === '') {
                $(this).closest('.form-folder').removeClass('input--filled');
            }
        });
        $(".form-folder__element").focus(function () {
            $(this).closest('.form-folder').addClass('input--filled');
        });

        $('.form-folder__element').each(function () {
            if ($(this).val().trim() !== '') {
                $(this).closest('.form-folder').addClass('input--filled');
            } else {
                $(this).closest('.form-folder').removeClass('input--filled');
            }
        });

    }
    /*end form-item-input-text*/

    if ($('input[type="number"]').is('input[type="number"]')) {
        $('.jq-number__spin').dblclick(function () {
            return false;
        });
    }


    // start скрипты для страницы корзина

    var tabNavs = document.querySelectorAll(".wrapper__btn");
    var tabPanes = document.querySelectorAll(".wrapper__content");

    for (var i = 0; i < tabNavs.length; i++) {

        tabNavs[i].addEventListener("click", function(e){
            e.preventDefault();
            var activeTabAttr = e.target.getAttribute("data-tab");

            for (var j = 0; j < tabNavs.length; j++) {
                var contentAttr = tabPanes[j].getAttribute("data-tab-content");

                if (activeTabAttr === contentAttr) {
                    tabNavs[j].classList.add("active");
                    tabPanes[j].classList.add("active");
                } else {
                    tabNavs[j].classList.remove("active");
                    tabPanes[j].classList.remove("active");
                }
            };
        });
    }

    $('.product__item-add_btn').click(function(){
        $(this).toggleClass('active__add');
    });

    $('.switch-btn').click(function(){
        $(this).toggleClass('switch-on');
    });


    function desctopOnlySlider() {
        $('.cart-modal').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            prevArrow: $('.slider-banner-arrow_prev'),
            nextArrow: $('.slider-banner-arrow_next'),
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }
            ]
        });
    }

    if(window.innerWidth > 1024) {
        desctopOnlySlider();
    }

    $(window).resize(function(e){
        if(window.innerWidth > 1024) {
            if(!$('.cart-modal').hasClass('slick-initialized')){
                desctopOnlySlider();
            }

        }else{
            if($('.cart-modal').hasClass('slick-initialized')){
                $('.cart-modal').slick('unslick');
            }
        }
    });

    $('.modal').on('shown.bs.modal', function (e) {
        $('.cart-modal').slick('setPosition');
    })

    // end скрипты для страницы корзина


    // start Включение рамки на блоке услуг

    $(function () {
        $(".date-radio").on("click", function () {

            $('.date-radio').parent().parent().parent().removeClass("active");

            if ($(this).is(":checked")) {
                $(this).parent().parent().parent().addClass('active');
            }
        })
    });

    $(function () {
        $(".pay-radio").on("click", function () {

            $('.pay-radio').parent().removeClass("active-pay");

            if ($(this).is(":checked")) {
                $(this).parent().addClass('active-pay');
            }
        })
    });

    $(function () {
        $(".regis__shop-item").on("click", function () {

            $('.regis__shop-item').removeClass("active-border");

            $(this).addClass('active-border');
        })
    });

    $(".js-example-basic-single").select2({});


    // end Включение рамки на блоке услуг



    // start скрипты для страницы оформление


    var tabNavsDeliver = document.querySelectorAll(".wrapper__btn-delivery");
    var tabPanesDeliver = document.querySelectorAll(".wrapper__content-delivery");
    var tabNavs = document.querySelectorAll(".wrapper__btn");
    var tabPanes = document.querySelectorAll(".wrapper__content");

    for (var i = 0; i < tabNavsDeliver.length; i++) {

        tabNavsDeliver[i].addEventListener("click", function(e){
            e.preventDefault();
            var activeTabAttr = e.target.getAttribute("data-tab");

            for (var j = 0; j < tabNavsDeliver.length; j++) {
                var contentAttr = tabPanesDeliver[j].getAttribute("data-tab-content");

                if (activeTabAttr === contentAttr) {
                    tabNavsDeliver[j].classList.add("active-delivery");
                    tabPanesDeliver[j].classList.add("active-delivery");
                } else {
                    tabNavsDeliver[j].classList.remove("active-delivery");
                    tabPanesDeliver[j].classList.remove("active-delivery");
                }
            };
        });
    }

    for (var f = 0; f < tabNavs.length; f++) {

        tabNavs[f].addEventListener("click", function(e){
            e.preventDefault();
            var activeTabAttr = e.target.getAttribute("data-tab");

            for (var j = 0; j < tabNavs.length; j++) {
                var contentAttr = tabPanes[j].getAttribute("data-tab-content");

                if (activeTabAttr === contentAttr) {
                    tabNavs[j].classList.add("active");
                    tabPanes[j].classList.add("active");
                } else {
                    tabNavs[j].classList.remove("active");
                    tabPanes[j].classList.remove("active");
                }
            };
        });
    }


    $('#testBtn').click(function(){
        $("#list").addClass('close__shop');
        $("#shop__item").addClass('open__shop');
    });

    $('#backList').click(function(){
        $("#list").removeClass('close__shop');
        $("#shop__item").removeClass('open__shop');
    });

    $('#listBtn').click(function(){
        $("#listBtn").addClass("switch-on");
        $("#map4").removeClass("open__map");
        $("#mapBtn").removeClass("switch-on");
        $("#list").removeClass("close__shop");
    });

    $('#mapBtn').click(function(){
        $("#list").addClass("close__shop");
        $("#map4").addClass("open__map");
        $("#listBtn").removeClass("switch-on");
        $("#mapBtn").addClass("switch-on");
    });

    $('#listBtn').click(function(){
        $("#listBtn").addClass("switch-on");
        $("#modalMapDes").removeClass("open__map");
        $("#mapBtn").removeClass("switch-on");
        $("#list").removeClass("close__shop");
    });

    $('#mapBtn').click(function(){
        $("#list").addClass("close__shop");
        $("#modalMapDes").addClass("open__map");
        $("#listBtn").removeClass("switch-on");
        $("#mapBtn").addClass("switch-on");
    });

    $('#listBtn').click(function(){
        $("#listBtn").addClass("switch-on");
        $("#modalMapDesYellow").removeClass("open__map");
        $("#mapBtn").removeClass("switch-on");
        $("#list").removeClass("close__shop");
    });

    $('#mapBtn').click(function(){
        $("#list").addClass("close__shop");
        $("#modalMapDesYellow").addClass("open__map");
        $("#listBtn").removeClass("switch-on");
        $("#mapBtn").addClass("switch-on");
    });

    $('#listBtn').click(function(){
        $("#listBtn").addClass("switch-on");
        $("#mapModal").removeClass("open__map");
        $("#mapBtn").removeClass("switch-on");
        $("#list").removeClass("close__shop");
    });

    $('#mapBtn').click(function(){
        $("#list").addClass("close__shop");
        $("#mapModal").addClass("open__map");
        $("#listBtn").removeClass("switch-on");
        $("#mapBtn").addClass("switch-on");
    });

    // end скрипты для страницы оформление



    // start скрипты для страницы спасибо за оформление



    // end скрипты для страницы спасибо за оформление




    // start Карты на странице оформления



    // end Карты на странице оформления


    // Маска для всех инпутов с номером телефона
    $(".input__tel").mask("+7 (999) 999-99-99");





    $('.dropdown-menu').click(function(e) {
        e.stopPropagation();
    });


    // var shopItemselem = document.getElementById('shop-list');
    // if(!shopItemselem) {
    //
    // } else {
    //     var shopItems = new PerfectScrollbar('#shop-list', {
    //         suppressScrollY: false,
    //         useBothWheelAxes: true,
    //         wheelPropagation: true,
    //     });
    // }


    $(".shop-page .video_init").click(function () {
        $('.shop-page .video_init').find('video').get(0).play();
        $('.shop-page .single-video').show();
        $('.shop-page .video_init').addClass('close-back');
    })

    $(".sample-home__page .video_init").click(function () {
        $('.sample-home__page .video_init').find('video').get(0).play();
        $('.sample-home__page .single-video').show();
        $('.sample-home__page .video_init').addClass('close-back');
    })

    // $(".article__page .video_init").click(function () {
    //     $('.article__page .video_init').find('video').get(0).play();
    //     $('.article__page .single-video').show();
    //     $('.article__page .video_init').addClass('close-back');
    // })
        
        function videoInit() {
            [].forEach.call(document.querySelectorAll('.article__page .video_init'), function(el) {
                el.addEventListener('click', function() {
                    $(this).find('video').get(0).play();
                    // $('.article__page .single-video').show();
                    $(this).addClass('close-back');
                });
            });
        };

    videoInit();

    $(function() {
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            $temp.val($(element).text()).select();
            document.execCommand("copy");
            $temp.remove();
        }

        $(".copy-btn").one("click", function() {
            copyToClipboard(".copy-btn span");
            $(".copy-btn span").text("Скопировано").addClass("copy-btn-active");
            $(".copy-btn-img").attr("src","img/copy-ready.svg");
        });
    });


    $(".d-flex .modal-reviews__price-btn").click(function(e) {
        e.preventDefault();
        $(".d-flex .modal-reviews__price-btn").removeClass('modal-reviews__price-btn_active');
        $(this).addClass('modal-reviews__price-btn_active');
    })


    if ($('.red__map-pop').is('.red__map-pop')){
        ymaps.ready(popUpMap);
        function popUpMap() {
            var mapPin = '../build/img/map_pin.svg';
            var mapPinHover = '../build/img/map_pin-hover.svg';
            var mapPinActive = '../build/img/map_pin-red.svg';
            var myMap = new ymaps.Map('modalMapDes', {
                center: [-33.867861, -63.988028],
                zoom: 18,
                controls: []
            }, {
                suppressMapOpenBlock: true,
            });
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32
            });
            // myMap.geoObjects.add(objectManager);
            objectManager.objects.options.set('iconLayout', 'default#image');
            objectManager.objects.options.set('iconImageHref', mapPin);
            objectManager.objects.options.set('hideIconOnBalloonOpen', false);
            objectManager.objects.options.set('balloonOffset', [0, -40]);
            // Задаем наш шаблон для балунов геобъектов коллекции.
            objectManager.add({
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id":1,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.504268, 30.542315]
                        },
                        "properties":{
                            "balloonContentBody": ['<div class="map__modal-list shop__item map__modal-balloon-item" id="shop__item" >\n' +
                            '                        <button class="btn shop__item-link" id="backList">Назад к списку</button>\n' +
                            '                        <div class="map__modal-item">\n' +
                            '                            <div class="regis__shop-item_header">\n' +
                            '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                            '                            </div>\n' +
                            '                            <div class="regis__shop-item_body">\n' +
                            '                                <div class="regis__shop-position_address">\n' +
                            '                                    <div class="me-auto w-100">\n' +
                            '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                            '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                            '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                            '                                        <div class="regis__shop-position_time">\n' +
                            '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                            '                                            </svg>\n' +
                            '                                            <p class="regis__shop-time">Ежедневно с 10:00 до 22:00</p>\n' +
                            '                                        </div>\n' +
                            '<div class="sinle-characters show-hide-parent">\n'+
                                '<div class="sinle-characters-wr show-hide-shadow">\n' +
                                '<div class="sinle-character">\n' +
                                '<div>В наличии</div>\n' +
                            '<span></span>\n' +
                            '<div>88 м2</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button class="btn open__shop-modal-btn btn_red">Выбрать</button>\n' +
                            '                        </div>\n' +
                            '                    </div>',

                            ].join(""),
                            "iconCaption": 'Домикс «Сити Молл»'
                        }
                    },{
                        "type": "Feature",
                        "id":2,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[-33.867861, -63.988028]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item map__modal-balloon-item" id="shop__item" >\n' +
                                '                        <button class="btn shop__item-link" id="backList">Назад к списку</button>\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto w-100">\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="sinle-characters show-hide-parent">\n'+
                                '<div class="sinle-characters-wr show-hide-shadow">\n' +
                                '<div class="sinle-character">\n' +
                                '<div>В наличии</div>\n' +
                                '<span></span>\n' +
                                '<div>88 м2</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_red">Выбрать</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',

                            "iconCaption": "Домикс «Сити Молл»"
                        }
                    },{
                        "type": "Feature",
                        "id":3,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.813802, -2.475569]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item map__modal-balloon-item" id="shop__item" >\n' +
                                '                        <button class="btn shop__item-link" id="backList">Назад к списку</button>\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto w-100">\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="sinle-characters show-hide-parent">\n'+
                                '<div class="sinle-characters-wr show-hide-shadow">\n' +
                                '<div class="sinle-character">\n' +
                                '<div>В наличии</div>\n' +
                                '<span></span>\n' +
                                '<div>88 м2</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_red">Выбрать</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',

                            "iconCaption": "Домикс «Сити Молл» 3"
                        }
                    }
                ]
            });
            /* 2. Обработка списка и меток */
            //Клик по метке в карте

            // objectManager.objects.events.add('click', function (e) {
            //     if (!e.originalEvent.currentTarget.balloon.isOpen()){
            //         myMap.geoObjects.events.add('mouseleave', function (e) {
            //             objectManager.objects.setObjectOptions(e.get('objectId'), {
            //                 iconLayout: 'default#image',
            //                 iconImageHref: mapPin,
            //                 iconImageSize: [30, 44],
            //             });
            //         })
            //     } else {
            //         myMap.geoObjects.events.add('mouseleave', function (e) {
            //             objectManager.objects.setObjectOptions(e.get('objectId'), {
            //                 iconLayout: 'default#image',
            //                 iconImageHref: mapPinActive,
            //                 iconImageSize: [30, 44],
            //             });
            //         })
            //     }
            // })
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                if (!e.originalEvent.currentTarget.balloon.isOpen()){
                    e.originalEvent.currentTarget.balloon.close()
                } else {
                    //само откроется
                }

                if ($(window).width() >= '767'){
                    if (!e.originalEvent.currentTarget.balloon.isOpen()){
                        e.originalEvent.currentTarget.balloon.close()
                        // $('[data-objectId]').addClass('active-map-items');
                        // $('[data-objectId='+objectId+']').removeClass('active-map-items');
                        // $('.shop__list').removeClass('map-active-list')
                    } else {
                        // $('[data-objectId]').removeClass('active-map-items');
                        // $('[data-objectId='+objectId+']').addClass('active-map-items');
                        // $('.shop__list').addClass('map-active-list')
                        //само откроется
                    }
                }

            });
            // myMap.geoObjects.events.add('mouseenter', function (e) {
            //     objectManager.objects.setObjectOptions(e.get('objectId'), {
            //         iconLayout: 'default#image',
            //         iconImageHref: mapPinHover,
            //         iconImageSize: [30, 44],
            //     });
            // })
            //
            // myMap.geoObjects.events.add('mouseleave', function (e) {
            //     objectManager.objects.setObjectOptions(e.get('objectId'), {
            //         iconLayout: 'default#image',
            //         iconImageHref: mapPin,
            //         iconImageSize: [30, 44],
            //     });
            // })

            myMap.geoObjects.events.add('balloonclose', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPin,
                    iconImageSize: [30, 44],
                });
            });

            myMap.geoObjects.events.add('balloonopen', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                });
            });

            //Клик в списке
            [].forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
                el.addEventListener('click', function() {
                    var objectId=el.getAttribute("data-objectId");
                    $('.map__modal-item').addClass('disabled-map-items');
                    // objectManager.objects.options.set('iconImageHref', '../build/img/map_pin-red.svg');
                    viewObject(objectId);
                });
            });

            $('.shop__item-link').click(function (e) {
                $('.shop__list').removeClass('map-active-list');
                $('.map__modal-item').removeClass('disabled-map-items active-map-items active');
            })
            // Что происходит при выборе метки или варианта из списка

            function viewObject(objectId){
                // Удаляем со всего списка класс active затем добавляем к выбранному
                $('[data-objectId]').removeClass('active-map-items');
                $('[data-objectId='+objectId+']').addClass('active-map-items');
                $('.shop__list').addClass('map-active-list')
                // Выделяем все метки в синий, затем выбранную в красную
                objectManager.objects.each(function (item) {
                    objectManager.objects.setObjectOptions(item.id, {
                        iconLayout: 'default#image',
                        iconImageHref: mapPin,
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44]
                    });
                });
                objectManager.objects.setObjectOptions(objectId, {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44]
                });
                // Центрирование по метке
                myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 18, {
                    checkZoomRange: true
                });
            }

            myMap.geoObjects.add(objectManager);

        }


    }

    if ($('.map-yellow-pop').is('.map-yellow-pop')){
        ymaps.ready(popUpMapYellow);
        function popUpMapYellow() {
            var mapPin = '../build/img/map_pin-yellow.svg';
            var mapPinHover = '../build/img/map_pin-hover-yellow.svg';
            var mapPinActive = '../build/img/map_pin-active-yellow.svg';
            var myMap = new ymaps.Map('modalMapDes', {
                center: [-33.867861, -63.988028],
                zoom: 18,
                controls: []
            }, {
                suppressMapOpenBlock: true,
            });
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32
            });
            // myMap.geoObjects.add(objectManager);
            objectManager.objects.options.set('iconLayout', 'default#image');
            objectManager.objects.options.set('iconImageHref', mapPin);
            objectManager.objects.options.set('hideIconOnBalloonOpen', false);
            objectManager.objects.options.set('balloonOffset', [0, -40]);
            // Задаем наш шаблон для балунов геобъектов коллекции.
            objectManager.add({
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id":1,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.504268, 30.542315]
                        },
                        "properties":{
                            "balloonContentBody": ['<div class="map__modal-list shop__item map__modal-balloon-item" id="shop__item" >\n' +
                            '                        <button class="btn shop__item-link" id="backList">Назад к списку</button>\n' +
                            '                        <div class="map__modal-item">\n' +
                            '                            <div class="regis__shop-item_header">\n' +
                            '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                            '                            </div>\n' +
                            '                            <div class="regis__shop-item_body">\n' +
                            '                                <div class="regis__shop-position_address">\n' +
                            '                                    <div class="me-auto w-100">\n' +
                            '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                            '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                            '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                            '                                        <div class="regis__shop-position_time">\n' +
                            '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                            '                                            </svg>\n' +
                            '                                            <p class="regis__shop-time">Ежедневно с 10:00 до 22:00</p>\n' +
                            '                                        </div>\n' +
                            '<div class="sinle-characters show-hide-parent">\n'+
                            '<div class="sinle-characters-wr show-hide-shadow">\n' +
                            '<div class="sinle-character">\n' +
                            '<div>В наличии</div>\n' +
                            '<span></span>\n' +
                            '<div>88 м2</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '</div>\n' +
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button class="btn open__shop-modal-btn btn_red">Выбрать</button>\n' +
                            '                        </div>\n' +
                            '                    </div>',

                            ].join(""),
                            "iconCaption": 'Домикс «Сити Молл»'
                        }
                    },{
                        "type": "Feature",
                        "id":2,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[-33.867861, -63.988028]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item map__modal-balloon-item" id="shop__item" >\n' +
                                '                        <button class="btn shop__item-link" id="backList">Назад к списку</button>\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto w-100">\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="sinle-characters show-hide-parent">\n'+
                                '<div class="sinle-characters-wr show-hide-shadow">\n' +
                                '<div class="sinle-character">\n' +
                                '<div>В наличии</div>\n' +
                                '<span></span>\n' +
                                '<div>88 м2</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_red">Выбрать</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',

                            "iconCaption": "Домикс «Сити Молл»"
                        }
                    },{
                        "type": "Feature",
                        "id":3,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.813802, -2.475569]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item map__modal-balloon-item" id="shop__item" >\n' +
                                '                        <button class="btn shop__item-link" id="backList">Назад к списку</button>\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto w-100">\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="sinle-characters show-hide-parent">\n'+
                                '<div class="sinle-characters-wr show-hide-shadow">\n' +
                                '<div class="sinle-character">\n' +
                                '<div>В наличии</div>\n' +
                                '<span></span>\n' +
                                '<div>88 м2</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '</div>\n' +
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_red">Выбрать</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',

                            "iconCaption": "Домикс «Сити Молл» 3"
                        }
                    }
                ]
            });
            /* 2. Обработка списка и меток */
            //Клик по метке в карте
            // objectManager.objects.events.add('click', function (e) {
            //     if (!e.originalEvent.currentTarget.balloon.isOpen()){
            //         myMap.geoObjects.events.add('mouseleave', function (e) {
            //             objectManager.objects.setObjectOptions(e.get('objectId'), {
            //                 iconLayout: 'default#image',
            //                 iconImageHref: mapPin,
            //                 iconImageSize: [30, 44],
            //             });
            //         })
            //     } else {
            //         myMap.geoObjects.events.add('mouseleave', function (e) {
            //             objectManager.objects.setObjectOptions(e.get('objectId'), {
            //                 iconLayout: 'default#image',
            //                 iconImageHref: mapPinActive,
            //                 iconImageSize: [30, 44],
            //             });
            //         })
            //     }
            // })
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                if (!e.originalEvent.currentTarget.balloon.isOpen()){
                    e.originalEvent.currentTarget.balloon.close()
                } else {
                    //само откроется
                }

                if ($(window).width() >= '767'){
                    if (!e.originalEvent.currentTarget.balloon.isOpen()){
                        e.originalEvent.currentTarget.balloon.close()
                        // $('[data-objectId]').addClass('active-map-items');
                        // $('[data-objectId='+objectId+']').removeClass('active-map-items');
                        // $('.shop__list').removeClass('map-active-list')
                    } else {
                        // $('[data-objectId]').removeClass('active-map-items');
                        // $('[data-objectId='+objectId+']').addClass('active-map-items');
                        // $('.shop__list').addClass('map-active-list')
                        //само откроется
                    }
                }

            });
            // myMap.geoObjects.events.add('mouseenter', function (e) {
            //     objectManager.objects.setObjectOptions(e.get('objectId'), {
            //         iconLayout: 'default#image',
            //         iconImageHref: mapPinHover,
            //         iconImageSize: [30, 44],
            //     });
            // })
            //
            // myMap.geoObjects.events.add('mouseleave', function (e) {
            //     objectManager.objects.setObjectOptions(e.get('objectId'), {
            //         iconLayout: 'default#image',
            //         iconImageHref: mapPin,
            //         iconImageSize: [30, 44],
            //     });
            // })

            myMap.geoObjects.events.add('balloonclose', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPin,
                    iconImageSize: [30, 44],
                });
            });

            myMap.geoObjects.events.add('balloonopen', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                });
            });
            //Клик в списке
            [].forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
                el.addEventListener('click', function() {
                    var objectId=el.getAttribute("data-objectId");
                    $('.map__modal-item').addClass('disabled-map-items');
                    objectManager.objects.options.set('iconImageHref', mapPin);
                    viewObject(objectId);
                });
            });

            $('.shop__item-link').click(function () {
                $('.shop__list').removeClass('map-active-list');
                $('.map__modal-item').removeClass('disabled-map-items active-map-items active')
            })
            // Что происходит при выборе метки или варианта из списка
            function viewObject(objectId){
                // Удаляем со всего списка класс active затем добавляем к выбранному
                $('[data-objectId]').removeClass('active-map-items');
                $('[data-objectId='+objectId+']').addClass('active-map-items');
                $('.shop__list').addClass('map-active-list')
                // Выделяем все метки в синий, затем выбранную в красную
                objectManager.objects.each(function (item) {
                    objectManager.objects.setObjectOptions(item.id, {
                        iconLayout: 'default#image',
                        iconImageHref: mapPin,
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44]
                    });
                });
                objectManager.objects.setObjectOptions(objectId, {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44]
                });
                // Центрирование по метке
                myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 18, {
                    checkZoomRange: true
                });
            }

            objectManager.events
                .add('mouseenter', function (e) {
                    // Ссылку на объект, вызвавший событие,
                    // можно получить из поля 'target'.
                    e.get('target').options.set('iconImageHref', mapPinHover);
                })
                .add('mouseleave', function (e) {
                    e.get('target').options.unset('iconImageHref');
                });

            myMap.geoObjects.add(objectManager);

        }


    }


    if ($('.shop-map').is('.shop-map')){
        ymaps.ready(shopMap);
        function shopMap() {
            var mapPin = '../build/img/map_pin.svg';
            var mapPinHover = '../build/img/map_pin-hover.svg';
            var mapPinActive = '../build/img/map_pin-red.svg';
            var myMap = new ymaps.Map('shopMap', {
                center: [-33.867861, -63.988028],
                zoom: 18,
                controls: []
            }, {
                suppressMapOpenBlock: true,
            });
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32
            });
            // myMap.geoObjects.add(objectManager);
            objectManager.objects.options.set('iconLayout', 'default#image');
            objectManager.objects.options.set('iconImageHref', mapPin);
            objectManager.objects.options.set('hideIconOnBalloonOpen', false);
            objectManager.objects.options.set('balloonOffset', [0, -40]);
            // Задаем наш шаблон для балунов геобъектов коллекции.
            objectManager.add({
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id":1,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.504268, 30.542315]
                        },
                        "properties":{
                            "balloonContentBody": ['<div class="map__modal-list shop__item" id="shop__item" >\n' +
                            '                        <div class="map__modal-item">\n' +
                            '                            <div class="regis__shop-item_header">\n' +
                            '<div class="baloon-img-mobile">\n' +
                            '<img src="img/shop-image.png" alt="">\n' +
                            '</div>\n' +
                            '                            <div>\n' +
                            '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                            '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                            '</div>\n' +
                            '                            </div>\n' +
                            '                            <div class="regis__shop-item_body">\n' +
                            '                                <div class="regis__shop-position_address">\n' +
                            '                                    <div class="me-auto">\n' +

                            '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                            '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                            '                                        <div class="regis__shop-position_time">\n' +
                            '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                            '                                            </svg>\n' +
                            '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
                            '                                        </div>\n' +
                            '<div class="position__filters-map">'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<button class="filter__item filters-more-items">Ещё 5</button>'+
                            '</div>'+
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
                            '                        </div>\n' +
                            '                    </div>',
                            ].join(""),
                            "iconCaption": 'Домикс «Сити Молл»'
                        }
                    },{
                        "type": "Feature",
                        "id":2,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[-33.867861, -63.988028]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item" id="shop__item" >\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '<div class="baloon-img-mobile">\n' +
                                '<img src="img/shop-image.png" alt="">\n' +
                                '</div>\n' +
                                '                            <div>\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '</div>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto">\n' +

                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="position__filters-map">'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<button class="filter__item filters-more-items">Ещё 5</button>'+
                                '</div>'+
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                            "iconCaption": "Домикс «Сити Молл»"
                        }
                    },{
                        "type": "Feature",
                        "id":3,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.813802, -2.475569]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item" id="shop__item" >\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '<div class="baloon-img-mobile">\n' +
                                '<img src="img/shop-image.png" alt="">\n' +
                                '</div>\n' +
                                '                            <div>\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '</div>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto">\n' +

                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="position__filters-map">'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<button class="filter__item filters-more-items">Ещё 5</button>'+
                                '</div>'+
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                            "iconCaption": "Домикс «Сити Молл» 3"
                        }
                    }
                ]
            });
            /* 2. Обработка списка и меток */
            //Клик по метке в карте
            // myMap.geoObjects.events.add('mouseenter', function (e) {
            //     objectManager.objects.setObjectOptions(e.get('objectId'), {
            //         iconLayout: 'default#image',
            //         iconImageHref: mapPinHover,
            //         iconImageSize: [30, 44],
            //     });
            // })

            // myMap.geoObjects.events.add('mouseleave', function (e) {
            //     objectManager.objects.setObjectOptions(e.get('objectId'), {
            //         iconLayout: 'default#image',
            //         iconImageHref: mapPin,
            //         iconImageSize: [30, 44],
            //     });
            // })
            //
            // objectManager.objects.events.add('click', function (e) {
            //     if (!e.originalEvent.currentTarget.balloon.isOpen()){
            //         myMap.geoObjects.events.add('mouseleave', function (e) {
            //             objectManager.objects.setObjectOptions(e.get('objectId'), {
            //                 iconLayout: 'default#image',
            //                 iconImageHref: mapPin,
            //                 iconImageSize: [30, 44],
            //             });
            //         })
            //     } else {
            //         myMap.geoObjects.events.add('mouseleave', function (e) {
            //             objectManager.objects.setObjectOptions(e.get('objectId'), {
            //                 iconLayout: 'default#image',
            //                 iconImageHref: mapPinActive,
            //                 iconImageSize: [30, 44],
            //             });
            //         })
            //     }
            // })

            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                if (!e.originalEvent.currentTarget.balloon.isOpen()){
                    e.originalEvent.currentTarget.balloon.close()
                } else {
                    //само откроется
                }

                if ($(window).width() >= '767'){
                    if (!e.originalEvent.currentTarget.balloon.isOpen()){
                        e.originalEvent.currentTarget.balloon.close()
                        $('[data-objectId]').addClass('active-map-items');
                        $('[data-objectId='+objectId+']').removeClass('active-map-items');
                        $('.shop__list').removeClass('map-active-list')
                    } else {
                        $('[data-objectId]').removeClass('active-map-items');
                        $('[data-objectId='+objectId+']').addClass('active-map-items');
                        $('.shop__list').addClass('map-active-list')
                        //само откроется
                    }
                }

            });


            myMap.geoObjects.events.add('balloonclose', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPin,
                    iconImageSize: [30, 44],
                });
            });

            myMap.geoObjects.events.add('balloonopen', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                });
            });

            //Клик в списке
            [].forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
                el.addEventListener('click', function() {
                    var objectId=el.getAttribute("data-objectId");
                    $('.map__modal-item').addClass('disabled-map-items');
                    // objectManager.objects.options.set('iconImageHref', '../build/img/map_pin-red.svg');
                    viewObject(objectId);
                });
            });

            $('.shop__item-link').click(function (item) {
                $('.shop__list').removeClass('map-active-list');
                $('.map__modal-item').removeClass('disabled-map-items active-map-items active')
            })
            // Что происходит при выборе метки или варианта из списка

            function viewObject(objectId){
                // Удаляем со всего списка класс active затем добавляем к выбранному
                $('[data-objectId]').removeClass('active-map-items');
                $('[data-objectId='+objectId+']').addClass('active-map-items');
                $('.shop__list').addClass('map-active-list')
                // Выделяем все метки в синий, затем выбранную в красную
                objectManager.objects.each(function (item) {
                    objectManager.objects.setObjectOptions(item.id, {
                        iconLayout: 'default#image',
                        iconImageHref: mapPin,
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44]
                    });
                });
                objectManager.objects.setObjectOptions(objectId, {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44]
                });
                // Центрирование по метке
                myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 18, {
                    checkZoomRange: true
                });
            }

            myMap.geoObjects.add(objectManager);

        }
    }

    if ($('.shop-map_yellow').is('.shop-map_yellow')){
        ymaps.ready(shopMapYellow);

        function shopMapYellow() {
            var mapPin = '../build/img/map_pin-yellow.svg';
            var mapPinHover = '../build/img/map_pin-hover-yellow.svg';
            var mapPinActive = '../build/img/map_pin-active-yellow.svg';
            var myMap = new ymaps.Map('shopMap', {
                center: [-33.867861, -63.988028],
                zoom: 18,
                controls: []
            }, {
                suppressMapOpenBlock: true,
            });
            objectManager = new ymaps.ObjectManager({
                clusterize: true,
                gridSize: 32
            });
            // myMap.geoObjects.add(objectManager);
            objectManager.objects.options.set('iconLayout', 'default#image');
            objectManager.objects.options.set('iconImageHref', mapPin);
            objectManager.objects.options.set('hideIconOnBalloonOpen', false);
            objectManager.objects.options.set('balloonOffset', [0, -40]);
            // Задаем наш шаблон для балунов геобъектов коллекции.
            objectManager.add({
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "id":1,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.504268, 30.542315]
                        },
                        "properties":{
                            "balloonContentBody": ['<div class="map__modal-list shop__item" id="shop__item" >\n' +
                            '                        <div class="map__modal-item">\n' +
                            '                            <div class="regis__shop-item_header">\n' +
                            '<div class="baloon-img-mobile">\n' +
                            '<img src="img/shop-image.png" alt="">\n' +
                            '</div>\n' +
                            '                            <div>\n' +
                            '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                            '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                            '</div>\n' +
                            '                            </div>\n' +
                            '                            <div class="regis__shop-item_body">\n' +
                            '                                <div class="regis__shop-position_address">\n' +
                            '                                    <div class="me-auto">\n' +

                            '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                            '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                            '                                        <div class="regis__shop-position_time">\n' +
                            '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                            '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                            '                                            </svg>\n' +
                            '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
                            '                                        </div>\n' +
                            '<div class="position__filters-map">'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<a href="#" class="filter__item">Ламинат</a>'+
                            '<button class="filter__item filters-more-items">Ещё 5</button>'+
                            '</div>'+
                            '                                    </div>\n' +
                            '                                </div>\n' +
                            '                            </div>\n' +
                            '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
                            '                        </div>\n' +
                            '                    </div>',
                            ].join(""),
                            "iconCaption": 'Домикс «Сити Молл»'
                        }
                    },{
                        "type": "Feature",
                        "id":2,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[-33.867861, -63.988028]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item" id="shop__item" >\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '<div class="baloon-img-mobile">\n' +
                                '<img src="img/shop-image.png" alt="">\n' +
                                '</div>\n' +
                                '                            <div>\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '</div>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto">\n' +

                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="position__filters-map">'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<button class="filter__item filters-more-items">Ещё 5</button>'+
                                '</div>'+
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                            "iconCaption": "Домикс «Сити Молл»"
                        }
                    },{
                        "type": "Feature",
                        "id":3,
                        "geometry":{
                            "type": "Point",
                            "coordinates":[50.813802, -2.475569]
                        },
                        "properties":{
                            "balloonContent": '<div class="map__modal-list shop__item" id="shop__item" >\n' +
                                '                        <div class="map__modal-item">\n' +
                                '                            <div class="regis__shop-item_header">\n' +
                                '<div class="baloon-img-mobile">\n' +
                                '<img src="img/shop-image.png" alt="">\n' +
                                '</div>\n' +
                                '                            <div>\n' +
                                '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
                                '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
                                '</div>\n' +
                                '                            </div>\n' +
                                '                            <div class="regis__shop-item_body">\n' +
                                '                                <div class="regis__shop-position_address">\n' +
                                '                                    <div class="me-auto">\n' +

                                '                                        <a href="tel:">8 364 31 07 28</a>\n' +
                                '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
                                '                                        <div class="regis__shop-position_time">\n' +
                                '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                                '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
                                '                                            </svg>\n' +
                                '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
                                '                                        </div>\n' +
                                '<div class="position__filters-map">'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<a href="#" class="filter__item">Ламинат</a>'+
                                '<button class="filter__item filters-more-items">Ещё 5</button>'+
                                '</div>'+
                                '                                    </div>\n' +
                                '                                </div>\n' +
                                '                            </div>\n' +
                                '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
                                '                        </div>\n' +
                                '                    </div>',
                            "iconCaption": "Домикс «Сити Молл» 3"
                        }
                    }
                ]
            });
            /* 2. Обработка списка и меток */

            $(document).on( "click", ".filters-more-items", function() {
                // Определяем по какой метке произошло событие.
                $('.position__filters-map').addClass("open__more-balun-active");
                $(this).hide();
            });

            //Клик по метке в карте
            objectManager.objects.events.add('click', function (e) {
                var objectId=e.get('objectId');
                if (!e.originalEvent.currentTarget.balloon.isOpen()){
                    e.originalEvent.currentTarget.balloon.close()
                } else {
                    //само откроется
                }

                if ($(window).width() >= '767'){
                    if (!e.originalEvent.currentTarget.balloon.isOpen()){
                        e.originalEvent.currentTarget.balloon.close()
                        $('[data-objectId]').addClass('active-map-items');
                        $('[data-objectId='+objectId+']').removeClass('active-map-items');
                        $('.shop__list').removeClass('map-active-list')
                    } else {
                        $('[data-objectId]').removeClass('active-map-items');
                        $('[data-objectId='+objectId+']').addClass('active-map-items');
                        $('.shop__list').addClass('map-active-list')
                        //само откроется
                    }
                }

            });


            myMap.geoObjects.events.add('balloonclose', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPin,
                    iconImageSize: [30, 44],
                });
            });

            myMap.geoObjects.events.add('balloonopen', function (e) {
                objectManager.objects.setObjectOptions(e.get('objectId'), {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                });
            });

            //Клик в списке
            [].forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
                el.addEventListener('click', function() {
                    var objectId=el.getAttribute("data-objectId");
                    $('.map__modal-item').addClass('disabled-map-items');
                    // objectManager.objects.options.set('iconImageHref', '../build/img/map_pin-red.svg');
                    viewObject(objectId);
                });
            });

            $('.shop__item-link').click(function (item) {
                $('.shop__list').removeClass('map-active-list');
                $('.map__modal-item').removeClass('disabled-map-items active-map-items active')
            })
            // Что происходит при выборе метки или варианта из списка

            function viewObject(objectId){
                // Удаляем со всего списка класс active затем добавляем к выбранному
                $('[data-objectId]').removeClass('active-map-items');
                $('[data-objectId='+objectId+']').addClass('active-map-items');
                $('.shop__list').addClass('map-active-list')
                // Выделяем все метки в синий, затем выбранную в красную
                objectManager.objects.each(function (item) {
                    objectManager.objects.setObjectOptions(item.id, {
                        iconLayout: 'default#image',
                        iconImageHref: mapPin,
                        iconImageSize: [30, 44],
                        iconImageOffset: [-15, -44]
                    });
                });
                objectManager.objects.setObjectOptions(objectId, {
                    iconLayout: 'default#image',
                    iconImageHref: mapPinActive,
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44]
                });
                // Центрирование по метке
                myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 18, {
                    checkZoomRange: true
                });
            }

            myMap.geoObjects.add(objectManager);

        }
    }


    // if ($('.window-map').is('.window-map')){
    //     ymaps.ready(init);
    //     function init(){
    //
    //         var myMap = new ymaps.Map('mapModal', {
    //             center: [-33.867861, -63.988028],
    //             zoom: 18,
    //             controls:[]
    //         },{
    //             suppressMapOpenBlock: true,
    //         });
    //         objectManager = new ymaps.ObjectManager({
    //             clusterize: true,
    //             gridSize: 32
    //         });
    //         myMap.geoObjects.add(objectManager);
    //         objectManager.objects.options.set('iconLayout', 'default#image');
    //         objectManager.objects.options.set('iconImageHref', '../build/img/map_pin.svg');
    //         objectManager.objects.options.set('hideIconOnBalloonOpen', false);
    //         objectManager.objects.options.set('balloonOffset', [0, -40]);
    //         // Задаем наш шаблон для балунов геобъектов коллекции.
    //         myMap.geoObjects.add(objectManager);
    //         objectManager.add({
    //             "type": "FeatureCollection",
    //             "features": [
    //                 {
    //                     "type": "Feature",
    //                     "id":1,
    //                     "geometry":{
    //                         "type": "Point",
    //                         "coordinates":[50.504268, 30.542315]
    //                     },
    //                     "properties":{
    //                         "balloonContentBody": [
    //                             '<div class="map__modal-list shop__item" id="shop__item" >\n' +
    //                         '                        <div class="map__modal-item maps__modal-items">\n' +
    //                         '                            <div class="regis__shop-item_header">\n' +
    //                         '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
    //                         '                            </div>\n' +
    //                         '                            <div class="regis__shop-item_body">\n' +
    //                         '                                <div class="regis__shop-position_address">\n' +
    //                         '                                    <div class="map-position-item">\n' +
    //                         '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
    //                         '                                        <a href="tel:">8 364 31 07 28</a>\n' +
    //                         '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
    //                         '                                        <div class="regis__shop-position_time">\n' +
    //                         '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    //                         '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
    //                         '                                            </svg>\n' +
    //                         '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
    //                         '                                        </div>\n' +
    //                                                                 '<div class="sinle-characters show-hide-parent maps-characters">\n' +
    //                                                                 '<div class="sinle-characters-wr show-hide-shadow">\n' +
    //                                                                 '<div class="sinle-character">\n' +
    //                                                                 '<div>В наличии</div>\n' +
    //                                                                 '<span></span>\n' +
    //                                                                 '<div>88 м2</div>\n' +
    //                                                                 '</div>\n' +
    //                                                                 '</div>\n' +
    //                                                                 '</div>\n' +
    //                         '                                    </div>\n' +
    //                         '                                </div>\n' +
    //                         '                            </div>\n' +
    //                         '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
    //                         '                        </div>\n' +
    //                         '                    </div>',
    //                         ].join(""),
    //                         "iconCaption": 'Домикс «Сити Молл»'
    //                     }
    //                 },{
    //                     "type": "Feature",
    //                     "id":2,
    //                     "geometry":{
    //                         "type": "Point",
    //                         "coordinates":[-33.867861, -63.988028]
    //                     },
    //                     "properties":{
    //                         "balloonContent": '<div class="map__modal-list shop__item" id="shop__item" >\n' +
    //                             '                        <div class="map__modal-item maps__modal-items">\n' +
    //                             '                            <div class="regis__shop-item_header">\n' +
    //                             '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
    //                             '                            </div>\n' +
    //                             '                            <div class="regis__shop-item_body">\n' +
    //                             '                                <div class="regis__shop-position_address">\n' +
    //                             '                                    <div class="map-position-item">\n' +
    //                             '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
    //                             '                                        <a href="tel:">8 364 31 07 28</a>\n' +
    //                             '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
    //                             '                                        <div class="regis__shop-position_time">\n' +
    //                             '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    //                             '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
    //                             '                                            </svg>\n' +
    //                             '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
    //                             '                                        </div>\n' +
    //                             '<div class="sinle-characters show-hide-parent maps-characters">\n' +
    //                             '<div class="sinle-characters-wr show-hide-shadow">\n' +
    //                             '<div class="sinle-character">\n' +
    //                             '<div>В наличии</div>\n' +
    //                             '<span></span>\n' +
    //                             '<div>88 м2</div>\n' +
    //                             '</div>\n' +
    //                             '</div>\n' +
    //                             '</div>\n' +
    //                             '                                    </div>\n' +
    //                             '                                </div>\n' +
    //                             '                            </div>\n' +
    //                             '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
    //                             '                        </div>\n' +
    //                             '                    </div>',
    //                         "iconCaption": "Домикс «Сити Молл»"
    //                     }
    //                 },{
    //                     "type": "Feature",
    //                     "id":3,
    //                     "geometry":{
    //                         "type": "Point",
    //                         "coordinates":[50.813802, -2.475569]
    //                     },
    //                     "properties":{
    //                         "balloonContent": '<div class="map__modal-list shop__item" id="shop__item" >\n' +
    //                             '                        <div class="map__modal-item maps__modal-items">\n' +
    //                             '                            <div class="regis__shop-item_header">\n' +
    //                             '                                <h3 class="regis__shop-caption">Домикс «Сити Молл»</h3>\n' +
    //                             '                            </div>\n' +
    //                             '                            <div class="regis__shop-item_body">\n' +
    //                             '                                <div class="regis__shop-position_address">\n' +
    //                             '                                    <div class="map-position-item">\n' +
    //                             '                                        <p class="regis__shop-address">Югорский тракт, 38 (ТРЦ «Сургут Сити Молл»)</p>\n' +
    //                             '                                        <a href="tel:">8 364 31 07 28</a>\n' +
    //                             '                                        <a href="mailto:">surgut@domix-club.ru</a>\n' +
    //                             '                                        <div class="regis__shop-position_time">\n' +
    //                             '                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    //                             '                                                <path d="M8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#000"/>\n' +
    //                             '                                            </svg>\n' +
    //                             '                                            <p class="regis__shop-time Black">Ежедневно с 10:00 до 22:00</p>\n' +
    //                             '                                        </div>\n' +
    //                             '<div class="sinle-characters show-hide-parent maps-characters">\n' +
    //                             '<div class="sinle-characters-wr show-hide-shadow">\n' +
    //                             '<div class="sinle-character">\n' +
    //                             '<div>В наличии</div>\n' +
    //                             '<span></span>\n' +
    //                             '<div>88 м2</div>\n' +
    //                             '</div>\n' +
    //                             '</div>\n' +
    //                             '</div>\n' +
    //                             '                                    </div>\n' +
    //                             '                                </div>\n' +
    //                             '                            </div>\n' +
    //                             '                            <button class="btn open__shop-modal-btn btn_ret-trans">Подробнее</button>\n' +
    //                             '                        </div>\n' +
    //                             '                    </div>',
    //                         "iconCaption": "Домикс «Сити Молл» 3"
    //                     }
    //                 }
    //             ]
    //         });
    //         /* 2. Обработка списка и меток */
    //         //Клик по метке в карте
    //         objectManager.objects.events.add('click', function (e) {
    //             var objectId=e.get('objectId');
    //             viewObject(objectId);
    //         });
    //         //Клик в списке
    //         [].forEach.call(document.querySelectorAll('[data-objectId]'), function(el) {
    //             el.addEventListener('click', function() {
    //                 var objectId=el.getAttribute("data-objectId");
    //                 viewObject(objectId);
    //             });
    //         });
    //         // Что происходит при выборе метки или варианта из списка
    //         function viewObject(objectId){
    //             // Удаляем со всего списка класс active затем добавляем к выбранному
    //             $('[data-objectId]').removeClass('active');
    //             $('[data-objectId='+objectId+']').addClass('active');
    //             // Выделяем все метки в синий, затем выбранную в красную
    //             myMap.geoObjects.events.add('balloonopen', function (e) {
    //                 objectManager.objects.setObjectOptions(objectId, {
    //                     iconLayout: 'default#image',
    //                     iconImageHref: "../build/img/map_pin-red.svg",
    //                     iconImageSize: [30, 44],
    //                     iconImageOffset: [-15, -44]
    //                 });
    //             });
    //             myMap.geoObjects.events.add('balloonclose', function (e) {
    //                 objectManager.objects.setObjectOptions(objectId, {
    //                     iconLayout: 'default#image',
    //                     iconImageHref: "../build/img/map_pin.svg",
    //                     iconImageSize: [30, 44],
    //                     iconImageOffset: [-15, -44]
    //                 });
    //             });
    //             // Центрирование по метке
    //             myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 18, {
    //                 checkZoomRange: true
    //             });
    //         }
    //
    //     }
    // }



    $( "#inputCounter" ).change(function() {
        if ($(this).val() > "4"){
            $('#exampleModal2').modal('show');
        }
    });

    $('#mainCarousel .carousel__button.is-prev').hide();

    $('#mainCarousel .carousel__button.is-next').on('click', function () {
        $('#mainCarousel .carousel__button.is-prev').show();
    })



    if ($(window).width() >= 981){
        var mh = 0;
        $(".about__under_card-item").each(function() {
            var h_block = parseInt($(this).height());
            if (h_block > mh) {
                mh = h_block;
            };
        });
        $(".about__under_card-item").height(mh);
    }

    //
    // $('.radio').on('click', function () {
    //     sidebar.updateSticky();
    // })

    $('.jq-number__field').on('click', function () {
        $(this).removeAttr('readonly')
    })

    $('.measure__date-btn').on('click',function () {
        $('.measure__position-date-block').toggleClass('measure__position-date-block-active');
    })


    $(".open-search-address").hide();

    $("#address").keyup(function () {
        if ($(this).val()) {
            $(".open-search-address").show();
        }
        else {
            $(".open-search-address").hide();
        }
    });

    $('.question__filter-btn').on('click',function () {
        $('.question__filter').toggleClass('question__filter-active');
    })


    $('.styling__content_options-btn').on('click',function () {
        $(this).parent().addClass('styling__content_options-item-active')
        $(this).hide();
    })

    $('.open__more-list').on('click',function () {
        $(this).parent().addClass('styling__content-list-active')
        $(this).hide();
    })

    $('.open__more-text').on('click',function () {
        $('.styling__content_description-block').addClass('styling__content_description-block-active')
        $(this).hide();
    })


    var plus = $("#plus"),
        minus = $('#min'),
        counter = $("#counter"),
        count = 0;
    plus.on('click', function(e) {
        e.preventDefault();
        count++;
        counter.html(count);
    });

    minus.on('click', function(e) {
        e.preventDefault();
        count--;
        counter.html(count);
    });

    var date = new Date;

    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    $(".measure__date-btn").text(date.toLocaleString("ru", options))

    $('.shop__open-more-card').on('click', function () {
        $(this).hide();
        $('.shop__item-card-position').addClass('shop__item-card-position-opencard-mobile');
    })



});


