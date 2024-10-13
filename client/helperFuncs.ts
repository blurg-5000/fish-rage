export function shuffleArray<Type>(arr: Type[]): Type[] {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

export function randomRange(myMin: number, myMax: number): number {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}
