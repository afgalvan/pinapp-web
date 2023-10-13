<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';
  import { Select, Label } from 'flowbite-svelte';

  const API_KEY = import.meta.env.VITE_RAPID_API_TOKEN;

  let chart: Chart | null = null;
  let symbol = { value: 'AMZN', name: 'Amazon' };
  let interval = { value: '1min', name: '1 minute' };
  let outputsize = { value: '30', name: '30 data points' };

  const symbols = [
    { value: 'AMZN', name: 'Amazon' },
    { value: 'AAPL', name: 'Apple' },
    { value: 'GOOGL', name: 'Google' },
    { value: 'MSFT', name: 'Microsoft' },
    { value: 'META', name: 'Meta' },
    { value: 'TSLA', name: 'Tesla' },
    { value: 'NFLX', name: 'Netflix' },
    { value: 'NVDA', name: 'NVIDIA' },
    { value: 'BA', name: 'Boeing' },
    { value: 'INTC', name: 'Intel' },
    { value: 'CSCO', name: 'Cisco Systems' },
    { value: 'VZ', name: 'Verizon' },
    { value: 'IBM', name: 'IBM' },
    { value: 'DIS', name: 'Walt Disney' },
    { value: 'GS', name: 'Goldman Sachs' },
    { value: 'JPM', name: 'JPMorgan Chase' },
    { value: 'WMT', name: 'Walmart' },
    { value: 'V', name: 'Visa' },
    { value: 'PYPL', name: 'PayPal' },
    { value: 'ORCL', name: 'Oracle' },
    { value: 'CRM', name: 'Salesforce' },
  ];

  const intervals = [
    { value: '1min', name: '1 minute' },
    { value: '5min', name: '5 minutes' },
    { value: '15min', name: '15 minutes' },
    { value: '1h', name: '1 hour' },
    { value: '1day', name: '1 day' },
    { value: '1week', name: '1 week' },
    { value: '1month', name: '1 month' },
  ];

  const outputsizes = [
    { value: '30', name: '30 data points' },
    { value: '60', name: '60 data points' },
    { value: '90', name: '90 data points' },
    { value: '100', name: '100 data points' },
  ];

  const loadData = async () => {
    const response = await fetch(
      `https://twelve-data1.p.rapidapi.com/time_series?symbol=${symbol.value}&interval=${interval.value}&outputsize=${outputsize.value}&format=json`,
      {
        headers: {
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com',
          'X-RapidAPI-Key': API_KEY,
        },
      }
    );

    const result = await response.json();
    if (!result) {
      return;
    }
    if (chart) {
      chart.destroy();
      chart = null;
    }

    const labels = result?.values?.map((value: any) => value.datetime);
    const data = result?.values?.map((value: any) => value.close);

    chart = new Chart(
      (document.getElementById('chart')! as HTMLCanvasElement).getContext(
        '2d'
      )!,
      {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              data,
              label: `${
                symbols.find((s) => s.value == symbol.value)?.name
              } Stock Price`,
              borderColor: 'blue',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: { type: 'time', title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'Price (USD)' } },
          },
        },
      }
    );
  };

  const handleParamChange = (event: any) => {
    loadData();
  };

  onMount(loadData);
</script>

<div class="flex flex-col">
  <div class="flex">
    <Label defaultClass="mr-2">
      Stock
      <Select
        class="mt-2"
        items={symbols}
        bind:value={symbol.value}
        on:change={handleParamChange}
      />
    </Label>
    <Label defaultClass="mr-2">
      Interval
      <Select
        class="mt-2"
        items={intervals}
        bind:value={interval.value}
        on:change={handleParamChange}
      />
    </Label>
    <Label defaultClass="mr-2">
      Output Size
      <Select
        class="mt-2"
        items={outputsizes}
        bind:value={outputsize.value}
        on:change={handleParamChange}
      />
    </Label>
  </div>
  <canvas id="chart" />
</div>
