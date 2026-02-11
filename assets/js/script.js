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
  const scrollImgs = document.querySelectorAll(".scrollImg");
  const inViewAnimations = document.querySelectorAll(".inViewAnimation");
  const section = document.querySelector(".horizontal-section");
  const wrapper = document.querySelector(".horizontal-wrapper");

  // Menu fetching
  menuData.forEach((section) => {
    const categoryEl = document.createElement("div");
    categoryEl.innerHTML = `
    <h2 class="text-6xl inViewAnimation font-bold mb-12 font-ternary">
      ${section.category}
    </h2>
    <div class="grid md:grid-cols-2 gap-8">
      ${section.items
        .map(
          (item) =>
            `<div class="flex justify-between gap-6"><div><h3 class="text-lg font-semibold inViewAnimation">${item.name}</h3><p class="text-sm mt-1 inViewAnimation">${item.description}</p></div><div class="font-semibold text-lg inViewAnimation">₹${item.price}</div></div>`,
        )
        .join("")}
    </div>
  `;
    menuContainer.appendChild(categoryEl);
  });

  // Registring gsap plugins
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

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
  gsap.to(section, {
    x: getScrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: wrapper,
      start: "top top",
      end: () => `+=${section.scrollWidth}`,
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
        start: "top 90%",
        end: "top 30%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
});
