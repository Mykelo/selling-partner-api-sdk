/* tslint:disable */
/* eslint-disable */
/**
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon\'s fulfillment network. Today this API is available only in the North America region. In 2021 we plan to release this API in the Europe and Far East regions.
 *
 * The version of the OpenAPI document: v1
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
 * The Response schema.
 * @export
 * @interface GetInventorySummariesResponse
 */
export interface GetInventorySummariesResponse {
    /**
     * 
     * @type {GetInventorySummariesResult}
     * @memberof GetInventorySummariesResponse
     */
    payload?: GetInventorySummariesResult;
    /**
     * 
     * @type {Pagination}
     * @memberof GetInventorySummariesResponse
     */
    pagination?: Pagination;
    /**
     * A list of error responses returned when a request is unsuccessful.
     * @type {Array<Error>}
     * @memberof GetInventorySummariesResponse
     */
    errors?: Array<Error>;
}
/**
 * The payload schema for the getInventorySummaries operation.
 * @export
 * @interface GetInventorySummariesResult
 */
export interface GetInventorySummariesResult {
    /**
     * 
     * @type {Granularity}
     * @memberof GetInventorySummariesResult
     */
    granularity: Granularity;
    /**
     * A list of inventory summaries.
     * @type {Array<InventorySummary>}
     * @memberof GetInventorySummariesResult
     */
    inventorySummaries: Array<InventorySummary>;
}
/**
 * Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace.
 * @export
 * @interface Granularity
 */
export interface Granularity {
    /**
     * The granularity type for the inventory aggregation level.
     * @type {string}
     * @memberof Granularity
     */
    granularityType?: GranularityGranularityTypeEnum | 'Marketplace';
    /**
     * The granularity ID for the specified granularity type. When granularityType is Marketplace, specify the marketplaceId.
     * @type {string}
     * @memberof Granularity
     */
    granularityId?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum GranularityGranularityTypeEnum {
    Marketplace = 'Marketplace'
}

/**
 * Summarized inventory details. This object will not appear if the details parameter in the request is false.
 * @export
 * @interface InventoryDetails
 */
export interface InventoryDetails {
    /**
     * The item quantity that can be picked, packed, and shipped.
     * @type {number}
     * @memberof InventoryDetails
     */
    fulfillableQuantity?: number;
    /**
     * The number of units in an inbound shipment for which you have notified Amazon.
     * @type {number}
     * @memberof InventoryDetails
     */
    inboundWorkingQuantity?: number;
    /**
     * The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number.
     * @type {number}
     * @memberof InventoryDetails
     */
    inboundShippedQuantity?: number;
    /**
     * The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed.
     * @type {number}
     * @memberof InventoryDetails
     */
    inboundReceivingQuantity?: number;
    /**
     * 
     * @type {ReservedQuantity}
     * @memberof InventoryDetails
     */
    reservedQuantity?: ReservedQuantity;
    /**
     * 
     * @type {ResearchingQuantity}
     * @memberof InventoryDetails
     */
    researchingQuantity?: ResearchingQuantity;
    /**
     * 
     * @type {UnfulfillableQuantity}
     * @memberof InventoryDetails
     */
    unfulfillableQuantity?: UnfulfillableQuantity;
}
/**
 * Inventory summary for a specific item.
 * @export
 * @interface InventorySummary
 */
export interface InventorySummary {
    /**
     * The Amazon Standard Identification Number (ASIN) of an item.
     * @type {string}
     * @memberof InventorySummary
     */
    asin?: string;
    /**
     * Amazon\'s fulfillment network SKU identifier.
     * @type {string}
     * @memberof InventorySummary
     */
    fnSku?: string;
    /**
     * The seller SKU of the item.
     * @type {string}
     * @memberof InventorySummary
     */
    sellerSku?: string;
    /**
     * The condition of the item as described by the seller (for example, New Item).
     * @type {string}
     * @memberof InventorySummary
     */
    condition?: string;
    /**
     * 
     * @type {InventoryDetails}
     * @memberof InventorySummary
     */
    inventoryDetails?: InventoryDetails;
    /**
     * The date and time that any quantity was last updated.
     * @type {string}
     * @memberof InventorySummary
     */
    lastUpdatedTime?: string;
    /**
     * The localized language product title of the item within the specific marketplace.
     * @type {string}
     * @memberof InventorySummary
     */
    productName?: string;
    /**
     * The total number of units in an inbound shipment or in Amazon fulfillment centers.
     * @type {number}
     * @memberof InventorySummary
     */
    totalQuantity?: number;
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
     * A message that describes the error condition in a human-readable form.
     * @type {string}
     * @memberof ModelError
     */
    message?: string;
    /**
     * Additional information that can help the caller understand or fix the issue.
     * @type {string}
     * @memberof ModelError
     */
    details?: string;
}
/**
 * The process of returning the results to a request in batches of a defined size called pages. This is done to exercise some control over result size and overall throughput. It\'s a form of traffic management.
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * A generated string used to retrieve the next page of the result. If nextToken is returned, pass the value of nextToken to the next request. If nextToken is not returned, there are no more items to return.
     * @type {string}
     * @memberof Pagination
     */
    nextToken?: string;
}
/**
 * The number of misplaced or warehouse damaged units that are actively being confirmed at our fulfillment centers.
 * @export
 * @interface ResearchingQuantity
 */
