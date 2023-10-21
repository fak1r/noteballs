<template>
  <div class="card has-background-warning-light mt-4 p-4 mb-5">
    <div class="field mt-4">
      <div class="control">
        <textarea
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="textarea"
          placeholder="New note"
          ref="textareaRef"
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

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })

  const textareaRef = ref(null);

  const focusTextarea = () => {
    textareaRef.value.focus();
  }

  defineExpose({
    focusTextarea
  })

</script>