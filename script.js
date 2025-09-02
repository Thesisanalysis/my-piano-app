// Map each musical note to its corresponding .flac file
const noteMap = {
    "A0": "audio/mcg_f_021.flac",
    "A#0": "audio/mcg_f_022.flac",
    "B0": "audio/mcg_f_023.flac",
    "C1": "audio/mcg_f_024.flac",
    "C#1": "audio/mcg_f_025.flac",
    "D1": "audio/mcg_f_026.flac",
    "D#1": "audio/mcg_f_027.flac",
    "E1": "audio/mcg_f_028.flac",
    "F1": "audio/mcg_f_029.flac",
    "F#1": "audio/mcg_f_030.flac",
    "G1": "audio/mcg_f_031.flac",
    "G#1": "audio/mcg_f_032.flac",
    "A1": "audio/mcg_f_033.flac",
    "A#1": "audio/mcg_f_034.flac",
    "B1": "audio/mcg_f_035.flac",
    "C2": "audio/mcg_f_036.flac",
    "C#2": "audio/mcg_f_037.flac",
    "D2": "audio/mcg_f_038.flac",
    "D#2": "audio/mcg_f_039.flac",
    "E2": "audio/mcg_f_040.flac",
    "F2": "audio/mcg_f_041.flac",
    "F#2": "audio/mcg_f_042.flac",
    "G2": "audio/mcg_f_043.flac",
    "G#2": "audio/mcg_f_044.flac",
    "A2": "audio/mcg_f_045.flac",
    "A#2": "audio/mcg_f_046.flac",
    "B2": "audio/mcg_f_047.flac",
    "C3": "audio/mcg_f_048.flac",
    "Db3": "audio/mcg_f_049.flac", // D-flat is C-sharp
    "D3": "audio/mcg_f_050.flac",
    "Eb3": "audio/mcg_f_051.flac", // E-flat is D-sharp
    "E3": "audio/mcg_f_052.flac",
    "F3": "audio/mcg_f_053.flac",
    "Gb3": "audio/mcg_f_054.flac", // G-flat is F-sharp
    "G3": "audio/mcg_f_055.flac",
    "Ab3": "audio/mcg_f_056.flac", // A-flat is G-sharp
    "A3": "audio/mcg_f_057.flac",
    "Bb3": "audio/mcg_f_058.flac", // B-flat is A-sharp
    "B3": "audio/mcg_f_059.flac",
    "C4": "audio/mcg_f_060.flac",
    "Db4": "audio/mcg_f_061.flac",
    "D4": "audio/mcg_f_062.flac",
    "Eb4": "audio/mcg_f_063.flac",
    "E4": "audio/mcg_f_064.flac",
    "F4": "audio/mcg_f_065.flac",
    "Gb4": "audio/mcg_f_066.flac",
    "G4": "audio/mcg_f_067.flac",
    "Ab4": "audio/mcg_f_068.flac",
    "A4": "audio/mcg_f_069.flac",
    "Bb4": "audio/mcg_f_070.flac",
    "B4": "audio/mcg_f_071.flac",
    "C5": "audio/mcg_f_072.flac",
    "Db5": "audio/mcg_f_073.flac",
    "D5": "audio/mcg_f_074.flac",
    "Eb5": "audio/mcg_f_075.flac",
    "E5": "audio/mcg_f_076.flac",
    "F5": "audio/mcg_f_077.flac",
    "Gb5": "audio/mcg_f_078.flac",
    "G5": "audio/mcg_f_079.flac",
    "Ab5": "audio/mcg_f_080.flac",
    "A5": "audio/mcg_f_081.flac",
    "Bb5": "audio/mcg_f_082.flac",
    "B5": "audio/mcg_f_083.flac",
    "C6": "audio/mcg_f_084.flac"
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