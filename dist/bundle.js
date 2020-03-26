/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./example/index.ts":
/*!**************************!*\
  !*** ./example/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Animator_1 = __importDefault(__webpack_require__(/*! ../src/core/Animator */ "./src/core/Animator.ts"));
var Keyboard_1 = __importDefault(__webpack_require__(/*! ../src/core/Keyboard */ "./src/core/Keyboard.ts"));
var Circle_1 = __importDefault(__webpack_require__(/*! ../src/figures/Circle */ "./src/figures/Circle.ts"));
var Color_1 = __importDefault(__webpack_require__(/*! ../src/figures/Color */ "./src/figures/Color.ts"));
var Rect_1 = __importDefault(__webpack_require__(/*! ../src/figures/Rect */ "./src/figures/Rect.ts"));
var Point_1 = __importDefault(__webpack_require__(/*! ../src/figures/Point */ "./src/figures/Point.ts"));
var Speed_1 = __importDefault(__webpack_require__(/*! ../src/figures/Speed */ "./src/figures/Speed.ts"));
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var animator = new Animator_1.default(canvas);
var c1 = new Circle_1.default(50);
var c2 = new Circle_1.default(40);
var rect = new Rect_1.default(100, 100, new Point_1.default(50, 50));
var keyboard = Keyboard_1.default.getInstance();
keyboard.addHandler(function () {
    rect.setSpeed(new Speed_1.default(0, -25));
}, { key: "ArrowUp" });
keyboard.addHandler(function () {
    rect.setSpeed(new Speed_1.default(0, 25));
}, { key: "ArrowDown" });
keyboard.addHandler(function () {
    rect.setSpeed(new Speed_1.default(-25, 0));
}, { key: "ArrowLeft" });
keyboard.addHandler(function () {
    rect.setSpeed(new Speed_1.default(25, 0));
}, { key: "ArrowRight" });
c1.setColor(new Color_1.default(255, 0, 0));
c2.setColor(new Color_1.default(0, 0, 225));
rect.setColor(new Color_1.default(0, 255, 0));
animator.addFigure(c1);
animator.addFigure(c2);
animator.addFigure(rect);
animator.start();


/***/ }),

/***/ "./src/core/Animator.ts":
/*!******************************!*\
  !*** ./src/core/Animator.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __importStar(__webpack_require__(/*! ../services/Logger */ "./src/services/Logger.ts"));
var Color_1 = __importDefault(__webpack_require__(/*! ../figures/Color */ "./src/figures/Color.ts"));
var Animator = /** @class */ (function () {
    function Animator(canvas) {
        this.isRunning = false;
        this.figures = [];
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.interval = setInterval(this.tick.bind(this), 1000 / 60); // interval for 60 fps
    }
    Animator.ADD_FIGURE = function (figureUUID, name) {
        return "ADD_FIGURE::" + name + "::" + figureUUID;
    };
    Animator.RENDER_FIGURE = function (figureUUID, name) {
        return "RENDER_FIGURE::" + name + "::" + figureUUID;
    };
    Animator.prototype.tick = function () {
        if (this.isRunning) {
            this.clearCanvas();
            this.renderAll();
        }
    };
    Animator.prototype.renderAll = function () {
        var _this = this;
        this.figures.forEach(function (f) {
            if (_this.context) {
                f.applySpeed();
                f.render(_this.context);
                Logger_1.default.log(Animator.RENDER_FIGURE(f.getUUID(), f.getName()));
            }
        });
    };
    Animator.prototype.clearCanvas = function () {
        if (this.context) {
            this.context.fillStyle = new Color_1.default(255, 255, 255).print();
            this.context.fillRect(0, 0, 1000, 1000); //  TODO брать реальный размер из DOM
        }
    };
    Animator.prototype.start = function () {
        this.isRunning = true;
    };
    Animator.prototype.stop = function () {
        this.isRunning = false;
    };
    Animator.prototype.addFigure = function (f) {
        this.figures.push(f);
        Logger_1.default.log(Animator.ADD_FIGURE(f.getUUID(), f.getName()));
    };
    Animator.ANIMATOR_START = "ANIMATOR::START";
    Animator.ANIMATOR_STOP = "ANIMATOR::STOP";
    Animator.ANIMATOR_START_FRAME = "ANIMATOR::START_FRAME";
    Animator.ANIMATOR_CLEAR_CANVAS = "ANIMATOR::CLEAR_CANVAS";
    Animator.ANIMATOR_END_FRAME = "ANIMATOR::END_FRAME";
    __decorate([
        Logger_1.LogMethod(Animator.ANIMATOR_START_FRAME),
        Logger_1.LogMethod(Animator.ANIMATOR_END_FRAME, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Animator.prototype, "tick", null);
    __decorate([
        Logger_1.LogMethod(Animator.ANIMATOR_CLEAR_CANVAS, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Animator.prototype, "clearCanvas", null);
    __decorate([
        Logger_1.LogMethod(Animator.ANIMATOR_START, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Animator.prototype, "start", null);
    __decorate([
        Logger_1.LogMethod(Animator.ANIMATOR_STOP, true),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Animator.prototype, "stop", null);
    return Animator;
}());
exports.default = Animator;


/***/ }),

/***/ "./src/core/Keyboard.ts":
/*!******************************!*\
  !*** ./src/core/Keyboard.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Logger_1 = __importDefault(__webpack_require__(/*! ../services/Logger */ "./src/services/Logger.ts"));
var STAGES;
(function (STAGES) {
    STAGES[STAGES["KEY_UP"] = 0] = "KEY_UP";
    STAGES[STAGES["KEY_DOWN"] = 1] = "KEY_DOWN";
    STAGES[STAGES["KEY_PRESS"] = 2] = "KEY_PRESS";
})(STAGES = exports.STAGES || (exports.STAGES = {}));
var Keyboard = /** @class */ (function () {
    function Keyboard() {
        this.handlers = [];
        document.addEventListener("keydown", this.handleKeyPress.bind(this));
    }
    Keyboard.getInstance = function () {
        if (!Keyboard.instance) {
            Keyboard.instance = new Keyboard();
        }
        return Keyboard.instance;
    };
    Keyboard.prototype.handleKeyPress = function (event) {
        var handlersToCall = this.handlers.filter(function (h) {
            return h.options.key === event.key;
        });
        handlersToCall.forEach(function (h) {
            try {
                h.handler(); // TODO логировать каждый успешный вызов хендлера (в начале придумать как)
            }
            catch (e) {
                Logger_1.default.log(Keyboard.KEYBOARD_HANDLER_CALL_ERROR); // TODO добавить логеру метод для вывод ошибок
            }
        });
    };
    Keyboard.prototype.addHandler = function (handler, options) {
        this.handlers.push({ handler: handler, options: options });
    };
    Keyboard.prototype.setAliases = function () {
    };
    Keyboard.KEYBOARD_HANDLER_CALL_ERROR = "KEYBOARD::HANDLER_CALL::ERROR";
    return Keyboard;
}());
exports.default = Keyboard;


/***/ }),

/***/ "./src/figures/Circle.ts":
/*!*******************************!*\
  !*** ./src/figures/Circle.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Figure_1 = __importDefault(__webpack_require__(/*! ./Figure */ "./src/figures/Figure.ts"));
