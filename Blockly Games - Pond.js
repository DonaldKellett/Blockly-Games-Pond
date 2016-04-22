function attack() {
  for (var i = 0; i < 72; i++) {
    if (scan(i * 5) <= 70) cannon(i * 5, scan(i * 5));
    if (scan(i * 5 + 90) <= 70) cannon(i * 5 + 90, scan(i * 5 + 90));
    if (scan(i * 5 + 180) <= 70) cannon(i * 5 + 180, scan(i * 5 + 180));
    if (scan(i * 5 + 270) <= 70) cannon(i * 5 + 270, scan(i * 5 + 270));
  }
}
while (health() >=75) {
  while (loc_x() < 75) {
    swim(0, 100);
  }
  stop();
  if (Math.random() > 0.75) attack();
  while (loc_y() > 25) {
    swim(270, 100);
  }
  stop();
  if (Math.random() > 0.75) attack();
  while (loc_x() > 25) {
    swim(180, 100);
  }
  stop();
  if (Math.random() > 0.75) attack();
  while (loc_y() < 75) {
    swim(90, 100);
  }
  stop();
  if (Math.random() > 0.75) attack();
}
while (health() >= 50) {
  while (loc_x() < 75) {
    swim(0, 100);
  }
  stop();
  if (Math.random() > 0.5) attack();
  while (loc_y() > 25) {
    swim(270, 100);
  }
  stop();
  if (Math.random() > 0.5) attack();
  while (loc_x() > 25) {
    swim(180, 100);
  }
  stop();
  if (Math.random() > 0.5) attack();
  while (loc_y() < 75) {
    swim(90, 100);
  }
  stop();
  if (Math.random() > 0.5) attack();
}
while (health() >= 25) {
  while (loc_x() < 75) {
    swim(0, 100);
  }
  stop();
  attack();
  while (loc_y() > 25) {
    swim(270, 100);
  }
  stop();
  attack();
  while (loc_x() > 25) {
    swim(180, 100);
  }
  stop();
  attack();
  while (loc_y() < 75) {
    swim(90, 100);
  }
  stop();
  attack();
}
while (health() >= 0) {
  attack();
}
