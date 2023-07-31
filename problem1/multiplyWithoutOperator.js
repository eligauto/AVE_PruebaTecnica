function multiply(x, y) {
    if (y == 0)
      return 0;
  
      if (y > 0)
      return (x + multiply(x, y - 1));

    if (y < 0)
      return -multiply(x, -y);
  }
  
  console.log(multiply(5, 4));
  console.log(multiply(10, 0));
  console.log(multiply(5, -4)); 
  