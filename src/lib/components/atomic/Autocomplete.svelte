<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let items: string[] = [];
  export let label: string = '';
  export let value: string = '';

  let filteredItems: string[] = [];
  let showDropdown = false;

  const dispatch = createEventDispatcher();

  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    filteredItems = items.filter((item) => item.toLowerCase().includes(input));
    showDropdown = !!filteredItems.length;
  };

  const handleItemClick = (item) => {
    value = item;
    showDropdown = false;
    dispatch('change', value);
  };
</script>

<div class="autocomplete">
  <label>{label}</label>
  <input type="text" bind:value on:input={handleInput} />
  {#if showDropdown}
    <div class="dropdown">
      {#each filteredItems as item}
        <div class="dropdown-item" on:click={() => handleItemClick(item)}>
          {item}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .autocomplete {
    position: relative;
  }

  .dropdown {
    position: absolute;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 1000;
  }

  .dropdown-item {
    padding: 8px;
    cursor: pointer;
  }

  .dropdown-item:hover {
    background-color: #f0f0f0;
  }
</style>
