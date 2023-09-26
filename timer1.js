const args = process.argv.slice(2)
args.sort((a, b) => {
  return a - b;
})

const validArgs = args
.filter(arg => !isNaN(arg))
.filter(arg => arg > 0)

for (let num of validArgs) {
    setTimeout(() => {
      process.stdout.write("\x07")
    }, num * 1000);
}