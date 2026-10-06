// Scripts for index.html — Asmaa Farouq's personal site.
// The site works without this file; it only handles small extras.

// Hide the profile photo if images/photo.jpg is missing,
// so the page shows an empty ink circle instead of a broken-image icon.
const photo = document.querySelector(".photo img");

if (photo) {
  const removePhoto = () => photo.remove();

  if (photo.complete && photo.naturalWidth === 0) {
    // The image already failed to load before this script ran
    removePhoto();
  } else {
    photo.addEventListener("error", removePhoto);
  }
}

// Phone menu: the menu itself works with CSS only (see style.css, MOBILE).
// This just closes it after you pick a section or press Escape.
const menuCheck = document.getElementById("menu-check");

if (menuCheck) {
  document.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => { menuCheck.checked = false; });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") menuCheck.checked = false;
  });
}

// "copy" button next to the email: copies the address and briefly says "copied!".
document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      button.textContent = "copied!";
      button.classList.add("copied");
    } catch {
      // Clipboard not available (e.g. opened as a local file in some browsers)
      button.textContent = "couldn't copy";
    }
    setTimeout(() => {
      button.textContent = "copy";
      button.classList.remove("copied");
    }, 2000);
  });
});
