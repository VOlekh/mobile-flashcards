export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const ADD_ENTRY = 'ADD_ENTRY'

export function receiveEntries (entries) {
    //console.log("receiveEntry")
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}

export function addEntry (entry) {
    //console.log("addEntry")
  return {
    type: ADD_ENTRY,
    entry,
  }
}
