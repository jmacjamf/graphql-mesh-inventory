import { createRouter, Response } from 'fets';
import { createServer } from 'node:http';

const router = createRouter({
    openAPI: {
        info: {
            title: 'Buildings service example',
            description: 'Everything about buildings',
            version: '1.0',
        },
        servers: [
            {
                url: 'http://localhost:3002',
            }
        ],
        components: {
            schemas: {
                Building: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string'},
                        streetAddress1: { type: 'string'},
                        streetAddress2: { type: 'string'},
                        city: { type: 'string' },
                        stateProvince: { type: 'string'},
                        zipPostalCode: { type: 'string' },
                        country: { type: 'string' },
                    },
                    required: ['id', 'name', 'streetAddress1', 'streetAddress2', 'city', 'stateProvince', 'zipPostalCode', 'country'],
                    additionalProperties: false,
                },
            }
        } as const
    },
})
    .route({
        method: 'GET',
        path: '/buildings',
        operationId: 'AppController_buildings',
        schemas: {
            responses: {
                200: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Building',
                    },
                },
            }
        } as const,
        handler: () => Response.json(buildings)
    })
    .route({
        method: 'GET',
        path: '/buildings/:id',
        operationId: 'AppController_building',
        schemas: {
            request: {
                params: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                    },
                    required: ['id'],
                    additionalProperties: false,
                },
            },
            responses: {
                200: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Building',
                    },
                },
            }
        } as const,
        handler(req) {
            const building = buildings.find(building => building.id === req.params.id);
            if (!building) {
                return Response.json({
                    message: `Building with id ${req.params.id} not found`,
                }, {
                    status: 404,
                })
            }
            return Response.json(building);
        }
    });

createServer(router).listen(3002, () => {
    console.log('Buildings service is listening on http://localhost:3002');
});

const buildings = [
    {
        id: '1',
        name: 'Illusion Perdues building',
        streetAddress1: '1 Main Street',
        streetAddress2: 'Suite 100',
        city: 'Main City',
        stateProvince: 'Arizona',
        zipPostalCode: '85085',
        country: 'US',
    },
    {
        id: '2',
        name: 'Thompson building',
        streetAddress1: '2 Main Street',
        streetAddress2: 'Suite 200',
        city: 'Main City',
        stateProvince: 'Arizona',
        zipPostalCode: '85085',
        country: 'US',
    },
];