export interface ResearchingQuantity {
    /**
     * The total number of units currently being researched in Amazon\'s fulfillment network.
     * @type {number}
     * @memberof ResearchingQuantity
     */
    totalResearchingQuantity?: number;
    /**
     * A list of quantity details for items currently being researched.
     * @type {Array<ResearchingQuantityEntry>}
     * @memberof ResearchingQuantity
     */
    researchingQuantityBreakdown?: Array<ResearchingQuantityEntry>;
}
/**
 * The misplaced or warehouse damaged inventory that is actively being confirmed at our fulfillment centers.
 * @export
 * @interface ResearchingQuantityEntry
 */
export interface ResearchingQuantityEntry {
    /**
     * The duration of the research.
     * @type {string}
     * @memberof ResearchingQuantityEntry
     */
    name: ResearchingQuantityEntryNameEnum | 'researchingQuantityInShortTerm' | 'researchingQuantityInMidTerm' | 'researchingQuantityInLongTerm';
    /**
     * The number of units.
     * @type {number}
     * @memberof ResearchingQuantityEntry
     */
    quantity: number;
}

/**
    * @export
    * @enum {string}
    */
export enum ResearchingQuantityEntryNameEnum {
    ResearchingQuantityInShortTerm = 'researchingQuantityInShortTerm',
    ResearchingQuantityInMidTerm = 'researchingQuantityInMidTerm',
    ResearchingQuantityInLongTerm = 'researchingQuantityInLongTerm'
}

/**
 * The quantity of reserved inventory.
 * @export
 * @interface ReservedQuantity
 */
export interface ReservedQuantity {
    /**
     * The total number of units in Amazon\'s fulfillment network that are currently being picked, packed, and shipped; or are sidelined for measurement, sampling, or other internal processes.
     * @type {number}
     * @memberof ReservedQuantity
     */
    totalReservedQuantity?: number;
    /**
     * The number of units reserved for customer orders.
     * @type {number}
     * @memberof ReservedQuantity
     */
    pendingCustomerOrderQuantity?: number;
    /**
     * The number of units being transferred from one fulfillment center to another.
     * @type {number}
     * @memberof ReservedQuantity
     */
    pendingTransshipmentQuantity?: number;
    /**
     * The number of units that have been sidelined at the fulfillment center for additional processing.
     * @type {number}
     * @memberof ReservedQuantity
     */
    fcProcessingQuantity?: number;
}
/**
 * The quantity of unfulfillable inventory.
 * @export
 * @interface UnfulfillableQuantity
 */
export interface UnfulfillableQuantity {
    /**
     * The total number of units in Amazon\'s fulfillment network in unsellable condition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    totalUnfulfillableQuantity?: number;
    /**
     * The number of units in customer damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    customerDamagedQuantity?: number;
    /**
     * The number of units in warehouse damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    warehouseDamagedQuantity?: number;
    /**
     * The number of units in distributor damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    distributorDamagedQuantity?: number;
    /**
     * The number of units in carrier damaged disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    carrierDamagedQuantity?: number;
    /**
     * The number of units in defective disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    defectiveQuantity?: number;
    /**
     * The number of units in expired disposition.
     * @type {number}
     * @memberof UnfulfillableQuantity
     */
    expiredQuantity?: number;
}

/**
 * FbaInventoryApi - axios parameter creator
 * @export
 */
