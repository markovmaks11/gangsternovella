const avatars = {
    default: "images/default.jpg",
    gangster: "images/gangster.jpg",
    lera: "images/lera.jpg",
    liza: "images/liza.jpg",
    teacher: "images/teacher.jpg",
    snusar: "images/snusar.jpg",
    director: "images/dirrector.jpg",
    polina: "images/polina.jpg",
    classroom: "images/classroom.jpg",
    alona: "images/alonavedernikova.jpg",
    peskovskaya: "images/teacher.jpg"
};

function getAvatar(speaker) {
    const name = speaker.toLowerCase();
    
    if (name.includes("александр") || name.includes("саша") || name.includes("гангстер")) return avatars.gangster;
    if (name.includes("лера")) return avatars.lera;
    if (name.includes("лиза") || name.includes("мами легенда")) return avatars.liza;
    if (name.includes("учительница") || name.includes("песковская")) return avatars.peskovskaya;
    if (name.includes("снюсарь")) return avatars.snusar;
    if (name.includes("директор")) return avatars.director;
    if (name.includes("полина")) return avatars.polina;
    if (name.includes("класс") || name.includes("вся школа") || name.includes("толпа")) return avatars.classroom;
    if (name.includes("алона") || name.includes("алон") || name.includes("ведерникова")) return avatars.alona;
    
    return avatars.default;
}

const backgrounds = {
    cafeteria: "images/cafeteria.jpg",
    corridor: "images/corridor.jpg",
    director_cabinet: "images/dirrectorcabinet.jpg",
    liza_room: "images/lizaroom.jpg",
    street: "images/street.jpg",
    classroom: "images/classroom2.jpg"
};

