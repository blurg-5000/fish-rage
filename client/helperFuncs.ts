import { Cryptid } from '../models/models'

export function getRandomCryptid(arr: Cryptid[]): Cryptid {
  const array = [...arr]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array[0]
}

export function randomRange(myMin: number, myMax: number): number {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
}

export function getRandomPositionAroundCenter(
  center: { top: number; left: number },
  minDistance: number,
  maxDistance: number,
): { top: number; left: number } {
  const angle = Math.random() * 2 * Math.PI // Random angle in radians
  const distance = minDistance + Math.random() * (maxDistance - minDistance) // Random distance between minDistance and maxDistance

  // Calculate the x and y position based on the angle and distance
  const top = center.top + Math.sin(angle) * distance
  const left = center.left + Math.cos(angle) * distance

  return { top, left }
}
