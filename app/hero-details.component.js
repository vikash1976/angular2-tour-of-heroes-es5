(function(app){
	app.HeroDetailsComponent = ng.core
		.Component({
			selector: 'hero-details',
			template: `
					<div *ngIf="hero">
                        <h2>{{hero.name}} details!</h2>
                        <div><label>id: </label>{{hero.id}}</div>
                        <div>
                            <label>name: </label>
                            <input [(ngModel)]="hero.name" placeholder="name"/>
                        </div>
                    </div>
			`,
			inputs: ['hero'],
			directives: [ng.common.NgIf]
		})
		.Class({
			constructor: function(){
				
			}
		});
})(window.app || (window.app = {}));