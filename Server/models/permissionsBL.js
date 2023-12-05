const Per = require('./permissionModel');


exports.getAllPers = function()
{
    return new Promise((resolve,reject) =>
    {
        Per.find({}, function(err, pers)
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

exports.getPer = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Per.findById(id, function(err,per)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(per)
            }
        })
    });   
}

exports.addPer = function(obj)
{
    const newPer = new Per({
        userID : obj.userID,
        permissions : obj.permissions,
        });

    newPer.save(function(err)
    {
        return new Promise((resolve,reject) =>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve('Created!')
            }
        })
    })
}

exports.updatePer = function(id,obj)
{
    return new Promise((resolve,reject) =>
    {
        Per.findByIdAndUpdate(id,
            {
                userID : obj.userID,
                permissions : obj.permissions,
            } , function(err)
            {
                if(err)
                {
                    reject(err);
                }
                else
                {
                    resolve('Updated!')
                }
            })
    })
}


exports.deletePer = function(id)
{
    return new Promise((resolve,reject) =>
    {
        Per.findByIdAndDelete(id, function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("Deleted")
            }
        })
    });   
}




