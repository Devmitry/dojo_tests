const pageConfig = window.DENTAL_PAGE_CONFIG || {};

const services = [
  {
    title: "Элайнеры",
    image: "./assets/images/aligners.jpg",
    shape: "mixed",
    imageFit: "fill",
    imageWidth: "673.37px",
    imageHeight: "449.03px",
    imageLeft: "-107.71px",
    imageTop: "-11px",
    titleLeft: "37px",
    titleTop: "263px",
    titleWidth: "176px",
    titleHeight: "39px",
    overlayRgb: "27 35 56",
    overlayOpacity: "100%",
    overlayStart: "48.4596%",
    mobileImageFit: "fill",
    mobileImageWidth: "270.13px",
    mobileImageHeight: "180.1px",
    mobileImageLeft: "-43.2px",
    mobileImageTop: "-4.41px",
    mobileShape: 'url("#service-shape-mobile")',
  },
  {
    title: "Имплантация",
    image: "./assets/images/implantation.webp",
    shape: "radius-20",
    imageFit: "fill",
    imageWidth: "434.40384px",
    imageHeight: "260.64215px",
    imageLeft: "-33.04988px",
    imageTop: "-5.99462px",
    titleWidth: "236px",
    titleHeight: "39px",
    overlayOpacity: "100%",
    overlayStart: "42.5%",
    mobileImageFit: "fill",
    mobileImageWidth: "174.22px",
    mobileImageHeight: "104.49px",
    mobileImageLeft: "-13.25px",
    mobileImageTop: "-2.4px",
  },
  {
    title: "Брекеты",
    image: "./assets/images/braces.jpg",
    shape: "radius-30",
    imageFit: "fill",
    imageWidth: "552.06715px",
    imageHeight: "827.99965px",
    imageLeft: "-87.58234px",
    imageTop: "-236.97024px",
    titleWidth: "149px",
    titleHeight: "39px",
    overlayOpacity: "100%",
    overlayStart: "42.5%",
    mobileImageFit: "fill",
    mobileImageWidth: "221.4px",
    mobileImageHeight: "332.06px",
    mobileImageLeft: "-35.13px",
    mobileImageTop: "-94.99px",
  },
  {
    title: "Терапия",
    image: "./assets/images/therapy.webp",
    shape: "radius-30",
    imageFit: "fill",
    imageWidth: "2048px",
    imageHeight: "1240px",
    imageLeft: "0px",
    imageTop: "0px",
    imageTransform:
      "translate(-673.15968px, -217.87738px) scale(0.57666432) rotate(8.34276deg)",
    imageTransformOrigin: "top left",
    overlayStart: "42.5%",
    mobileImageFit: "fill",
    mobileImageWidth: "821.33px",
    mobileImageHeight: "497.29px",
    mobileImageTransform:
      "translate(-270px, -87.38px) scale(0.57666432) rotate(8.34276deg)",
  },
  {
    title: "Гигиена полости рта",
    image: "./assets/images/hygiene.webp",
    shape: "radius-30",
    imageFit: "cover",
    imagePosition: "52% 50%",
    imageTransform: "scale(1.17)",
    imageTransformOrigin: "center",
    titleTop: "225px",
    titleWidth: "208px",
    actionsTop: "341px",
    decoration: {
      image: "./assets/images/water.webp",
      style:
        "width:168.22px;height:53.07px;left:0;top:82px;transform:rotate(87.38deg);transform-origin:top left;opacity:.6",
    },
  },
  {
    title: "Хирургия",
    image: "./assets/images/surgery.webp",
    shape: "radius-20",
    imageFit: "contain",
    imagePosition: "50% 50%",
    imageTransform: "scale(1.17)",
    imageTransformOrigin: "center",
  },
  {
    title: "Гнатология",
    image: "./assets/images/gnathology.jpg",
    shape: "radius-20",
    imageFit: "cover",
    imagePosition: "38% 50%",
    imageTransform: "scale(1.17)",
    imageTransformOrigin: "center",
    glow: true,
  },
  {
    title: "Протезирование",
    image: "./assets/images/prosthetics.webp",
    shape: "radius-30",
    imageFit: "contain",
    imagePosition: "50% 50%",
    imageTransform: "scale(1.17)",
    imageTransformOrigin: "center",
    actionsTop: "341px",
  },
  {
    title: "Эстетическая стоматология",
    image: "./assets/images/aesthetic.jpg",
    shape: "radius-20",
    imageFit: "cover",
    imagePosition: "50% 50%",
    imageTransform: "scale(1.17)",
    imageTransformOrigin: "center",
    titleTop: "225px",
    titleWidth: "236px",
    actionsTop: "341px",
  },
];

