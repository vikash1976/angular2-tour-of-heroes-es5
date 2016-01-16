(function(app){
	app.AppComponent = ng.core
		.Component({
			selector: 'my-app',
			templateUrl: './views/main.html',
			directives: [app.HeroListComponent],
			providers: [app.HeroService]
				
		})	
		.Class({
			constructor: [app.HeroService, function(heroService){
				this.title = "Tour of Heroes";
				this.hero = 'windstorm';
				this.selectedHero = {};
				this.heroService = heroService;
				this.value = '';
				this.values = '';
				/*this.heroes = [
					{id: '1', name: 'H1'},
					{id: '2', name: 'H2'},
					{id: '3', name: 'H3'},
					{id: '4', name: 'H4'},
					{id: '5', name: 'H5'}
				];*/
				this.onKeyUp = function(text){
					this.value += text + ' | ';
				}
				this.addHero = function(hero){
					this.heroService.addHero(hero);
				}
				
			}],
			ngOnInit: function(){
					this.heroes = this.heroService.getHeroes()
					/*this.heroService.getHeroes().subscribe(function (data) {
						this.name = data.name;
					}.bind(this));;*/
				}
		});
})(window.app || (window.app = {}));