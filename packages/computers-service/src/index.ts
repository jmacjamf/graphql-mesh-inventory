import { createRouter, Response } from 'fets';
import { createServer } from 'node:http';

const router = createRouter({
    openAPI: {
        info: {
            title: 'Computers service example',
            description: 'Everything about Computers',
            version: '1.0',
        },
        servers: [
            {
                url: 'http://localhost:3003',
            }
        ],
        components: {
            schemas: {
                ComputerList: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        uuid: { type: 'string' },
                        name: { type: 'string'},
                        lastIpAddress: { type: 'string'},
                        supervised: { type: 'boolean'},
                        reportDate: { type: 'string' },
                        buildingId: { type: 'string'},
                        room: { type: 'string' },
                    },
                    required: [],
                    additionalProperties: false,
                },
            }
        } as const
    },
})
.route({
    method: 'GET',
    path: '/computers',
    operationId: 'AppController_computers',
    schemas: {
        responses: {
            200: {
                type: 'array',
                items: {
                    $ref: '#/components/schemas/ComputerList',
                },
            },
        }
    } as const,
    handler: () => Response.json(computers)
})

createServer(router).listen(3003, () => {
    console.log('Computers service is listening on http://localhost:3003');
});

const computers = [
    {
        id: '318',
        uuid: 'Foobar1',
        name: 'Antbristle',
        lastIpAddress: '198.13.49.53',
        supervised: false,
        reportDate: '2018-10-31T18:21:47.081Z',
        username: 'Chloe Harris',
        buildingId: '1',
        room: ''
    },
    {
        id: '319',
        uuid: 'Foobar2',
        name: 'Beetlespice',
        lastIpAddress: '33.10.185.197',
        supervised: false,
        reportDate: '2018-10-31T18:21:47.081Z',
        username: 'Joe Smith',
        buildingId: '2',
        room: ''
    },
    {
        id: '320',
        uuid: 'Foobar3',
        name: 'Journey',
        lastIpAddress: '33.10.185.198',
        supervised: false,
        reportDate: '2018-10-31T18:21:47.081Z',
        username: 'Sam Darney',
        buildingId: '2',
        room: ''
    },
];