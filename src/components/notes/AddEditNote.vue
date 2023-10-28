<template>
  <div
    class="card mt-4 p-4 mb-5"
    :class="`has-background-${ bgColor }-light`"
  >
    <label
      v-if="label"
      class="label"
    >
      {{ label }}
    </label>
    <div class="field mt-4">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
          v-autofocus
          maxlength="200"
        ></textarea>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue';
  import { vAutofocus } from '@/directives/vAutofocus.js'

  const emit = defineEmits(['update:modelValue']);

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'warning'
    },
    placeholder: {
      type: String,
      default: 'Type something...'
    },
    label: {
      type: String
    }
  })

  const textareaRef = ref(null);

  const focusTextarea = () => {
    textareaRef.value.focus();
  };

  defineExpose({
    focusTextarea
  });

/* 
  Line break
*/

function ctrlShiftEnterLineBreak() {

  const pressedKeys = new Set();

  document.addEventListener('keydown', function(event) {

    if (event.key === "Enter"){
      event.preventDefault();
    }

    const target = event.target;
    pressedKeys.add(event.code);

    const shiftEnterPressed = pressedKeys.has('ShiftLeft') && pressedKeys.has('Enter');
    const ctrlEnterPressed = pressedKeys.has('ControlLeft') && pressedKeys.has('Enter');

    if (target === textareaRef.value) {
      const textarea = textareaRef.value;
      const selectionStart = textarea.selectionStart;
      const selectionEnd = textarea.selectionEnd;

      if (shiftEnterPressed || ctrlEnterPressed) {
        // Get the current value of the textarea
        const currentValue = textarea.value;

        // Split the text into two parts (before and after the selection)
        const beforeSelection = currentValue.substring(0, selectionStart);
        const afterSelection = currentValue.substring(selectionEnd);

        // Insert a newline character in the appropriate place
        const newValue = beforeSelection + '\n' + afterSelection;

        // Update the value of the textarea
        textarea.value = newValue;

        // Set the selection to after the inserted newline
        textarea.selectionStart = selectionStart + 1;
        textarea.selectionEnd = selectionStart + 1;

        pressedKeys.delete(event.code);
      } 
    }

    
  });

}

ctrlShiftEnterLineBreak();


</script>