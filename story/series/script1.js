const avatars = {
    default: "images/default.jpg",
    gangster: "images/gangster.jpg",
    lera: "images/lera.jpg",
    liza: "images/liza.jpg",
    teacher: "images/teacher.jpg",
    snusar: "images/snusar.jpg",
    director: "images/dirrector.jpg",
    polina: "images/polina.jpg",
    classroom: "images/classroom.jpg"
};

function getAvatar(speaker) {
    const name = speaker.toLowerCase();
    
    if (name.includes("александр") || name.includes("саша") || name.includes("гангстер")) return avatars.gangster;
    if (name.includes("лера")) return avatars.lera;
    if (name.includes("лиза") || name.includes("мами легенда")) return avatars.liza;
    if (name.includes("учительница") || name.includes("песковская")) return avatars.teacher;
    if (name.includes("снюсарь")) return avatars.snusar;
    if (name.includes("директор")) return avatars.director;
    if (name.includes("полина")) return avatars.polina;
    if (name.includes("класс") || name.includes("вся школа") || name.includes("толпа")) return avatars.classroom;
    
    return avatars.default;
}

const backgrounds = {
    classroom: "images/classroom2.jpg",
    corridor: "images/corridor.jpg",
    cafeteria: "images/cafeteria.jpg",
    schoolyard: "images/schoolyard.jpg"
};

