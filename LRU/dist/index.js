"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lru_1 = require("./lru");
const cache = new lru_1.LRU(3, 1);
cache.addItem("1", {
    key: "1",
    value: "Rami",
    createdAt: new Date(),
});
cache.addItem("2", {
    key: "2",
    value: "Mayla",
    createdAt: new Date(),
});
cache.addItem("3", {
    key: "3",
    value: "Carl",
    createdAt: new Date(),
});
cache.addItem("4", {
    key: "4",
    value: "jalal",
    createdAt: new Date(),
});
cache.addItem("1", {
    key: "1",
    value: "Rami",
    createdAt: new Date(),
});
cache.addItem("4", {
    key: "4",
    value: "jalal",
    createdAt: new Date(),
});
cache.addItem("1", {
    key: "1",
    value: "Rami",
    createdAt: new Date(),
});
cache.deleteExpiredItems();
