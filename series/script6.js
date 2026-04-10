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
    peskovskaya: "images/teacher.jpg",
    rusina: "images/rusina.webp"
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
    if (name.includes("русина")) return avatars.rusina;
    
    return avatars.default;
}

const backgrounds = {
    classroom: "images/classroom2.jpg",
    street: "images/street.jpg",
    snusar_room: "images/snusarroom.jpg"
};

const scenes = [
    { speaker: "...", text: "на след день в школе", bg: "classroom" },
    { speaker: "Александр", text: "ну что Лиз, как тебе вчерашний вечер?)", bg: "classroom" },
    { speaker: "Лиза", text: "Саш, все было просто обалденно!", bg: "classroom" },
    { speaker: "Александр", text: "рад быть полезным, надеюсь я поквитался со своим должком?", bg: "classroom" },
    { speaker: "Лиза", text: "считай, что поквитался", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "ребята прикиньте, сегодня химии не будет", bg: "classroom" },
    { speaker: "Лера", text: "да ты че, не она же вчера спину сломала", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "да блин Лера, не будь занудой", bg: "classroom" },
    { speaker: "Снюсарь", text: "эй гангстер, сегодня после пар все в силе?", bg: "classroom" },
    { speaker: "Александр", text: "ну да", bg: "classroom" },
    { speaker: "...", text: "в кабинет зашла Русина", bg: "classroom" },
    { speaker: "Русина", text: "так ребят, начнём наш урок, открываем контурные карты", bg: "classroom" },
    { speaker: "Русина", text: "ваша задача найти на карте остров Эпштейна и отметить его на карте", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "сикс севен сикс севен, остров Эпштейна", bg: "classroom" },
    { speaker: "Полина", text: "не смешно, алона", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "блин а я думала будет смешно", bg: "classroom" },
    { speaker: "Лиза мами легенда", text: "в кабинете стало слишком душно, откройте окна", bg: "classroom" },
    { speaker: "Алона Ведерникова", text: "да, прекратите!", bg: "classroom" },
    { speaker: "Русина", text: "так тишина в классе, у вас вроде задание было, или что за разговорчики, я не поняла. уже все выполнили?", bg: "classroom" },
    { speaker: "...", text: "снюсарь достаёт телефон и начинает тайно снимать русину", bg: "classroom" },
    { speaker: "Русина", text: "так снюсарь, это что такое, быстро убрал видеосъёмку, пока я директора не позвала!", bg: "classroom" },
    { speaker: "Снюсарь", text: "да все-все убираю", bg: "classroom" },
    { speaker: "...", text: "после уроков по пути домой", bg: "street" },
    { speaker: "Снюсарь", text: "ну что сашок, как договаривались, ко мне?", bg: "street" },
    { speaker: "Александр", text: "идём", bg: "street" },
    { speaker: "...", text: "у снюсаря дома", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь неожиданно целует в губы Сашу", bg: "snusar_room" },
    { speaker: "Александр", text: "ты че творишь?", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "так ты же сам вчера просил доказать мои чувства, вот доказательства тебе", bg: "snusar_room" },
    { speaker: "Александр", text: "я думал мы просто все обговорим, но так даже лучше)", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "тогда продолжим?", bg: "snusar_room" },
    { speaker: "Александр", text: "стой, расскажи из за чего вы с Полиной расстались", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "эта дура меня бросила из за того, что я в столовой песковской помог, а потом она вообще меня мудаком назвала, представляешь", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "ну и в тот момент я подумал, что с парнями легче, вот и признался тебе", bg: "snusar_room" },
    { speaker: "Александр", text: "то есть ты со мной не по любви, а потому что «так легче»?", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "нет, нет, ты все не так понял, у меня правда есть к тебе чувства!", bg: "snusar_room" },
    { speaker: "Александр", text: "а откуда бы они появились, если ещё вчера ты был натуралом в отношениях с Полиной", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "да я не знаю, ещё после твоего признания я постоянно думал о тебе, но старался отгонять эти мысли", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "а щас я понял свою ориентацию и понял, что хочу быть с тобой", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "ну а ещё ты сильный, умный, красивый и я уверен, что в глубине души ты очень добрый", bg: "snusar_room" },
    { speaker: "Александр", text: "ну ладно, я тебе верю", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "а из за чего я тебе понравился?", bg: "snusar_room" },
    { speaker: "Александр", text: "не знаю если честно, просто вот понравился, я не волен своим чувствам и сердцу", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "давай тогда просто продолжим то, с чего начали?", bg: "snusar_room" },
    { speaker: "Александр", text: "давай", bg: "snusar_room" },
    { speaker: "...", text: "Александр и снюсарь жёстко целуются в засос", bg: "snusar_room" },
    { speaker: "...", text: "их языки сплетаются в страстном танце", bg: "snusar_room" },
    { speaker: "Александр", text: "снюсарь у тебя что ли встал?", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "как я чувствую у тебя тоже", bg: "snusar_room" },
    { speaker: "Александр", text: "давай тогда освободимся от одежды?", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "раздень меня", bg: "snusar_room" },
    { speaker: "...", text: "Александр раздевает снюсаря", bg: "snusar_room" },
    { speaker: "Александр", text: "теперь ты меня)", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь раздевает Сашу", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "у тебя такой большой член..", bg: "snusar_room" },
    { speaker: "Александр", text: "хочешь его попробовать", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "если честно, то мечтаю, но сначала назови меня как нибудь грязно", bg: "snusar_room" },
    { speaker: "...", text: "Саша наклоняется к уху снюсаря", bg: "snusar_room" },
    { speaker: "Александр", text: "(шепотом) пидорок мой", bg: "snusar_room" },
    { speaker: "...", text: "член снюсаря окончательно встал и оттуда потекла смазка", bg: "snusar_room" },
    { speaker: "Александр", text: "ого, не знал что тебя это так заводит", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "меня это очень сильно заводит", bg: "snusar_room" },
    { speaker: "Александр", text: "отсоси мне пожалуйста", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь аккуратно берёт огромный член Александра в рот", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь начинает сосать", bg: "snusar_room" },
    { speaker: "...", text: "александр берёт снюсаря за волосы и задаёт темп", bg: "snusar_room" },
    { speaker: "Александр", text: "рот шире открой и соси глубже", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь начинает давиться слюнями", bg: "snusar_room" },
    { speaker: "Александр", text: "не давись, шлюха", bg: "snusar_room" },
    { speaker: "...", text: "Саша оборачивает снюсаря к себе жопой", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "Саш, может сегодня без анала..?", bg: "snusar_room" },
    { speaker: "Александр", text: "нет уже поздно", bg: "snusar_room" },
    { speaker: "...", text: "Александр резко вошёл в снюсаря двумя пальцами", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "АУЧ", bg: "snusar_room" },
    { speaker: "Александр", text: "терпи давай, мне в тебя ещё хуй совать", bg: "snusar_room" },
    { speaker: "...", text: "Александр запихивает в снюсаря ещё два пальца", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "АУ", bg: "snusar_room" },
    { speaker: "Александр", text: "терпи я сказал и заткнись, пока кляп в рот не вставил", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь резко замолчал", bg: "snusar_room" },
    { speaker: "Александр", text: "мой послушный пёсик", bg: "snusar_room" },
    { speaker: "...", text: "Александр резко вошёл в снюсаря", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "аххх... ахххх, давай жестче, ещё жёстче", bg: "snusar_room" },
    { speaker: "...", text: "Александр долбит снюсаря", bg: "snusar_room" },
    { speaker: "...", text: "они одновременно кончают", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "это был лучший секс в моей жизни, спасибо тебе", bg: "snusar_room" },
    { speaker: "...", text: "Александр усмехнулся", bg: "snusar_room" },
    { speaker: "Александр", text: "ты будешь моим парнем, дурень?", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "конечно буду!", bg: "snusar_room" },
    { speaker: "Александр", text: "закрепим наши отношения поцелуем", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь и Александр снова засосались", bg: "snusar_room" },
    { speaker: "Александр", text: "извини, но мне пора идти, уже поздно", bg: "snusar_room" },
    { speaker: "Снюсарь", text: "хорошо, любовь моя, напиши как дома будешь", bg: "snusar_room" },
    { speaker: "Александр", text: "ага, давай", bg: "snusar_room" },
    { speaker: "...", text: "Саша ушёл домой", bg: "snusar_room" },
    { speaker: "...", text: "снюсарь так и остался лежать голым в эйфории", bg: "snusar_room" },
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
        if (speakerName) speakerName.innerText = "КОНЕЦ 6 СЕРИИ";
        if (dialogueText) dialogueText.innerText = "Продолжение следует...";
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