const term = new Terminal();
const ws = new WebSocket('ws://localhost:3000', "echo-protocol");
var curr_line = "";
var entries = [];

term.open(document.getElementById('terminal'));
term.write('shell $ ');

term.on('key', function(key, ev) {
        curr_line += key;
});

term.prompt = () => {
        if (curr_line) {
                let data = { method: "command", command: curr_line};
                ws.send(JSON.stringify(data));
        }
};
term.prompt();

ws.onmessage = msg => {
        term.write("\r\n" + JSON.parse(msg.data).data);
        curr_line = ""
}

term.on('key', function(key, ev) {
        if (ev.keyCode === 13) {
                if (curr_line) {
                        entries.push(curr_line);
                        term.write("\r\n");
                        term.prompt();
                }
        }
        else if (ev.keyCode === 8) {
                if (curr_line) {
                        curr_line = curr_line.slice(0, curr_line.lenght -1);
                        term.write("\b \b")
                }
        }
        else {
                curr_line += key;
                term.write(key);
        }
});