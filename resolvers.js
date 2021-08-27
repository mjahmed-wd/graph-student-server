const Post = require("./Post");
const Student = require("./students/Student");
const Subject = require("./Subjects/Subjects");

//Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAll: async () => {
      return await Post.find();
    },
    getAllStudent: async () => {
      return await Student.find();
    },
    getAllSubjects: async () => {
      return await Subject.find();
    },
  },
  Mutation: {
    createPost: async (parent, args, context, info) => {
      const { title, description } = args.post;
      const post = await new Post({ title, description }).save();
      return post;
    },
    updatePost: async (parent, args, context, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const post = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return post;
    },

    deletePost: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
    createStudent: async (parent, args, context, info) => {
      const { name, email, phone, dateOfBirth, takenSubjects } = args.student;
      const student = await new Student({ name, email, phone, dateOfBirth, takenSubjects , msg: "Data Added Successfully" }).save();
      return student;
    },
    
    updateStudent: async (parent, args, context, info) => {
      const { id } = args;
      const { name, email, phone, dateOfBirth, takenSubjects} = args.student;
      const student = await Student.findByIdAndUpdate(
        id,
        { name, email, phone, dateOfBirth, takenSubjects },
        { new: true }
      );
      return student;
    },
    deleteStudent: async (parent, args, context, info) => {
      const { id } = args;
      await Student.findByIdAndDelete(id);
      return "Deleted";
    },
    createSubject: async (parent, args, context, info) => {
      const { value , label } = args.subject;
      const subject = await new Subject({ value , label, msg: "Data Added Successfully" }).save();
      return subject;
    },
    updateSubject: async (parent, args, context, info) => {
      const { id } = args;
      const { value , label } = args.subject;
      const student = await Student.findByIdAndUpdate(
        id,
        { value , label },
        { new: true }
      );
      return student;
    },
    deleteSubject: async (parent, args, context, info) => {
      const { id } = args;
      await Subject.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
