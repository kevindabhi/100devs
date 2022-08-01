
		let v = "The respective values are :"; 
		function ns() { 
			let input = document.getElementsByName('array[]'); 

			for (let i = 0; i < input.length; i++) { 
				let p = input[i]; 
				v = v + "array[" + i + "].value= "	+ p.value + " "; 
			} 

			document.getElementById("let").innerHTML = v; 
			document.getElementById("mv").innerHTML = "Output"; 
		} 

		


		