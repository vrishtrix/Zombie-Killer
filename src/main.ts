import { Color, type DefaultLoader, DisplayMode, Engine } from 'excalibur';

import { Hero } from './characters/hero';
import { loader } from './resources';

class Game extends Engine {
	constructor() {
		super({
			displayMode: DisplayMode.FillScreen,
			backgroundColor: new Color(100, 100, 100),
		});
	}

	start(loader: DefaultLoader) {
		const hero = new Hero(
			this.screen.halfDrawWidth,
			this.screen.halfDrawHeight,
		);

		this.add(hero);

		return super.start(loader);
	}
}

const game = new Game();

game.start(loader)
	.then(() => {})
	.catch((err) => console.error(err));
