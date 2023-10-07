<script lang="ts">
  import { navigate } from 'svelte-navigator';
  import { locale, getLocale } from '../../locales/i18n';

  const defaultLocale = getLocale();
  localStorage.setItem('lang', defaultLocale);

  $: {
    locale.set(defaultLocale);
  }

  navigate(`/${defaultLocale}/`);
</script>
