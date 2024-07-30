// هنا يمكن إضافة الأكواد الجافا سكريبتية للتفاعلات المختلفة

document.addEventListener("DOMContentLoaded", function() {
    // على سبيل المثال، إظهار رسالة عند إرسال النموذج
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("تم إرسال النموذج بنجاح!");
    });
});
