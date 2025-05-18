document.addEventListener('DOMContentLoaded', function() {
      const btnWindows = document.getElementById('btn-windows');
      const btnAndroid = document.getElementById('btn-android');
      const reqWindows = document.querySelector('.requirements-windows');
      const reqAndroid = document.querySelector('.requirements-android');
      const imgWindows = document.querySelector('.image-windows');
      const imgAndroid = document.querySelector('.image-android');
      const downloadLink = document.getElementById('download-link');
      
      // Ссылки для скачивания
      const windowsDownloadLink = "#windows-download";
      const androidDownloadLink = "#android-download";
      
      // Функция для определения мобильного устройства
      function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
      }
      
      // Инициализация в зависимости от устройства
      if (isMobileDevice()) {
        // Показываем Android контент для мобильных
        btnAndroid.classList.add('active');
        reqWindows.style.display = 'none';
        reqAndroid.style.display = 'block';
        imgWindows.style.display = 'none';
        imgAndroid.style.display = 'block';
        downloadLink.href = androidDownloadLink;
        downloadLink.textContent = '⬇ Скачать для Android';
      } else {
        // Показываем Windows контент для ПК
        btnWindows.classList.add('active');
        reqWindows.style.display = 'block';
        reqAndroid.style.display = 'none';
        imgWindows.style.display = 'block';
        imgAndroid.style.display = 'none';
        downloadLink.href = windowsDownloadLink;
        downloadLink.textContent = '⬇ Скачать для Windows';
      }
      
      // Обработчики кнопок
      btnWindows.addEventListener('click', function() {
        btnWindows.classList.add('active');
        btnAndroid.classList.remove('active');
        reqWindows.style.display = 'block';
        reqAndroid.style.display = 'none';
        imgWindows.style.display = 'block';
        imgAndroid.style.display = 'none';
        downloadLink.href = windowsDownloadLink;
        downloadLink.textContent = '⬇ Скачать для Windows';
      });
      
      btnAndroid.addEventListener('click', function() {
        btnAndroid.classList.add('active');
        btnWindows.classList.remove('active');
        reqAndroid.style.display = 'block';
        reqWindows.style.display = 'none';
        imgAndroid.style.display = 'block';
        imgWindows.style.display = 'none';
        downloadLink.href = androidDownloadLink;
        downloadLink.textContent = '⬇ Скачать для Android';
      });
    });