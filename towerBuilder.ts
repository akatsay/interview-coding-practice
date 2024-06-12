export const towerBuilder = (nFloors: number): string[] => {
  const floors: string[] = []

  for (let i = 1; i <= nFloors; i++) {
    const space = ' '
    floors.push(`${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(nFloors - i)}`)
  }
  return floors
}