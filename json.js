// эта функция сработает при нажатии на кнопку
function sendJSON() {
  // считываем объекты
  let text = document.querySelector('#new_text');
 
  // формируем данные
  let data = [{
    Datatime: text.value || 'ничего не написали',
  }];
 
  // отправка и анализ
  let url = "https://json.vsaprygin.ru/json/json.php";
  fetch(url, 
    {
      method:'POST', 
      headers: {'Content-Type': 'application/json;charset=utf-8'}, 
      body: JSON.stringify(data),
    }
  )
  .then((resp) => {
    if (resp.ok) {
      // очищаем поле
      new_text.value = "";
      result.innerHTML = 'данные переданы';
    } else {
      result.innerHTML = 'ERROR: ' + resp.status + ' ' + resp.statusText;
    }
    return resp.text();
  })
  .then((data) => {
    result.innerHTML += data;
  })

}
