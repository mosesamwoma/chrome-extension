function checkEmail() {
  // Gmail email selectors
  const subjectElem = document.querySelector("h2.hP");       // email subject
  const senderElem = document.querySelector("span.gD");      // sender name/email
  const emailBody = document.querySelector("div.a3s");       // email body

  if (!emailBody) return;

  const subject = subjectElem ? subjectElem.innerText.trim() : "";
  const sender = senderElem ? senderElem.innerText.trim() : "";
  const bodyText = emailBody.innerText || emailBody.textContent || "";

  // Include link texts
  const links = Array.from(emailBody.querySelectorAll("a"))
    .map(a => a.innerText)
    .join(" ");

  // Combine everything
  const fullText = (subject + " " + sender + " " + bodyText + " " + links)
    .replace(/\s+/g, " ")
    .trim();

  if (!fullText || fullText === lastEmailText) return;
  lastEmailText = fullText;

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: fullText })
  })
    .then(response => response.json())
    .then(data => {
      let banner = document.getElementById("spam-banner");
      if (!banner) {
        banner = document.createElement("div");
        banner.id = "spam-banner";
        banner.style.position = "fixed";
        banner.style.top = "10px";
        banner.style.right = "10px";
        banner.style.padding = "10px";
        banner.style.zIndex = 10000;
        banner.style.borderRadius = "5px";
        banner.style.fontWeight = "bold";
        banner.style.color = "white";
        document.body.appendChild(banner);
      }

      if (data.prediction === "spam") {
        banner.textContent = "🚨 SPAM EMAIL";
        banner.style.backgroundColor = "red";
      } else {
        banner.textContent = "✅ NOT SPAM";
        banner.style.backgroundColor = "green";
      }
    })
    .catch(err => console.error(err));
}

// Check every 2 seconds for new email
setInterval(checkEmail, 2000);
const API_URL = "https://spam-email-detection-model.onrender.com/docs#/default/predict_predict_post";
let lastEmailText = "";