/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthRegister(
        body?: {
            email: string;
            nombre: string;
            password: string;
            nacimiento: string;
            reservas: any;
        },
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: body,
        });
    }
    /**
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthLogin(
        body?: {
            password: string;
            email: string;
        },
    ): CancelablePromise<{
        usuario: {
            usuarioID: number;
            email: string;
            nombre: string;
            password: string;
            nacimiento: string;
            reservas: any;
        };
        token: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/login',
            body: body,
        });
    }
    /**
     * @param authorization
     * @returns any Default Response
     * @throws ApiError
     */
    public static getAuthReservas(
        authorization: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/reservas',
            headers: {
                'authorization': authorization,
            },
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static deleteAuthReservas(
        authorization: string,
        body?: {
            reservaID: string;
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/auth/reservas',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
    /**
     * @param authorization
     * @param body
     * @returns any Default Response
     * @throws ApiError
     */
    public static postAuthReservar(
        authorization: string,
        body?: {
            fecha: string;
            hora: string;
            deporte: string;
            local: string;
            image: string;
            tipo: string;
        },
    ): CancelablePromise<{
        result: boolean;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reservar',
            headers: {
                'authorization': authorization,
            },
            body: body,
        });
    }
}
