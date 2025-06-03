function forWordReverse(ask) {
  for (let i = ask.length; i >= 0; i--) {
    const wordResult = ask.charAt(i);
    console.log(wordResult);
    wordReverse = wordReverse + wordResult;
  }
  console.log(wordReverse);

  if (ask === wordReverse) {
    return "è pali!";
  } else {
    return "no pali :(";
  }
}
