// buttons
const aboutBtn = document.querySelector(".AboutSection")
const PortfolioBtn = document.querySelector(".PortfolioBtn")
const contactBtn = document.querySelector(".contactBtn")

// sections
const aboutSection = document.querySelector(".InfoAbout")
const PortfolioSection = document.querySelector(".InfoPortofolio")
const contactSection = document.querySelector(".InfoContact")

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

// contact form adjust
const form = document.querySelector("form")
const submitBtn = document.querySelector(".SubmitForm")
const Msg = document.querySelector("textarea")
const email = document.querySelector("input[type=email]")
const tel = document.querySelector("input[type=tel]")
const firstName = document.querySelector("#firstName")
const secondName = document.querySelector("#secondName")

form.addEventListener("submit",(e) => {
  e.preventDefault()
})
submitBtn.addEventListener("click", () => {
  window.open(`
    https://api.whatsapp.com/send?phone=+2001225073533&text=Name: ${firstName.value} ${secondName.value}, Email: ${email.value},tel: ${tel.value}, ${Msg.value}
  `)
})