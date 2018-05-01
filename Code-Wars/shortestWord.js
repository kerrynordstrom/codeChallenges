let findShort = s => parseInt(s.split(' ').map(s => s.length).sort((a, b) => a - b).slice(0, 1).join());
