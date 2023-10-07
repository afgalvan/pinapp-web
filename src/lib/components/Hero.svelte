<script>
  import { Section, News, HeroHeader } from 'flowbite-svelte-blocks';
  import { t } from '../../locales/i18n';
</script>

<div class="section-gradient w-screen">
  <Section name="heroDefault">
    <News href="https://apps.fsteam.net/people">
      <span
        class="text-xs bg-gradient-to-r from-green-600 to-green-400 rounded-full text-white px-4 py-1.5 mr-3"
      >
        {$t('home.new')}
      </span>
      <span class="text-sm font-medium">{$t('home.out')}</span>
    </News>
    <HeroHeader>
      <svelte:fragment slot="h1">
        {$t('home.title')}
        <span class="text-gradient">Aprehsi</span>
      </svelte:fragment>

      <svelte:fragment slot="paragraph">
        {$t('home.mission.description')}
      </svelte:fragment>
    </HeroHeader>
  </Section>
</div>

<style>
  :is(.dark .section-gradient) {
    background-image: linear-gradient(0deg, #1f2937, #014737 50%, #1f2937 100%);
  }

  :is(.section-gradient) {
    background-image: linear-gradient(0deg, white, #def7ec 50%, white 100%);
  }

  .text-gradient {
    background-image: linear-gradient(45deg, #057a55, #84e1bc 30%, white 60%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400%;
    background-position: 0%;
  }
</style>
