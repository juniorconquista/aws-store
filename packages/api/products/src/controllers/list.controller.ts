import { APIGatewayProxyResult } from 'aws-lambda';
import type { ValidatedEventAPIGatewayProxyEvent } from '@common/api-gateway.common';
import { middyfy } from '@common/lambda.common';
import Response from '@common/response.common';
import { StatusCode } from '@enums/status-code.enum';
import { ResponseMessage } from '@enums/response-message.enum';
import 'source-map-support/register';

import schema from '../schemas/create.schema';
import getService from '../services/list.service';

/**
 *
 *
 * @return {*}  {Promise<APIGatewayProxyResult>}
 */
const list: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (): Promise<APIGatewayProxyResult> => {
    try {
        const products = await getService();
        const response = new Response(
            products.Items,
            {
                total: products.Count,
                totalDocs: products.ScannedCount
            },
            StatusCode.OK,
            ResponseMessage.GET_LIST_PRODUCTS_SUCCESS
        );
        return response.generate();
    }
    catch (error) {
        console.log('error', error)
        const response = (error instanceof Response) ? error : new Response({}, {}, StatusCode.ERROR, ResponseMessage.GET_LIST_PRODUCTS_FAIL);
        return response.generate();
    }
}

export const main = middyfy(list);
