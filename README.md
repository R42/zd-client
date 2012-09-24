# Boilerplate
### Objective: Develop the models for [this API][API].
   
From the [API], we can identify some entities:

- Die
- Play (one play) - Collection of Die
- Game
- Position
- Ranking - Collection of Positions

### Implement models for these entities

1. Define the models in JavaScript files
2. Refer to [backbone.js' API][Backbone] on
	- [Models](http://backbonejs.org/#Model)
	- [Collections](http://backbonejs.org/#Collection)
	- Set the defaults attributes for the Game model
3. Include scripts in the index.html
4. Open index.html in your browser with the debugger
5. Use the console and try some stuff:
	- Create an instance with specific attributes
	- Register a callback on a changed event
	- Set an attribute to a different value
	- Try setting an attribute that you made up and see what happens
	- Create a collection and add some elements to it
	- Try some of the [Underscore] methods on the collection
6. Define a `log` on the models to show the status

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
