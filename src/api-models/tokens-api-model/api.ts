/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for Tokens 
 * The Selling Partner API for Tokens provides a secure way to access a customers\'s PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes you to make subsequent requests to access these restricted resources.
 *
 * The version of the OpenAPI document: 2021-03-01
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * The request schema for the createRestrictedDataToken operation.
 * @export
 * @interface CreateRestrictedDataTokenRequest
 */
export interface CreateRestrictedDataTokenRequest {
    /**
     * A list of restricted resources. Maximum: 50
     * @type {Array<RestrictedResource>}
     * @memberof CreateRestrictedDataTokenRequest
     */
    restrictedResources: Array<RestrictedResource>;
}
/**
 * The response schema for the createRestrictedDataToken operation.
 * @export
 * @interface CreateRestrictedDataTokenResponse
 */
export interface CreateRestrictedDataTokenResponse {
    /**
     * A Restricted Data Token (RDT). This is a short-lived access token that authorizes you to access the restricted resources that you specified. Pass this value with the x-amzn-access-token header when making subsequent calls to these restricted resources.
     * @type {string}
     * @memberof CreateRestrictedDataTokenResponse
     */
    restrictedDataToken?: string;
    /**
     * The lifetime of the Restricted Data Token, in seconds.
     * @type {number}
     * @memberof CreateRestrictedDataTokenResponse
     */
    expiresIn?: number;
}
/**
 * A list of error responses returned when a request is unsuccessful.
 * @export
 * @interface ErrorList
 */
export interface ErrorList {
    /**
     * 
     * @type {Array<Error>}
     * @memberof ErrorList
     */
    errors?: Array<Error>;
}
/**
 * An error response returned when the request is unsuccessful.
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * An error code that identifies the type of error that occurred.
     * @type {string}
     * @memberof ModelError
     */
    code: string;
    /**
     * A message that describes the error condition.
     * @type {string}
     * @memberof ModelError
     */
    message: string;
    /**
     * Additional details that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * Model of a restricted resource.
 * @export
 * @interface RestrictedResource
 */
export interface RestrictedResource {
    /**
     * The HTTP method used with the restricted resource.
     * @type {string}
     * @memberof RestrictedResource
     */
    method: RestrictedResourceMethodEnum | 'GET' | 'PUT' | 'POST' | 'DELETE';
    /**
     * The path from a restricted operation. This could be:  - A specific path containing a seller\'s order ID, for example ```/orders/v0/orders/902-3159896-1390916/address```.  - A generic path that does not contain a seller\'s order ID, for example```/orders/v0/orders/{orderId}/address```).
     * @type {string}
     * @memberof RestrictedResource
     */
    path: string;
}

/**
    * @export
    * @enum {string}
    */
export enum RestrictedResourceMethodEnum {
    Get = 'GET',
    Put = 'PUT',
    Post = 'POST',
    Delete = 'DELETE'
}


/**
 * TokensApi - axios parameter creator
 * @export
 */
export const TokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII). See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  The path of a restricted resource can be: - A specific path containing a seller\'s order ID, for example ```/orders/v0/orders/902-3159896-1390916/address```. The returned RDT authorizes a subsequent call to the getOrderAddress operation of the Orders API for that specific order only. For example, ```GET /orders/v0/orders/902-3159896-1390916/address```. - A generic path that does not contain a seller\'s order ID, for example```/orders/v0/orders/{orderId}/address```). The returned RDT authorizes subsequent calls to the getOrderAddress operation for *any* of a seller\'s order IDs. For example, ```GET /orders/v0/orders/902-3159896-1390916/address``` and ```GET /orders/v0/orders/483-3488972-0896720/address```  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateRestrictedDataTokenRequest} body The restricted data token request details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRestrictedDataToken: async (body: CreateRestrictedDataTokenRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('createRestrictedDataToken', 'body', body)
            const localVarPath = `/tokens/2021-03-01/restrictedDataToken`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokensApi - functional programming interface
 * @export
 */
