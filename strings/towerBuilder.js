const towerBuilder = (nFloors) => {
  const floors= []

  for (let i = 1; i <= nFloors; i++) {
    floors.push(`${' '.repeat(nFloors - i)}${'*'.repeat(2 * i - 1)}${' '.repeat(nFloors - i)}`)
  }
  return floors
}


console.log(towerBuilder(3))