const app = new Vue({
    el: "#app",
    data() {
        return {
            soundClips: [
                {
                    artist: "Lepi",
                    title: "Iza oblaka",
                    image: "https://img.youtube.com/vi/EdUbFl93TlY/hqdefault.jpg",
                    audio: "izaOblaka.mp3"
                },

                {
                    artist: "Lepi",
                    title: "Skloni mi se s puta mala",
                    image: "https://img.youtube.com/vi/EdUbFl93TlY/hqdefault.jpg",
                    audio: "mala.mp3"
                },
                {
                    artist: "Hako obić",
                    title: "Ko na ćilimu",
                    image: "https://img.youtube.com/vi/vwMUYFiefvk/hqdefault.jpg",
                    audio: "cilim.mp3"
                },
                {
                    artist: "Efendi",
                    title: "Mata Hari",
                    image: "https://img.youtube.com/vi/9k24ab_u6gs/hqdefault.jpg",
                    audio: "mataHari.mp3"
                },
                {
                    artist: "Elettra Lamborghini",
                    title: "Pistolero",
                    image: "https://img.youtube.com/vi/H1HlUe886Hs/hqdefault.jpg",
                    audio: "pistolero.mp3"
                }
            ],
            currentAudio: null,
            isPlaying: false
        };
    },
    methods: {
        playItem(clip) {
            if (clip.audio === this.currentAudio) {
                this.$refs.audioPlayer.pause();
                this.isPlaying = false;
                this.currentAudio = null;
                return;
            }
            this.currentAudio = clip.audio;
            this.isPlaying = true;
            this.$refs.audioPlayer.load();
            this.$refs.audioPlayer.play();
        }
    }
});
