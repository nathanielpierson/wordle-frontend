export function WordlePage() {
  const lowercaseAsciiStart = 97;
  function pickRandom() {
    const letterIndex = Math.floor(Math.random() * 26);
    const letter = String.fromCharCode(lowercaseAsciiStart + letterIndex);
  }
  var one = letter;
  var two = "e";
  var three = "l";
  var four = "l";
  var five = "o";
  return (
    <div>
      <p>{one + two + three + four + five}</p>
    </div>
  );
}
