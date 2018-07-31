let musix = require('musix')

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
        s += notes[i].getFullText()
      }
      return s
    },
    getAllNotesWithAccidentals(separateDuplicates) {
      let allNotes = []
      let notes = musix.Note.getNotes()
      let notesLength = notes.length

      /* we go just to the length to add the last alias to the notes array (Ab to Gs) */
      for (var i = 0; i <= notesLength; i++) {
        let newNote = new musix.Note({
          name: notes[i % notesLength]
        })
        /* add flat alias to previous element */
        if (!newNote.isCorF() && i > 0) {
          let flattenedNewNote = newNote.duplicate()
          flattenedNewNote.flatten()
          if (separateDuplicates) allNotes.push(flattenedNewNote)
          else allNotes[allNotes.length - 1].push(flattenedNewNote)
          if (i === notesLength) break
        }
        /* push note only if we're still in the note array for the first time */
        if (separateDuplicates) allNotes.push(newNote)
        else allNotes.push([newNote])
        /* add sharp alias to next element */
        if (!newNote.isBorE() && i < notesLength) {
          let sharpenedNewNote = newNote.duplicate()
          sharpenedNewNote.sharpen()
          if (separateDuplicates) allNotes.push(sharpenedNewNote)
          else allNotes.push([sharpenedNewNote])
        }
      }
      return allNotes
    },
    getAllNotes() {
      let allNotes = []
      let notes = musix.Note.getNotes()
      for (var i = 0; i < notes.length; i++) {
        allNotes.push(new musix.Note({
          name: notes[i]
        }))
      }

      return allNotes
    }
  }
}
