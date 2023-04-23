const containerHeader = document.querySelector(".header-container");

window.addEventListener("scroll", function () {
  let position = window.pageYOffset;
  containerHeader.style.backgroundPositionY = position * 0.7 + "px";
});

const tabsList = document.querySelector(".container-services-tabs");
const tabsServices = document.querySelectorAll(".tabs-title");
const paragraphs = document.querySelectorAll(".container-services-tab-text");

tabsList.addEventListener("click", function (event) {
  const target = event.target;
  const targetDataset = target.dataset.target;
  const activeParagraph = document.querySelector(`.${targetDataset}`);

  tabsServices.forEach((tab) => tab.classList.remove("active-tabs"));
  paragraphs.forEach((paragraph) =>
    paragraph.classList.add("services-tab-text-hidden")
  );
  target.classList.add("active-tabs");
  activeParagraph.classList.remove("services-tab-text-hidden");
});

const galleryImg = {
  "graphic-design": [
    "./img/graphicdesign/graphic-design1.jpg",
    "./img/graphicdesign/graphic-design2.jpg",
    "./img/graphicdesign/graphic-design3.jpg",
    "./img/graphicdesign/graphic-design4.jpg",
    "./img/graphicdesign/graphic-design5.jpg",
    "./img/graphicdesign/graphic-design6.jpg",
    "./img/graphicdesign/graphic-design7.jpg",
    "./img/graphicdesign/graphic-design8.jpg",
    "./img/graphicdesign/graphic-design9.jpg",
    "./img/graphicdesign/graphic-design10.jpg",
    "./img/graphicdesign/graphic-design11.jpg",
    "./img/graphicdesign/graphic-design12.jpg",
  ],
  "web-design": [
    "./img/web design/web-design1.jpg",
    "./img/web design/web-design2.jpg",
    "./img/web design/web-design3.jpg",
    "./img/web design/web-design4.jpg",
    "./img/web design/web-design5.jpg",
    "./img/web design/web-design6.jpg",
    "./img/web design/web-design7.jpg",
  ],
  "landing-pages": [
    "./img/landing page/landing-page1.jpg",
    "./img/landing page/landing-page2.jpg",
    "./img/landing page/landing-page3.jpg",
    "./img/landing page/landing-page4.jpg",
    "./img/landing page/landing-page5.jpg",
    "./img/landing page/landing-page6.jpg",
    "./img/landing page/landing-page7.jpg",
  ],
  wordpress: [
    "./img/wordpress/wordpress1.jpg",
    "./img/wordpress/wordpress2.jpg",
    "./img/wordpress/wordpress3.jpg",
    "./img/wordpress/wordpress4.jpg",
    "./img/wordpress/wordpress5.jpg",
    "./img/wordpress/wordpress6.jpg",
    "./img/wordpress/wordpress7.jpg",
    "./img/wordpress/wordpress8.jpg",
    "./img/wordpress/wordpress9.jpg",
    "./img/wordpress/wordpress10.jpg",
  ],
};

const sectionContainer = document.querySelector(".content-container-work");
const sectionworkBtn = document.querySelector(".container-work-btn");
const wrapperBtn = document.querySelector(".wrapper-load-btn");


const galleryImgAll = {
  all: [
    ...galleryImg["graphic-design"],
    ...galleryImg["web-design"],
    ...galleryImg["landing-pages"],
    ...galleryImg["wordpress"],
  ]
};

const galleryImgConnected = Object.assign(galleryImgAll, galleryImg);

for (let category in galleryImgConnected) {
  const wrapper = document.createElement("div");
  sectionContainer.insertBefore(wrapper, wrapperBtn);
  wrapper.classList.add("container-work-images");
  wrapper.classList.add(`${category}`);
  wrapper.classList.add("container-work-images-hidden");
  galleryImgConnected[`${category}`].forEach((imgSrc) => {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("container-work-item");
    wrapper.append(imgContainer);
    let img = new Image();
    img.src = `${imgSrc}`;
    imgContainer.append(img);
    img.classList.add("work-image");
  });
}
const wrapperAll = document.querySelector('.all');
wrapperAll.classList.remove('container-work-images-hidden');

const workTabsList = document.querySelector(".container-work-tabs");
const tabs = document.querySelectorAll(".tabs-title-work");
const containerImage = document.querySelectorAll(".container-work-images");

