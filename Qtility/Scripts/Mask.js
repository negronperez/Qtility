$(function () {
    $('.date').mask('00/00/0000');
    $('.time').mask('00:00:00');
    $('.date_time').mask('00/00/0000 00:00:00');
    $('.cep').mask('00000-000');
    $('.phone').mask('0000-0000');
    $('.phone_with_ddd').mask('(00) 0000-0000');
    $('.phone_us').mask('000-000-0000', { placeholder: "___-___-____" });
    $('.ss').mask('000-00-0000', { placeholder: "___-__-____" });
    $('.mixed').mask('AAA 000-S0S');
    $('.ip_address').mask('099.099.099.099');
    $('.percent').mask('999.999', { reverse: false });
    $('.clear-if-not-match').mask("00/00/0000", { clearIfNotMatch: true });
    $('.placeholder').mask("00/00/0000", { placeholder: "__/__/____" });
    $('.year').mask("0000", { placeholder: "____" });

    $('.cep_with_callback').mask('00000-000', {
        onComplete: function (cep) {
            console.log('Mask is done!:', cep);
        },
        onKeyPress: function (cep, event, currentField, options) {
            console.log('An key was pressed!:', cep, ' event: ', event, 'currentField: ', currentField.attr('class'), ' options: ', options);
        }
    });

    $('.crazy_cep').mask('00000-000', {
        onKeyPress: function (cep) {
            var masks = ['00000-000', '0-00-00-00'];
            mask = (cep.length > 7) ? masks[1] : masks[0];
            $('.crazy_cep').mask(mask, this);
        }
    });

    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.money').mask('#.##0,00', { reverse: true, maxlength: false });

    var SaoPauloCelphoneMask = function (phone, e, currentField, options) {
        return phone.match(/^(\(?11\)? ?9(5[0-9]|6[0-9]|7[01234569]|8[0-9]|9[0-9])[0-9]{1})/g) ? '(00) 00000-0000' : '(00) 0000-0000';
    };

    $(".sp_celphones").mask('(00) 00009-0000');

    $(".bt-mask-it").click(function () {
        $(".mask-on-div").mask("000.000.000-00");
        $(".mask-on-div").fadeOut(500).fadeIn(500)
    })

    $('pre').each(function (i, e) { hljs.highlightBlock(e) });
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
