
# Part1 - Road to Part2

### Objective: Create views to interact with the models

Use Backbone's API on [Views](http://backbonejs.org/#View).

Create these views:

- **GameView**
	- Its model will be an instance of `Game`
	- This view will contain three other views: HudView, DiceView, and ControlsView
	- The model will be shared with all the inner views
- **HudView**
	- The method `render` uses a [template](http://underscorejs.org/#template) to render the following information:
		- Victory points
		- Score
		- Shots
		- Brains
	- Registers the `render` method on the model's `played` event
- **ControlsView**
	- Renders two buttons, one that says "roll" and one that says "stop"
	- Registers callbacks for the `click` event on each button, that calls the model's `play` method with the corresponding action
- **DiceView**
	- Contains three inner DieView
	- Registers `render` on the model's `played` event
	- The `render` method delegates the display of each rolled die to each inner view
- **DieView**
	- Renders `color` and `face` for a Die

#### [When you're ready advance to the next part][Part1]

## Useful links

- [The ZD API][API]
- [Backbone API][Backbone]
- [Underscore]
- [jQuery]
- **Workshop parts**
	- [Boilerplate]
	- [Part0]
	- [Part1]
	- [Part2]
	- [Part3]
- [Zombie Dice Live!][live]

[API]: https://github.com/R42/zd-server/wiki/api
[Backbone]: http://backbonejs.org/
[Underscore]: http://underscorejs.org/
[jQuery]: http://api.jquery.com/
[ServerCode]: https://github.com/R42/zd-server/
[Boilerplate]: https://github.com/R42/zd-client/tree/boilerplate
[Part0]: https://github.com/R42/zd-client/tree/part0
[Part1]: https://github.com/R42/zd-client/tree/part1
[Part2]: https://github.com/R42/zd-client/tree/part2
[Part3]: https://github.com/R42/zd-client/tree/part3
[Part4]: https://github.com/R42/zd-client/tree/part4
[live]: http://playzd.r42.in/

