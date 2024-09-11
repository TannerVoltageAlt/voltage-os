function comvoltagestore () {
    game.showLongText("voltage!store is unfinished. Please check back soon! -voltage!studios", DialogLayout.Center)
    homeScreen()
}
function homeScreen () {
    appList = [miniMenu.createMenuItem("Logout",assets.image`logoutIcon`), miniMenu.createMenuItem("voltage!store", assets.image`voltageStoreIcon`)]
    myMenu = miniMenu.createMenuFromArray(appList)
    myMenu.setBounceOnWall(true)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.IconOnly, 1)
    myMenu.onSelectionChanged(function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Triangle, 5000, 1, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        myMenu.setTitle("" + selection + " (#" + (selectedIndex + 1) + ")")
    })
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        music.play(music.createSoundEffect(WaveShape.Sawtooth, 5000, 1, 255, 255, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
        if (selection == "voltage!store") {
            myMenu.close()
            comvoltagestore()
        } else {
        	
        }
    })
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, scene.screenWidth() / 20)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, scene.screenHeight() / 20)
    myMenu.setDimensions(scene.screenWidth(), scene.screenHeight())
    myMenu.setPosition(0, 0)
}
let myMenu: miniMenu.MenuSprite = null
let appList: miniMenu.MenuItem[] = []
scene.setBackgroundImage(assets.image`wallpaper1`)
music.play(music.createSong(assets.song`bootSound`), music.PlaybackMode.UntilDone)
homeScreen()
