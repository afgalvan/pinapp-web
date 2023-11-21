<script lang="ts" generics="T">
  import { required } from 'svelte-forms/validators';

  import DynamicFormField from './components/DynamicFormField.svelte';

  import { GradientButton, Spinner } from 'flowbite-svelte';

  import { form as buildForm, field } from 'svelte-forms';

  import ServerResponse from '$lib/components/atomic/ServerResponse.svelte';
  import type { FormField, LogicField } from '$lib/shared/models';

  let clazz = '';
  export { clazz as class };
  export let onSubmit: (formValues: T) => Promise<any> | any;
  export let onSucceed: (formValues: any) => Promise<any> | any = () => {};
  export let withServerMessage = false;
  export let formFields: FormField<T>[];
  export let submitLabel: string;
  export let columns: number = 1;

  const fields: LogicField<any>[] = formFields.map((f) => {
    const validators = [
      ...(f.required ? [required()] : []),
      ...(f.validators ?? []),
    ];
    return field(f.name, f.defaultValue, validators);
  });

  const form = buildForm(...fields);

  let responseMessage: string | undefined;
  let responseError = false;
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
    const data = await onSubmit($form.summary as any);
    responseMessage = data?.message;
    responseError = data?.error;
    isSubmitting = false;
    hasSubmitted = true;
    onSucceed && onSucceed(data);
  };
</script>

<form class="text-left {clazz}" on:submit={submit}>
  <div class="grid gap-2 md:grid-cols-{columns} grid-cols-1">
    {#each fields as logicField, i}
      <DynamicFormField
        field={formFields[i]}
        {logicField}
        disabled={isSubmitting}
      />
    {/each}
  </div>

  <GradientButton
    disabled={isSubmitting}
    size="lg"
    color="green"
    type="submit"
    class="w-full"
  >
    {#if isSubmitting}
      <Spinner class="mr-3" color="white" size="4" />
      {submitLabel}...
    {:else}
      {submitLabel}
    {/if}
  </GradientButton>
  <slot {isSubmitting} {hasSubmitted} {startSubmission} />
  {#if withServerMessage}
    <ServerResponse message={responseMessage} error={responseError} />
  {/if}
</form>
