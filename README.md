# Part1

### Objective: Sync with http://zd.r42.in.

Use Backbone's API on [Syncing](http://backbonejs.org/#Sync).

### Write the code to sync the Game

###### On the Game model

1. Define `urlRoot` with `'https://zd.r42.in/games'`
2. Define a method `start` that sets `id` to `null` and calls `this.save`
3. Define a method `play` that recieves with an argument that is either `'roll'` or `'stop'`, sets it as `action` and calls `this.save()`
4. Register a callback on the `sync` event that creates a `Play` (collection) of the rolled `Die` if the action was `roll`, logs some information the play and then triggers a custom event `played`.

###### On the Ranking model

1. Define `url` with `'https://zd.r42.in/ranking'`

#### Play!

In your browser's console:

1. Create an instance of `Game`
2. Set a nickname
3. Call `start`
4. Call `play` with `roll`
5. Celebrate! -- You've just made your first play :D

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
