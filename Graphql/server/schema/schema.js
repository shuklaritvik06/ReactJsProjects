const graphql = require("graphql");
const { EmployeeModel, TeamsModel } = require("../models/graphModel");

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = graphql;

const Employee = new GraphQLObjectType({
  name: "employee",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    deptId: { type: GraphQLString },
    salary: { type: GraphQLInt },
    teams: {
      type: new GraphQLList(Teams),
      resolve(parent, args) {
        return TeamsModel.find({ deptId: parent.deptId })
      },
    },
  }),
});

const Teams = new GraphQLObjectType({
  name: "Teams",
  fields: () => ({
    deptId: { type: GraphQLString },
    deptName: { type: GraphQLString },
    employee: {
      type: new GraphQLList(Employee),
      resolve(parent, args) {
        return EmployeeModel.find({ deptId: parent.deptId })
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    employee: {
      type: new GraphQLList(Employee),
      args: { deptId: { type: GraphQLString } },
      resolve(parent, args) {
         return EmployeeModel.find({ deptId: args.deptId })
      },
    },
    team: {
      type: new GraphQLList(Teams),
      args: {  deptId: { type: GraphQLString } },
      resolve(parent, args) {
        return TeamsModel.find({deptId: args.deptId })
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addEmployee: {
      type: Employee,
      args: {
        name: { type: GraphQLString },
        deptId: { type: GraphQLString },
        salary: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return new EmployeeModel({
          name: args.name,
          deptId: args.deptId,
          salary: args.salary,
        }).save();
      },
    },
    addTeams: {
      type: Teams,
      args: {
        deptId: { type: GraphQLString },
        deptName: { type: GraphQLString },
      },
      resolve(parent, args) {
        return new TeamsModel({
          deptId: args.deptId,
          deptName: args.deptName,
        }).save();
      },
    },
    delTeam:{
      type: Teams,
      args: {
        deptId: { type: GraphQLString },
      },
      resolve(parent, args) {
        return TeamsModel.deleteOne({deptId: args.deptId})
      }
    },
    delEmployee:{
      type: Employee,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) { 
        return EmployeeModel.deleteOne({id: args.id})
      }
  }
}});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
