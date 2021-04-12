/**
 * as core namespace
 *
 */
;(function ($) {
    var viktorTest = window.viktorTest = {
        init: function () {
            $('.nav-link').click(this.togglePage.bind(this));
            $('.js-send-email').click(this.sendEmail.bind(this));
        },
        togglePage: function (e) {
            e.preventDefault();
            var target = $(e.target);
            var parent = $(e.target).parent();
            var self = this;
			if (target && !parent.hasClass('open')) {
                // parent.parent().find('.open').removeClass('open');
                if(!self.isMobile()) {
                    parent.siblings().animate({width: '10%'}, 400).removeClass('open');
                    // parent.addClass('open');
                    parent.animate({width: '80%'}, 400).addClass('open');
                    return false;
                }

                parent.siblings().animate({height: '10%'}, 400).removeClass('open');
                    // parent.addClass('open');
                parent.animate({height: '80%'}, 400).addClass('open');
                
				return false;
			}
        },
        
        sendEmail: function () {
          
        },
        isMobile: function () {
            return $(window).width() <= 768;
        }
    };

})(jQuery);

$(document).ready(function () {
    viktorTest.init();
});

// catch all document.write() calls
(function (doc) {
    var write = doc.write;
    doc.write = function (q) {
        //log('document.write(): ',arguments);
        if (/docwriteregexwhitelist/.test(q)) write.apply(doc, arguments);
    };
})(document);
