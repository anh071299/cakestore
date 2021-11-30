
const checkEmail = (e) => {
    let n = e.next();
    let a = e.val().trim();
    a.length == '' ? (n.text('Please enter your email'), e.addClass('is-invalid'), !1)
        : a.match(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/)
            ? (e.removeClass('is-invalid'), !0) : (n.text('Your email is invalid'), e.addClass('is-invalid'), !1);

}

const checkName = (e) => {
    let n = e.next();
    let nameTrimmed = e.val().trim();
    nameTrimmed.length == ''
        ? (n.text("Please enter your name"), e.addClass("is-invalid"), !1)
        : (n.removeClass("is-invalid"), !0)
}

$('.newsletter-form .blob-btn').click(function (e) {
    email = $('.newsletter-form input[name = email]')
    !checkEmail(email) && e.preventDefault();
})

$('#contact-form .submitBtn').click(function (e) {
    e = $('#contact-form input[name = email]');
    n = $('#contact-form input[name = name]');
        (!checkEmail(e) && !checkName(n)) || e.preventDefault()
})

