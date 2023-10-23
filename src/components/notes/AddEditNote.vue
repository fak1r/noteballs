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
          maxlength="100"
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

</script>