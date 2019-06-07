# whitepaper-bem

[![license](https://badgen.net/github/license/whitepapertools/whitepaper-bem)](https://github.com/whitepapertools/whitepaper-bem/blob/master/LICENSE)
[![npm version](https://badgen.net/npm/v/whitepaper-bem)](https://www.npmjs.com/package/whitepaper-bem)
[![release](https://badgen.net/github/release/whitepapertools/whitepaper-bem)](https://github.com/whitepapertools/whitepaper-bem/releases/latest)


## Установка

### CDN
Самый просто способ установить дизайн-систему, нужно подключить файл на странице. Тогда система будет работать с любым технологическим стеком, соблюдающим наименование классов.

```html
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="https://whitepaper.tools/cdn/whitepaper-1.0.0.min.css">
    </head>
    <body></body>
</html>
```

### NPM
Можно установить **whitepaper**, как зависимость в проекте

```html
npm install whitepaper-bem
```

Доступно как использование БЭМ-компонентов, так и подключение всего собранного css.

### Сборка

Для сборки whitepaper.css файла надо выполнить команду `npm run build`. Собранные файлы будут доступны в папке `dist/`.
