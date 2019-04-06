//Collection

module.exports = {
  coded : "2019-03-16",
  
  "name" : "ss.formulas",
  description : "SagaSpace Formulas",
  
  
  execute(bot, fs){
    

    const formulaFiles = fs.readdirSync('./Src/Cmds/ss/formulas').filter(file => file.endsWith('.js'));

    for (const file of formulaFiles) { 	const formula = require(`../../.././Cmds/ss/formulas/${file}`);
      bot.ss.formulas.set(formula.name, formula);
    };

  }
}