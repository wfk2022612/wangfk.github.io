var utils = {
    playAudio(audioId) {
        var playId = setInterval(() => {
            if (this.play(audioId)) {
                window.clearInterval(playId)
            }
        }, 100)
    },
    play(audioId) {
        var audio = document.getElementById(audioId)
        if (audio) {
            if (window.canplay === true) {
                if (audio.muted === true) {
                    audio.currentTime = 0
                }
                audio.muted = false
                audio.play()
                console.log('audio play')
                return true
            }
        }
    },
    pauseAudio(audioId) {
        var audio = document.getElementById(audioId)
        audio.muted = true
        console.log('audio pause')
    },
    is_weixn() {
        var ua = navigator.userAgent.toLowerCase()
        return ua.match(/MicroMessenger/i) === 'micromessenger'
    },
    isIOS() {
        return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    },
    isAndroid() {
        return /(Android)/i.test(navigator.userAgent)
    }

}

export default utils
