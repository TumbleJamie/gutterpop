
  async function start() {
    const res = await fetch("./tracks.json")
    const tracks = await res.json()

    const playable = tracks.filter(t => t.videoId)
    const pick = playable[Math.floor(Math.random() * playable.length)]

    const iframe = document.getElementById("player")
    iframe.src =
      `https://www.youtube.com/embed/${pick.videoId}` +
      `?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1`
  }

  start()
