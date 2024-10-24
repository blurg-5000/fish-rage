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
  // Restrict the angle to 0 to π for top, left, and right spawns (0 to 180 degrees)
  const angle = Math.random() * Math.PI // Angle in radians between 0 and π

  const distance = minDistance + Math.random() * (maxDistance - minDistance)

  // Calculate top and left positions based on angle and distance
  const top = center.top - Math.sin(angle) * distance // Ensuring they spawn above the center
  const left = center.left + Math.cos(angle) * distance

  return { top, left }
}

export function playAudio(file: string) {
  let sound = new Audio(file)
  sound.play()
}
