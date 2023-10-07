<script lang="ts">
  import { Footer, FooterCopyright, Card } from 'flowbite-svelte';
  import { t } from '../../../locales/i18n';
</script>

<Card size="xl" class="sm:p-0 w-screen max-w-none">
  <Footer footerType="logo">
    <FooterCopyright
      href="/"
      by="Andres Galvan."
      copyrightMessage={$t('footer.copyright')}
    />
  </Footer>
</Card>
