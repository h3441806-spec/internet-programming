function showCode(lang) {
  const box = document.getElementById("codeDisplay");
  if (lang === "html") {
    box.textContent = "<h1>مرحباً بكم في موقعي الأول</h1>";
  } else if (lang === "css") {
    box.textContent = "h1 {\n  color: #0284c7;\n  font-size: 32px;\n}";
  } else if (lang === "js") {
    box.textContent = 'alert("أهلاً بكِ في عالم برمجة الإنترنت!");';
  }
}

const quizForm = document.getElementById("quizForm");
const quizResult = document.getElementById("quizResult");

quizForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (!q1 || !q2) {
    quizResult.textContent = "يرجى الإجابة على جميع الأسئلة أولاً.";
    quizResult.style.color = "#dc2626";
    return;
  }

  if (q1.value === "CSS") score++;
  if (q2.value === "JavaScript") score++;

  quizResult.textContent = `نتيجتكِ: ${score} من 2`;
  quizResult.style.color = "#0369a1";
});