const scenes = [
    { speaker: "Лиза мами легенда", text: "да сейчас секунду, я сбегаю к директору", bg: "cafeteria" },
    { speaker: "Песковская", text: "давай быстрее", bg: "cafeteria" },
    { speaker: "...", text: "лиза побежала к директору", bg: "corridor" },
    { speaker: "Лиза", text: "боже а если он не поверит мне...", bg: "corridor" },
    { speaker: "Лиза", text: "ладно будь что будет", bg: "corridor" },
    { speaker: "...", text: "лиза зашла в кабинет директора", bg: "director_cabinet" },
    { speaker: "Лиза", text: "директор, срочно, там песковская упала в столовой и сломала спину", bg: "director_cabinet" },
    { speaker: "Директор", text: "опять врешь, да? иди отсюда", bg: "director_cabinet" },
    { speaker: "Лиза", text: "нет, пожалуйста, на этот раз серьезно", bg: "director_cabinet" },
    { speaker: "Директор", text: "ты уверена? а то опять скажешь, что над тобой пошутили", bg: "director_cabinet" },
    { speaker: "Лиза", text: "нет, клянусь, я сама стала свидетелем на этот раз", bg: "director_cabinet" },
    { speaker: "Директор", text: "ну пошли посмотрим, но если обманула, то пеняй на себя", bg: "director_cabinet" },
    { speaker: "Лиза", text: "идемте скорее", bg: "director_cabinet" },
    { speaker: "...", text: "лиза и директор вышли с кабинета", bg: "director_cabinet" },
    { speaker: "...", text: "весь спотевший саша вылез из шкафа", bg: "director_cabinet" },
    { speaker: "Александр", text: "боже наконец то", bg: "director_cabinet" },
    { speaker: "...", text: "саша в след побежал в столовую", bg: "corridor" },
    { speaker: "...", text: "через пару минут в столовой", bg: "cafeteria" },
    { speaker: "Директор", text: "о боже, что с вами случилось?", bg: "cafeteria" },
    { speaker: "Песковская", text: "помогите, умоляю, кто то разлил компот на пол, я поскользнулась и упала", bg: "cafeteria" },
    { speaker: "Директор", text: "сейчас я вызову скорую", bg: "cafeteria" },
    { speaker: "Алона Ведерникова", text: "песковская, давайте руку, я вам помогу", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "отойди соплячка, я сам ей помогу", bg: "cafeteria" },
    { speaker: "Полина", text: "а ты не приофигел?", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "полина, заткнись, ты не видишь, что человеку нужна помощь", bg: "cafeteria" },
    { speaker: "Полина", text: "вот с ней и оставайся, а я пошла", bg: "cafeteria" },
    { speaker: "...", text: "полина ушла", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "чокнутая", bg: "cafeteria" },
    { speaker: "Лера", text: "алона, хватит снимать, это тебе не шоу представление", bg: "cafeteria" },
    { speaker: "Алона Ведерникова", text: "боже, ладно", bg: "cafeteria" },
    { speaker: "Директор", text: "я вызвал скорую, она скоро будет", bg: "cafeteria" },
    { speaker: "Песковская", text: "помогите мне уже", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "да, конечно, давайте руку", bg: "cafeteria" },
    { speaker: "...", text: "снюсарь и директор подняли песковскую", bg: "cafeteria" },
    { speaker: "...", text: "снюсарь и директор увели песковскую", bg: "cafeteria" },
    { speaker: "...", text: "все начали расходиться", bg: "cafeteria" },
    { speaker: "...", text: "через какое то время в коридоре", bg: "corridor" },
    { speaker: "Александр", text: "УРА, ЛИЗ, А НАМ ОТМЕНЯТ УРОКИ?", bg: "corridor" },
    { speaker: "Лиза", text: "а я откуда знаю? лучше скажи, ты забрал свой вейп?", bg: "corridor" },
    { speaker: "Александр", text: "очень эгоистично с твоей стороны, у нас только увезли в скорой песковскую, а тебе лишь вейп интересен", bg: "corridor" },
    { speaker: "Лиза", text: "а с твоей не менее эгоистично, у нас только что песковская спину сломала, а тебе лишь бы уроки отменили", bg: "corridor" },
    { speaker: "Лиза", text: "так что там по вейпу?", bg: "corridor" },
    { speaker: "Александр", text: "ццц, да забрал я свой вейп", bg: "corridor" },
    { speaker: "...", text: "в то же время где то в кабинете", bg: "classroom" },
    { speaker: "...", text: "снюсарь уже вернулся и нашел полину", bg: "classroom" },
    { speaker: "Снюсарь", text: "зайка ты серьезно меня бросаешь?", bg: "classroom" },
    { speaker: "Полина", text: "да я серьезно, проваливай козел", bg: "classroom" },
    { speaker: "...", text: "полина дала пощечину снюсарю и ушла", bg: "classroom" },
    { speaker: "Снюсарь", text: "боже, с мужиками и то проще, может к гангстеру подкатить", bg: "classroom" },
    { speaker: "...", text: "на улице после уроков", bg: "street" },
    { speaker: "Лиза", text: "ну что, гангстер, идем ко мне?) кое кто мой должник", bg: "street" },
    { speaker: "Александр", text: "будто у меня есть выбор", bg: "street" },
    { speaker: "...", text: "вдруг за их спинами раздаются торопливые шаги", bg: "street" },
    { speaker: "...", text: "кто то окликнул гангстера", bg: "street" },
    { speaker: "Лиза", text: "это же...", bg: "street" },
    { speaker: "Александр", text: "снюсарь", bg: "street" },
    { speaker: "Снюсарь", text: "извините, что отвлекаю вас, саш можно тебя на пару слов?", bg: "street" },
    { speaker: "Александр", text: "да, пошли отойдем, лиз жди здесь", bg: "street" },
    { speaker: "Лиза", text: "ага, оке", bg: "street" },
    { speaker: "...", text: "саша и снюсарь отходят", bg: "street" },
    { speaker: "Снюсарь", text: "саш, помнишь ты мне в любви признавался?", bg: "street" },
    { speaker: "Александр", text: "ну да и что? посмеяться хочешь?", bg: "street" },
    { speaker: "Снюсарь", text: "нет, я хотел сказать, что это взаимно...", bg: "street" },
    { speaker: "Александр", text: "с чего бы мне тебе верить? ты вообще с полиной встречаешься", bg: "street" },
    { speaker: "Снюсарь", text: "мы расстались уже, я понял, что бабы это не мое, мне нравишься ты", bg: "street" },
    { speaker: "Александр", text: "и с чего бы мне верить тебе?", bg: "street" },
    { speaker: "Снюсарь", text: "приходи завтра ко мне домой и сам все увидишь", bg: "street" },
    { speaker: "Александр", text: "до встречи тогда", bg: "street" },
    { speaker: "Снюсарь", text: "пока, любимый, до встречи", bg: "street" },
    { speaker: "...", text: "саша вернулся к лизе", bg: "street" },
    { speaker: "Александр", text: "ну что, идем", bg: "street" },
    { speaker: "Лиза", text: "идем", bg: "street" },
    { speaker: "...", text: "у лизы дома", bg: "liza_room" },
    { speaker: "Лиза", text: "что тебе сказал снюсарь?", bg: "liza_room" },
    { speaker: "Александр", text: "да так, там пустяки, неважно", bg: "liza_room" },
    { speaker: "Лиза", text: "ну ок, давай ложись", bg: "liza_room" },
    { speaker: "...", text: "саша лег на кровать", bg: "liza_room" },
    { speaker: "...", text: "лиза навалилась на сашу и они начали сосаться", bg: "liza_room" },
    { speaker: "Лиза", text: "боже саша ты шикарен", bg: "liza_room" },
    { speaker: "Александр", text: "лиза поспокойнее, ты сейчас меня съешь", bg: "liza_room" },
    { speaker: "Лиза", text: "оу мой гангстерито, у меня есть один фетиш, можешь взять мои волосы в кулак и натянуть", bg: "liza_room" },
    { speaker: "Александр", text: "ого щас", bg: "liza_room" },
    { speaker: "...", text: "саша натянул волосы лизы", bg: "liza_room" },
    { speaker: "Лиза", text: "*стонет* о-даа", bg: "liza_room" },
    { speaker: "Лиза", text: "саш.. это что.. у тебя встал?", bg: "liza_room" },
    { speaker: "Александр", text: "а ты проверь", bg: "liza_room" },
    { speaker: "...", text: "лиза снимает с саши штаны", bg: "liza_room" },
    { speaker: "Лиза", text: "ого, он такой огромный...", bg: "liza_room" },
    { speaker: "Александр", text: "а ты как хотела, моя сучка?) возьми его", bg: "liza_room" },
    { speaker: "...", text: "лиза начинает дрочить саше", bg: "liza_room" },
    { speaker: "Александр", text: "одаааа, быстрее", bg: "liza_room" },
    { speaker: "...", text: "лиза наращивает темп", bg: "liza_room" },
    { speaker: "Александр", text: "мами легенда, целуй меня", bg: "liza_room" },
    { speaker: "...", text: "лиза и саша сосутся", bg: "liza_room" },
    { speaker: "...", text: "саша кончает", bg: "liza_room" },
    { speaker: "Лиза", text: "ауч саша, слишком много спермы", bg: "liza_room" },
    { speaker: "Александр", text: "так слижи ее)", bg: "liza_room" },
    { speaker: "Лиза", text: "нет. дайте мне хоть 5 миллион долларов: нет.", bg: "liza_room" },
    { speaker: "...", text: "лиза делает сигма фейс", bg: "liza_room" },
    { speaker: "...", text: "саша вытирается", bg: "liza_room" },
    { speaker: "Лиза", text: "саш тебе пора идти, а то мама скоро вернется", bg: "liza_room" },
    { speaker: "Александр", text: "ладно, давай, пока", bg: "liza_room" },
    { speaker: "...", text: "саша целует лизу на прощание и уходит", bg: "liza_room" },
    { speaker: "Лиза", text: "боже, это были мои лучшие 15 минут..", bg: "liza_room" },
    { speaker: "...", text: "ПРОДОЛЖЕНИЕ СЛЕДУЕТ...", bg: "liza_room" }
];

