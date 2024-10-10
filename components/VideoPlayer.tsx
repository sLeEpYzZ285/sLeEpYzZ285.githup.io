import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";

// learn more https://github.com/sampotts/plyr#the-source-setter
const videoSrc: Plyr.SourceInfo = {
  type: "video",
  sources: [
    {
      src: "fmSmcSfC5fk",
      provider: "youtube",
    },
  ],
};
const videoOption: Plyr.Options = {
  autoplay: true,
  muted: true,
  // controls: ['play', 'pause'],
  youtube: {
    noCookie: false,
    rel: 0,
    showinfo: 0,
    iv_load_policy: 3,
    modestbranding: 1,
  },
};

export default function VideoPlayer() {
  return (
    <div>
      <Plyr
        // className="rounded-2xl border-3 border-blue-600"
        // id="player1"
        source={videoSrc}
        options={videoOption}
      />
    </div>
  );
}
