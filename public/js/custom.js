$(window).on("load", function () {
  "use strict";
  var e = $("#loading");
  e.find("#loading-center-absolute").fadeOut(), e.delay(400).fadeOut("slow");
}),
  $(window).on("scroll", function () {
    "use strict";
    80 < $(window).scrollTop()
      ? $(".wsmainfull").addClass("scroll")
      : $(".wsmainfull").removeClass("scroll");
  }),
  $(document).ready(function () {
    "use strict";
    new WOW().init(),
      $(window).outerWidth() < 992 &&
        $(".wsmenu-list li.nl-simple, .wsmegamenu li, .sub-menu li").on(
          "click",
          function () {
            $("body").removeClass("wsactive"),
              $(".sub-menu").slideUp("slow"),
              $(".wsmegamenu").slideUp("slow"),
              $(".wsmenu-click").removeClass("ws-activearrow"),
              $(".wsmenu-click02 > i").removeClass("wsmenu-rotate");
          }
        ),
      $(window).outerWidth() < 992 &&
        $(".wsanimated-arrow").on("click", function () {
          $(".sub-menu").slideUp("slow"),
            $(".wsmegamenu").slideUp("slow"),
            $(".wsmenu-click").removeClass("ws-activearrow"),
            $(".wsmenu-click02 > i").removeClass("wsmenu-rotate");
        }),
      ($.scrollUp = function (e) {
        var a = $.extend(
            {},
            {
              scrollName: "scrollUp",
              topDistance: 600,
              topSpeed: 800,
              animation: "fade",
              animationInSpeed: 200,
              animationOutSpeed: 200,
              scrollText: "",
              scrollImg: !1,
              activeOverlay: !1,
            },
            e
          ),
          i = "#" + a.scrollName;
        $("<a/>", {
          id: a.scrollName,
          href: "#top",
          title: a.scrollText,
        }).appendTo("body"),
          a.scrollImg || $(i).text(a.scrollText),
          $(i).css({ display: "none", position: "fixed", "z-index": "99999" }),
          a.activeOverlay &&
            ($("body").append("<div id='" + a.scrollName + "-active'></div>"),
            $(i + "-active").css({
              position: "absolute",
              top: a.topDistance + "px",
              width: "100%",
              "border-top": "1px dotted " + a.activeOverlay,
              "z-index": "99999",
            })),
          $(window).on("scroll", function () {
            switch (a.animation) {
              case "fade":
                $(
                  $(window).scrollTop() > a.topDistance
                    ? $(i).fadeIn(a.animationInSpeed)
                    : $(i).fadeOut(a.animationOutSpeed)
                );
                break;
              case "slide":
                $(
                  $(window).scrollTop() > a.topDistance
                    ? $(i).slideDown(a.animationInSpeed)
                    : $(i).slideUp(a.animationOutSpeed)
                );
                break;
              default:
                $(
                  $(window).scrollTop() > a.topDistance
                    ? $(i).show(0)
                    : $(i).hide(0)
                );
            }
          });
      }),
      $.scrollUp(),
      $("ul.tabs-1 li").on("click", function () {
        var e = $(this).attr("data-tab");
        $("ul.tabs-1 li").removeClass("current"),
          $(".tab-content").removeClass("current"),
          $(this).addClass("current"),
          $("#" + e).addClass("current");
      }),
      $(".grid-loaded").imagesLoaded(function () {
        $(".masonry-filter").on("click", "button", function () {
          var e = $(this).attr("data-filter");
          a.isotope({ filter: e });
        }),
          $(".masonry-filter button").on("click", function () {
            $(".masonry-filter button").removeClass("is-checked"),
              $(this).addClass("is-checked");
            var e = $(this).attr("data-filter");
            return a.isotope({ filter: e }), !1;
          });
        var a = $(".masonry-wrap").isotope({
          itemSelector: ".masonry-image",
          percentPosition: !0,
          transitionDuration: "0.7s",
          masonry: { columnWidth: ".masonry-image" },
        });
      }),
      $(".accordion > .accordion-item.is-active")
        .children(".accordion-panel")
        .slideDown(),
      $(".accordion > .accordion-item").on("click", function () {
        $(this)
          .siblings(".accordion-item")
          .removeClass("is-active")
          .children(".accordion-panel")
          .slideUp(),
          $(this)
            .toggleClass("is-active")
            .children(".accordion-panel")
            .slideToggle("ease-out");
      }),
      $(".image-link").magnificPopup({ type: "image" }),
      $(".video-popup1").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com",
              src: "https://www.youtube.com/embed/_GdBE1hOCOI",
            },
          },
        },
      }),
      $(".video-popup2").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com",
              src: "https://www.youtube.com/embed/7e90gBu4pas",
            },
          },
        },
      }),
      $(".video-popup3").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com",
              src: "https://www.youtube.com/embed/0gv7OC9L2s8",
            },
          },
        },
      }),
      $(".video-popup4").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com",
              src: "https://www.youtube.com/embed/CcV2t0KNeXw",
            },
          },
        },
      }),
      $(".video-popup5").magnificPopup({
        type: "iframe",
        iframe: {
          patterns: {
            youtube: {
              index: "youtube.com",
              src: "https://www.youtube.com/embed/wQFombOjFOU",
            },
          },
        },
      }),
      $(".count-element").each(function () {
        $(this).appear(
          function () {
            $(this)
              .prop("Counter", 0)
              .animate(
                { Counter: $(this).text() },
                {
                  duration: 4e3,
                  easing: "swing",
                  step: function (e) {
                    $(this).text(Math.ceil(e));
                  },
                }
              );
          },
          { accX: 0, accY: 0 }
        );
      }),
      $(document).ready(function () {
        $(".reviews-1-wrapper").owlCarousel({
          items: 3,
          loop: !0,
          autoplay: !0,
          navBy: 1,
          autoplayTimeout: 4500,
          autoplayHoverPause: !0,
          smartSpeed: 1500,
          responsive: {
            0: { items: 1 },
            767: { items: 1 },
            768: { items: 2 },
            991: { items: 3 },
            1e3: { items: 3 },
          },
        });
      }),
      $(".reviews-4-wrapper").owlCarousel({
        items: 2,
        loop: !0,
        autoplay: !0,
        navBy: 1,
        autoplayTimeout: 4500,
        autoplayHoverPause: !0,
        smartSpeed: 1500,
        responsive: {
          0: { items: 1 },
          767: { items: 1 },
          768: { items: 2 },
          991: { items: 2 },
          1e3: { items: 2 },
        },
      });
    $(".brands-carousel").owlCarousel({
      items: 5,
      loop: !0,
      autoplay: !0,
      navBy: 1,
      nav: !1,
      autoplayTimeout: 4e3,
      autoplayHoverPause: !1,
      smartSpeed: 2e3,
      responsive: {
        0: { items: 2 },
        550: { items: 3 },
        767: { items: 3 },
        768: { items: 4 },
        991: { items: 5 },
        1e3: { items: 5 },
      },
    }),
      $(".request-form").validate({
        rules: {
          name: { required: !0, minlength: 2, maxlength: 16 },
          email: { required: !0, email: !0 },
        },
        messages: {
          name: { required: "Please enter no less than (2) characters" },
          email: {
            required: "We need your email address to contact you",
            email:
              "Your email address must be in the format of name@domain.com",
          },
        },
      }),
      $(".contact-form").validate({
        rules: {
          name: { required: !0, minlength: 1, maxlength: 16 },
          email: { required: !0, email: !0 },
          message: { required: !0, minlength: 2 },
        },
        messages: {
          name: { required: "Please enter no less than (1) characters" },
          email: {
            required: "We need your email address to contact you",
            email:
              "Your email address must be in the format of name@domain.com",
          },
          message: { required: "Please enter no less than (2) characters" },
        },
      }),
      $(".comment-form").validate({
        rules: {
          name: { required: !0, minlength: 1, maxlength: 16 },
          email: { required: !0, email: !0 },
          message: { required: !0, minlength: 2 },
        },
        messages: {
          name: { required: "Please enter no less than (1) characters" },
          email: {
            required: "We need your email address to contact you",
            email:
              "Your email address must be in the format of name@domain.com",
          },
          message: { required: "Please enter no less than (2) characters" },
        },
      }),
      $(".sign-in-form").validate({
        rules: {
          password: { required: !0, minlength: 2, maxlength: 16 },
          email: { required: !0, email: !0 },
        },
        messages: {
          password: { required: "Please enter no less than (2) characters" },
          email: {
            required: "Please enter valid email address",
            email:
              "Your email address must be in the format of name@domain.com",
          },
        },
      }),
      $(".sign-up-form").validate({
        rules: {
          name: { required: !0, minlength: 2, maxlength: 16 },
          password: { required: !0, minlength: 2, maxlength: 16 },
          email: { required: !0, email: !0 },
        },
        messages: {
          name: { required: "Please enter no less than (2) characters" },
          password: { required: "Please enter no less than (2) characters" },
          email: {
            required: "Please enter valid email address",
            email:
              "Your email address must be in the format of name@domain.com",
          },
        },
      }),
      $(".reset-password-form").validate({
        rules: {
          email: { required: !0, email: !0 },
          messages: {
            email: {
              required: "We need your email address to contact you",
              email:
                "Your email address must be in the format of name@domain.com",
            },
          },
        },
      });
    var e = 0;
    $(".btn-show-pass").on("click", function () {
      e =
        0 == e
          ? ($(this).next("input").attr("type", "text"),
            $(this).find("span.eye-pass").removeClass("flaticon-visible"),
            $(this).find("span.eye-pass").addClass("flaticon-hidden"),
            1)
          : ($(this).next("input").attr("type", "password"),
            $(this).find("span.eye-pass").addClass("flaticon-visible"),
            $(this).find("span.eye-pass").removeClass("flaticon-hidden"),
            0);
    });
  });
