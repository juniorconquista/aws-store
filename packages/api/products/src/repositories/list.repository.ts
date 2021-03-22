import * as AWS from 'aws-sdk';
import Database from '@common/database.common'
import 'source-map-support/register';

const { PRODUCTS_TABLE } = process.env;
type ScanOutput = AWS.DynamoDB.DocumentClient.ScanOutput;

/**
 *
 *
 * @return {*}  {Promise<ScanOutput>}
 */
const list = async (): Promise<ScanOutput> => {
    // Initialise database service
    const database = new Database();
    return await database.list({ TableName: PRODUCTS_TABLE });
};

export default list;
