export function CalculateAge(current_year_user: string): number {
  const current_year_userObj: Date = new Date(current_year_user);
  const current_date: Date = new Date();

  let age: number = current_date.getFullYear() - current_year_userObj.getFullYear();

  const birthdayIsPassing: boolean = (
    current_date.getMonth() > current_year_userObj.getMonth() ||
    (current_date.getMonth() === current_year_userObj.getMonth() &&
      current_date.getDate() >= current_year_userObj.getDate())
  );

  if (!birthdayIsPassing) {
    age--;
  }

  return age;
}
