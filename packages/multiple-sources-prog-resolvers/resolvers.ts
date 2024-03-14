import { Resolvers } from './.mesh'

const resolvers: Resolvers = {
  Computer: {
    buildingId: {
      selectionSet: /* GraphQL */`
      {
        buildingId
        name
        lastIpAddress
      }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Computers.Query.computer({
          root,
          args: {
            id: root.buildingId
          },
          context,
          info
        })
      }
    }
  },
  Building: {
    id: {
      selectionSet: /* GraphQL */`
      {
        id
        name
        streetAddress1
        streetAddress2
        city
        country
        stateProvince
        zipPostalCode

      }
      `,
      resolve: async (root, _args, context, info) => {
        return await context.Buildings.Query.building({
          root,
          args: {
            id: root.id,
          },
          context,
          info
        })
      }
    }
  },
}


export default resolvers
