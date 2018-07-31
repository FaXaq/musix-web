let musix = require('musix')

import NotePicker from '@/components/Pickers/NotePicker/NotePicker'
import AccidentalPicker from '@/components/Pickers/AccidentalPicker/AccidentalPicker'
import Guitar from '@/components/Instruments/Guitar/Guitar'
import MusicSheet from '@/components/Representations/MusicSheet/MusicSheet'

export default {
  data() {
    return {
      scaleName: 'major',
      note: null,
      accidental: null
    }
  },
  computed: {
    scale() {
      return new musix.Scale({
        name: this.scaleName,
        key: this.note
      })
    },
    ABCKey() {
      return "C"
    }
  },
  methods: {
    noteChanged(notes) {
      this.note = notes[0]

      this.note.setAccidental(this.accidental)
      /* one note at a time for now */
    },
    accidentalChanged(accidental) {
      this.accidental = accidental
      /* one note at a time for now */
      this.note.setAccidental(this.accidental)
    },
  },
  components: {
    NotePicker,
    AccidentalPicker,
    Guitar,
    MusicSheet
  }
}
