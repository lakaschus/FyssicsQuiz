import { fabric } from 'fabric'

export default function freeDrawing (canvasId) {
  const $ = function (id) {
    return document.getElementById(id)
  }

  const canvas = new fabric.Canvas(canvasId, {
    isDrawingMode: true
  })
  canvas.setHeight(500)
  canvas.setWidth(800) // set canvas width and height  canvas.setHeight(500);

  fabric.Object.prototype.transparentCorners = false

  const drawingModeEl = $('drawing-mode')
  const drawingOptionsEl = $('drawing-mode-options')
  const clearEl = $('clear-canvas')

  clearEl.onclick = function () {
    canvas.clear()
  }

  drawingModeEl.onclick = function () {
    canvas.isDrawingMode = !canvas.isDrawingMode
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode'
      drawingOptionsEl.style.display = ''
    } else {
      drawingModeEl.innerHTML = 'Enter drawing mode'
      drawingOptionsEl.style.display = 'none'
    }
  }

  if (fabric.PatternBrush) {
    const vLinePatternBrush = new fabric.PatternBrush(canvas)
    vLinePatternBrush.getPatternSrc = function () {
      const patternCanvas = fabric.document.createElement('canvas')
      patternCanvas.width = patternCanvas.height = 10
      const ctx = patternCanvas.getContext('2d')

      ctx.strokeStyle = this.color
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(0, 5)
      ctx.lineTo(10, 5)
      ctx.closePath()
      ctx.stroke()

      return patternCanvas
    }

    const hLinePatternBrush = new fabric.PatternBrush(canvas)
    hLinePatternBrush.getPatternSrc = function () {
      const patternCanvas = fabric.document.createElement('canvas')
      patternCanvas.width = patternCanvas.height = 10
      const ctx = patternCanvas.getContext('2d')

      ctx.strokeStyle = this.color
      ctx.lineWidth = 5
      ctx.beginPath()
      ctx.moveTo(5, 0)
      ctx.lineTo(5, 10)
      ctx.closePath()
      ctx.stroke()

      return patternCanvas
    }

    const squarePatternBrush = new fabric.PatternBrush(canvas)
    squarePatternBrush.getPatternSrc = function () {
      const squareWidth = 10
      const squareDistance = 2

      const patternCanvas = fabric.document.createElement('canvas')
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance
      const ctx = patternCanvas.getContext('2d')

      ctx.fillStyle = this.color
      ctx.fillRect(0, 0, squareWidth, squareWidth)

      return patternCanvas
    }

    const diamondPatternBrush = new fabric.PatternBrush(canvas)
    diamondPatternBrush.getPatternSrc = function () {
      const squareWidth = 10
      const squareDistance = 5
      const patternCanvas = fabric.document.createElement('canvas')
      const rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      })

      const canvasWidth = rect.getBoundingRect().width

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 })

      const ctx = patternCanvas.getContext('2d')
      rect.render(ctx)

      return patternCanvas
    }
  }
}
