let musix = require('musix')

import PianoNote from '@/components/Instruments/Piano/PianoNote/PianoNote'
import NotesHandler from '@/mixins/NotesHandler'

export default {
  data() {
    return {
      keys: [],
      highlights: [],
      noteShown: false,
      randomString: 0,
      randomOctave: 0
    }
  },
  mixins: [NotesHandler],
  watch: {
    notes() {
      if (this.randomOnce) {
        this.getRandomOctave()
      }
      this.highlight()
    }
  },
  methods: {
    /* insert notes in each key */
    populateKeys() {
      this.keys.push([this.firstNote.duplicate()])

      for (var i = 0; i < this.keysNumber - 1; i++) {
        let newNote = this.keys[i][0].duplicate()
        newNote.sharpen()
        this.keys.push([newNote])
        if (newNote.getAccidental().isSharp()) {
          /* check for alias if note is sharp */
          this.keys[i + 1].push(musix.NoteAlias.findFlatAlias(newNote))
        }
      }
    },
    getRandomOctave() {
      this.randomOctave = Math.floor(Math.random() * (this.keys.length - 1))
    },
    highlight() {
      this.highlights = []
      for (var i = 0; i < this.keys.length; i++) {
        this.highlights[i] = [];
        for (var j = 0; j < this.keys[i].length; j++) {
          for (var n = 0; n < this.notes.length; n++) {
            if (musix.Note.equals(this.keys[i][j], this.notes[n])) {
              this.highlights[i].push(true)
            } else {
              this.highlights[i].push(false)
            }
          }
        }
      }
    }
  },
  props: {
    /* notes to be shown on the guitar neck */
    notes: {
      type: Array,
    },
    // default keyboard configuration
    firstNote: {
      default: () => new musix.Note({ name: 'A', sciPitch: 0 }),
      type: Object
    },
    keysNumber: {
      default: 88,
      type: Number,
    },
    octaves: {
      default: 24,
      type: Number,
    },
    followPitch: {
      default: false,
      type: Boolean,
    },
    name: {
      default: 'Piano',
      type: String,
    },
    /* show all notes on fretboard */
    showAllNotes: {
      default: false,
      type: Boolean,
    },
    /* tell to place notes randomly once on the fretboard */
    randomOnce: {
      default: false,
      type: Boolean
    },
    /* show notes name on keyboard */
    showNotesNames: {
      default: false,
      type: Boolean
    },
  },
  created() {
    this.populateKeys()
    this.highlight()
  },
  components: {
    PianoNote
  }
}
