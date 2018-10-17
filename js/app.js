const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateThat() {
    voices = this.getVoices();
    const voiceOptions = voices.map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
//    }).join('')
    voicesDropdown.innerHTML = voiceOptions;
    
}

function setVoice() {
    let voiceToBeUsed;
    let userDecision = this.value;
    voices.forEach(voice => {
        if (voice.name === userDecision) {
            voice = voiceToBeUsed;
        }
    })
    
    msg.voice = this.value;
}

function talkToMe() {
//    speechSynthesis.speak(msg);
}

speechSynthesis.addEventListener('voiceschanged', populateThat);
speakButton.addEventListener('click', talkToMe);
voicesDropdown.addEventListener('change', setVoice);