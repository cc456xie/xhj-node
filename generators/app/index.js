const Generator = require('yeoman-generator')

module.exports = class extends Generator{
   prompting () {
       return this.prompt([
          {
            type:'input',
            name:'name',
            description: '~',
            default: this.appname
          }       
       ])
       .then(answers => {
           this.answers = answers
       })
   }

   writing (){
       const templates = [
           '.gitignore',
           'package.json',
           'README.md',
           'src/pages/index.html',
           'src/style/style.css',
           'src/main.js'
       ]

       templates.forEach(item => {
           this.fs.copyTpl(
               this.templatePath(item),
               this.destinationPath(item),
               this.answers
           )
       })
   }
}