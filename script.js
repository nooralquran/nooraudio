document.addEventListener("DOMContentLoaded", function () {
    const audioList = document.getElementById("audio-list");
    const audioPlayer = document.getElementById("audio-player");
    const audioSource = document.getElementById("audio-source");

    // List of available audio files (you need to manually add the filenames here)
    const audioFiles = [
        "audio/day1.mp3",
        // Add more files as you upload them
    ];

    if (audioFiles.length > 0) {
        // Set the latest uploaded audio as today's audio
        const latestAudio = audioFiles[audioFiles.length - 1];
        audioSource.src = latestAudio;
        audioPlayer.load();

        // Populate the archive with only uploaded files
        audioFiles.forEach((file, index) => {
            let listItem = document.createElement("li");
            let audioElement = document.createElement("audio");
            audioElement.controls = true;
            audioElement.src = file;
            listItem.textContent = `Day ${index + 1}: `;
            listItem.appendChild(audioElement);
            audioList.appendChild(listItem);
        });
    }
});

