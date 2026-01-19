const fs = require("fs")
const readline = require("readline")

const tracks = JSON.parse(fs.readFileSync("./tracks.json", "utf8"))

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const track = tracks[4]

console.log(
  `Search YouTube for:\n${track.artist} – ${track.track}\n`
)

rl.question("Paste YouTube video ID here: ", (videoId) => {
  track.videoId = videoId.trim()
  fs.writeFileSync("./tracks.json", JSON.stringify(tracks, null, 2))
  console.log("Saved ✔")
  rl.close()
})
