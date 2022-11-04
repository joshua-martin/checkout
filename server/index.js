const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
    type DeliveryOption {
        id: Int
        title: String
        price: Float
    }

    type Item {
        id: Int
        title: String
        seller: String
        price: Float
        image: String
        delivery: [DeliveryOption]
    }

    type Query {
        items: [Item]
    }
`;

const items = [
    {
        id: 1,
        title: 'Fancy Slippers',
        seller: 'Slipper4U',
        price: 12.50,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                id: 1,
                title: 'Free',
                price: 0.00
            },
            {
                id: 2,
                title: 'Priority',
                price: 10.00
            }
        ]
    },
    {
        id: 2,
        title: 'Nice Slippers',
        seller: 'Slipper4U',
        price: 8.50,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                id: 1,
                title: 'Free',
                price: 0.00
            },
            {
                id: 2,
                title: 'Priority',
                price: 10.00
            }
        ]
    },
    {
        id: 3,
        title: 'Sporty Trainers',
        seller: 'Trainer Life',
        price: 28.50,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                id: 1,
                title: 'Free',
                price: 0.00
            }
        ]
    }
];

const resolvers = {
    Query: {
        items: () => items,
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});