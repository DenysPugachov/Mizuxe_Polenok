//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

//Smooth Scrolling
$("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});

//open accordion with external link
document.querySelectorAll("a[href='#mirror']").forEach(item => {
    item.addEventListener("click", mirror.classList.add(
        "show"));
});
document.querySelectorAll("a[href='#skinali']").forEach(item => {
    item.addEventListener("click", skinali.classList.add(
        "show"));
});
document.querySelectorAll("a[href='#shower']").forEach(item => {
    item.addEventListener("click", shower.classList.add(
        "show"));
});
document.querySelectorAll("a[href='#wardrobe']").forEach(item => {
    item.addEventListener("click", wardrobe.classList.add(
        "show"));
});

//Telegram
const sendToTelegramBtn = document.querySelector(".sendToTelegram");
const sendToTelegramBtn_Mod = document.querySelector(".sendToTelegram_Mod");

// const chatid = "642358579";
const chatid = "@muzuxe";
const token = "1279763695:AAEtuG4ogdGQseuR-ge17AAki6id_TSp-pQ";


//Отправляем текст в наш телеграмм канал
sendToTelegramBtn.addEventListener("click", () => {
    const questionNameTelegram = document.querySelector(".questionNameTelegram").value;
    const questionPhoneTelegram = document.querySelector(".questionPhoneTelegram").value;
    const questionTextTelegram = document.querySelector(".questionTextTelegram").value;
    const text =
        `<b>${questionNameTelegram}</b> \n <i>${questionPhoneTelegram}</i> \n ${questionTextTelegram}`;
    const z = $.ajax({
        type: "POST",
        url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" +
            chatid,
        data: "parse_mode=HTML&text=" + encodeURIComponent(text),
    });
});

//form _modal form
sendToTelegramBtn_Mod.addEventListener("click", () => {
    const questionNameTelegram = document.querySelector(".questionNameTelegram_Mod").value;
    const questionPhoneTelegram = document.querySelector(".questionPhoneTelegram_Mod").value;
    const questionTextTelegram = document.querySelector(".questionTextTelegram_Mod").value;
    const text =
        `<b>${questionNameTelegram}</b> \n <i>${questionPhoneTelegram}</i> \n ${questionTextTelegram}`;
    const z = $.ajax({
        type: "POST",
        url: "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" +
            chatid,
        data: "parse_mode=HTML&text=" + encodeURIComponent(text),
    });
});


   //Mobile touch for Slider