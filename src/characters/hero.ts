import {
	Actor,
	Animation,
	type Engine,
	Keys,
	SpriteSheet,
	Vector,
	range,
} from 'excalibur';
import { heroIdleLoadable } from '../resources';

const idleSpriteSheet = SpriteSheet.fromImageSource({
	image: heroIdleLoadable,
	grid: {
		rows: 8,
		columns: 6,
		spriteWidth: 16,
		spriteHeight: 32,
	},
});

const idleDownAnim = Animation.fromSpriteSheet(
	idleSpriteSheet,
	range(0, 7),
	200,
);

export class Hero extends Actor {
	private health = 100;
	public inventory = [];

	constructor(
		public x: number,
		public y: number,
	) {
		super({
			pos: new Vector(x, y),
		});
	}

	onInitialize(_engine: Engine) {
		this.graphics.use(idleDownAnim);
	}

	update(engine: Engine, delta: number) {
		// WIP
		if (engine.input.keyboard.isHeld(Keys.W)) {
			this.actions.moveTo(new Vector(this.x, this.y - 50), 50);
		}

		super.update(engine, delta);
	}

	onPostUpdate(_engine: Engine, _delta: number) {
		if (this.health <= 0) {
			// The player has died.
			console.log('Game over! Player has died!');
			return;
		}
	}
}