export const FbaInventoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 90 | 150 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {'Marketplace'} granularityType The granularity type for the inventory aggregation level.
         * @param {string} granularityId The granularity ID for the inventory aggregation level.
         * @param {Array<string>} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
         * @param {boolean} [details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
         * @param {string} [startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
         * @param {Array<string>} [sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
         * @param {string} [nextToken] String token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInventorySummaries: async (granularityType: 'Marketplace', granularityId: string, marketplaceIds: Array<string>, details?: boolean, startDateTime?: string, sellerSkus?: Array<string>, nextToken?: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'granularityType' is not null or undefined
            assertParamExists('getInventorySummaries', 'granularityType', granularityType)
            // verify required parameter 'granularityId' is not null or undefined
            assertParamExists('getInventorySummaries', 'granularityId', granularityId)
            // verify required parameter 'marketplaceIds' is not null or undefined
            assertParamExists('getInventorySummaries', 'marketplaceIds', marketplaceIds)
            const localVarPath = `/fba/inventory/v1/summaries`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (details !== undefined) {
                localVarQueryParameter['details'] = details;
            }

            if (granularityType !== undefined) {
                localVarQueryParameter['granularityType'] = granularityType;
            }

            if (granularityId !== undefined) {
                localVarQueryParameter['granularityId'] = granularityId;
            }

            if (startDateTime !== undefined) {
                localVarQueryParameter['startDateTime'] = (startDateTime as any instanceof Date) ?
                    (startDateTime as any).toISOString() :
                    startDateTime;
            }

            if (sellerSkus) {
                localVarQueryParameter['sellerSkus'] = sellerSkus.join(COLLECTION_FORMATS.csv);
            }

            if (nextToken !== undefined) {
                localVarQueryParameter['nextToken'] = nextToken;
            }

            if (marketplaceIds) {
                localVarQueryParameter['marketplaceIds'] = marketplaceIds.join(COLLECTION_FORMATS.csv);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FbaInventoryApi - functional programming interface
 * @export
 */
export const FbaInventoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FbaInventoryApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 90 | 150 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {'Marketplace'} granularityType The granularity type for the inventory aggregation level.
         * @param {string} granularityId The granularity ID for the inventory aggregation level.
         * @param {Array<string>} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
         * @param {boolean} [details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
         * @param {string} [startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
         * @param {Array<string>} [sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
         * @param {string} [nextToken] String token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getInventorySummaries(granularityType: 'Marketplace', granularityId: string, marketplaceIds: Array<string>, details?: boolean, startDateTime?: string, sellerSkus?: Array<string>, nextToken?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetInventorySummariesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, nextToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * FbaInventoryApi - factory interface
 * @export
 */
export const FbaInventoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FbaInventoryApiFp(configuration)
    return {
        /**
         * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 90 | 150 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
         * @param {'Marketplace'} granularityType The granularity type for the inventory aggregation level.
         * @param {string} granularityId The granularity ID for the inventory aggregation level.
         * @param {Array<string>} marketplaceIds The marketplace ID for the marketplace for which to return inventory summaries.
         * @param {boolean} [details] true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
         * @param {string} [startDateTime] A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
         * @param {Array<string>} [sellerSkus] A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
         * @param {string} [nextToken] String token returned in the response of your previous request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getInventorySummaries(granularityType: 'Marketplace', granularityId: string, marketplaceIds: Array<string>, details?: boolean, startDateTime?: string, sellerSkus?: Array<string>, nextToken?: string, options?: any): AxiosPromise<GetInventorySummariesResponse> {
            return localVarFp.getInventorySummaries(granularityType, granularityId, marketplaceIds, details, startDateTime, sellerSkus, nextToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getInventorySummaries operation in FbaInventoryApi.
 * @export
 * @interface FbaInventoryApiGetInventorySummariesRequest
 */
export interface FbaInventoryApiGetInventorySummariesRequest {
    /**
     * The granularity type for the inventory aggregation level.
     * @type {'Marketplace'}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly granularityType: 'Marketplace'

    /**
     * The granularity ID for the inventory aggregation level.
     * @type {string}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly granularityId: string

    /**
     * The marketplace ID for the marketplace for which to return inventory summaries.
     * @type {Array<string>}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly marketplaceIds: Array<string>

    /**
     * true to return inventory summaries with additional summarized inventory details and quantities. Otherwise, returns inventory summaries only (default value).
     * @type {boolean}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly details?: boolean

    /**
     * A start date and time in ISO8601 format. If specified, all inventory summaries that have changed since then are returned. You must specify a date and time that is no earlier than 18 months prior to the date and time when you call the API. Note: Changes in inboundWorkingQuantity, inboundShippedQuantity and inboundReceivingQuantity are not detected.
     * @type {string}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly startDateTime?: string

    /**
     * A list of seller SKUs for which to return inventory summaries. You may specify up to 50 SKUs.
     * @type {Array<string>}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly sellerSkus?: Array<string>

    /**
     * String token returned in the response of your previous request.
     * @type {string}
     * @memberof FbaInventoryApiGetInventorySummaries
     */
    readonly nextToken?: string
}

/**
 * FbaInventoryApi - object-oriented interface
 * @export
 * @class FbaInventoryApi
 * @extends {BaseAPI}
 */
export class FbaInventoryApi extends BaseAPI {
    /**
     * Returns a list of inventory summaries. The summaries returned depend on the presence or absence of the startDateTime and sellerSkus parameters:  - All inventory summaries with available details are returned when the startDateTime and sellerSkus parameters are omitted. - When startDateTime is provided, the operation returns inventory summaries that have had changes after the date and time specified. The sellerSkus parameter is ignored. - When the sellerSkus parameter is provided, the operation returns inventory summaries for only the specified sellerSkus.  **Usage Plan:**  | Rate (requests per second) | Burst | | ---- | ---- | | 90 | 150 |  For more information, see \"Usage Plans and Rate Limits\" in the Selling Partner API documentation.
     * @param {FbaInventoryApiGetInventorySummariesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FbaInventoryApi
     */
    public getInventorySummaries(requestParameters: FbaInventoryApiGetInventorySummariesRequest, options?: any) {
        return FbaInventoryApiFp(this.configuration).getInventorySummaries(requestParameters.granularityType, requestParameters.granularityId, requestParameters.marketplaceIds, requestParameters.details, requestParameters.startDateTime, requestParameters.sellerSkus, requestParameters.nextToken, options).then((request) => request(this.axios, this.basePath));
    }
}


