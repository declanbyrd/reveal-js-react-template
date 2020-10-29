import Reveal from "/node_modules/reveal.js/dist/reveal.esm.js";
import RevealHighlight from "/node_modules/reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "/node_modules/reveal.js/plugin/notes/notes.esm.js";
import RevealSearch from "/node_modules/reveal.js/plugin/search/search.esm.js";
import RevealZoom from "/node_modules/reveal.js/plugin/zoom/zoom.esm.js";

const options = {
  width: 1440,
  controls: true,
  progress: true,
  history: true,
  center: true,

  transition: "slide", // none/fade/slide/convex/concave/zoom
  plugins: [
    RevealHighlight,
    RevealNotes,
    RevealSearch,
    RevealZoom
  ]
};

Reveal.initialize(options);

const video = document.getElementById('userVideo');

window.addEventListener('load', () => {
  navigator.mediaDevices.getUserMedia({video: { width: 480, height: 480 }, audio: false})
    .then(stream => {
      video.srcObject = stream;
      video.play();
    }).catch(function(err) {
      console.log("An error occurred: " + err);
  });
})