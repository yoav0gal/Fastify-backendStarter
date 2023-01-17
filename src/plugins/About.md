<div dir="rtl">

# תיקיית הפלאגינס

## <u>מטרת התיקייה </u>

בתיקייה זאת נמצאים כול הפלאגינים השונים שהאפליקציה שלנו משתמשת בהם.

### חשוב לדעת

כל הקבצים בתיקייה יטענו כפלגינים ישר באפליקצה הכללית אתם. כל מה שאתם כמפתחים צריכים לעשות זה לפתוח פה בתיקייה קובץ המיחצן באופן דיפולטי את פונקצית הפלאגין.

לדוגמה:

```js
export default fastifyPlugin(async function (fastify, _options) {
  fastify.register(fastifyCookie, {
    secret: SECRET_KEY,
  });
});
```

### הפלאגינים השונים

<ul>
<li>
 <p>
  <code>cookies</code> - פלאגין זה מיחצן API נוח מאוד לעבודה עם cookies בfastify.
 </p>
</li>
<li>
 <p>
 <code>jwt</code> - פלאגין זה מיחצן API נוח מאוד לעבודה עם JWT בfastify.

בנוסף, מוגדר hook עבור כל בקשה את לוגיקת הוריפיקציה של ה jwt במערכת הזו.

 </p>
</li>

</ul>

---

![שקע ותקע](../../static/sheka-teka.jpg "שקע ותקע")
**Yoav and Rachman be like**

---

</div>
