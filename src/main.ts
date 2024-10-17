import { Color, type DefaultLoader, DisplayMode, Engine } from 'excalibur';

import { loader } from './resources';

class Game extends Engine {
	constructor() {
		super({
			displayMode: DisplayMode.FillScreen,
			backgroundColor: new Color(100, 100, 100),
		});
	}

	start(loader: DefaultLoader) {
		return super.start(loader);
	}
}

const game = new Game();

game.start(loader)
	.then(() => {})
	.catch((err) => console.error(err));
