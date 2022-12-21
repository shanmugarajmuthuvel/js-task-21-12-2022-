function sha(){
	var a=[19,2,3,4,199,6,7,8,9]
    var b=a[0]
 for(i=0;i<a.length;i++){
	 if(a[i]<=b){
		 b=a[i]
	 }
 }
 document.write(b)
}
sha()
		 