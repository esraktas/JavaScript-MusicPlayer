class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Disfruto", "Carla Morrison", "1.jpeg", "1.mp3"),
    new Music("Okyanus", "Adamlar", "2.jpeg", "2.mp3"),
    new Music("White Rabbit", "Jefferson Airplane", "3.jpeg", "3.mp3")   
];
