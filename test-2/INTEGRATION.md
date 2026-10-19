# Подключение к админке

Внешние данные сайта задаются в `site-config.js`. Этот файл может генерироваться админкой
при публикации либо содержать адрес REST API.

## Фото специалиста

Локальная конфигурация:

```js
window.DENTAL_PAGE_CONFIG = {
  specialist: {
    imageUrl: "https://example.ru/uploads/specialist.png",
    mobileImageUrl: "https://example.ru/uploads/specialist-mobile.png",
    alt: "Врач-стоматолог",
  },
};
```

`mobileImageUrl` необязателен: если он отсутствует, используется `imageUrl`. Изображение
должно быть PNG с прозрачным фоном.

Для загрузки из API задайте `contentEndpoint`. Ожидаемый ответ:

```json
{
  "specialist": {
    "imageUrl": "https://example.ru/uploads/specialist.png",
    "mobileImageUrl": "https://example.ru/uploads/specialist-mobile.png",
    "alt": "Врач-стоматолог"
  }
}
```

В этом же ответе можно вернуть массив `services` в формате объектов из `script.js`.

## Отправка формы

Укажите `appointmentEndpoint`. Форма отправляет JSON методом `POST`:

```json
{
  "fullName": "Иван Иванов",
  "phone": "+79990000000",
  "consent": "on",
  "source": "https://example.ru/services"
}
```

Успешным считается любой HTTP-ответ со статусом `2xx`. Если endpoint не указан, форма
не имитирует успешную отправку, а сообщает, что требуется подключение API.
