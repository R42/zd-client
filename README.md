# Part2 - Road to Part3

### Objective: Add client-side routing

Create two more views:

- **WelcomeView**
	- Does not need a model
	- Renders an text input field for the nickname and a link to `#play`
- **RankingView**
	- Renders a list with the top players from a synced `Ranking` (collection)
	
Create a [router](http://backbonejs.org/#Router) and define three routes:

- `'#'` -- a root route that shows the `WelcomeView`
- `'#game'` -- picks the nickname set in `WelcomeView`, sets it in the `Game` model and shows the `GameView`
- `'#ranking´` -- shows the `RankingView`

Add a link somewhere in the HTML for `#ranking`.

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
