<script lang="ts">
  import { useForm } from 'svelte-use-form';

  import ServerResponse from '$lib/components/atomic/ServerResponse.svelte';
  import { writable } from 'svelte/store';

  let clazz = '';
  export { clazz as class };

  export let onSubmit: (formValues: any) => Promise<any>;
  export let onSucceed: (formValues: any) => Promise<any>;
  export let withErrorMessage = false;

  const form = useForm();
  const responseMessage = writable<string | undefined>();

  let isSubmitting = false;
  let hasSubmitted = false;

  function startSubmission(e: MouseEvent) {
    e.stopPropagation();
    isSubmitting = true;
  }

  const submit = async () => {
    if (!$form.valid) {
      return;
    }
    isSubmitting = true;
    const data = await onSubmit($form.values as any);
    responseMessage.set(data.message);
    isSubmitting = false;
    hasSubmitted = true;
    onSucceed(data);
  };
</script>

<form class={clazz} on:submit|preventDefault={submit} use:form>
  <slot {isSubmitting} {hasSubmitted} {startSubmission} />
  {#if withErrorMessage} <ServerResponse message={responseMessage} /> {/if}
</form>
