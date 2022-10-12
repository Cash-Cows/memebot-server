/// <reference types="qs" />
import { Readable } from 'stream';
import FormData from 'form-data';
import axios from 'axios';
import express, { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { Request as InceptRequest, Response as InceptResponse, EventEmitter, Exception } from '@inceptjs/framework';
import { InteractionType } from 'discord-interactions';
import Web3 from 'web3';
import FaceSmash from './lib/FaceSmash';
import ServiceContract, { BigNumber } from './lib/ServiceContract';
import { toOptionsHash, tryTo, reply, message } from './functions';
import { prisma, Prisma, SourceType, ConsumerType, SearchType, MemeType } from './prisma';
import { Box, Frame, ArrayOption, ObjectString, ObjectAny, Direction, IPFSResponse, TenorResponse, TenorSearchResult, TenorSearchResponse } from './types';
import commands from '../config/commands.json';
declare const env: {
    discordApplicationId: string;
    discordTokenId: string;
    discordPublicKey: string;
    discordGuildId: string;
    infuraKey: string;
    infuraSecret: string;
    tenorKey: string;
    tenorClient: string;
    adminKey: string;
};
declare const app: import("express-serve-static-core").Express;
declare const emitter: EventEmitter;
declare const models: string;
declare const service: ServiceContract;
declare const discord: import("axios").AxiosInstance;
declare const tenor: import("axios").AxiosInstance;
declare const infura: import("axios").AxiosInstance;
declare const verify: (req: express.Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: express.Response<any, Record<string, any>>, next: express.NextFunction) => void;
declare const remit: (event: string, request: ObjectAny | InceptRequest, response?: InceptResponse | null) => Promise<any>;
export { env, models, commands, app, prisma, emitter, service, axios, tenor, infura, discord, reply, remit, tryTo, verify, message, express, toOptionsHash, Web3, Readable, FormData, Exception, FaceSmash, EventEmitter, InceptRequest, InceptResponse, ObjectAny, ArrayOption, ObjectString, Box, Frame, BigNumber, IPFSResponse, ExpressRequest, ExpressResponse, InteractionType, TenorResponse, TenorSearchResult, TenorSearchResponse, Direction, Prisma, MemeType, SearchType, SourceType, ConsumerType };
