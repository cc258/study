<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
  </head>
  <body>
    <div class="news-view view">
      {% for item in list %}
        <div class="item">
          <a href="{{ item.url }}">{{ helper.relativeTime(item.time) }}-{{ item.title }}</a>
        </div>
      {% endfor %}
    </div>
  </body>
</html>