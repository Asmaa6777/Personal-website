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
