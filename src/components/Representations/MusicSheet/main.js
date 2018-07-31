import abcjs from "abcjs/midi";
import 'abcjs/abcjs-midi.css';
import 'font-awesome/css/font-awesome.min.css';

export default {
  data() {
    return {}
  },
  computed: {
    abcNotes() {
      let notes = ''
      for (var i = 0; i < this.notes.length; i++) {
        notes += this.notes[i].getABCNotation()
      }
      return notes
    },
    tune() {
      let tune = "X:" + this.reference + "\n";
      tune += "T:" + this.title + "\n";
      tune += "C:" + this.composer + "\n";
      tune += "M:" + this.timeSignature + "\n";
      tune += "Q:" + this.tempo + "\n";
      tune += "Z:" + this.transcriptors + "\n";
      tune += "K:" + this.k + "  clef=" + this.clef + "\n";

      tune += '|' + this.abcNotes + '|';
      return tune
    }
  },
  watch: {
    notes() {
      this.generateMidi(this.generateSheet())
    }
  },
  props: {
    k: {
      type: String,
      default: "C"
    },
    title: {
      type: String,
      default: "Music Sheet"
    },
    notes: {
      type: Array,
      default: []
    },
    timeSignature: {
      type: String,
      default: "none"
    },
    reference: {
      type: Number,
      default: 1
    },
    composer: {
      type: String,
      default: "Musix Website"
    },
    url: {
      type: String,
      default: "https://norra.fr"
    },
    tempo: {
      type: String,
      default: "1/4=120"
    },
    transcriptors: {
      type: String,
      default: ""
    },
    comments: {
      type: String,
      default: ""
    },
    clef: {
      type: String,
      default: "treble"
    },
    debug: {
      type: Boolean,
      default: false
    },
    audio: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateSheet() {
      return abcjs.renderAbc(
        "paper",
        this.tune,
        {
          add_classes: true,
          responsive: "resize",
          clickListener: this.clickHandler,
        }
      )
    },
    colorRange(range, color) {
      if (range && range.elements) {
        range.elements.forEach(function (set) {
          set.forEach(function (item) {
            item.setAttribute('fill', color);
          });
        });
      }
    },
    animateCallback(lastRange, currentRange, context) {
      this.colorRange(lastRange, "#000000");
      this.colorRange(currentRange, "#3D9AFC");
    },
    generateMidi(tuneObject) {
      /* todo : make cursor move when playing ?? */
      abcjs.startAnimation(document.getElementById("paper"), tuneObject[0], {
        showCursor: true,
      });

      abcjs.renderMidi(
        "midi",
        this.tune,
        {
          generateDownload: true,
          animate: {
            listener: this.animateCallback,
            target: tuneObject[0],
            qbm: 120
          },
        }
      )
    },
    clickHandler(abcElem, tuneNumber, classes) {
      let note = this.tune.slice(abcElem.startChar, abcElem.endChar);
      console.log('note', note);
    },
  },
  mounted() {
    this.generateMidi(this.generateSheet())
  }
}
