interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    songName: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    songName: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015,

    }
}

// const songName = 'New Song';
// const { songName: anotherSong } = audioPlayer;

//console.log(audioPlayer, anotherSong);

// const { audioVolume: audio , songDuration: duration, songName: song, details} = audioPlayer;
// const { author } = details;
// console.log( audio, duration, song, author);

const [,, trunks = 'Not found']:  string[] = ['Goku', 'Vegeta', 'Trunks'];



console.log('Personaje 3:', trunks);

export {};