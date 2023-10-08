<script>
  import { Section, News, HeroHeader } from 'flowbite-svelte-blocks';
  import ShimmerButton from './atomic/ShimmerButton.svelte';
  import { t } from '../../locales/i18n';
</script>

<div class="section-gradient w-screen">
  <Section name="heroDefault">
    <News classA="dark:bg-slate-950" href="#app-zone">
      <ShimmerButton size="sm" class="mr-1">{$t('hero.new')}</ShimmerButton>
      <span class="text-sm font-medium">{$t('hero.out')}</span>
    </News>
    <HeroHeader>
      <svelte:fragment slot="h1">
        {$t('hero.title')}
        <span class="text-gradient">
          {$t('hero.highlight')}
        </span>
      </svelte:fragment>

      <svelte:fragment slot="paragraph">
        {$t('hero.description')}
      </svelte:fragment>
    </HeroHeader>
  </Section>
</div>

<style>
  :is(.dark .section-gradient) {
    background-image: linear-gradient(
      0deg,
      #010617,
      rgba(120, 119, 198, 0.3) 50%,
      #010617 100%
    );
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
