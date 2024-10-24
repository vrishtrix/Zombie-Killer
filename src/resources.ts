import { ImageSource, Loader } from 'excalibur';

// Spritesheets for the hero - Idle, Walking, Death animations
export const heroIdleLoadable = new ImageSource('./assets/hero/idle.png');
export const heroWalkLoadable = new ImageSource('./assets/hero/walk.png');
export const heroDeathLoadable = new ImageSource('./assets/hero/death.png');

export const loader = new Loader([heroIdleLoadable]);
loader.suppressPlayButton = true;
