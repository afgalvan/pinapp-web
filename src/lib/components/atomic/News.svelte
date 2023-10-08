<script>
  import { t } from '../../../locales/i18n';
  import ShimmerButton from './ShimmerButton.svelte';
  import { link } from 'svelte-navigator';
</script>

<a
  href="stocks"
  use:link
  class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-slate-950"
>
  <ShimmerButton size="sm" class="mr-1">{$t('hero.new')}</ShimmerButton>
  <span class="text-sm font-medium s-Wq3gtYpWzWI4">{$t('hero.out')}</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class="shrink-0 w-3 h-3 ml-2"
    role="img"
    aria-label="chevron-right-solid"
    viewBox="0 0 6 10"
  >
    <path
      fill="currentColor"
      d="M1.01 10a.997.997 0 0 1-.705-1.705L3.59 5.006.305 1.717A.999.999 0 1 1 1.715.305L5.709 4.3a1 1 0 0 1 0 1.412L1.716 9.707A.998.998 0 0 1 1.01 10Z"
    />
  </svg>
</a>
