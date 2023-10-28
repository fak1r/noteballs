export function useSaveNote(e, saveNoteFunc){
  if (e.key === 'Enter' && !e.shiftKey && !e.altKey && !e.ctrlKey){
    saveNoteFunc();
  } 
}

