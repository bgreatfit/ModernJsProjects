function  EasyHttp(){
    this.http  = new XMLHttpRequest()
}
function reqListner(){
 const data = JSON.parse(this.responseText);
 console.log(data);
}
function reqError(err){
   console.log('Fetch Error',err);
}

EasyHttp.prototype.fetch = function (url,callback){
    //open conn
    //load req
    this.http.onload = reqListner;
    this.http.onerror = reqError;
        
    this.http.open('GET',url,true);
    
    this.http.send();
}
// EasyHttp.prototype.get = function (url,callback){
//     //open conn
//     this.http.open('GET',url,true);
//     //load req
//     this.http.onload = function(){
//         if(this.status = 200){
//             callback(null,this.responseText);
//         }else{
//             callback(Error,this.status);
//         }
        
//     }
//     this.http.send();
// }
//using promise
EasyHttp.prototype.get = function (url){
    self = this;
    return new Promise(function(resolve,reject){
         //open conn
         self.http.open('GET',url,true);
        //load req
        self.http.onload = function(){
            if(self.status = 200){
                resolve(self.http.responseText);
            }else{
                reject(Error,self.http.status);
            }
        
    }
    self.http.send();
    });
   
}
EasyHttp.prototype.post = function (url,data,callback){
    //open conn
    this.http.open('POST',url,true);
    //load req
    this.http.onload = function(){
        if(this.status = 200){
            callback(null,this.responseText);
        }else{
            callback(Error,this.status);
        }
        
    }
    this.http.send(JSON.stringify(data));
}