const serviceShapes = {
  "radius-20": 'url("#service-shape-20")',
  "radius-30": 'url("#service-shape-30")',
  mixed: 'url("#service-shape-mixed")',
};

const servicesTrack = document.querySelector("#services-track");
const servicesViewport = document.querySelector(".services__viewport");
const consultationSection = document.querySelector(".consultation");
const consultationBackground = document.querySelector(".consultation__background");
const consultationArt = document.querySelector(".consultation__art");
const consultationBackgroundPaths = document.querySelectorAll(".consultation-background-shape");
const consultationClipPaths = document.querySelectorAll(".consultation-clip-shape");
const consultationGradient = document.querySelector("#form-gradient");
const consultationPhotoClip = document.querySelector(".consultation-photo-clip");
const consultationPhotoOverflow = document.querySelector(".consultation-photo-overflow");
const specialistImage = document.querySelector(".consultation__specialist--mobile");
const specialistPhoto = document.querySelector(".consultation__specialist-photo");
const appointmentForm = document.querySelector("#appointment-form");
const formStatus = document.querySelector(".appointment-form__status");

function createArrowIcon() {
  return `
    <img src="./assets/icons/service-arrow.svg" alt="" aria-hidden="true" />
  `;
}

function createServiceCard(service, index = 0) {
  const article = document.createElement("article");
  article.className = "service-card";

  const stage = document.createElement("div");
  stage.className = "service-card__stage";

  const variables = {
    "--service-clip": serviceShapes[service.shape] || serviceShapes["radius-20"],
    "--image-fit": service.imageFit || "cover",
    "--image-position": service.imagePosition || "50% 50%",
    "--image-padding": service.imagePadding || "0px",
    "--image-width": service.imageWidth || "100%",
    "--image-height": service.imageHeight || "100%",
    "--image-left": service.imageLeft || "0px",
    "--image-top": service.imageTop || "0px",
    "--image-transform": service.imageTransform || "none",
    "--image-transform-origin": service.imageTransformOrigin || "top left",
    "--title-left": service.titleLeft || "32px",
    "--title-top": service.titleTop || "265px",
    "--title-width": service.titleWidth || "300px",
    "--title-height": service.titleHeight || "auto",
    "--actions-top": service.actionsTop || "342px",
    "--overlay-rgb": service.overlayRgb || "23 23 23",
    "--overlay-opacity": service.overlayOpacity || "82%",
    "--overlay-start": service.overlayStart || "48%",
    "--mobile-image-fit": service.mobileImageFit || "cover",
    "--mobile-image-position": service.mobileImagePosition || "50% 50%",
    "--mobile-image-width": service.mobileImageWidth || "100%",
    "--mobile-image-height": service.mobileImageHeight || "100%",
    "--mobile-image-left": service.mobileImageLeft || "0px",
    "--mobile-image-top": service.mobileImageTop || "0px",
    "--mobile-image-transform": service.mobileImageTransform || "none",
    "--mobile-service-clip":
      service.mobileShape || 'url("#service-shape-mobile-regular")',
  };

  Object.entries(variables).forEach(([property, value]) => {
    article.style.setProperty(property, value);
  });

  const surface = document.createElement("div");
  surface.className = "service-card__surface";

  const image = document.createElement("img");
  image.className = "service-card__image";
  image.src = service.image;
  image.alt = "";
  image.loading = index < 3 ? "eager" : "lazy";
  if (index === 0) image.fetchPriority = "high";
  image.decoding = "async";
  surface.append(image);

  if (service.decoration) {
    const decoration = document.createElement("img");
    decoration.className = "service-card__decoration";
    decoration.src = service.decoration.image;
    decoration.alt = "";
    decoration.style.cssText = service.decoration.style;
    surface.append(decoration);
  }

  if (service.glow) {
    const glow = document.createElement("span");
    glow.className = "service-card__decoration service-card__pulse";
    glow.setAttribute("aria-hidden", "true");
    surface.append(glow);
  }

  const shade = document.createElement("span");
  shade.className = "service-card__shade";
  shade.setAttribute("aria-hidden", "true");

  const title = document.createElement("h2");
  title.className = "service-card__title";
  title.textContent = service.title;
  surface.append(shade, title);

  const actions = document.createElement("div");
  actions.className = "service-card__actions";

  const consultationLink = document.createElement("a");
  consultationLink.className = "service-card__consultation";
  consultationLink.href = "#consultation-title";
  consultationLink.textContent = "Консультация";
  consultationLink.draggable = false;

  const arrowLink = document.createElement("a");
  arrowLink.className = "service-card__arrow";
  arrowLink.href = "#consultation-title";
  arrowLink.draggable = false;
  arrowLink.setAttribute("aria-label", `Записаться на консультацию: ${service.title}`);
  arrowLink.innerHTML = createArrowIcon();

  actions.append(consultationLink, arrowLink);
  stage.append(surface, actions);
  article.append(stage);

  return article;
}

