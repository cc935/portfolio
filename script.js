// buttons
const aboutBtn = document.querySelector(".AboutSection")
const PortfolioBtn = document.querySelector(".PortfolioBtn")
const contactBtn = document.querySelector(".contactBtn")
const showmycontent1 = document.querySelector("#mycontent1")
const showmycontent2 = document.querySelector("#mycontent2")

// sections
const aboutSection = document.querySelector(".InfoAbout")
const PortfolioSection = document.querySelector(".InfoPortofolio")
const contactSection = document.querySelector(".InfoContact")
const aboutaside = document.querySelector(".About")

// functions
const elementToggleFunc = function (elem) {elem.classList.toggle("active");}
const elementRemoveFunc = function (elem) {elem.classList.remove("active");}

aboutBtn.addEventListener("click", () => {
  elementToggleFunc(aboutSection);
  elementRemoveFunc(PortfolioSection);
  elementRemoveFunc(contactSection);
  aboutBtn.disabled = true
  PortfolioBtn.disabled = false
  contactBtn.disabled = false
})

PortfolioBtn.addEventListener("click", () => {
  elementToggleFunc(PortfolioSection);
  elementRemoveFunc(aboutSection);
  elementRemoveFunc(contactSection);
  aboutBtn.disabled = false
  PortfolioBtn.disabled = true
  contactBtn.disabled = false
})

contactBtn.addEventListener("click", () => {
    elementToggleFunc(contactSection);
    elementRemoveFunc(aboutSection);
    elementRemoveFunc(PortfolioSection);
    aboutBtn.disabled = false
    PortfolioBtn.disabled = false
    contactBtn.disabled = true
})

showmycontent1.addEventListener("click", () => { 
    aboutaside.style.display = "inline"
    showmycontent1.style.display = "none"
    showmycontent2.style.display = "inline"
})

showmycontent2.addEventListener("click", () => {
    aboutaside.style.display = "none"
    showmycontent1.style.display = "inline"
    showmycontent2.style.display = "none"
})