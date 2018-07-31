let musix = require('musix')

export default {
  data() {
    return {
      selectedAccidental: null,
      accidentals: [
        new musix.Accidental(musix.Accidental.getFlat()),
        new musix.Accidental(),
        new musix.Accidental(musix.Accidental.getSharp())
      ]
    }
  },
  methods: {
    selectionChanged() {
      this.$emit('select', this.selectedAccidental)
    }
  },
  created() {
    this.selectedAccidental = this.accidentals[1]

    this.selectionChanged()
  }
}
