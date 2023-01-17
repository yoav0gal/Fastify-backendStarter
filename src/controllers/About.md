<div dir="rtl">

# תיקיית controllers

## <u>מטרת התיקייה </u>

תיקייה זאת תכיל תתי-תיקיות כך שכל תת תיקייה תכיל את כל הלוגיה עבור controller מסויים.

---

### מבנה תיקיית controller

התיקייה תכיל את הקבצים הבאים :

במידה ולא שמרתם על מבנה זה תכינו תרוצים טובים , במידה והם לא יספיקו ה-cr **יכלול אלימות**.

<ul>
<li>
 <p>
 <code dir="ltr">[controllerName]Routes</code> -
בקובץ זה ניחצן אך ורק את הendpoints של ה API עבור אותו קונטרולר.

כל הendpoints שמוגדרות בקובץ זה יוספו באופן אוטומטי לאפליקציה באמצעות fastify-autoload לפי הקונבנציה הבאה: שם התיקייה/הנתיב שהוגדר בבקשה. לכן יש להקפיד על שמירת קונבנצית השם.

**טיפ נוסף**: שימרו על הקובץ הזה מינימלי ככל האפשר.

 </p>
</li>
דוגמה:

```ts
import { FastifyPluginAsync } from "fastify";
import { getAllMembers, getById } from "AlphaController/alphaServices";

const AlphaRoutes: FastifyPluginAsync = async (
  fastify,
  _options
): Promise<void> => {
  fastify.get("/all", getAllMembers);
  fastify.get("/all/:id", getById);
};

export default AlphaRoutes;
```

<li>
 <p>
 <code dir="ltr">[controllerName]Services</code> - קובץ זה יכיל את  הלוגיקה של כל ה-endpoints עבור אותו controller.
 </p>
</li>

דוגמה:

```ts
import alphaMembers from "AlphaData";
import { FastifyRequest, FastifyReply } from "fastify";

/** Return an Alpha member based on his id */
export async function getById(reqest: FastifyRequest, reply: FastifyReply) {
  // @ts-ignore
  const id: sting = reqest.params?.id;
  const member = alphaMembers.find((member) => member.id === id);
  reply.send(member);
}

/** Returns all Alpha members */
export async function getAllMembers(
  _reqest: FastifyRequest,
  reply: FastifyReply
) {
  reply.send(alphaMembers);
}
```

<li>
 <p>
 <code dir="ltr">[controllerName]Schemas</code> - קובץ זה יכול את כל הסכמות והטייפס של ה enpoints השונות עבור אותו controller.
 </p>
</li>
דוגמה:

```ts

```

</ul>

## **הוראות אילו נכתבו בדם!**

![רחמני במערכת יחסים](../../static/controller.jpg "רחמני במערכת יחסים")
**תזהרו מהטייפ הזה**

---

</div>
