document.addEventListener("DOMContentLoaded", () => {
  // Data for menu
  const menuData = [
    {
      category: "Breads",
      items: [
        {
          name: "Aloo Naan",
          price: 99,
          description: "Soft naan stuffed with spiced potato filling.",
        },
        {
          name: "Missi Roti",
          price: 85,
          description: "Traditional gram flour flatbread with spices.",
        },
        {
          name: "Laccha Parantha",
          price: 85,
          description: "Layered flaky whole wheat parantha.",
        },
        {
          name: "Tandoori Roti",
          price: 30,
          description: "Classic whole wheat roti baked in tandoor.",
        },
        {
          name: "Butter Roti",
          price: 40,
          description: "Soft roti brushed generously with butter.",
        },
        {
          name: "Garlic Naan",
          price: 90,
          description: "Tandoor-baked naan topped with garlic.",
        },
        {
          name: "Butter Naan",
          price: 80,
          description: "Soft naan brushed with melted butter.",
        },
        {
          name: "Plain Naan",
          price: 70,
          description: "Traditional soft naan baked in clay oven.",
        },
      ],
    },
    {
      category: "Rice",
      items: [
        {
          name: "Veg Pulao",
          price: 345,
          description: "Fragrant rice cooked with mixed vegetables and spices.",
        },
        {
          name: "Peas Pulao",
          price: 345,
          description: "Basmati rice cooked with green peas.",
        },
        {
          name: "Steamed Rice",
          price: 225,
          description: "Simple steamed basmati rice.",
        },
        {
          name: "Jeera Rice",
          price: 225,
          description: "Basmati rice tempered with cumin seeds.",
        },
      ],
    },
    {
      category: "Raita",
      items: [
        {
          name: "Cucumber Raita",
          price: 155,
          description: "Cool yogurt mixed with fresh cucumber.",
        },
        {
          name: "Mix Raita",
          price: 165,
          description: "Yogurt blended with mixed vegetables and spices.",
        },
        {
          name: "Boondi Raita",
          price: 165,
          description: "Yogurt topped with crispy boondi pearls.",
        },
      ],
    },
    {
      category: "Cold Beverages",
      items: [
        {
          name: "Fresh Lime Soda",
          price: 163,
          description: "Zingy and sparkling lime refresher.",
        },
        {
          name: "Orange Banta",
          price: 195,
          description: "Tangy orange fizzy drink.",
        },
        {
          name: "Peach Iced Tea",
          price: 189,
          description: "Sweet peach-flavored chilled tea.",
        },
        {
          name: "Lemon Iced Tea",
          price: 189,
          description: "Black tea with refreshing lemon twist.",
        },
        {
          name: "Diy Mojito",
          price: 249,
          description: "Fresh mint, citrus, and fizz blend.",
        },
        {
          name: "Chocolate Shake",
          price: 329,
          description: "Rich and creamy chocolate shake.",
        },
        {
          name: "Strawberry Shake",
          price: 305,
          description: "Sweet and refreshing strawberry shake.",
        },
        {
          name: "Oreo Shake",
          price: 329,
          description: "Cookies and cream blended shake.",
        },
        {
          name: "Brownie Fudge Shake",
          price: 329,
          description: "Chocolate shake loaded with brownie chunks.",
        },
        {
          name: "Cold Coffee",
          price: 165,
          description: "Classic chilled frothy coffee.",
        },
        {
          name: "Iced Latte",
          price: 199,
          description: "Chilled espresso with creamy milk.",
        },
        {
          name: "Iced Americano",
          price: 175,
          description: "Strong black coffee served over ice.",
        },
      ],
    },
    {
      category: "Small Bites",
      items: [
        {
          name: "Veggie Delight Quesadilla",
          price: 375,
          description: "Grilled tortilla stuffed with veggies and cheese.",
        },
        {
          name: "Mushroom & Cheese Bruschetta",
          price: 375,
          description: "Toasted bread topped with mushrooms and cheese.",
        },
        {
          name: "Bbq Cottage Cheese Bruschetta",
          price: 375,
          description: "Paneer tossed in BBQ sauce over garlic bread.",
        },
        {
          name: "Loaded Baked Nachos",
          price: 355,
          description: "Nachos layered with beans, cheese, and salsa.",
        },
        {
          name: "Cheesy Fries",
          price: 299,
          description: "Crispy fries topped with melted cheese.",
        },
        {
          name: "Exotica Mix Garlic Breads",
          price: 355,
          description: "Garlic bread topped with veggies and cheese.",
        },
        {
          name: "Cheese Garlic Breads",
          price: 279,
          description: "Garlic bread loaded with oozy cheese.",
        },
        {
          name: "Garlic Breads",
          price: 249,
          description: "Classic toasted garlic butter bread.",
        },
        {
          name: "Paneer Bhurji Pav",
          price: 259,
          description: "Spicy scrambled paneer served with pav.",
        },
        {
          name: "Falafel, Hummus & Pita",
          price: 585,
          description: "Crispy falafel with hummus and pita bread.",
        },
        {
          name: "Hummus & Pita",
          price: 355,
          description: "Creamy hummus served with warm pita.",
        },
        {
          name: "Peri Peri Fries",
          price: 249,
          description: "Fries tossed in spicy peri peri seasoning.",
        },
        {
          name: "French Fries",
          price: 225,
          description: "Golden crispy classic fries.",
        },
      ],
    },
    {
      category: "Salad",
      items: [
        {
          name: "Falafel Salad",
          price: 395,
          description: "Crispy falafel served over fresh greens.",
        },
        {
          name: "Vegetable Caeser",
          price: 319,
          description: "Lettuce, croutons, veggies with creamy dressing.",
        },
        {
          name: "Vegetable Quinoa",
          price: 355,
          description: "Herbed quinoa tossed with fresh vegetables.",
        },
      ],
    },
    {
      category: "Handmade Pasta",
      items: [
        {
          name: "Vegetable Lasagna",
          price: 495,
          description: "Layered pasta with roasted veggies and cheese.",
        },
      ],
    },
    {
      category: "Pizza",
      items: [
        {
          name: "Laggera Pizza [12 Inches]",
          price: 695,
          description: "Light pizza with grilled veggies and herbs.",
        },
        {
          name: "Paneer Pesto Pizza [12 Inches]",
          price: 685,
          description: "Buffalo mozzarella with pesto drizzle.",
        },
        {
          name: "Barbeque Cottage Cheese [12 Inches]",
          price: 695,
          description: "BBQ paneer pizza with onions and peppers.",
        },
        {
          name: "Veg Extravaganza [12 Inches]",
          price: 685,
          description: "Loaded with bell peppers, mushrooms, and olives.",
        },
        {
          name: "Margherita Pizza [12 Inches]",
          price: 585,
          description: "Classic tomato, mozzarella, and basil pizza.",
        },
      ],
    },
    {
      category: "Calzone",
      items: [
        {
          name: "Pesto Calzone",
          price: 485,
          description: "Folded pizza stuffed with pesto and cheese.",
        },
        {
          name: "Calzone Marinara",
          price: 485,
          description: "Folded pizza filled with marinara and veggies.",
        },
      ],
    },
    {
      category: "Soup",
      items: [
        {
          name: "Manchow Soup",
          price: 310,
          description: "Hot and spicy Indo-Chinese vegetable soup.",
        },
      ],
    },
    {
      category: "North Indian Starters",
      items: [
        {
          name: "Tandoori Platter",
          price: 809,
          description: "Sizzling platter of paneer, chaap, and mushrooms.",
        },
        {
          name: "Chaap",
          price: 375,
          description: "Soya chaap in malai, achari, or masala flavors.",
        },
        {
          name: "Dahi Ke Sholey",
          price: 325,
          description: "Crispy rolls stuffed with hung curd filling.",
        },
        {
          name: "Hara Bhara Kebab",
          price: 349,
          description: "Spinach and pea patties grilled with herbs.",
        },
        {
          name: "Mushroom Tikka Skewer",
          price: 399,
          description: "Tandoori spiced grilled mushrooms.",
        },
        {
          name: "Paneer Tikka",
          price: 399,
          description: "Spiced paneer cubes grilled to perfection.",
        },
      ],
    },
    {
      category: "North Indian Main Course",
      items: [
        {
          name: "Malai Kofta",
          price: 494,
          description: "Paneer dumplings in creamy cashew gravy.",
        },
        {
          name: "Chaap Changezi",
          price: 494,
          description: "Tandoor chaap in rich tomato-cashew gravy.",
        },
        {
          name: "Paneer Korma",
          price: 494,
          description: "Paneer in rich Mughlai-style gravy.",
        },
        {
          name: "Rajma Masala",
          price: 399,
          description: "Kidney beans in thick spiced gravy.",
        },
        {
          name: "Chana Masala",
          price: 399,
          description: "Chickpeas cooked in tangy tomato gravy.",
        },
        {
          name: "Jeera Aloo",
          price: 399,
          description: "Potatoes tossed with cumin and chilies.",
        },
        {
          name: "Dum Aloo",
          price: 399,
          description: "Baby potatoes in yogurt-based gravy.",
        },
        {
          name: "Matar Paneer",
          price: 409,
          description: "Paneer and peas in mild spiced gravy.",
        },
        {
          name: "Matar Mushroom",
          price: 409,
          description: "Mushroom and peas in onion-tomato gravy.",
        },
        {
          name: "Kadhai Chaap",
          price: 399,
          description: "Chaap tossed with capsicum and masala.",
        },
        {
          name: "Tawa Chaap",
          price: 399,
          description: "Chaap slow-grilled with spicy masala.",
        },
        {
          name: "Gourmet Chaap Masala",
          price: 399,
          description: "Soya chaap in thick spicy gravy.",
        },
        {
          name: "Sabj Handi",
          price: 399,
          description: "Mixed vegetables cooked in handi style.",
        },
        {
          name: "Daal Fry",
          price: 369,
          description: "Yellow dal tempered with ghee and garlic.",
        },
        {
          name: "Daal Makhani",
          price: 419,
          description: "Black lentils slow-cooked with cream and butter.",
        },
        {
          name: "Paneer Methi Malai",
          price: 409,
          description: "Paneer cooked with fenugreek and cream.",
        },
        {
          name: "Palak Paneer",
          price: 399,
          description: "Paneer simmered in spinach puree.",
        },
        {
          name: "Paneer Dhaniya Adraki",
          price: 409,
          description: "Paneer flavored with coriander and ginger.",
        },
        {
          name: "Paneer Lababdar",
          price: 409,
          description: "Paneer in rich tomato-onion gravy.",
        },
        {
          name: "Kadhai Paneer",
          price: 409,
          description: "Paneer tossed with peppers in kadhai masala.",
        },
        {
          name: "Shahi Paneer",
          price: 399,
          description: "Paneer in creamy saffron gravy.",
        },
        {
          name: "Paneer Butter Masala",
          price: 409,
          description: "Paneer in silky tomato-butter gravy.",
        },
      ],
    },
    {
      category: "Mineral Water",
      items: [
        {
          name: "Vedika",
          price: 60,
          description: "Packaged drinking water bottle.",
        },
      ],
    },
    {
      category: "Appetizer",
      items: [
        {
          name: "Stuffed Masala Chaap",
          price: 374,
          description: "Soft, melt-in-mouth dumplings brimming with creamy mushrooms and cheese.",
        },
        {
          name: "Cheese Stuffed Crimson Kebabs",
          price: 374,
          description: "Beetroot and garden-fresh vegetables filled with molten cheese and pan-grilled to perfection.",
        },
        {
          name: "Cream Cheese & Mushroom Dumplings",
          price: 394,
          description: "Soft dumplings filled with creamy mushrooms and cheese.",
        },
        {
          name: "Miniature Burgers",
          price: 374,
          description: "1-inch aloo tikki sliders — tiny, soulful, and irresistible.",
        },
        {
          name: "Pao Bhaji Shots",
          price: 374,
          description: "Buttery mini paos served with rich, spiced bhaji.",
        },
      ],
    },
    {
      category: "Sandwich",
      items: [
        {
          name: "Spicy Paneer Jalapeno Sandwich",
          price: 355,
          description:
            "Spiced paneer paired with jalapeños and melty cheese — for those who love a fiery kick in every bite.",
          customisable: true,
          type: "Veg",
        },
        {
          name: "Garden Of Freshness Sandwich",
          price: 299,
          description:
            "A crunchy, colorful medley of garden-fresh veggies with a tangy dressing — your guilt-free gourmet snack.",
          customisable: true,
          type: "Veg",
        },
        {
          name: "Gourmet Mushroom Cheese Sandwich",
          price: 356,
          description:
            "Juicy mushrooms, creamy cheese, and herbed seasoning between crusty grilled bread — the ultimate umami sandwich.",
          customisable: true,
          type: "Veg",
        },
        {
          name: "Paneer Pesto Sandwich",
          price: 310,
          description:
            "Soft paneer slathered in vibrant green pesto, grilled to perfection — a fusion bite you won't forget.",
          customisable: true,
          type: "Veg",
        },
        {
          name: "Grilled Cheese Sandwich",
          price: 310,
          description: "Golden-buttered bread hugging molten cheese — simple, nostalgic, and oh-so-satisfying.",
          customisable: true,
          type: "Veg",
        },
      ],
    },
    {
      category: "Burger",
      items: [
        {
          name: "Fungi Formaggi Burger",
          price: 369,
          description:
            "A pizza dream for mushroom lovers — earthy mushrooms, rich cheese, and a herbed tomato base, baked to golden perfection.",
          customisable: true,
          type: "Veg",
        },
        {
          name: "Classic Aloo Tikki Burger",
          price: 319,
          description:
            "North India's favorite! Crispy potato patties spiced just right, tucked into soft buns with chutneys and crunch.",
          customisable: true,
          bestseller: true,
          type: "Veg",
        },
        {
          name: "Bean N Cheese Burger",
          price: 369,
          description:
            "Creamy cheese meets hearty beans in this rich, spiced fusion — a melt-in-mouth delight with every bite.",
          customisable: true,
          type: "Veg",
        },
        {
          name: "Vegetarian Cheeseburger Sandwich",
          price: 319,
          description:
            "Juicy veg patty layered with cheddar, crisp lettuce, and tangy sauces, all in a toasted bun — comfort in every bite.",
          customisable: true,
          type: "Veg",
        },
      ],
    },
    {
      category: "Dessert",
      items: [
        {
          name: "Lotus Biscoff Cheesecake",
          price: 395,
          description:
            "A melt-in-your-mouth dessert with a caramelized twist featuring a buttery Biscoff biscuit crust topped with silky-smooth cream cheese.",
          type: "Veg",
        },
        {
          name: "Belgium Chocolate",
          price: 399,
          description:
            "With a smooth ganache top and a dense, moist base, every bite is a celebration of true cocoa bliss.",
          type: "Veg",
        },
        {
          name: "Tiramisu",
          price: 425,
          description:
            "Layers of soft coffee-soaked ladyfingers and luscious mascarpone cream, dusted with fine cocoa powder — light, dreamy, and indulgent.",
          type: "Veg",
        },
        {
          name: "Walnut Brownie With Chocolate Syrup",
          price: 285,
          description:
            "Warm, fudgy chocolate walnut brownie baked to perfection, served with a scoop of velvety vanilla ice cream and drizzled with rich chocolate sauce.",
          type: "Veg",
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
    <h2 class="lg:text-6xl md:text-5xl text-4xl mb-12 font-secondary pb-6 border-b border-amber-900 border-dashed">
      ${section.category}
    </h2>
    <div class="grid md:grid-cols-2 gap-8 italic">
      ${section.items
        .map(
          (item) =>
            `<div class="flex justify-between gap-6"><div><h3 class="md:text-lg text-base font-semibold">${item.name}</h3><p class="text-sm mt-1">${item.description}</p></div><div class="font-semibold text-lg">₹${item.price}</div></div>`,
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

  // letting contact section in view
  document.getElementById("contact").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#contact-section",
    });
  });

  // letting order section in view
  document.getElementById("orderBtn").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#order-section",
    });
  });

  // letting order section in view
  document.getElementById("locateBtn").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#locateUs",
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

  // Image popup function
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

  // Close image popup
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

  gsap.to("#bgCupImg", {
    scrollTrigger: {
      trigger: videoSection,
      start: "top top",
      end: "+=500%",
      scrub: true,
    },
    rotate: 360,
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
