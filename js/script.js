var select = document.querySelector('select');

function b() {
  document.body.style.backgroundColor = '#fff';
}

function c(el) {
  document.body.style.backgroundColor = el;
}

function a() {
  currentVal = select.value;
  b();
  c(currentVal);
}
//localstorage start
function lS() {
  var value = select.value;
  localStorage.setItem('bodyBg', value);
}

var storedBodyBg = localStorage.getItem("bodyBg");
if (storedBodyBg) {
  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value === storedBodyBg) {
      select.selectedIndex = i;
    }
  }
}
//localstorage end

//bez trigger - ne rabotaet
function trigger(action, el) {
  if (document.createEvent) {
    var event = document.createEvent('HTMLEvents');

    event.initEvent(action, true, false);
    el.dispatchEvent(event);
  } else {
    el.fireEvent('on' + action);
  }
}


select.addEventListener('change', a);
select.addEventListener('change', lS);
trigger('change', select);
// Подключает
function addStyleSheets() {
  var $head = document.head,
    $link = document.createElement('link');

  $link.rel = 'stylesheet';
  $link.href = 'css/AddStyles.css';
  $link.id = 'a';
  var myLink = document.getElementsByTagName('link');
  for (var i = 0; i < myLink.length; i++) {
    if (myLink[i].href == $link.href) {
      myLink[i].disabled = false;
    } else {
      $head.appendChild($link);
    }
  }

}

// Отключает по ссылке
function disableStyleSheets() {
  //  var styleSheets = document.getElementsByTagName('link')
  //  var href1 = 'css/AddStyles.css';
  //  for (var i = 0; i < styleSheets.length; i++) {
  //    if (styleSheets[i].href == href1) {
  //      styleSheets[i].disabled = true;
  //    }
  //  }
  var a = document.getElementById('a');
  var lastElementChild = document.getElementsByTagName('link');
  var i = lastElementChild.length - 1;
  a.parentNode.removeChild(lastElementChild[i]);
}

var btn1 = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');

btn1.addEventListener('click', addStyleSheets); // Подключаем
btn2.addEventListener('click', disableStyleSheets); // Отключаем
