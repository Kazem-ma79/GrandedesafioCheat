const {app, BrowserWindow, dialog} = require('electron');

let mainWindow;
var code = '$("#name").val("A");$("#start").click();$(".correct").click();';
app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {

  mainWindow = new BrowserWindow({width: 1024, height: 768 });
  mainWindow.loadURL('https://grandedesafio.com/quiz/');
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.executeJavaScript(code);
    const options = {
      type: 'info',
      buttons: ['OK'],
      defaultId: 2,
      title: 'Finish',
      message: 'Quiz answered :D',
      detail: 'It does not really matter',
    };
    dialog.showMessageBox(null, options, null);
  });
});
