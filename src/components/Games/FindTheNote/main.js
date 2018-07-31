let musix = require('musix')

import Guitar from '@/components/Instruments/Guitar/Guitar'
import Piano from '@/components/Instruments/Piano/Piano'
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
    this.notes = this.getAllNotesWithAccidentals()
  },
  components: {
    Guitar,
    Piano
  }
}
