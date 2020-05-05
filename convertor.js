
	// establish letters array for later conversion
	let letters = 'abcdef'.split('');

	// establish possible double digit values for later conversion
	let doubleDigits = [10,11,12,13,14,15];

	//function that converts two character hex values to rgb values
	function rgbify(hexVal){

		// split string into spearate characters 
		var hexDual = [hexVal.charAt(0), hexVal.charAt(1)];
		
		// for every letter
		for(let m=0;m<letters.length;m++){
			
			// for every value
			for(j=0;j<hexDual.length;j++){

				// if a letter is present convert it to the corresponding number
				if(hexDual[j]==letters[m]){
					hexDual[j] = doubleDigits[m];
				}
			}	
		}

		// rgb value equals first number times 16 plus the second number 
		var RGBVal = hexDual[0]*16 + Number(hexDual[1]);

		// return rgb version of hex value 
		return RGBVal;
	}

	// get input tag
	let hexIn = document.getElementById('hexIn');

	hexIn.oninput = function(){
	 	// remove # and split code into separate, two character values 
	 	var hexVals = hexIn.value.toLowerCase().replace('#','').match(/.{2}/g);

		// declare / refresh output string
		var rgbCode = '';

		for(let i=0;i<hexVals.length;i++){

			// convert every value to rgb and concatanate it onto the string with a comma for separation 
			rgbCode += ','+rgbify(hexVals[i]);
		}

		// remove first comma and output the string
		document.querySelector('h2:first-of-type span').innerHTML = rgbCode.replace(',','');
	}
	// function to convert RGB values to hex Codes
	function hexify(RGBvalue){

		// get division and modulus by 16
		var dualValues = [Math.floor(Number(RGBvalue)/16),Number(RGBvalue)%16];

		// if array value is a double digit, translate it to the corresponding letter 
		for(let m=0;m<doubleDigits.length;m++){
			for(j=0;j<dualValues.length;j++){
				if(dualValues[j]==doubleDigits[m]){
					dualValues[j]=letters[m];
				}
			}
		}

		// return hex version
		return (dualValues[0].toString()+dualValues[1]);
	}

	// get input tag
	let rgbIn = document.getElementById('rgbIn');
	rgbIn.oninput = function(){

		// get user input RGB code
		var startingString = this.value.toLowerCase().replace(/[^0-9,]/g, ''); ;

		// turn individual codes to array items 
		var colorValues = startingString.split(',');

		// declare/ refresh output string
		var newString ='';
		for(i=0;i<colorValues.length;i++){

			// convert every RGB value to hex and add it to string
			newString += hexify(colorValues[i]);
		}

		// output new hex code
		document.querySelector('h2:nth-of-type(2) span').innerHTML = newString;

		document.getElementById('hex').textContent = '#'+newString;
	}
