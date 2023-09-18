const printMenuForDay = (dayOfWeek) => {
    switch (dayOfWeek.toLowerCase()) {
      case "monday":
        console.log("Monday: MOMOs");
        break;
      case "tuesday":
        console.log("Tuesday :Daal bati ");
        break;
      case "wednesday":
        console.log("Wednesday : Veg pulav");
        break;
      case "thursday":
        console.log("Thursday : wada");
        break;
      case "friday":
        console.log("Friday : pizza");
        break;
      default:
        console.log("Sorry, we don't have a menu for that day.");
    }
  };
  printMenuForDay("Monday"); 
  printMenuForDay("tuesday"); 
  printMenuForDay("wednesday"); 
  printMenuForDay("thursday"); 
  printMenuForDay("friday"); 
  
  
  
  
  