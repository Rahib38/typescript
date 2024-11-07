{
  function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }
  const text = "hello";
  const reverse = reverseString(text);
  console.log(reverse);
}
