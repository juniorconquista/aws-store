import * as AWS from 'aws-sdk';
import getProducts from '../repositories/list.repository';

type ScanOutput = AWS.DynamoDB.DocumentClient.ScanOutput;

/**
 *
 *
 * @return {*}  {Promise<ScanOutput>}
 */
const list = async (): Promise<ScanOutput> => {
    const products = await getProducts();
    return products
};

export default list;