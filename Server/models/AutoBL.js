const User = require('./autoModel');


exports.getAllAutos = function()
{
    return new Promise((resolve,reject) =>
    {
        User.find({}, function(err, pers)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(pers)
            }
        })
    });
}

// exports.getUser = function(id)
// {
//     return new Promise((resolve,reject) =>
//     {
//         User.findById(id, function(err,per)
//         {
//             if(err)
//             {
//                 reject(err);
//             }
//             else
//             {
//                 resolve(per)
//             }
//         })
//     });   
// }

// exports.addUser = function(obj)
// {
//     const newUsr = new User({
//         firstName : obj.fname,
//         lastName : obj.lname,
//         created : obj.created,
//         sessionTimeOut : obj.sessionTimeOut
//     });

//     newUsr.save(function(err)
//     {
//         return new Promise((resolve,reject) =>
//         {
//             if(err)
//             {
//                 reject(err);
//             }
//             else
//             {
//                 resolve('Created!')
//             }
//         })
//     })
// }

// exports.updateUser = function(id,obj)
// {
//     return new Promise((resolve,reject) =>
//     {
//         User.findByIdAndUpdate(id,
//             {
//                 firstName : obj.fname,
//                 lastName : obj.lname,
//                 created : obj.created,
//                 sessionTimeOut : obj.sessionTimeOut
//             } , function(err)
//             {
//                 if(err)
//                 {
//                     reject(err);
//                 }
//                 else
//                 {
//                     resolve('Updated!')
//                 }
//             })
//     })
// }


// exports.deleteUser = function(id)
// {
//     return new Promise((resolve,reject) =>
//     {
//         User.findByIdAndDelete(id, function(err)
//         {
//             if(err)
//             {
//                 reject(err);
//             }
//             else
//             {
//                 resolve("Deleted")
//             }
//         })
//     });   
// }




