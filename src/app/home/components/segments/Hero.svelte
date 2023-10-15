<script>
  import { Section, HeroHeader } from 'flowbite-svelte-blocks';
  import News from '../atomic/News.svelte';
  import Snow from '$lib/components/atomic/Snow.svelte';
</script>

<div class="section-gradient w-screen">
  <Snow>
    <Section name="heroDefault">
      <News />
      <HeroHeader>
        <svelte:fragment slot="h1">
          Bienvenido a
          <span class="text-gradient">Pinapp</span>
        </svelte:fragment>

        <svelte:fragment slot="paragraph">
          Aplicación de gestion de Sabores del Valle
        </svelte:fragment>
      </HeroHeader>
    </Section>
  </Snow>
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
