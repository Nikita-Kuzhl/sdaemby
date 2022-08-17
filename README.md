# Проект для Hawking Sсhool - SDAEM.BY

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)

## Запуск через консоль(без Docker)

### CLIENT

```console
> yarn install
> yarn start
```

### API

```console
> cd api
> npm i
> node index.js
```

## Запуск через Docker compose

```console
> docker compose up
```

## Описание

### Тесты находятся в ветки Tests

### Дерево проекта

```
src
├── app
│ ├── features - Слайсы redux
│ ├── hooks
│ ├── service - Запросы к API
│ ├── store
│ └── types
├── assets
│ ├── fonts
│ └── images
├── components
│ ├── Breadcrumbs - Хлебные крошки
│ ├── Card - Карточка для каталога в виде плиток
│ ├── CheckBox - Чекбокс
│ ├── CustomSwitch - Свитч
│ ├── Footer
│ ├── Header
│ ├── ItemList - Карточка в каталоге в виде списка
│ ├── ModalContact - Модальное окно контактов на карточках в каталоге
│ ├── OptionMenu - Меню для фильтрации карточек
│ ├── Pagination
│ ├── SelectStyle - Стили для React-select
│ ├── Spinner
│ └── icons
├── constant - Переменные
├── layouts - Шаблоны для страниц
├── pages
│ ├── Authorization
│ ├── Contact
│ ├── Error
│ ├── Main
│ ├── News - Страница отдельной новости
│ ├── NewsList - Страница со списком новостей
│ └── Registration
└── styles
```
