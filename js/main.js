var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
spaceBetween: 30,
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
	},
});

$(document).ready(function(){
  $('.third-block__input--phone').mask('+7 (999) 999-99-99');
});


//кнопка вызова формы
var b = document.getElementById('overlay');
function swa(){
	b.style.visibility = 'visible';
	b.style.opacity = '1';
	b.style.transition = 'all 0.7s ease-out 0s';
}
function swa2(){
	b.style.visibility = 'hidden';
	b.style.opacity = '0';
}

let sendForm = document.querySelector('[data-toggle-modal]');
sendForm.addEventListener('click', openModal);
sendForm.onclick = function (evt) {
  evt.preventDefault();
};

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass("modal__overlay--visible");
  modalDialog.addClass("modal__dialog--visible");
}

let closeButton = document.querySelector('.modal__button');
closeButton.addEventListener('click', closeModal);


  function closeModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass("modal__overlay--visible");
  modalDialog.removeClass("modal__dialog--visible");
}




var form_id_js =  document.getElementById('javascript_form');

    var data_js = {
        "access_token": "4o4b02w2mi20moc9gfdajsyi"
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function js_onError(error) {
        // remove this to avoid redirect
        window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

    var sendButton = document.getElementById("js_send");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var name = document.querySelector("#" + form_id_js + " [name='name']").value;
        var phone = document.querySelector("#" + form_id_js + " [name='phone']").value;
        data_js['name'] = name;
        data_js['phone'] = phone;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });