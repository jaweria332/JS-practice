
function temp_convert(temp, scale){
  if((scale == "celsius") || (scale == "C"))  //given temperature is in Celsius scale
  {
    return (temp * 9/5) + 32 + " degree F";
  }

else if((scale == "fahrenheit") || (scale == "F"))    //given temperature is in Fehrenheit scale
{
  return (temp -32) * 5 / 9 + " degree celsius";
}
  else {
    return "Invalid scale";
  }
}

temp_convert(100, "C");
temp_convert(212, "F");
