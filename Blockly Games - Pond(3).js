while (true)
  for (var i = 0; i < 360; i += 5) {
    var dist = scan(i);
    if (dist <= 70) {
      cannon(i, dist);
      swim((i + (dist <= 15 ? 180 : 0)) % 360, 100);
    }
  }
