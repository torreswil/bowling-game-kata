export default class Game{

  constructor() {
    this.rolls = []
    this.currentRoll = 0
  }

  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

  getScore() {
    
    let frameIndex = 0 
    let _this = this
    let score = 0

    for(let frame = 0; frame < 10; frame++){
      if(isStrike()){
        score += 10 + strikeBonus()
        frameIndex ++
      }
      else if(isSpare())
      {
        score += 10 + spareBonus()
        frameIndex += 2
      }else
      {
        score += sumOfBallsInFrame()
        frameIndex += 2
      }
    }
    return score


    function isSpare() {
      return _this.rolls[frameIndex] + _this.rolls[frameIndex + 1] === 10
    }

    function isStrike() {
      return _this.rolls[frameIndex] === 10
    }

    function sumOfBallsInFrame() {
      return _this.rolls[frameIndex] + _this.rolls[frameIndex + 1]
    }

    function spareBonus() {
      return _this.rolls[frameIndex + 2]
    }

    function strikeBonus() {
      return _this.rolls[frameIndex+1] + _this.rolls[frameIndex+2]
    }

  }


}