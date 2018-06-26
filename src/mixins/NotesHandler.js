module.exports = {
  data: function () {
    return {
    }
  },
  methods: {
    stringifyNotesArray(notes, separator) {
      let s = ''
      for (var i = 0; i < notes.length; i++) {
        if (i > 0) s += separator
        s += notes[i].getFullName()
      }
      return s
    },
  }
}
