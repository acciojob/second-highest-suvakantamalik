//your JS code here. If required
secondHighest(arr){
	
	if(arr.legneth < 2) return -Infinity;
	let first = -Infinity;
	let second = -Infinity;
	for(int i=0; i<arr.length; i++){
		if(arr[i] > first){
			second = first;
			first = arr[i];
		}
		else if(arr[i] < first && arr[i] > second){
			second = arr[i];
		}
	}
	return second;
}