# Boilerplate for Laravel, Nuxt & Tailwind CSS

[![StyleCI](https://github.styleci.io/repos/281696122/shield?branch=master)](https://github.styleci.io/repos/281696122)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ci-on/laravel-nuxt-tailwind-boilerplate/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/ci-on/laravel-nuxt-tailwind-boilerplate/?branch=master)
![Prettier Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![License](https://img.shields.io/github/license/ci-on/laravel-nuxt-tailwind-boilerplate.svg?style=flat-square)](https://github.com/ci-on/laravel-nuxt-tailwind-boilerplate/blob/master/LICENSE.md)
<!-- [
[![Build Status](wip)](ghactions)
 -->

This is a boilerplate template for a common and slightly opinionated setup of your Laravel, Nuxt & Tailwind CSS project that includes Sanctum authentication.

## Installation

Please clone this repository and then follow these install steps:

```bash
git clone https://github.com/ci-on/laravel-nuxt-tailwind-boilerplate.git project-name
cd project-name

composer install
cp .env.example .env
php artisan key:generate
php artisan install
php artisan migrate

cd frontend
cp .env.example .env
yarn install
```

Please note, you may need to adjust your `.env`-variables.

## Local Setup

It's fairly easy to set up a local server with this project. It is important to note, that due to Sanctum's `httpOnly` cookie authentication, we need to use Laravel's & Nuxt's built-in webserver, so that we can serve the API and the frontend on the same domain.

```bash
php artisan serve #localhost:8000

cd frontend
yarn && yarn build
yarn dev #localhost:3000
```

You can now visit your frontend by visiting localhost:3000 and the API by pinging localhost:8000.

### Production Build

It is very easy to deploy this project to Netlify. We include the [netlify.toml](netlify.toml) which allows you to simply connect your project to Netlify.

For those who are interested in the production build script:

```bash
# this will generate your static assets & pages and it should be your command to compile this project on services like Netlify or Vercel
yarn build && yarn export
```

## Features & Tooling

Part of the reason this is a somewhat opinionated package is because we added some tooling we use for most of our projects to help us kickstart the initial development process. Below are the key details outlined:

### Backend

- Laravel 7.*
- Laravel Sanctum Authentication

### Frontend

- Nuxt 2.13.*
- Tailwind 1.5.*
- Eslint & Prettier setup

### Tooling

- Laravel Telescope
- Laravel's IDE Helper
- VS Code suggested plugins
- Netlify integration
- StyleCI integration
- Dependabot integration

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email chris@cion.agency instead of using the issue tracker.

## Credits

- [Mantas Kantautas](https://github.com/MKantautas)
- [Chris Breuer](https://github.com/Chris1904)
- [Folks at CION](https://github.com/ci-on)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

Made with ❤️ by CION Agency
