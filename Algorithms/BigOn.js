const nemo =['nemo'];
const everyone =['rash','ram','roy','ash','bruce','gill','dory'];
const large = new Array(10).fill('nemo');

function findNemo(array){

	for (let i =0;i<array.length;i++){
		if(array[i]=='nemo'){
			console.log('found nemo');
			break;
		}
	}
}
findNemo(large); //o(n)  -> linear time