import App from './App.svelte';
import {
  Camera,
  Group,
  Scene,
} from 'https://unpkg.com/three@0.117.0/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.117.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.117.0/examples/jsm/loaders/GLTFLoader.js';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
