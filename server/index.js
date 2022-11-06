const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type DeliveryOption {
        id: Int
        title: String
        price: Int
        default: Boolean
    }

    type Item {
        id: Int
        title: String
        seller: String
        price: Int
        image: String
        delivery: [DeliveryOption]
    }

    type Query {
        items: [Item]
    }
`

const items = [
    {
        id: 1,
        title: 'Fancy Slippers',
        seller: 'Slipper4U',
        price: 1250,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                id: 1,
                title: 'Free',
                price: 0,
                default: true
            },
            {
                id: 2,
                title: 'Priority',
                price: 1000,
                default: false
            }
        ]
    },
    {
        id: 2,
        title: 'Nice Slippers',
        seller: 'Fancy Slipper Shop',
        price: 850,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                id: 3,
                title: 'Free',
                price: 0,
                default: false
            },
            {
                id: 4,
                title: 'Priority',
                price: 1000,
                default: true
            }
        ]
    },
    {
        id: 3,
        title: 'Sporty Trainers',
        seller: 'Trainer Life',
        price: 2850,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                id: 1,
                title: 'Free',
                price: 0,
                default: true
            }
        ]
    }
]

const resolvers = {
    Query: {
        items: () => items
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
