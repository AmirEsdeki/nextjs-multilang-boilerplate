export function checkUsernameValidator(username: string): boolean {
  let re = /^[a-z0-9_-]{3,80}$/;
  console.clear();
  console.log(username);
  console.log(re.test(username));
  if (!re.test(username)) return false;
  return true;
}
