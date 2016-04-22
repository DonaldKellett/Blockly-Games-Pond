while (true) {
  while (loc_x() < 50 && loc_y() > 50) {
    swim(315, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() < 90 && loc_y() < 90) {
    swim(45, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() > 50 && loc_y() > 50) {
    swim(225, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() < 90 && loc_y() > 10) {
    swim(315, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() > 50 && loc_y() < 50) {
    swim(135, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() > 10 && loc_y() > 10) {
    swim(225, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() < 50 && loc_y() < 50) {
    swim(45, 100);
    quickscan();
  }
  stop();
  detect();
  while (loc_x() > 10 && loc_y() < 90) {
    swim(135, 100);
    quickscan();
  }
  stop();
  detect();
}
function quickscan() {
  for (var i = 0; i < 16; i++) {
    if (scan(i * 20, 20) <= 70) cannon(i * 20, scan(i * 20, 20));
  }
}
function sweep() {
  for (var i = 0; i < 72; i++) {
    if (scan(i * 5) <= 70) cannon(i * 5, scan(i * 5));
  }
}
function dualSweep() {
  for (var i = 0; i < 72; i++) {
    if (scan(i * 5) <= 70) cannon(i * 5, scan(i * 5));
    if (scan(i * 5 + 180) <= 70) cannon(i * 5 + 180, scan(i * 5 + 180));
  }
}
function fullOnAttack() {
  for (var i = 0; i < 72; i++) {
    if (scan(i * 5) <= 70) cannon(i * 5, scan(i * 5));
    if (scan(i * 5 + 90) <= 70) cannon(i * 5 + 90, scan(i * 5 + 90));
    if (scan(i * 5 + 180) <= 70) cannon(i * 5 + 180, scan(i * 5 + 180));
    if (scan(i * 5 + 270) <= 70) cannon(i * 5 + 270, scan(i * 5 + 270));
  }
}
function detect() {
  if (health() >= 75) quickscan();
  else if (health() >= 50) sweep();
  else if (health() >= 25) dualSweep();
  else fullOnAttack();
}
