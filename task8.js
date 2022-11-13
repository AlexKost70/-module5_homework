let map = new Map();

map.set(1, true);
map.set("test", 25);
map.set(NaN, false);

for (let item of map.keys()) {
    console.log(`Ключ - ${item}, значение - ${map.get(item)}`);
}