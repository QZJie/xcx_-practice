

const request = (parameter)=>{
    return new Promise((resove,reject)=>{
        wx.request({
            ...parameter,
            success: (result) => {
                resove(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {}
        });
    })
    
      
}

module.exports = {
    request:request
}

