import path from 'path';


class MainController {

    constructor() {
        this.__dirname = path.resolve(path.dirname(''))
    }


    homePage = (req, res) => {
        console.log("sending html file")
        res.sendFile('index.html', {root: path.join(this.__dirname, './src/public')})
    }
    homePageCss = (req, res) => {
        console.log("sending cs file")
        res.set({'Content-Type': 'text/css'})
        res.sendFile('style.css', {root: path.join(this.__dirname, './src/public/css')})
    }
    homePageJs = (req, res) => {
        console.log("sending js file")
        res.sendFile("client.js", {root:path.join(this.__dirname, './src/public/js')})
    }
}


export const mainController = new MainController()