var Point_1 = __importDefault(__webpack_require__(/*! ./Point */ "./src/figures/Point.ts"));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, point) {
        if (point === void 0) { point = new Point_1.default(0, 0); }
        var _this = _super.call(this) || this;
        _this.position = point;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.render = function (context) {
        context.beginPath();
        context.arc(this.position.getX(), this.position.getY(), this.radius, 0, Math.PI);
        context.fillStyle = this.color.print();
        context.fill();
    };
    Circle.prototype.getName = function () {
        return "Circle";
    };
    return Circle;
}(Figure_1.default));
exports.default = Circle;


/***/ }),

/***/ "./src/figures/Color.ts":
/*!******************************!*\
  !*** ./src/figures/Color.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color = /** @class */ (function () {
    function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    Color.prototype.print = function () {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    };
    return Color;
}());
exports.default = Color;


/***/ }),

/***/ "./src/figures/Figure.ts":
/*!*******************************!*\
  !*** ./src/figures/Figure.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UUID_1 = __webpack_require__(/*! ../services/UUID */ "./src/services/UUID.ts");
var Color_1 = __importDefault(__webpack_require__(/*! ./Color */ "./src/figures/Color.ts"));
var Point_1 = __importDefault(__webpack_require__(/*! ./Point */ "./src/figures/Point.ts"));
var Logger_1 = __importDefault(__webpack_require__(/*! ../services/Logger */ "./src/services/Logger.ts"));
var Speed_1 = __importDefault(__webpack_require__(/*! ./Speed */ "./src/figures/Speed.ts"));
var Figure = /** @class */ (function () {
    function Figure() {
        this.UUID = UUID_1.getUUID();
        this.color = new Color_1.default(255, 255, 255);
        this.position = new Point_1.default(0, 0);
        this.speed = new Speed_1.default(0, 0);
    }
    Figure.FIGURE_MOVE = function (uuid, name) {
        return "MOVE::FIGURE::" + name + "::" + uuid;
    };
    Figure.prototype.applySpeed = function () {
        var p = this.speed.getDelta();
        this.position = new Point_1.default(this.position.getX() + p.getX(), this.position.getY() + p.getY());
        Logger_1.default.log(Figure.FIGURE_MOVE(this.getUUID(), this.getName()));
    };
    Figure.prototype.setColor = function (color) {
        this.color = color;
    };
    Figure.prototype.setPosition = function (p) {
        this.position = p;
    };
    Figure.prototype.setSpeed = function (s) {
        this.speed = s;
    };
    Figure.prototype.getUUID = function () {
        return this.UUID;
    };
    return Figure;
}());
exports.default = Figure;


/***/ }),

/***/ "./src/figures/Point.ts":
/*!******************************!*\
  !*** ./src/figures/Point.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    return Point;
}());
exports.default = Point;


/***/ }),

/***/ "./src/figures/Rect.ts":
/*!*****************************!*\
  !*** ./src/figures/Rect.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Figure_1 = __importDefault(__webpack_require__(/*! ./Figure */ "./src/figures/Figure.ts"));
var Point_1 = __importDefault(__webpack_require__(/*! ./Point */ "./src/figures/Point.ts"));
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(width, height, point) {
        if (point === void 0) { point = new Point_1.default(0, 0); }
        var _this = _super.call(this) || this;
        _this.position = point;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rect.prototype.render = function (context) {
        context.fillStyle = this.color.print();
        context.fillRect(this.position.getX(), this.position.getY(), this.width, this.height);
    };
    Rect.prototype.getName = function () {
        return "Rect";
    };
    return Rect;
}(Figure_1.default));
exports.default = Rect;


