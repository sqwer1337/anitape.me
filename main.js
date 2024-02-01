function changeOpacity() {
  var caption1 = document.getElementById('carousel-caption-1');
  var caption2 = document.getElementById('carousel-caption-2');

  // Изменяем opacity для первой карусели
  if (caption1.style.opacity === '1' || caption1.style.opacity === '') {
    caption1.style.opacity = '0';
    caption2.style.opacity = '1';
  } else {
    caption1.style.opacity = '1';
    caption2.style.opacity = '0';
  }
}

// Запускаем функцию изменения opacity каждые 30 секунд
setInterval(changeOpacity, 30000);

