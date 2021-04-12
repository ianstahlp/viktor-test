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
            var email = document.getElementById('email').value;
            var subject = document.getElementById('emailSubject').value;
            var body = document.getElementById('emailBody').value;
            Email.send({
                SecureToken: 'D8AE60800B07AA675FD02D2F718688C5344254864417E7006773EE2729D8A49A816ADAEE1D5EE2D5587F7519731CC369',
                To : 'ianpstahl@gmail.com',
                From : email,
                Subject : subject,
                Body : body
            }).then(
              message => alert(message)
            );
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