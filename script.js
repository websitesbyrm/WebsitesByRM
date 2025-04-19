// Greeting based on time
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();

if (hour < 12) greeting.textContent = "Good morning!";
else if (hour < 18) greeting.textContent = "Good afternoon!";
else greeting.textContent = "Good evening!";

// Read more toggles
function toggleReadMore(id, btn) {
  const moreText = document.getElementById(id);
  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
}

// Contact form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('formMessage');

  if (!name || !email || !message) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
    return false;
  }

  msg.textContent = "Message sent! (Just a simulation for now)";
  msg.style.color = "green";
  return false;
}
