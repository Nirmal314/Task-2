// ! cc1

const cc1 = document.getElementById("cc1-container");
cc1.addEventListener("mouseover", () => {
    document.getElementById("cc1-content").style.opacity = "93%"
})
cc1.addEventListener("mouseout", () => {
    document.getElementById("cc1-content").style.opacity = "0"
})

// ! cc2

const cc2 = document.getElementById("cc2-container");
cc2.addEventListener("mouseover", () => {
    document.getElementById("cc2-content").style.opacity = "93%"
})
cc2.addEventListener("mouseout", () => {
    document.getElementById("cc2-content").style.opacity = "0"
})

// ! cc3

const cc3 = document.getElementById("cc3-container");
cc3.addEventListener("mouseover", () => {
    document.getElementById("cc3-content").style.opacity = "93%"
})
cc3.addEventListener("mouseout", () => {
    document.getElementById("cc3-content").style.opacity = "0"
})

// ! toggle button

const monthlyBtn = document.getElementById('monthlyBtn');
const yearlyBtn = document.getElementById('yearlyBtn');
const slider = document.querySelector('.slider');
const proMonthlyPrice = document.getElementById("pro-monthly-price");
const proYearlyPrice = document.getElementById("pro-yearly-price");
const businessMonthlyPrice = document.getElementById("business-monthly-price");
const businessYearlyPrice = document.getElementById("business-yearly-price");
const freePrice = document.getElementById("free");
const freeToYearlyPrice = document.getElementById("free-to-yearly");
const customPrice = document.getElementById("custom");
const customToYearlyPrice = document.getElementById("custom-to-yearly");

proYearlyPrice.style.opacity = 0;
proYearlyPrice.style.transform = "translateX(-7%)"

businessYearlyPrice.style.opacity = 0;
businessYearlyPrice.style.transform = "translateX(-7%)"

freeToYearlyPrice.style.opacity = 0;
freeToYearlyPrice.style.transform = "translateX(-7%)"

customToYearlyPrice.style.opacity = 0;
customToYearlyPrice.style.transform = "translateX(-7%)"

monthlyBtn.style.color = "#fff"
yearlyBtn.style.color = "#627065"

monthlyBtn.addEventListener('click', () => {
    slider.style.transform = 'translateX(0)';
    monthlyBtn.style.color = "#fff"
    yearlyBtn.style.color = "#627065"

    freePrice.style.transform = "translateX(0%)"
    freeToYearlyPrice.style.transform = "translateX(-7%)"
    freeToYearlyPrice.style.opacity = 0;
    freePrice.style.opacity = 1;

    proMonthlyPrice.style.transform = "translateX(0%)"
    proYearlyPrice.style.transform = "translateX(-7%)"
    proYearlyPrice.style.opacity = 0;
    proMonthlyPrice.style.opacity = 1;

    businessMonthlyPrice.style.transform = "translateX(0%)"
    businessYearlyPrice.style.transform = "translateX(-7%)"
    businessYearlyPrice.style.opacity = 0;
    businessMonthlyPrice.style.opacity = 1;

    customPrice.style.transform = "translateX(0%)"
    customToYearlyPrice.style.transform = "translateX(-7%)"
    customToYearlyPrice.style.opacity = 0;
    customPrice.style.opacity = 1;
});

yearlyBtn.addEventListener('click', () => {
    slider.style.transform = 'translateX(108%)';
    monthlyBtn.style.color = "#627065"
    yearlyBtn.style.color = "#fff"

    freePrice.style.transform = "translateX(7%)"
    freeToYearlyPrice.style.transform = "translateX(0%)"
    freeToYearlyPrice.style.opacity = 1;
    freePrice.style.opacity = 0;

    proMonthlyPrice.style.transform = "translateX(7%)"
    proYearlyPrice.style.transform = "translateX(0%)"
    proYearlyPrice.style.opacity = 1;
    proMonthlyPrice.style.opacity = 0;

    businessMonthlyPrice.style.transform = "translateX(7%)"
    businessYearlyPrice.style.transform = "translateX(0%)"
    businessYearlyPrice.style.opacity = 1;
    businessMonthlyPrice.style.opacity = 0;

    customPrice.style.transform = "translateX(7%)"
    customToYearlyPrice.style.transform = "translateX(0%)"
    customToYearlyPrice.style.opacity = 1;
    customPrice.style.opacity = 0;
});