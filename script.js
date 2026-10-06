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

// Phone menu: the "Menu" button opens and closes the list of sections.
// (The button only appears on small screens — see style.css, MOBILE.)
const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-toggle");

if (nav && menuButton) {
  nav.classList.add("has-menu");

  const setOpen = (open) => {
    nav.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  };

  menuButton.addEventListener("click", () => {
    setOpen(!nav.classList.contains("open"));
  });

  // Close the menu after choosing a section
  nav.querySelectorAll("#nav-links a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  // Close the menu with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
