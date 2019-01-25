var utils = {
    play(audioId) {
        var audio = document.getElementById(audioId)
        if (audio) {
            if (window.WeixinJSBridge) {
                window.WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    if (audio.paused) {
                        audio.currentTime = 0
                    }
                    audio.muted = false
                    audio.play()
                    console.log('invoke getNetworkType audio play')
                }, false)
            } else {
                if (audio.paused) {
                    audio.currentTime = 0
                }
                audio.muted = false
                audio.play()
                console.log('invoke getNetworkType2 audio play')
            }

            return true
        }

    },
    pause(audioId) {
        var audio = document.getElementById(audioId)
        if (audio) {
            if (window.WeixinJSBridge) {
                window.WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                    audio.pause()
                    console.log('invoke getNetworkType audio pause')
                }, false)
            }
            else {
                audio.pause()
                console.log('invoke getNetworkType2 audio pause')
            }
            return true
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
