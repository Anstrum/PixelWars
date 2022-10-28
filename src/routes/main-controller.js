import path from 'path';


class MainController {

    constructor() {
        this.__dirname = path.resolve(path.dirname(''))
    }


    homePage = (req, res) => {
        res.sendFile('index.html', {root: path.join(this.__dirname, './src/public')}) // add path and it will work ^^
    }
    homePageCss = (req, res) => {
        res.sendFile('style.css', {root: path.join(this.__dirname, './src/public/css')})
    }
}


export const mainController = new MainController()