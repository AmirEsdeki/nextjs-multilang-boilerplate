import jMoment from "moment-jalaali";

export function pastDateDiff(date) {
  if (!date) return "";

  date = Date.parse(date);
  // get total seconds between the times
  var delta = Math.abs(Date.now() - date) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required
  if (days == 0 && hours == 0 && minutes == 0) return " " + "چند ثانیه پیش";
  else if (days == 0 && hours == 0) return " " + `${minutes} دقیقه پیش`;
  else if (days == 0 && minutes == 0) return " " + `${hours} ساعت پیش`;
  else if (days == 0) return " " + `${hours} ساعت و ${minutes} دقیقه پیش`;
  else return " " + `${days} روز پیش`;
}

export function futureDateDiff(date) {
  if (!date) return "";

  date = Date.parse(date);
  // get total seconds between the times
  var delta = Math.abs(date - Date.now()) / 1000;

  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60; // in theory the modulus is not required
  if (days == 0 && hours == 0 && minutes == 0) return " " + "چند ثانیه بعد";
  else if (days == 0 && hours == 0) return " " + `${minutes} دقیقه بعد`;
  else if (days == 0 && minutes == 0) return " " + `${hours} ساعت بعد`;
  else if (days == 0) return " " + `${hours} ساعت و ${minutes} دقیقه بعد`;
  else return " " + `${days} روز بعد`;
}

export function toShamsi(date: string | undefined) {
  if (!date) return undefined;
  jMoment.loadPersian({ dialect: "persian-modern", usePersianDigits: true });
  return jMoment(date).format("jYYYY/jMM/jDD - HH:mm:ss");
}

export function toStandardDate(date: Date | string): string {
  let dateObj;
  if (typeof date === "string") {
    let parts = date.split("-");
    dateObj = new Date(
      parseInt(parts[0]),
      parseInt(parts[1]) + 1,
      parseInt(parts[2])
    );
  }
  const day = dateObj.getDay();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();
  return `${year}-${month}-${day}`;
}
