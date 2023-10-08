<script lang="ts">
  import { onMount } from 'svelte';
  import Chart from 'chart.js/auto';
  import 'chartjs-adapter-date-fns';
  const API_KEY = import.meta.env.VITE_RAPID_API_TOKEN;

  let chart: Chart | null = null;

  const loadData = async () => {
    const response = await fetch(
      'https://twelve-data1.p.rapidapi.com/time_series?symbol=AMZN&interval=1min&outputsize=30&format=json',
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
              label: 'AMZN Stock Price',
              borderColor: 'blue',
              fill: false,
            },
          ],
        },
        options: {
          scales: {
            x: { type: 'time', title: { display: true, text: 'Time' } },
            y: { title: { display: true, text: 'Price' } },
          },
        },
      }
    );
  };

  onMount(() => {
    loadData();
    const intervalId = setInterval(loadData, 15000); // Subsequent loads every 15 seconds

    return () => {
      clearInterval(intervalId); // Cleanup on component destroy
      if (chart !== null) {
        chart.destroy();
        chart = null;
      }
    };
  });
</script>

<canvas id="chart" />
