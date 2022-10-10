"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../utils/prisma");
const ServiceContract_1 = require("./ServiceContract");
class Consumer {
    static consume(walletAddress, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.consumer.update({
                where: { walletAddress },
                data: { consumed: amount }
            });
        });
    }
    static get(id, key = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key) {
                if (typeof id === 'string') {
                    key = 'walletAddress';
                }
                else {
                    key = 'id';
                }
            }
            const where = {};
            where[key] = id;
            return yield prisma_1.prisma.consumer.findUnique({ where });
        });
    }
    static getOrThrow(id, key = null) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!key) {
                if (typeof id === 'string') {
                    key = 'walletAddress';
                }
                else {
                    key = 'id';
                }
            }
            const where = {};
            where[key] = id;
            return yield prisma_1.prisma.consumer.findUniqueOrThrow({ where });
        });
    }
    static getWithBalance(id, key, service) {
        return __awaiter(this, void 0, void 0, function* () {
            const consumer = yield this.getOrThrow(id, key);
            const balance = yield service.balanceOf(consumer.walletAddress);
            const consumed = ServiceContract_1.BigNumber.from(consumer.consumed);
            return Object.assign(Object.assign({}, consumer), { loadedBalance: balance.toString(), availableBalance: balance.sub(consumed).toString(), serviceRate: service.rate.toString() });
        });
    }
    static register(walletAddress, discordId, images) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.consumer.upsert({
                where: { walletAddress },
                update: { images, discordId },
                create: { walletAddress, images, discordId }
            });
        });
    }
}
exports.default = Consumer;
