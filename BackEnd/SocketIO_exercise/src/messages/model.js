export default (seq, DT) => {
 const msg = seq.define('message', {
   id: {
      type: DataType.STRING,
      primaryKey: true,
    },
    message: {
      type: DataType.STRING,
      },
    userName: {
      type: DataType.STRING,
    }
 });
 return msg;
};