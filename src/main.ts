import { initializeSession } from '$lib/shared';
import './app.postcss';
import App from './App.svelte';

initializeSession();

const app = new App({
  target: document.getElementById('app'),
});

export default app;
