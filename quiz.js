document.getElementById("form1").onsubmit=function() {
    //displays the response DOM element
    document.getElementById("response").style.display = "block";
    
    //resets the DOM element on submit
    document.getElementById("answer").innerHTML = "";
	   
	  monthly = document.querySelector('input[name = "monthly"]:checked').value;

	  philo = document.querySelector('input[name = "philo"]:checked').value;
	   
	  current = document.querySelector('input[name = "current"]:checked').value;
    
    // use console.log to see result of each variable to check
    console.log(monthly);
    console.log(philo);
    console.log(current);
	    
	  // initialize score variables 
	  graduated = 0;
	  standard = 0;
	  extended = 0;
	  
	  //function to calculate score for each question
	  function eachscore(x){
	  if(x == "graduated") { graduated = graduated + 1}
	  if(x == "standard") { standard = standard + 1}
	  if(x == "extended") { extended = extended + 1}
	  }
	  // for the above function, you could also change the 1 to a variable so you could give more points for certain questions
	  
	  //call function for each question
	  eachscore(eval("monthly"));
	  eachscore(eval("philo"));
	  eachscore(eval("current"));
	  
      // use console.log to see result of each variable to check
    console.log(graduated);
    console.log(standard);
    console.log(extended);
	  
	  all = [graduated, standard, extended];
	  
	//get the max score  in the array
	maxscore = Math.max.apply(Math,all);
    
    // object holding scores and feedback	
scores = [{index:0, feedback: "Graduated Repayment Plan"},
{index:1, feedback: "Standard Repayment Plan"},
{index:2, feedback: "Extended Repayment Plan"}];
	
    //figure out which index # holds the max score 
	for(i=0; i<all.length; i++) {
	if(all[i]==maxscore) {
    //this gets one answer, the last one it encounters with a match
    document.getElementById("answer").innerHTML = scores[i].feedback;
    
    //this version would allow for appending multiple answers; replace statement above
    // document.getElementById("answer").innerHTML += scores[i].feedback + " ";
	}
  }
	
	return false; // required to not refresh the page; just leave this here
	   }// end the submit function