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
    liza_room: "images/lizaroom.jpg",
    studio: "images/studio.jpg",
    classroom: "images/classroom2.jpg",
    director_cabinet: "images/dirrectorcabinet.jpg",
    toilet: "images/toiletschool.jpg",
    corridor: "images/corridor.jpg",
    cafeteria: "images/cafeteria.jpg"
};

const scenes = [
    { speaker: "...", text: "у лизы дома", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "саша мудак! надо записать на него дисс", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "придумаю сначала текст.", bg: "liza_room" },
    { speaker: "...", text: "спустя какое то время", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "фух, ну вроде все, что там получилось..", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "слушай, гангстер, если бы ты открыл страну, то у нее был бы ред флаг. твой член ищет дыру, как гору - рак", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ты бабник? да ты просто урод. ты гей, который хочет взять у снюсаря на рот", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ты гей поневоле - никто не дал, а ты хотел. ты сам - как твой секс: фальстарт и беспредел", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "неудачник - гангстер - оксюморон блять, ты купил пневмат, чтобы детвору пугать", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ты изгой в школе и это твой пик нахуй и предел, только ссунешься ко мне - отправлю тебя в отдел", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ты не в сериале, но на тебя завели очень странных дел", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ты думал, что твой ствол это статус? а твой статус - член: короткий, немытый и пугает лишь свой же ремень", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ты мягче, чем моя эмо подушка. твоя жизнь - это слитая запись в подслушку", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "даже лера кинет тебя в бан, ты не гангстер, а геморрой на спине у обезьян", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "саша - изгой - не приговор, а диагноз, ты конченный мудень ну или просто air поц", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "так ну вроде норм осталось только записать", bg: "liza_room" },
    { speaker: "...", text: "через какое то время на студии", bg: "studio" },
    { speaker: "...", text: "лиза записывает дисс", bg: "studio" },
    { speaker: "...", text: "еще через час", bg: "studio" },
    { speaker: "Лиза мами легенда", text: "фух ну вроде готово", bg: "studio" },
    { speaker: "...", text: "лиза выкладывает дисс в подслушано школы", bg: "studio" },
    { speaker: "...", text: "на следующий день в школе", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "хахахха гангстер, так ты не просто гей, а еще и обезьяний геморрой", bg: "classroom" },
    { speaker: "...", text: "александр яростно бежит к лизе и хватает ее за волосы", bg: "classroom" },
    { speaker: "Александр", text: "сучка тупая, еще вчера мне в любви признавалась, а после отказа на меня дисс записываешь", bg: "classroom" },
    { speaker: "...", text: "лиза вырывает волосы из руки саши", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "ты получил ровно то, что заслужил урод! а заигрывать будешь со снюсарем", bg: "classroom" },
    { speaker: "Александр", text: "ах ты ш - общительная, жди ответку", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "да с удовольствием!", bg: "classroom" },
    { speaker: "...", text: "на следующей перемене после урока в мужском туалете", bg: "toilet" },
    { speaker: "...", text: "саша курит свой вэйп", bg: "toilet" },
    { speaker: "Александр", text: "черт, мне надо придумать ответку..", bg: "toilet" },
    { speaker: "...", text: "в туалет заходит директор и видит, как саша курит вейп", bg: "toilet" },
    { speaker: "Директор", text: "чем ты тут занимаешься, негодник!", bg: "toilet" },
    { speaker: "Директор", text: "сегодня же тебя и твоих родителей жду у себя в кабинете!", bg: "toilet" },
    { speaker: "...", text: "директор отбирает у саши вейп и уходит", bg: "toilet" },
    { speaker: "...", text: "после этого случая, на следующей же перемене", bg: "classroom" },
    { speaker: "...", text: "александр подходит к лизе", bg: "classroom" },
    { speaker: "Александр", text: "лиза любимая, я понимаю, что мы с тобой в плохих отношениях, но мне нужна твоя помощь", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "и че ты дашь мне в замен?", bg: "classroom" },
    { speaker: "Александр", text: "в замен ты сможешь поиграть с моими 19 см..", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "не слишком заманчиво, но ладно, в чем заключается моя помощь?", bg: "classroom" },
    { speaker: "Александр", text: "директор спалил меня с вейпом и забрал его", bg: "classroom" },
    { speaker: "Александр", text: "он скорее всего лежит у него в кабинете", bg: "classroom" },
    { speaker: "Александр", text: "мне надо, чтобы ты отвлекла его, а я забрал свой вейп", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "ты совсем!? это же чистой воды безумие, я не буду этого делать", bg: "classroom" },
    { speaker: "Александр", text: "ну пожалуйста пожалуйста, я сделаю все что попросишь", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "ладно", bg: "classroom" },
    { speaker: "Александр", text: "господи я твой должник", bg: "classroom" },
    { speaker: "...", text: "они подошли к кабинету директора", bg: "corridor" },
    { speaker: "Лиза мами легенда", text: "с богом...", bg: "corridor" },
    { speaker: "...", text: "лиза стучит в кабинет директора", bg: "corridor" },
    { speaker: "Директор", text: "войдите", bg: "director_cabinet" },
    { speaker: "...", text: "в кабинете директора", bg: "director_cabinet" },
    { speaker: "Лиза мами легенда", text: "директор срочно, там песковская упала и сломала спину", bg: "director_cabinet" },
    { speaker: "Директор", text: "ЧТО? бежим скорее", bg: "director_cabinet" },
    { speaker: "...", text: "лиза и директор выбегают из кабинета", bg: "director_cabinet" },
    { speaker: "...", text: "саша незаметно проскальзывает вовнутрь", bg: "director_cabinet" },
    { speaker: "...", text: "саша открывает все ящики, вейпа нигде нет", bg: "director_cabinet" },
    { speaker: "...", text: "саша начинает осматривать шкаф", bg: "director_cabinet" },
    { speaker: "Александр", text: "боже, где же он", bg: "director_cabinet" },
    { speaker: "...", text: "саша поднимает какую то папку и там... ВЕЙП", bg: "director_cabinet" },
    { speaker: "Александр", text: "вот же он, мой родной", bg: "director_cabinet" },
    { speaker: "...", text: "вдруг из за двери слышны шаги", bg: "director_cabinet" },
    { speaker: "...", text: "саша быстро все закрывает и прячется в шкаф с одеждой", bg: "director_cabinet" },
    { speaker: "...", text: "в кабинет заходит директор", bg: "director_cabinet" },
    { speaker: "Директор", text: "боже опять их тупые шуточки", bg: "director_cabinet" },
    { speaker: "...", text: "саша пишет лизе", bg: "director_cabinet" },
    { speaker: "Александр", text: "лиза черт он вернулся раньше времени, придумай, что то", bg: "director_cabinet" },
    { speaker: "Лиза мами легенда", text: "черт саша я знаю, ты где?", bg: "director_cabinet" },
    { speaker: "Александр", text: "сижу у него в кабинете в шкафу с одеждой", bg: "director_cabinet" },
    { speaker: "Лиза мами легенда", text: "потерпи немного я что нибудь придумаю", bg: "director_cabinet" },
    { speaker: "...", text: "тем временем в столовке", bg: "cafeteria" },
    { speaker: "...", text: "песковская поскользнулась на разлитом компоте", bg: "cafeteria" },
    { speaker: "Песковская", text: "АУЧ СТОЛОВКА, СЛИШКОМ ЖЕСТКО", bg: "cafeteria" },
    { speaker: "Песковская", text: "я походу сломала спину", bg: "cafeteria" },
    { speaker: "...", text: "песковская видит лизу", bg: "cafeteria" },
    { speaker: "Песковская", text: "ЛИЗОНЬКА СРОЧНО СКАЖИ ДИРЕКТОРУ ЧТО Я УПАЛА И СЛОМАЛА СПИНУ", bg: "cafeteria" },
    { speaker: "Лиза мами легенда", text: "черт что мне делать..? он мне уже не поверит второй раз..", bg: "cafeteria" },
    { speaker: "...", text: "ПРОДОЛЖЕНИЕ СЛЕДУЕТ...", bg: "cafeteria" }
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
        if (speakerName) speakerName.innerText = "КОНЕЦ 4 СЕРИИ";
        if (dialogueText) dialogueText.innerText = "Переход на 5 серию...";
        setTimeout(() => { window.location.href = "episode5.html"; }, 2000);
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