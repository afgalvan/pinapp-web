import { useForm as useSvelteForm } from 'svelte-use-form';
import type { FormProperties } from 'svelte-use-form/models/formProperties';
import { writable } from 'svelte/store';

export function useForm<
  T extends FormProperties = any,
  Keys extends keyof T = ''
>(properties?: T | FormProperties, formName?: string) {
  const form = useSvelteForm<Keys>(properties, formName);

  const isSubmitting = writable(false);
  const isSubmitted = writable(false);

  const onSubmit = (callback: (props?: any) => Promise<void>) => {
    return async (event: Event, props?: any) => {
      event.preventDefault();
      isSubmitted.set(true);

      const subscription = form.subscribe(({ valid }) => {
        if (valid) isSubmitting.set(true);
        const unsubscribe = isSubmitting.subscribe((submitting) => {
          if (valid && submitting)
            callback(props).finally(() => {
              isSubmitting.set(false);
            });
        });
        unsubscribe();
      });
      subscription.unsubscribe();
    };
  };

  return {
    form,
    isSubmitting,
    onSubmit,
    isSubmitted,
  };
}
