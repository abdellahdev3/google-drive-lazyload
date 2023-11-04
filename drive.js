// Get all Google Drive embeds on the page.
var googleDriveEmbeds = document.querySelectorAll('iframe[src^="https://drive.google.com/"]');

// Add the `loading="lazy"` attribute to each embed.
for (var i = 0; i < googleDriveEmbeds.length; i++) {
  googleDriveEmbeds[i].setAttribute('loading', 'lazy');
}