/***/ }),

/***/ "./src/figures/Speed.ts":
/*!******************************!*\
  !*** ./src/figures/Speed.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(__webpack_require__(/*! ./Point */ "./src/figures/Point.ts"));
var Speed = /** @class */ (function () {
    function Speed(x, y) {
        this.speed = new Point_1.default(x, y);
        this.lastTick = Date.now();
    }
    Speed.prototype.setSpeed = function (s) {
        this.speed = s;
    };
    Speed.prototype.getDelta = function () {
        var prevLastTick = this.lastTick;
        this.lastTick = Date.now();
        var delta = (this.lastTick - prevLastTick) / 1000;
        return new Point_1.default(this.speed.getX() * delta, this.speed.getY() * delta);
    };
    return Speed;
}());
exports.default = Speed;


/***/ }),

/***/ "./src/services/Logger.ts":
/*!********************************!*\
  !*** ./src/services/Logger.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IS_DEBUG = true;
var FILTER = "MOVE";
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.log = function (message) {
        if (IS_DEBUG) {
            if ((FILTER && message.indexOf(FILTER) !== -1) || !FILTER) {
                console.log(message);
            }
        }
    };
    return Logger;
}());
exports.default = Logger;
function LogMethod(message, callAfter) {
    if (callAfter === void 0) { callAfter = false; }
    return function (target, propertyName, propertyDescriptor) {
        var method = propertyDescriptor.value;
        propertyDescriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!callAfter) {
                Logger.log(message);
            }
            var result = method.apply(this, args);
            if (callAfter) {
                Logger.log(message);
            }
            return result;
        };
        return propertyDescriptor;
    };
}
exports.LogMethod = LogMethod;
;


/***/ }),

