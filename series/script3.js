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
    classroom: "images/classroom2.jpg",
    corridor: "images/corridor.jpg",
    cafeteria: "images/cafeteria.jpg",
    schoolyard: "images/schoolyard.jpg",
    street: "images/street.jpg",
    street_evening: "images/streetevening.jpg",
    house: "images/house.jpg",
    lera_room: "images/leraroom.jpg",
    snusar_room: "images/snusarroom.jpg",
    school: "images/school.jpg",
    director_cabinet: "images/dirrectorcabinet.jpg",
    liza_room: "images/lizaroom.jpg",
    alexander_room: "images/alexandrroom.jpg"
};

const scenes = [
    { speaker: "...", text: "на след день в школе", bg: "classroom" },
    { speaker: "Класс", text: "все косо пялят на александра", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "хахах все то думали ты гангстер, а ты голубенький", bg: "classroom" },
    { speaker: "Полина", text: "эй гангстер, даже не смей подходить к моему снюсарю", bg: "classroom" },
    { speaker: "Снюсарь", text: "я не ожидал от тебя такого гангстер.. не приближайся ко мне", bg: "classroom" },
    { speaker: "Лера", text: "хах.. гангстер теперь изгой", bg: "classroom" },
    { speaker: "Александр", text: "Что происходит? Откуда вы все узнали..? Лера это ты сучка всем сказала?", bg: "classroom" },
    { speaker: "Класс", text: "а ты зайди в подслушано нашей школы и все поймешь", bg: "classroom" },
    { speaker: "...", text: "Александр заходит в подслушано школы", bg: "classroom" },
    { speaker: "Александр", text: "ОТКУДА ЗДЕСЬ ЭТА ЗАПИСЬ, ЛЕРА Я ТЕБЯ ПРИБЬЮ", bg: "classroom" },
    { speaker: "...", text: "в класс заходит директор", bg: "classroom" },
    { speaker: "Директор", text: "Александр, снюсарь и лера - живо ко мне в кабинет!", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "(блин мне его даже жалко...)", bg: "classroom" },
    { speaker: "...", text: "в кабинете директора", bg: "director_cabinet" },
    { speaker: "Директор", text: "ну что рассказывайте по очереди", bg: "director_cabinet" },
    { speaker: "Директор", text: "Александр кого ты там убить собрался?", bg: "director_cabinet" },
    { speaker: "Директор", text: "лера, снюсарь, что за травля новенького и откуда эта чертова запись, вы же понимаете, что это уголовно наказуемо?", bg: "director_cabinet" },
    { speaker: "Александр", text: "да мне плевать, я не виноват! Эта чертовка лера слила мое признание в подслушано школы!", bg: "director_cabinet" },
    { speaker: "Снюсарь", text: "это была не лера!", bg: "director_cabinet" },
    { speaker: "Директор", text: "а кто тогда? Александр? Алона?", bg: "director_cabinet" },
    { speaker: "Снюсарь", text: "Лера скинула эту запись мне, а я слил ее в подслушано школы", bg: "director_cabinet" },
    { speaker: "Директор", text: "и зачем?", bg: "director_cabinet" },
    { speaker: "Снюсарь", text: "чтобы все посмеялись над александром", bg: "director_cabinet" },
    { speaker: "Директор", text: "короче, я не хочу выслушивать этот детский сад, живо удалили все записи", bg: "director_cabinet" },
    { speaker: "Директор", text: "и хоть еще одна надсмешка над александром, мигом всех выпру из школы", bg: "director_cabinet" },
    { speaker: "Директор", text: "а ты александр следи за словами!", bg: "director_cabinet" },
    { speaker: "...", text: "ребята вернулись в класс", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "сашенька, как все прошло?", bg: "classroom" },
    { speaker: "Александр", text: "отвали тупица", bg: "classroom" },
    { speaker: "...", text: "лиза расстроено ушла на свое место", bg: "classroom" },
    { speaker: "...", text: "урок прошел спокойно, но с александром никто больше не общался", bg: "classroom" },
    { speaker: "...", text: "после уроков по пути домой", bg: "street" },
    { speaker: "...", text: "лиза мами легенда нагоняет александра", bg: "street" },
    { speaker: "лиза мами легенда", text: "саша, постой!", bg: "street" },
    { speaker: "Александр", text: "че тебе?", bg: "street" },
    { speaker: "Лиза мами легенда", text: "почему ты меня отталкиваешь? что с тобой? почему ты такой холодный? я разве заслужила это?", bg: "street" },
    { speaker: "...", text: "лиза заплакала", bg: "street" },
    { speaker: "Александр", text: "ты правда так хочешь со мной общаться?", bg: "street" },
    { speaker: "Лиза мами легенда", text: "мне кажется я в тебя вообще влюбилась", bg: "street" },
    { speaker: "...", text: "саша потупился", bg: "street" },
    { speaker: "...", text: "спустя пару минут александр засосал лизу мами легенду", bg: "street" },
    { speaker: "...", text: "лиза не оттолкнула сашу и они сосались минуты 3", bg: "street" },
    { speaker: "...", text: "лиза отходит от саши", bg: "street" },
    { speaker: "Лиза мами легенда", text: "ты чего? тебе же снюсарь нравится", bg: "street" },
    { speaker: "александр", text: "извини, я импульсивно", bg: "street" },
    { speaker: "Лиза мами легенда", text: "а пошли ко мне?)", bg: "street" },
    { speaker: "Александр", text: "что? зачем?", bg: "street" },
    { speaker: "Лиза мами легенда", text: "пошли, пошли, потом все узнаешь", bg: "street" },
    { speaker: "...", text: "они пришли к лизе домой", bg: "liza_room" },
    { speaker: "Александр", text: "ну и зачем мы пришли?", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ложись на кровать, буду смотреть на твои 19 см", bg: "liza_room" },
    { speaker: "александр", text: "ЧЕГО?", bg: "liza_room" },
    { speaker: "...", text: "мами легенда толкнула александра на кровать", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "заткнись и закрой глаза", bg: "liza_room" },
    { speaker: "...", text: "лиза легла у ног саши и начала снимать с него штаны", bg: "liza_room" },
    { speaker: "...", text: "саша перехватывает руку лизы", bg: "liza_room" },
    { speaker: "александр", text: "погоди, но мы не можем так...", bg: "liza_room" },
    { speaker: "лиза мами легенда", text: "но почему?", bg: "liza_room" },
    { speaker: "Александр", text: "мы одноклассники, видимся второй день и вообще мне нравится снюсарь!", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "но ты меня засосал!", bg: "liza_room" },
    { speaker: "Александр", text: "да я же сказал, это было импульсивно!", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "засоси меня тогда еще раз также импульсивно((", bg: "liza_room" },
    { speaker: "Александр", text: "ладно только быстро", bg: "liza_room" },
    { speaker: "...", text: "александр и лиза сосутся около 2 минут", bg: "liza_room" },
    { speaker: "Александр", text: "лиз извини, но мне пора", bg: "liza_room" },
    { speaker: "...", text: "александр спешно уходит", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "и что это сейчас было...", bg: "liza_room" },
    { speaker: "Лиза мами легенда", text: "ладно надо заняться учебой", bg: "liza_room" },
    { speaker: "...", text: "тем временем дома у саши", bg: "alexander_room" },
    { speaker: "александр", text: "фак и как мне добиться снюсаря...?", bg: "alexander_room" },
    { speaker: "...", text: "ПРОДОЛЖЕНИЕ СЛЕДУЕТ...", bg: "alexander_room" }
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
        if (speakerName) speakerName.innerText = "КОНЕЦ 3 СЕРИИ";
        if (dialogueText) dialogueText.innerText = "Переход на 4 серию...";
        setTimeout(() => { window.location.href = "episode4.html"; }, 2000);
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