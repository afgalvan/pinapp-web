<script lang="ts" generics="T">
  import DynamicFormField from './components/DynamicFormField.svelte';

  import { GradientButton, Spinner } from 'flowbite-svelte';

  import { form as buildForm } from 'svelte-forms';

  import ServerResponse from '$lib/components/atomic/ServerResponse.svelte';
  import { writable } from 'svelte/store';
  import type { FormField, LogicField } from '$lib/shared/models';

  export let formFields: FormField<T>[];

  export let fields: LogicField<any>[];

  const form = buildForm(...fields);

  let clazz = '';
  export { clazz as class };

  export let onSubmit: (formValues: any) => Promise<any>;
  export let onSucceed: (formValues: any) => Promise<any>;
  export let withErrorMessage = false;

  const responseMessage = writable<string | undefined>();

  let isSubmitting = false;
  let hasSubmitted = false;

  function startSubmission(e: MouseEvent) {
    e.stopPropagation();
    isSubmitting = true;
  }

  const submit = async (e: Event) => {
    e.preventDefault();
    await form.validate();

    if (!$form.valid) return;

    isSubmitting = true;
    const data = await onSubmit($form.summary);
    responseMessage.set(data.message);
    isSubmitting = false;
    hasSubmitted = true;
    onSucceed(data);
  };
</script>

<form class={clazz} on:submit={submit}>
  <div class="grid gap-2">
    {#each fields as field, i}
      <DynamicFormField
        field={formFields[i]}
        logicField={field}
        disabled={isSubmitting}
      />
    {/each}
  </div>
  {#if $form.hasError('email.required')}
    <div>Email is required</div>
  {/if}

  <GradientButton
    disabled={isSubmitting}
    color="green"
    size="lg"
    type="submit"
    class="w-full"
  >
    {#if isSubmitting}
      <Spinner class="mr-3" color="white" size="4" />
      Iniciando sesión...
    {:else}
      Iniciar sesión
    {/if}
  </GradientButton>
  <slot {isSubmitting} {hasSubmitted} {startSubmission} />
  {#if withErrorMessage} <ServerResponse message={responseMessage} /> {/if}
</form>