let currentSceneIndex = 0;
let waitingForChoice = false;

const bgElement = document.getElementById('background');
const fadeOverlay = document.getElementById('fadeOverlay');
const speakerName = document.getElementById('speakerName');
const dialogueText = document.getElementById('dialogueText');
const dialogueBox = document.getElementById('dialogueBox');
const choicesPanel = document.getElementById('choicesPanel');
const choicesList = document.getElementById('choicesList');
const progressFill = document.getElementById('progressFill');
const backToMenu = document.getElementById('backToMenu');
const avatarImg = document.getElementById('avatarImg');

backToMenu.onclick = () => window.location.href = "../index.html";

function updateProgress() {
    if (scenes.length > 0) {
        progressFill.style.width = ((currentSceneIndex / (scenes.length - 1)) * 100) + '%';
    }
}

function setBackground(bgKey) {
    const bgUrl = backgrounds[bgKey];
    if (bgUrl && bgElement) {
        bgElement.style.backgroundImage = `url('${bgUrl}')`;
        bgElement.style.backgroundSize = 'cover';
        bgElement.style.backgroundPosition = 'center';
    }
}

function updateAvatar(speaker) {
    if (avatarImg) {
        avatarImg.src = getAvatar(speaker);
        const container = document.querySelector('.avatar-container');
        if (container) {
            container.style.animation = 'none';
            setTimeout(() => { container.style.animation = 'avatarPop 0.4s ease-out'; }, 10);
        }
    }
}

function showScene(index) {
    if (index >= scenes.length) {
        speakerName.innerText = "КОНЕЦ СЕРИИ";
        dialogueText.innerText = "Продолжение следует...";
        return;
    }
    const scene = scenes[index];
    if (speakerName) speakerName.innerText = scene.speaker;
    if (dialogueText) dialogueText.innerText = scene.text;
    setBackground(scene.bg);
    updateAvatar(scene.speaker);
    updateProgress();
}

function goToNextScene() {
    if (waitingForChoice) return;
    
    if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        showScene(currentSceneIndex);
    } else {
        if (dialogueBox) dialogueBox.style.cursor = "default";
        if (speakerName) speakerName.innerText = "КОНЕЦ 5 СЕРИИ";
        if (dialogueText) dialogueText.innerText = "Переход на 6 серию...";
        setTimeout(() => { window.location.href = "episode6.html"; }, 2000);
    }
}

if (dialogueBox) {
    dialogueBox.onclick = () => {
        if (waitingForChoice) return;
        goToNextScene();
    };
}

showScene(0);
if (choicesPanel) choicesPanel.classList.remove('active');
waitingForChoice = false;