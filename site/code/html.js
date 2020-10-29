"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.html = void 0;
exports.html = (literals, ...substs) => {
    return literals.raw.reduce((acc, lit, i) => {
        let subst = substs[i - 1];
        if (Array.isArray(subst)) {
            subst = subst.join("");
        }
        else if (literals.raw[i - 1] && literals.raw[i - 1].endsWith("$")) {
            acc = acc.slice(0, -1);
        }
        return acc + subst + lit;
    });
};
//# sourceMappingURL=html.js.map