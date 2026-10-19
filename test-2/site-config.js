/*
 * Integration contract for the CMS/admin panel.
 * The admin may generate this file, or provide `contentEndpoint` that returns:
 * { "specialist": { "imageUrl": "...png", "mobileImageUrl": "...png", "alt": "..." } }
 */
window.DENTAL_PAGE_CONFIG = {
  contentEndpoint: "",
  appointmentEndpoint: "",
  services: null,
  specialist: {
    imageUrl: "./assets/images/specialist-desktop.png",
    mobileImageUrl: "./assets/images/specialist-mobile.png",
    alt: "Специалист стоматологической клиники",
  },
};
