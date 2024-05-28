<script setup lang="ts">
import { withDefaults, ref } from 'vue';
import { throttle } from 'lodash-es';
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
defineOptions({
  name: "ErButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
  nativeType: 'button',
  useThrottle: true,
  throttleDuration: 500
});
const emits = defineEmits<ButtonEmits>();
const slots = defineSlots();
const _ref = ref<HTMLButtonElement>();
const handleBtnClick = (e: MouseEvent) => emits('click', e);
const handleBtnClickThrottle = throttle(handleBtnClick, props.throttleDuration);
defineExpose<ButtonInstance>({
  ref: _ref
})
</script>

<template>
  <component :is="tag" ref="_ref" class="er-button" :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottle(e) : handleBtnClick(e)" :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }">
    <slot />
  </component>
</template>

<style scoped>
@import './style.css';
</style>