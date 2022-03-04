## Установка и настройка 

Стандартная, как для любого другого проекта на Create React App:
### `npm install`
### `npm run start`
### `npm run test`

## Структура проекта

### Компоненты React
Каждый компонент лежит в отдельной папки, вида **components/%ComponentName%**\
Объявление компонента в файле **index.tsx** внутри\
Стили подключаются в виде SAAS модулей с именем **index.module.scss**\
Общие типы и интерфейсы хранятся в отдельном файле **types.ts**

### Хранилище Redux
Корневой reducer находится в **store/root.ts**

Каждый отдельный reducer хранится в папке вида **store/%reducerName%**\
Начальный стейт хранится в **defaultState.ts** \
Экшены и интерфейс для экшенов, как и прочие типы лежат в **types.ts**\
Сами job-ы для dispatch пока хранятся в **index.ts**