function updateServiceCardScale(card, width = card.getBoundingClientRect().width) {
  card.style.setProperty("--card-scale", Math.min(1, width / 384));
}

const serviceCardResizeObserver =
  "ResizeObserver" in window
    ? new ResizeObserver((entries) => {
        entries.forEach((entry) => updateServiceCardScale(entry.target, entry.contentRect.width));
      })
    : null;

function renderServices(items) {
  if (!servicesTrack) return;
  serviceCardResizeObserver?.disconnect();

  const cards = items.map(createServiceCard);
  servicesTrack.replaceChildren(...cards);
  cards.forEach((card) => {
    updateServiceCardScale(card);
    serviceCardResizeObserver?.observe(card);
  });
}

renderServices(services);

servicesTrack?.addEventListener("click", (event) => {
  const consultationControl = event.target.closest(
    ".service-card__consultation, .service-card__arrow",
  );
  if (!consultationControl) return;

  event.preventDefault();
  consultationSection?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

const fallbackSpecialist = {
  imageUrl: "./assets/images/specialist-desktop.png",
  mobileImageUrl: "./assets/images/specialist-mobile.png",
  alt: "Специалист стоматологической клиники",
};

function normalizeSpecialist(data = {}) {
  const configured = data.specialist || data;
  const imageUrl = configured.imageUrl || configured.specialistImage || fallbackSpecialist.imageUrl;

  return {
    imageUrl,
    mobileImageUrl:
      configured.mobileImageUrl || configured.mobileSpecialistImage || imageUrl,
    alt: configured.alt || configured.specialistAlt || fallbackSpecialist.alt,
  };
}

async function loadPageContent() {
  const localContent = {
    specialist: normalizeSpecialist(pageConfig.specialist),
    services: Array.isArray(pageConfig.services) ? pageConfig.services : null,
  };
  if (!pageConfig.contentEndpoint) return localContent;

  try {
    const response = await fetch(pageConfig.contentEndpoint, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`Content request failed: ${response.status}`);
    const remoteContent = await response.json();
    return { ...localContent, ...remoteContent, specialist: normalizeSpecialist(remoteContent) };
  } catch (error) {
    console.warn("Не удалось загрузить данные формы из админки, используется резервная конфигурация.", error);
    return localContent;
  }
}

let currentSpecialistData = null;

function renderConsultation(data) {
  if (!data?.imageUrl) return;
  currentSpecialistData = data;

  if (usesStackedConsultationLayout()) {
    specialistPhoto?.removeAttribute("src");
    specialistImage?.setAttribute("href", data.mobileImageUrl);
  } else {
    specialistImage?.removeAttribute("href");
    if (specialistPhoto) specialistPhoto.src = data.imageUrl;
  }
  consultationArt?.setAttribute("aria-label", data.alt);
}

function createMobileConsultationShape(width, height) {
  const sx = width / 350;
  const sy = height / 789;
  const x = (value) => Number((value * sx).toFixed(4));
  const y = (value) => Number((value * sy).toFixed(4));

  return [
    `M${x(8.77782)} ${y(59.5548)}`,
    `L${x(59.4936)} ${y(8.79583)}`,
    `C${x(65.1204)} ${y(3.16422e-6)} ${x(72.7549)} ${y(3.18022e-6)} ${x(80.7158)} ${y(3.5282e-6)}`,
    `L${x(335)} ${y(1.46433e-5)}`,
    `C${x(343.284)} ${y(1.50054e-5)} ${x(350)} ${y(6.71573)} ${x(350)} ${y(15)}`,
    `L${x(350)} ${y(669.901)}`,
    `C${x(350)} ${y(677.853)} ${x(346.843)} ${y(685.48)} ${x(341.222)} ${y(691.105)}`,
    `L${x(290.506)} ${y(741.864)}`,
    `C${x(284.88)} ${y(747.496)} ${x(277.245)} ${y(750.66)} ${x(269.284)} ${y(750.66)}`,
    `L${x(174.094)} ${y(750.66)}`,
    `C${x(166.137)} ${y(750.66)} ${x(158.507)} ${y(753.821)} ${x(152.881)} ${y(759.447)}`,
    `L${x(129.185)} ${y(783.142)}`,
    `C${x(125.435)} ${y(786.893)} ${x(120.347)} ${y(789)} ${x(115.043)} ${y(789)}`,
    `L${x(15)} ${y(789)}`,
    `C${x(6.71573)} ${y(789)} 0 ${y(782.284)} 0 ${y(774)}`,
    `L0 ${y(80.7589)}`,
    `C0 ${y(72.8069)} ${x(3.15725)} ${y(65.1801)} ${x(8.77782)} ${y(59.5548)}Z`,
  ].join(" ");
}

function usesStackedConsultationLayout() {
  return window.matchMedia("(max-width: 599px)").matches;
}

function createConsultationShape(width, height) {
  if (usesStackedConsultationLayout()) {
    return createMobileConsultationShape(width, height);
  }

  const scale = Math.min(width / 1199, height / 323);
  const left = (value) => Number((value * scale).toFixed(4));
  const right = (value) => Number((width - (1199 - value) * scale).toFixed(4));
  const top = (value) => Number((value * scale).toFixed(4));
  const bottom = (value) => Number((height - (323 - value) * scale).toFixed(4));

  return [
    `M${right(1145.3)} ${top(14.6296)}`,
    `L${right(1184.34)} ${top(53.6346)}`,
    `C${right(1193.73)} ${top(63.0127)} ${right(1199)} ${top(75.7368)} ${right(1199)} ${top(89.005)}`,
    `V${bottom(293)}`,
    `C${right(1199)} ${bottom(309.569)} ${right(1185.57)} ${bottom(323)} ${right(1169)} ${bottom(323)}`,
    `H${left(127.378)}`,
    `C${left(114.125)} ${bottom(323)} ${left(101.413)} ${bottom(317.738)} ${left(92.0378)} ${bottom(308.37)}`,
    `L${left(52.9996)} ${bottom(269.365)}`,
    `C${left(43.6136)} ${bottom(259.987)} ${left(38.34)} ${bottom(247.263)} ${left(38.34)} ${bottom(233.995)}`,
    `V${bottom(182.378)}`,
    `C${left(38.34)} ${bottom(169.117)} ${left(33.0721)} ${bottom(156.4)} ${left(23.6953)} ${bottom(147.023)}`,
    `L${left(14.6447)} ${bottom(137.972)}`,
    `C${left(5.26782)} ${bottom(128.595)} 0 ${bottom(115.878)} 0 ${bottom(102.617)}`,
    `V${top(30)}`,
    `C0 ${top(13.4315)} ${left(13.4315)} 0 ${left(30)} 0`,
    `H${right(1109.96)}`,
    `C${right(1123.22)} 0 ${right(1135.93)} ${top(5.26202)} ${right(1145.3)} ${top(14.6296)}Z`,
  ].join(" ");
}

function createConsultationClipShape(width, height) {
  if (usesStackedConsultationLayout()) {
    return createMobileConsultationShape(width, height);
  }

  return createConsultationShape(width, height);
}

function updateSpecialistImage(width, height) {
  if (!usesStackedConsultationLayout()) return;
  if (!specialistImage) return;

  const imageWidth = width * (435.35 / 350);
  const imageHeight = height * (652.97 / 789);
  const imageX = width * (-34.73 / 350);
  const imageY = height * (482.82 / 789);

  specialistImage.setAttribute("x", imageX.toFixed(2));
  specialistImage.setAttribute("y", imageY.toFixed(2));
  specialistImage.setAttribute("width", imageWidth.toFixed(2));
  specialistImage.setAttribute("height", imageHeight.toFixed(2));
}

function updateConsultationShape(width, height) {
  if (!consultationBackground || !consultationArt || !consultationBackgroundPaths.length) return;
  const stacked = usesStackedConsultationLayout();
  consultationSection?.style.setProperty("--consultation-scale", String(width / 350));
  const shapeHeight = stacked
    ? height
    : Math.max(1, consultationBackground.getBoundingClientRect().height);
  consultationBackground.setAttribute("viewBox", `0 0 ${width} ${shapeHeight}`);
  consultationArt.setAttribute("viewBox", `0 0 ${width} ${height}`);
  const path = createConsultationShape(width, shapeHeight);
  const clipPath = createConsultationClipShape(width, height);
  consultationBackgroundPaths.forEach((shape) => shape.setAttribute("d", path));
  consultationClipPaths.forEach((shape) => shape.setAttribute("d", clipPath));
  if (!stacked) {
    consultationPhotoClip?.setAttribute("d", path);
    consultationPhotoOverflow?.setAttribute("width", width.toFixed(2));
  }
  updateSpecialistImage(width, height);

  if (consultationGradient) {
    if (stacked) {
      const sx = width / 350;
      const sy = shapeHeight / 789;
      consultationGradient.setAttribute(
        "gradientTransform",
        `matrix(${278.834 * sx} ${278.05 * sy} ${253.613 * sx} ${-551.64 * sy} ${44.1661 * sx} ${384.167 * sy})`,
      );
    } else {
      const sx = width / 1199;
      const sy = shapeHeight / 323;
      consultationGradient.setAttribute(
        "gradientTransform",
        `matrix(${-278.05 * sx} ${278.834 * sy} ${551.64 * sx} ${253.613 * sy} ${814.833 * sx} ${44.1661 * sy})`,
      );
    }
  }
}

if (consultationSection) {
  loadPageContent().then((content) => {
    renderConsultation(content.specialist);
    if (Array.isArray(content.services) && content.services.length) {
      renderServices(content.services);
    }
  });

  const updateShapeFromSection = () => {
    const { width, height } = consultationSection.getBoundingClientRect();
    updateConsultationShape(width, height);
    if (currentSpecialistData) renderConsultation(currentSpecialistData);
  };

  if ("ResizeObserver" in window) {
    const consultationResizeObserver = new ResizeObserver(([entry]) => {
      const { width, height } = entry.target.getBoundingClientRect();
      updateConsultationShape(width, height);
      if (currentSpecialistData) renderConsultation(currentSpecialistData);
    });
    consultationResizeObserver.observe(consultationSection);
  } else {
    updateShapeFromSection();
    window.addEventListener("resize", updateShapeFromSection);
  }
}

if (servicesViewport) {
  let pointerStartX = 0;
  let scrollStartX = 0;
  let isDragging = false;
  let didDrag = false;

  const getCarouselStep = () => {
    const firstCard = servicesTrack?.querySelector(".service-card");
    if (!firstCard || !servicesTrack) return servicesViewport.clientWidth;
    const gap = Number.parseFloat(getComputedStyle(servicesTrack).columnGap) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateTrackEndPadding = () => {
    const cards = servicesTrack?.querySelectorAll(".service-card") || [];
    if (!servicesTrack || !cards.length) return;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = getCarouselStep() - cardWidth;
    const step = cardWidth + gap;
    const contentWidth = cardWidth * cards.length + gap * Math.max(0, cards.length - 1);
    const rawMaximumScroll = Math.max(0, contentWidth - servicesViewport.clientWidth);
    const remainder = rawMaximumScroll % step;
    const endPadding = remainder < 0.5 || step - remainder < 0.5 ? 0 : step - remainder;

    servicesTrack.style.paddingRight = `${endPadding}px`;
  };

  const moveCarousel = (direction) => {
    servicesViewport.scrollBy({ left: direction * getCarouselStep(), behavior: "smooth" });
  };

  const snapToNearestCard = () => {
    const step = getCarouselStep();
    const maximumScroll = Math.max(0, servicesViewport.scrollWidth - servicesViewport.clientWidth);
    const target = Math.min(maximumScroll, Math.max(0, Math.round(servicesViewport.scrollLeft / step) * step));
    servicesViewport.scrollTo({ left: target, behavior: "smooth" });
  };

  const startDragging = (clientX) => {
    isDragging = true;
    didDrag = false;
    pointerStartX = clientX;
    scrollStartX = servicesViewport.scrollLeft;
    servicesViewport.classList.add("is-dragging");
  };

  const dragTo = (clientX, event) => {
    if (!isDragging) return;
    const distance = clientX - pointerStartX;
    if (Math.abs(distance) > 4) didDrag = true;
    if (didDrag) event.preventDefault();
    servicesViewport.scrollLeft = scrollStartX - distance;
  };

  const stopDragging = () => {
    if (!isDragging) return;
    const shouldSnap = didDrag;
    isDragging = false;
    servicesViewport.classList.remove("is-dragging");
    if (shouldSnap) snapToNearestCard();
    if (didDrag) window.setTimeout(() => (didDrag = false), 0);
  };

  servicesViewport.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" || event.isPrimary === false) return;
    startDragging(event.clientX);
    servicesViewport.setPointerCapture(event.pointerId);
  });

  servicesViewport.addEventListener("pointermove", (event) => {
    if (event.pointerType === "mouse") return;
    dragTo(event.clientX, event);
  });

  servicesViewport.addEventListener("pointerup", (event) => {
    if (event.pointerType !== "mouse") stopDragging();
  });
  servicesViewport.addEventListener("pointercancel", (event) => {
    if (event.pointerType !== "mouse") stopDragging();
  });

  servicesViewport.addEventListener("mousedown", (event) => {
    if (event.button !== 0) return;
    startDragging(event.clientX);
  });
  window.addEventListener("mousemove", (event) => dragTo(event.clientX, event));
  window.addEventListener("mouseup", stopDragging);
  window.addEventListener("blur", stopDragging);
  servicesViewport.addEventListener("dragstart", (event) => event.preventDefault());
  servicesViewport.addEventListener("click", (event) => {
    if (!didDrag) return;
    event.preventDefault();
    didDrag = false;
  }, true);

  servicesViewport.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    moveCarousel(direction);
  });

  window.addEventListener("resize", () => {
    updateTrackEndPadding();
    snapToNearestCard();
  });

  const resetCarouselPosition = () => {
    updateTrackEndPadding();
    servicesViewport.scrollLeft = 0;
  };

  resetCarouselPosition();
  window.addEventListener("pageshow", resetCarouselPosition);
}

