const API_URL = "https://spam-email-detection-model.onrender.com/docs#/default/predict_predict_post";
const checkBtn = document.getElementById("checkBtn");
const clearBtn = document.getElementById("clearBtn");
const emailText = document.getElementById("emailText");
const resultDiv = document.getElementById("result");
const spinner = document.getElementById("spinner");

function predictEmail(text) {
  // Example for testing without server
  const spamWords = ["win", "free", "prize", "money", "urgent"];
  let count = 0;
  spamWords.forEach(word => { if(text.toLowerCase().includes(word)) count++; });
  return { spam: count > 1 };
}

checkBtn.addEventListener("click", async () => {
  const text = emailText.value.trim();
  if (!text) {
    resultDiv.textContent = "Please paste an email.";
    resultDiv.style.color = "red";
    return;
  }

  spinner.style.display = "flex";
  resultDiv.textContent = "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await response.json();
    if (data.spam === true) {
      resultDiv.textContent = "🚨 SPAM EMAIL";
      resultDiv.className = "spam";
    } else {
      resultDiv.textContent = "✅ NOT SPAM";
      resultDiv.className = "not-spam";
    }
  } catch (error) {
    console.error(error);
    resultDiv.textContent = "Server error. Try again.";
    resultDiv.style.color = "red";
  } finally {
    spinner.style.display = "none";
  }
});

clearBtn.addEventListener("click", () => {
  emailText.value = "";
  resultDiv.textContent = "";
  resultDiv.className = "";
});