const scenes = [
    { speaker: "...", text: "в наш класс поступил новенький. это изменило мою жизнь..", bg: "classroom" },
    { speaker: "Учительница", text: "и так перед тем как начать наш урок хочу вам представить нашего новенького, его зовут Александр, поприветствуйте новенького.", bg: "classroom" },
    { speaker: "Александр", text: "Эй йоу лузеры, короче теперь учусь с вами. По имени меня не звать. Моя кликуха - гангстер.", bg: "classroom" },
    { speaker: "Класс", text: "... (все молчат и косо палят на александра)", bg: "classroom" },
    { speaker: "Александр", text: "и че вы молчите все? Скукотища..", bg: "classroom" },
    { speaker: "Лера", text: "Эй гангстер, садись ко мне, будем кентаврами, ты мне понравился.", bg: "classroom" },
    { speaker: "Александр", text: "Эй крошка, ну ты тоже не зазнавайся, но раз ты набралась смелости, то так и быть сяду.", bg: "classroom" },
    { speaker: "Лиза Мами Легенда", text: "(факин щит, он такой красавчик, мой гангстерито, как бы с ним замутить...)", bg: "classroom" },
    { speaker: "Учительница", text: "так всем тихо, начинаем урок.", bg: "classroom" },
    { speaker: "Учительница", text: "тема сегодняшнего урока 'Почему Я - Песковская, самая крутая и сваговая коровлева'.", bg: "classroom" },
    { speaker: "Учительница", text: "класс, пишем 10 причин на листочках и сдаем в конце урока.", bg: "classroom" },
    { speaker: "...", text: "где то после урока", bg: "corridor" },
    { speaker: "Лера", text: "Сашуль, а чем ты увлекаешься?", bg: "corridor" },
    { speaker: "Александр", text: "сучка, совсем оборзела, я попросил называть меня Гангстер.", bg: "corridor" },
    { speaker: "Лиза Мами Легенда", text: "Эй гангстер, ты играешь в пабг?", bg: "corridor" },
    { speaker: "Александр", text: "О телочка та в теме, не знаю как тебя зовут, но да - играю.", bg: "corridor" },
    { speaker: "Лиза мами легенда", text: "можешь звать меня просто Мами Легенда. Это моя кликуха.", bg: "corridor" },
    { speaker: "Александр", text: "АХХАХАХАХХАХАХХА, какая еще мами легенда, вы че все странные.", bg: "corridor" },
    { speaker: "Лера", text: "да не обращай внимания на эту фрикуху, она тик токи снимает, гангстер пошли в столовку, замочим по булке с повидлом.", bg: "corridor" },
    { speaker: "...", text: "Александр и Лера уходят в столовку.", bg: "corridor" },
    { speaker: "Лиза мами легенда", text: "КТО ИЗ НАС ФРИКУХА? Я отомщу еще этой дуре. Гангстер будет мой!", bg: "corridor" },
    { speaker: "...", text: "где то в столовке...", bg: "cafeteria" },
    { speaker: "Лера", text: "че покупать будем?", bg: "cafeteria" },
    { speaker: "Александр", text: "какой покупать, я здесь и рубля не оставлю, смотри и учись.", bg: "cafeteria" },
    { speaker: "...", text: "Александр подходит к первоклассникам", bg: "cafeteria" },
    { speaker: "Александр", text: "Эй пиздюки, это моя порция пюрэшки.", bg: "cafeteria" },
    { speaker: "...", text: "Александр вырывает тарелку у школьника и уходит.", bg: "cafeteria" },
    { speaker: "Лера", text: "Гангстер, но так же нельзя..", bg: "cafeteria" },
    { speaker: "Александр", text: "Иди помалкивай лера, а то щас к этой мами легенде вернусь.", bg: "cafeteria" },
    { speaker: "...", text: "Первоклассник чью порцию только что отжал александр оказался младшим бартом Ильи Снюсаря.", bg: "cafeteria" },
    { speaker: "...", text: "Илья снюсарь - одноклассник гангстера, мами легенды, леры и тд...", bg: "cafeteria" },
    { speaker: "Тот самый младшеклассник", text: "Снюсарь, там какой то чел с Лерой из твоего класса отжали мою пюрэху, разберись!", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "Малой щас все будет", bg: "cafeteria" },
    { speaker: "...", text: "снюсарь несется к лере и новенькому", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "эй новенький ты не совсем обнаглел? Схуев ты отбираешь еду у моего мл. брата?", bg: "cafeteria" },
    { speaker: "александр", text: "Я ГАНГСТЕР! ЗАПОМНИ РАЗ И НАВСЕГДА УТЫРОК. да и че ты мне сделаешь?", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "уеба, жду тебя после уроков за школой, покажешь какой ты гангстер.", bg: "cafeteria" },
    { speaker: "Александр", text: "хах, первый учебный день и уже стрела. Ну за школой так за школой.", bg: "cafeteria" },
    { speaker: "...", text: "Снюсарь вырывает тарелку у саши и уходит.", bg: "cafeteria" },
    { speaker: "александр", text: "эй громила ты куда поперся, это моя хавка.", bg: "cafeteria" },
    { speaker: "...", text: "АЛЕКСАНДР со всей дури толкает снюсаря.", bg: "cafeteria" },
    { speaker: "...", text: "снюсарь роняет тарелку", bg: "cafeteria" },
    { speaker: "снюсарь", text: "ух щас будет жарко...", bg: "cafeteria" },
    { speaker: "...", text: "снюсарь оборачивается к гангстеру и хуярит ему пощечину.", bg: "cafeteria" },
    { speaker: "Лера", text: "эй мальчики не ссорьтесь.", bg: "cafeteria" },
    { speaker: "гангстер и снюсарь", text: "заткнись!", bg: "cafeteria" },
    { speaker: "...", text: "начинается потасовка", bg: "cafeteria" },
    { speaker: "Саша", text: "Пошла игра АХАХХАХАХАХАХ", bg: "cafeteria" },
    { speaker: "снюсарь", text: "надеюсь ты приготовил баночку куда будешь собирать зубы", bg: "cafeteria" },
    { speaker: "...", text: "драка в самом разгаре. Саша сплевывает кровь.", bg: "cafeteria" },
    { speaker: "...", text: "в столовку врывается директор", bg: "cafeteria" },
    { speaker: "Директор", text: "эй вы оба, VSE, PROVALIVAYTE, U VAS NOGI VONYAUT", bg: "cafeteria" },
    { speaker: "Директор", text: "завтра оба с родителями в школу!", bg: "cafeteria" },
    { speaker: "Снюсарь", text: "мы не договорили, после уроков за школой.", bg: "cafeteria" },
    { speaker: "Александр", text: "ага..", bg: "cafeteria" },
    { speaker: "...", text: "саша и лера выходят из столовки", bg: "corridor" },
    { speaker: "...", text: "им на встречу идет мами легенда.", bg: "corridor" },
    { speaker: "мами легенда", text: "эй гангстер, здорово тебе наваляли, кто это?", bg: "corridor" },
    { speaker: "Александр", text: "тебе какая разница фрикуха?", bg: "corridor" },
    { speaker: "Лера", text: "Это был снюсарь!", bg: "corridor" },
    { speaker: "Саша", text: "Заткнись дура", bg: "corridor" },
    { speaker: "Мами легенда", text: "МОЙ БЫВШИЙ!?", bg: "corridor" },
    { speaker: "...", text: "после уроков за школой", bg: "schoolyard" },
    { speaker: "Снюсарь", text: "ну че псевдо гангстер, ответиишь за слова?", bg: "schoolyard" },
    { speaker: "Гангстер", text: "ну че громила, до первой крови?", bg: "schoolyard" },
    { speaker: "...", text: "Стрелка началась..", bg: "schoolyard" },
    { speaker: "Мами легенда", text: "блин надеюсь гангстер выиграет, он красавчик", bg: "schoolyard" },
    { speaker: "Лера", text: "ГАНГСТЕР ВПЕРЕД", bg: "schoolyard" },
    { speaker: "Полина Чечерина", text: "Снюсарь любимый давай!", bg: "schoolyard" },
    { speaker: "...", text: "ПРОДОЛЖЕНИЕ СЛЕДУЕТ..", bg: "schoolyard" }
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
        dialogueText.innerText = "Переход на 2 серию...";
        setTimeout(() => { window.location.href = "episode2.html"; }, 2000);
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
        if (speakerName) speakerName.innerText = "КОНЕЦ 1 СЕРИИ";
        if (dialogueText) dialogueText.innerText = "Переход на 2 серию...";
        setTimeout(() => { window.location.href = "episode2.html"; }, 2000);
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