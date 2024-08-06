// buttons
const aboutBtn = document.querySelector(".AboutSection")
const PortfolioBtn = document.querySelector(".PortfolioBtn")
const contactBtn = document.querySelector(".contactBtn")
const showmycontent1 = document.querySelector("#mycontent1")
const showmycontent2 = document.querySelector("#mycontent2")
const closePersons1 = document.querySelector(".close1")
const closePersons2 = document.querySelector(".close2")

// sections
const aboutSection = document.querySelector(".InfoAbout")
const PortfolioSection = document.querySelector(".InfoPortofolio")
const contactSection = document.querySelector(".InfoContact")
const aboutaside = document.querySelector(".About")
const adham = document.querySelector(".people1")
const Me = document.querySelector(".people2")
const MeContent = document.querySelector(".person1")
const AdhamContent = document.querySelector(".person2")
const allContent = document.querySelector(".persons")
// functions
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
const elementRemoveFunc = function (elem) { elem.classList.remove("active"); }

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
  showmycontent2.style.display = "inline"
  showmycontent1.style.display = "none"
})
showmycontent2.addEventListener("click", () => {
  aboutaside.style.display = "none"
  showmycontent2.style.display = "none"
  showmycontent1.style.display = "inline"
})

setInterval(() => {
  if (screen.width <= 1136) {
    aboutaside.style.display = "flex"
    showmycontent2.style.display = "none"
    showmycontent1.style.display = "none"
  }
}, 10)

adham.addEventListener("click", () => {
  allContent.style.display = "flex"
  AdhamContent.style.display = "flex"
  document.body.style.overflowY = "hidden"
})

Me.addEventListener("click", () => {
  allContent.style.display = "flex"
  MeContent.style.display = "flex"
  document.body.style.overflowY = "hidden"
})

closePersons1.addEventListener("click", () => {
  allContent.style.display = "none"
  MeContent.style.display = "none"
  AdhamContent.style.display = "none"
  document.body.style.overflowY = "visible"
})
closePersons2.addEventListener("click", () => {
  allContent.style.display = "none"
  MeContent.style.display = "none"
  AdhamContent.style.display = "none"
  document.body.style.overflowY = "visible"
})