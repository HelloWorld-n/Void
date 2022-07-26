#!/usr/bin/env ts-node

const $sleepDelay = 10

class Main {
	static sleep(milliseconds: number) {
		const timeInitial: Date = new Date();
		let timeNow: Date = new Date();
		for (; timeNow.getTime() - timeInitial.getTime() < milliseconds;) {
			timeNow = new Date();
		}
	}

	static main(arg: Function) {
		for (let item of arg()) {
			console.clear()
			console.log(item)
			this.sleep($sleepDelay)
		}
	}
}

if (require.main === module) {
	const $overflow = 12
	const $underflow = 3
	const $step = $sleepDelay / 250
	Main.main(
		(function* () {
			let value = ($overflow + $underflow) / 2
			let value_add = 1
			while (true) {
				if (value > $overflow) {
					value_add = 0 - $step
				}
				if (value < $underflow) {
					value_add = $step
				}
				value += value_add
				
				yield "\n".repeat(value) + new Date().toISOString()
			}
		})
	)
}
