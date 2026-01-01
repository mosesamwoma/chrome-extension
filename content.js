const API_URL = "https://spam-email-detection-model.onrender.com/docs#/default/predict_predict_post";
let lastEmailText = "";

function checkEmail() {
  const subjectElem = document.querySelector("h2.hP");
  const senderElem = document.querySelector("span.gD");
  const emailBody = document.querySelector("div.a3s");

  if (!emailBody) return;

  const subject = subjectElem ? subjectElem.innerText.trim() : "";
  const sender = senderElem ? senderElem.innerText.trim() : "";
  const bodyText = emailBody.innerText || emailBody.textContent || "";

  const links = Array.from(emailBody.querySelectorAll("a")).map(a => a.innerText).join(" ");
  const fullText = (subject + " " + sender + " " + bodyText + " " + links).replace(/\s+/g, " ").trim();

  if (!fullText || fullText === lastEmailText) return;
  lastEmailText = fullText;

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

    const spinner = document.createElement("img");
    spinner.src = chrome.runtime.getURL("assets/spinner.gif");
    spinner.style.width = "20px";
    spinner.style.marginLeft = "10px";
    spinner.id = "spam-spinner";
    banner.appendChild(spinner);

    document.body.appendChild(banner);
  }

  const spinnerElem = document.getElementById("spam-spinner");
  spinnerElem.style.display = "inline-block"; 
  banner.textContent = "Checking...";
  banner.appendChild(spinnerElem);

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: fullText })
  })
  .then(res => res.json())
  .then(data => {
    if (data.prediction === "spam") {
      banner.textContent = "🚨 SPAM EMAIL";
      banner.style.backgroundColor = "red";
    } else {
      banner.textContent = "✅ NOT SPAM";
      banner.style.backgroundColor = "green";
    }
    banner.appendChild(spinnerElem);
  })
  .catch(err => console.error(err))
  .finally(() => {
    spinnerElem.style.display = "none";
  });
}

setInterval(checkEmail, 2000);