export const TokensApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII). See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  The path of a restricted resource can be: - A specific path containing a seller\'s order ID, for example ```/orders/v0/orders/902-3159896-1390916/address```. The returned RDT authorizes a subsequent call to the getOrderAddress operation of the Orders API for that specific order only. For example, ```GET /orders/v0/orders/902-3159896-1390916/address```. - A generic path that does not contain a seller\'s order ID, for example```/orders/v0/orders/{orderId}/address```). The returned RDT authorizes subsequent calls to the getOrderAddress operation for *any* of a seller\'s order IDs. For example, ```GET /orders/v0/orders/902-3159896-1390916/address``` and ```GET /orders/v0/orders/483-3488972-0896720/address```  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateRestrictedDataTokenRequest} body The restricted data token request details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRestrictedDataToken(body: CreateRestrictedDataTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateRestrictedDataTokenResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRestrictedDataToken(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokensApi - factory interface
 * @export
 */
export const TokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokensApiFp(configuration)
    return {
        /**
         * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII). See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  The path of a restricted resource can be: - A specific path containing a seller\'s order ID, for example ```/orders/v0/orders/902-3159896-1390916/address```. The returned RDT authorizes a subsequent call to the getOrderAddress operation of the Orders API for that specific order only. For example, ```GET /orders/v0/orders/902-3159896-1390916/address```. - A generic path that does not contain a seller\'s order ID, for example```/orders/v0/orders/{orderId}/address```). The returned RDT authorizes subsequent calls to the getOrderAddress operation for *any* of a seller\'s order IDs. For example, ```GET /orders/v0/orders/902-3159896-1390916/address``` and ```GET /orders/v0/orders/483-3488972-0896720/address```  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {CreateRestrictedDataTokenRequest} body The restricted data token request details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRestrictedDataToken(body: CreateRestrictedDataTokenRequest, options?: any): AxiosPromise<CreateRestrictedDataTokenResponse> {
            return localVarFp.createRestrictedDataToken(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRestrictedDataToken operation in TokensApi.
 * @export
 * @interface TokensApiCreateRestrictedDataTokenRequest
 */
export interface TokensApiCreateRestrictedDataTokenRequest {
    /**
     * The restricted data token request details.
     * @type {CreateRestrictedDataTokenRequest}
     * @memberof TokensApiCreateRestrictedDataToken
     */
    readonly body: CreateRestrictedDataTokenRequest
}

/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
export class TokensApi extends BaseAPI {
    /**
     * Returns a Restricted Data Token (RDT) for one or more restricted resources that you specify. A restricted resource is the HTTP method and path from a restricted operation that returns Personally Identifiable Information (PII). See the Tokens API Use Case Guide for a list of restricted operations. Use the RDT returned here as the access token in subsequent calls to the corresponding restricted operations.  The path of a restricted resource can be: - A specific path containing a seller\'s order ID, for example ```/orders/v0/orders/902-3159896-1390916/address```. The returned RDT authorizes a subsequent call to the getOrderAddress operation of the Orders API for that specific order only. For example, ```GET /orders/v0/orders/902-3159896-1390916/address```. - A generic path that does not contain a seller\'s order ID, for example```/orders/v0/orders/{orderId}/address```). The returned RDT authorizes subsequent calls to the getOrderAddress operation for *any* of a seller\'s order IDs. For example, ```GET /orders/v0/orders/902-3159896-1390916/address``` and ```GET /orders/v0/orders/483-3488972-0896720/address```  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 1 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {TokensApiCreateRestrictedDataTokenRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public createRestrictedDataToken(requestParameters: TokensApiCreateRestrictedDataTokenRequest, options?: any) {
        return TokensApiFp(this.configuration).createRestrictedDataToken(requestParameters.body, options).then((request) => request(this.axios, this.basePath));
    }
}


