export function getPercents(percent, number) {
  
  if (percent < 0)
      return "Нельзя использовать число меньше 0";

  if (percent > 100)
      return "Нельзя использовать число больше 100"; 

  return (number * percent) / 100;
}
