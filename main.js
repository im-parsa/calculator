'use strict';

const
	electron = require('electron'),
	app = electron.app,
	BrowserWindow = electron.BrowserWindow;

let mainWindow;


const createWindow = () =>
{
	mainWindow = new BrowserWindow(
		{
			title: 'calculator',
			'accept-first-mouse':true,
			width: 325,
			height: 324,
			'minWidth': 325,
			'minHeight': 324
		});

	mainWindow.loadURL(`file://${__dirname}/app/index.html`);

	mainWindow.setResizable(true)

	mainWindow.on('closed', () =>
	{
		mainWindow = null
	});
}

app.on('ready', createWindow)

app.on('window-all-closed', () =>
{
	if (process.platform !== 'darwin')
	{
		app.quit()
	}
})

app.on('activate',  () =>
{
	if (mainWindow === null)
	{
		createWindow()
	}
})