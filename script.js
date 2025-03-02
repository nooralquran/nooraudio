document.addEventListener("DOMContentLoaded", function () {
    const audioList = document.getElementById("audio-list");

    // Assuming you will upload 30 audio files: audio/day1.mp3, audio/day2.mp3, etc.
    for (let i = 1; i <= 30; i++) {
        let listItem = document.createElement("li");
        let audioElement = document.createElement("audio");
        audioElement.controls = true;
        audioElement.src = `audio/day${i}.mp3`;
        listItem.textContent = `Day ${i}: `;
        listItem.appendChild(audioElement);
        audioList.appendChild(listItem);
    }
});
