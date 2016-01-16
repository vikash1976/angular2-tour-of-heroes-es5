(function(app){
	app.HeroService = ng.core
		.Injectable({})
		.Class({
			constructor: function(){
				this.HEROES = [
					{"id": 11, "name": "Mr. Nice"},
					{"id": 12, "name": "Narco"},
					{"id": 13, "name": "Bombasto"},
					{"id": 14, "name": "Celeritas"},
					{"id": 15, "name": "Magneta"},
					{"id": 16, "name": "RubberMan"},
					{"id": 17, "name": "Dynama"},
					{"id": 18, "name": "Dr IQ"},
					{"id": 19, "name": "Magma"},
					{"id": 20, "name": "Tornado"}
				];
				this.getHeroes = function(){
					return this.HEROES;
				};
				this.addHero = function(hero){
					this.HEROES.push({id: this.HEROES.length, name: hero});
				}
			}
		});
})(window.app || (window.app = {}));