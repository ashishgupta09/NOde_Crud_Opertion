const mongoose=require("mongoose");

const alien=new mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	tech:{
		type:String,
		required:true
	},
	sub:{
		type:Boolean,
		required:true,
		default:false
	},
	address:{
		type:String,
		required:true
	}
})

module.exports=mongoose.model("Alien",alien);