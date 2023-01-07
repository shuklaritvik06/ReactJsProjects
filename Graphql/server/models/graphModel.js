const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.aeiaykn.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log(`Connected DB`);
  }).catch((err)=>{
    console.log(err);
  });

const EmployeeSchema = mongoose.Schema({
    name: String,
    dept: String,
    salary: Number,
    deptId: String
})

const TeamsSchema = mongoose.Schema({
    deptId: String,
    deptName:String
});

const EmployeeModel = mongoose.model("employee",EmployeeSchema);
const TeamsModel = mongoose.model("team",TeamsSchema);

module.exports = {
    EmployeeModel,
    TeamsModel
}