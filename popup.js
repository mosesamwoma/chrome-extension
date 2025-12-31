const API_URL = "https://spam-email-detection-model.onrender.com/docs#/default/predict_predict_post";

document.getElementById("checkBtn").addEventListener("click", async () => {
  const text = document.getElementById("emailText").value.trim();
  const resultDiv = document.getElementById("result");

  if (!text) {
    resultDiv.textContent = "Please paste an email.";
    resultDiv.style.color = "red";
    return;
  }

  resultDiv.textContent = "Checking...";
  resultDiv.style.color = "black";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    const data = await response.json();

    if (data.spam === true) {
      resultDiv.textContent = "🚨 SPAM EMAIL";
      resultDiv.style.color = "red";
    } else {
      resultDiv.textContent = "✅ NOT SPAM";
      resultDiv.style.color = "green";
    }
  } catch (error) {
    console.error(error);
    resultDiv.textContent = "Server error. Try again.";
    resultDiv.style.color = "red";
  }
});
