const mobileNav = () => {
  const headerBtn = document.querySelector(".header__bars");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-nav__link");
  //State
  let isMobileNavOpen = false;
  headerBtn.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen === true) {
      mobileNav.style.display = "flex";
      document.body.style.overflowY = "hidden";
    } else {
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMobileNavOpen = false;
      mobileNav.style.display = "none";
      document.body.style.overflowY = "auto";
    });
  });
};

export default mobileNav;
// const mobileNav = () => {
//   const headerBtn = document.querySelector(".header__bars");
//   const mobileNav = document.querySelector(".mobile-nav"); // Corrected selector

//   console.log(mobileNav); // Check if mobileNav is null

//   headerBtn.addEventListener("click", () => {
//     mobileNav.style.display = "flex";
//   });
// };

// export default mobileNav;
