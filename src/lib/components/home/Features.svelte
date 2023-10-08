<script lang="ts">
  import { Cta } from 'flowbite-svelte-blocks';
  import Tick from '../icons/Tick.svelte';
  import Interval from '../icons/Interval.svelte';
  import Coverage from '../icons/Coverage.svelte';

  import {
    Section,
    HeroHeader,
    FeatureDefault,
    FeatureItem,
  } from 'flowbite-svelte-blocks';

  import GradientCard from '../atomic/GradientCard.svelte';
  import { GradientButton } from 'flowbite-svelte';
  import { link } from 'svelte-navigator';
</script>

<Section name="ctawithimg">
  <Cta ctatype="image">
    <svelte:fragment slot="img">
      <img
        class="w-full dark:hidden"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
        alt="dashboard"
      />
      <img
        class="w-full hidden dark:block"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
        alt="dashboard"
      />
    </svelte:fragment>
    <svelte:fragment slot="h2">
      Financial Data that drives your success.
    </svelte:fragment>
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
      Whether you’re analyst, researcher, or trader - timely access to the
      financial market data is crucial and creates the difference. On top of
      that are the tools that allow you to take full control of the situation
      and succeed in your area. We provide a broad range of solutions, with an
      opportunity to create custom for your needs.
    </p>
  </Cta>
</Section>

<GradientCard dotted>
  <Section name="feature">
    <HeroHeader
      class="max-w-screen-md mb-8 lg:mb-16"
      h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
      pClass="text-gray-500 sm:text-xl dark:text-gray-400"
    >
      <svelte:fragment slot="h2">Why Price Profiler</svelte:fragment>
      <svelte:fragment slot="paragraph">
        A technology-first approach together with exceptional service.
      </svelte:fragment>
    </HeroHeader>
    <FeatureDefault>
      <FeatureItem>
        <svelte:fragment slot="icon">
          <Tick />
        </svelte:fragment>
        <svelte:fragment slot="h3">Tick by tick</svelte:fragment>
        <svelte:fragment slot="paragraph">
          Real-time tick by tick data grants full control over the current stock
          quotes.
        </svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon">
          <Interval />
        </svelte:fragment>
        <svelte:fragment slot="h3">Intervals</svelte:fragment>
        <svelte:fragment slot="paragraph">
          Data is accessible in various aggregated intervals from 1‑minute to
          1-month.
        </svelte:fragment>
      </FeatureItem>
      <FeatureItem>
        <svelte:fragment slot="icon"><Coverage /></svelte:fragment>
        <svelte:fragment slot="h3">Data coverage</svelte:fragment>
        <svelte:fragment slot="paragraph">
          We support around 100 000 symbols across a different range of assets
          available from all over the world.
        </svelte:fragment>
      </FeatureItem>
    </FeatureDefault>
  </Section>
</GradientCard>

<Section name="cta">
  <Cta ctatype="heading">
    <svelte:fragment slot="h2">Start your free trial today</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
      Try Price Profiler Platform. No credit card required.
    </p>
    <a href="stocks" use:link>
      <GradientButton size="sm" color="green" pill>Free trial</GradientButton>
    </a>
  </Cta>
</Section>
