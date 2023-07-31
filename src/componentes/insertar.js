const mongoose = require('mongoose');



// Define a schema for your data
const userSchema = new mongoose.Schema({
  cedula: String,
  nombre: String,
  email: String,
  tipoid: String,
  tipote: String,
  telefono: Number,
  modelo:String,
  placa:String,
  marca:String,
  nivel:String,
  descripcion:String,
  tiposervicio:String,
  orden:Number ,
  fecha:String,
});

const UserModel = mongoose.model('User', userSchema);

const user = new UserModel({
  cedula: String,
  nombre: String,
  email: String,
  tipoid: String,
  tipote: String,
  telefono: Number,
  modelo:String,
  placa:String,
  marca:String,
  nivel:String,
  descripcion:String,
  tiposervicio:String,
  orden:Number ,
  fecha:String,
  });
  
  user.save((err, data) => {
    if (err) {
      console.error('Error inserting data:', err);
    } else {
      console.log('Data inserted successfully:', data);
    }
  });

  UserModel.find({}, (err, users) => {
    if (err) {
      console.error('Error querying data:', err);
    } else {
      console.log('All users:', users);
    }
  });

  UserModel.deleteOne({ name: 'orden' }, (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
    } else {
      console.log('Data deleted successfully:', result);
    }
  });

