const { gql } = require("apollo-server-express");
//Queries
const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type Student {
    id: ID
    name: String
    email: String
    phone: String
    dateOfBirth: String
    takenSubjects: [Subject]
  }

  input PostInput {
    title: String
    description: String
  }
  input StudentInput {
    name: String
    email: String
    phone: String
    dateOfBirth: String
    takenSubjects: [SubjectInput]
  }

  
  type Subject {
    id: ID
    value: String
    label: String
  }
  input SubjectInput {
    value: String
    label: String
  }
  type Query {
    hello: String
    getAll: [Post]
    getAllStudent: [Student]
    getAllSubjects: [Subject]
  }

  type Mutation {
    createPost(post: PostInput): Post
    updatePost(id: String, post: PostInput): Post
    deletePost(id: String): String
    createStudent(student: StudentInput): Student
    updateStudent(id: String, student: StudentInput): Student
    deleteStudent(id: String): String
    createSubject(subject: SubjectInput): Subject
    updateSubject(id: String, subject: SubjectInput): Subject
    deleteSubject(id: String): String
  }
`;

module.exports = typeDefs;
