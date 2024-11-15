<h1 style="color:blue">Практическая работа 4.6 (HW-04)</h1>
<h3>Задание:</h3>
<ol>
        <li>Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.</li>
        <li>Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать в клиенте и в API.</li>
        <li>Где отображать документацию API — решать вам.</li>
        <li>У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, а из категории — на любой рецепт этой категории.</li>
</ol>
<hr>
<h4>Установка библиотек:</h4>
<ul>
        <li>В консоли в директории "RecipesDishesApp\Backend" командой: pip install -r requirements.txt</li>
        <li>В консоли в директории "RecipesDishesApp\Frontend" командой: npm install</li>
</ul>
<h4>Запуск приложения:</h4>
<ul>
        <li>В консоли в директории "RecipesDishesApp\Backend" командой: python manage.py runserver</li>
        <li>В консоли в директории "RecipesDishesApp\Frontend" командой: npm start</li>
</ul>

<h4>Swagger и схема документации доступны по ссылкам после запуска сервера:</h4>
<ul>
        <li>http://127.0.0.1:8000/swagger-ui/</li>
        <li>http://127.0.0.1:8000/swagger/</li>
        <li>http://127.0.0.1:8000/openapi</li>
</ul>
