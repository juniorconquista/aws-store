export default {
    getProducts: {
        handler: 'handler.getProducts',
        events: [
            {
                http: {
                    method: 'GET',
                    path: 'products',
                    cors: true
                }
            }
        ]
    }
}