workTabsList.addEventListener("click", function (event) {
  const target = event.target;
  const targetDataset = target.dataset.category;
  const activeBlockElement = document.querySelector(`.${targetDataset}`);

  tabs.forEach((tab) => tab.classList.remove("tabs-title-work-active"));
  containerImage.forEach((container) =>
    container.classList.add("container-work-images-hidden")
  );
  target.classList.add("tabs-title-work-active");
  activeBlockElement.classList.remove("container-work-images-hidden");
});

const galleryImgLoad1 = {
  "graphic-design": [
    "./img/All/960x0.jpg",
    "./img/All/Layer 24.png",
    "./img/All/Layer 25.png",
    "./img/All/Layer 26.png",
  ],
  "web-design": [
    "./img/All/Layer 27.png",
    "./img/All/Layer 28.png",
    "./img/All/Layer 29.png",
    "./img/All/Layer 30.png",
    "./img/All/Layer 31.png",
  ],
  "landing-pages": ["./img/All/Layer 32.png"],
  wordpress: ["./img/All/Layer 33.png", "./img/All/Layer 34.png"],
};

const imgLoadAll1 = {
  all: [
    ...galleryImgLoad1["graphic-design"],
    ...galleryImgLoad1["web-design"],
    ...galleryImgLoad1["landing-pages"],
    ...galleryImgLoad1["wordpress"],
  ]
};

const galleryImgLoad2 = {
  "graphic-design": [
    "./img/graphicdesign/graphic-design1.jpg",
    "./img/graphicdesign/graphic-design2.jpg",
    "./img/graphicdesign/graphic-design3.jpg",
    "./img/graphicdesign/graphic-design4.jpg",
  ],
  "web-design": [
    "./img/web design/web-design1.jpg",
    "./img/web design/web-design2.jpg",
    "./img/web design/web-design3.jpg",
  ],
  "landing-pages": ["./img/landing page/landing-page1.jpg",
    "./img/landing page/landing-page2.jpg",
    "./img/landing page/landing-page3.jpg"],
  wordpress: ["./img/wordpress/wordpress1.jpg",
    "./img/wordpress/wordpress2.jpg"],
};

const imgLoadAll2 = {
  all: [
    ...galleryImgLoad2["graphic-design"],
    ...galleryImgLoad2["web-design"],
    ...galleryImgLoad2["landing-pages"],
    ...galleryImgLoad2["wordpress"],
  ]
};

const imgLoadConnected1 = Object.assign(imgLoadAll1, galleryImgLoad1);
const imgLoadConnected2 = Object.assign(imgLoadAll2, galleryImgLoad2);

function loadImg(imgLoadConnected) {
  for (let category in imgLoadConnected) {
    const containerHover = document.querySelector(".container-work-item-hover");
    let divCategory = document.querySelector(`.${category}`);
    imgLoadConnected[`${category}`].forEach((imgSrc) => {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("container-work-item");
      divCategory.append(imgContainer);
      let imgCategory = new Image();
      imgCategory.src = `${imgSrc}`;
      imgContainer.append(imgCategory);
      const containerImg = document.querySelectorAll(".container-work-item");
      containerImg.forEach(function (item) {
        item.appendChild(containerHover.cloneNode(true));
      });
    });
  }
}

const loading = document.querySelector('.wrapper-load-btn')

let clickCount = 0;

sectionworkBtn.addEventListener("click", function () {
  clickCount++
  loading.classList.add('wrapper-load-btn-active');

  function loadImage () {
  if (clickCount === 1) {
    loadImg(imgLoadConnected1)
  } else if (clickCount === 2) {
    loadImg(imgLoadConnected2)
    sectionworkBtn.style.display = "none";
  }
  loading.classList.remove('wrapper-load-btn-active');
}

setTimeout(loadImage, 2000);
}
)

const containerHover = document.querySelector(".container-work-item-hover");
const containerImg = document.querySelectorAll(".container-work-item");
containerImg.forEach(function (item) {
  item.appendChild(containerHover.cloneNode(true));
});

const wrapperTheham = document.querySelector(".theham-roundabout-wrapper");
const thehamcontainers = document.querySelectorAll(".theHam-content-container");
const avatars = document.querySelectorAll('.container-theham-avatar');
let activeImage = document.querySelector('.roundabout-active-avatar');
const arrayAvatars = Array.prototype.slice.call(avatars);

