const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function user_Action(){
    document.user_form.action = "index.html";
    values_val= /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/; //expression to validate data entered
		if(user_form.user_DOB.value != '') {
			if(regs = user_form.user_DOB.value.match(values_val)) {
				// valid day dob
				if(regs[1] < 1 || regs[1] > 31) {
					alert("Please enter a valid day, should be 1 to 31");
					user_form.user_DOB.focus();
					return false;
				}
				// valid month of birth
				if(regs[2] < 1 || regs[2] > 12) {
					alert("Please enter a valid month, should be 1 to 12");
					form.dob.focus();
					return false;
				}
			} else {
				alert("Date format should be dd/mm/yyyy");
				form.dob.focus();
				return false;
			}

   
    function century(CC){
        return((CC / 4) - 2 * CC - 1);
    }

    function year(YY){
        return(5 * YY / 4);
    }

    function month (MM){
        return(26 * (MM + 1) / 10);
    }

    function centuryFromYear(year) {
        return Math.ceil(year/100)
    }
    
    var enterCentury  = centuryFromYear(regs[3]) 
    var enterYear  = regs[3]
    var enterMonth  = regs[2]
    var enterDate  = regs[1]
    var gender = document.getElementById('gender').value 
    Year = enterYear.substr(2,2); // picks the year 

  

    const birthCentury = century(enterCentury)
    const birthYear = year(Year)
    const birthMonth = month(enterMonth)

    var calculationResults = (birthCentury + birthYear + birthMonth + enterDate) % 7
    const wholeNumber = calculationResults.toPrecision(1);
    var result;

    
    if (gender == "Male"){
        result = maleNames[wholeNumber]
        
    }else if (gender == "Female"){
        result = femaleNames[wholeNumber]
    }else{
    }
    alert('Your Akan name is : ' + result + " have a nice day!")
    return true;
}
}