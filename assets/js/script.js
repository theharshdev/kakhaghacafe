document.addEventListener("DOMContentLoaded", () => {
  // Data for menu
  const menuData = [
    {
      category: "Appetizers",
      items: [
        {
          name: "Pao Bhaji Shots",
          price: 374,
          description:
            "A playful twist on the classic, buttery paos served with rich spiced bhaji.",
        },
        {
          name: "Miniature Burgers",
          price: 374,
          description:
            "1-inch aloo tikki sliders — tiny, soulful, and irresistible.",
        },
        {
          name: "Cream Cheese & Mushroom Dumplings",
          price: 394,
          description:
            "Soft dumplings filled with creamy mushrooms and cheese.",
        },
        {
          name: "Cheese Stuffed Crimson Kebabs",
          price: 374,
          description:
            "Beetroot and garden vegetables filled with molten cheese.",
        },
        {
          name: "Stuffed Masala Chaap",
          price: 374,
          description: "Soft, melt-in-mouth chaap cooked in rich masala.",
        },
      ],
    },

    {
      category: "Burgers",
      items: [
        {
          name: "Vegetarian Cheeseburger Sandwich",
          price: 319,
          description:
            "Juicy veg patty layered with cheddar, lettuce, and tangy sauces.",
        },
        {
          name: "Bean N Cheese Burger",
          price: 369,
          description: "Creamy cheese meets hearty beans in a rich fusion.",
        },
        {
          name: "Classic Aloo Tikki Burger",
          price: 319,
          description: "Crispy potato patties with chutneys and crunch.",
        },
        {
          name: "Fungi Formaggi Burger",
          price: 369,
          description: "Earthy mushrooms, rich cheese, and herbed tomato base.",
        },
      ],
    },

    {
      category: "Cold Beverages",
      items: [
        {
          name: "Iced Americano",
          price: 175,
          description: "Bold black coffee over ice – strong and refreshing.",
        },
        {
          name: "Iced Latte",
          price: 199,
          description: "Chilled espresso blended with milk.",
        },
        {
          name: "Cold Coffee",
          price: 165,
          description: "Rich, frothy, and addictive.",
        },
        {
          name: "Brownie Fudge Shake",
          price: 329,
          description: "Thick chocolate shake packed with brownie chunks.",
        },
        {
          name: "Oreo Shake",
          price: 329,
          description: "Cookies and cream heaven in every sip.",
        },
      ],
    },

    {
      category: "Desserts",
      items: [
        {
          name: "Walnut Brownie with Chocolate Syrup",
          price: 285,
          description: "Warm fudgy brownie served with vanilla ice cream.",
        },
        {
          name: "Tiramisu",
          price: 425,
          description: "Coffee-soaked layers with mascarpone cream.",
        },
        {
          name: "Belgium Chocolate",
          price: 399,
          description: "Smooth ganache and dense chocolate base.",
        },
        {
          name: "Lotus Biscoff Cheesecake",
          price: 395,
          description: "Buttery Biscoff crust with silky cheesecake.",
        },
      ],
    },
  ];
  // Elements
  const fadeIns = document.querySelectorAll(".fadeIn");
  const menuContainer = document.getElementById("menuContainer");
  const menuBtn = document.getElementById("menu-btn");
  const closeImgPopup = document.getElementById("closeImgPopup");
  const popupImg = document.getElementById("popupImg");
  const imagePopup = document.getElementById("imagePopup");
  const menuPopup = document.getElementById("menu-popup");
  const menuCloses = document.querySelectorAll(".menu-close-btn");
  const homebtns = document.querySelectorAll(".home-btn");
  const scrollImgs = document.querySelectorAll(".scrollImg");
  const inViewAnimations = document.querySelectorAll(".inViewAnimation");
  const section = document.querySelector(".horizontal-section");
  const wrapper = document.querySelector(".horizontal-wrapper");

  // Menu fetching
  menuData.forEach((section) => {
    const categoryEl = document.createElement("div");
    categoryEl.innerHTML = `
    <h2 class="text-6xl mb-12 font-ternary pb-6 border-b border-amber-950 border-dashed">
      ${section.category}
    </h2>
    <div class="grid md:grid-cols-2 gap-8">
      ${section.items
        .map(
          (item) =>
            `<div class="flex justify-between gap-6"><div><h3 class="text-lg font-semibold">${item.name}</h3><p class="text-sm mt-1">${item.description}</p></div><div class="font-semibold text-lg">₹${item.price}</div></div>`,
        )
        .join("")}
    </div>
  `;
    menuContainer.appendChild(categoryEl);
  });

  // Registring gsap plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

  // Applied Soomth Scrolling
  ScrollSmoother.create({
    smooth: 1.5,
    effects: true,
  });

  // Applied fade in animation to elements
  fadeIns.forEach((fadeIn) => {
    gsap.from(fadeIn, {
      scrollTrigger: {
        trigger: fadeIn,
      },
      opacity: 0,
      duration: 3,
    });
  });

  // Added horizontal scrolling
  const getScrollAmount = () => -(section.scrollWidth - wrapper.offsetWidth);
  const anime = gsap.to(section, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${section.scrollWidth * 0.35}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true,
    },
  });

  // In View Animation
  inViewAnimations.forEach((inViewAnimation) => {
    gsap.from(inViewAnimation, {
      scrollTrigger: {
        trigger: inViewAnimation,
      },
      y: 200,
      opacity: 0,
      duration: 1,
    });
  });

  // Opening popup menu
  menuBtn.addEventListener("click", () => {
    gsap.to(menuPopup, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
    });
  });
  // Closing popup menu
  menuCloses.forEach((menuClose) => {
    menuClose.addEventListener("click", () => {
      gsap.to(menuPopup, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
      });
    });
  });

  // letting menu section in view
  document.getElementById("gotomenu-btn").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#menu",
    });
  });

  // letting gallery section in view
  document.getElementById("showcase-btn").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#gallery",
    });
  });

  // letting gallery section in view
  document.getElementById("about-btn").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#about-section",
    });
  });

  // letting gallery section in view
  homebtns.forEach((homebtn) => {
    homebtn.addEventListener("click", () => {
      gsap.to(window, {
        scrollTo: "#home-section",
      });
    });
  });

  // Scroll spy progress bar
  const progressBar = document.getElementById("progressBar");

  function updateProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollable = docHeight - winHeight;
    const progress = scrollTop / scrollable;
    progressBar.style.width = `${progress * 100}%`;
  }
  window.addEventListener("scroll", updateProgress);
  window.addEventListener("resize", updateProgress);

  scrollImgs.forEach((scrollImg) => {
    scrollImg.addEventListener("click", () => {
      const currentPath = scrollImg.getAttribute("src");
      popupImg.setAttribute("src", currentPath);

      gsap.to(imagePopup, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
      });
    });
  });

  closeImgPopup.addEventListener("click", () => {
    gsap.to(imagePopup, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  });

  // Quotes animation
  const videoSection = document.querySelector("#videoSection");
  const quotes = gsap.utils.toArray(".quote");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: videoSection,
      start: "top top",
      end: "+=500%",
      scrub: true,
      pin: true,
    },
  });

  // Quotes animation
  quotes.forEach((quote, i) => {
    if (i !== quotes.length - 1) {
      tl.to(quote, { opacity: 1, duration: 0.5 }).to(quote, {
        opacity: 0,
        duration: 0.5,
      });
    } else {
      tl.to(quote, { opacity: 1, duration: 0.5 });
    }
  });
});
