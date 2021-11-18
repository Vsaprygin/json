<!-- скрипт, который обработает нажатие на кнопку и отправит данные на сервер -->

  // эта функция сработает при нажатии на кнопку
  function sendJSON() {
    // с помощью jQuery обращаемся к элементам на странице по их именам
    let datatime = document.querySelector('#Datatime').value;
    let mac_dev = document.querySelector('#Mac_dev').value;
	let duration = document.querySelector('#Duration').value;
    let device = document.querySelector('#Device').value;
	// а вот сюда мы поместим ответ от сервера
    let result = document.querySelector('.result');
    // создаём новый экземпляр запроса XHR
    let xhr = new XMLHttpRequest();
    // адрес, куда мы отправим нашу JSON-строку
    let url = "https://json.vsaprygin.ru/json/json.php";
    // открываем соединение
    xhr.open("POST", url, true);
    // устанавливаем заголовок — выбираем тип контента, который отправится на сервер, в нашем случае мы явно пишем, что это JSON
    xhr.setRequestHeader("Content-Type", "application/json");
    // преобразуем наши данные JSON в строку
	var data = '{"Datatime":"'+datatime+'","Mac_dev":"'+mac_dev+'","Duration":"'+duration+'","Device":"'+device+'"}';
	//если данных нет, то отправляем стандартную строку из примера
	if (datatime=="" && mac_dev=="" && duration=="" && device=="") {
	data = '{"Datatime":"Sun May 16 04:15:44 2021", "Mac_dev":"12:34:56:78:9a:bc", "Duration":"10", "Device":"10.0.5.142"}';
	}
    // когда всё готово, отправляем JSON на сервер
    xhr.send(data);
	    // когда придёт ответ на наше обращение к серверу, мы его обработаем здесь
    xhr.onreadystatechange = function () {
      // если запрос принят и сервер ответил, что всё в порядке
      if (xhr.readyState === 4 && xhr.status === 200) {
        // выводим то, что ответил нам сервер — так мы убедимся, что данные он получил правильно
        result.innerHTML = this.responseText;
	  }
	  	// очищаем поля
	document.querySelector('#Datatime').value = "";
    document.querySelector('#Mac_dev').value = "";
	document.querySelector('#Duration').value = "";
    document.querySelector('#Device').value = "";
    };
  }
