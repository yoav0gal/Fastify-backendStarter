<div dir="rtl">

# תקיית utils

## <u>מטרת התיקייה </u>

בתקייה זאת ישמרו פונקציות עזר כלליות שיהיו שימושיות במספר מקומות שונים באפליקה.

**אין לשמור בתיקייה זאת פונקציות שהן ספציפיות עבור endpoint מסויים!**

לדוגמה:

פונקציית CR שימושית בכל חלק בקוד כי חלקים רבים בקוד יצתרכו CR.

```ts
const SHILSHUL_ERROR = "Your code is shilshul"

/** This function returns true if the code passes the code review */
export default codeReview(developerName: string, code: string) {

    // Sivans code is alway bad JK she is the best!
    if (developerName === "sivan") throw new error (SHILSHUL_ERROR);

    // looks for bad code
    if (code.includes("shilshul")) throw new error (SHILSHUL_ERROR);

    return true
}
```

---

!["כלבים חמודים"](../../static/bob.jpg "כלבים חמודים")
**תעזור אחד לשני**

---

</div>