wrapperTheham.addEventListener("click", function (event) {
  if (event.target.tagName == "IMG") {
    const target = event.target;
    const targetDataAttribute = target.dataset.name;
    const activeContainer = document.querySelector(`.${targetDataAttribute}`);
    thehamcontainers.forEach((container) => {
      container.classList.add('theHam-content-container-hidden');
    })
    activeContainer.classList.remove("theHam-content-container-hidden");
    avatars.forEach((avatar) => {
      avatar.style.bottom = "0";
      avatar.style.transition = "1s";
      avatar.classList.remove('roundabout-active-avatar');
    })

    target.style.bottom = "15px";
    target.style.transition = "1s";
    target.classList.add('roundabout-active-avatar')
  }

  if (event.target.classList.contains('next-sibling')) {
    let activeImage = document.querySelector('.roundabout-active-avatar');
    const activeIndex = arrayAvatars.indexOf(activeImage);
    let nextIndex = activeIndex;
    if (activeIndex < (arrayAvatars.length - 1)) {
      nextIndex = (activeIndex + 1);
    } else nextIndex = 0;
    const targetDataAttribute = arrayAvatars[nextIndex].dataset.name;
    const activeContainer = document.querySelector(`.${targetDataAttribute}`);
    thehamcontainers.forEach((container) => {
      container.classList.add('theHam-content-container-hidden');
    })
    activeContainer.classList.remove("theHam-content-container-hidden");

    avatars.forEach((avatar) => {
      avatar.style.bottom = "0";
      avatar.style.transition = "1s";
      avatar.classList.remove('roundabout-active-avatar');
    })

    arrayAvatars[nextIndex].style.bottom = "15px";
    arrayAvatars[nextIndex].transition = "1s";
    arrayAvatars[nextIndex].classList.add('roundabout-active-avatar')
  }

  if (event.target.classList.contains('prev-sibling')) {
    let activeImage = document.querySelector('.roundabout-active-avatar');
    const activeIndex = arrayAvatars.indexOf(activeImage);
    let nextIndex = activeIndex;
    if (activeIndex > 0) {
      nextIndex = (activeIndex - 1);
    } else nextIndex = 3;
    const targetDataAttribute = arrayAvatars[nextIndex].dataset.name;
    const activeContainer = document.querySelector(`.${targetDataAttribute}`);
    thehamcontainers.forEach((container) => {
      container.classList.add('theHam-content-container-hidden');
    })
    activeContainer.classList.remove("theHam-content-container-hidden");

    avatars.forEach((avatar) => {
      avatar.style.bottom = "0";
      avatar.style.transition = "1s";
      avatar.classList.remove('roundabout-active-avatar');
    })

    arrayAvatars[nextIndex].style.bottom = "15px";
    arrayAvatars[nextIndex].transition = "1s";
    arrayAvatars[nextIndex].classList.add('roundabout-active-avatar')
  }
});

const galleryGrid = document.querySelector('.grid');
document.addEventListener('readystatechange', () => {
let msnry = new Masonry(galleryGrid, {
    itemSelector: '.grid-item',
    columnWidth: 378,
    gutter: 10,
    horizontalOrder: true
})
});
const gallerygridMedium = document.querySelector('.grid-medium') ;
document.addEventListener('readystatechange', () => {
  let msnryMedium = new Masonry(gallerygridMedium, {
    itemSelector: '.grid-item-medium',
    columnWidth: 180,
    gutter: 3,
    horizontalOrder: true
  } )
});
const gallerygridSmall = document.querySelector('.grid-small');
  document.addEventListener('readystatechange', () => {
        let msnrySmall = new Masonry(gallerygridSmall, {
        itemSelector: '.grid-item-small',
        columnWidth: 124,
        gutter: 3,
        horizontalOrder: true
      } )
    }
)

const containerHoverMasonry = document.querySelector(".masonry-item-hover");
const containerLarge = document.querySelectorAll(".grid-item-large");
containerLarge.forEach(function (item) {
    item.appendChild(containerHoverMasonry .cloneNode(true));
});

const containerMedium = document.querySelectorAll(".grid-item-medium");
containerMedium.forEach(function (item) {
    item.appendChild(containerHoverMasonry .cloneNode(true));
});

const containerSmall= document.querySelectorAll(".grid-item-small");
containerSmall.forEach(function (item) {
    item.appendChild(containerHoverMasonry .cloneNode(true));
});
