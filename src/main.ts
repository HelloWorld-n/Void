#!/usr/bin/env ts-node

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
			this.sleep(10)
		}
	}
}

if (require.main === module) {
	Main.main(
		(function* () {
			while (true) {
				yield new Date().toISOString()
			}
		})
	)
}
