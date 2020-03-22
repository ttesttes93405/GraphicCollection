

var vm = new Vue({
	el:"#app",
	data:{
		currentCollectionIndex: 0,
		collections:[
			{
				title: "Solar",
				embedLink:"https://editor.p5js.org/OnionSun/embed/eUFzEWj1qC"
			},{
				title: "Cells",
				embedLink:"https://editor.p5js.org/OnionSun/embed/kuU5xDIT"
			},{
				title: "Merge Dots",
				embedLink:"https://editor.p5js.org/OnionSun/embed/7QAYEMwu"
			},{
				title: "Lissajous Curve",
				embedLink:"https://editor.p5js.org/OnionSun/embed/ZOZz8wcn"
			},{
				title: "Wave",
				embedLink:"https://editor.p5js.org/OnionSun/embed/X3B2jBJz"
			}
		]
	},
	computed:{
	},
	methods:{
		getCollection: function(){
			return this.collections[this.currentCollectionIndex];
		},
		addIndex: function(){
			this.currentCollectionIndex++;
			if(this.currentCollectionIndex >= this.collections.length){
				this.currentCollectionIndex -= this.collections.length;
			}
			this.onChangeIndex();
		},
		reduceIndex:function(){
			this.currentCollectionIndex--;
			if(this.currentCollectionIndex < 0){
				this.currentCollectionIndex += this.collections.length;
			}
			this.onChangeIndex();
		},
		onChangeIndex: function(){
			let el = document.getElementById("collectionView");
			//el.style.display = "none";
			//el.style.display = "block";
		}
	}
});
