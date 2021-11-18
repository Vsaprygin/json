<!DOCTYPE html>
<html>
<head>
  <title>
    Получаем данные с сервера
  </title>
  <meta charset="UTF-8">
  <style type="text/css">
table {
   border: 2px solid grey;
}
th {
   border: 1px solid grey;
}
td {
   border: 1px solid grey;
}
</style>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
</head>
<body style="text-align:center;" id="body">
<h1>Вывод данных</h1>
  <!-- делаем форму кнопкой удалить -->

<form action="https://json.vsaprygin.ru/view/delete.php">
<input type="submit" name="deleteTable" value="Удалить данные" />
</form>
<!-- сюда будем выводить -->
    <div id="content"></div>  
      
<script type="text/javascript">
    $.ajax({
        url: 'https://json.vsaprygin.ru/view/content.php',
        success: function(data) {
            $('#content').html(data);
        }
    });
function mode() {
    $.ajax({
        url: 'https://json.vsaprygin.ru/view/content.php',
        success: function(data) {
            $('#content').html(data);
        }
    });
};

setInterval(mode, 10000);
</script>
</body>
</html>