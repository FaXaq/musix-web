let musix = require('musix')

import NotesHandler from '@/mixins/NotesHandler'

export default {
  data() {
    return {
      notes: null,
      s: null
    }
  },
  props: {
    showAccidentals: {
      type: Boolean,
      default: false
    },
    multipleChoice: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    selectedNotes() {
      let selectedNotes = []

      for (var i = 0; i < this.selected.length; i++) {
        console.log(this.notes[this.selected[i]])
        selectedNotes[i] = this.notes[this.selected[i]].duplicate()
      }

      return selectedNotes;
    },
    selected() {
      return this.multipleChoice ? this.s : [this.s]
    }
  },
  methods: {
    selectionChanged() {
      this.$emit('select', this.selectedNotes)
    }
  },
  mixins: [NotesHandler],
  created() {
    if (this.showAccidentals) {
      this.notes = this.getAllNotesWithAccidentals(true)
    } else {
      this.notes = this.getAllNotes()
    }

    if (this.multipleChoice) {
      this.s = []
    } else {
      this.s = 0
    }

    this.selectionChanged()
  }
}
