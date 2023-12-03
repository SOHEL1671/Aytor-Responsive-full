$(function(){
    //Toggle Search Modal
    $('#search_btn').on('click', function(){
        $('#search_modal').addClass('show');
    })
    $('#search_close_btn').on('click', function(){
        $('#search_modal').removeClass('show');
    });
});


    //Deals Activation
let DealsEndingDate = $('.time_box_content').data('deals-time')
console.log(DealsEndingDate);

$('.time_box_content').countdown(DealsEndingDate, function (event) {
    var $this = $(this).html(
        event.strftime(
            "<div><h5>%D</h5><p>Days</p></div>" +
            "<span>:</span>" +
            "<div><h5>%H</h5><p>Hours</p></div>" + // Changed "days" to "hours"
            "<span>:</span>" +
            "<div><h5>%M</h5><p>Minutes</p></div>" + // Changed "days" to "minutes"
            "<span>:</span>" +
            "<div><h5>%S</h5><p>Seconds</p></div>" // Changed "days" to "seconds"
        )
    );
});


 // ==== Start Home_page Sliding jQuery ===== //
 $(".bannar_sliding_box").slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: true,
    arrows: true,
    appendArrows: $('.arrow_box'),
    prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
    nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    appendDots: $(".dot_items"),
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '0px',
            }
        }]
})


$('.arriavl_sliding_box').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
    nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
})


$('.deals_offer_sliding_box').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    arrows: false,
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '0px',
                arrows: false,
            }
        }
    ]

})

$('.latest_sliding_box').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    arrows: true,
    dots: true,
    prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
    nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
})


$('.leadership_slide_box').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    arrows: true,
    dots: false,
    prevArrow: `<i class='bx bx-left-arrow-circle arrow_left' ></i> `,
    nextArrow: `<i class='bx bx-right-arrow-circle arrow_right' ></i>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }]
})
// ====End Home_page sliding jQuery ===== //