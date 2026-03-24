# Portfolio deploy to GitHub Pages

Этот проект можно опубликовать в репозитории `AlbertinhoDev/AlbertinhoDev.github.io` как персональный сайт GitHub Pages.

## Что уже настроено

- Добавлен workflow [`.github/workflows/deploy.yml`](/Users/albert_nastya/Downloads/albert-codecraft-main/.github/workflows/deploy.yml), который на каждом `push` в `main` собирает Vite-проект и публикует `dist` в GitHub Pages.
- В [`vite.config.ts`](/Users/albert_nastya/Downloads/albert-codecraft-main/vite.config.ts) явно указан `base: "/"`, потому что репозиторий `AlbertinhoDev.github.io` открывается с корня домена.

## Как загрузить проект в `AlbertinhoDev.github.io`

1. Создайте пустой репозиторий `AlbertinhoDev.github.io` в GitHub, если его ещё нет.
2. В корне проекта выполните:

```bash
git init -b main
git remote add origin https://github.com/AlbertinhoDev/AlbertinhoDev.github.io.git
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push -u origin main
```

3. В GitHub откройте `Settings -> Pages` и убедитесь, что источник публикации: `GitHub Actions`.
4. После завершения workflow сайт появится на `https://AlbertinhoDev.github.io/`.

## Если нужен свой домен

Когда у вас будет точное имя домена, создайте файл `public/CNAME` с одной строкой:

```txt
your-domain.com
```

И затем:

1. Закоммитьте этот файл и отправьте изменения в `main`.
2. В `Settings -> Pages -> Custom domain` укажите тот же домен.
3. У регистратора домена настройте DNS на GitHub Pages.
   Для поддомена обычно достаточно `CNAME -> AlbertinhoDev.github.io`.

После этого GitHub выпустит сертификат, и сайт будет открываться по вашему домену.
