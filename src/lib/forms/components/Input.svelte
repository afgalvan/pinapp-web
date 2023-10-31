<script lang="ts">
  import type { LogicField } from '$lib/shared/models';
  import type { HTMLInputTypeAttribute } from 'svelte/elements';

  let clazz = '';
  export { clazz as class };

  export let name: string;
  export let type: HTMLInputTypeAttribute = 'text';
  export let logicField: LogicField<any>;
  export let error = false;
  export let disabled = false;

  let computedClass = '';

  $: {
    let border = error
      ? 'focus:border-red-500 focus:ring-red-500 dark:focus:border-red-500 dark:focus:ring-red-500 border-red-500 dark:border-red-500'
      : 'focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 border-gray-300 dark:border-gray-500';
    computedClass = `${border} block w-full disabled:cursor-not-allowed disabled:opacity-50 p-2.5 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 text-sm rounded-lg ${clazz}`;
  }
</script>

<input
  {disabled}
  {name}
  class={computedClass}
  bind:value={$logicField.value}
  on:blur
  on:change
  on:click
  on:contextmenu
  on:focus
  on:keydown
  on:keypress
  on:keyup
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:paste
  on:input
  {...{ type }}
/>
