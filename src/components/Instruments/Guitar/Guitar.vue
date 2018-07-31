<template>
  <div class="guitar">
    <div class="neck">
      <div class="tuning">
        <div class="nut"
             v-for="string in stringsNumber"
             :class="{ note:
                     (randomOnce && checkRandomPosition(string - 1, 0, strings[string - 1][0])) ||
                     (!randomOnce && checkPosition(string - 1, 0, strings[string - 1][0])) }">
          <p>
            {{ tuning[string - 1].getFullText() }}
          </p>
        </div>
      </div>
      <div class="frets">
        <div class="fret" :class="'fret' + fret" v-for="fret in frets">
          <div class="string" v-for="string in stringsNumber">
            <div class="note"
                 v-if="showAllNotes ||
                       (randomOnce &&
                       checkRandomPosition(string - 1, fret, strings[string - 1][fret])) ||
                       (!randomOnce && checkPosition(string - 1, fret, strings[string - 1][fret]))"
            >
              <p v-if="showNotesNames && randomOnce">
                {{ stringifyNotesArray(strings[string - 1][fret], ' / ') }}
              </p>
              <p v-if="showNotesNames && !randomOnce">
                {{ getNoteNameAtPosition(string - 1, fret, strings[string - 1][fret]) }}
              </p>
            </div>
            <div :class="'string' + string">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./main.js"></script>
<style src="./main.scss" lang="scss" scoped></style>
