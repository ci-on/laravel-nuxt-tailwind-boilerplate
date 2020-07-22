# Laravel 7.x + Nuxt + Tailwind + Sanctum httpOnly cookie Auth workflow

 A boilerplate demo app containing Laravel 7.x + Nuxt + Tailwind + Sanctum with a working auth app. Also, contains: telescope, ide-helper, dump-server, doctrine/dbal, ready for netlify(contains a netlify.toml file).
 


### Steps for setting up the boilerplate

1. Clone boilerplate and setup laravel

    ``` sh
    git clone https://github.com/ci-on/laravel-nuxt-tailwind-boilerplate.git project-name
    cd project-name

    cp .env.example .env
    php artisan key:generate
    php artisan install
    php artisan migrate
    php artisan serve # For local sanctum usage, we need localhost:8000
    ```

2. Set up front-end

    ``` sh
    cd frontend
    cp .env.example .env
    yarn && yarn run build
    yarn run dev # localhost:3000
   
   # build for production:
   yarn build && yarn export
    ```
