import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone' 

/**
 * 定义了一个 Student 的对象类型，有 id、name、sex、age 这几个字段
 * 定义了一个 Teacher 的对象类型，有 id、name、age、subject、students 这几个字段。students 字段是他教的学生的信息
 * 然后定义了查询的入口，可以查 students 和 teachers 的信息
 * 这样就是一个 schema
 */
const typeDefs = `
    type Student {
        id: String,
        name: String,
        sex: Boolean
        age: Int
    }

    type Teacher {
        id: String,
        name: String,
        age: Int,
        subject: [String],
        students: [Student]
    }

    type Query {
        students: [Student],
        teachers: [Teacher],
        studentsbyTeacherName(name: String!): [Student]
    }

    type Res {
        success: Boolean
        id: String
    }
    
    type Mutation {
        addStudent(name:String! age:Int! sex:Boolean!): Res
    
        updateStudent(id: String! name:String! age:Int! sex:Boolean!): Res
    
        deleteStudent(id: String!): Res
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;

const students = [
    {
        id: '1',
        name: async () => {
            await '取数据';
            return '光光'
        },
        sex: true,
        age: 12
    },
    {
        id: '2',
        name:'东东',
        sex: true,
        age: 13
    },
    {
        id: '3',
        name:'小红',
        sex: false,
        age: 11
    },
];

const teachers = [
    {
        id: '1',
        name: '神光',
        sex: true,
        subject: ['体育', '数学'],
        age: 28,
        students: students
    }
]

async function addStudent (_, { name, age, sex }) {
    students.push({
        id: '一个随机 id',
        name,
        age,
        sex
    });

    return {
        success: true,
        id: 'xxx'
    }
}

async function updateStudent (_, { id, name, age, sex }) {
    return {
        success: true,
        id: 'xxx'
    }
}

async function deleteStudent (_, { id }) {
    return {
        success: true,
        id: 'xxx'
    }
}

// resolver 是取对象类型对应的数据的，每个字段都可以写一个 async 函数，里面执行 sql、访问接口等都可以，最终返回取到的数据。
const resolvers = {
    Query: {
        students: () => students,
        teachers: () => teachers,

        // studentsbyTeacherName 字段的 resolver 是一个异步函数，里面执行了查询，然后返回了查到的学生信息。
        studentsbyTeacherName: async (...args) => {
            console.log(args);
    
            await '执行了一个异步查询'
            return students
        }
    },
    Mutation: {
        addStudent: addStudent,
        updateStudent: updateStudent,
        deleteStudent: deleteStudent
    }
};


// 这样有了 schema 类型定义，有了取数据的 resovler，就可以跑起 graphql 服务了。
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
  
const { url } = await startStandaloneServer(
    server,
    {
        listen: {
            port: 4000
        },
    }
);
  
console.log(`🚀  Server ready at: ${url}`);