function normalizePhone(value) {
  return value.replace(/[^\d+]/g, "").slice(0, 12);
}

const phoneInput = document.querySelector("#phone");

if (phoneInput) {
  phoneInput.addEventListener("input", () => {
    phoneInput.value = normalizePhone(phoneInput.value);
  });
}

if (appointmentForm && formStatus) {
  appointmentForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "";

    const requiredFields = [...appointmentForm.querySelectorAll("[required]")];
    requiredFields.forEach((field) => field.removeAttribute("aria-invalid"));

    const invalidField = requiredFields.find((field) => {
      if (field.type === "checkbox") return !field.checked;
      return !field.value.trim();
    });

    if (invalidField) {
      invalidField.setAttribute("aria-invalid", "true");
      invalidField.focus();
      formStatus.textContent = "Заполните, пожалуйста, обязательные поля.";
      return;
    }

    const payload = Object.fromEntries(new FormData(appointmentForm).entries());
    payload.source = window.location.href;

    if (!pageConfig.appointmentEndpoint) {
      formStatus.textContent = "Форма заполнена.";
      return;
    }

    const submitButton = appointmentForm.querySelector("button[type='submit']");
    submitButton.disabled = true;
    formStatus.textContent = "Отправляем заявку…";

    try {
      const response = await fetch(pageConfig.appointmentEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`Appointment request failed: ${response.status}`);
      formStatus.textContent = "Спасибо! Заявка отправлена.";
      appointmentForm.reset();
    } catch (error) {
      console.error("Не удалось отправить заявку.", error);
      formStatus.textContent = "Не удалось отправить заявку. Попробуйте ещё раз.";
    } finally {
      submitButton.disabled = false;
    }
  });
}
