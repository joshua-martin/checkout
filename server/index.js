const { ApolloServer, gql } = require('apollo-server');


const typeDefs = gql`
    type DeliveryOption {
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
        title: 'Fancy Slippers',
        seller: 'Slipper4U',
        price: 12.50,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                title: 'Free',
                price: 0.00
            },
            {
                title: 'Priority',
                price: 10.00
            }
        ]
    },
    {
        title: 'Nice Slippers',
        seller: 'Slipper4U',
        price: 8.50,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
                title: 'Free',
                price: 0.00
            },
            {
                title: 'Priority',
                price: 10.00
            }
        ]
    },
    {
        title: 'Sporty Trainers',
        seller: 'Trainer Life',
        price: 28.50,
        image: 'https://picsum.photos/300/300',
        delivery: [
            {
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