/// <reference path="HelloDaddy.ts"/>

class Hello extends HelloDaddy{

	constructor(public name: string){
		super();
	}

	yeld( word:string ): void{
		alert(this.dad);
	}

}