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
    schoolyard: "images/schoolyard.jpg",
    street: "images/street.jpg",
    street_evening: "images/streetevening.jpg",
    house: "images/house.jpg",
    lera_room: "images/leraroom.jpg",
    snusar_room: "images/snusarroom.jpg",
    school: "images/school.jpg"
};

const scenes = [
    { speaker: "...", text: "драка началась", bg: "schoolyard" },
    { speaker: "...", text: "снюсарь нападает на гангстера", bg: "schoolyard" },
    { speaker: "снюсарь", text: "НА ХА ПОЛУЧАЙ", bg: "schoolyard" },
    { speaker: "...", text: "снюсарь разбил губу гангстеру", bg: "schoolyard" },
    { speaker: "александр", text: "АУЧ СНЮСАРЬ СЛИШКОМ ЖЕСТКО", bg: "schoolyard" },
    { speaker: "Снюсарь", text: "сейчас ты будешь получать ПИЗДЫЫ, потому что ты натворил ХУЙНИ в столовой.", bg: "schoolyard" },
    { speaker: "Снюсарь", text: "в столовой были СЕЛЕБЫ, а ты вместо того, чтобы делать ПОСЕВЫ, украл у моего брата еду", bg: "schoolyard" },
    { speaker: "Александр", text: "это не драка... в противном случае еще раз обращаюсь ко всем..", bg: "schoolyard" },
    { speaker: "Александр", text: "я лучше соберу 300 человек, которые будут болеть за меня до потери пульса", bg: "schoolyard" },
    { speaker: "Александр", text: "потные уходить со стрелки, но болеть по полной, чем собирать всю школу", bg: "schoolyard" },
    { speaker: "Александр", text: "поэтому если вы прямо сейчас хотите болеть за меня", bg: "schoolyard" },
    { speaker: "Александр", text: "быть со мной одним целым", bg: "schoolyard" },
    { speaker: "Александр", text: "у нас еще есть время для того, чтобы все изменить", bg: "schoolyard" },
    { speaker: "Александр", text: "ведь скажите не кайфово смотреть на гангстера, который просто стоит, верно?", bg: "schoolyard" },
    { speaker: "Александр", text: "а гангстеру вдвойне не кайфовее смотреть на людей, которые просто смотрят в телефоны", bg: "schoolyard" },
    { speaker: "Александр", text: "чат, чат, я обиделся...", bg: "schoolyard" },
    { speaker: "Вся школа", text: "убирают телефоны", bg: "schoolyard" },
    { speaker: "...", text: "Снюсарь прослезился", bg: "schoolyard" },
    { speaker: "...", text: "Полина упала на колени в слезах", bg: "schoolyard" },
    { speaker: "Лиза мами легенда", text: "это очень трогательно", bg: "schoolyard" },
    { speaker: "Полина", text: "ГАНГСТЕР ТРОГАЙ МЕНЯ ВЕЗДЕ", bg: "schoolyard" },
    { speaker: "...", text: "Мами легенда начала аплодировать", bg: "schoolyard" },
    { speaker: "...", text: "вся толпа взорвалась в аплодисментах", bg: "schoolyard" },
    { speaker: "...", text: "из за спин резко выходят песковская и директор", bg: "schoolyard" },
    { speaker: "Песковская", text: "Молодцы ребята, я поражена, честно", bg: "schoolyard" },
    { speaker: "Директор", text: "А теперь миритесь и все по домам", bg: "schoolyard" },
    { speaker: "...", text: "Снюсарь и гангстер помирились", bg: "schoolyard" },
    { speaker: "...", text: "Полина и снюсарь пошли вместе домой", bg: "street" },
    { speaker: "Полина", text: "вот это у вас слово пацана было", bg: "street" },
    { speaker: "Снюсарь", text: "да и не говори..", bg: "street" },
    { speaker: "...", text: "тем временем гангстер и лера", bg: "street_evening" },
    { speaker: "Лера", text: "гангстер я в тебя влюбилась", bg: "street_evening" },
    { speaker: "александр", text: "ЧТО!?", bg: "street_evening" },
    { speaker: "Лера", text: "так и скажи что тебе понравилась эта сучка мами легенда", bg: "street_evening" },
    { speaker: "Александр", text: "фу никогда не упоминай имя этой фрикухи", bg: "street_evening" },
    { speaker: "Лера", text: "так что скажешь, я нравлюсь тебе..?", bg: "street_evening" },
    { speaker: "Александр", text: "Пора открыть тебе свою тайну..", bg: "street_evening" },
    { speaker: "Лера", text: "что, какую? неужели ты влюбился в меня?", bg: "street_evening" },
    { speaker: "Александр", text: "нет.. на самом деле, я влюбился...", bg: "street_evening" },
    { speaker: "...", text: "Лера перебивает", bg: "street_evening" },
    { speaker: "Лера", text: "ВСЕ ТАКИ В ЭТУ СУЧКУ МАМИ ЛЕГЕНДУ", bg: "street_evening" },
    { speaker: "Лера", text: "или может быть в нашу тихоню Алону Ведерникову?)))", bg: "street_evening" },
    { speaker: "Александр", text: "да тихо ты", bg: "street_evening" },
    { speaker: "Александр", text: "я влюбился...", bg: "street_evening" },
    { speaker: "Александр", text: "нуууууу фак я не знаю как сказать", bg: "street_evening" },
    { speaker: "Александр", text: "короче..", bg: "street_evening" },
    { speaker: "Александр", text: "В снюсаря", bg: "street_evening" },
    { speaker: "Лера", text: "что, что....? Мне не послышалось это?", bg: "street_evening" },
    { speaker: "Лера", text: "ты..", bg: "street_evening" },
    { speaker: "Лера", text: "ты.. ты гей?", bg: "street_evening" },
    { speaker: "Александр", text: "Не суди книгу по о боже..", bg: "street_evening" },
    { speaker: "Александр", text: "нет! я бишечка", bg: "street_evening" },
    { speaker: "Лера", text: "ну ты же знаешь, что снюсарь встречается с полиной чечевицей?", bg: "street_evening" },
    { speaker: "Александр", text: "знаю и планирую увести своего снюсярика у полины))", bg: "street_evening" },
    { speaker: "Лера", text: "но он натурал!", bg: "street_evening" },
    { speaker: "Александр", text: "еще ни один натурал не устоял перед моими 19 см..)", bg: "street_evening" },
    { speaker: "Лера", text: "так я тоже не смогу перед ними устоять))", bg: "street_evening" },
    { speaker: "Александр", text: "не извини, но ты не мой типаж", bg: "street_evening" },
    { speaker: "...", text: "они дошли до дома леры", bg: "house" },
    { speaker: "лера", text: "ну вот и мой дом, спасибо, что проводил и извини..", bg: "house" },
    { speaker: "Александр", text: "Ага, проваливай уже", bg: "house" },
    { speaker: "...", text: "Лера зашла домой", bg: "house" },
    { speaker: "...", text: "но гангстер еще не знал, что лера записала его признание на диктофон", bg: "lera_room" },
    { speaker: "Лера", text: "какая интересная запись) сейчас скину все снюсарю", bg: "lera_room" },
    { speaker: "...", text: "лера скидывает аудиозапись снюсарю", bg: "lera_room" },
    { speaker: "...", text: "ответ снюсаря приходит почти сразу", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "что.. я не верю своим ушам", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "в меня влюбился..", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "ГАНГСТЕР", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь скидывает эту запись в подслушано школы", bg: "snusar_room" },
    { speaker: "снюсарь", text: "вся школа взорвется от такой новости", bg: "snusar_room" },
    { speaker: "...", text: "ПРОДОЛЖЕНИЕ СЛЕДУЕТ...", bg: "snusar_room" }
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
        if (speakerName) speakerName.innerText = "КОНЕЦ 2 СЕРИИ";
        if (dialogueText) dialogueText.innerText = "Переход на 3 серию...";
        setTimeout(() => { window.location.href = "episode3.html"; }, 2000);
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