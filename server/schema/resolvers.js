const { User, Horse , Schedule} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
  if (context.user) {
    const userData = await User.findOne({ _id: context.user._id })
      .select('-__v -password')
      .populate('horse')
      .populate('schedule');

    return userData;
  }

  throw new AuthenticationError('Not logged in');
},
     Users: async () => {
      return User.find()
      
    },
    User: async (parent, { username }) => {
      return User.findOne({ username })
 
    },
    Horses: async (parent, { ownerName }) => {
  const params = ownerName ? { ownerName } : {};
  return Horse.find(params).sort({ _id: -1 });
},
 HorseDate: async (parent, { visitReason }) => {
  const params = visitReason ? { visitReason } : {};
  return Horse.find(params).sort({ _id: -1 });
},
 Horse: async (parent, { _id }) => {
      return Horse.findOne({ _id });
    },
Schedule: async () => {
    return Schedule.find().sort({ createdAt: -1 });
      
    },
    OwnerSchedule: async (parent, { ownerName }) => {
  const params = ownerName ? { ownerName } : {};
  return Schedule.find(params).sort({ createdAt: -1 });
},
HorseSchedule: async (parent, { horseName }) => {
  const params = horseName ? { horseName } : {};
  return Schedule.find(params).sort({ createdAt: -1 });
},
    
  },    


   Mutation: {
  addUser: async (parent, args) => {
  const user = await User.create(args);
  const token = signToken(user);

  return { token, user };
},
addHorse: async (parent, args) => {
  const horse = await Horse.create(args);
  

  return horse;
},
addSchedule: async (parent, args) => {
  const schedule = await Schedule.create(args);


  return schedule;
},
updateSchedule: async (parent, args)=>{
return Schedule.findByIdAndUpdate({_id: args._id},
  {visitDay: args.visitDay, visitMonth: args.visitMonth, visitYear: args.vistYear, 
    visitReason:args.visitReason, horseName: args.horseName, ownerName: args.ownerName },
    {new:true})
},

updateHorse: async (parent, args)=>{
  return Horse.findByIdAndUpdate({_id: args._id}, {name: args.name, ownerName: args.ownerName, ownerPhone: args.ownerPhone, feed: args.feed
  ,vaccineDate: args.vaccineDate, shoeDate: args.shoeDate, barName:args.barnName})
},

deleteHorse: async (parent, args)=>{
  return Horse.findByIdAndDelete({_id: args._id})
},

deleteSchedule: async (parent, args)=>{
  return Schedule.findByIdAndDelete({_id: args._id})
},

login: async (parent, { email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AuthenticationError('Incorrect credentials');
  }

  const correctPw = await user.isDirectSelected(password);

  if (!correctPw) {
    throw new AuthenticationError('Incorrect credentials');
  }

  const token = signToken(user);
  return { token, user };
}
  }
};

module.exports = resolvers;