/***/ "./src/services/UUID.ts":
/*!******************************!*\
  !*** ./src/services/UUID.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var counter = 1;
function getUUID() {
    return counter++;
}
exports.getUUID = getUUID;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9BbmltYXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZmlndXJlcy9DaXJjbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZ3VyZXMvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZ3VyZXMvRmlndXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9maWd1cmVzL1BvaW50LnRzIiwid2VicGFjazovLy8uL3NyYy9maWd1cmVzL1JlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZ3VyZXMvU3BlZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0xvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvVVVJRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsNEdBQTRDO0FBQzVDLDRHQUE0QztBQUU1Qyw0R0FBMkM7QUFDM0MseUdBQXlDO0FBQ3pDLHNHQUF1QztBQUN2Qyx5R0FBeUM7QUFDekMseUdBQXlDO0FBRXpDLElBQU0sTUFBTSxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25FLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xDLElBQU0sUUFBUSxHQUFhLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUVoRCxJQUFNLEVBQUUsR0FBVyxJQUFJLGdCQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsSUFBTSxFQUFFLEdBQVcsSUFBSSxnQkFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLElBQU0sSUFBSSxHQUFTLElBQUksY0FBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxlQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFekQsSUFBTSxRQUFRLEdBQUcsa0JBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUN4QyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN2QixRQUFRLENBQUMsVUFBVSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDekIsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksZUFBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDekIsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksZUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO0FBRTFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXBDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDakIsdUdBQXVEO0FBQ3ZELHFHQUFxQztBQUVyQztJQWFFLGtCQUFZLE1BQXlCO1FBUzdCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFSakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsRUFBQyxzQkFBc0I7SUFDckYsQ0FBQztJQWJjLG1CQUFVLEdBQXpCLFVBQTBCLFVBQWtCLEVBQUUsSUFBWTtRQUN4RCxPQUFPLGlCQUFlLElBQUksVUFBSyxVQUFZLENBQUM7SUFDOUMsQ0FBQztJQUNjLHNCQUFhLEdBQTVCLFVBQTZCLFVBQWtCLEVBQUUsSUFBWTtRQUMzRCxPQUFPLG9CQUFrQixJQUFJLFVBQUssVUFBWSxDQUFDO0lBQ2pELENBQUM7SUFtQk8sdUJBQUksR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVPLDRCQUFTLEdBQWpCO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQVM7WUFDN0IsSUFBSSxLQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoQixDQUFDLENBQUMsVUFBVSxFQUFFO2dCQUNkLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR08sOEJBQVcsR0FBbkI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHFDQUFxQztTQUMvRTtJQUNILENBQUM7SUFHTSx3QkFBSyxHQUFaO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUdNLHVCQUFJLEdBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBRU0sNEJBQVMsR0FBaEIsVUFBaUIsQ0FBUztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFuRWMsdUJBQWMsR0FBRyxpQkFBaUIsQ0FBQztJQUNuQyxzQkFBYSxHQUFHLGdCQUFnQixDQUFDO0lBQ2pDLDZCQUFvQixHQUFHLHVCQUF1QixDQUFDO0lBQy9DLDhCQUFxQixHQUFHLHdCQUF3QixDQUFDO0lBQ2pELDJCQUFrQixHQUFHLHFCQUFxQixDQUFDO0lBeUIxRDtRQUZDLGtCQUFTLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1FBQ3hDLGtCQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQzs7Ozt3Q0FNNUM7SUFhRDtRQURDLGtCQUFTLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQzs7OzsrQ0FNL0M7SUFHRDtRQURDLGtCQUFTLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUM7Ozs7eUNBR3hDO0lBR0Q7UUFEQyxrQkFBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDOzs7O3dDQUd2QztJQU1ILGVBQUM7Q0FBQTtrQkFyRW9CLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0o3QiwwR0FBd0M7QUFFeEMsSUFBWSxNQUlYO0FBSkQsV0FBWSxNQUFNO0lBQ2hCLHVDQUFNO0lBQ04sMkNBQVE7SUFDUiw2Q0FBUztBQUNYLENBQUMsRUFKVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFJakI7QUFpQkQ7SUFXRTtRQUlRLGFBQVEsR0FBdUIsRUFBRSxDQUFDO1FBSHhDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBVGEsb0JBQVcsR0FBekI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUN0QixRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7U0FDcEM7UUFDRCxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQVFPLGlDQUFjLEdBQXRCLFVBQXVCLEtBQW9CO1FBQ3pDLElBQU0sY0FBYyxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQW1CO1lBQ2xGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFtQjtZQUN6QyxJQUFJO2dCQUNGLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLDBFQUEwRTthQUN4RjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLGdCQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxFQUFDLDhDQUE4QzthQUNoRztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFrQixPQUFtQixFQUFFLE9BQXlCO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxXQUFFLE9BQU8sV0FBRSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDZCQUFVLEdBQWpCO0lBRUEsQ0FBQztJQXBDYyxvQ0FBMkIsR0FBRywrQkFBK0IsQ0FBQztJQXFDL0UsZUFBQztDQUFBO2tCQXRDb0IsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCN0IsK0ZBQThCO0FBQzlCLDRGQUE0QjtBQUU1QjtJQUFvQywwQkFBTTtJQUN4QyxnQkFBWSxNQUFjLEVBQUUsS0FBdUI7UUFBdkIsb0NBQVksZUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFBbkQsWUFDRSxpQkFBTyxTQUdSO1FBRkMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7SUFJRCx1QkFBTSxHQUFOLFVBQU8sT0FBaUM7UUFDdEMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRixPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTSx3QkFBTyxHQUFkO1FBQ0UsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLENBbkJtQyxnQkFBTSxHQW1CekM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkQ7SUFDRSxlQUFhLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMxQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBS00scUJBQUssR0FBWjtRQUNFLE9BQU8sU0FBTyxJQUFJLENBQUMsQ0FBQyxVQUFLLElBQUksQ0FBQyxDQUFDLFVBQUssSUFBSSxDQUFDLENBQUMsTUFBRyxDQUFDO0lBQ2hELENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JELG1GQUEyQztBQUMzQyw0RkFBNEI7QUFDNUIsNEZBQTRCO0FBQzVCLDBHQUF1RDtBQUN2RCw0RkFBNEI7QUFFNUI7SUFBQTtRQUtVLFNBQUksR0FBVyxjQUFPLEVBQUUsQ0FBQztRQUN2QixVQUFLLEdBQVUsSUFBSSxlQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QyxhQUFRLEdBQVUsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFVBQUssR0FBVSxJQUFJLGVBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUEyQjNDLENBQUM7SUFsQ2dCLGtCQUFXLEdBQTFCLFVBQTJCLElBQVksRUFBRSxJQUFZO1FBQ25ELE9BQU8sbUJBQWlCLElBQUksVUFBSyxJQUFNLENBQUM7SUFDMUMsQ0FBQztJQU9NLDJCQUFVLEdBQWpCO1FBQ0UsSUFBTSxDQUFDLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDNUYsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBSU0seUJBQVEsR0FBZixVQUFnQixLQUFZO1FBQzFCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFTSw0QkFBVyxHQUFsQixVQUFtQixDQUFRO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTSx5QkFBUSxHQUFmLFVBQWdCLENBQVE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLHdCQUFPLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUdILGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDekNEO0lBQ0UsZUFBWSxDQUFTLEVBQUUsQ0FBUztRQUM5QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUtNLG9CQUFJLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCwrRkFBOEI7QUFDOUIsNEZBQTRCO0FBRTVCO0lBQWtDLHdCQUFNO0lBQ3RDLGNBQVksS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUF1QjtRQUF2QixvQ0FBWSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUFsRSxZQUNFLGlCQUFPLFNBSVI7UUFIQyxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkIsQ0FBQztJQUtNLHFCQUFNLEdBQWIsVUFBYyxPQUFpQztRQUM3QyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBQ0gsV0FBQztBQUFELENBQUMsQ0FuQmlDLGdCQUFNLEdBbUJ2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRCw0RkFBNEI7QUFFNUI7SUFDRSxlQUFZLENBQVMsRUFBRSxDQUFTO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFLRCx3QkFBUSxHQUFSLFVBQVMsQ0FBUTtRQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFDRCx3QkFBUSxHQUFSO1FBQ0UsSUFBTSxZQUFZLEdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXBELE9BQU8sSUFBSSxlQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0gsWUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUV0QjtJQUFBO0lBUUEsQ0FBQztJQVBlLFVBQUcsR0FBakIsVUFBa0IsT0FBZTtRQUMvQixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7SUFDSCxDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7O0FBRUQsU0FBZ0IsU0FBUyxDQUFDLE9BQWUsRUFBRSxTQUEwQjtJQUExQiw2Q0FBMEI7SUFDbkUsT0FBTyxVQUNMLE1BQWMsRUFDZCxZQUFvQixFQUNwQixrQkFBc0M7UUFDdEMsSUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1FBRXhDLGtCQUFrQixDQUFDLEtBQUssR0FBRztZQUFVLGNBQWM7aUJBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztnQkFBZCx5QkFBYzs7WUFDakQsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JCO1lBRUQsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFeEMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNyQjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUVGLE9BQU8sa0JBQWtCLENBQUM7SUFDNUIsQ0FBQztBQUNILENBQUM7QUF2QkQsOEJBdUJDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDcENGLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUVoQixTQUFnQixPQUFPO0lBQ3JCLE9BQU8sT0FBTyxFQUFFLENBQUM7QUFDbkIsQ0FBQztBQUZELDBCQUVDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZXhhbXBsZS9pbmRleC50c1wiKTtcbiIsImltcG9ydCBBbmltYXRvciBmcm9tIFwiLi4vc3JjL2NvcmUvQW5pbWF0b3JcIjtcbmltcG9ydCBLZXlib2FyZCBmcm9tIFwiLi4vc3JjL2NvcmUvS2V5Ym9hcmRcIjtcblxuaW1wb3J0IENpcmNsZSBmcm9tIFwiLi4vc3JjL2ZpZ3VyZXMvQ2lyY2xlXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4uL3NyYy9maWd1cmVzL0NvbG9yXCI7XG5pbXBvcnQgUmVjdCBmcm9tIFwiLi4vc3JjL2ZpZ3VyZXMvUmVjdFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi9zcmMvZmlndXJlcy9Qb2ludFwiO1xuaW1wb3J0IFNwZWVkIGZyb20gXCIuLi9zcmMvZmlndXJlcy9TcGVlZFwiO1xuXG5jb25zdCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5jb25zdCBhbmltYXRvcjogQW5pbWF0b3IgPSBuZXcgQW5pbWF0b3IoY2FudmFzKTtcblxuY29uc3QgYzE6IENpcmNsZSA9IG5ldyBDaXJjbGUoNTApO1xuY29uc3QgYzI6IENpcmNsZSA9IG5ldyBDaXJjbGUoNDApO1xuY29uc3QgcmVjdDogUmVjdCA9IG5ldyBSZWN0KDEwMCwgMTAwLCBuZXcgUG9pbnQoNTAsIDUwKSk7XG5cbmNvbnN0IGtleWJvYXJkID0gS2V5Ym9hcmQuZ2V0SW5zdGFuY2UoKTtcbmtleWJvYXJkLmFkZEhhbmRsZXIoKCkgPT4ge1xuICByZWN0LnNldFNwZWVkKG5ldyBTcGVlZCgwLCAtMjUpKTtcbn0sIHsga2V5OiBcIkFycm93VXBcIiB9KTtcbmtleWJvYXJkLmFkZEhhbmRsZXIoKCkgPT4ge1xuICByZWN0LnNldFNwZWVkKG5ldyBTcGVlZCgwLCAyNSkpO1xufSwgeyBrZXk6IFwiQXJyb3dEb3duXCIgfSk7XG5rZXlib2FyZC5hZGRIYW5kbGVyKCgpID0+IHtcbiAgcmVjdC5zZXRTcGVlZChuZXcgU3BlZWQoLTI1LCAwKSk7XG59LCB7IGtleTogXCJBcnJvd0xlZnRcIiB9KTtcbmtleWJvYXJkLmFkZEhhbmRsZXIoKCkgPT4ge1xuICByZWN0LnNldFNwZWVkKG5ldyBTcGVlZCgyNSwgMCkpO1xufSwgeyBrZXk6IFwiQXJyb3dSaWdodFwiIH0pO1xuXG5jMS5zZXRDb2xvcihuZXcgQ29sb3IoMjU1LCAwLCAwKSk7XG5jMi5zZXRDb2xvcihuZXcgQ29sb3IoMCwgMCwgMjI1KSk7XG5yZWN0LnNldENvbG9yKG5ldyBDb2xvcigwLCAyNTUsIDApKTtcblxuYW5pbWF0b3IuYWRkRmlndXJlKGMxKTtcbmFuaW1hdG9yLmFkZEZpZ3VyZShjMik7XG5hbmltYXRvci5hZGRGaWd1cmUocmVjdCk7XG5cbmFuaW1hdG9yLnN0YXJ0KCk7XG5cbiIsImltcG9ydCBGaWd1cmUgZnJvbSBcIi4uL2ZpZ3VyZXMvRmlndXJlXCI7XG5pbXBvcnQgTG9nZ2VyLCB7IExvZ01ldGhvZCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9Mb2dnZXJcIjtcbmltcG9ydCBDb2xvciBmcm9tIFwiLi4vZmlndXJlcy9Db2xvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYXRvciB7XG4gIHByaXZhdGUgc3RhdGljIEFOSU1BVE9SX1NUQVJUID0gXCJBTklNQVRPUjo6U1RBUlRcIjtcbiAgcHJpdmF0ZSBzdGF0aWMgQU5JTUFUT1JfU1RPUCA9IFwiQU5JTUFUT1I6OlNUT1BcIjtcbiAgcHJpdmF0ZSBzdGF0aWMgQU5JTUFUT1JfU1RBUlRfRlJBTUUgPSBcIkFOSU1BVE9SOjpTVEFSVF9GUkFNRVwiO1xuICBwcml2YXRlIHN0YXRpYyBBTklNQVRPUl9DTEVBUl9DQU5WQVMgPSBcIkFOSU1BVE9SOjpDTEVBUl9DQU5WQVNcIjtcbiAgcHJpdmF0ZSBzdGF0aWMgQU5JTUFUT1JfRU5EX0ZSQU1FID0gXCJBTklNQVRPUjo6RU5EX0ZSQU1FXCI7XG4gIHByaXZhdGUgc3RhdGljIEFERF9GSUdVUkUoZmlndXJlVVVJRDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYEFERF9GSUdVUkU6OiR7bmFtZX06OiR7ZmlndXJlVVVJRH1gO1xuICB9XG4gIHByaXZhdGUgc3RhdGljIFJFTkRFUl9GSUdVUkUoZmlndXJlVVVJRDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYFJFTkRFUl9GSUdVUkU6OiR7bmFtZX06OiR7ZmlndXJlVVVJRH1gO1xuICB9XG5cbiAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIHRoaXMuZmlndXJlcyA9IFtdO1xuICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLmJpbmQodGhpcyksIDEwMDAgLyA2MCkgLy8gaW50ZXJ2YWwgZm9yIDYwIGZwc1xuICB9XG5cbiAgcHJpdmF0ZSBpbnRlcnZhbDogbnVtYmVyO1xuICBwcml2YXRlIGlzUnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZmlndXJlczogRmlndXJlW107XG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xuXG4gIEBMb2dNZXRob2QoQW5pbWF0b3IuQU5JTUFUT1JfU1RBUlRfRlJBTUUpXG4gIEBMb2dNZXRob2QoQW5pbWF0b3IuQU5JTUFUT1JfRU5EX0ZSQU1FLCB0cnVlKVxuICBwcml2YXRlIHRpY2soKSB7XG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICB0aGlzLmNsZWFyQ2FudmFzKCk7XG4gICAgICB0aGlzLnJlbmRlckFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQWxsKCkge1xuICAgIHRoaXMuZmlndXJlcy5mb3JFYWNoKChmOiBGaWd1cmUpID0+IHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHQpIHtcbiAgICAgICAgZi5hcHBseVNwZWVkKClcbiAgICAgICAgZi5yZW5kZXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgTG9nZ2VyLmxvZyhBbmltYXRvci5SRU5ERVJfRklHVVJFKGYuZ2V0VVVJRCgpLCBmLmdldE5hbWUoKSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgQExvZ01ldGhvZChBbmltYXRvci5BTklNQVRPUl9DTEVBUl9DQU5WQVMsIHRydWUpXG4gIHByaXZhdGUgY2xlYXJDYW52YXMoKSB7XG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KS5wcmludCgpO1xuICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KDAsIDAsIDEwMDAsIDEwMDApOyAvLyAgVE9ETyDQsdGA0LDRgtGMINGA0LXQsNC70YzQvdGL0Lkg0YDQsNC30LzQtdGAINC40LcgRE9NXG4gICAgfVxuICB9XG5cbiAgQExvZ01ldGhvZChBbmltYXRvci5BTklNQVRPUl9TVEFSVCwgdHJ1ZSlcbiAgcHVibGljIHN0YXJ0KCkge1xuICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgfVxuXG4gIEBMb2dNZXRob2QoQW5pbWF0b3IuQU5JTUFUT1JfU1RPUCwgdHJ1ZSlcbiAgcHVibGljIHN0b3AoKSB7XG4gICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRGaWd1cmUoZjogRmlndXJlKSB7XG4gICAgdGhpcy5maWd1cmVzLnB1c2goZik7XG4gICAgTG9nZ2VyLmxvZyhBbmltYXRvci5BRERfRklHVVJFKGYuZ2V0VVVJRCgpLCBmLmdldE5hbWUoKSkpO1xuICB9XG59XG4iLCJpbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9zZXJ2aWNlcy9Mb2dnZXJcIjtcblxuZXhwb3J0IGVudW0gU1RBR0VTIHsgLy8gVE9ETyDRgdC00LXQu9Cw0YLRjCDRh9GC0L4g0LHRiyDRjdGC0L4g0LHRi9C70L4g0LjQvdGC0LXQs9GA0LjRgNC+0LLQsNC90L3QviDQsiBLZXlib2FyZFxuICBLRVlfVVAsXG4gIEtFWV9ET1dOLFxuICBLRVlfUFJFU1MsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUtleWJvYXJkT3B0aW9ucyB7XG4gIGtleTogc3RyaW5nO1xuICBjb250cm9sPzogYm9vbGVhbjtcbiAgb3B0aW9uPzogYm9vbGVhbjtcbiAgY29tbWFuZD86IGJvb2xlYW47XG4gIHN1cGVyPzogYm9vbGVhbjtcbiAgYWx0PzogYm9vbGVhbjtcbiAgc3RhZ2VzPzogU1RBR0VTW107XG59XG5cbmludGVyZmFjZSBJS2V5Ym9hcmRIYW5kbGVyIHtcbiAgaGFuZGxlcjogKCkgPT4gdm9pZCxcbiAgb3B0aW9uczogSUtleWJvYXJkT3B0aW9ucyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5Ym9hcmQge1xuICBwcml2YXRlIHN0YXRpYyBLRVlCT0FSRF9IQU5ETEVSX0NBTExfRVJST1IgPSBcIktFWUJPQVJEOjpIQU5ETEVSX0NBTEw6OkVSUk9SXCI7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlPzogS2V5Ym9hcmQ7XG5cbiAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBLZXlib2FyZCB7XG4gICAgaWYgKCFLZXlib2FyZC5pbnN0YW5jZSkge1xuICAgICAgS2V5Ym9hcmQuaW5zdGFuY2UgPSBuZXcgS2V5Ym9hcmQoKTtcbiAgICB9XG4gICAgcmV0dXJuIEtleWJvYXJkLmluc3RhbmNlO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlQcmVzcy5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlcnM6IElLZXlib2FyZEhhbmRsZXJbXSA9IFtdO1xuXG4gIHByaXZhdGUgaGFuZGxlS2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBjb25zdCBoYW5kbGVyc1RvQ2FsbDogSUtleWJvYXJkSGFuZGxlcltdID0gdGhpcy5oYW5kbGVycy5maWx0ZXIoKGg6IElLZXlib2FyZEhhbmRsZXIpID0+IHtcbiAgICAgIHJldHVybiBoLm9wdGlvbnMua2V5ID09PSBldmVudC5rZXk7XG4gICAgfSk7XG5cbiAgICBoYW5kbGVyc1RvQ2FsbC5mb3JFYWNoKChoOiBJS2V5Ym9hcmRIYW5kbGVyKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBoLmhhbmRsZXIoKTsgLy8gVE9ETyDQu9C+0LPQuNGA0L7QstCw0YLRjCDQutCw0LbQtNGL0Lkg0YPRgdC/0LXRiNC90YvQuSDQstGL0LfQvtCyINGF0LXQvdC00LvQtdGA0LAgKNCyINC90LDRh9Cw0LvQtSDQv9GA0LjQtNGD0LzQsNGC0Ywg0LrQsNC6KVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBMb2dnZXIubG9nKEtleWJvYXJkLktFWUJPQVJEX0hBTkRMRVJfQ0FMTF9FUlJPUikgLy8gVE9ETyDQtNC+0LHQsNCy0LjRgtGMINC70L7Qs9C10YDRgyDQvNC10YLQvtC0INC00LvRjyDQstGL0LLQvtC0INC+0YjQuNCx0L7QulxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwdWJsaWMgYWRkSGFuZGxlcihoYW5kbGVyOiAoKSA9PiB2b2lkLCBvcHRpb25zOiBJS2V5Ym9hcmRPcHRpb25zKSB7XG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKHsgaGFuZGxlciwgb3B0aW9ucyB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRBbGlhc2VzKCkgeyAvLyBUT0RPINC00L7QsdCw0LLQuNGC0Ywg0LDQu9C40LDRgdGLINC00LvRjyDQvNC10YLQsCDQutC70LDQstC40Ygg0L/QviDRgtC40L/RgyBhbHQgb3B0aW9uINGA0LDQstC90Ysg0Lgg0L/RgNC4INC90LDQttCw0YLQuNC4INC90LAgYWx0INCy0YvQt9GL0LLQsNGO0YLRjNGB0Y8g0LLRgdC1INC80LXRgtC+0LTRiyDQutC+0YLQvtGA0YvQtSDQt9Cw0LHQuNC90LbQtdC90Ysg0L3QsCBvcHRpb24g0Lgg0L3QsNC+0LHQvtGA0L7RglxuXG4gIH1cbn1cbiIsImltcG9ydCBGaWd1cmUgZnJvbSBcIi4vRmlndXJlXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgRmlndXJlIHtcbiAgY29uc3RydWN0b3IocmFkaXVzOiBudW1iZXIsIHBvaW50ID0gbmV3IFBvaW50KDAsIDApKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9pbnQ7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gIH1cblxuICBwcml2YXRlIHJhZGl1czogbnVtYmVyO1xuXG4gIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQuYXJjKHRoaXMucG9zaXRpb24uZ2V0WCgpLCB0aGlzLnBvc2l0aW9uLmdldFkoKSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkpO1xuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvci5wcmludCgpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG5cbiAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDaXJjbGVcIjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3Ige1xuICBjb25zdHJ1Y3RvciAocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlcikge1xuICAgIHRoaXMuciA9IHI7XG4gICAgdGhpcy5nID0gZztcbiAgICB0aGlzLmIgPSBiO1xuICB9XG4gIHI6IG51bWJlcjtcbiAgZzogbnVtYmVyO1xuICBiOiBudW1iZXI7XG5cbiAgcHVibGljIHByaW50KCkge1xuICAgIHJldHVybiBgcmdiKCR7dGhpcy5yfSwgJHt0aGlzLmd9LCAke3RoaXMuYn0pYDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0VVVJRCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9VVUlEXCI7XG5pbXBvcnQgQ29sb3IgZnJvbSBcIi4vQ29sb3JcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IExvZ2dlciwgeyBMb2dNZXRob2QgfSBmcm9tIFwiLi4vc2VydmljZXMvTG9nZ2VyXCI7XG5pbXBvcnQgU3BlZWQgZnJvbSBcIi4vU3BlZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgRmlndXJlIHtcbiAgcHJpdmF0ZSBzdGF0aWMgRklHVVJFX01PVkUodXVpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gYE1PVkU6OkZJR1VSRTo6JHtuYW1lfTo6JHt1dWlkfWA7XG4gIH1cblxuICBwcml2YXRlIFVVSUQ6IG51bWJlciA9IGdldFVVSUQoKTtcbiAgcHJvdGVjdGVkIGNvbG9yOiBDb2xvciA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KTtcbiAgcHJvdGVjdGVkIHBvc2l0aW9uOiBQb2ludCA9IG5ldyBQb2ludCgwLCAwKTtcbiAgcHJvdGVjdGVkIHNwZWVkOiBTcGVlZCA9IG5ldyBTcGVlZCgwLCAwKTtcblxuICBwdWJsaWMgYXBwbHlTcGVlZCgpIHtcbiAgICBjb25zdCBwOiBQb2ludCA9IHRoaXMuc3BlZWQuZ2V0RGVsdGEoKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFBvaW50KHRoaXMucG9zaXRpb24uZ2V0WCgpICsgcC5nZXRYKCksIHRoaXMucG9zaXRpb24uZ2V0WSgpICsgcC5nZXRZKCkpO1xuICAgIExvZ2dlci5sb2coRmlndXJlLkZJR1VSRV9NT1ZFKHRoaXMuZ2V0VVVJRCgpLCB0aGlzLmdldE5hbWUoKSkpO1xuICB9XG5cbiAgcHVibGljIGFic3RyYWN0IHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkO1xuXG4gIHB1YmxpYyBzZXRDb2xvcihjb2xvcjogQ29sb3IpIHtcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gIH1cblxuICBwdWJsaWMgc2V0UG9zaXRpb24ocDogUG9pbnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gIHA7XG4gIH1cblxuICBwdWJsaWMgc2V0U3BlZWQoczogU3BlZWQpIHtcbiAgICB0aGlzLnNwZWVkID0gcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRVVUlEKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuVVVJRDtcbiAgfVxuXG4gIHB1YmxpYyBhYnN0cmFjdCBnZXROYW1lKCk6IHN0cmluZztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50IHtcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBwcml2YXRlIHg6IG51bWJlcjtcbiAgcHJpdmF0ZSB5OiBudW1iZXI7XG5cbiAgcHVibGljIGdldFgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy54O1xuICB9XG5cbiAgcHVibGljIGdldFkoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy55O1xuICB9XG59XG4iLCJpbXBvcnQgRmlndXJlIGZyb20gXCIuL0ZpZ3VyZVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3QgZXh0ZW5kcyBGaWd1cmUge1xuICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcG9pbnQgPSBuZXcgUG9pbnQoMCwgMCkpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucG9zaXRpb24gPSBwb2ludDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XG5cbiAgcHVibGljIHJlbmRlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3IucHJpbnQoKTtcbiAgICBjb250ZXh0LmZpbGxSZWN0KHRoaXMucG9zaXRpb24uZ2V0WCgpLCB0aGlzLnBvc2l0aW9uLmdldFkoKSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICB9XG5cbiAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJSZWN0XCI7XG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGVlZCB7XG4gIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgdGhpcy5zcGVlZCA9IG5ldyBQb2ludCh4LCB5KTtcbiAgICB0aGlzLmxhc3RUaWNrID0gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIHByaXZhdGUgc3BlZWQ6IFBvaW50O1xuICBwcml2YXRlIGxhc3RUaWNrOiBudW1iZXI7XG5cbiAgc2V0U3BlZWQoczogUG9pbnQpIHtcbiAgICB0aGlzLnNwZWVkID0gcztcbiAgfVxuICBnZXREZWx0YSgpIHtcbiAgICBjb25zdCBwcmV2TGFzdFRpY2s6IG51bWJlciA9IHRoaXMubGFzdFRpY2s7XG4gICAgdGhpcy5sYXN0VGljayA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZGVsdGEgPSAodGhpcy5sYXN0VGljayAtIHByZXZMYXN0VGljaykgLyAxMDAwO1xuXG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnNwZWVkLmdldFgoKSAqIGRlbHRhLCB0aGlzLnNwZWVkLmdldFkoKSAqIGRlbHRhKTtcbiAgfVxufVxuIiwiY29uc3QgSVNfREVCVUcgPSB0cnVlO1xuY29uc3QgRklMVEVSID0gXCJNT1ZFXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciB7XG4gIHB1YmxpYyBzdGF0aWMgbG9nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChJU19ERUJVRykge1xuICAgICAgaWYgKChGSUxURVIgJiYgbWVzc2FnZS5pbmRleE9mKEZJTFRFUikgIT09IC0xKSB8fCAhRklMVEVSKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTG9nTWV0aG9kKG1lc3NhZ2U6IHN0cmluZywgY2FsbEFmdGVyOiBib29sZWFuID0gZmFsc2UpOiAodGFyZ2V0OiBPYmplY3QsIHByb3BlcnR5TmFtZTogc3RyaW5nLCBwcm9wZXJ0eURlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4gUHJvcGVydHlEZXNjcmlwdG9yIHtcbiAgcmV0dXJuIChcbiAgICB0YXJnZXQ6IE9iamVjdCxcbiAgICBwcm9wZXJ0eU5hbWU6IHN0cmluZyxcbiAgICBwcm9wZXJ0eURlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IHByb3BlcnR5RGVzY3JpcHRvci52YWx1ZTtcblxuICAgIHByb3BlcnR5RGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzOiBhbnlbXSkge1xuICAgICAgaWYgKCFjYWxsQWZ0ZXIpIHtcbiAgICAgICAgTG9nZ2VyLmxvZyhtZXNzYWdlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0ID0gbWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICBpZiAoY2FsbEFmdGVyKSB7XG4gICAgICAgIExvZ2dlci5sb2cobWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm9wZXJ0eURlc2NyaXB0b3I7XG4gIH1cbn07XG4iLCJsZXQgY291bnRlciA9IDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVVUlEKCk6IG51bWJlcntcbiAgcmV0dXJuIGNvdW50ZXIrKztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=