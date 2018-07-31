let musix = require('musix')

import NotesHandler from '@/mixins/NotesHandler'

export default {
  data() {
    return {
      strings: [],
      noteShown: false,
      randomString: 0,
      randomOctave: 0
    }
  },
  mixins: [NotesHandler],
  computed: {
    stringsNumber() {
      return this.tuning.length
    },
  },
  watch: {
    notes() {
      if (this.randomOnce) {
        this.getRandomOctave()
        this.getRandomString()
      }
    }
  },
  methods: {
    populateStrings() {
      for (var i = 0; i < this.stringsNumber; i++) {
        this.populateString(i)
      }
    },
    /* insert note in each fret */
    populateString(stringNumber) {
      this.strings[stringNumber] = [[this.tuning[stringNumber].duplicate()]];
      if (this.tuning[stringNumber].getAccidental().isSharp()) {
        /* check for alias if note is sharp */
        this.strings[stringNumber].push(musix.NoteAlias.findFlatAlias(newNote))
      }

      if (this.tuning[stringNumber].getAccidental().isFlat()) {
        /* check for alias if note is sharp */
        this.strings[stringNumber].push(musix.NoteAlias.findSharpAlias(newNote))
      }
      for (var f = 1; f <= this.frets; f++) {
        let newNote = this.tuning[stringNumber].duplicate()
        newNote.sharpenTo(f)
        this.strings[stringNumber].push([newNote])
        if (newNote.getAccidental().isSharp()) {
          /* check for alias if note is sharp */
          this.strings[stringNumber][f].push(musix.NoteAlias.findFlatAlias(newNote))
        }
      }
    },

    getRandomString() {
      this.randomString = Math.floor(Math.random() * (this.stringsNumber - 1))
    },

    getRandomOctave() {
      if (this.frets <= 12) {
        this.randomOctave = 0
      } else {
        this.randomOctave = Math.floor(Math.random() * Math.floor(this.frets / 12))
      }
    },
    checkRandomPosition(stringNumber, fret, currentNotes) {
      /* check if random string is checked and if random octave is checkedx */
      if (stringNumber === this.randomString &&
          Math.floor(fret / 12) === this.randomOctave) {
        for (var i = 0; i < currentNotes.length; i++) {
          for (var j = 0; j < this.notes.length; j++) {
            if (currentNotes[i].getFullName() === this.notes[j].getFullName())
              return true
          }
        }
      }
      return false
    },
    checkPosition(stringNumber, fret, currentNotes) {
      for (var i = 0; i < currentNotes.length; i++) {
        for (var j = 0; j < this.notes.length; j++) {
          if (currentNotes[i].getFullName() === this.notes[j].getFullName()) {
            if (!this.followPitch) return true
            else if (currentNotes[i].getPitch().getValue() === this.notes[j].getPitch().getValue()) {
              return true
            }
          }
        }
      }
    },
    getNoteNameAtPosition(stringNumber, fret, currentNotes) {
      for (var i = 0; i < currentNotes.length; i++) {
        for (var j = 0; j < this.notes.length; j++) {
          if (currentNotes[i].getFullName() === this.notes[j].getFullName())
            return currentNotes[i].getFullText()
        }
      }
    }
  },
  props: {
    /* notes to be shown on the guitar neck */
    notes: {
      type: Array,
    },
    frets: {
      default: 24,
      type: Number,
    },
    followPitch: {
      default: false,
      type: Boolean,
    },
    tuning: {
      default: () => [
        new musix.Note({ name: 'E', sciPitch: 4 }),
        new musix.Note({ name: 'B', sciPitch: 3 }),
        new musix.Note({ name: 'G', sciPitch: 3 }),
        new musix.Note({ name: 'D', sciPitch: 3 }),
        new musix.Note({ name: 'A', sciPitch: 2 }),
        new musix.Note({ name: 'E', sciPitch: 2 }),
      ],
      type: Array,
    },
    name: {
      default: 'Guitar',
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
    /* show notes name on fretboard */
    showNotesNames: {
      default: false,
      type: Boolean
    }
  },
  created() {
    this.populateStrings()
    if (this.randomOnce) {
      this.getRandomOctave()
      this.getRandomString()
    }
  }
}
