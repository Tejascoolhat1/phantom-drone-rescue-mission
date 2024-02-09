controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . a a a a a a a . . . . . 
        . . . . 4 5 5 a 5 5 4 . . . . . 
        . . . . 4 5 5 a 5 5 4 . . . . . 
        . . . . 8 a a a a a 8 . . . . . 
        . . . . 9 5 7 5 7 5 9 . . . . . 
        . . . . 8 a a a a a 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space, 100000000000000000000, 0)
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(8, 500)
})
let jejerferf: Sprite = null
let projectile: Sprite = null
let space: Sprite = null
info.startCountdown(60)
scene.setBackgroundColor(2)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 2 2 2 2 e . . . 
    . . . . . . 2 2 2 2 d 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 2 2 e . . 
    . . . . . e 2 2 2 2 2 e f f c c 
    . . . . . e e 2 2 e f f f f b c 
    . . . e e e f e 2 2 b f f f d c 
    . . e e 2 2 d f e 2 1 1 1 1 b c 
    . . e e 2 2 d f e e e c c c . . 
    . . b 1 1 d e 2 2 e e c . . . . 
    . . . f f f d d 2 2 f d d . . . 
    . . . . f f d d e e f d d . . . 
    . . . . . f f f f f . . . . . . 
    . . . . e e e f f . . . . . . . 
    . . . . e e e e f f . . . . . . 
    `)
game.splash("Phantom Drone please help us! The BuzzBots are attacking! Kill them or else they will take over our planet!")
effects.starField.startScreenEffect()
space = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    f f f . . . . . . . . . . f f f 
    f 2 f . . . . . . . . . . f 2 f 
    f f 2 2 . . . . . . . . 2 2 f f 
    8 9 2 2 f f f 9 9 f f f 2 2 9 8 
    8 9 9 f f 9 f 9 9 f 9 f f 9 9 8 
    8 9 9 f 9 9 9 9 9 9 9 9 f 9 9 8 
    8 9 9 f f 9 f 9 9 f 9 f f 9 9 8 
    8 9 2 2 f f f 9 9 f f f 2 2 9 8 
    f f 2 2 . . . . . . . . 2 2 f f 
    f 2 f . . . . . . . . . . f 2 f 
    f f f . . . . . . . . . . f f f 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space)
space.setStayInScreen(true)
info.setLife(10)
game.onUpdateInterval(2000, function () {
    jejerferf = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        f f f . . . . . . . . . . f f f 
        f f f . . . . . . . . . . f f f 
        f f f . . . . . . . . . . f f f 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 9 9 9 9 8 8 8 9 9 9 9 8 . 
        . 8 8 9 9 9 9 8 8 8 9 9 9 9 8 . 
        . 8 8 9 9 9 9 8 8 8 9 9 9 9 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 8 8 8 8 8 9 9 9 8 8 8 8 8 . 
        . 8 8 8 8 8 8 9 9 9 8 8 8 8 8 . 
        . 8 8 8 8 8 8 9 9 9 8 8 8 8 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        f f f . . . . . . . . . . f f f 
        f f f . . . . . . . . . . f f f 
        f f f . . . . . . . . . . f f f 
        `, SpriteKind.Enemy)
    jejerferf.x = scene.screenWidth()
    jejerferf.vx = -20
    jejerferf.y = randint(10, scene.screenHeight() - 10)
})
