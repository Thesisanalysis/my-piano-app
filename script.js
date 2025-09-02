// Map each musical note to its corresponding .mp3 file
const noteMap = {
    "A0": "audio/mcg_f_021.mp3",
    "A#0": "audio/mcg_f_022.mp3",
    "B0": "audio/mcg_f_023.mp3",
    "C1": "audio/mcg_f_024.mp3",
    "C#1": "audio/mcg_f_025.mp3",
    "D1": "audio/mcg_f_026.mp3",
    "D#1": "audio/mcg_f_027.mp3",
    "E1": "audio/mcg_f_028.mp3",
    "F1": "audio/mcg_f_029.mp3",
    "F#1": "audio/mcg_f_030.mp3",
    "G1": "audio/mcg_f_031.mp3",
    "G#1": "audio/mcg_f_032.mp3",
    "A1": "audio/mcg_f_033.mp3",
    "A#1": "audio/mcg_f_034.mp3",
    "B1": "audio/mcg_f_035.mp3",
    "C2": "audio/mcg_f_036.mp3",
    "C#2": "audio/mcg_f_037.mp3",
    "D2": "audio/mcg_f_038.mp3",
    "D#2": "audio/mcg_f_039.mp3",
    "E2": "audio/mcg_f_040.mp3",
    "F2": "audio/mcg_f_041.mp3",
    "F#2": "audio/mcg_f_042.mp3",
    "G2": "audio/mcg_f_043.mp3",
    "G#2": "audio/mcg_f_044.mp3",
    "A2": "audio/mcg_f_045.mp3",
    "A#2": "audio/mcg_f_046.mp3",
    "B2": "audio/mcg_f_047.mp3",
    "C3": "audio/mcg_f_048.mp3",
    "Db3": "audio/mcg_f_049.mp3", // D-flat is C-sharp
    "D3": "audio/mcg_f_050.mp3",
    "Eb3": "audio/mcg_f_051.mp3", // E-flat is D-sharp
    "E3": "audio/mcg_f_052.mp3",
    "F3": "audio/mcg_f_053.mp3",
    "Gb3": "audio/mcg_f_054.mp3", // G-flat is F-sharp
    "G3": "audio/mcg_f_055.mp3",
    "Ab3": "audio/mcg_f_056.mp3", // A-flat is G-sharp
    "A3": "audio/mcg_f_057.mp3",
    "Bb3": "audio/mcg_f_058.mp3", // B-flat is A-sharp
    "B3": "audio/mcg_f_059.mp3",
    "C4": "audio/mcg_f_060.mp3",
    "Db4": "audio/mcg_f_061.mp3",
    "D4": "audio/mcg_f_062.mp3",
    "Eb4": "audio/mcg_f_063.mp3",
    "E4": "audio/mcg_f_064.mp3",
    "F4": "audio/mcg_f_065.mp3",
    "Gb4": "audio/mcg_f_066.mp3",
    "G4": "audio/mcg_f_067.mp3",
    "Ab4": "audio/mcg_f_068.mp3",
    "A4": "audio/mcg_f_069.mp3",
    "Bb4": "audio/mcg_f_070.mp3",
    "B4": "audio/mcg_f_071.mp3",
    "C5": "audio/mcg_f_072.mp3",
    "Db5": "audio/mcg_f_073.mp3",
    "D5": "audio/mcg_f_074.mp3",
    "Eb5": "audio/mcg_f_075.mp3",
    "E5": "audio/mcg_f_076.mp3",
    "F5": "audio/mcg_f_077.mp3",
    "Gb5": "audio/mcg_f_078.mp3",
    "G5": "audio/mcg_f_079.mp3",
    "Ab5": "audio/mcg_f_080.mp3",
    "A5": "audio/mcg_f_081.mp3",
    "Bb5": "audio/mcg_f_082.mp3",
    "B5": "audio/mcg_f_083.mp3",
    "C6": "audio/mcg_f_084.mp3"
    // The library has notes up to 108, which is C8 on a full piano.
    // You can add more mappings if you want a larger keyboard.
};

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    key.addEventListener('mousedown', () => {
        const note = key.dataset.note;
        if (noteMap[note]) {
            const audio = new Audio(noteMap[note]);
            audio.play();
        }
    });
});
