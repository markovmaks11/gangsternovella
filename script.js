const startBtn = document.getElementById('startGameBtn');
const episodesBtn = document.getElementById('episodesBtn');
const episodesPanel = document.getElementById('episodesPanel');
const closeEpisodesBtn = document.getElementById('closeEpisodesBtn');
const episodesList = document.getElementById('episodesList');
const settingsBtn = document.getElementById('settingsBtn');
const settingsPanel = document.getElementById('settingsPanel');
const closeSettingsBtn = document.getElementById('closeSettingsBtn');
const musicToggle = document.getElementById('musicToggle');
const volumeSlider = document.getElementById('volumeSlider');
const volumeValue = document.getElementById('volumeValue');

const bgMusic = new Audio();
bgMusic.src = "https://cdn.pixabay.com/download/audio/2022/02/22/audio_d3e5f2c1b7.mp3?filename=lo-fi-hip-hop-109169.mp3";
bgMusic.loop = true;
bgMusic.volume = 0.5;

let musicEnabled = localStorage.getItem('musicEnabled') !== 'false';
let savedVolume = localStorage.getItem('musicVolume');

if (savedVolume !== null) {
    bgMusic.volume = parseFloat(savedVolume) / 100;
} else {
    bgMusic.volume = 0.5;
}

function saveMusicSettings() {
    localStorage.setItem('musicEnabled', musicEnabled);
    localStorage.setItem('musicVolume', bgMusic.volume * 100);
}

function updateMusicState() {
    if (musicEnabled) {
        bgMusic.play().catch(e => console.log("Нажмите на экран для запуска музыки"));
    } else {
        bgMusic.pause();
    }
}

document.addEventListener('click', function startMusicOnFirstClick() {
    if (musicEnabled && bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Музыка не запустилась"));
    }
    document.removeEventListener('click', startMusicOnFirstClick);
});

musicToggle.checked = musicEnabled;
volumeSlider.value = bgMusic.volume * 100;
volumeValue.textContent = Math.round(bgMusic.volume * 100) + '%';

settingsBtn.onclick = () => {
    settingsPanel.classList.add('active');
};

closeSettingsBtn.onclick = () => {
    settingsPanel.classList.remove('active');
};

settingsPanel.onclick = (e) => {
    if (e.target === settingsPanel) {
        settingsPanel.classList.remove('active');
    }
};

musicToggle.addEventListener('change', (e) => {
    musicEnabled = e.target.checked;
    updateMusicState();
    saveMusicSettings();
});

volumeSlider.addEventListener('input', (e) => {
    const volume = parseFloat(e.target.value) / 100;
    bgMusic.volume = volume;
    volumeValue.textContent = Math.round(volume * 100) + '%';
    saveMusicSettings();
});

const seriesList = [
    { number: 1, title: "НОВЕНЬКИЙ", file: "series/episode1.html" },
    { number: 2, title: "ПРИЗНАНИЕ", file: "series/episode2.html" },
    { number: 3, title: "ПОСЛЕДСТВИЯ", file: "series/episode3.html" },
    { number: 4, title: "ДИСС НА ГАНГСТЕРА", file: "series/episode4.html" },
    { number: 5, title: "ВЗАИМНОСТЬ", file: "series/episode5.html" },
    { number: 6, title: "ЛЮБОВЬ И СТРАСТЬ", file: "series/episode6.html" },
    { number: 7, title: "СКОРО", file: "#", comingSoon: true },
    { number: 8, title: "СКОРО", file: "#", comingSoon: true },
    { number: 9, title: "СКОРО", file: "#", comingSoon: true },
    { number: 10, title: "СКОРО", file: "#", comingSoon: true }
];

function generateEpisodesList() {
    episodesList.innerHTML = '';
    
    seriesList.forEach(series => {
        const card = document.createElement('div');
        card.className = 'series-card';
        
        if (series.comingSoon) {
            card.style.opacity = '0.5';
            card.style.cursor = 'not-allowed';
        }
        
        card.innerHTML = `
            <div class="series-number">СЕРИЯ ${series.number}</div>
            <div class="series-title">${series.title}</div>
            ${series.comingSoon ? '<div class="series-badge">⚠️ СКОРО</div>' : '<div class="series-badge">▶ ДОСТУПНО</div>'}
        `;
        
        if (!series.comingSoon) {
            card.onclick = () => {
                window.location.href = series.file;
            };
        }
        
        episodesList.appendChild(card);
    });
}

episodesBtn.onclick = () => {
    generateEpisodesList();
    episodesPanel.classList.add('active');
};

closeEpisodesBtn.onclick = () => {
    episodesPanel.classList.remove('active');
};

episodesPanel.onclick = (e) => {
    if (e.target === episodesPanel) {
        episodesPanel.classList.remove('active');
    }
};

startBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const flash = document.createElement('div');
    flash.style.position = 'fixed';
    flash.style.top = '0';
    flash.style.left = '0';
    flash.style.width = '100%';
    flash.style.height = '100%';
    flash.style.backgroundColor = 'white';
    flash.style.opacity = '0.8';
    flash.style.zIndex = '9999';
    flash.style.transition = 'opacity 0.2s';
    document.body.appendChild(flash);
    
    const cylinderDiv = document.querySelector('.cylinder');
    cylinderDiv.style.transform = 'scale(0.9) rotate(20deg)';
    setTimeout(() => {
        cylinderDiv.style.transform = '';
    }, 150);
    
    setTimeout(() => {
        flash.style.opacity = '0';
        setTimeout(() => {
            flash.remove();
            window.location.href = "series/episode1.html";
        }, 200);
    }, 100);
});

setTimeout(() => {
    if (musicEnabled && bgMusic.paused) {
        bgMusic.play().catch(e => console.log("Нажмите на экран"));
    }
}, 1000);

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1.2s ease';
    setTimeout(() => { document.body.style.opacity = '1'; }, 100);
});

document.addEventListener('contextmenu', (e) => e.preventDefault());