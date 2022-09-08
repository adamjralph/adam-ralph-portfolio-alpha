const maxView = 78.125
const minView = 22.5

const maxWidth = 35
const minWidth = 15

function calcSlope() {
  slope = (maxWidth - minWidth) / (maxView - minView)
  let negMinView = -Math.abs(minView)
  let yAxisIntersection = negMinView * slope + minWidth
  let slopeValue = slope * 100

  console.log(
    `yAxisInterSection = ${negMinView} * Slope:${slope} + minWidth: ${22.5}`
  )
  console.log()
  console.log(`prefered value: ${yAxisIntersection}, ${slopeValue}`)
}

calcSlope()
