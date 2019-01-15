export default class Point {
  constructor (option) {
    this.x = option.x || Math.random() * option.context.canvas.width
    this.y = option.y || Math.random() * option.context.canvas.height
    this.defaultX = this.x
    this.defaultY = this.y
    this.img = option.img
    this.angle = 0
    this.maxHeight = Math.random() * 100 + 100
    this.iNow = 0
    this.speed = Math.random() * 2
    this.context = option.context
    this.size = Math.random() * 10
    this.speedX = Math.random()
    this.rotate = Math.random() * 360 / 180 * Math.PI
    this.render()
  }
  render () {
    var context = this.context
    var img = this.img
    var x = this.x
    var y = this.y
    var size = this.size
    var rotate = this.rotate

    context.save()
    context.rotate = rotate
    context.drawImage(img, x, y, size, size)
    context.restore()
  }
  update () {
    this.render()
  }
}
