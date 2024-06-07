import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default defineNuxtPlugin({
  parallel: true,
  order: -1, // ensures that this plugin runs before smooth-scroll
  setup() {
    gsap.registerPlugin( ScrollTrigger);
    gsap.registerPlugin( Flip);

    return { provide: { gsap, ScrollTrigger ,Flip } };
  },
});