export function WordlePage() {
  const lowercaseAsciiStart = 97;
  
  function pickRandom() {
    const letterIndex = Math.floor(Math.random() * 26);
    return String.fromCharCode(lowercaseAsciiStart + letterIndex);
  }
  var one = pickRandom();
  var two = pickRandom();
  var three = pickRandom();
  var four = pickRandom();
  var five = pickRandom();
  
  return (
    <div>
      <p>{one + two + three + four + five}</p>
    </div>
  );
}