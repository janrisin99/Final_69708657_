
fetch("menu.html")
  .then(function(response) {
    if (!response.ok) {
      throw new Error("โหลดเมนูไม่สำเร็จ");
    }
    return response.text();
  })
  .then(function(data) {
    document.getElementById("menu").innerHTML = data;
  })
  .catch(function() {
    document.getElementById("menu").textContent = "กรุณาเปิดเว็บด้วย Live Server เพื่อโหลดเมนู";
  });


var registerForm = document.getElementById("registerForm");

if (registerForm != null) {
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("fullName").value.trim();
    var course = document.getElementById("course").value;

    if (fullName == "") {
      document.getElementById("message").textContent = "กรุณากรอกชื่อ";
      document.getElementById("fullName").focus();
      return;
    }


    document.getElementById("message").textContent =
      "คุณ " + fullName + " เลือก " + course + " เรียบร้อยแล้ว (แบบฟอร์มตัวอย่าง ยังไม่ได้บันทึกข้อมูล)";
  });
}
