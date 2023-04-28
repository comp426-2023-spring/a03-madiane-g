import minimist from 'minimist'

export function rps() {
    const argv = minimist(process.argv.slice(2))
    var shot;
    for (var i=2; i<process.argv.length; i+=2) {
      const option = process.argv[i]
    //   const value = process.argv[i+1]
      switch (option) {
        case '-h' || '--help':
            show_rps_help();
            process.exit(0);
        case '-r' || '--rules':
            show_rps_rules();
            process.exit(0)
      }
      console.log(option)
    }
}

export function rpsls() {
    const argv = minimist(process.argv.slice(2))
    var shot;
    for (var i=2; i<process.argv.length; i+=2) {
      const option = process.argv[i]
    //   const value = process.argv[i+1]
      switch (option) {
        case '-h' || '--help':
            show_rpsls_help();
            process.exit(0);
        case '-r' || '--rules':
            show_rpsls_rules();
            process.exit(0)
      }
      console.log(option)
    }
}

function show_rps_help() {
    console.log("Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n")
    console.log("\t-h, --help\t\tdisplay this help message and exit")
    console.log("\t-r, --rules\t\tdisplay the rules and exit")
    console.log("Examples:")
    console.log("\tnode-rps\t\tReturn JSON with single player RPS result.")
    console.log("\t\t\t\te.g. {\"player\":\"rock\"}")
    console.log("\tnode-rps rock\t\tReturn JSON with results for RPS played against a simulated opponent.")
    console.log("\t\t\t\te.g {\"player\":\"rock\",\"opponent\":\"scissors\",\"result\":\"win\"}")
}

function show_rpsls_help() {
    console.log("Usage: node-rpsls [SHOT]")
    console.log("Play the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n")
    console.log("\t-h, --help\t\tdisplay this help message and exit")
    console.log("\t-r, --rules\t\tdisplay the rules and exit")
    console.log("Examples:")
    console.log("\tnode-rpsls\t\tReturn JSON with single player RPSLS result.")
    console.log("\t\t\t\te.g. {\"player\":\"rock\"}")
    console.log("\tnode-rps rock\t\tReturn JSON with results for RPSLS played against a simulated opponent.")
    console.log("\t\t\t\te.g {\"player\":\"rock\",\"opponent\":\"Spock\",\"result\":\"lose\"}")
}

function show_rps_rules() {
    console.log("Rules for Rock Paper Scissors:\n")
    console.log("\t- Scissors CUTS Paper")
    console.log("\t- Paper COVERS Rock")
    console.log("\t- Rock CRUSHES Scissors")
}

function show_rpsls_rules() {
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n")
    console.log("\t- Scissors CUTS Paper")
    console.log("\t- Paper COVERS Rock")
    console.log("\t- Rock SMOOSHES Lizard")
    console.log("\t- Lizard POISONS Spock")
    console.log("\t- Spock SMASHES Scissors")
    console.log("\t- Scissors DECAPITATES Lizard")
    console.log("\t- Lizard EATS Paper")
    console.log("\t- Paper DISPROVES Spock")
    console.log("\t- Spock VAPORIZES Rock")
    console.log("\t- Rock CRUSHES Scissors")
}