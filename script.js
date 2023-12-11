var isPlaying = false;
        var playBtn = document.getElementById('playBtn');
        var pauseBtn = document.getElementById('pauseBtn');
        var musica = document.getElementById('musica');
        var disco = document.getElementById('disco');

        function togglePlayPause() {
            if (isPlaying) {
                pauseMusic();
            } else {
                playMusic();
            }
        }

        function playMusic() {
            isPlaying = true;
            playBtn.style.display = 'none';
            pauseBtn.style.display = 'block';
            musica.play();
            disco.style.animationPlayState = 'running';
        }

        function pauseMusic() {
            isPlaying = false;
            playBtn.style.display = 'block';
            pauseBtn.style.display = 'none';
            musica.pause();
            disco.style.animationPlayState = 'paused';
        }
