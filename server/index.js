const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type DeliveryOption {
        id: ID!
        title: String
        price: Int
        default: Boolean
    }

    type DiscountCode {
        id: ID!
        code: String
        discount: Int
        type: String
    }

    type Item {
        id: ID!
        title: String
        seller: String
        price: Int
        image: String
        delivery: [DeliveryOption]
    }

    type User {
        id: ID!
        email: String!
        password: String!
        name: String
        phone: String
        addressLine: String
        town: String
        postcode: String
    }

    type UserLoginResponse {
        success: Boolean!
        message: String
        user: [User]
    }

    type Mutation {
        login(email: String!): UserLoginResponse!
        register(
            email: String!
            name: String
            phone: String
            addressLine: String
            town: String
            postcode: String
        ): UserLoginResponse!
    }

    type Query {
        items: [Item]
        discountCodes: [DiscountCode]
        discountCode(code: String!): DiscountCode
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

const user = [
    {
        id: 1,
        email: 'testbuyer@email.com',
        name: 'Test Buyer',
        phone: '07000100000',
        addressLine: 'Houses of Commons',
        town: 'London',
        postcode: 'SW1A 1AA'
    },
    {
        id: 2,
        email: 'anotherbuyer@email.com',
        name: 'Another Buyer',
        phone: '08000100000',
        addressLine: 'Parliament',
        town: 'Westminster',
        postcode: 'SW1A 1AA'
    }
]

const discountCodes = [
    {
        id: 1,
        code: 'TENPOFF',
        discount: 10,
        type: 'percentage'
    },
    {
        id: 2,
        code: 'TENOFF',
        discount: 1000,
        type: 'amount'
    }
]

const resolvers = {
    Query: {
        items: () => items,
        discountCodes: () => discountCodes,
        discountCode: async (_, { code }) => discountCodes.find((c) => c.code == code)
    },
    Mutation: {
        login: async (_, { email }) => {
            const authUser = user.find((u) => u.email == email)

            if (!authUser) {
                return {
                    success: false,
                    message: 'Your password or email is invalid'
                }
            }

            if (authUser) {
                return {
                    success: true,
                    message: 'Logged in successfully',
                    user: [authUser]
                }
            }
        },
        register: async (_, { email, name, phone, addressLine, town, postcode }) => {
            const authUser = user.find((u) => u.email == email)

            if (authUser) {
                return {
                    success: false,
                    message: 'A user already exists with this email'
                }
            }

            return {
                success: true,
                message: 'Account created successfully',
                user: [
                    {
                        id: 3,
                        email,
                        name,
                        phone,
                        addressLine,
                        town,
                        postcode
                    }
                ]
            }
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
