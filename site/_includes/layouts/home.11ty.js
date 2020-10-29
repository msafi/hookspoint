"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.data = void 0;
exports.data = function () {
    return {
        layout: "layouts/base.11ty.js",
        templateClass: "tmpl-post",
    };
};
exports.render = function (data) {
    return data.content;
};
//# sourceMappingURL=home.11ty.js.map