import minimist from 'minimist'

export function rps() {
    const argv = minimist(process.argv.slice(2))
    var shot;
    for (var i=2; i<process.argv.length; i+=2) {
      const option = process.argv[i]
      const value = process.argv[i+1]
      switch (option) {
        case '-h':
            console.log("help")
          show_help();
          process.exit(0);
      }
    }
}

export function rpsls() {

}

function show_help() {
    console.log("Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n")
    console.log("\t-h, --help\t\tdisplay this help message and exit")
    console.log("\t-r, --rules\t\tdisplay the rules and exit")
    console.log("Examples:")
    console.log("\tnode-rps\t\tReturn JSON with single player RPS result.")
    console.log("\t\t\t\te.g. {\"player\":\"rock\"}")
    console.log("\tnode-rps rock\t\tReturn JSON with results for RPS played against a simulated opponent.")
    console.log("\t\t\t\te.g {\"player\":\"rock\",\"opponent\":\"scissors\",\"result\":\"win\"}")
}

function show_rps_rules() {
    console.log("Rules for Rock Paper Scissors:")
}