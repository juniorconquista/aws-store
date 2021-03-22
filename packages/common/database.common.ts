import * as AWS from 'aws-sdk';
import Response from '@common/response.common';

type ScanInput = AWS.DynamoDB.DocumentClient.ScanInput;
type ScanOutput = AWS.DynamoDB.DocumentClient.ScanOutput;

// TODO: Ater to .env
const config = { region: "localhost", endpoint: "http://localhost:8008/" };
AWS.config.update(config);
const documentClient = new AWS.DynamoDB.DocumentClient();

/**
 *
 *
 * @export
 * @class Database
 */
export default class Database {
    /**
     *
     *
     * @param {ScanInput} params
     * @memberof Database
     */
    list = async (params: ScanInput): Promise<ScanOutput> => {
        try {
            return await documentClient.scan(params).promise();
        } catch (error) {
            console.error(`list-error: ${error}`);
            throw new Response({}, {}, 500, `create-error: ${error}`);
        }
    }
}