import { Request } from 'express'
import { TNext, Tmethod } from './types'
import Knex from 'knex'
export interface IKeyVal {
    [key: string]: any
}
export interface IRoutes {
    post?: object[],
    get?: object[],
    delete?: object[],
    put?: object[],
    middleware: string[]
}
export interface IRoute {
    path: string,
    service: string
}
export interface IService {
    method?: Tmethod[],
    transaction: boolean,
    auth?: boolean,
    prepare: (input: any | any[], trx: Knex | Knex.Transaction) => any,
    process: (input: any, originalInput: any, trx: Knex | Knex.Transaction) => any,
    rules: object,
    customMessages?: object | undefined
}
export interface IErrorData {
    type: string,
    detail: string
}
export interface IMiddleware {
    before(req: Request, service: IService, input: any, next: TNext): void,
    after(req: Request, service: IService, input: any): void
}
export interface IGmInstance {
    name: string,
    instance: IMiddleware
}