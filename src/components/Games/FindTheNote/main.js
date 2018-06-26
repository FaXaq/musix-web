let musix = require('musix')

import Guitar from '@/components/Instruments/Guitar/Guitar'
import NotesHandler from '@/mixins/NotesHandler'

export default {
  data() {
    return {
      notes: musix.Note.getNotes(),
      accidentals: musix.Accidental.getAccidentals(),
      currentState: null,
      score: 0
    }
  },
  mixins: [NotesHandler],
  computed: {
    noteToGuess: () => {
      return this.currentState.getFullNameWithPitch()
    }
  },
  watch: {
    score(value) {
      if (value < 0) {
        alert('You lost !')
        /* refresh the page */
        this.$router.go()
      }
    }
  },
  methods: {
    generateRandomState() {
      this.currentState = musix.Note.getRandomNoteWithAccidental()
    },
    getAllNotes() {
      let allNotes = []
      let notes = musix.Note.getNotes()
      let notesLength = notes.length

      /* we go just to the length to add the last alias to the notes array (Ab to Gs) */
      for (var i = 0; i <= notesLength; i++) {
        let newNote = new musix.Note(notes[i % notesLength])
        /* add flat alias to previous element */
        if (!newNote.isCorF() && i > 0) {
          let flattenedNewNote = newNote.duplicate()
          flattenedNewNote.flatten()
          allNotes[allNotes.length - 1].push(flattenedNewNote)
          if (i === notesLength) break
        }
        /* push note only if we're still in the note array for the first time */
        allNotes.push([newNote])
        /* add sharp alias to next element */
        if (!newNote.isBorE() && i < notesLength) {
          let sharpenedNewNote = newNote.duplicate()
          sharpenedNewNote.sharpen()
          allNotes.push([sharpenedNewNote])
        }
      }
      return allNotes
    },
    checkNotes(notes) {
      for (var i = 0; i < notes.length; i++) {
        if (this.currentState.getFullName() === notes[i].getFullName()) {
          return this.validate()
        }
      }

      return this.invalidate()
    },
    validate() {
      alert('Well done !')
      this.score++
      this.generateRandomState()
    },
    invalidate() {
      alert('Try again!')
      alert('It was ' + this.currentState.getFullName())
      this.score--
    }
  },
  created() {
    this.generateRandomState()
    this.notes = this.getAllNotes()
  },
  components: {
    Guitar
  }
}
